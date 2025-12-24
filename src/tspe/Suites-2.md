## Suites (2)

<!-- toc -->

## Limites et comparaison

### Théorèmes de comparaison

```admonish th
Soit deux suites $(u_{n})$ et $(v_{n})$.

Si, à partir d'un certain rang, on a :

$$
\begin{cases}
	u_{n} \le v_{n} \\\\
	\limite_{n\to +\infty}{u_{n} = +\infty}
\end{cases}
\quad\text{alors}\quad \limite_{n\to +\infty}{v_{n} = +\infty}
$$

![](img/suites/ch2image2.png =600x center)

Par abus de langage, on pourrait dire que la suite $(u_{n})$ **pousse** la suite $(v_{n})$ vers $+\infty$ à partir d'un certain rang.
```

```admonish demo
Soit un nombre réel $a$

- $\limite_{n\to +\infty}{u_{n} = +\infty}$, donc l'intervalle $\left\rbrack a; +\infty \right\lbrack$ contient tous les termes de la suite à partir d'un certain rang que l'on note $n_{1}$.

On a donc pour tout $n \ge n_{1}$, $u_{n} > a$.

- A partir d'un certain rang, que l'on note $n_{2}$, on a $u_{n} \le v_{n}$.

- Ainsi pour tout $n \ge \text{max}(n_{1};n_{2})$, on a : $a \lt  u_{n} \le v_{n}$.

On en déduit que l'intervalle $\left\rbrack a; +\infty \right\lbrack$ contient tous les termes de $(v_{n})$ à partir du rang $\text{max}(n_{1};n_{2})$.

Et donc $\limite_{n\to +\infty}{v_{n} = +\infty}$.
```

```admonish th
Soit deux suites $(u_{n})$ et $(v_{n})$.

Si, à partir d'un certain rang, on a : $\begin{cases} u_{n} \ge v_{n} \\\\ \limite_{n\to +\infty}{u_{n} = -\infty} \end{cases}$ alors $\limite_{n\to +\infty}{v_{n} = -\infty}$.
```

```admonish meth title="Méthode : Déterminer une limite par comparaison"
:bulb: Déterminer la limite suivante : $\limite_{n\to +\infty}{n^{2} + ( - 1)^{n}}$

---

> On a $\quad(-1)^n \ge -1\quad$ donc $\quad n^{2} + (-1)^{n} \ge n^{2} - 1$
>
> Or, $\limite_{n\to +\infty}\pa{n^{2} - 1} = +\infty$
>
> Donc par comparaison, $\quad\limite_{n\to +\infty}\pa{n^{2} + (-1)^{n}} = +\infty$
```

### Théorème d'encadrement

```admonish th title="Théorème des gendarmes"
Soit trois suites $(u_{n})$, $(v_{n})$ et $\left( w_{n} \right)$.

Si, à partir d'un certain rang, on a : $\begin{cases}
		u_{n} \le v_{n} \le w_{n}             \\\\
		\limite_{n\to +\infty}{u_{n} = L} \\\\
		\limite_{n\to +\infty}{w_{n} = L} \\\\
	\end{cases}\quad$ alors $\quad\limite_{n\to +\infty}{v_{n} = L}$.

![](img/suites/ch2image4.png =600x center)
```

```admonish rem
Par abus de langage, on pourrait dire que les suites $(u_{n})$ et $(w_{n})$ (les gendarmes) se resserrent autour de la suite $(v_{n})$ à partir d'un certain rang pour la faire converger vers la même limite.

Ce théorème est également appelé le **théorème du sandwich**.
```

```admonish demo
Soit un intervalle ouvert $I$ contenant $L$.

- $\limite_{n\to +\infty}u_{n} = L$, donc l'intervalle $I$ contient tous les termes de la suite à partir d'un certain rang que l'on note $n_{1}$.

- $\limite_{n\to +\infty}w_{n} = L$, donc l'intervalle $I$ contient tous les termes de la suite à partir d'un certain rang que l'on note $n_{2}$.

- A partir d'un certain rang, que l'on note $n_{3}$, on a $u_{n} \le v_{n} \le w_{n}$.

- Ainsi pour tout $n \ge \text{max}(n_{1};n_{2};n_{3})$, l'intervalle $I$ contient tous les termes de la suite $(v_{n})$.

Et donc $\limite_{n\to +\infty}v_{n} = L$.
```

