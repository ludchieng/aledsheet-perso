---
title: 01. Introduction aux commandes Linux Debian
author: Ludwig Chieng
category: Linux-Debian
tags: [linux, debian, ubuntu, mint, commandes, terminal, shell, bash]
licence: CC-BY-SA Ludwig Chieng

layout: sheet
---

# Introduction aux commandes Linux Debian

[[toc]]

Ici, on parlera des commandes pour Debian, Ubuntu ou Mint. Sur d'autres distributions Linux les commandes peuvent être différentes.

Les commandes servent par exemple à :
* explorer la **liste des fichiers** de l'ordinateur
* créer, couper, copier, coller ou supprimer des **fichiers** ou des **répertoires**
* démarrer, stopper ou redémarrer des **services** (ex. : un serveur web)
* éditer des **fichiers texte** (ex. : pour changer la configuration d'un service)
* **télécharger** des fichiers (ex. : via HTTP, FTP, IMAP...)
* **installer** un logiciel
* ajouter un **utilisateur**
* retirer les **droits d'accès** à un répertoire à un utilisateur
* ...

On peut faire certaines de ces choses sans taper une seule commande (ex. : déplacer un répertoire avec un bon `Ctrl+X`, `Ctrl+V`). Alors, à quoi bon ? En fait, les commandes ont un intérêt pratique, surtout quand il s'agit de gérer un ordinateur **à distance** ou d'**automatiser des tâches** (genre une liste de commandes les unes à la suite des autres). Et puis, certaines actions ne peuvent se faire **que par des commandes**.


### Le terminal

Elles s'exécutent dans le **terminal** ou **interpréteur de commandes** parfois appelé **Shell Unix** ou encore **bash**.

Si vous ouvrez le terminal, vous verrez marqué quelque chose comme :

``` shell
rasputin@wololo:~$ █
```

Quand on exécute une commande, on le fait en tant qu'**utlisateur** sur une **machine** donnée. Dans l'exemple du dessus, c'est l'utilisateur `rasputin` sur la machine `wololo`. Il est possible de lancer une commande en tant qu'un autre utilisateur, voire même d'exécuter une commande sur une machine **à distance** ! Eh oui, pour administrer un serveur web c'est plus pratique de le faire à distance. Ça veut dire que depuis le terminal d'un ordinateur `A`, vous exécutez des commandes sur un ordinateur `B` (c'est le SSH).

Autres exemples qu'on rencontre assez souvent pour des machines distantes :

``` shell
rasputin@192.168.1.34:~$ █
rasputin@dayum.com:~$ █
```

``` shell
# Exemple de commande compliquée
rasputin@wololo:~$ scp -P 10124 -r './*.js' rasptn@54.98.125.33:~/site_oueb█
# transfère des fichiers js d'une machine appelée "wololo" vers une
# autre, accessible à l'IP 54.98.125.33 par le port réseau 10124
```


### On tape quoi dukou ?

``` shell
# Pas besoin de marquer le '$' dans le terminal
$ echo aleeeed
```

Cette commande écrit `aleeeed` sur la ligne du dessous, dans le terminal. Bon ça sert pas à grand chose mais, si c'était pas le cas, maintenant vous savez le faire 😊.

`echo` est le nom de la commande et `aleeeed` est un **argument** que l'on « transmet » à la commande.

``` shell
# Créer un répertoire : "mkdir" → "make directory"
$ mkdir nudes
# Le nouveau répertoire se situe dans le répertoire personnel de l'utilisateur.
```

Là c'est tout pareil, `mkdir` est le nom de la commande et `nudes` est un argument.

En fait, l'argument c'est un élément qu'on donne à la commande pour qu'elle réalise sa tâche. `mkdir` ne sait pas quel nom donner au nouveau répertoire tant qu'on ne lui a pas transmis. De même `echo` ne sais pas quoi écrire dans le terminal tant qu'on ne lui a pas donner le ou les mots à écrire.

``` shell
# Supprimer un répertoire : "rmdir" → "remove directory"
$ rmdir nudes
```

**Astuce** \
Appuyer sur `↑` permet d'accéder à la commande précédente. Il est possible d'avoir l'historique des dernières commandes avec `history`.

**Astuce le retour** \
Pour aller plus vite, on peut taper seulement `rmdir n` et appuyer sur la touche `TAB`. Normalement, le nom du répertoire apparaît tout en entier d'un coup ! C'est ce qu'on appelle l'**autocomplétion**. Cela fonctionne pour toutes les commandes qui demandent des noms de répertoires comme `cd` par exemple. Si ça ne marche pas, c'est probablement :
* qu'il n'y a pas de répertoire qui commence par « n »,
* qu'il y a un autre répertoire qui commence par « n ». Il faut taper `rmdir nu` puis `TAB`,
* qu'on n'est pas dans le bon répertoire (commande `ls` pour avoir la liste des fichiers et répertoires et `cd` pour se déplacer),
* que la commande n'est pas la bonne. (ex. : `rmdir-n`, `rmdr n`)

**Astuce 3 : Tokyo Drift** \
Si une commande met trop de temps à s'exécuter, pour interrompre le programme il suffit de faire `Ctrl+C`.


``` shell
# Créer moult répertoires
$ mkdir rock rap classique electro

# Créer moult répertoires avec des espaces dans les noms
$ mkdir "progressive melodic death metal" "nu garage persian trap"
```
