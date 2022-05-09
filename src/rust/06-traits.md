---
title: 06. Traits
author: Ludwig Chieng
basedOn: le MOOC de Catalin Stefan
category: Rust
tags: [logiciel, application, web, rust]
licence: potentiellement (c) par les auteurs d'origine

layout: sheet
---

# Traits

[[toc]]

Similaire au concept de classe abstraite ou d'interface.

Un *trait* est appliqué à une structure.

Il ajoute une définition à une structure. Il peut aussi apporter une implémentation pour cette définition.


```rust
trait Trait_Name {
   fn must_implement(&self) -> i32; // definition only
   fn do_action(&self) { ... } // default implementation that can be overriden
   fn do_non_instance_action() { ... } // same but callable not from an instance
}

```

```rust
impl Trait_Name for Person {
   fn must_implement(&self) -> { 42 }
}
```

```rust
// Can provide a constructor
trait Name {
   fn new(name: &str) -> Self;
}
```

## Cas pratique

```rust
struct RustDev {
    awesome: bool
}

struct JavaDev {
    awesome: bool
}

trait Developer {
    fn new(awesome: bool) -> Self;
    fn language(&self) -> &str;
    fn say_hello(&self) { println!("Hello world!") }
}

impl Developer for RustDev {
    fn new(awesome: bool) -> Self {
        RustDev { awesome: awesome }
    }

    fn language(&self) -> &str {
        "Rust"
    }

    fn say_hello(&self) {
        println!("println!(\"Hello world!\");");
    }
}

impl Developer for JavaDev {
    fn new(awesome: bool) -> Self {
        JavaDev { awesome: awesome }
    }

    fn language(&self) -> &str {
        "Java 1.8"
    }

    fn say_hello(&self) {
        println!("System.out.println(\"Hello world!\");");
    }
}

fn main() {
    // let r = RustDev { awesome: true};
    let r = RustDev::new(true);
    let j = JavaDev::new(false);
    println!("{}", r.language());
    r.say_hello();
    println!("{}", j.language());
    j.say_hello();
}
```

## Application aux fonctions génériques

Les fonctions generiques peuvent être limitées/spécifiées par un *trait*.

```rust
fn color<T: Colorable> (a: T) {
   ...
}
```

```rust
trait Bark {
    fn bark(&self) -> String;
}

struct Dog {
    species: &'static str // &'static: voir variable lifetime
}

struct Cat {
    color: &'static str
}

impl Bark for Dog {
    fn bark(&self) -> String {
        return format!("{} barking", self.species)
    }
}

fn bark_it<T: Bark>(b: T) {
    println!("{}", b.bark())
}

fn main() {
    let dog = Dog { species: "retriever" };
    let cat = Cat { color: "black" };
    bark_it(dog);
    bark_it(cat); // error: the trait bound 'Cat: Bark' is not satisfied

```


## Retourner un *trait*

```rust
struct Dog {}
struct Cat {}

trait Animal {
    fn make_noise(&self) -> &'static str;
}

impl Animal for Dog {
    fn make_noise(&self) -> &'static str {
        "woof"
    }
}

impl Animal for Cat {
    fn make_noise(&self) -> &'static str {
        "meow"
    }
}

fn get_animal(rand_number: f64) -> Box<dyn Animal>
// impossible de retourner seulement le trait: Animal
{
    if rand_number < 1.0 {
        Box::new(Dog {} )
    } else {
        Box::new( Cat {} )
    }
}

fn main() {
    println!("The animal says {}", get_animal(0.5).make_noise());
    println!("The animal says {}", get_animal(2.0).make_noise());
}
```
Il est impossible de retourner seulement le trait `Animal` pour des raisons de ***memory guarantees***. Rust doit connaître la taille mémoire de la valeur retournée par la fonction à la compilation.

Une des échappatoires est de retourner une `Box<dyn Animal>`.


## Ajouter des *traits* à une structure existante

Il est possible d'ajouter un *trait* à une structure standard de Rust.

```rust
trait Summable<T> {
    fn sum(&self) -> T;
}

impl Summable<i32> for Vec<i32> {
    fn sum(&self) -> i32 {
        let mut sum: i32 = 0;
        for i in self {
            sum += *i;
        }
        sum
    }
}

fn main() {
    let a = vec![1, 2, 3, 4, 5];
    println!("sum = {}", a.sum());

    let b = vec![1.0, 2.0, 3.0];
    println!("sum float = {}", b.sum()); // error: Unresolved reference: 'sum'
}
```


## Surcharge d'opérateurs

Permet d'implémenter les opérateurs standards pour nos structures.

Opérateurs standards:  [https://doc.rust-lang.org/core/ops](https://doc.rust-lang.org/core/ops)

```rust
use std::ops::Add;

#[derive(Debug)] // permet le println! {:?}
struct Point {
    x: f64,
    y: f64
}

impl Add for Point {
    type Output = Point;

    fn add(self, other: Self) -> Self::Output {
        Point {
            x: self.x + other.x,
            y: self.y + other.y
        }
    }
}

fn main() {
    let p1 = Point { x: 1.3, y: 4.6 };
    let p2 = Point { x: 3.7, y: 1.4 };
    let p3 = p1 + p2;
    println!("{:?}", p3);
}
```


## Static dispatch

Un *trait* générique est converti dans les types demandés à la compilation.

```rust
trait Duplicateable {
    fn dupl(&self) -> String;
}

impl Duplicateable for String {
    fn dupl(&self) -> String {
        format!("{0}{0}", *self)
    }
}

impl Duplicateable for i32 {
    fn dupl(&self) -> String {
        format!("{}", *self * 2)
    }
}

fn duplicate<T: Duplicateable> (x: T) { // static dispatch à la compilation
    println!("{}", x.dupl());
}

fn main() {
    let a = 42;
    let b = "Hi John ".to_string();
    duplicate(a);
    duplicate(b);
}
```

La fonction `duplicate<>()` sera disponible à la fois pour le type `String` et `i32`. Ces deux types sont *monomorphisé* par le trait `Duplicateable`.


## Dynamic dispatch

Un *trait* générique est converti dans les types demandés à l'exécution.

```rust
trait Duplicateable {
    fn dupl(&self) -> String;
}

impl Duplicateable for String {
    fn dupl(&self) -> String {
        format!("{0}{0}", *self)
    }
}

impl Duplicateable for i32 {
    fn dupl(&self) -> String {
        format!("{}", *self * 2)
    }
}

fn duplicate(x: &dyn Duplicateable) {
    println!("{}", x.dupl());
}

fn main() {
    let a = 42;
    let b = "Hi John ".to_string();
    duplicate(&a);
    duplicate(&b);
}
```
