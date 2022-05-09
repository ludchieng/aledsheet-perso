---
title: 02. Fonctions, module, crate et random
author: Ludwig Chieng
basedOn: le MOOC de Catalin Stefan
category: Rust
tags: [logiciel, application, web, rust]
licence: potentiellement (c) par les auteurs d'origine

layout: sheet
---

# Concepts de base

[[toc]]


## Functions

### Pass by value

```rust
fn say_hello(name: &str) -> String {
    let greeting = format!("Hello {}", name);
    greeting
}
```


### Pass by reference

```rust
fn main() {
    let mut name = "John";
    let mut greeting = say_hello(&mut name);
}

fn say_hello(name: &mut &str) -> String {
    format!("Hello {}", name)
}
```


```rust
fn main() {
    let mut name = "John";
    say_hello(&mut name);
    println!("Hello {}", name);
}
 
fn say_hello(name: &mut &str) {
    println!("Hello {}", name);
    *name = "Alex";
}
```


## Module

Dans le même fichier :

```rust
fn main(){
    clean::perform_clean();
    clean::files::clean_files()
}
 
mod clean {
    pub fn perform_clean() {
        println!("Cleaning hdd");
    }
 
    pub mod files {
        pub fn clean_files() {
            println!("Removing unused files");
        }
    }
}

```

Dans deux fichiers séparés

```rust
// src/main.rs
mod player;
 
fn main(){
    player::play_movie("snatch.mp4");
    player::play_audio("rhcp.mp3");
}

```

```rust
// src/player.rs :
pub fn play_movie(name: &str) {
  println!("Playing movie {}", name);
}
 
pub fn play_audio(name: &str) {
  println!("Plaing audio {}", name);
}

```


## Crates

Conteneur de modules de 2 types :
* binary crate (= avec une fonction main)
* library crate


```rust
// src/main.rs
use crate::archive::arch::arch_file as arc;
// use crate::archive::arch::arch_file;
 
mod archive;
 
fn main() {
    arc("somefile.txt");
    // arch_file("somefile.txt");
}

```


```rust
// src/archive.rs
pub mod arch {
  pub fn arch_file(name: &str) {
      println!("Archiving file {}", name);
  }
}
```


## Random

```rust
use rand::Rng;
 
fn main() {
    let mut rng = rand::thread_rng();
    let a: f32 = rng.gen();
    let b = rng.gen_range(-0.5..0.5);
    println!("{}, {}", a, b);
}
```
