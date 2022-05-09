---
title: Développements limités
author: Ludwig Chieng
tags: [maths, developpements, limités, taylor, young]

layout: sheet
---

# Développements limités de Taylor-Young

[[toc]]

## Formule de Taylor-Young

Si $f$ admet une dérivée $n$-ième au point $a$, alors elle admet un développement limité à l'ordre $n$ en $a$, donné par :

$$
f(x)=f(a)+{\frac{f'(a)}{1!}}(x-a)^{1}+{\frac{f''(a)}{2!}}(x-a)^{2}+\dots +{\frac {f^{(n)}(a)}{n!}}(x-a)^{n}+o((x-a)^{n}) \\
$$

ou, sous forme plus compacte :

$$
f(x)=\sum _{k=0}^{n}{\frac {f^{(k)}(a)}{k!}}(x-a)^{k}+o((x-a)^{n})
$$

## Formules

$$
\def\arraystretch{1.5}
\begin{aligned}
  & \mathrm {e} ^{x}=1+x+{\frac {x^{2}}{2!}}+\cdots +{\frac {x^{n}}{n!}}+o(x^{n})
  \\
  & \sin x=x-{\frac {x^{3}}{3!}}+{\frac {x^{5}}{5!}}+\cdots +{\frac {(-1)^{n}x^{2n+1}}{(2n+1)!}}+o(x^{2n+1})
  \\
  & \cos x=1-{\frac {x^{2}}{2!}}+{\frac {x^{4}}{4!}}+\cdots +{\frac {(-1)^{n}x^{2n}}{(2n)!}}+o(x^{2n})
  \\
  & (1+x)^{a} = 1+ax+{\frac {a(a-1)x^{2}}{2!}}+{\frac {a(a-1)(a-2)x^{3}}{3!}}+\cdots +{\frac {a(a-1)\cdots (a-n+1)x^{n}}{n!}}+o(x^{n})
  \\
  & \frac {1}{1+x} = (1+x)^{-1}=1-x+x^{2}-x^{3}+x^{4}+\cdots +(-1)^{n}x^{n}+o(x^{n})
  \\
  & \frac {1}{1-x} = (1-x)^{-1}=1+x+x^{2}+x^{3}+x^{4}+\cdots +x^{n}+o(x^{n})
  \\
  & \ln(1+x)=\int {\frac {\mathrm {d} x}{1+x}}=\int (1+x)^{-1}\mathrm {d} x=x-{\frac {x^{2}}{2}}+{\frac {x^{3}}{3}}-{\frac {x^{4}}{4}}+{\frac {x^{5}}{5}}+o(x^{5})
\end{aligned}
$$