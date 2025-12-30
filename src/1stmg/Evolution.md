# Évolution

<!-- toc -->

## Évolution exprimée en pourcentage

```admonish def
On considère une valeur $V_i$ qui subit une évolution pour arriver à une valeur $V_f$.

Le **taux d'évolution** est égal à :

$$\boxed{t=\cfrac{V_f-V_i}{V_i}}$$
```

```admonish rem
En pourcentage, le **taux d'évolution** est égal à :

$$t_\\%=100\times \cfrac{V_f-V_i}{V_i}$$
```

```admonish rem
- Si $t\gt 0$, l'évolution est une **augmentation**.
- Si $t\lt 0$, l'évolution est une **diminution**.
```

```admonish ex
La population d'un village est passé de $8 500$ à $10 400$ entre 2008 et 2012.

Le taux d'évolution de la population, en pourcentage, est :

$$t=\cfrac{V_f-V_i}{V_i}=\cfrac{10 400-8 500}{8 500}\approx 0.224\quad\text{soit}\quad+22.4\\%$$
```

```admonish prop
- Faire évoluer une valeur de $\pm t\\%$ revient à la multiplier par $\left(1+\cfrac{t}{100}\right)$
- $\left(1+\cfrac{t}{100}\right)$ est appelé **coef. multiplicateur**

$$\boxed{CM =\left(1+\cfrac{t}{100}\right)}\quad\text{et}\quad\boxed{t= \left(CM-1\right)\times 100}$$
```

```admonish ex
Le prix d'un survêtement est de $49$€.

Il **augmente** de $8\\%$.

![](img/evolution/03.png =250x center)

Son nouveau prix est égal à :

- $CM =\left(1+\cfrac{t}{100}\right)=\left(1+\cfrac{+8}{100}\right)=1.08$
- Le nouveau prix est : $49\times1.08=52.25$€
```

```admonish ex
Le prix d'un polo est de $21$€.

Il **diminue** de $12\\%$.

![](img/evolution/04.png =250x center)

Son nouveau prix est égal à :

- $CM =\left(1+\cfrac{t}{100}\right)=\left(1+\cfrac{-12}{100}\right)=0.88$
- Le nouveau prix est : $21\times0.88=18.48$€
```

```admonish def
Si on fait évoluer une valeur $V_i$ de $t\\%$ alors sa valeur $V_f$, après l'évolution, est égale à :

$$
\begin{aligned}
	V_f & =V_i + V_i\times \cfrac{t}{100}          \\\\
	\   & =V_i\times\left(1+ \cfrac{t}{100}\right)\end{aligned}
$$
```

## Taux d’évolution global

```admonish prop
Si une grandeur subit des **évolutions successives** alors le **coefficient multiplicateur global** est égal aux **produits** des **coefficients multiplicateurs** de chaque évolution.

$$\boxed{CM_g=CM_1\times CM_2\times CM_3\times \ldots}$$
```

```admonish ex
Une valeur subit une **baisse** de $20\\%$ puis une **hausse** de $30\\%$.

![](img/evolution/05.png =550x center)

Le **coef.multiplicateur global** est :

$$
\begin{aligned}
	CM_g & =CM_1\times CM_2         \\\\
	\    & =0.8\times1.3\qquad=1.04
\end{aligned}
$$

Soit une augmentation de $4\\%$
```

```admonish ex
En 2010, la boulangerie a **augmenté** ses ventes de $10\\%$.

En 2011, elle a **diminué** ses ventes de $5\\%$.

- $CM_1=1+\cfrac{+10}{100}=1.1\quad\text{et}\quad CM_2=1+\cfrac{-5}{100}=0.95$

- Le coef. multiplicateur global est :

$$
\begin{aligned}
	CM_g & =CM_1\times CM_2     \\\\
	\    & =1.1\times0.95=1.045
\end{aligned}
$$

- Soit une évolution de :

$$
\begin{aligned}
	t_g & =(CM_g-1)\times 100       \\\\
	\   & =(1.045-1)\times 100=+4.5 \\%
\end{aligned}
$$

![](img/evolution/06.png =750x center)
```

## Taux d'évolution réciproque

```admonish def
On considère le taux $t$ d'évolution de la valeur $V_0$ à la valeur $V_1$.
On appelle **évolution réciproque** le taux $t'$ d'évolution de la valeur $V_1$ à la valeur $V_0$.

![](img/evolution/07.png =550x center)
```

```admonish prop
L'évolution **réciproque** possède un coefficient multiplicateur **inverse** de l'évolution directe.

$$\boxed{CM_R= \cfrac{1}{CM}}$$
```

```admonish ex
![](img/evolution/08.png =250x center)

Le **coef. multiplicateur réciproque** d'une **baisse** de $20\\%$ est :

$$
\begin{aligned}
	CM_R & = \cfrac{1}{CM}            \\\\
	\    & = \cfrac{1}{0.8}\  & =1.25
\end{aligned}
$$

Soit une **augmentation** de $t_{R}=25\\%$
```
