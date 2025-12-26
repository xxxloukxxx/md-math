# Calcul intégral (1)

<!-- toc -->

## Intégrale et aire

```admonish note title="Un peu d'histoire"
![](img/int/image2.jpeg#right =150x)

En 1696, Jacques Bernoulli reprend le mot latin "integer", déjà utilisé au XIVe siècle, pour désigner le calcul intégral.

À cette époque, on partait de l'équation de la courbe pour calculer l'aire sous la courbe, c'est à dire du "bord" de la surface à la surface entière (intégrale).

```

### Unité d'aire

```admonish rem
Dans le repère $\OIJ$, le rectangle rouge a comme dimension $1$ sur $1$.

![](img/int/image3.png =500x center)

Il s'agit du rectangle "unité" qui a pour aire $1$ unité d'aire. On écrit $1\ u.a.$

L'aire du rectangle vert est égale à $8$ fois l'aire du rectangle rouge.

L'aire du rectangle vert est donc égale à $8\ u.a.$

```

### Définition

![](img/int/image4.png =400x center)

```admonish def
Soit $f$ une fonction continue et positive sur $\lbrack a;b\rbrack$.

On appelle **intégrale de $f$** sur $\lbrack a;b\rbrack$ **l'aire**, exprimée en u.a., de la surface délimitée par :

- $\Cf$
- l'axe des abscisses
- les droites d'équations $x = a$ et $x = b$
```

### Notation

```admonish note title="Notation"
L'intégrale de la fonction $f$ sur $\lbrack a;b\rbrack$ se note : $\boxed{\dint_{a}^{b}{f(x)}dx}$.

```

```admonish rem
- $a$ et $b$ sont appelés les **bornes d'intégration**.
- $x$ est la **variable d'intégration**. Elle peut être remplacée par toute autre lettre qui n'intervient pas par ailleurs.

Ainsi on peut écrire : $\dint_{a}^{b}{f(x)}dx = \dint_{a}^{b}{f(t)}dt$.

"$dx$" ou "$dt$" nous permet de reconnaître la variable d'intégration.
```

```admonish note title="Un peu d'histoire"
![](img/int/image5.png#right =150x)

Cette notation est due au mathématicien allemand _Gottfried Wilhelm von Leibniz_ (1646 ; 1716).

Ce symbole fait penser à un "S" allongé et s'explique par le fait que l'intégral est égal à une aire calculée comme somme infinie d'autres aires.

```

```admonish ex
Soit $f(x)=x^2+1$ définie sur $\R$.

![](img/int/image6.png =400x center)

L'aire de la surface délimitée par :

- $\Cf$
- l'axe des abscisses
- les droites d'équations $x=-2$ et $x=1$

...est l'intégrale de la fonction $f$ sur l'intervalle $\lbrack - 2 ; 1\rbrack$ et se note :

$$\int_{-2}^{1}\pa{x^{2} + 1}dx$$
```

```admonish meth title="Méthode : Déterminer une intégrale par calculs d'aire (1)"
a. Tracer la représentation graphique de $f$ définie par $f(x) = \dfrac{1}{2}x+3$ dans un repère orthonormé.

b. Calculer $\dint_{- 1}^{5}{f(x)}dx$.

---

a. _Représentation graphique_

![](img/int/image7.png =600x center)

b. _Calcul d'aire_

Calculer $\dint_{-1}^{5}{f(x)}dx$ revient à calculer l'aire de la surface délimitée par :

- $\Cf$
- l'axe des abscisses
- les droites d'équations $x=-1$ et $x=5$.

Donc par dénombrement, on obtient : $\ \dint_{-1}^{5}{f(x)}dx=21\ u.a.+3\ u.a.=24\ u.a.$
```

### Encadrement de l'intégrale d'une fonction monotone et positive

```admonish meth title="Méthode : Encadrement par des rectangles"
Soit $f$ continue, positive et monotone sur $\lbrack a;b\rbrack$.

On partage l'intervalle $\lbrack a ;b\rbrack$ en $n$ sous-intervalles de même amplitude $l = \dfrac{b - a}{n}$.

Sur un sous-intervalle $\lbrack x ;x + l\rbrack$, l'aire sous la courbe est comprise entre l'aire de deux rectangles :

- l'un de dimension $l$ et $f(x)$ qui a pour aire : $l \times f(x)$
- l'autre de dimension $l$ et $f(x + l)$ qui a pour aire $l \times f(x + l)$

![](img/int/image8.png =500x center)

Sur l'intervalle $\lbrack a ;b\rbrack$, l'aire sous la courbe est comprise entre la somme des $n$ rectangles "inférieurs" et la somme des $n$ rectangles "supérieurs".

Voici un algorithme permettant d'obtenir un tel encadrement :

|            Langage naturel             |       Python (avec $f(x)=x^2$)       |
| :------------------------------------: | :----------------------------------: |
| ![](img/int/image9.0.png =400x center) | ![](img/int/image9.png =300x center) |
```

