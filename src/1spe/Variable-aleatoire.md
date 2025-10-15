# Variable aléatoire

<!-- toc -->

## Définition

```admonish ex
Soit l'expérience aléatoire : "On lance un dé à six faces et on regarde le résultat."

L'univers de l'expérience est $\Omega = \left\\{1 ; 2 ; 3 ; 4 ; 5 ; 6\right\\}$

On considère le jeu suivant :

- Si le résultat est **pair**, on gagne $\textcolor{green}{2}$€
- Si le résultat est :one:, on gagne $\textcolor{green}{3}$€
- Si le résultat est :three: ou :five:, on perd $\textcolor{red}{4}$€

On peut définir une **variable aléatoire** $X$ sur $\Omega$ qui peut prendre les valeurs $2$, $3$ ou $-4$

- Pour les issues :two:, :four: ou :six:, on a : $X = 2$
- Pour l'issue :one:, on a : $X = 3$
- Pour les issues :three: et :five:, on a : $X = -4$

![](img/varalea/01.png =600x center)
```

```admonish def title="Définition : Variable aléatoire"
Une variable aléatoire $X$ **associe** un nombre réel à chaque issue de l'univers $\Omega$.

$$
\def\arraystretch{1.5}\begin{array}{ccc}
	\Omega & \mapsto & \R     \\\\
	e_i    & \mapsto & X(e_i)
\end{array}
$$
```

```admonish ex
Expérience aléatoire : "Choisir un élève dans la classe"

$$\Omega=\\{\text{Mehdi};\text{Killian};\text{Magalie};\ldots;\text{Sorenza}\\}$$

Soit $X$ la **variable aléatoire** qui associe **le nombre de frères et soeurs** de chaque issue de $\Omega$.

On a, par exemple : $\quad X(\text{Killian})=2\qquad X(\text{Sorenza})=0\qquad\ldots$

$X$ peut prendre comme valeur : $\left\\{0 ; 1 ; 2 ; 3 ; 4 ; 5 \right\\}$
```

### Loi de probabilité de $X$

```admonish ex
Dans l'ex. du jeu avec le dé, chaque issue de $\Omega$ a une probabilité de $\cfrac{1}{6}$ de se réaliser.

![](img/varalea/01.png =600x center)

La probabilité que $X=3$ est de : $\quad P(X=3)=\cfrac{1}{6}$

De même, $\quad P(X=2)=\cfrac{3}{6}=\cfrac{1}{2}\quad$ et $\quad P(X=−4)=\cfrac{2}{6}=\cfrac{1}{3}$

Nous pouvons définir la loi de probabilité de $X$ à l'aide d'un tableau

$$
\def\arraystretch{1.7}\begin{array}{|c|c|c|c|}\hline
	x_i      & -4          & 2           & 3           \\\\ \hline
	P(X=x_i) & \cfrac{1}{3} & \cfrac{1}{2} & \cfrac{1}{6} \\\\ \hline
\end{array}
$$
```

```admonish def Title="Définition : Loi de probabilité de $X$"
Soit une variable aléatoire $X$ définie sur un univers $\Omega$ et prenant les valeurs $~x_1~$, $~x_2~$, $~x_3~$, $\ldots$, $~x_n~$.

La loi de probabilité de $X$ associe à toute valeur $x_i$ la probabilité $P(X=x_i)$

$$
\def\arraystretch{1.7}\begin{array}{|c|c|c|c|c|}\hline
	x_i      & x_1 & x_2 & \ldots & x_n \\\\ \hline
	P(X=x_i) & p_1 & p_2 & \ldots & p_n \\\\ \hline
\end{array}
$$
```

```admonish rem
- $P(X=x_i)~$ peut se noter $~p_i$
- $p_1  + p_2  + \ldots + p_n  = 1$
```

```admonish meth title="Méthode : Déterminer une loi de probabilité"
Soit l'expérience aléatoire : "On tire une carte dans un jeu de 32 cartes"

![](img/varalea/02.png =300x right)

On considère le jeu suivant :

- Si on tire un :heart:, on **gagne** 2€.
- Si on tire un roi (K) , on **gagne** 5€.
- Si on tire une autre carte, on **perd** 1€.

On appelle $X$ la variable aléatoire qui, à une carte tirée, associe **la valeur du gain ou de la perte**.

$X$ peut prendre les valeurs $2$, $5$, $-1$ mais aussi $7$.

- Si on tire le K:heart:, on gagne $5$ (pour le K) et $2$ (pour le :heart:) $\quad X=7$
  - $P(X=7)=\cfrac{1}{32}$
- Si la carte tirée est un :heart: (autre que le K:heart:), $\quad X=2$
  - $P(X=2)=\cfrac{7}{32}$
- Si la carte tirée est un K (autre que le K:heart:), $\quad X=5$
  - $P(X=5)=\cfrac{3}{32}$
- Si la carte tirée n'est ni un roi, ni un :heart:, $\quad X=-1$
  - $P(X=-1)=\cfrac{21}{32}$

Donc la loi de probabilité de $X$ est :

$$
\def\arraystretch{1.5}\begin{array}{|c|c|c|c|c|}\hline
	x_i      & -1            & 2            & 5            & 7            \\\\ \hline
	P(X=x_i) & \cfrac{21}{32} & \cfrac{7}{32} & \cfrac{3}{32} & \cfrac{1}{32} \\\\ \hline
\end{array}
$$

À l'aide du tableau, on peut calculer, par ex. , $~P(X\geq 5)$ :

$$P(X\geq 5)\quad=P(X=5)+P(X=7)\quad=\cfrac{3}{32}+\cfrac{1}{32}=\cfrac{1}{8}$$

La probabilité de gagner plus de $5$€ est égale à $\cfrac{1}{8}$.
```

