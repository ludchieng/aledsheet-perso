---
title: Modèle Conceptuel de Données
author: Patrick Bergougnoux, Ludwig Chieng
category: dev
tags: [logiciel, mcd, bdd, sql]
licence: (c)

layout: sheet
---

# Modèle Conceptuel de Données

## Vocabulaire et bases
```xml
╔──────╗                ╭────╮                ╔──────╗
|Classe|— cardinalité ——|asso|—— cardinalité —|Classe|
╚──────╝                ╰────╯                ╚──────╝
```

Exemple : Gestion des facturations de clients d'une entreprise.

On a trois **classes d'entité** : *client*, *facture*, *produit*.

Elles possèdent des **rubriques**. Exemple de rubriques pour *client* : nom, prénom, adresse, ville, code_postal...

La valeur d'une **rubrique calculable** peut être déterminée grâce à d'autres rubriques. Exemple : le montant total de la facture (qu'on ne stocke pas dans le dictionnaire de données mais qu'on calculera à la volée).

Les **paramètres** sont des valeurs communes à l'ensemble des données. Exemple : le nom de l'entreprise (qui apparaîtra sur le pdf des factures...).

Dans notre cas, on définit deux **associations** : client—facture et facture—produit.

```xml
╔──────╗        ╭───────╮        ╔───────╗        ╭────────╮        ╔───────╗
|Client|——1,n———|possède|———1,1——|Facture|——1,n———|contient|———0,n——|Produit|
╚──────╝        ╰───────╯        ╚───────╝        ╰────────╯        ╚───────╝
```

Il faut le lire de cette manière :
* Un client possède de 1 à N facture(s).
* Une facture possède 1 seul et unique client.
* Une facture contient de 1 à N produit(s).
* Un produit est contenu dans de 0 à N facture(s).

```xml
/!\ Dans d'autres modèles les cardinalités sont inversées
/!\ et ne se notent pas tout à fait de la même manière.
/!\ UML par exemple :

╔──────╗                      ╔───────╗                          ╔───────╗
|Client|——1———possède———1..*——|Facture|——0..*———contient———1..*——|Produit|
╚──────╝                      ╚───────╝                          ╚───────╝
```

Reprenons le MCD avec les rubriques cette fois-ci :

```xml
╔────────╗        ╭───────╮        ╔─────────╗        ╭────────╮        ╔───────╗
| Client |——1,n———|possède|———1,1——| Facture |——1,n———|contient|———0,n——|Produit|
| nom    |        ╰───────╯        | numero  |        | qté    |        | ref   |
| prenom |                         | date    |        ╰────────╯        | nom   |
| adresse|                         ╚─────────╝                          | prix  |
| ville  |                                                              ╚───────╝
| cp     |        
| tel    |        
╚────────╝
```


## Règles de cohérence

### Règle 1

Chaque rubrique du dictionnaire de données (sont donc exclus les rubriques calculables et les paramètres) doit être présente **une et une seule fois** dans le modèle.

```xml
A ne pas faire :
╔─────────────╗
| Personne    |
| nom         |
| prenom      |
| date_naiss  |
| nom_complet | <-- Doublon
╚─────────────╝
```

On préfèrera « calculer » le nom complet en concatenant « prenom », « » et « nom ».

### Règle 2

Une rubrique affectée à une classe d'entité ne peut avoir qu'**une seule valeur** pour chaque entité de la classe.

```xml
╔─────────────╗
| Client      |
| nom         |
| prenom      |
| telephone   | <-- Un seul téléphone enregistrable par client
╚─────────────╝

Exemple de solution pour plusieurs téléphones par client :
╔─────────────╗
| Client      |        ╭──────────╮        ╔───────────╗
| nom         |——1,n———|correspond|———1,1——| Telephone |
| prenom      |        ╰──────────╯        | numero    |
╚─────────────╝                            ╚───────────╝
```


### Règle 3

Si une rubrique possède la même valeur pour différentes entités d'une même classe, il faut **envisager** que cette rubrique fasse l'objet d'une classe à part : cette règle est appliquée si et seulement si **au moins deux rubriques** caractérisent la nouvelle classe en question.

#### Conséquence :

```xml
Ne pas faire :                                      Mais plutôt :
╔─────╗        ╭────╮        ╔─────╗                 ╔─────╗
| X   |— 1,1 ——|asso|—— 1,n —| Y   |                 | X   |
| rx1 |        ╰────╯        | ry1 |    ┌─────┘╲     | rx1 |
| rx2 |                      ╚─────╝    └─────┐╱     | rx2 |
╚─────╝                                              | ry1 |
                                                     ╚─────╝
```


### Règle 4

Une association non multiple (*non 0,n ou 1,n*) de part et d'autre ne peut en aucun cas être porteuse de rubriques.
* Si cette situation se présente, il faut avant tout s'assurer **que les cardinalités soient correctes** ; si c'est le cas, alors les rubriques situées dans l'association doivent être déplacées dans la classe d'entité coté patte simple (*1,1*).

```xml
Ne pas faire :                               Mais plutôt :
╔─────╗       ╭────╮       ╔─────╗           ╔─────╗       ╭────╮       ╔─────╗
| X   |— 1,1 —|asso|— 1,n —| Y   |           | X   |— 1,1 —|asso|— 1,n —| Y   |
| rx1 |       |ra1 |       | ry1 |  ┌────┘╲  | rx1 |       ╰────╯       | ry1 |
| rx2 |       ╰────╯       ╚─────╝  └────┐╱  | rx2 |                    ╚─────╝
╚─────╝                                      | ry1 |
                                             | ra1 |
                                             ╚─────╝
```


### Règle 5

Deux classes d'entités ne peuvent pas être seulement associées par une association simple (*1,1*) de part et d'autre.
* Si cette situation se présente, il faut avant tout s'assurer **que les cardinalités soient correctes** ; si c'est le cas, alors l'ensemble des rubriques des deux classes d'entités doivent être regroupées au sein d'une même classe.

```xml
Ne pas faire :                                      Mais plutôt :
╔─────╗        ╭────╮        ╔─────╗                 ╔─────╗
| X   |— 1,1 ——|asso|—— 1,1 —| Y   |                 | X   |
| rx1 |        ╰────╯        | ry1 |    ┌─────┘╲     | rx1 |
| rx2 |                      ╚─────╝    └─────┐╱     | rx2 |
╚─────╝                                              | ry1 |
                                                     ╚─────╝
```
