---
title: Manipuler les fichiers
author: Ludwig Chieng
category: Linux-Debian
tags: [linux, debian, ubuntu, mint, commandes, terminal, shell, bash]
licence: CC-BY-SA Ludwig Chieng

layout: sheet
---

# Manipuler les fichiers

[[toc]]

Attention ! Pas de retour arrière `Ctrl+Z` possible à ma connaissance.


## Déplacer et renommer

``` shell
# Déplacer "file1" dans le répertoire "Documents"
$ mv ./file1 ./Documents/file1
# Déplacer "file1" dans le répertoire "Documents" (méthode équivalente)
$ mv file1 Documents/file1
# Déplacer "file1" dans le répertoire "Documents" (méthode équivalente)
$ mv file1 Documents/
# Déplacer "file1" dans le répertoire "Documents" s'il existe,
# sinon renomme le fichier en "Documents"
$ mv file1 Documents
```

``` shell
# Essaie de déplacer "file2" dans un répertoire "file0".
# Si le répertoire n'existe pas, renomme le fichier en "file0"
$ mv file2 file0
```

Attention ! Renommer écrase le fichier existant.

``` shell
# Déplacer en renommant
$ mv file3 Documents/file888
```


## Copier

``` shell
# Copier "file0" dans le répertoire "Documents"
$ cp file0 Documents/
```


## Supprimer

``` shell
# Supprimer "file0" : "rm" → "remove"
$ rm file0
```

``` shell
# Supprime un répertoire et son contenu
$ rm -rf "Documents/projet raté/"
```

Les options `-r` et `-f` exécutent la suppression de manière **récursive** (supprime le répertoire **et son éventuel contenu**) et **forcée** (ignore les éléments à supprimer qui sont inexistants).


## Le joker `*`

``` shell
# Déplacer fichiers et répertoires qui commencent
# par "fil" dans le répertoire "Documents"
$ mv fil* Documents/

# Copier fichiers et répertoires qui terminent
# par ".js" dans le répertoire "Documents"
$ cp *.js Documents/

# Supprimer tout le contenu du répertoire "projet raté"
$ rm -rf "Documents/projet raté/*"
```


## Verbose

L'option `-v` pour `mv`, `cp` ou `rm` permet d'écrire dans le terminal, un « rapport » des actions qui ont été menées. C'est particulièrement utile quand on utilise le joker `*`.

``` shell
$ rm -rfv ~/Documents/projet/
```
``` shell
removed 'projet/css/styles.css'
removed directory 'projet/css'
removed 'projet/js/main.js'
removed 'projet/js/wow.js'
removed directory 'projet/js'
removed 'projet/index.html'
removed directory 'projet'
```
