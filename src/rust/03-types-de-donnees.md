---
title: 03. Types de données
author: Ludwig Chieng
basedOn: le MOOC de Catalin Stefan
category: Rust
tags: [logiciel, application, web, rust]
licence: potentiellement (c) par les auteurs d'origine

layout: sheet
---

# Types de données

[[toc]]


## Arrays


```rust
fn main() {
    let primes = [2, 3, 5, 7, 11];
    let doubles: [f64; 4] = [2.0, 4.0, 6.0, 8.0];
    let numbers = [0;6]; // [0, 0, 0, 0, 0, 0]
    println!("{:?}", numbers); // debug printer
 
    for number in numbers.iter() {
        println!("{}", number);
    }
}
```


## Vectors

Pour faire simple, un Vector est un Array avec une taille variable

```rust
fn main() {
    let primes: Vec<i32> = Vec::new();
    let mut primes = vec![2, 3, 5];
    println!("{:?}", primes);
 
    primes.push(7);
    primes.remove(2);
 
    let mut numbers = vec![2;6]; // [2, 2, 2, 2, 2, 2]
 
    for number in numbers.iter() {
        println!("{}", number * number);
    }
}
```


## Slices

```rust
fn main() {
    let numbers = [1, 2, 3, 4, 5];
    let slice = &numbers[1..4];
    println!("{:?}", slice); // [2, 3, 4]
 
    let mut colors = ["red", "green", "blue", "pink"];
    println!("{:?}", colors); // ["red", "green", "blue", "pink"]
    update_colors(&mut colors[2..4]);
    println!("{:?}", colors); // ["red", "green", "yellow", "orange"]
}
 
fn update_colors(colors_slice: &mut [&str]) {
    colors_slice[0] = "yellow";
    colors_slice[1] = "orange";
}
```


## Tuples

```rust
fn main() {
    let mut person: (&str, i64, bool) = ("John", 27, true);
    println!("{:?}", person); // ("John", 27, true)
    println!("{:?}", person.0); // "John"
    person.0 = "Mike";
    println!("{:?}", person.0); // "Mike"
    let (name, age, employment) = person;
    println!("name: {}, age: {}, employed: {}", name, age, employment);
}
```


## Struct

```rust
#[derive(Debug)] // allows debug printer → {:?}
struct Employee {
    name: String,
    company: String,
    age: u32
}
```


```rust
impl Employee {
    fn fn_details(&self) -> String {
        format!("name: {}, age: {}, company: {} ", &self.name, &self.age, &self.company)
    }
 
    fn static_fn_detail() -> String {
        String::from("Details of a person")
    }
}
```


```rust
fn main() {
    let emp = Employee {
        name: String::from("John"),
        company: String::from("Google"),
        age: 35
    };
 
    println!("{:?}", emp);
    println!("{}", emp.name);
    println!("{}", emp.fn_details());
    println!("{}", Employee::static_fn_detail());
}
```


## Enums

```rust
#[derive(Debug)]
enum Colors {
    Red,
    Green,
    Blue
}
```


```rust
fn main() {
    let my_color = Colors::Red;
    println!("{:?}", my_color);
}
```


```rust
use crate::colors::{Red, Green, Blue};
 
fn main() {
    let my_color = Red;
    println!("{:?}", my_color);
}
```


```rust
enum Number {
    Zero,
    One,
    Two,
}
 
// enum with explicit discriminator
enum Color {
    Red = 0xff0000,
    Green = 0x00ff00,
    Blue = 0x0000ff,
}
 
fn main() {
    println!("zero is {}", Number::Zero as i32);
    println!("one is {}", Number::One as i32);
 
    println!("roses are #{:06x}", Color::Red as i32);
    println!("violets are #{:06x}", Color::Blue as i32);
}
```

Exemple plus complexe d’utilisation d’une enum pour implémentée une linked list : 

```rust
enum List {
    // Cons: Tuple struct that wraps an element and a pointer to the next node
    Cons(u32, Box<List>),
    // Nil: A node that signifies the end of the linked list
    Nil,
}
```

[https://doc.rust-lang.org/rust-by-example/custom_types/enum/testcase_linked_list.html ](https://doc.rust-lang.org/rust-by-example/custom_types/enum/testcase_linked_list.html )


## Generics

```rust
fn main() {
    let p1: Point<i32> = Point {X: 6, Y: 8};
    let p2: Point<f64> = Point {X: 3.25, Y: 8.63};
    println!("{:?}", p1);
    println!("{:?}", p2);
}
 
#[derive(Debug)]
struct Point<T> {
    X: T,
    Y: T
}
```