## Espérance mathématique, Variance et écart-type

### Espérance mathématique

```admonish def
L'**espérance mathématique** de la loi de probabilité de $X$ est :

$$E(X)\quad=p_1\times x_1+p_2\times x_2+\ldots+p_n\times x_n\qquad =\sum\limits_{i=1}^{i=n} ~p_i\times x_i$$
```

```admonish rem
L'espérance est la **moyenne** que l'on peut espérer **si l'on répète l'expérience un grand nombre de fois**.
```

```admonish ex
En reprenant l'exemple du jeu de 32 cartes, la loi de probabilité de $X$ est :

$$
\def\arraystretch{1.5}\begin{array}{|c|c|c|c|c|}\hline
	x_i      & -1            & 2            & 5            & 7            \\\\ \hline
	P(X=x_i) & \cfrac{21}{32} & \cfrac{7}{32} & \cfrac{3}{32} & \cfrac{1}{32} \\\\ \hline
\end{array}
$$

Donc :

$$E(X)=\cfrac{21}{32}\times(−1)+\cfrac{7}{32}\times 2+\cfrac{3}{32}\times 5+\cfrac{1}{32}\times 7=\cfrac{15}{32}$$

L'espérance est égale à $\cfrac{21}{32}\approx 0.5$ signifie qu'en jouant, on peut espérer gagner environ $0.5$€ par partie jouée en moyenne.
```

```admonish note title="Astuce de 'calcul'"

$$
\def\arraystretch{1.5}\begin{array}{cccccccccc}
	x_i      & -1             &   & 2             &   & 5             &   & 7                                \\\\
	~        & \times         &   & \times        &   & \times        &   & \times       &   &               \\\\
	P(X=x_i) & \cfrac{21}{32}  &   & \cfrac{7}{32}  &   & \cfrac{3}{32}  &   & \cfrac{1}{32} &   &               \\\\
	~        & =              &   & =             &   & =             &   & =                                \\\\
	E(X)=    & \cfrac{-21}{32} & + & \cfrac{14}{32} & + & \cfrac{15}{32} & + & \cfrac{7}{32} & = & \cfrac{15}{32}
\end{array}
$$
```

### Variance, écart-type

```admonish def
Soit une variable aléatoire $X$ définie sur $\Omega$ et prenant les valeurs $x_1$, $x_2$, $\ldots$, $x_n$.

La loi de probabilité de $X$ associe à toute valeur $x_i$ la probabilité $p_i=P(X=x_i)$

$$
\def\arraystretch{1.2}\begin{array}{|c|c|c|c|c|}\hline
	x_i      & x_1 & x_2 & \ldots & x_n \\\\\hline
	P(X=x_i) & p_1 & p_2 & \ldots & p_n \\\\\hline
\end{array}
$$

- La **variance** de $X$ est :

$$V(X)=p_1\left(x_1-E(X)\right)^2+p_2\left(x_2-E(X)\right)^2+\ldots+p_n\left(x_n-E(X)\right)^2$$

On note aussi :

$$V(X)=\sum\limits_{i=1}^{i=n}~p_i\left(x_i-E(X)\right)^2$$

- L'**écart-type** de $X$ est : $\quad\sigma(X)=\sqrt{V(X)}$
```

```admonish ex
En reprenant l'exemple précédent.

$$
\def\arraystretch{1.5}\begin{array}{|c|c|c|c|c|}\hline
	x_i      & -1            & 2            & 5            & 7            \\\\\hline
	P(X=x_i) & \cfrac{21}{32} & \cfrac{7}{32} & \cfrac{3}{32} & \cfrac{1}{32} \\\\\hline
\end{array}
$$

On a $E(X)=\cfrac{15}{32}$ donc :

$$V(X)=\cfrac{21}{32}\left((−1)−\cfrac{15}{32}\right)^2+\cfrac{7}{32}\left(2−\cfrac{15}{32}\right)^2+\ldots\\\\\qquad\qquad\ldots\cfrac{3}{32}\left(5−\cfrac{15}{32}\right)^2+\cfrac{1}{32}\left(7−\cfrac{15}{32}\right)^2\quad\approx 5.1865$$

Donc : $\quad\sigma=\sqrt{V(X)}=\sqrt{5.1865}\approx 2.28$

L'écart-type environ égale à $2.28$ signifie, qu'avec une espérance proche de $0.5$, le risque de perdre de l'argent est important.
```

