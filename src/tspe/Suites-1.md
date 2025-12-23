# Suites numériques (1)

<!-- toc -->

## Raisonnement par récurrence

### Le principe

```admonish note title="Un peu d'histoire"
![](img/suites/image2.jpeg#right =150x)

C'est au mathématicien italien Giuseppe Peano (1858 ; 1932) que l'on attribue le principe du raisonnement par récurrence. Le nom a probablement été donné par Henri Poincaré (1854 ; 1912).
```

```admonish rem
On considère une file illimitée de dominos placés côte à côte. La règle veut que lorsqu'un domino tombe, alors il fait tomber le domino suivant et ceci à n'importe quel niveau de la file.

Alors, si le premier domino tombe, on est assuré que tous les dominos de la file tombent.

![](img/suites/image4.png =800x center)

Si on suppose qu'un domino $n{^\circ}(k)$ tombe alors le domino suivant $n{^\circ}(k + 1)$ tombe également. C'est ce qu'on appelle le principe **d'hérédité.**
```

```admonish def
On dit qu'une propriété est **héréditaire** à partir d'un certain rang :

- Si la propriété est vraie pour un entier $k$ alors elle est vraie pour l'entier $k + 1$
```

```admonish prop title="Propriété : Principe du raisonnement par récurrence"
Si la propriété $P$ est :

- **Vraie** au rang $n_{0}$ (Initialisation),
- **Héréditaire** à partir du rang $n_{0}$ (Hérédité)

Alors la propriété $P$ est vraie pour tout $n \geqslant n_{0}$.
```

```admonish ex
Dans l'exemple, le premier domino tombe (initialisation). Ici $n_{0} = 1$.

L'hérédité est vérifiée (voir plus haut). On en déduit que tous les dominos tombent.
```

```admonish rem
On tente d'utiliser une démonstration par récurrence, lorsqu'une démonstration classique n'est pas possible ou est trop difficile.
```

```admonish meth title="Méthode : Démontrer une propriété par récurrence"
:bulb: Démontrer par récurrence que pour tout $n$ non nul, on a : $\quad 2^{n} > n$.

1. **Initialisation pour $n=1$ :** (Le premier domino tombe)

> Pour $n=1$, on a :
>
> $$2^{1} = 2 > 1$$
>
> La propriété est donc vraie pour $n = 1$.

2. **Hérédité :**

> - Hypothèse de récurrence : (On suppose que le domino $n^\circ(k)$ tombe)
>
>     Supposons que la propriété soit vraie pour un entier $k$ non nul : $\ 2^{k} > k$.

> - Démontrons que : (Prouvons que le domino $n^\circ (k+1)$ tombe)
>
>     Démontrons que la propriété est vraie au rang $k + 1$, soit : $\ 2^{k + 1} > k + 1$
>
>     Par hypothèse de récurrence, on a $2^{k} > k$
>
> $$
> 	\begin{array}{rcl}
> 		       & 2^{k}          & > k                                                        \\\\
> 		\iff & 2 \times 2^{k} & > 2 \times k                                               \\\\
> 		\iff & 2^{k + 1}      & > 2k                                                       \\\\
> 		\iff & 2^{k + 1}      & > k + k                                                    \\\\
> 		\iff & 2^{k + 1}      & > k + k \geqslant k + 1\quad \text{, car } k \geqslant 1   \\\\
> 		\iff & 2^{k + 1}      & > k + 1 \qquad\text{Le domino }n^\circ (k+1)\text{ tombe.} \\\\
> \end{array}
> $$

3. **Conclusion :** (Tous les dominos tombent)

> La propriété est vraie pour $n = 1$ et héréditaire à partir de ce rang.
>
> D'après le principe de récurrence, elle est vraie pour $n$ non nul, soit : $2^{n} > n$.
```

### Exemples avec les suites

