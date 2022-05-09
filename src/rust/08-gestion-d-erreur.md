---
title: 08. Gestion d'erreurs
author: Ludwig Chieng
basedOn: le MOOC de Catalin Stefan
category: Rust
tags: [logiciel, application, web, rust]
licence: potentiellement (c) par les auteurs d'origine

layout: sheet
---

# Gestion d'erreurs

[[toc]]


## Manipuler des fichiers

```rust
use std::fs::{File, OpenOptions, remove_file};
use std::io::{Write, Read};

fn main() {
    // Créer et écrire
    let mut file = File::create("src/example.txt").expect("create failed");
    file.write_all("Hello World!\n".as_bytes()).expect("write failed");

    // Ecrire à la suite
    let mut file = OpenOptions::new().append(true)
        .open("src/example.txt")
        .expect("cannot open file");
    file.write_all("Adding content to the file.\n".as_bytes()).expect("write failed");

    // Lire
    let mut file = File::open("src/example.txt").unwrap();
    let mut contents = String::new();
    file.read_to_string(&mut contents).unwrap();
    println!("{}", contents);

    // Supprimer
    remove_file("src/example.txt").expect("delete failed");
}
```


## Erreurs

Deux types d'erreurs :
* **Unrecoverable**. Sous la forme de 'panic!'
* **Recoverable**. Sous la forme de 'Result enum'

```rust
fn main() {
    let v = vec![1, 2, 3];
    v[10]; // panic!("Something went wrong. cannot proceed");
}
```

```rust
fn divide(x: Option<i32>) {
    match x {
        Some(0) => panic!("Cannot divide by 0"),
        Some(x) => println!("result is {}", 42 / x),
        None => println!("None received, the answer is {}", 42)
    }
}
```

```rust
fn main() {
    let f = File::open("main.jpg");
    // f est de type: std::result::Result<std::fs::File, std::io::Error>
    match f {
        Ok(f) => {
            println!("file found {:?}", f);
        },
        Err(e) => {
            println!("file not found \n{:?}", e);
        }
    }
    println!("Continuing on with the execution");
}
```


## Méthodes unwrap() et expect()

`unwrap()` retourne une donnée si elle est disponible, sinon une erreur.
`expect()` retourne une donnée si elle est disponible, sinon une erreur préfixée d'un message d'erreur.

```rust
use std::fs::File;

fn main() {
    let f = File::open("main.jpg").unwrap();
    // si le fichier n'existe pas: panic!
}
```

```rust
use std::fs::File;

fn main() {
    let f = File::open("main.jpg").expect("Unable to open file");
}
```


## Question operator

Noté `?`.

```rust
use std::error::Error;
use std::io;
use std::fs::File;
use std::io::Read;

fn read_username_from_file() -> Result<String, io::Error> {
    let mut f = File::open("src/username.txt")?;
    let mut s = String::new();
    f.read_to_string(&mut s)?;
    Ok(s)
}

fn read_username_from_file_2() -> Result<String, io::Error> {
    let f = File::open("src/username.txt");
    let mut f = match f {
        Ok(file) => file,
        Err(e) => return Err(e),
    };

    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        // '_' is the number of bytes appended to 's' (see docs)
        Err(e) => Err(e),
    }
}

fn main() {
    let a = read_username_from_file();
    println!("{:?}", a);
    // Ok("...")
    // or
    // Err(Os { code: 2, kind: NotFound, message: "..." })

    let b = a.unwrap()
    println!("{:?}", b);
    // "..." or panic!
}
```