```admonish meth title="Méthode : Déterminer une limite par encadrement"
:bulb: Déterminer la limite suivante : $\limite_{n\to +\infty}\pa{1 +\dfrac{\sin{(n)}}{n}}$

---

> On a : $-1\le\sin{(n)}\le 1\quad$ donc $\quad\dfrac{-1}{n} \le \dfrac{\sin{(n)}}{n} \le \dfrac{1}{n}$
>
> Or : $\limite_{n\to +\infty}\pa{\dfrac{-1}{n}}=\limite_{n\to +\infty}\pa{\dfrac{1}{n}} = 0$
>
> Donc d'après le théorème des gendarmes : $\quad\limite_{n\to +\infty}\pa{\dfrac{\sin{(n)}}{n}} = 0$
>
> Et donc $\quad\limite_{n\to +\infty}\pa{1 +\dfrac{\sin{(n)}}{n}} = 1$
```

```admonish rem
On utilise le théorème de comparaison pour démontrer une limite infinie et le théorème d'encadrement pour une limite finie.
```

## Suites majorées, minorées, bornées

### Définitions

```admonish def
- La suite $(u_{n})$ est **majorée** s'il existe un réel $M$ tel que pour tout $n$, on a : $u_{n} \le M$.
- La suite $(u_{n})$ est **minorée** s'il existe un réel $m$ tel que pour tout $n$, on a : $u_{n} \ge m$.
- La suite $(u_{n})$ est **bornée** si elle est à la fois majorée et minorée.
```

```admonish exemple
- Les suites $\cos{(n)}$ ou $(-1)^{n}$ sont bornées car minorées par $-1$ et majorées par $1$.

- La suite $n^{2}$ est minorée par $0$. Mais elle n'est pas majorée.
```

```admonish meth title="Méthode : Démontrer qu'une suite est majorée ou minorée"
On considère la suite $(u_{n})$ définie pour tout entier naturel $n$ par $\begin{cases}u_{n + 1} =\dfrac{1}{3}u_{n} + 2\\\\u_{0} = 2\end{cases}$

:bulb: Démontrer par récurrence que la suite $(u_{n})$ est majorée par $3$.

---

> - **Initialisation :** $\quad u_{0} = 2 \lt 3$
>
> La propriété est donc vraie pour $n = 0$.
>
> - **Hérédité :**
>     - Hypothèse de récurrence :
>
>         Supposons que la propriété soit vraie pour un certain entier $k$ : $u_{k} \lt  3$
>
>     - Démontrons que la propriété est vraie au rang $k + 1$ : $u_{k+1} \lt  3$
>
>         On a : $u_{k} \lt  3$
>
>         $$
>           \begin{array}{rllcl}
>           	u_k \lt 3 & \iff & \dfrac{1}{3} u_k     & \lt & \dfrac{1}{3} \times 3     \\\\
>           	            & \iff & \dfrac{1}{3} u_k + 2 & \lt & \dfrac{1}{3} \times 3 + 2 \\\\
>           	            & \iff & u_{k + 1}            & \lt & 3
>           \end{array}
>         $$
>
> - **Conclusion :**
>
>     La propriété est vraie pour $n = 0$ et héréditaire à partir de ce rang.
>
>     D'après le principe de récurrence, elle est vraie pour tout $n$, soit $u_{n} \lt  3$.
>
>     Donc $(u_{n})$ est majorée.
```

### Convergence des suites monotones

```admonish prop
Si une suite est croissante et admet pour limite $L$, alors elle est majorée par $L$.
```