```admonish meth title="Méthode : Démontrer par récurrence l'expression générale d'une suite"
On considère la suite $(u_n)$ définie pour tout entier naturel $n$ par :

$$
	(u_n):
	\begin{cases}
		u_{0} = 1 \\\\
		u_{n + 1} = u_{n} + 2n + 3
	\end{cases}
$$

:bulb: Démontrer par récurrence que : $u_n = (n + 1)^{2}$.

1. **Initialisation pour $n= 0$**

> $$(0 + 1)^{2} = 1 = u_{0}$$
>
> La propriété est donc vraie pour $n = 0$.

2. **Hérédité :**

> - Hypothèse de récurrence :
>
>     Supposons que la propriété soit vraie pour un certain entier $k$ :
>
> $$u_{k} = (k + 1)^{2}$$

> - Démontrons que la propriété est vraie au rang $k + 1$, soit :
>
>     $$u_{k + 1} = (k + 1 + 1)^{2}\rarr \boxed{u_{k + 1} = (k + 2)^{2}}$$
>
> Par définition :
>
> $$
> \begin{aligned}
> 	u_{k + 1} & = u_{k} + 2k + 3                                               \\\\
>            & = (k + 1)^{2} + 2k + 3\qquad\text{par hypothèse de récurrence} \\\\
>            & = k^{2} + 2k + 1 + 2k + 3                                      \\\\
>            & = k^{2} + 4k + 4                                               \\\\
>            & = (k + 2)^{2}
> \end{aligned}
> $$

3. **Conclusion :**

> La propriété est vraie pour $n = 0$ et héréditaire à partir de ce rang.
>
> D'après le principe de récurrence, elle est vraie pour tout naturel $n$, soit : $u_{n} = (n + 1)^{2}$.
```

```admonish meth title="Méthode : Démontrer la monotonie par récurrence"
On considère la suite $(u_n)$ définie pour tout entier naturel $n$ par :

$$
	(u_n):
	\begin{cases}
		u_{0} = 2 \\\\
		u_{n + 1} =\frac{1}{3} u_{n} + 2
	\end{cases}
$$

:bulb: Démontrer par récurrence que la suite $(u_n)$ est croissante.

Pour cela, on va démontrer que pour tout entier naturel $n$, on a : $u_{n + 1} \geqslant u_{n}$

1. **Initialisation :**

> $$
> u_{0}=2\quad\text{et}\quad u_{1}=\frac{1}{3}u_{0}+2=\frac{1}{3}\times 2+2=\frac{8}{3}>2
> $$
>
> Donc $u_{1} \geqslant u_{0}$. La propriété est donc vraie pour $n = 0$.

2. **Hérédité :**

> - Hypothèse de récurrence :
>
>     Supposons que la propriété soit vraie pour un entier $k$ : $u_{k + 1} \geqslant u_{k}$.
>
> - Démontrons que la propriété est vraie au rang $k + 1$, soit : $u_{k + 2} \geqslant u_{k + 1}$.
>
>     Par hypothèse de récurrence, on a $u_{k + 1} \geqslant u_{k}$ donc :
>
> $$
> 	\begin{array}{rll}
> 		u_{k + 1} \geqslant u_{k} & \iff \frac{1}{3}u_{k + 1}     & \geqslant \frac{1}{3}u_{k}     \\\\
> 		                         & \iff \frac{1}{3}u_{k + 1} + 2 & \geqslant \frac{1}{3}u_{k} + 2 \\\\
> 		                         & \iff  u_{k + 2}               & \geqslant u_{k + 1}
> 	\end{array}
> $$

3. **Conclusion :**

> La propriété est vraie pour $n = 0$ et héréditaire à partir de ce rang.
>
> D'après le principe de récurrence, elle est vraie pour tout naturel $n$, soit $u_{n + 1} \geqslant u_{n}$ et donc la suite $(u_n)$ est croissante.
```

### Inégalité de Bernoulli

```admonish prop
Soit un nombre réel $a$ positif.

Pour tout entier naturel $n$, on a :

$$\boxed{(1 + a)^{n} \geqslant 1 + na}$$
```

