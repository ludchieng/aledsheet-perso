---
title: Fondamentaux de Linux Debian
author: Ludwig Chieng
category: linux-debian
tags: [linux, debian, ubuntu, mint]
licence: CC-BY-SA Ludwig Chieng

layout: sheet
---

# Fondamentaux de Linux Debian

[[toc]]

Linux peut être installé sur un ordinateur en substitution de Windows ou de Mac OS. Mais souvent, certains l'utilisent dans un cas de figure assez particulier :
* **en dual-boot**. Cela signifie que l'ordinateur « possède » deux OS (systèmes d'exploitation). Au démarrage, on choisit de démarrer soit sous Linux, soit sous Windows. Mais pas les deux en même temps.
* **dans une machine virtuelle**. Dans ce cas, il y a un OS, appelé « hôte », sur lequel on a lancé un programme qui fait tourner un OS « invité ». On peut avoir par exemple Windows 10 en OS hôte qui fait tourner Linux en OS invité par le biais du logiciel *Oracle VM VirtualBox*.

La VM (machine virtuelle) permet de « faire tourner » un OS dans un autre OS, en même temps. On peut par exemple, coder sous Linux et faire du graphisme sur Photoshop sous Windows. Plutôt pratique, car la suite Adobe n'est pas compatible avec Linux. Il existe néanmoins des alternatives à ces logiciels sous Linux. Le problème majeur : les performances de l'ordinateur, forcément, puisqu'il y a deux OS qui fonctionnent parallèlement. On est vite limité en RAM (un OS invité type Ubuntu en requiert minimum 2500MB). De plus, il y a une petite latence entre un clic de souris ou une frappe de clavier et sa « transmission » vers l'hôte invité ; ce qui peut être déstabilisant.

Le dual-boot évite tous ces inconvénients, mais ne permet pas de switcher rapidement entre les deux OS. Il est parfois délicat à mettre en place sur certains ordinateurs.


## Checklist VM

Pour installer Linux sur *Oracle VM VirtualBox*. Il faut télécharger :
* l'installeur logiciel d'**Oracle VM VirtualBox** pour l'OS qui va bien.  \
https://download.virtualbox.org/virtualbox/
* l'image disque d'une **distribution Linux** : [Debian](https://www.debian.org/) (la classique), [Ubuntu](https://ubuntu.com/) (la famous), [Mint](https://linuxmint.com/) (ma préférée), etc.
* les fichiers **VBox Guest Additions** qui correspondent à la version d'*Oracle VM VirtualBox*. C'est facultatif, mais c'est plus confortable, pour régler la taille de l'écran, etc. \
https://download.virtualbox.org/virtualbox/

Ensuite, il faut créer une **nouvelle** VM :
* de type Linux,
* avec 3000MB de RAM (voire plus, mais ne pas dépasser la moitié de la RAM totale du PC),
* en créant un disque dur virtuel type VDI, dynamiquement alloué d'au moins 15GB.

Une nouvelle VM vient d'apparaître dans la barre latérale gauche. Il faut en modifier les **paramètres** (clic droit). Aller dans *Stockage* et ajouter l'image disque Linux dans le lecteur de disque virtuel de la VM.

En **démarrant** la VM, l'image disque Linux sera lue, et l'**installation** de Linux pourra s'effectuer.

Après cela, il sera possible et recommandé d'installer les **guest additions**.  \
https://www.linuxbabe.com/linux-mint/install-virtualbox-guest-additions-in-linux-mint/


## Répertoires et fichiers

On précise que « répertoire » et « dossier » sont la même chose.  \
Équivalences en anglais : **répertoire** (*directory*), **fichier** (*file*)

À la différence de Windows, il n'y a pas de `C:\`. On a ce qu'on appelle la racine (*root*), symbolisée par `/`. (à ne pas confondre avec `/root` qui est autre chose).

Tous les répertoires et fichiers sont situés par rapport à la racine. Dit autrement, la racine est le répertoire qui contient tous les autres répertoires et fichiers du système.

Par exemple, le chemin d'accès (*path*) d'un fichier `liste_course.txt` situé dans le **répertoire racine** (*root directory*) est `/liste_course.txt`.

D'ailleurs, sous Linux on n’utilise pas vraiment les extensions de fichiers `.txt`. C'est une question de préférence, mais pour les fichiers texte, en général, on ne met pas d'extension.

Si on possède un fichier `facture_01` dans un répertoire `achats` situés à la racine, alors le chemin de ce fichier est `/achats/facture_01`.


### Quelques repères

Ces répertoires sont spécifiques à Debian, Ubuntu ou Mint. Sur d'autres distributions Linux, cela peut être différent.

* `/bin` les **fichiers exécutables vitaux** de Linux, des fichiers binaires (*binary*) illisibles pour nous, pauvres humain·e·s. (on n’y touche pas)
* `/boot` le **noyau Linux** (*kernel*) pour le démarrage de l'ordinateur, image de disque RAM initiale, boot loader GRUB. (on n’y touche pas non plus)
* `/etc` les fichiers de **configuration**. Si vous installez un serveur web, c'est sûrement ici que vous trouverez les fichiers pour le configurer.
* `/home` le **répertoire personnel** des utilisateurs (ex. : `/home/rasputin`). C'est là qu'on range les documents privés type musiques, photos, etc.
* `/lib` des fichiers qui sont utilisés par `/bin`. Ce sont en fait des bibliothèques de fonctions (*libraries*) qui sont utilisées par les différents programmes de l'ordinateur.
* `/media` là où se **montent** (*mount*) les CD, clés USB ou autres périphériques en tout genre.
* `/root` le répertoire personnel de l'utilisateur nommé ***root*** (*super-utilisateur*). À ne pas confondre avec la racine (*root*) `/`. Ce répertoire personnel n'est pas dans `/home` pour des raisons de sécurité.
* `/usr` les programmes des utilisateurs. C'est ici que se trouve *Firefox*, etc.