```admonish ex
Avec Python, on programme cet algorithme pour la fonction $f(x) = x^{2}$ sur l'intervalle $\lbrack 1\ ;\ 2\rbrack$.

On exécute plusieurs fois le programme pour obtenir un encadrement de l'intégrale de la fonction $x^2$ sur \[1 ; 2\].

En augmentant le nombre de sous-intervalles, la précision du calcul s'améliore car l'encadrement formé de rectangles inférieurs et supérieurs se resserre autour de la courbe.

![](img/int/image10.png =400x center)

On en déduit que : $\ 2,31 \less \dint_{1}^{2}x^{2} dx \less 2,35$

Il est possible de vérifier avec la calculatrice.

![](img/int/image11.png =400x center)
```

### Extension aux fonctions de signe quelconque

```admonish prop
![](img/int/image12.png =400x center)

Soit $f$ une fonction continue et **négative** sur un
intervalle $\lbrack a ;b\rbrack$.

L'aire, exprimée en u.a., de la surface délimitée par :

- $\Cf$
- l'axe des abscisses
- et les droites d'équations $x = a$ et $x = b$

... est égale à : $\boxed{-\dint_{a}^{b}{f(x)}dx}$
```

```admonish prop title="Propriété : bornes d'intégration"
a. $\dint_{a}^{a}{f(x)}dx = 0$

b. $\dint_{b}^{a}{f(x)}dx = -\dint_{a}^{b}{f(x)}dx$

c. Relation de Chasles : $$\dint_{a}^{c}{f(x)}dx+\dint_{c}^{b}{f(x)}dx=\dint_{a}^{b}{f(x)}dx$$
```

```admonish meth title="Méthode : Déterminer une intégrale par calculs d'aire (2)"
a. Représenter la droite d'équation $\ y=3-x\ $ dans un repère.

b. En déduire $\dint_{2}^{5}\pa{3 - x}dx$ en effectuant des calculs d'aire.

---

![](img/int/image13.png =400x center)

La droite $y=3-x$ coupe l'axe des abscisses en $x = 3$.

Donc, $\pa{3-x}\ge 0$ sur l'intervalle $\lbrack 2;3\rbrack$

Et, $\pa{3-x}\le 0$ sur l'intervalle $\lbrack 3;5\rbrack$.

la relation de Chasles, on a :

$$\int_{2}^{5}\pa{3-x}dx=\int_{2}^{3}\pa{3-x}dx+\int_{3}^{5}\pa{3-x}dx$$

Donc :

$$\int_{2}^{5}\pa{3-x}dx=\pa{\frac{1\times1}{2}}+\left(-\frac{2\times2}{2}\right)=- 1,5$$
```

```admonish rem
Si une intégrale est nulle, alors la fonction n'est pas nécessairement nulle.

On a par exemple : $\dint_{-2}^{2}x^{3}dx = 0$

En effet, la courbe représentative de $x^3$ est symétrique par rapport à l'origine du repère, donc :

$$\int_{-2}^{0}x^{3}dx=-\int_{0}^{2}x^{3}dx\quad\rarr\quad\int_{-2}^{2}x^{3}dx=\int_{-2}^{0}x^{3}dx+\int_{0}^{2}x^{3}dx=0$$

![](img/int/image15.png =300x center)
```

## Intégrale et primitive

### Fonction définie par une intégrale

```admonish th
Soit $f$ une fonction continue sur un intervalle $\lbrack a ;b\rbrack$.

La fonction $F$ définie sur $\lbrack a ;b\rbrack$ par $\ \boxed{F(x) = \dint_{a}^{x}{f(t)}dt}$ est la **primitive** de $f$ qui s'annule en $a$.

![](img/int/image16.png =400x center)
```

