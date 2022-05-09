---
title: 07. Naviguer dans les répertoires
author: Ludwig Chieng
category: Linux-Debian
tags: [linux, debian, ubuntu, mint, commandes, terminal, shell, bash]
licence: CC-BY-SA Ludwig Chieng

layout: sheet
---

# Naviguer dans les répertoires

[[toc]]

``` shell
# Se déplacer dans le répertoire "local" contenu dans "usr"
# "cd" → "change directory"
$ cd /usr/local
```

On remarque alors que l'invite de commande a changé :

``` shell
# Avant
rasputin@wololo:~$ █
# Après
rasputin@wololo:/usr/local$ █
```

Pour s'exécuter, certaines commandes prennent en compte « l'endroit où on est placé ». Quand on crée un répertoire avec `mkdir`, le répertoire se crée à « l'endroit où on est placé ». Cet endroit est indiqué après `:`, c'est-à-dire `/usr/local`.

Par convention, `~` est le répertoire personnel de l'utilisateur. Quand on démarre le terminal juste après avoir lancé Linux, par défaut, on se situe ici.

``` shell
# Se déplacer dans le répertoire personnel de l'utilisateur "rasputin" 
$ cd /home/rasputin

# Aller dans mon répertoire, en tant qu'utilisateur "rasputin"
$ cd /home/rasputin

# Aller dans mon répertoire, en tant qu'utilisateur "rasputin" (méthode 2)
$ cd ~

# Aller dans mon répertoire, en tant qu'utilisateur "rasputin" (méthode 3)
$ cd

# Aller à la racine
$ cd /
```

``` shell
# Aller dans mon répertoire puis aller dans "Public"
$ cd
$ cd Public # Rappel : on peut juste taper "cd Pu" puis appuyer sur "TAB"

# Se déplacer dans le répertoire dans lequel on est déjà
# (ne sert littéralement à rien)
$ cd .
# Aller dans le répertoire parent
$ cd ..
# Aller dans le répertoire grand-parent
$ cd ../..

# Aller dans le répertoire "Public" depuis "~" (écritures équivalentes)
$ cd Public/
$ cd ./Public
$ cd ./Public/
$ cd ~/Public
```

``` shell
# Aller dans "~/Public" puis aller dans "~/Documents"
$ cd ~/Public
$ cd ../Documents

```