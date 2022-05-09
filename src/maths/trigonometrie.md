---
title: Trigonométrie
author: Ludwig Chieng
tags: [maths, analyse, fonction, trigonométrie, trigo]

layout: sheet
---

# Trigonométrie

**Identités de bases**

$$
\def\arraystretch{1.5}
\begin{aligned}
  & \boxed{\tan \left(x\right)=\frac{\sin \left(x\right)}{\cos \left(x\right)}}
  & \tan \left(x\right)=\frac{1}{\cot \left(x\right)}
  && \cot \left(x\right)=\frac{1}{\tan \left(x\right)}
  \\
  & \cot \left(x\right)=\frac{\cos \left(x\right)}{\sin \left(x\right)}
  & \sec \left(x\right)=\frac{1}{\cos \left(x\right)}
  && \csc \left(x\right)=\frac{1}{\sin \left(x\right)}
\end{aligned}
$$

---
**Identités pythagoriciennes**

$$
\def\arraystretch{1.5}
\begin{aligned}
  & \boxed{\cos ^2\left(x\right)+\sin ^2\left(x\right)=1}
  & \sec ^2\left(x\right)-\tan ^2\left(x\right)=1
  \\
  & \csc ^2\left(x\right)-\cot ^2\left(x\right)=1
\end{aligned}
$$

---
**Formules d'Euler**

$$
\def\arraystretch{1.5}
\begin{aligned}
    \cos(x) & = \frac{e^{i x} + e^{-i x}}{2}
    \\
    \sin(x) & = \frac{e^{i x} - e ^{-i x}}{2i}
\end{aligned}
$$

---
**Angle double**

$$
\def\arraystretch{1.5}
\begin{aligned}
  & \sin \left(2x\right)=2\sin \left(x\right)\cos \left(x\right)
  & \cos \left(2x\right)=1-2\sin ^2\left(x\right)
  \\
  & \cos \left(2x\right)=2\cos ^2\left(x\right)-1
  & \cos \left(2x\right)=\cos ^2\left(x\right)-\sin ^2\left(x\right)
  \\
  & \tan \left(2x\right)=\frac{2\tan \left(x\right)}{1-\tan ^2\left(x\right)}
\end{aligned}
$$

---
**Sommes et différences**

$$
\def\arraystretch{1.5}
\begin{aligned}
  & \sin \left(s+t\right)=\sin \left(s\right)\cos \left(t\right)+\cos \left(s\right)\sin \left(t\right) \\
  & \sin \left(s-t\right)=\sin \left(s\right)\cos \left(t\right)-\cos \left(s\right)\sin \left(t\right) \\
  & \cos \left(s+t\right)=\cos \left(s\right)\cos \left(t\right)-\sin \left(s\right)\sin \left(t\right) \\
  & \cos \left(s-t\right)=\cos \left(s\right)\cos \left(t\right)+\sin \left(s\right)\sin \left(t\right) \\
  & \tan \left(s+t\right)=\frac{\tan \left(s\right)+\tan \left(t\right)}{1-\tan \left(s\right)\tan \left(t\right)}
  & \tan \left(s-t\right)=\frac{\tan \left(s\right)-\tan \left(t\right)}{1+\tan \left(s\right)\tan \left(t\right)}
\end{aligned}
$$

---
**Produit avec deux angles différents**

$$
\def\arraystretch{1.5}
\begin{aligned}
  & \cos \left(s\right)\cos \left(t\right)=\frac{\cos \left(s-t\right)+\cos \left(s+t\right)}{2}
  & \sin \left(s\right)\sin \left(t\right)=\frac{\cos \left(s-t\right)-\cos \left(s+t\right)}{2} \\
  & \sin \left(s\right)\cos \left(t\right)=\frac{\sin \left(s+t\right)+\sin \left(s-t\right)}{2}
  & \cos \left(s\right)\sin \left(t\right)=\frac{\sin \left(s+t\right)-\sin \left(s-t\right)}{2}
\end{aligned}
$$