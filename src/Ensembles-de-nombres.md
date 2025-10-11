# Ensembles de nombres

<!-- toc -->

## Les entiers

```admonish def
plop
```

```admonish rem
Dans le lycée, il y a un ensemble d'**humains**.

Parmi eux, il y a des **élèves** et parmi ces élèves il y a des **secondes**.

![](img/edn/01.png =600x center)
```

```admonish def
Parmi les nombres **entiers**, il existe :

- Entiers naturels : $\mathbb{N}$
  - Entiers (sans partie décimale) positifs : $0$ ; $1$ ; $4$ ; $999 \ldots$

- Entiers relatifs : $\mathbb{Z}$
  - Entiers positifs ou négatifs : $-6$ ; $-77$ ; $98$ ; $4$ $\ldots$

![](img/edn/nz.png =600x center)
```

```admonish ex
- $17$ appartient à $\mathbb{N}$ et à $\mathbb{Z}$
  - $17\in\mathbb{N}$ et $17\in\mathbb{Z}$

- $-2$ n'appartient pas à $\mathbb{N}$
  - $-2\notin\mathbb{N}$
```

### Multiples – diviseurs

```admonish def 
Soit $a$ et $b$, deux nombres entiers.

On dit que $a$ est un **multiple** $b$ s'il existe un entier $k$ tel que :

$$a=k\times b$$

$b$ est un **diviseur** de $a$.
```

```admonish def
- $27=3\times 9$ donc
  - $27$ est **multiple** de $3$ (et de $9$)
  - $9$ est un **diviseur** de $27$

- $85$ n'est pas un **multiple** de $10$ car :
  - $85=k\times 10\Leftrightarrow k=8.5$ et $k$ pas entier

![](img/edn/table-pythagore.png =400x center)
```

```admonish prop
Soit $a$ un entier.

La somme de deux **multiples** de $a$, est un **multiple** de $a$.
```

```admonish ex
$21$ et $33$ sont des **multiples** de $3$ donc $54=(21+33)$ est un **multiple** de $3$.

En effet, $54=18\times 3$
```

```admonish demo
Soit $n_1$ et $n_2$, deux multiples de $a$ alors :

$n_1=k_1\times a\quad$ et $\quad n_2=k_2\times a$

On a donc :

$n_1+n_2=(k_1\times a)+(k_2\times a)=(k_1+k_2)\times a$

Donc : $(n_1+n_2)$ est multiple de $a$
```

### Pair – impair

```admonish def
Un nombre **pair** est un multiple de $2$.

- Si $n$ est **pair** $\quad$ alors $\quad n=2k$
- Si $n$ est **impair** $\quad$ alors $\quad n=2k+1$
```

```admonish ex
- $157$ est **impair** car $157=(2\times 78)+1$
- $2048$ est **pair** car $2048=(2\times 1024)$
```

```admonish prop
Le **carré** d'un nombre **impair** est **impair**
```

```admonish demo
Soit $n$ un nombre **impair**. On a donc $\quad n=2k+1$

$\begin{aligned}
n^2&=(2k+1)^2=(2k+1)(2k+1)\\\\
  &=4k^2+4k+1\\\\
  &=2\color{red}(2k^{2}+2k)\color{black}+1\\\\
  &=2\color{red}K\color{black}+1
\end{aligned}$

Si $n$ est **impair** alors $n^2$ est **impair**.
```

### Nombres premiers

```admonish def
Un entier naturel est dit **premier**, s'il admet _exactement_ **deux diviseurs** entiers positifs.
```

```admonish ex

- $25$ admet comme diviseurs $1$, $5$ et $25$ $\rightarrow$ **pas premier**
- $17$ admet comme diviseurs $1$ et $17\rightarrow\quad$ **premier**
- $221$ admet comme diviseurs $\ldots\rightarrow\quad\ldots$
```

### Décomposition en facteurs premiers