```admonish demo
1. **Initialisation :**

> $$(1 + a)^{0} = 1\quad\text{et}\quad 1 + 0 \times a = 1$$
>
> La propriété est vraie pour $n = 0$.

2. **Hérédité :**

> - Hypothèse de récurrence :
>
>     Supposons que la propriété soit vraie pour un certain entier $k$ :
>
> $$(1 + a)^{k} \geqslant 1 + ka$$
>
> - Démontrons que la propriété est vraie au rang $k + 1$, soit :
>
> $$(1 + a)^{k + 1} \geqslant 1 + (k + 1)a$$
>
> D'après l'hypothèse de récurrence, on a :
>
> $$
> 	\begin{array}{rrl}
> 		            & (1 + a)^{k}          & \geqslant 1 + ka                                                                                \\\\
> 		\iff\quad & {(1 + a)(1 + a)}^{k} & \geqslant (1 + a)(1 + ka)\quad\text{, car}\quad 1 + a > 0                                       \\\\
> 		\iff\quad & (1 + a)^{k + 1}      & \geqslant 1 + ka + a + ka^{2}                                                                   \\\\
> 		\iff\quad & (1 + a)^{k + 1}      & \geqslant 1 + (k + 1)a + ka^{2} \geqslant 1 + (k + 1)a\quad\text{, car}\quad ka^{2} \geqslant 0
> 	\end{array}
> $$
>
> Donc : $(1 + a)^{k + 1} \geqslant 1 + (k + 1)a$.

3. **Conclusion :**

> La propriété est vraie pour $n = 0$ et héréditaire à partir de ce rang.
>
> D'après le principe de récurrence, elle est vraie pour tout $n$ soit :
>
> $$(1 + a)^{n} \geqslant 1 + na$$
```

```admonish warning title="Le rôle de l'initialisation dans une démonstration par récurrence"
L'initialisation (le 1$^\text{er}$ domino tombe) est indispensable dans une démonstration par récurrence, sinon on peut démontrer des propriétés fausses !

En effet, démontrons par exemple que la propriété "$2^{n}$ est divisible par $3$" est héréditaire sans vérifier l'initialisation.

Supposons que pour un certain entier $k$ : "$2^{k}$ est divisible par $3$".

Donc il existe un entier $p$ tel que : $2^{k} = 3p$

Supposons que pour un certain entier $k$ : "$2^{k}$ est divisible par $3$".

Donc il existe un entier $p$ tel que : $2^{k} = 3p$

$$
	\begin{aligned}
		2^{k + 1} & = 2^{k} \times 2                                            \\\\
		         & = 3p \times 2\qquad\text{d'après l'hypothèse de récurrence} \\\\
		         & = 6p                                                        \\\\
		         & = 3 \times 2p\qquad\text{avec $2p$ entier}
	\end{aligned}
$$

Donc $2^{k + 1}$ est divisible par $3$.

L'hérédité est vérifiée et pourtant la propriété n'est jamais vraie.
```

## Limite finie ou infinie d'une suite

### Limite infinie

```admonish def
![](img/suites/image5.png#right =350x)

On dit que la suite $(u_n)$ admet pour **limite** $\mathbf{+ \infty}$, si $u_{n}$ est aussi grand que l'on veut à partir d'un certain rang et on note :

$$\boxed{\limite_{n \to +\infty}{u_{n} = + \infty}}$$
```

```admonish ex
![](img/suites/image6.png#right =150x)

La suite $(u_n)$ définie pour tout $n$ par $u_{n} = n^{2}$ a pour limite $+ \infty$.

On a par exemple :

- $u_{100} = 100^{2} = {10000}$
- $u_{{1000}} = {{1000}}^{2} = {1000000}$

Les termes de la suite deviennent aussi grands que l'on veut à partir
d'un certain rang.

Si on prend un réel $a$ quelconque, l'intervalle $\rbrack a ; +\infty \lbrack$ contient tous
les termes de la suite à partir d'un certain rang.
```

