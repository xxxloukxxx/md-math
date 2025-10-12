# Proportion - Évolution

<!-- toc -->

## Proportion

### Rappels

```admonish def
La proportion d'une **sous-population** (d'effectif $n$) parmi une **population totale** (d'effectif $N$) est égale à :

$$p=\cfrac{n}{N}$$

En pourcentage :

$$p_{\\%}=\cfrac{n}{N}\times 100$$
```

```admonish rem
Pour calculer un effectif à l'aide d'une proportion, on peut utiliser :

- $n = p \times N$
- $N = \cfrac{n}{p}$
```

```admonish meth title="Méthode : Calculer une proportion"
Dans la classe de 2$^{nde}$ de $35$ élèves, $14$ élèves ont les yeux bleus.

$$p_{\\%}=\cfrac{n}{N}\times 100=\cfrac{14}{35}\times 100=40$$

Ils représentent $40\\%$ de la classe.
```

```admonish meth title="Méthode : Calculer un effectif"
Dans un lycée de $856$ élèves, $35$\% mangent à la cantine le midi.

$$n = p \times N=\cfrac{35}{100}\times 856\approx300$$

Il y a $300$ élèves qui mangent à la cantine le midi.
```

### Proportion de proportion

```admonish prop
Soit "$A$ inclus dans $B$" et "$B$ inclus dans $C$".
Soit :

- $p_1$ la proportion de $A$ dans $B$
- $p_2$ la proportion de $B$ dans $C$.

Alors $p=p_1\times p_2$ est la proportion de $A$ dans $C$.

![](img/evo/02.png =600x center)
```

```admonish ex
Dans un car, il y a $40\\%$ de scolaires et, parmi les scolaires, $60\\%$ sont des filles.

La proportion de "scolaires filles" dans le car est :

$$60\\%\text{  de  }40\\%=0.6\times0.4=0.24$$
```

## Évolution exprimée en pourcentage

### Taux d'évolution et coefficient multiplicateur

```admonish def
On considère une valeur $Vi$ qui subit une évolution pour arriver à une valeur $Vf$.

Le **taux d'évolution** est égal à :

$$t=\cfrac{V_f-V_i}{V_i}$$
```

```admonish rem
En pourcentage, le **taux d'évolution** est égal à :

$$t_\\%=100\times \cfrac{V_f-V_i}{V_i}$$
```

```admonish rem
- Si $t>0$, l'évolution est une augmentation.
- Si $t<0$, l'évolution est une diminution.
```

```admonish ex
La population d'un village est passé de $8 500$ à $10 400$ entre 2008 et 2012.
Le taux d'évolution de la population, en pourcentage, est :

$$t=\cfrac{V_f-V_i}{V_i}=\cfrac{10 400-8 500}{8 500}\approx 0.224\quad\text{soit}\quad+22.4\\%$$
```

```admonish prop
- Faire évoluer une valeur de $\pm t\\%$ revient à la multiplier par $\left(1+\cfrac{t}{100}\right)$
- $\left(1+\cfrac{t}{100}\right)$ est appelé **coef. multiplicateur**

$$CM =\left(1+\cfrac{t}{100}\right)\quad\text{et}\quad t= \left(CM-1\right)\times 100$$
```

```admonish ex
Le prix d'un survêtement est de $49$€. Il **augmente** de $8\\%$.

Son nouveau prix est égal à :

- $CM =\left(1+\cfrac{t}{100}\right)=\left(1+\cfrac{+8}{100}\right)=1.08$
- Le nouveau prix est : $49\times1.08=52.25$€

![](img/evo/03.png =400x center)
```

```admonish ex
Le prix d'un polo est de $21$€. Il **diminue** de $12\\%$.

Son nouveau prix est égal à :

- $CM =\left(1+\cfrac{t}{100}\right)=\left(1+\cfrac{-12}{100}\right)=0.88$
- Le nouveau prix est : $21\times0.88=18.48$€

![](img/evo/04.png =400x center)
```

```admonish demo
Si on fait évoluer une valeur $V_i$ de $t\\%$ alors sa valeur $V_f$ après l'évolution est égale à :

$$
\begin{aligned}
	V_f & =V_i + V_i\times \cfrac{t}{100}          \\\\
	~   & =V_i\times\left(1+ \cfrac{t}{100}\right)\end{aligned}
$$
```