```admonish demo title="Démonstration : Cas où $f $est strictement croissante"
- _1er cas :_ $h > 0$

> On considère deux réels $x$ et $(x+h)$ de l'intervalle $\lbrack a ;b\rbrack$.
>
> On veut démontrer que : $F'(x) = f(x)\ $ soit $\ \limite_{h\to 0}\pa{\dfrac{F(x+h)-F(x)}{h}}=f(x)$
>
> On a :
>
> $$
> 	\begin{array}{rcl}
> 		F(x+h)-F(x) & = & \dint_{a}^{x+h}{f(t)}dt-\dint_{a}^{x}{f(t)}dt \\\\
> 		            & = & \dint_{a}^{x+h}{f(t)}dt+\dint_{x}^{a}{f(t)}dt \\\\
> 		            & = & \dint_{x}^{a}{f(t)}dt+\dint_{a}^{x+h}{f(t)}dt\qquad = \dint_{x}^{x+h}{f(t)}dt
> 	\end{array}
> $$
>
> On a représenté ci-dessous, la courbe de la fonction $f$ (en vert).
>
> ![](img/int/image17.png =400x center)
>
> Donc $F(x+h)-F(x)$ est égale à l'aire de la surface rouge.
>
> Elle est comprise entre les aires de $ABFE$ et $ABHG$.
>
> Or, $\text{Aire}(ABFE)=h\times f(x)\ $ et $\ \text{Aire}(ABHG)=h\times f(x+h)$.
>
> Comme $f$ est croissante sur $\lbrack a ;b\rbrack$, on a :
>
> $$h \times f(x) \less F(x + h) - F(x) \less h \times f(x + h)$$
>
> Puisque $h > 0$, on a :
>
> $$f(x) \less \frac{F(x + h) - F(x)}{h} \less f(x + h)$$
>
> Comme $f$ est continue sur $\lbrack a ;b\rbrack$, $\ \limite_{h\to 0}{f(x+h})=f(x)$.
>
> D'après le théorème des gendarmes, $\limite_{h\to 0}\pa{\dfrac{F(x+h)-F(x)}{h}}=f(x)$.
>
> Et donc : $F'(x)=f(x)\quad\rarr\quad F$ est donc une primitive de $f$.
>
> Par ailleurs, $F$ s'annule en $a$ car $F(a)=\dint_{a}^{a}{f(t)}dt=0$

- 2^ème^ cas : $h \less 0$

> La démonstration est analogue (les encadrements sont inversés).
```

```admonish th
Toute fonction continue sur un intervalle admet des primitives.
```

```admonish meth title="Méthode : Étudier une fonction définie par une intégrale"
Soit $F$ la fonction définie sur $\lbrack 0;10\rbrack$ par : $F(x)=\dint_{0}^{x}\frac{t}{2}dt$.

a. Étudier les variations de $F$.

b. Tracer sa courbe représentative.

---

a. _Variations de F_

> $t \mapsto \dfrac{t}{2}$ est continue et positive sur $\lbrack 0;10\rbrack$.
>
> $F$ est dérivable sur $\lbrack 0;10\rbrack$ et $\ F'(x)=\frac{x}{2}\ge 0\ $ donc $F$ est croissante sur $\lbrack 0;10\rbrack$.
>
> On dresse le tableau de variations :
>
> ![](img/int/tabvar.png =300x center)
>
> $F(x)$ est égal à l'aire du triangle rouge.
>
> ![](img/int/image18.png =400x center)
>
> Ainsi $F(10) = \frac{10 \times 5}{2} = 25\ u.a.$

b. _Courbe représentative de $F$_

> Pour tout $x$ de $\lbrack 0;10\rbrack$, on a $\ F(x)=\dfrac{x\times\frac{x}{2}}{2}=\dfrac{x^{2}}{4}\ u.a.$
>
> ![](img/int/image19.png =300x center)
>
> On a ainsi la représentation graphique de $F$ :
>
> ![](img/int/image20.png =400x center)
```

### Calcul d'intégrales

```admonish prop
Soit $f$ une fonction continue sur un intervalle $\lbrack a ;b\rbrack$.

Si $F$ est une primitive de $f$ alors :

$$\boxed{\int_{a}^{b}{f(x)}dx = F(b) - F(a)}$$
```