```admonish def
- On dit que la suite $(u_n)$ admet pour limite $+ \infty$ si tout intervalle $\rbrack a;+\infty\lbrack$ contient tous les termes de la suite à partir d'un certain rang et on note :

$$\limite_{n \to +\infty}{u_{n} = + \infty}$$

- On dit que la suite $(u_n)$ admet pour limite $- \infty$ si tout intervalle $\rbrack -\infty;b\lbrack$ contient tous les termes de la suite à partir d'un certain rang et on note :

$$\limite_{n \to +\infty}{u_{n} = - \infty}$$
```

```admonish ex title="Algorithme de seuil"
:bulb: Algorithme permettant de déterminer un rang à partir duquel une suite croissante de limite infinie est supérieure à un nombre réel $A$.

~~~
Définir fonction seuil(A)
n ← 0
u ← 2
Tant que u < A
  n ← n + 1
  u ← 4u
Fin Tant que
Afficher n
~~~

On considère la suite $(u_n)$ définie par $u_{0} = 2$ et $u_{n + 1} = 4u_{n}$

Cette suite est croissante et admet pour limite $+\infty$.

En appliquant l'algorithme avec $A = 100$, on obtient en sortie $n = 3$.

A partir du terme $u_{3}$, les termes de la suite dépassent $100$.

Les programmes correspondants dans différents langages :

|                    TI                     |                   Casio                   |                  Python                   |
| :---------------------------------------: | :---------------------------------------: | :---------------------------------------: |
| ![](img/suites/image7tt.png =300x center) | ![](img/suites/image8tt.png =300x center) | ![](img/suites/image9tt.png =300x center) |
```

### Limite finie

```admonish def
On dit que la suite $(u_n)$ admet pour **limite** $\mathbf{L}$, si $u_{n}$ est aussi proche de $L$ que l'on veut à partir d'un certain rang et on note :

$$\boxed{\limite_{n \to +\infty}{u_{n} = L}}$$

Une telle suite est dite **convergente**.
```

```admonish ex
La suite $(u_n)$ définie pour tout $n$ non nul par :

$$u_{n} = 1 +\frac{1}{n^{2}}$$

...a pour limite $1$.

On a par exemple :

- $u_{100} = 1 +\frac{1}{100^{2}} = {1,0001}$
- $u_{{1000}} = 1 +\frac{1}{{1000}^{2}} = {1,000001}$

Les termes de la suite se resserrent autour de $1$ à partir d'un certain rang.

Si on prend un intervalle ouvert quelconque contenant $1$, tous les termes de la suite appartiennent à cet intervalle à partir d'un certain rang.

![](img/suites/image12.png =400x center)
```

```admonish def
On dit que la suite $(u_n)$ admet pour limite $L$ si tout intervalle ouvert contenant $L$ contient tous les termes de la suite à partir d'un certain rang et on note :

$$\boxed{\limite_{n \to +\infty}{u_{n} = L}}$$

![](img/suites/image13.png =600x center)
```

```admonish def
Une suite qui n'est pas convergente est dite **divergente**.
```

```admonish rem
Une suite qui est divergente n'admet pas nécessairement de limite infinie.

Par exemple, la suite de terme générale $u_n=(-1)^{n}$ prend alternativement les valeurs $-1$ et $1$.

Elle n'admet donc pas de limite finie, ni infinie. Elle est donc **divergente**.
```

### Limites des suites usuelles

```admonish prop
$$
	\begin{array}{|c|c|}\hline
		\rule[-5mm]{0cm}{13mm}\limite_{n \to + \infty}{{n} = + \infty}        & \limite_{n \to + \infty}{{\dfrac{1}{n}} = 0}        \\\\ \hline
		\rule[-5mm]{0cm}{13mm}\limite_{n \to + \infty}{{n^{2}} = + \infty}    & \limite_{n \to + \infty}{{\dfrac{1}{n^{2}}} = 0}    \\\\ \hline
		\rule[-5mm]{0cm}{13mm}\limite_{n \to + \infty}{{\sqrt{n}} = + \infty} & \limite_{n \to + \infty}{{\dfrac{1}{\sqrt{n}}} = 0} \\\\ \hline
	\end{array}
$$
```

