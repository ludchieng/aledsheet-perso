---
title: 01. Fondamentaux
author: Ludwig Chieng
category: Rust
tags: [logiciel, application, web, rust]
licence: CC-BY-SA

layout: sheet
---

# Fondamentaux de Rust

[[toc]]


## Cargo, le gestionnaire de packages

```
cargo new my_project
cargo build
cargo run
cargo run --release
cargo clean
cargo check
cargo doc
```

Les packages d'un projet sont spécifiés dans Cargo.toml
```
[dev-dependencies]
audrey = "0.3"
futures = "0.3"
```


## Exemple simple : entrée utilisateur

```rust
use std::io;
 
fn main() {
    let mut input = String::new();
    println!("Say something");
    match io::stdin().read_line(&mut input) {
        Ok(_) => {
            println!("You said {}", input);
        },
        Err(e) => {
            println!("Something went wrong {}", e);
        }
    }
}
```


## Commentaires

`///` et `//!` sont utilisés pour la doc (markdown possible)

Pour générer la doc : `cargo doc`

[https://github.com/rust-lang/rfcs/blob/master/text/1574-more-api-documentation-conventions.md](https://github.com/rust-lang/rfcs/blob/master/text/1574-more-api-documentation-conventions.md)


## Les macros println et format

```rust
println!("Hello, world!");

println!("My name is {} and I'm {} years old", "Alex", 29);
println!("a + b = {}", 3 + 9);

println!("{0} has a {2} and {0} has a {1}", "Alex", "cat", "dog");
println!("{name} {surname}", surname="Smith", name="Alex");

println!("binary: {:b}, hex: {:x}, octal: {:o}", 50, 50, 50);
println!("array: {:?}", [1, 2, 3]);
```


```rust
let s = format!("Hi {} how are you?", "Lili");
```


## Variables

```rust
let (a, b, c) = (43, 85, "red");
```

Une variable non utilisée doit être préfixée de `_` \
Pour retirer le warning, mettre :

```rust
#[allow(unused_variables)]
#[allow(unused_assignments)]
```

Types : ex. : i8, u8, f32, i128, isize (dépend de l’architecture du compilateur) :

```rust
let n: f32 = 4; // mismatched type error
let m: f32 = 4.0;
```

```rust
let m: i128 = 10_000_000_000_000;
let m: char = '\u{1f601}';
```


### String slice

```rust
let s: &str = "Hello!";
```


### String object

```rust
let s1 = String::new();
let s2 = String::from("Hello!");

s1.push(' '); // char
s1.push_str("the dog"); // str

let new_dog = s1.replace("dog", "cat");
```

Autres méthodes : split, splite_whitespace, chars


## Constantes

Valeur avec un scope global

```rust
const COUNT: i32 = 300;
```