```admonish demo
La fonction $G$ définie sur $\lbrack a ;b\rbrack$ par $G(x) = \dint_{a}^{x}{f(t)}dt$ est une primitive de $f$ sur $\lbrack a ;b\rbrack$.

Si $F$ est une primitive de $f$ alors pour tout $x$ de $\brack{a;b}$, on a : $G(x)=F(x)+k$ avec $k\in\R$.

En effet, deux primitives d'une même fonction diffèrent d'une constante.

De plus, $G(a)=\dint_{a}^{a}{f(t)}dt=0$ et $G(a)=F(a)+k$ donc $F(a)=-k$ et donc $k=-F(a)$.

Or $G(b)=\dint_{a}^{b}{f(t)}dt=F(b)+k=F(b)-F(a)$.
```

```admonish def
Soit $f$ une fonction continue sur un intervalle $I$, $a$ et $b$ deux réels de $I$ et $F$ une primitive de $f$ sur $\lbrack a;b\rbrack$.

On appelle **intégrale** de $f$ sur $\lbrack a ;b\rbrack$ la différence $\boxed{F(b)-F(a)}$.

_Notation :_

$$\boxed{\int_{a}^{b}{f(x)}dx=\Big\lbrack F(x)\Big\rbrack_{a}^{b}=F(b)-F(a)}$$
```

```admonish meth title="Méthode : Calculer une intégrale à partir d'une primitive"
:bulb: Calculer les intégrales suivantes :

$$A=\int_{1}^{4}\pa{\dfrac{3}{x^{2}}}dx\ \qquad\ B=\int_{2}^{5}\pa{3x^{2}+4x-5}dx\ \qquad\ C=\int_{-1}^{1}\pa{e^{-2x}}dx$$

---

- $A=\int_{1}^{4}\pa{\dfrac{3}{x^{2}}}dx$

> On a : $f(x)=\dfrac{3}{x^{2}}=3\times\dfrac{1}{x^{2}}$
>
> Une primitive de $f$ est la fonction $F$ telle que : $\ F(x)=3\times\left(\dfrac{-1}{x}\right)=\dfrac{-3}{x}$
>
> Donc :
>
> $$A=\int_{1}^{4}\frac{3}{x^{2}}dx=\left\lbrack\frac{-3}{x}\right\rbrack_{1}^{4}=F(4)-F(1)=\pa{\frac{-3}{4}}-\left(\frac{-3}{1}\right)=\frac{9}{4}$$

- $B=\dint_{2}^{5}\pa{3x^{2}+4x-5}dx$

> $$
> \begin{array}{rcl}
> 	B  & = & \dint_{2}^{5}{3x^{2}+4x-5}dx                                                 \\\\
> 	\  & = & \Big\lbrack x^{3}+2x^{2}-5x\Big\rbrack_{2}^{5}                               \\\\
> 	\  & = & \pa{5^{3}+2{\times5}^{2}-5\times 5}-\pa{2^{3}+2{\times 2}^{2}-5\times 2}=144
> \end{array}
> $$

- $C=\dint_{-1}^{1}\pa{e^{-2x}}dx$

> On a : $f(x)=e^{-2x}=\dfrac{1}{-2}(-2)e^{-2x}$
>
> Une primitive de $f$ est la fonction $F$ telle que : $\ F(x)=\dfrac{1}{-2}e^{-2x}$
>
> Donc :
>
> $$
> \begin{array}{rcl}
> 	C & = & \int_{-1}^{1}e^{-2x}dx                                                                            \\\\
> 	  & = & \Big\lbrack\dfrac{1}{-2}e^{-2x}\Big\rbrack_{-1}^{1}=F(1)-F(-1)                                    \\\\
> 	  & = & \pa{\dfrac{1}{-2}e^{-2\times 1}}-\pa{\dfrac{1}{-2}e^{-2\times(-1)}}                               \\\\
> 	  & = & \dfrac{-1}{2}e^{-2}+\dfrac{1}{2}e^{2}\qquad\qquad=\dfrac{1}{2}\left(e^{2}-\dfrac{1}{e^{2}}\right)
> \end{array}
> $$
```

## Propriétés des intégrales

### Propriété de linéarité

```admonish prop
a. Pour $k$ réel, $\dint_{a}^{b}{kf(x)}dx=k\int_{a}^{b}{f(x)}dx$

b. $\dint_{a}^{b}{f(x)+g(x)}dx=\dint_{a}^{b}{f(x)}dx+\dint_{a}^{b}{g(x)}dx$
```

```admonish demo title="Éléments de démonstration"
On applique les propriétés sur les primitives :

- $kF$ est une primitive de $kf$
- $F + G$ est une primitive de $f + g$
```

