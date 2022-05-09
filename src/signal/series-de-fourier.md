---
title: Séries de Fourier
author: Ludwig Chieng
tags: [signal, séries, fourier]

layout: sheet
---

# Séries de Fourier

## Polynôme trigonométrique

$$
\def\arraystretch{1.5}
\begin{aligned}
  P_N(t) & = \frac{a_0}{2}
+ \sum_{k=1}^{N} \Big(
  a_k \! \cos(2 \pi k f_0 t)
+ b_k \! \sin(2 \pi k f_0 t)
  \Big) \\

  & = \sum_{k=-N}^{N}
  c_k \! e^{i 2 \pi k f_0 t} \\
\end{aligned}
$$