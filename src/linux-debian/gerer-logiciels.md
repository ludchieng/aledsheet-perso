---
title: Gérer les logiciels
author: Ludwig Chieng
category: linux-debian
tags: [linux, debian, ubuntu, mint, commandes, terminal, shell, bash]
licence: CC-BY-SA Ludwig Chieng

layout: sheet
---

# Gérer les logiciels

[[toc]]

La commande `sudo` qui permet d'exécuter une autre commande en tant qu'administrateur (*super-utilisateur* ou *root*). Par exemple, c'est nécessaire pour exécuter `apt`. Il faudra saisir le mot de passe juste après avoir appuyé sur `Entrée ↲`. Sur Mint, en tapant le mot de passe, les caractères sont symbolisés par des « \*\*\*\*\* ». Sur Ubuntu, aucun caractère n'apparaît.


## Mettre à jour les paquets

``` shell
# Récupérer la liste des noms et le numéro de version de tous les paquets
$ sudo apt update

# Télécharger et installer la dernière version de tous les paquets
$ sudo apt upgrade
```

Les mises à jour doivent se faire de temps en temps, habituellement, une fois par semaine.


## Installer un paquet

Un **paquet** (*package*, *pkg*) regroupe un ensemble de fichiers pour installer un logiciel. En général, on les récupère sur le **dépôt APT** grâce à la commande `apt` aussi appelée `apt-get` (c'est pas tout à fait la même mais voilà).

``` shell
# Installer git
$ sudo apt update # recommandé de le faire avant un install
$ sudo apt install git
```

``` shell
# Désinstaller git
$ sudo apt remove git
```