```admonish ex
- $60=30\times 2\quad=15\times 2\times 2\quad=3\times 5\times 2\times 2\\\\$
  La décomposition de $60$ en facteurs **premiers** est : $\qquad 60=3^1\times 5^1\times 2^2$
```

```admonish ex
- $1300=\ldots$

$$
	\begin{array}{c|cl}
		1300 & 2  & ~\\\\
		650  & 2  & ~\\\\
		325  & 5  & ~\\\\
		65   & 5  & ~\\\\
		13   & 13 & ~\\\\
		1    & ~  & \qquad\rarr 1300=13\times 5^2 \times 2^2\\\\
	\end{array}
$$

```

## Les ensembles $\mathbb{D}$, $\mathbb{Q}$ et $\mathbb{R}$

### Les décimaux : $\mathbb{D}$

```admonish def
Nombres dont **la partie décimale est ﬁnie**. On peut les écrire sous la forme :

$$\cfrac{a}{10^n}\quad\text{avec}\quad a\in\mathbb{Z}$$
```

```admonish ex
- $1.77=\cfrac{177}{100}=\cfrac{177}{10^2}\qquad$ donc $\quad 1.77 \in \mathbb{D}$
- $-5.001=\cfrac{-5001}{1000}=\cfrac{-5001}{10^3}\qquad$donc$\quad -5.001\in\mathbb{D}$
- $0.009= \ldots$
- $\ldots=\cfrac{-1234}{10^2}$
```

### Les rationnels : $\mathbb{Q}$

```admonish def
Ils peuvent s'écrire sous la forme : $\quad\cfrac{a}{b}\quad$ avec $a\in\mathbb{Z}$ et $b\in\mathbb{Z}^{*}$
```

```admonish ex
- $\cfrac{2}{7}\in\mathbb{Q}$
- $\cfrac{1}{3}=0.3333\ldots\in\mathbb{Q}$
- $\cfrac{50}{7}=7.142~857~142~857~\ldots\in\mathbb{Q}$
```

```admonish rem
La partie décimale peut se "répéter" à l'infini.
```

### Les réels : $\mathbb{R}$

```admonish def
Tous les nombres connus en seconde.
```

```admonish ex
$-16$ ; $\sqrt{3}$ ; $\pi$ ; $\ldots$
```

### Ensembles de nombres à connaître$^\heartsuit$
```admonish alert title="Ensembles de nombres"
![](img/edn/00.png =600x center)
```

```admonish demo
Démontrons que $\cfrac{1}{3}$ **n'** appartient **pas** aux décimaux.

**Supposons** que $\cfrac{1}{3}$ appartient aux décimaux alors il peut s'écrire sous la forme : $\cfrac{a}{10^n}$

$$\cfrac{1}{3}\in\mathbb{D}\quad\Leftrightarrow\quad\cfrac{1}{3}=\cfrac{a}{10^n}$$

$$
\begin{aligned}
\cfrac{1}{3}\in\mathbb{D}\quad&\Leftrightarrow\quad\cfrac{1}{3}=\cfrac{a}{10^n}\\\\
             \quad&\Leftrightarrow\quad 3\times a=1\times{10^n}\\\\
             \quad&\Leftrightarrow\quad 3a=10^n\\\\
\end{aligned}
$$

On a :

- $3a$ est un multiple de $3$ donc la **somme des ses chiffres** doit être un multiple de $3$.
- $10^n$ est un nombre constitué d'un seul $1$ et de zéros donc la **somme des ses chiffres** est $1$.

Donc $10^n$ n'est pas un multiple de $3$,$\quad$ donc $10^n\neq 3\times a\quad$ donc $\cfrac{1}{3}\notin\mathbb{D}$
```

## Intervalles de $\mathbb{R}$ et valeur absolue

```admonish rem
L'ensemble $I$ de tous les nombres réels $x$ tels que $2 \leq x \leq 4$ peut se représenter sur une droite graduée :

![](img/edn/int2_4.png =600x center)

Cet ensemble est appelé un **intervalle** et se note :

$$I=\big[2~;~4\big]$$
```

