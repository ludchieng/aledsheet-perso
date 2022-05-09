---
title: 07. Gestion de la mémoire
author: Ludwig Chieng
basedOn: le MOOC de Catalin Stefan
category: Rust
tags: [logiciel, application, web, rust]
licence: potentiellement (c) par les auteurs d'origine

layout: sheet
---

# Gestion de la mémoire

[[toc]]


## Ownership

Principe : Un emplacement mémoire n'est accessible que par une seule variable.

Pour les types primitifs, le coût du transfert de la données est très faible, donc on se permet de copier la valeur.

Pour les types complexes, la copie pose problème pour des raisons de performance certes, mais aussi parce qu'on ne connaît pas sa taille en mémoire, lors de la compilation. Le principe d'ownership règle cet écueil. On dit alors que l'on transfert l'*ownership*.

```rust
fn main() {
    let i = 5;
    let j = i; // copie
    println!("{}", j);
    println!("{}", i);

    let v = vec![1, 2, 3, 4, 5];
    let w = v; // transfert d'ownership
    println!("{:?}", w);
    println!("{:?}", v); // error: borrow of moved value 'v'
}
```

`borrow of moved value 'v'` signifie que l'on tente d'accéder à une variable dont l'ownership a été déplacée. En effet, c'est `w` qui possède l'ownership sur l'emplacement mémoire du `vec`.

```rust
fn main() {
    let v = vec![1, 2, 3, 4, 5];

    let foo = |v: Vec<i32>| -> Vec<i32> {
        println!("Vector used in foo");
        v
    };

    let v = foo(v); // remarque: redéclarer 'v' n'est pas un problème
    println!("{:?}", v);
}
```

Lors de l'appel de `foo`, l'ownership est transférée à la fonction. A la fin de l'appel, le « return » fait que la fonction redonne l'ownership à une nouvelle variable `v`.


## Borrowing

Les variables peuvent emprunter l'ownership d'un emplacement mémoire pendant un certain temps. C'est le *borrowing*.

```rust
let a = 6;
let b = &a; // b pointe vers a
println!("{}", *b); // on lit la valeur pointée par b

a+= 2 // error
```

Dès que `b` est détruite, l'ownership revient à `a`.

```rust
fn main() {
    let mut a = 6;
    {
        let b = &mut a;
        println!("{}", *b);
        *b += 2;
    } // b est détruite
    println!("{}", a);
}
```

```rust
fn main() {
    let mut v = vec![1, 2, 3, 4, 5];
    for i in &v {
        println!("{}", i);
        v.push(6); // error
    }
}
```

Pour garantir l'intégrité de la mémoire, Rust empêche `v` d'être à la fois *borrowed* comme mutable et comme immutable.


## Lifetimes

*Lifetime* est une indication de la durée de vie d'une variable.

Spécifier un *lifetime* peut régler le problème suivant: la tentative d'accéder à un espace mémoire qui est devenu invalide, pour une raison quelconque (ex. : scope...)

```rust
#[derive(Debug)]
struct Person {
    name: String
}

#[derive(Debug)]
struct Dog<'l> { // lifetime avec le nom: l
    name: String,
    owner: &'l Person // même lifetime que pour 'Dog'
}

fn main() {
    println!("{}", get_str());

    let p1 = Person { name: String::from("John") };
    let d1 = Dog { name: String::from("Max"), owner: &p1};
    // 'p1' doit être valide aussi longtemps que 'd1' est valide
    // d'où le lifetime 'l
    println!("{:?}", d1);
}

fn get_str() -> &'static str
// static: la variable vie jusqu'à la fin de l'exécution du programme
{
    "Hello"
}
```

```rust
#[derive(Debug)]
struct Person {
    name: String
}

#[derive(Debug)]
struct Dog<'l> {
    name: String,
    owner: &'l Person
}

impl Person {
    fn get_name (&self) -> &String { 
 // fn get_name<'l> (&'l self) -> &'l String {
 // → équivalent car ajouté à la compilation
        &self.name
    }
}

fn main() {
    let p1 = Person { name: String::from("John") };
    let mut a: &String;
    {
        let p2 = Person { name: String::from("Mary")};
        a = p2.get_name(); // error: 'p2' does not live long enough
        a = p1.get_name();
    } // 'p2' est détruite alors que 'a' en a encore besoin
    println!("{}", a);
}
```


## Reference counted variables

Structure qui détient plusieurs références à une variable.

Elles peuvent être partagées à plusieurs endroit du code.

Elles nous permettent de déléguer les problématiques d'ownership et de borrowing à une structure tierce.

```rust
use std::rc::Rc;
fn do_smth(string: Rc<String>) ...
...
let var = Rc::new(String::from("test"));
var.clone();
...
```

```rust
// Compter le nombre de pointeurs
Rc::strong_count(&var);
```


```rust
use std::rc::Rc;

struct Car {
    brand: Rc<String>
}

impl Car {
    fn new(brand: Rc<String>) -> Car { Car { brand: brand} }
    fn drive(&self) {
        println!("{} is driving", &self.brand);
    }
}

fn main() {
    let brand = Rc::new(String::from("BMW"));
    println!("pointers: {}", Rc::strong_count(&brand)); // 1
    {
        let car = Car::new(brand.clone());
        car.drive();
        println!("pointers: {}", Rc::strong_count(&brand)); // 2
    }
    println!("My car is a {}", brand);
    println!("pointers: {}", Rc::strong_count(&brand)); // 1
}
```