```admonish demo
:bulb: Démontrons que $\ \limite_{n \to + \infty}{{\frac{1}{n}} = 0}$

Soit un intervalle quelconque ouvert $\rbrack -a;a \lbrack$, $a$ réel positif non nul, contenant $0$.

Pour tout $n$, tel que $n >\frac{1}{a}$, on a :

$$n >\frac{1}{a}\quad\iff\quad 0\lt\frac{1}{n}\lt a$$

Donc $\frac{1}{n}\in\rbrack -a;a \lbrack$.

Ainsi, à partir d'un certain rang, tous les termes de la suite appartiennent à l'intervalle $\rbrack -a;a \lbrack$ et donc :

$$\limite_{n \to + \infty}{\frac{1}{n} = 0}$$
```

## Opérations sur les limites

### Utiliser les propriétés des opérations sur les limites

```admonish prop title="Somme"
$$
	\begin{array}{|r|c|c|c|c|c|c|}\hline
		\rule[-4mm]{0cm}{9mm}\limite_{n\to +\infty}{u_{n} =}       & L    & L       & L       & +\infty & -\infty & +\infty       \\\\ \hline
		\rule[-4mm]{0cm}{9mm}\limite_{n\to +\infty}{v_{n} =}       & L'   & +\infty & -\infty & +\infty & -\infty & -\infty       \\\\ \hline
		\rule[-4mm]{0cm}{9mm}\limite_{n\to +\infty}{u_{n}+v_{n} =} & L+L' & +\infty & -\infty & +\infty & -\infty & \text{F.I.}^* \\\\ \hline
	\end{array}
$$

$^*$Forme indéterminée : On ne peut pas prévoir la limite éventuelle.
```

```admonish prop title="Produit"
$$
	\begin{array}{|r|c|c|c|c|}\hline
		\rule[-4mm]{0cm}{9mm}\limite_{n\to +\infty}{u_{n} =}             & L          & L        & \infty   & 0           \\\\ \hline
		\rule[-4mm]{0cm}{9mm}\limite_{n\to +\infty}{v_{n} =}             & L'         & \infty   & \infty   & \infty      \\\\ \hline
		\rule[-4mm]{0cm}{9mm}\limite_{n\to +\infty}{u_{n}\times v_{n} =} & L\times L' & \infty^* & \infty^* & \text{F.I.} \\\\ \hline
	\end{array}
$$

$^*$On applique la règle des signes pour déterminer si le produit est $+\infty$ ou $-\infty$.
```

```admonish prop title="Quotient"
$$
	\begin{array}{|r|c|c|c|c|c|c|}\hline
		\rule[-4mm]{0cm}{9mm}\limite_{n\to +\infty}{u_{n} =}            & L             & L\neq 0  & L      & \infty   & \infty      & 0           \\\\ \hline
		\rule[-4mm]{0cm}{9mm}\limite_{n\to +\infty}{v_{n} =}            & L'\neq 0      & 0        & \infty & L        & \infty      & 0           \\\\ \hline
		\rule[-4mm]{0cm}{11mm}\limite_{n\to +\infty}{\dfrac{u_n}{v_n} =} & \dfrac{L}{L'} & \infty^* & 0      & \infty^* & \text{F.I.} & \text{F.I.} \\\\ \hline
	\end{array}
$$

$^*$On applique la règle des signes pour déterminer si le produit est $+\infty$ ou $-\infty$.

Tous ces résultats sont intuitifs. On retrouve par exemple, un principe sur les opérations de limite semblable à la règle des signes établie sur les nombres relatifs.
```