```admonish meth title="Méthode : Calculer une intégrale en appliquant la linéarité"
On pose : $A = \dint_{0}^{2\pi}\pa{\cos^{2}(x)}dx$ et $B = \dint_{0}^{2\pi}\pa{\sin^{2}(x)}dx$

1. Calculer $A + B$ et $A - B$.
   - On donne : $\cos^{2}{(x)}+\sin^{2}{(x)}=1$ et $\cos^{2}{(x)}-\sin^{2}{(x)}=\cos{(2x)}$

2. En déduire $A$ et $B$.

---

1. On calcule en appliquant les formules de linéarité :

$$
\begin{array}{rcl}
	A+B & = & \dint_{0}^{2\pi}\pa{\cos^{2}{(x)}}dx+\dint_{0}^{2\pi}\pa{\sin^{2}{(x)}}dx \\\\
	    & = & \dint_{0}^{2\pi}\pa{\cos^{2}{(x)} + \sin^{2}{(x)}}dx                      \\\\
	    & = & \dint_{0}^{2\pi}1\ dx                                                     \\\\
	    & = & \Big\lbrack x\Big\rbrack_{0}^{2\pi}                                       \\\\
	    & = & 2\pi                                                                      \\\\ \hline
	A-B & = & \dint_{0}^{2\pi}\pa{\cos^{2}{(x)}}dx-\dint_{0}^{2\pi}\pa{\sin^{2}{(x)}}dx \\\\
	    & = & \dint_{0}^{2\pi}\pa{\cos^{2}{(x)} - \sin^{2}{(x)}}dx                      \\\\
	    & = & \dint_{0}^{2\pi}{\cos{(2x)}}dx                                            \\\\
	    & = & \Big\lbrack \frac{1}{2}\sin{(2x)} \Big\rbrack_{0}^{2\pi}                  \\\\
	    & = & \frac{1}{2}\sin(2 \times 2\pi) - \frac{1}{2}\sin(2 \times 0) = 0
\end{array}
$$

2. On a ainsi $\ \begin{cases}A+B=2\pi\\\\A-B=0\end{cases}$ donc $\begin{cases}2A=2\pi\\\\A=B\end{cases}\ $ soit $\ A=B=\pi$
```

### Positivité et comparaison

```admonish prop
a. Si, pour tout $x$ de $\lbrack a ;b\rbrack$, $f(x) \ge 0$ , alors $\dint_{a}^{b}{f(x)}dx \ge 0$

b. Si, pour tout $x$ de $\lbrack a ;b\rbrack$, $f(x) \ge g(x)$, alors $\dint_{a}^{b}{f(x)}dx \ge \dint_{a}^{b}{g(x)}dx$
```

```admonish demo
a. Par définition, lorsque $f$ est positive, l'intégrale de $f$ est une aire donc est positive.

b. Si $f(x) \ge g(x)$ alors $f(x) - g(x) \ge 0$.

Donc en appliquant a., on a : $\dint_{a}^{b}{f(x) - g(x)}dx \ge 0$.

Par linéarité, on a $\dint_{a}^{b}{f(x)}dx - \dint_{a}^{b}{g(x)}dx \ge 0$ et donc $\dint_{a}^{b}{f(x)}dx \ge \dint_{a}^{b}{g(x)}dx$.
```

```admonish meth title="Méthode : Encadrer une intégrale"
a. Démontrer que pour tout $x$ de $\brack{0;1}$, on a : $0 \le e^{x^{2}} \le e^{x}$.

b. En déduire que : $0 \le \dint_{0}^{1}e^{x^{2}}dx \le e - 1$.

---

a. Sur $\brack{0;1}$, on a $x^{2} \le x$.

Comme la fonction exponentielle est croissante et positive sur $\R$, on a : $0\le e^{x^{2}}\le e^{x}$.

b. On déduit de la question précédente que :

$$\dint_{0}^{1}0\ dx \le \dint_{0}^{1}e^{x^{2}}dx \le \dint_{0}^{1}e^{x}dx$$

De plus, on a :

$$\dint_{0}^{1}0\ dx = 0\quad\text{et}\quad\dint_{0}^{1}e^{x}dx=\Big\lbrack e^{x} \Big\rbrack_{0}^{1} = e - 1$$

D'où : $\ 0\le\dint_{0}^{1}e^{x^{2}}dx \le e - 1$.
```
