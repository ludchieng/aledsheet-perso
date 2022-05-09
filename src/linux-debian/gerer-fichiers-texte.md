---
title: Gérer les fichiers texte
author: Ludwig Chieng
category: linux-debian
tags: [linux, debian, ubuntu, mint, commandes, terminal, shell, bash]
licence: CC-BY-SA Ludwig Chieng

layout: sheet
---

# Gérer les fichiers texte

[[toc]]

## Éditeur de fichier texte

* **gedit** sur Debian et Ubuntu
* **xed** sur Mint

On peut les lancer, au choix, depuis le menu démarrer ou depuis le terminal. Pour arrêter un programme lancé depuis le terminal, on utilise `Ctrl+C` (ou plutôt `^C`).

Il est possible d'installer des éditeurs plus complets, mais ils sont donc plus gourmands en ressources :
* **Atom** (très bien)
* **Visual Studio Code** (mon préféré)


## Manipuler les fichiers texte

``` shell
# Créer un fichier vide
$ touch file1

# Créer un fichier vide (méthode équivalente)
$ touch ./file1

# Vérifier qu'il est bien là
$ ls

# Créer un fichier avec un mot écrit à l'intérieur
$ echo protool > file2
```

Normalement, la commande `echo` écrit dans le terminal. Ici, l'opérateur `>` permet de rediriger la **sortie** de `echo` vers un fichier `file2`. S'il existe déjà, le fichier est écrasé.

``` shell
# Rediriger la sortie d'une commande ls dans un fichier
$ ls -l > file3
```

``` shell
# Écrire le contenu d'un fichier texte dans le terminal
$ cat file2
```


## Éditer depuis le terminal

``` shell
# Editer avec le terminal
$ nano file3
```

C'est assez rebutant au départ d'utiliser nano, car c'est un éditeur bas niveau. C'est-à-dire qu'il est avant tout fait pour être « proche de la machine » et pas pour être « user-friendly ». Il est pas facile à aborder à première vue, mais il est très rapide et très léger à exécuter.

Personnellement, j'utilise souvent nano pour éditer rapidement un fichier de configuration sur mes serveurs distants, depuis le PC de quelqu'un d'autre ou depuis mon téléphone. C'est pour cela que je trouve intéressant de savoir l'utiliser.

Pour quitter l'éditeur nano, appuyez sur `Ctrl+X`. Dans le jargon, on dit plutôt `^X`.

Si vous avez modifié le fichier, nano demande la confirmation pour sauvegarder. Appuyer sur `O`.

Ensuite, il y a le choix entre écraser le fichier ou sauvegarder sous un autre nom pour conserver l'original. Appuyer sur `Entrée ↲`.

Si vous éditez des fichiers qui ne sont pas les vôtres (pas propriétaire), nano refusera d'enregistrer. Il est possible de lancer nano en tant que super-utilisateur (*super user* ou *root*) avec `sudo nano`.

Raccourcis utiles :
* `Ctrl+↓` pour descendre plus vite quand le fichier est long,
* `Shift+↓` ou `Shift+→` pour sélectionner du texte sans la souris,
* `Ctrl+K` couper la sélection,
* `Ctrl+U` coller la sélection,
* `Ctrl+W` pour chercher un mot,
* `Alt+U` pour annuler la dernière opération. On dit `M-U` dans le jargon.

L'aide nano est disponible dans l'éditeur lui-même avec `Ctrl+G`.