```admonish meth title="Méthode : Calculer la limite d'une suite à l'aide des formules d'opération"
:bulb: Calculer les limites :

1. $\limite_{n \to + \infty}\left(n^{2} + n\right)$
2. $\limite_{n \to + \infty}\left(\dfrac{1}{\sqrt{n}} + 1\right)\left({n^{2} + 3}\right)$
3. $\limite_{n \to + \infty}\left(\dfrac{2}{- n^{2} - 3}\right)$

---

1) $\limite_{n \to + \infty}\left(n^{2} + n\right)$

> On a : $\begin{cases}\limite_{n \to + \infty}{n^{2} = + \infty} \\\\ \limite_{n \to + \infty}{n = + \infty}\end{cases}$
>
> D'après la propriété donnant la limite d'une somme :
>
> $$\limite_{n \to + \infty}\pa{ n^{2} + n} = + \infty$$

---

2) $\limite_{n \to + \infty}\left(\dfrac{1}{\sqrt{n}} + 1\right)\left({n^{2} + 3}\right)$

> On a : $\begin{cases}\limite_{n \to + \infty}\pa{\frac{1}{\sqrt{n}}} = 0\quad\text{donc}\quad\limite_{n \to + \infty}\pa{\frac{1}{\sqrt{n}}+1} = 1 \\\\ \limite_{n \to + \infty}\pa{ n^{2}} = +\infty\quad\text{donc}\quad\limite_{n \to + \infty}\pa{ n^{2}+3}=+\infty\end{cases}$
>
> D'après la propriété donnant la limite d'un produit :
>
> $$\quad\limite_{n \to + \infty}{\left( \frac{1}{\sqrt{n}} + 1 \right)\pa{ n^{2} + 3}} = + \infty$$

---

3) $\limite_{n \to + \infty}\left(\dfrac{2}{- n^{2} - 3}\right)$

> On a :
>
>
> $$
> \begin{array}{rcl}\limite_{n \to + \infty}{n^{2}} = + \infty & \iff & \limite_{n \to + \infty}\pa{-n^{2}} = - \infty    \\\\
>                                                              & \iff & \limite_{n \to + \infty}\pa{ -n^{2}-3} = - \infty
> \end{array}
> $$
>
>
> D'après la propriété donnant la limite d'un quotient :
>
> $$\limite_{n \to + \infty}\left(\dfrac{2}{- n^{2} - 3}\right) = 0$$
```

```admonish rem title="Cas des formes indéterminées"
Il est important de reconnaître les formes indéterminées pour lesquelles il faudra utiliser des calculs algébriques ou utiliser d'autres propriétés sur les calculs de limites afin de lever l'indétermination.

Les quatre **formes indéterminées** à reconnaître sont :

$$\boxed{\infty - \infty}\qquad\boxed{0 \times \infty}\qquad\boxed{\frac{\infty}{\infty}}\qquad\boxed{\frac{0}{0}}$$
```