```admonish ex
L'ensemble $J$ des réels $x$ tels que $~ -2\leq x\leq 7~$ se note :

$$J=\big[-2~;~7\big]$$

On a : $\quad 4\in[-2;7]\quad$ et $\quad -5\notin[-2;7]$
```

```admonish ex
|          Notation          |     Inégalité      |           Représentation           |
| :------------------------: | :----------------: | :--------------------------------: |
|     $\big[0~;~1\big]$      |  $0\leq x \leq 1$  | ![](img/edn/t_01.png =350x center) |
|     $\big]-1~;~3\big]$     |   $-1< x \leq 3$   | ![](img/edn/t_02.png =350x center) |
|   $\big[-0.5~;~2.3\big[$   | $-0.5\leq x < 2.3$ | ![](img/edn/t_04.png =350x center) |
|     $\big]2~;~4\big[$      |     $2< x <4$      | ![](img/edn/t_03.png =350x center) |
| $\big]-\infty~;~1.5\big]$  |    $x \leq 1.5$    | ![](img/edn/t_05.png =350x center) |
| $\big]-\infty~;~-1.7\big[$ |     $x < -1.7$     | ![](img/edn/t_08.png =350x center) |
|  $\big]-2~;~+\infty\big[$  |      $x > -2$      | ![](img/edn/t_06.png =350x center) |
| $\big[2.7~;~+\infty\big[$  |    $x \geq 2.7$    | ![](img/edn/t_07.png =350x center) |
```

```admonish rem
L'ensemble $\mathbb{R}$ est un intervalle qui se note :

$$\mathbb{R}=\big]-\infty~;~+\infty\big[$$
```

```admonish def
- L'**intersection** de deux ensembles $A$ et $B$ est l'ensemble des éléments qui appartiennent à $A$ **et** à $B$ et se note :

$$A \cap B$$

- La **réunion** (ou **l'union**) de deux ensembles $A$ et $B$ est l'ensemble des éléments qui appartiennent à $A$ **ou** à $B$ et se note :

$$A \cup B$$
```

```admonish ex
$I=\big[0~;~3\big]\qquad\text{et}\qquad J=\big[1\~;~5\big]$

![](img/edn/inter_union.png =600x center)
```

### Valeur absolue

```admonish def
La distance de deux réels $a$ et $b$ est la distance des points $A$ et $B$ d'abscisses $a$ et $b$ sur la droite numérique.
```

```admonish ex
![](img/edn/distance.png =600x center)
```

```admonish rem
- Si $(a<b)$ alors la distance est $\left(b-a\right)$
- Si $(a>b)$ alors la distance est $\left(a-b\right)$

On note la distance : $\quad\left|a-b\right|\quad$ et on lit $\quad$ **valeur absolue de** $(a-b)$
```

```admonish ex
La distance de $5$ à $18$ est $\quad\left|5-18\right|=18-5=13$

![](img/edn/distance.png =600x center)
```

```admonish def
La **valeur absolue** d'un réel $x$ est la distance de ce réel à $0$.

Elle est notée : $\abs{x}$
```

```admonish ex
- $\left|3\right|=3$
- $\left|\sqrt{2}\right|=\sqrt{2}$
- $\left|-4\right|=4$
- $\left|-0.177\right|=0.177$

![](img/edn/distance2.png =400x center)
```

```admonish prop
On a, pour tout $x\in\mathbb{R}$ :

$$\abs{x}=\begin{cases}x&\text{si}~x\geq 0\\\\-x&\text{si}~x<0\end{cases}$$
```

```admonish ex
- $\left|3\right|=3\quad$ car $~3>0$
- $\left|-7\right|=-(-7)=7\quad$ car $~(-7)<0$
```

```admonish prop
L'intervalle $\big[a-r~;~a+r\big]$ est l'ensemble des $x$ tel que :

$$\big|x-a\big|\leq r$$

![](img/edn/valabs.png =400x center)
```