### Combinaison linéaire de $X$

```admonish prop
Soit une variable aléatoire $X$ définie sur $\Omega$.

Soit $a$ et $b$ deux nombres réels.

On a :

$$E(aX+b)=aE(X)+b\qquad\text{et}\qquad V(aX+b)=a^{2}V(X)$$
```

```admonish demo
$
\begin{array}{rcl}
	E(aX+b) & = & \sum\limits_{i=1}^{i=n}p_i\times(ax_i+b)                   \\\\
	        & = & \sum\limits_{i=1}^{i=n}ap_ix_i+bp_i                        \\\\
	        & = & a\sum\limits_{i=1}^{i=n}p_ix_i+b\sum\limits_{i=1}^{i=n}p_i \\\\
	        & = & aE(X)+b\times1                                             \\\\
	        & = & aE(X)+b                                                    \\\\
\end{array}
$

---

$
\begin{array}{rcl}
	V(aX+b) & = & \sum\limits_{i=1}^{i=n}p_i\left(ax_i+b-E(aX+b)\right)^2         \\\\
	        & = & \sum\limits_{i=1}^{i=n}p_i\left(ax_i+b-aE(X)-b\right)^2         \\\\
	        & = & \sum\limits_{i=1}^{i=n}p_i\left(a\left(x_i-E(X)\right)\right)^2 \\\\
	        & = & \sum\limits_{i=1}^{i=n}a^2p_i\left(x_i-E(X)\right)^2            \\\\
	        & = & a^2\sum\limits_{i=1}^{i=n}p_i\left(x_i-E(X)\right)^2            \\\\
	        & = & a^2V(X)
\end{array}
$
```

```admonish meth
**Méthode : Simplifier les calculs d'espérance et de variance à l'aide d'une variable aléatoire de transition.**

Une entreprise qui fabrique des roulements à billes.

Le diamètre théorique doit être égal à $1.3$cm mais cette mesure peut-être légèrement erronée.

![](img/varalea/04.png =150x center)

On considère la variable aléatoire $X$ qui, à une bille choisie, associe son diamètre (en cm).

La loi de probabilité de $X$ est :

$$
\def\arraystretch{1.5}\begin{array}{|c|c|c|c|c|c|}\hline
	x_i      & 1.298 & 1.299 & 1.3 & 1.301 & 1.302 \\\\ \hline
	P(X=x_i) & 0.2   & 0.1   & 0.2 & 0.4   & 0.1   \\\\ \hline
\end{array}
$$

Calculons l'espérance et l'écart-type de $X$.

Pour simplifier les calculs, on définit la variable aléatoire
$$Y=1000X-1300$$

Si $\quad x_i=1.302\quad$ alors $\quad y_i=1.302\times 1000-1300=2$

La loi de probabilité de $Y$ est alors :

$$
\def\arraystretch{1.2}\begin{array}{|c|c|c|c|c|c|}\hline
	y_i      & -2  & -1  & 0   & 1   & 2   \\\\ \hline
	P(Y=y_i) & 0.2 & 0.1 & 0.2 & 0.4 & 0.1 \\\\ \hline
\end{array}
$$

On a :

- $E(Y)=\left(0.2\times (−2)\right)+\left(0.1\times (−1)\right)+\ldots+\left(2\times 0.1\right)=0.1$
- $V(Y)=0.2\left((−2)−0.1\right)^2+\ldots+0.1\left(2−0.1\right)^2\approx 1.69$

- On en déduit l'espérance de $X$ :

$$E(Y) = E(1000X - 1300) = 1000 E(X) - 1300$$

Donc $\quad E(X)=\cfrac{E(Y)+1300}{1000}=\cfrac{0.1+1300}{1000}=1.3001$

- Pour la variance et l'écart-type de $X$ :

$$V(Y) = V(1000X - 1300) = 1000^2  V(X)$$

Donc : $\quad V(X)= \cfrac{V(Y)}{1000^2}=\cfrac{1.69}{1000^2}$

Et $\quad\sigma(X)=\sqrt{\cfrac{1.69}{1000^2}}=0.0013$
```

### Relation entre variance et espérance

```admonish prop
Soit $X$ une v.a. définie sur $\Omega$ :

On a :

$$V(X)=E(X^2) - (E(X))^2$$
```

```admonish demo
$$
\begin{align}
		V(X) & = E\left((X - E(X))^2\right)               \\\\
		     & = E(X^2) - E(2XE(X)) + E(E(X^2))           \\\\
		     & = E(X^2) - 2E(X)^2 + (E(X))^2 \\\\
		     & = E(X^2) - E(X)^2.
	\end{align}
$$
```
