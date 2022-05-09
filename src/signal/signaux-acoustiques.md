---
title: Signaux acoustiques
author: Ludwig Chieng
category: signal
tags: [signaux, acoustiques]

layout: sheet
---

# Signaux acoustiques

**Signal acoustique** \
Variation d'un champ de pression au cours du temps. On le note $x(t)$.


**Périodicité** \
Signal qui « se répète » à intervalle $T_0$. $\; \forall t, \, x(t+T_0) = x(t)$


**Valeur moyenne** sur un intervalle $[t_0, t_1]$ :

$$
  \frac{1}{t_1 - t_0} \,
  \int_{t_0}^{t_1} x(t) \! dt
$$


**Énergie** sur un intervalle $[0, T]$ :

$$
  \mathcal{E}(T)
= \int_{0}^{T} x(t)^2 \! dt
$$


**Puissance** sur un intervalle $[0, T]$ :

$$
  \mathcal{P}(T)
= \frac{\mathcal{E}(T)}{T}
$$


## Fourier

Le théorème de Fourier évalue les fréquences, phases et amplitudes des $sin$ et $cos$.

$$
e(t) = A \! \cos(2 \pi f t + \varphi)
\;\;\;\;
\begin{cases}
  \; A \text{: amplitude} \\
  \; f \text{: fréquence} \\
  \; t \text{: temps} \\
  \; \varphi \text{: phase} \\
\end{cases}
$$


**Représentation mathématique**

On pose $(\sigma, \omega) \in \R^2$.

$$
\begin{aligned}
  x(t) & = e^{(\sigma + i \omega) t} \\
  & = e^{\sigma t} \! e^{i \omega t} \\
  & = \underbrace{ e^{\sigma t} \! \cos(\omega t) }_{\text{partie réelle}}
    + i \! \underbrace{ e^{\sigma t} \! \sin(\omega t) }_{\text{partie imaginaire}}
\end{aligned}
$$


**Intégrale complexe**
On définit :

$$
  \int_{t_0}^{t_1} x(t) \! dt
= \int_{t_0}^{t_1} Re(x(t)) \! dt
+ i \int_{t_0}^{t_1} Im(x(t)) \! dt
$$

Les intégrations par parties et les changements de variables restent valides dans $\mathbb{C}$.


