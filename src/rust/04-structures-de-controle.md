---
title: 04. Structures de contrôle
author: Ludwig Chieng
basedOn: le MOOC de Catalin Stefan
category: Rust
tags: [logiciel, application, web, rust]
licence: potentiellement (c) par les auteurs d'origine

layout: sheet
---

# Structures de contrôle

[[toc]]


## Match


```rust
fn main() {
    country(44);
    country(34);
    country(125);
    country(-15);
}
 
fn country(code: i32) {
    let country = match code {
        44 => "UK",
        34 => "Spain",
        1..=999 => "unknown",
        _ => "invalid"
    };
    println!("Country is {}", country);
}
```


## Pattern matching

```rust
fn main() {
    for i in 0..15 {
        println!("{}. I have {} oranges", i, get_oranges(i));
    }
}
 
fn get_oranges(amount: i32) -> &'static str {
    return match amount {
        0 => "no",
        1 | 2 => "one or two",
        3..=7 => "a few",
        _ if (amount % 2 == 0) => "an even amount of",
        _ => "lots of"
    }
}
```

Tuples :

```rust
fn main() {
    let point = (6, 0);
 
    match point {
        (0, 0) => println!("origin"),
        (x, 0) => println!("x axis ({}, 0)", x),
        (0, y) => println!("y axis (0, {})", y),
        (x, y) => println!("({}, {})", x, y),
    }
}
```


## Boucle for

```rust
fn main() {
    for i in 1..4 { // for 1, 2, 3
        println!("{0} * {0} = {1}", i, i * i);
    }
 
    let pets = ["cat", "dog", "chihuahua", "bear", "hamster"];
    for pet in pets.iter() {
        if pet == &"chihuahua" {
            println!("{} barks too much", pet);
        } else {
            println!("I love my {}", pet);
        }
    }
 
    for (pos, i) in (594..603).enumerate() {
        println!("idx: {0} -> value: {1} ", pos, i);
    }
}
```


## Boucle while et loop

```rust
while /*{condition}*/ {
}
```


```rust
loop {
    if /*{condition}*/ {
        break
    }
}
```
