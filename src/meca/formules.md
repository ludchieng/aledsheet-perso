---
title: Formules
author: Ludwig Chieng
category: Méca
tags: [mécanique, cinématique, force, couple, cinétique, masse, inertie, énergétique]

layout: sheet
---

# Formules de mécanique générale

[[toc]]

On pose :
* un solide $S$ de masse $m$ et de centre d'inertie $G$.
* un ensemble de solides $E$ de masse $m_E$ et de centre de gravité $G_E$.
* deux points $A$ et $B$ quelconques.
* une base orthonormée directe $B_i$ et son référentiel associé $R_i$.
* un référentiel galiléen $R_g$.


## Cinématique
---
Dérivation d'un vecteur $\overrightarrow u$ quelconque :

$$
  \left( \frac{d \overrightarrow{u} }{d t} \right)_{R_1}
= \left( \frac{d \overrightarrow{u} }{d t} \right)_{R_2}
+ \overrightarrow{\Omega_{2/1}} \wedge \overrightarrow{u}
$$

---
Torseur cinématique :

$$
\begin{Bmatrix}
  \mathcal{V}_{S/R}
\end{Bmatrix}_A
=
\begin{Bmatrix}
  \overrightarrow{\Omega_{S/R}} \\
  \overrightarrow{V_{A \in S/R}}
\end{Bmatrix}_A
$$

---
Transport du moment cinématique :

$$
  \overrightarrow{V_{B \in S/R}}
= \overrightarrow{V_{A \in S/R}}
+ \overrightarrow{BA} \wedge \overrightarrow{\Omega_{S/R}}
$$

---
Composition des vitesses :

$$
  \overrightarrow{V_{A \in 2/0}}
= \overrightarrow{V_{A \in 2/1}}
+ \overrightarrow{V_{A \in 1/0}}
$$

---
Composition des accélérations :

$$
  \overrightarrow{\Gamma_{A \in 2/0}}
= \overrightarrow{\Gamma_{A \in 2/1}}
+ \overrightarrow{\Gamma_{A \in 1/0}}
+ 2 \overrightarrow{\Omega_{1/0}} \wedge \overrightarrow{V_{A \in 2/1}}
$$


## Actions mécaniques
---
Torseur d'une action mécanique :

$$
\begin{Bmatrix}
  \mathcal{T}_{1 \rightarrow E}
\end{Bmatrix}_A
=
\begin{Bmatrix}
  \overrightarrow{R_{1 \rightarrow E}} \\
  \overrightarrow{M_{A, \, 1 \rightarrow E}}
\end{Bmatrix}_A
$$

---
Transport du moment d'une action mécanique :

$$
  \overrightarrow{M_{B, \, 1 \rightarrow E}}
= \overrightarrow{M_{A, \, 1 \rightarrow E}}
+ \overrightarrow{BA} \wedge \overrightarrow{R_{1 \rightarrow E}}
$$


## Cinétique

Torseur cinétique d'un solide :

$$
\begin{Bmatrix}
  \mathcal{C}_{S/R}
\end{Bmatrix}_A
=
\begin{Bmatrix}
  \begin{aligned}
    \overrightarrow{R_{\mathcal{C}, \, S/R}}
      & = m \cdot \overrightarrow{V_{G \in S/R}} \\
    \overrightarrow{\sigma_{A, \, S/R}}
      & = [I_{A, \, S}] \cdot \overrightarrow{\Omega_{S/R}}
        + m \cdot \overrightarrow{AG} \wedge \overrightarrow{V_{A \in S/R}}
  \end{aligned}
\end{Bmatrix}_A
$$

---
Transport du moment cinétique :

$$
  \overrightarrow{\sigma_{B, \, S/R}}
= \overrightarrow{\sigma_{A, \, S/R}}
+ \overrightarrow{BA} \wedge \overrightarrow{R_{\mathcal{C}, \, S/R}}
$$

---
Torseur cinétique d'un ensemble $E$ de $n$ solide(s) noté(s) $S_i$ :

$$
\begin{Bmatrix}
  \mathcal{C}_{E/R}
\end{Bmatrix}_A
=
\sum_{i=1}^{n}
\begin{Bmatrix}
  \mathcal{C}_{S_i/R}
\end{Bmatrix}_A
$$


## Dynamique

Torseur dynamique d'un solide :

$$
\begin{Bmatrix}
  \mathcal{D}_{S/R}
\end{Bmatrix}_A
=
\begin{Bmatrix}
  \begin{aligned}
    \overrightarrow{R_{\mathcal{D}, \, S/R}}
      & = m \cdot \overrightarrow{\Gamma_{G \in S/R}} \\
    \overrightarrow{\delta_{A, \, S/R}}
      & = \left( \frac{d\overrightarrow{\sigma_{A, \, S/R}}}{dt} \right)_R
        + m \cdot \overrightarrow{V_{A \in S/R}} \wedge \overrightarrow{V_{G \in S/R}}
  \end{aligned}
\end{Bmatrix}_A
$$

---
Transport du moment dynamique :

$$
  \overrightarrow{\delta_{B, \, S/R}}
= \overrightarrow{\delta_{A, \, S/R}}
+ \overrightarrow{BA} \wedge \overrightarrow{R_{\mathcal{D}, \, S/R}}
$$