```admonish meth title="Méthode : Lever une indétermination à l'aide d'une factorisation (1)"
:bulb: Déterminer les limites suivantes :

1. $\limite_{n \to + \infty}\pa{ n - 3\sqrt{n}}$
2. $\limite_{n \to + \infty}\pa{ n^{2} - 5n + 1}$

---

1. $\limite_{n \to + \infty}{n - 3\sqrt{n}}$

> On a : $\begin{cases}\limite_{n \to + \infty}(n) = + \infty \\\\ \limite_{n \to + \infty}\pa{ - 3\sqrt{n}} = - \infty\end{cases}\quad$ Il s'agit d'une F.I. du type $\boxed{\infty - \infty}$
>
> Levons l'indétermination :
>
> $$n - 3\sqrt{n} = n\left( 1 - \frac{3\sqrt{n}}{n} \right) = n\left( 1 - \frac{3\left( \sqrt{n} \right)^{2}}{n\sqrt{n}} \right) = n\left( 1 - \frac{3}{\sqrt{n}} \right)$$
>
> On a maintenant : $\quad\begin{cases}\limite_{n \to +\infty}{n = +\infty} \\\\ \limite_{n \to + \infty}\dfrac{3}{\sqrt{n}} = 0\quad\text{donc}\quad\limite_{n \to + \infty}{1 -}\dfrac{3}{\sqrt{n}} = 1\end{cases}$
>
> Donc, comme limite d'un produit : $\quad\limite_{n \to + \infty}{n\left( 1 - \frac{3}{\sqrt{n}} \right)} = + \infty$
>
> Soit $\quad\limite_{n \to + \infty}\pa{ n - 3\sqrt{n}} = + \infty$

---

2. $\limite_{n \to + \infty}\pa{ n^{2} - 5n + 1}$

> On a : $\quad\begin{cases}\limite_{n \to + \infty}\pa{ n^{2}} = + \infty \\\\ \limite_{n \to + \infty}\pa{ -5n+1} = -\infty\end{cases}\quad$ Il s'agit d'une F.I. du type $\boxed{\infty - \infty}$
>
> Levons l'indétermination en factorisant par le monôme de plus haut degré :
>
> $$n^{2} - 5n + 1 = n^{2}\left( 1 - \dfrac{5n}{n^{2}} + \dfrac{1}{n^{2}} \right) = n^{2}\left( 1 - \dfrac{5}{n} + \dfrac{1}{n^{2}} \right)$$
>
> On a, maintenant : $\begin{cases}\limite_{n \to + \infty}\frac{5}{n} = 0 \\\\ \limite_{n \to + \infty}\frac{1}{n^{2}} = 0\end{cases}\quad$
>
> Donc, comme limite d'une somme : $\quad\limite_{n \to + \infty}\pa{ 1 - \dfrac{5}{n} + \dfrac{1}{n^{2}}} = 1$
>
> On a, au final : $\quad\begin{cases}\limite_{n \to + \infty}{n^{2} = + \infty} \\\\ \limite_{n \to + \infty}{1 - \dfrac{5}{n} + \dfrac{1}{n^{2}}} = 1\end{cases}$
>
> Donc, comme limite d'un produit :
>
> $$\limite_{n \to + \infty}{n^{2}\left( 1 - \dfrac{5}{n} + \dfrac{1}{n^{2}} \right)} = + \infty\quad\iff\quad\limite_{n \to + \infty}\pa{ n^{2} - 5n + 1} = + \infty$$
```