```admonish demo title="Démonstration par l'absurde"
Démontrons par l'absurde en supposant le contraire, soit : "Il existe un rang $p$, tel que $u_{p} > L$."

- L'intervalle ouvert $\left\rbrack L - 1;u_{p} \right\lbrack$ contient $L$.

    Or, par hypothèse, $\limite_{n\to +\infty}{u_{n} = L}$. Donc l'intervalle $\left\rbrack L - 1;u_{p} \right\lbrack$ contient tous les termes de la suite $(u_{n})$ à partir d'un certain rang (1).

- Comme $(u_{n})$ est croissante : $u_{n} \ge u_{p}$ pour $n > p$ donc si $n > p$, alors $u_{n} \notin \left\rbrack L - 1;u_{p} \right\lbrack$ (2).

(1) et (2) sont contradictoires, on en déduit qu'il n'existe pas $p \in \mathbb{N}$, tel que $u_{p} > L$.

Et donc la suite $(u_{n})$ est majorée par $L$.
```

### Théorème de convergence monotone

```admonish th
- Si une suite est **croissante** et **majorée** alors elle est **convergente**.
- Si une suite est **décroissante** et **minorée** alors elle est **convergente**.
```

```admonish rem
Ce théorème permet de s'assurer de la convergence mais ne donne pas la limite.

Dans l'exemple ci-dessous, la suite est décroissante et minorée par $2$.

Cela prouve que la limite de la suite est supérieure à $2$ mais n'est pas nécessairement égale à $2$. Elle peut être égale à $4$ !

![](img/suites/ch2image5.png =600x center)
```

```admonish meth title="Méthode : Utiliser le théorème de convergence monotone"
On considère la suite $(u_{n})$ définie pour $n$ par : $\begin{cases}u_{n + 1} =\frac{1}{3}u_{n} + 2\\\\u_{0} = 2\end{cases}$

:bulb: Démontrer que la suite $(u_{n})$ est convergente.

---

> On peut démontrer, \emph{facilement}, que la suite $(u_{n})$ est croissante.
>
> On a démontré dans la méthode précédente que la suite $(u_{n})$ est majorée par $3$.
>
> La suite $(u_{n})$ est donc croissante et majorée et, d'après le théorème de convergence monotone, on en déduit que la suite $(u_{n})$ est **convergente**.
```

```admonish th title="Corollaire"
1. Si une suite est **croissante** et **non majorée** alors elle tend vers $+\infty$.
2. Si une suite est **décroissante** et **non minorée** alors elle tend vers $-\infty$.
```

```admonish demo title="Démonstration (du 1) au programme"
Soit un réel $a$.

Comme $(u_{n})$ n'est pas majorée, il existe un entier $p$ tel que $u_{p} > a$.

La suite $(u_{n})$ est croissante donc pour tout $n > p$, on a $u_{n} \ge u_{p}$.

Donc pour tout $n > p$, on a : $u_{n} > a$.

Et donc à partir d'un certain rang $p$, tous les termes de la suite appartiennent à $\left\rbrack a; +\infty \right\lbrack$.

On en déduit que $\limite_{n\to +\infty}u_{n} = +\infty$.
```

## Comportement à l'infini d'une suite géométrique

### Rappel

```admonish prop
Soit $(u_{n})$ une **suite géométrique** de raison $q$ et de premier terme $u_{0}$

Alors, pour tout entier $n$, on a :

- $u_{n + 1} = q \times u_{n}$ (forme de récurrence)
- $u_{n} = u_{0} \times q^{n}$ (forme explicite).
```

```admonish exemple
Soit $(u_{n})$ une suite géométrique de raison $-3$ et de premier terme $5$.

On a : $\quad u_{n + 1} = -3u_{n}$ et $u_{n} =5 \times (-3)^{n}$.
```

### Limites

```admonish prop
$$
	\begin{array}{|c|c|c|c|c|} \hline
		q                               & q\lt -1            & -1\lt q\lt 1 & q=1 & q>1     \\\\ \hline
		\limite_{n\to +\infty}q^{n} & \text{Pas de limite} & 0                & 1   & +\infty \\\\ \hline
	\end{array}
$$
```