### Taux d’évolution global

```admonish prop
Si une grandeur subit des **évolutions successives** alors le **coefficient multiplicateur global** est égal aux **produits** des **coefficients multiplicateurs** de chaque évolution.

$$CM_g=CM_1\times CM_2\times CM_3\times \ldots$$
```

```admonish ex
Une valeur subit une **baisse** de $20\\%$ puis une **hausse** de $30\\%$.

Le **coef.multiplicateur global** est :

$$\begin{aligned}
	CM_g & =CM_1\times CM_2 \\\\&=0.8\times1.3\\\\&=1.04
\end{aligned}$$

Soit une augmentation de $4\\%$

![](img/evo/05.png =600x center)
```

```admonish ex
En 2010, la boulangerie a **augmenté** ses ventes de $10\\%$.

En 2011, elle a **diminué** ses ventes de $5\\%$.

- $CM_1=1+\cfrac{+10}{100}=1.1\quad\text{et}\quad CM_2=1+\cfrac{-5}{100}=0.95$

- Le coef. multiplicateur global est :
$\begin{aligned}
		CM_g & =CM_1\times CM_2 \\\\~&=1.1\times0.95=1.045
	\end{aligned}$

- Soit une évolution de
$\begin{aligned}
		t_g & =(CM_g-1)\times 100 \\\\~&=(1.045-1)\times 100=+4.5\\%
	\end{aligned}$

![](img/evo/06.png =800x center)
```

### Taux d'évolution réciproque

```admonish def
On considère le taux $t$ d'évolution de la valeur $V_0$ à la valeur $V_1$.

On appelle **évolution réciproque** le taux $t'$ d'évolution de la valeur $V_1$ à la valeur $V_0$.

![](img/evo/07.png =600x center)
```

```admonish prop
L'évolution **réciproque** possède un coefficient multiplicateur **inverse** de l'évolution directe.

$$CM_R=\cfrac{1}{CM}$$
```

```admonish ex
Le **coef. multiplicateur réciproque** d'une **baisse** de $20\\%$ est :

$$
\begin{aligned}
	CM_R & = \cfrac{1}{CM}  \\\\
	~    & = \cfrac{1}{0.8} &\quad =1.25
\end{aligned}
$$

Soit une **augmentation** de $t_{R}=25\\%$

![](img/evo/08.png =200x center)
```

## [Carte mentale](https://mermaid.live/view#pako:eNqNVN1umzAUfpUjCylECxmQEBKkXGXTrlJNU5WLyVLkgUktge0aU2VDPMAepc-RF6tDQ2KmttoNss85348_wA1KRUZRgjzPwzwVPGeHBHMA_UBLmsDoF6noCPOuXTKelUSe20oIPR5_V0IKpZng8BlOf59EUZ83rnseAbi1X_cAFsLtawAuRhZTAo6D8WNNMpBrjHNF0oa3zV1rymg8QH3Nc5pqltsYvpaAsWYlreDuA8i90KSwgXeWmByKuZa9jFrnGnI7jtwHsAa5D68W5H5mUY2tkK7ktxpUrJQFHbLek_oI2ej03E9ZnnXvebfPwYPdnrXNzmNvROU4my1cUMYbPeqG6rav6H8AHWQjaD7d1oVmUzsnw7OGAD7BRVq3TeD77VsMH1t3N1svGPdBGY5h5nYsdZrSqmJPtBqe6l2L-29r8wh6crMOL2uMi0zoCt4VU6fnlEklHmv6v2I_-tcQtM1m20eBr589mqCDYhlKclJUdIJKqkpy3qPmPIJR97dhlJhlRnNiNDDCvDU4SfhPIUqUaFUbpBL14eHKU8uMaPqFkYMitxHKM6o2ouYaJVEYdBwoadARJbNgGi6XQRTFYTwPl3E8m6DfpuwvpvNV4C9MK176y3k7QX86VX-6ioJZvFhFKz9azXw_nCCaMS3U9vXe6K6P9gXaNE8L)
