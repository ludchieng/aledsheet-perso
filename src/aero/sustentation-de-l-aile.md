---
title: Sustentation de l'aile
author: Ludwig Chieng
tags: [aéro, aérodynamique, sustentation, aile, naca, trainée, écoulement, air]
licence: CC-BY-SA Ludwig Chieng

layout: sheet
---

# Sustentation de l'aile

[[toc]]

Types d'écoulement :
* **laminaire**. L'air suit une trajectoire rectiligne.
* **turbulent**. Les particules d'air suivent des trajectoires non-rectilignes mais globalement parallèles entre elles.
* **tourbillonnaire**. Écoulement chaotique, certaines particules se déplacent à contre-courant.

La **résistance de l'air** s'applique sur tout corps en mouvement dans l'air. Son intensité dépend des propriétés de l'air (viscosité, masse volumique...), du corps (section, forme, rugosité...) et du mouvement (vitesse).


## Écoulement autour d'une aile

La résistance de l'air sur l'aile s'appelle la **résultante aérodynamique** $R_A$. Son point d'application est le **centre de poussée**.

On décompose $R_A$ en deux forces appelées portance $R_z$ et traînée $R_x$.

$$
\begin{cases}
R_z = \frac{1}{2} \rho S v^2 C_z \\
R_x = \frac{1}{2} \rho S v^2 C_x
\end{cases}
$$

$\rho$ est la masse volumique de l'air ($kg/m^3$).
$S$ est la surface alaire ($m^2$).
$V$ est la vitesse relative à l'air en ($m/s$).
$C_x$ et $C_z$ sont les coefficients de traînée et de portance de l'aile (sans dimension).


## Angle d'incidence de l'aile

L'angle d'incidence $\alpha$ est l'angle entre la direction de l'écoulement et la corde du profil d'aile.

Les coefficients de traînée $C_x$ et de portance $C_z$ dépendent de cet angle $\alpha$. Un profil d'aile traditionnel possède un $C_z$ positif pour un $\alpha$ nul.

Lorsque l'incidence $\alpha$ augmente, $C_z$ et $C_x$ augmentent de même, la portance est plus élevée et permet à l'aéronef de s'élever. En contrepartie, la trainée augmente légèrement et tend à ralentir l'appareil.

**Décrochage de l'aile** \
A partir d'une certaine limite, augmenter l'incidence provoquera un décrochage de l'aile. La circulation de l'air sur l'extrados se décolle et la portance chute brutalement. Cette limite dépend des caractéristiques de l'aile. On appelle $C_{z\ max}$ et $\alpha_{max}$ les valeurs correspondantes à cette limite.