---
title: Résumé du rapport « Déployer la sobriété numérique » de TSP
author: Ludwig Chieng
category: Sobriété numérique
tags: [logiciel, application, web, sobriété, numérique]
licence: CC-BY-SA

layout: sheet
---

# Résumé du rapport « Déployer la sobriété numérique » de The Shift Project

Le rapport est publié en octobre 2020.

[[toc]]


**Objectifs du rapport :**
Analyser et donner des cadres méthodologiques pour déployer la sobriété numérique. Le rapport le fait en trois grands axes :
- **Analyser la pertinence énergétique des projets connectés**. Pour les collectivités locales, les entreprises et les investisseurs.
- **Piloter environnementalement le système d'information**. Pour les entreprises, les organismes publics, les collectivités locales et l'État.
- **Conmprendre les usages numériques pour mieux les piloter**. Pour l'État, les régulateurs, les entreprises/salariés, les parents et la communauté éducative.


## Pertinence énergétiques des technologies connectées

**Idée**. Les outils déployés doivent être réfléchis ; c-à-d, qu'ils doivent avoir un impact net positif sur la réduction des émmissions de GES.

Pour calculer cet impact net, il faut mettre en confrontation : « le coût environnemental » et « les opportunités pour la transition ».

Exemples de coût environnemental : énergie pour la production, consommation et utilisation de ressources minières, etc.

Exemples d'opportunités pour la transition : économies directes, optimisation, pilotage, etc.

Cela passe par une **quantification énergétique** systématique et exhaustive (modèle cycle de vie).


### Application à l'éclairage connecté

Modéliser une situation en identifiant les variables clé : Surface de la pièce, fréquentation de la pièce, nombre de luminaires...

3 situations différentes : le salon, le bureau, l'espace public extérieur

Cela permet d'identifier quelles sont les situations et quels sont les types d'usage qui permettent de rendre rentable la mise en place d'éclairage connecté, pour des cas précis.

**Exemple de conclusion pour l'éclairage public**
La mise en place d'éclairage connecté peut donner lieu à des actes de maintenance plus fréquentes. Ce qui nécessite pour le gestionnaire public, d'avoir une grande intéraction avec des techniciens privés ; ce qui provoque une interdépendance. Chose qui n'augmente pas forcément la résilience du lieu public. De plus, les technologies mises en oeuvre réclaments des intrants électroniques plus importants qui ne sont pas produits localement.


### Le modèle STERM (Smart Technologies Energy Relevance Model)

Évaluer la pertinence de rajouter une surcouche connectée au système initial.

Consommation énergétique :
- **Système initial**. consommation énergétique propre (+)
- **Couche connectée**. économies directes (-), énergie grise (+), consommation en utilisation (+)

Faire la somme des consommations pour obtenir le **bilan net**, comparer les solutions et conclure sur la pertinence de la surcouche connectée.

Il faudra sans doute poser des hypothèses : durée de vie, facteurs d'économie indirecte, etc.


### Quatres idées à retenir

**Un choix technologique et un choix sociétal**. Il enclenche ou soutient certains mécanismes, certains services.

**Il faut accompagner les changements d'usages**. Introduire un nouvel outils ne suffit pas à les changer profondément.

**Construire une vision claire des objectifs à atteindre**. C'est produire des choses normatives c-à-d mesurables, précises et non-vagues.

**Produire des outils qui définissent les cadres de pertinence**. Des outils opérationnels = qui permettent de déployer ces technologies.


## Guider les organisations dans leurs efforts vers un SI durable

Comptabilité carbone d'un SI pour une entreprise :
- **Centres de données gérés par l'organisation**. PUE*, consommation électrique, fabrication et fin de vie des équipements (serveurs physiques, VMs, équipements réseaux, stockage).
- **Cloud "public"** (AWS, AZURE, Office 365...). PUE*, consommation électrique, fabrication et fin de vie des équipements.
- **Sous-traitance** (campagne marketing, services supports, conseil). Méthode de mesure à identifier.
- **Réseau public Internet**. Méthode de mesure à identifier.
- **Poste de travail salariés / prestataires** (ordinateurs, téléphones, écrans, imprimantes, réseau privé). Consommation électrique, ACV terminaux et équipements
- **Terminaux des clients** (ordinateurs, téléphones, écrans, imprimantes, réseau privé). Consommation électrique, ACV terminaux et équipements.

On ajoute à cela les compensations carbone éventuelles.

\* **PUE** : Power Usage Effectiveness : ratio entre l'**énergie totale consommée par l'infrastructure** et l'**énergie consommée seulement par les équipements informatiques**. Ex. de consommations ne provenant pas de l'informatique : conditionnement de l'air, UPS (onduleurs)...


Quelques pistes de sobriété :
- **Contraintes sur les applications et développements**. Restreindre l'utilisation de certains framework, librairies...
- **Contraintes sur les usages**. Restreindre au strict nécessaire les accès à une application donnée pour des utilisateurs donnés.
- **Contraintes sur les données**. Seuil maximal de volumes de données pour l'entreprise, et seuil par application et par utilisateur.
- **Contraintes sur les infrastructures**. Restreindre les types de matériels achetés, restreindre le volume de serveurs, de VM...


Principes éthiques :
1. Former et communiquer
2. Être transparent sur les empreintes carbone mesurées
3. Être sobre dans l'usage des services et équipements
4. Réutiliser, réparer, recycler
5. Optimiser les ressources
6. Concevoir des équipements sobres
7. Choisir des fournisseurs qui appliquent ces principes


## Les usages numériques : comprendre pour piloter

Un système numérique est à la fois social et technique.

Design des systèmes → Forme des usages → Design des sys...

Les processus humains sont à la fois facilitant et contraignant pour les processus techniques, et vice-versa.

Agir à deux niveaux :
- **Individuel**. "effet d'usage" (de l'ordre du socio-culturel). Il faut identifier les besoins réels.
- **Collectif**. "effet d'offre" (influences par le design). Il faut débattre collectivement et décider de comment piloter les changements


**Design addictifs** : capter et retenir l'attention : pop-up, thumbnail, vidéo incrustée, lancement automatique de contenu, scrolling ininterrompu, etc.

**Conséquences** :
- addiction programmée
- matérialité invisibilisé
- asymétrie épistémique (différence de niveau entre les gens qui conçoivent ces services numériques et ceux qui les utilisent)

**Qui est impliqué ?** :
- les agents économiques du numérique
- les designers
- les pouvoirs publics
- les organes régulateurs
- les individus, associations de consommateurs, experts des usages et de leurs effets (sociologues, psychologues, sphère médicale)

**Deux populations** :
- enfant et adolescent (problématique d'exposition aux écrans, developpement de l'enfant, bien-être et sécurité de l'adolescent, pédagogique)
- adulte (problématique d'isolement, dépendance, sur-sollicitation, séparation vie privée/pro)

**Politiques publiques à construire**:
- outils pédagogiques et programmes de sensibilisation
- programmes d'information et outils pour les entreprises
- leviers de régulation des designs
- initier des travaux sur la modification des modèles économiques (aujourd'hui, ils reposent surtout sur la collecte des données)

**Contrer ces idées fausses**:
- la dématérialisation
- la neutralité
- le progrès indiscutable
