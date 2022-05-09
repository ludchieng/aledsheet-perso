---
title: 05. Scope, closures, HOFs, macros
author: Ludwig Chieng
basedOn: le MOOC de Catalin Stefan
category: Rust
tags: [logiciel, application, web, rust]
licence: potentiellement (c) par les auteurs d'origine

layout: sheet
---

# Scope, closures, HOFs, macros

[[toc]]


## Scope

Pas de fuite de mémoire, pas besoin de désallouer manuellement les variables.

```rust
{
    let a = 3;
}
println!("a = {}", a);  // error: not found in this scope
```

Les variables peuvent être déclarées comme globale mais elles ne sont pas sûre, en termes de gestion de la mémoire.

Lorsque c'est le cas, il faut les manipuler avec le mot clé `unsafe`.

```rust

let a = 3;

fn main() {
    unsafe { println!("{}", a); }
}
```

```rust
static mut R: i32 = 0;

fn main() {
    unsafe {
        R = 4;
        println!("R = {}", R); // R = 4
    }

    unsafe {
        println!("R = {}", R); // R = 4
    }
}
```


## Closures

Se comporte comme une fonction lambda

```rust
|a: i32, b: i32| println!("{}", a + b);
|a: i32, b: i32| -> { a + b };
let sum = |a: i32, b: i32| -> i32 { a + b };

println!("{}", sum(2,1)) // 3
```

Les closures utilisent la généricité.

``` rust
let wow = |x| println!("{}", x);
// le type de x est déterminé à la compilation
// à ce stade, wow est du type: fn(?)

wow(25); // wow(x: i32)
wow(true); // error: true n'est pas du type i32
```

``` rust
let wow = |x| println!("{}", x);
wow(true); // wow(x: bool)
wow(25); // error: 25 n'est pas du type bool
```


## Higer order functions

Fonction qui prend une autre fonction en paramètre.

``` rust

fn main() {
    let square = |a: i32| a * a;
    apply_and_print(square, 6);
}

fn apply_and_print(f: fn(i32) -> i32, a: i32) {
    println!("Result {}", f(a));
}
```

``` rust

fn main() {
    // Calculer la somme de tous les nombres carrés pairs inférieurs à 500
    let sum =
        (0..).map(|x| x * x)
            .take_while(|&x| x <= limit)
            .filter(|x| is_even(*x))
            .fold(0, |acc, x| acc + x);
}

fn is_even(x: i32) -> bool {
    x % 2 == 0
}
```


## Macros

Meta programmation: coder une macro, c'est écrire du code qui va écrire du code.

Les invocations de macros sont traitées à la compilation.

```rust
macro_rules! name {
    ($name: expr) => (println!("My name is {}!", $name))
}

macro_rules! hello {
    ($($name: expr),*) => ( $(println!("Hello {}!", $name);)* )
}
fn main() {
    name!("John");
    hello!("Alex", "Mary", "Carol");
    // My name is John
    // Hello Alex!
    // Hello Mary!
    // Hello Carol!
}
```

```rust
macro_rules! xy {
    (x => $e: expr) => (println!("X is {}", $e));
    (y => $e: expr) => (println!("Y is {}", $e));
}

fn main() {
    xy!(x => 5);      // X is 5
    xy!(y => 3 * 9);  // Y is 27
}
```

Dans la définition de la macro, on remarque le mot `expr`. On appelle cela un *designator*. Les designators possibles sont : expr, ident, block, stmt, pat, path, meta, ty, tt.


```rust
macro_rules! build_fn {
    ($fn_name: ident) => {
        fn $fn_name() {
            println!("{:?} was called", stringify!($fn_name));
        }
    }
}

fn main() {
    build_fn!(hey);
    hey(); // "hey" was called
}
```
