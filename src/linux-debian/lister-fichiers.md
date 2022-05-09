---
title: Lister les fichiers
author: Ludwig Chieng
tags: [linux-debian, linux, debian, ubuntu, mint, commandes, terminal, shell, bash]
licence: CC-BY-SA Ludwig Chieng

layout: sheet
---

# Lister les fichiers

[[toc]]

``` shell
# Lister les fichiers et répertoires du répertoire courant
$ ls

# Lister les fichiers et répertoires du répertoire personnel
$ ls ~/
```

``` shell
# Résultat de "ls"
Bureau  Documents  Images  Modèles  Musique  Public  Téléchargements  Vidéos
```

Les répertoires et les fichiers sont affichés avec des couleurs différentes.


## Plus de détails ?

``` shell
# Lister les fichiers et répertoires avec les détails
$ ls -l 
```

`-l` est une option. Lorsqu'on précise cette option, la commande `ls` se comporte différemment. Le manuel, accessible par la commande `man ls` (`q` pour quitter), précise que l'option `-l` permet d'obtenir `a long listing format`.

``` python
# Résultat de "ls -l"
drwxr-xr-x 2 rasputin rasputin 4096 juin  29 16:19 Bureau
drwxr-xr-x 2 rasputin rasputin 4096 juin  29 16:19 Documents
drwxr-xr-x 2 rasputin rasputin 4096 juin  29 16:19 Images
-rw-rw-r-- 1 rasputin rasputin   34 juin  30 12:56 liste_course
drwxr-xr-x 2 rasputin rasputin 4096 juin  29 16:19 Modèles
drwxr-xr-x 2 rasputin rasputin 4096 juin  29 16:19 Musique
drwxr-xr-x 2 rasputin rasputin 4096 juin  29 16:19 Public
drwxr-xr-x 2 rasputin rasputin 4096 juin  29 16:19 Téléchargements
drwxr-xr-x 2 rasputin rasputin 4096 juin  29 16:19 Vidéo
```

Le fichier texte `liste_course` que j'ai créé est visible. La lettre `d` en début de ligne indique si l'élément est un **répertoire** (*directory*) ou non.

Les neuf caractères suivants indiquent les droits d'accès (*permissions*) à ses éléments. Il y a trois droits différents :
* `r` signifie « read », le droit de **lecture** d'un fichier ou du contenu d'un répertoire,
* `w` pour « write », le droit d'**écrire** dans un fichier ou de création de fichier dans le répertoire,
* `x` pour « execute », le droit de d'**exécuter** un fichier (un programme) ou de « traverser » un répertoire.

Dans `r-x`, le tiret signifie qu'il n'y a pas le droit d'écriture. Le bloc `rwx` est répété trois fois pour décrire les permissions des trois types d'utilisateurs, à savoir, dans l'ordre :
* l'**utilisateur propriétaire** (*owner* ou *user* ou *u*) de l'élément,
* les utilisateurs associés au **groupe** (*group* ou *g*) qui est assigné à l'élément,
* les **autres** utilisateurs (*others* ou *o*).

Exemple de permissions : `rwxr-x---`, où le propriétaire a tous les droits sur l'élément, les membres du groupe peuvent seulement le lire et l'exécuter et les autres n'ont aucun droit.

Les permissions sont un ensemble de concepts assez technique qu'on ne détaillera pas pour le moment. S'il est impossible d'exécuter un fichier pour cause de `Permission non accordée`, retenter la commande avec `sudo` devant (ex. : `sudo mkdir nudes`). La commande demandera le mot de passe administrateur (*super-utilisateur* ou *root*).

Les colonnes suivantes représentent :
* le **nombre de liens** (pas très important)
* l'utilisateur **propriétaire** associé
* l'utilisateur **leader du groupe** associé
* la **taille en octet** du fichier ou 4096 pour les répertoires
* la date et heure des dernières modifications
* le nom de l'élément


## Les fichiers cachés

``` shell
# Lister les fichiers et répertoires y compris ceux qui sont cachés
$ ls -a
```


## Le détail des fichiers cachés

``` shell
# Lister les fichiers et répertoires y compris cachés avec les détails
$ ls -l -a

# Lister les fichiers et répertoires y compris cachés avec les détails
$ ls -la
```


## Les autres options

``` shell
# Afficher la page manuel de la commande "ls"
$ man ls
```

On peut voir la description de la commande ainsi que de toutes ses options dans le manuel. Appuyez sur `q` pour quitter le manuel.