---
Torseur dynamique d'un ensemble $E$ de $n$ solide(s) noté(s) $S_i$ :

$$
\begin{Bmatrix}
  \mathcal{D}_{E/R}
\end{Bmatrix}_A
=
\sum_{i=1}^{n}
\begin{Bmatrix}
  \mathcal{D}_{S_i/R}
\end{Bmatrix}_A
$$


## Géométrie des masses

Centre de gravité d'un ensemble $E$ de $n$ solide(s) noté(s) $S_i$ :

$$
  \overrightarrow{AG_E}
= \frac{\Sigma_{i=1}^{n} m_i \cdot \overrightarrow{AG_i}}{m_E}
$$

---
Matrice d'inertie :

$$
\begin{bmatrix}
  I_{A, \, S}
\end{bmatrix}_{B_1}
=
\begin{bmatrix}
   A & -F & -E \\
  -F &  B & -D \\
  -E & -D &  C
\end{bmatrix}_{A,\, B_1}

\;\;

\begin{cases}
   A = \int (y^2 + z^2)\, dm  &  D = \int yz\, dm \\
   B = \int (x^2 + z^2)\, dm  &  E = \int xz\, dm  \\
   C = \int (x^2 + y^2)\, dm  &  F = \int xy\, dm  
\end{cases}
$$

---
Transport d'une matrice d'inertie :

$$
\begin{bmatrix}
  I_{A, \, S}
\end{bmatrix}_{B_1}
=
\begin{bmatrix}
  I_{G, \, S}
\end{bmatrix}_{B_1}
+ m \cdot
\begin{bmatrix}
  b^2+c^2  &    -ab    &    -ac    \\
    -ab    &  a^2+c^2  &    -bc    \\
    -ac    &    -bc    &  a^2+b^2  \\
\end{bmatrix}_{A,\, B_1}

\;\;

\text{avec}\, \overrightarrow{AG}
= 
\begin{bmatrix}
  a \\ b \\ c
\end{bmatrix}_{B_1}
$$

---
Changement de base d'une matrice d'inertie :

$$
\begin{bmatrix}
  I_{A, \, S}
\end{bmatrix}_{B_2}
=
{}^t \!
\begin{bmatrix}
  P_{B_1 \rightarrow B_2}
\end{bmatrix}
\cdot
\begin{bmatrix}
  I_{A, \, S}
\end{bmatrix}_{B_1}
\cdot
\begin{bmatrix}
  P_{B_1 \rightarrow B_2}
\end{bmatrix}
$$

---
Moment d'inertie autour d'un axe $\Delta$ passant par $A$ et de vecteur directeur unitaire $\overrightarrow u$ :

$$
I_{\Delta}
=
{}^t \!
\begin{bmatrix}
  \overrightarrow{u}
\end{bmatrix}_{B_1}
\cdot
\begin{bmatrix}
  I_{A, \, S}
\end{bmatrix}_{B_1}
\cdot
\begin{bmatrix}
  \overrightarrow{u}
\end{bmatrix}_{B_1}
$$


## Énergétique

Puissance d'une action mécanique :

$$
\begin{aligned}
  P_{1 \rightarrow S, \, S/R}
  & = 
  \begin{Bmatrix}
    \mathcal{T}_{1 \rightarrow S}
  \end{Bmatrix}_A
  \otimes
  \begin{Bmatrix}
    \mathcal{V}_{S/R}
  \end{Bmatrix}_A
  \\
  & = 
  \overrightarrow{R_{1 \rightarrow S}}
  \cdot \overrightarrow{V_{A \in S/R}}
  + \overrightarrow{M_{A, \, 1 \rightarrow E}}
  \cdot \overrightarrow{\Omega_{S/R}}
\end{aligned}
$$

---
Travail d'une action mécanique :

$$
W_{1 \rightarrow S, \, S/R}
= \int_{t_1}^{t_2} P_{1 \rightarrow S, \, S/R} \cdot dt
$$

---
Énergie cinétique :

$$
T_{S/R} = \frac{1}{2} \cdot
\begin{Bmatrix}
  \mathcal{C}_{S/R}
\end{Bmatrix}_A
\otimes
\begin{Bmatrix}
  \mathcal{V}_{S/R}
\end{Bmatrix}_A
$$


## Principe fondamental de la dynamique

$$
\begin{Bmatrix}
  \mathcal{D}_{E/R_g}
\end{Bmatrix}_A
=
\begin{Bmatrix}
  \mathcal{T}_{\bar{E}/E}
\end{Bmatrix}_A

\;\; \Longleftrightarrow \;\;

\begin{Bmatrix}
  \begin{aligned}
    \overrightarrow{R_{\mathcal{D}, \, E/R_g}} \\
    \overrightarrow{\delta_{A, \, E/R_g}}
  \end{aligned}
\end{Bmatrix}_A
=
\begin{Bmatrix}
  \overrightarrow{R_{\bar{E} \rightarrow E}} \\
  \overrightarrow{M_{A, \, \bar{E} \rightarrow E}}
\end{Bmatrix}_A
$$


## Théorème de l'énergie cinétique

$$
\frac{dT_{E/R_g}}{dt}
= \Sigma P_{i \rightarrow E, \, E/R_g}
$$