```admonish demo title="Démonstration au programme dans le cas $q > 1$"
- Prérequis :

    Pour tout entier naturel $n$, on a : $(1 + a)^{n} \ge 1 + na$ (inégalité de Bernoulli)

- On suppose que $q > 1$, alors on peut poser $q = a + 1$ avec $a > 0$.

    $q^{n} = (1 + a)^{n} \ge 1 + na$, d'après l'inégalité de Bernoulli.

    Or $\limite_{n \to \infty}{1 + na} = +\infty$ car $a > 0$.

    Donc d'après le théorème de comparaison : $\limite_{n \to \infty}q^{n} = +\infty$
```

```admonish exemple
La suite de terme général $u_n=-5 \times 4^{n}$ a pour limite $-\infty$ car $\limite_{n\to +\infty}4^{n} = +\infty$
```

```admonish meth title="Méthode : Étudier un phénomène modélisable par une suite"
Un investisseur dépose $5 000$€ sur un compte rémunéré à $3\%$ par an.

Chaque année suivante, il dépose $300$€ de plus sur ce compte.

On note $(u_{n})$ la somme épargnée à l'année $n$. On a alors : $\begin{cases}u_{0} = 5 000\\\\u_{n + 1} = 1,03u_{n} + 300\end{cases}$

1. Calculer $u_{1}$ et $u_{2}$.
2. Prouver que la suite $(v_{n})$ définie pour tout entier $n$ par $v_{n} = u_{n} + 10 000$ est géométrique et donner sa raison et son premier terme.
3. Exprimer $v_{n}$ en fonction de $n$.
4. En déduire $u_{n}$ en fonction de $n$. Puis calculer $u_{10}$.
5. Étudier les variations de $(u_{n})$.

---

1. $u_{1} = 1,03u_{0} + 300 = 5450$ et $u_{2} = 1,03u_{1} + 300 = 5913,5$
2. On a :

$$
\begin{aligned}
	v_{n + 1} & = u_{n + 1} + 10 000                                                                    \\\\
	          & = 1,03u_{n} + 300 + 10 000                                                              \\\\
	          & = 1,03u_{n} + 10 300                                                                    \\\\
	          & = 1,03\left( v_{n} - 10 000 \right) + 10 300\quad\text{car}\quad v_{n} = u_{n} + 10 000 \\\\
	          & = 1,03v_{n} - 10 300 + 10 300\quad = 1,03v_{n}
\end{aligned}
$$

Donc $(v_{n})$ est une suite géométrique de raison $1,03$ et de premier terme :

$$v_{0} = u_{0} + 10 000 = 5 000 + 10 000 = 15 000$$

3.  Pour tout $n$, on a : $v_{n} = 15 000 \times {1,03}^{n}$.
4.  $u_{n} = v_{n} - 10 000 = 15 000 \times {1,03}^{n} - 10 000$

    On a alors : $u_{10} = 15 000 \times {1,03}^{10} - 10 000 \approx 10 158,75$

5.  On a :

$$
\begin{array}{rcl}
	u_{n + 1} - u*{n} & = & \pa{15 000 \times {1,03}^{n + 1} - 10 000} - \pa{ 15 000 \times {1,03}^{n} - 10 000} \\\\
	                  & = & 15 000 \times \left( {1,03}^{n + 1} - {1,03}^{n} \right)                             \\\\
	                  & = & 15 000 \times {1,03}^{n} \times (1,03 - 1)                                           \\\\
	                  & = & 450 \times {1,03}^{n} \qquad > 0
\end{array}
$$

Donc la suite $(u_{n})$ est strictement croissante.
```

### Somme des termes d'une suite géométrique

```admonish prop
$n$ est un entier naturel non nul et $q$ un réel différent de 1 alors on a :

$$1 + q + q^{2} + \ldots + q^{n} = \frac{1 - q^{n + 1}}{1 - q}$$
```