```admonish meth title="Méthode : Lever une indétermination à l'aide de factorisations (2)"
:bulb: Déterminer les limites suivantes :

1. $\limite_{n \to + \infty}\left(\dfrac{5n^{2} + 4}{4n^{2} + 3n}\right)$
2. $\limite_{n \to + \infty}\left(\dfrac{3n^{2} + n}{n + 3}\right)$

---

1. $\limite_{n \to + \infty}\left(\dfrac{5n^{2} + 4}{4n^{2} + 3n}\right)$

> On a : $\begin{cases}\limite_{n \to + \infty}{5n^{2} + 4} = + \infty \\\\ \limite_{n \to + \infty}{4n^{2} + 3n} = + \infty\end{cases}\quad$ Il s'agit d'une F.I. du type $\boxed{\frac{\infty}{\infty}}$.
>
> Levons l'indétermination en factorisant le numérateur et le dénominateur par le monôme de plus haut degré :
>
> $$\frac{5n^{2} + 4}{4n^{2} + 3n} = \frac{n^{2}}{n^{2}} \times \frac{5 + \frac{4}{n^{2}}}{4 + \frac{3n}{n^{2}}} = \frac{5 + \frac{4}{n^{2}}}{4 + \frac{3}{n}}$$
>
> On a : $\begin{cases}\limite_{n \to + \infty}\frac{4}{n^{2}} = 0\quad\text{donc}\quad\limite_{n \to + \infty}{5 +}\frac{4}{n^{2}} = 5 \\\\ \limite_{n \to + \infty}\frac{3}{n} = 0\quad\text{donc}\quad\limite_{n \to + \infty}{4 +}\frac{3}{n} = 4\end{cases}$
>
> Donc, comme limite d'un quotient :
>
> $$\limite_{n \to + \infty}\left(\frac{5 + \frac{4}{n^{2}}}{4 + \frac{3}{n}}\right) = \frac{5}{4}\quad\iff\quad\limite_{n \to + \infty}\left(\frac{5n^{2} + 4}{4n^{2} + 3n}\right)= \frac{5}{4}$$

---

2. $\limite_{n \to + \infty}\left(\dfrac{3n^{2} + n}{n + 3}\right)$

> On a : $\begin{cases}\limite_{n \to + \infty}{3n^{2} + n} = + \infty \\\\ \limite_{n \to + \infty}{n + 3} = + \infty\end{cases}\quad$ Il s'agit d'une F.I. du type $\boxed{\frac{\infty}{\infty}}$
>
> Levons l'indétermination en factorisant le numérateur et le dénominateur par le monôme de plus haut degré :
>
> $$\frac{3n^{2} + n}{n + 3} = \frac{n^{2}}{n} \times \frac{3 + \frac{n}{n^{2}}}{1 + \frac{3}{n}} = n \times \frac{3 + \frac{1}{n}}{1 + \frac{3}{n}}$$
>
> On a : $\begin{cases}\limite_{n \to + \infty}\frac{1}{n} = 0\quad\text{donc}\quad\limite_{n \to + \infty}{3 +}\frac{1}{n} = 3 \\\\ \limite_{n \to + \infty}\frac{3}{n} = 0\quad\text{donc}\quad\limite_{n \to + \infty}{1 +}\frac{3}{n} = 1\end{cases}$
>
> Donc, comme limite d'un quotient : $\limite_{n \to + \infty}\frac{3 + \frac{1}{n}}{1 + \frac{3}{n}}= \frac{3}{1} = 3$
>
> On a, maintenant : $\begin{cases}\limite_{n \to + \infty}n = + \infty  \\\\ \limite_{n \to + \infty}{\frac{3 + \frac{1}{n}}{1 + \frac{3}{n}}} = 3\end{cases}$
>
> Donc, comme limite d'un produit :
>
> $\limite_{n \to + \infty}\left(n \times\frac{3 + \frac{1}{n}}{1 + \frac{3}{n}}\right)= + \infty\quad\iff\limite_{n \to + \infty}\left(\frac{3n^{2} + n}{n + 3}\right)= + \infty$
```

```admonish meth title="Méthode : Lever une indétermination à l'aide de l'expression conjuguée"
:bulb: Déterminer la limite : $\limite_{n \to + \infty}{\sqrt{n + 2} - \sqrt{n}}$

> On a : $\begin{cases}\limite_{n \to + \infty}{\sqrt{n + 2} = + \infty} \\\\ \limite_{n \to + \infty}{\sqrt{n} = + \infty}\end{cases}\quad$ Il s'agit d'une F.I. du type $\boxed{\infty - \infty}$
>
> Levons l'indétermination par la méthode de l'expression conjuguée :
>
> $$
> 	\begin{array}{rl}
> 		\sqrt{n + 2} - \sqrt{n} & = \dfrac{\left( \sqrt{n + 2} - \sqrt{n} \right)\left( \sqrt{n + 2} + \sqrt{n} \right)}{\sqrt{n + 2} + \sqrt{n}} \\\\
> 		                       & = \dfrac{\left( \sqrt{n + 2} \right)^{2} - \left( \sqrt{n} \right)^{2}}{\sqrt{n + 2} + \sqrt{n}}                \\\\
> 		                       & = \dfrac{n + 2 - n}{\sqrt{n + 2} + \sqrt{n}}                                                                    \\\\
> 		                       & = \dfrac{2}{\sqrt{n + 2} + \sqrt{n}}
> 	\end{array}
> $$
>
> Or, comme limite d'une somme : $\quad\limite_{n \to + \infty}{\sqrt{n + 2} + \sqrt{n}} = + \infty$
>
> Et donc, comme limite d'un quotient :
>
> $$\limite_{n \to + \infty}\dfrac{2}{\sqrt{n + 2} + \sqrt{n}}= 0\quad\iff\limite_{n \to + \infty}{\sqrt{n + 2} - \sqrt{n}} = 0$$
```
