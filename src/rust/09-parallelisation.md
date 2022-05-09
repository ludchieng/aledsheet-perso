---
title: 09. Parallélisation
author: Ludwig Chieng
category: Rust
tags: [logiciel, application, web, rust]
licence: CC-BY-SA

layout: sheet
---

# Parallélisation

[[toc]]


## Threads

Permet d'exécuter du code en parallèle.

Le système d'ownership et de borrowing octroie une sécurité dans la manipulation de la mémoire. C'est ce qui fait de Rust un langage adapté pour faire du multi-threading.

```rust
use std::thread;

fn main() {
    for i in 0..10 {
        thread::spawn(move || {
            //        ^^^^ → règle le problème de lifetime de 'i'
            //             sinon error: may outlive borrowed 'i'
            println!("new thread {}", i);
        });
    }
    println!("Main thread");
}
// new_thread 1
// new_thread 0
// new_thread 3
// Main thread
// new_thread 2
```

Il est possible que le 'Main thread' termine avant les autres.


```rust
use std::thread;
use std::thread::sleep;
use std::time::Duration;

fn main() {
    let mut threads = vec![];
    for i in 0..5 {
        let th = thread::spawn(move || {
            sleep(Duration::from_millis(i * 1000));
            println!("new thread {}", i);
        });
        threads.push(th);
    }

    for t in threads {
        t.join(); // attends la fin de l'exécution de 't'
    }

    println!("Main thread");
}
// new thread 0
// new thread 1
// new thread 2
// new thread 3
// new thread 4
// Main thread
```

## Channels

C'est un moyen d'échanger des données entre les threads.

```rust
use std::sync::mpsc; // multiple producer single receiver
let (tx, rx) = mpsc::channel(); // créer un channel
```
```rust
tx.send(); // envoyer de la donnée
```
```rust
// recevoir
rx.recv();      // blocking
rx.try_recv();  // non blocking
```

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    thread::spawn(move || { tx.send(42).unwrap() });
    println!("received {}", rx.recv().unwrap()); // received 42
}
```

Autre exemple :

```rust
use std::sync::mpsc;
use std::thread;
use std::time::Duration;

const NUM_THREADS: usize = 6;

fn start_thread(d: usize, tx: mpsc::Sender<usize>) {
    thread::spawn(move || {
        println!("setting timer {}", d);
        thread::sleep(Duration::from_secs(d as u64));
        println!("sending {}", d);
        tx.send(d).unwrap()
    });
}

fn main() {
    let (tx, rx) = mpsc::channel();
    for i in 0..NUM_THREADS {
        start_thread(i, tx.clone());
    }

    for j in rx.iter().take(NUM_THREADS) {
        println!("received {}", j);
    }
}
// setting timer 1
// setting timer 2
// setting timer 3
// setting timer 0
// sending 0
// setting timer 4
// setting timer 5
// received 0
// sending 1
// received 1
// sending 2
// received 2
// sending 3
// received 3
// sending 4
// received 4
// sending 5
// received 5
```

`rx.iter()`: Returns an iterator that will block waiting for messages.
`take(...)`: Creates an iterator that yields the first n elements, or fewer if the underlying iterator ends sooner.

`take(...)` permet de débloquer `rx.iter()` au bout d'un certain nombre d'itération. Sinon, l'éxécution du programme se poursuivrait.


## Mutex

**Mutex** : Mutual exclusion lock

Seulement un thread, à la fois, peut accéder à une certaine donnée.

**Arc** : atomically referenced counted type. Il convertit une donnée en types primitifs, prêts à être partagés entre les autres threads.

```rust
// Créer un verrou
use std::sync::{Mutex, Arc};
let lock = Arc::new(Mutex::new(...));
```

```rust
use std::sync::{Mutex, Arc};
use std::thread;

fn main() {
    let c = Arc::new(Mutex::new(0));
    let mut threads = vec![];

    for i in 0..10 {
        let c = Arc::clone(&c);
        let t = thread::spawn(move || {
            let mut num = c.lock().unwrap();
            *num += 1; // Increment the mutual count variable
        });
        threads.push(t);
    }

    for th in threads {
        th.join().unwrap();
    }

    println!("Result {}", *c.lock().unwrap()); // Result 10
}
```

`lock.lock()`: est bloquant.
`lock.try_lock()`: est non-bloquant.
`lock.is_poisoned()`: true si un thread qui possédait ce lock a paniqué.