```admonish meth title="Méthode : Utiliser la limite d'une suite géométrique"
:bulb: Déterminer, si elles existent, les limites suivantes :

a) $\limite_{n\to +\infty}\dfrac{( - 2)^{n}}{3}$
b) $\limite_{n\to +\infty}{2^{n} - 3^{n}}$
c) $\limite_{n\to +\infty}1 + \frac{1}{2} + \left( \frac{1}{2} \right)^{2} + \left( \frac{1}{2} \right)^{3} + \ldots + \left( \frac{1}{2} \right)^{n}$

---

a) $\limite_{n\to +\infty}\dfrac{( - 2)^{n}}{3}$

> $\left((-2)^{n}\right)$ est une suite géométrique de raison $-2$ strictement inférieure à $-1$.
>
> Donc $\left((-2)^{n} \right)$ ne possède pas de limite.
>
> Et donc $\limite_{n\to +\infty}\dfrac{( - 2)^{n}}{3}$ n'existe pas.

---

b) $\limite_{n\to +\infty}{2^{n} - 3^{n}}$

> On a : $\begin{cases}\limite_{n\to +\infty}{2^{n} = +\infty}\\\\ \limite_{n\to +\infty}{3^{n} = +\infty}\end{cases}\quad$ Il s'agit d'une forme indéterminée du type $\infty -\infty$
>
> Levons l'indétermination :
>
> $$2^{n} - 3^{n} = 3^{n}\left( \dfrac{2^{n}}{3^{n}} - 1 \right) = 3^{n}\left( \left( \dfrac{2}{3} \right)^{n} - 1 \right)$$
>
> Or : $\limite_{n\to +\infty}{\left( \dfrac{2}{3} \right)^{n}} = 0$, comme limite d'une suite géométrique de raison $\dfrac{2}{3}$ avec $- 1 \lt \dfrac{2}{3} \lt 1$
>
> Donc : $\limite_{n\to +\infty}\left( \dfrac{2}{3} \right)^{n} - 1 = - 1$
>
> On a : $\limite_{n\to +\infty}{3^{n} = +\infty},$ comme limite d'une suite géométrique de raison $3 > 1$.
>
> Donc, comme limite d'un produit : $\quad\limite_{n\to +\infty}3^{n}\left( \left( \dfrac{2}{3} \right)^{n} - 1 \right) = -\infty$
>
> Soit : $\limite_{n\to +\infty}{2^{n} - 3^{n}} = -\infty$.

---

c) $\limite_{n\to +\infty}1 + \frac{1}{2} + \left( \frac{1}{2} \right)^{2} + \left( \frac{1}{2} \right)^{3} + \ldots + \left( \frac{1}{2} \right)^{n}$

> On reconnaît la somme des premiers termes d'une suite géométrique de raison $\dfrac{1}{2}$ et de premier terme 1.
>
> On a donc :
>
> $$1 + \dfrac{1}{2} + \left( \dfrac{1}{2} \right)^{2} + \left( \dfrac{1}{2} \right)^{3} + \ldots + \left( \dfrac{1}{2} \right)^{n} = \dfrac{1 - \left( \dfrac{1}{2} \right)^{n + 1}}{1 - \dfrac{1}{2}} = 2 \times \left( 1 - \left( \dfrac{1}{2} \right)^{n + 1} \right)$$
>
> Or $\limite_{n\to +\infty}{\left( \dfrac{1}{2} \right)^{n + 1}} = 0$, comme limite d'une suite géométrique de raison $\dfrac{1}{2}$ avec $-1\lt\dfrac{1}{2}\lt 1$.
>
> Donc : $\limite_{n\to +\infty}1 - \left( \dfrac{1}{2} \right)^{n + 1} = 1$.
>
> Et donc : $\limite_{n\to +\infty}2\left( 1 - \left( \dfrac{1}{2} \right)^{n + 1} \right) = 2$.
>
> Soit : $\limite_{n\to +\infty}1 + \dfrac{1}{2} + \left( \dfrac{1}{2} \right)^{2} + \left( \dfrac{1}{2} \right)^{3} + \ldots + \left( \dfrac{1}{2} \right)^{n} = 2$.
```
