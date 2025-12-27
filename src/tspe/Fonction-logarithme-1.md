# Fonction logarithme népérien (1/2)

<!-- toc -->

## Fonction exponentielle et fonction logarithme

### Rappels concernant la fonction exponentielle

```admonish prop
![](img/ln/image3.png#right =350x)

La fonction exponentielle est :

- définie,
- continue,
- dérivable,
- strictement croissante,
- convexe $\ldots$

$\ldots$ sur $\R$.

Et on a : $\quad\pa{ e^{x} }^{'} = e^{x}$
```

```admonish prop
- Valeurs remarquables et signe :
  - $e^{0} = 1$
  - $e^{1} = e$
  - $e^{x} > 0$

- Relation fonctionnelle :
  - $e^{x + y} = e^{x}\times e^{y}$
  - $e^{x - y} =\cfrac{e^{x}}{e^{y}}\quad$ et $\quad e^{-x} =\cfrac{1}{e^{x}}$
  - $\pa{ e^{x} }^{n} = e^{nx}\ $ avec $\ n\in\N$

- Équations :
  - $e^{a} = e^{b} \iff a = b$
  - $e^{a}\lt e^{b} \iff a\lt b$
```

### Définition de la fonction logarithme népérien

```admonish note title="Un peu d'histoire"
![](img/ln/Napier.png#right =200x)

John Napier $(1\ 550–1\ 617)$, parfois francisé en Jean Neper, était un mathématicien, physicien et astronome écossais surtout connu pour avoir inventé les logarithmes, qui ont révolutionné les calculs mathématiques.

Né dans une famille noble, il a étudié à l'université de St Andrews avant de voyager à travers l'Europe.

Son travail sur les logarithmes a grandement simplifié l'arithmétique complexe, au bénéfice des scientifiques, des navigateurs et des ingénieurs.
```

```admonish rem
La fonction exponentielle est **continue** et **strictement croissante** sur $\R$, à valeurs dans $\left\rbrack 0; + \infty \right\lbrack$.

D'après le théorème des valeurs intermédiaires, pour tout réel $a$ de $\left\rbrack 0; + \infty \right\lbrack$ l'équation $\ e^{x} = a\ $ admet une unique solution dans $\R$.
```

```admonish def
On appelle **logarithme népérien** d'un réel $a\gt 0$, l'unique solution de l'équation $e^{x} = a$.

On la note $\ \boxed{\ln a}$.

![](img/ln/image4.png =400x center)
```

```admonish def
La **fonction logarithme népérien**, notée $\boxed{\ln}$, est la fonction définie sur $\left\rbrack 0; + \infty \right\lbrack$, par :

$$\boxed{x \longmapsto \ln{(x)}}$$

![](img/ln/image5.png =400x center)
```

```admonish rem
- Les fonctions $\exp$ et $\ln$ sont réciproques l'une de l'autre.

$$
	\begin{array}{|c|c|c|c|c|}\hline
		x    & 1 & 2     & 0 & \ln(2) \\\\ \hline
		e(x) & e & e^{2} & 1 & 2      \\\\ \hline
	\end{array}
$$

- Les courbes représentatives des fonctions $\exp$ et $\ln$ sont symétriques par rapport à la droite d'équation $y = x$.

![](img/ln/image6.png =500x center)

- Dans le domaine scientifique, on utilise la fonction log. décimale, notée **log**, et définie par :

  $$\log{(x)} =\cfrac{\ln{(x)}}{\ln 10}$$
```

```admonish prop title="Propriétés : Relation entre logarithme et exponentielle"
- _Définition_

  a. Pour $x > 0$ : $\ x = e^{y} \iff y = \ln{(x)}$

- _Valeurs remarquables_

  b. $\ln{(1)} = 0$

  c. $\ln{(e)} = 1$

  d. $\ln\pa{ \cfrac{1}{e} } = -1$

- _Réciprocité_

  e. $\ln{(e^{x})} = x$

  f. Pour $x > 0$ : $\ e^{\ln{(x)}} = x$
```

```admonish demo
a. Par définition

b. $e^{0} = 1\ $ donc d'après a., on a : $\ \ln{(1)} = 0$

c. $e^{1} = e\ $ donc d'après a., on a : $\ \ln{(e)} = 1$

d. $e^{- 1} = \cfrac{1}{e}\ $ donc d'après a., on a : $\ \ln\pa{ \cfrac{1}{e} } = -1$

e. Si on pose $y = e^{x}$, d'après a., on a : $\ x = \ln{(y)} = \ln{(e^{x})}$

f. Si on pose $y = \ln{(x)}$, d'après a, on a : $\ x = e^{y} = e^{\ln{(x)}}$
```

## Propriétés de la fonction logarithme népérien

### Relation fonctionnelle

```admonish th
Pour tous réels $x$ et $y$ strictement positifs, on a :

$$\boxed{\ln{(x \times y) = \ln{(x)} + \ln{(y)}}}$$
```

```admonish demo
On a :

$$
\begin{array}{rcl}e^{\ln(x \times y)} & = & x \times y                       \\\\
                                      & = & e^{\ln{(x)}} \times e^{\ln{(y)}} \\\\
                                      & = & e^{\ln{(x)} + \ln{(y)}}
\end{array}
$$

donc

$$\ln{(x \times y) = \ln{(x)} + \ln{(y)}}$$
```

```admonish rem
![](img/ln/image7.jpeg#right =170x)

Voici comment John Napier transformait un produit en somme :

$$
\begin{array}{rcl}
	\log(36 \times 62) & =       & \log(36) + \log(62)                      \\\\
	                   & \approx & 1,5563 + 1,7924                          \\\\
	                   &         & \text{(à, l'aide de la table ci-contre)} \\\\
	                   & \approx & 3,3487
\end{array}
$$

En cherchant à nouveau dans la table le logarithme égal à $3,3487$, on trouve $2\ 232$, soit : $$36 \times 62 = 2\ 232$$
```

### Propriétés corollaires

```admonish prop
Pour tous réels $x$ et $y$ strictement positifs, on a :

a. $\ln\pa{ \cfrac{1}{x} } = - \ln{(x)}$

b. $\ln{\pa{ \cfrac{x}{y} } = \ln{(x)}} - \ln{(y)}$

c. $\ln{\pa{ \sqrt{x} } = \cfrac{1}{2}\ln{(x)}}$

![](img/ln/image8.png#right =300x center)

d. $\ln{(x^{n}) = n\ln{(x)}}\ $ avec $n\in\Z$
```

```admonish demo
a. $\ln\pa{ \cfrac{1}{x} } + \ln{(x)} = \ln\pa{ \cfrac{1}{x} \times x } = \ln{(1)} = 0\ $ donc $\ \ln\pa{ \cfrac{1}{x} } = - \ln{(x)}$

b. $\ln{\pa{ \cfrac{x}{y} } = \ln\pa{ {x \times}\cfrac{1}{y} }} = \ln{(x)} + \ln\pa{ \cfrac{1}{y} } = \ln{(x)} - \ln{(y)}$

c. $2\ln{\pa{ \sqrt{x} } = \ln\pa{ \sqrt{x} } + \ln\pa{ \sqrt{x} }} = \ln{\pa{ \sqrt{x} \times \sqrt{x} } = \ln{(x)}}\ $ donc $\ \ln{\pa{ \sqrt{x} } = \cfrac{1}{2}\ln{(x)}}$

d. On démontre ce résultat par récurrence dans le cas où $n$ est un entier naturel.

- L'initialisation est triviale : $\ \ln(x^{0})=\ln(1)=0=0\times\ln(x)$

- La démonstration de l'hérédité passe par la décomposition :

$$
	\begin{array}{rcl}
		\ln(x^{k + 1}) & = & \ln\pa{ x^{k} \times x } \\\\
		               & = & \ln(x^{k}) + \ln(x)              \\\\
		               & = & k\ln(x) + \ln(x)                 \\\\
		               & = & (k + 1)\ln(x)
	\end{array}
$$
```

```admonish meth title="Méthode : Simplifier une expression contenant des logarithmes"
:bulb: Simplifier les expressions suivantes :

- $A = \ln\pa{ 3 - \sqrt{5} } + \ln\pa{ 3 + \sqrt{5} }$
- $B = 3\ln{(2)} + \ln{(5)} - 2\ln(3)$
- $C = \ln(e^{2}) - \ln\pa{ \cfrac{2}{e} }$

---

$$
\begin{array}{c|c}
	\begin{array}{rcl}
		A & = & \ln\pa{ 3 - \sqrt{5} } + \ln\pa{ 3 + \sqrt{5} }  \\\\
		  & = & \ln\pa{ \pa{ 3 - \sqrt{5} }\pa{ 3 + \sqrt{5} } } \\\\
		  & = & \ln\pa{ 3^2 - \pa{\sqrt{5}}^2 }                  \\\\
		  & = & \ln\pa{9 - 5}= \ln(4)
	\end{array} &
	\begin{array}{rcl}
		B & = & 3\ln{(2)} + \ln{(5)} - 2\ln{(3)}        \\\\
		  & = & \ln{(2^{3})} + \ln{(5)} - \ln{(3^{2})}  \\\\
		  & = & \ln\pa{ \cfrac{2^{3} \times 5}{3^{2}} } \\\\
		  & = & \ln\pa{ \cfrac{40}{9} }
	\end{array}
\end{array}
$$

$$
\begin{array}{rcl}
	C & = & \ln\pa{e^{2}} - \ln\pa{\cfrac{2}{e} } \\\\
	  & = & 2 - \ln\pa{2} + \ln\pa{e}             \\\\
	  & = & 2 - \ln\pa{2} + 1                     \\\\
	  & = & 3 - \ln\pa{2}
\end{array}
$$
```

### Équations et inéquations

```admonish prop
Pour tous réels $x$ et $y$ strictement positifs, on a :

$$\ln\pa{x}=\ln\pa{y}\ \iff\ x=y\qquad\text{et}\qquad\ln\pa{x}\lt\ln\pa{y}\ \iff\ x\lt y$$
```

```admonish meth title="Méthode : Résoudre une équation avec des logarithmes"
:bulb: Résoudre les équations suivantes :

a. $e^{x + 1} = 5$

b. $\ln\pa{x} = 2\quad$ dans $\ I = \left\rbrack 0; + \infty \right\lbrack$.

c. $\ln\pa{x-3}+\ln\pa{9-x}=0\quad$ dans $\ I=\rbrack 3;9\lbrack$.

---

a. $e^{x + 1} = 5$

> $$
> \begin{array}{rrcl}
> 	     & e^{x + 1}      & = & 5             \\\\
> 	\iff & e^{\pa{x + 1}} & = & e^{\ln\pa{5}} \\\\
> 	\iff & \pa{x + 1}     & = & \ln\pa{5}     \\\\
> 	\iff & x              & = & \ln\pa{5} - 1 \\\\
> \end{array}
> $$

b. $\ln\pa{x} = 2\quad$ dans $\ I = \left\rbrack 0; + \infty \right\lbrack$.

> On résout l'équation dans $I = \left\rbrack 0; + \infty \right\lbrack$, car la fonction $\ln\pa{x}$ est définie pour $x > 0$.
>
> $$
> \begin{array}{rrcl}
> 	     & \ln{(x)} & = & 2            \\\\
> 	\iff & \ln{(x)} & = & \ln{(e^{2})} \\\\
> 	\iff & x        & = & e^{2}        \\\\
> \end{array}
> $$
>
> La solution est donc $e^{2}$ car elle appartient à $I = \left\rbrack 0; + \infty \right\lbrack$.

c. $\ln\pa{x-3}+\ln\pa{9-x}=0\quad$ dans $\ I=\rbrack 3;9\lbrack$.

> On résout l'équation dans $I = \left\rbrack 3;9 \right\lbrack$, car :
>
> $$\begin{cases}\pa{x-3}>0\\\\\pa{9-x}>0\end{cases}\quad\iff\begin{cases}x\gt 3\\\\ -x\gt-9\end{cases}\quad\iff\begin{cases}x\gt 3\\\\x\lt 9\end{cases}$$
>
> Soit $x > 3$ et $x\lt 9$.
>
> $$
> \begin{array}{rrcl}
> 	     & \ln\pa{x - 3} + \ln\pa{9 - x} & = & 0         \\\\
> 	\iff & \ln\pa{(x - 3)(9 - x)}        & = & 0         \\\\
> 	\iff & \ln\pa{(x - 3)(9 - x)}        & = & \ln\pa{1} \\\\
> 	\iff & (x - 3)(9 - x)                & = & 1         \\\\
> 	\iff & -x^{2} + 12x - 27             & = & 1         \\\\
> 	\iff & -x^{2} + 12x - 28             & = & 0
> \end{array}
> $$
>
> On a : $\Delta = 12^{2} - 4 \times ( - 1) \times ( - 28) = 32\quad$
>
> Donc $\quad x_{1} = \cfrac{- 12 + \sqrt{32}}{- 2} = \pa{6 - 2\sqrt{2}}\ $ et $\ x_{2} = \cfrac{- 12 - \sqrt{32}}{- 2} = \pa{6 + 2\sqrt{2}}$
>
> Les solutions sont donc $\pa{6 - 2\sqrt{2}}$ et $\pa{6 + 2\sqrt{2}}$ car elles appartiennent à $I = \rbrack 3;9\lbrack$.
```

```admonish meth title="Méthode : Résoudre une inéquation avec des logarithmes"
a. Résoudre l'inéquation : $\ e^{x} + 5 > 4e^{x}$

b. Résoudre l'inéquation : $\ \ln{(6x - 1) \ge 2}\ $ sur $\ I = \left\rbrack \cfrac{1}{6}; +\infty \right\lbrack$

c. Résoudre dans un intervalle $I$ à déterminer l'inéquation : $\ \ln\pa{3-x} - \ln\pa{x+1} \le 0$

---

a. $e^{x} + 5 > 4e^{x}$

> $$
> \begin{array}{rrcl}
> 	     & e^{x} + 5      & >   & 4e^{x}                   \\\\
> 	\iff & e^{x} - 4e^{x} & >   & -5                       \\\\
> 	\iff & -3e^{x}        & >   & -5                       \\\\
> 	\iff & e^{x}          & \lt & \tfrac{5}{3}             \\\\
> 	\iff & {e}^{x}        & \lt & e^{\ln\pa{\tfrac{5}{3}}} \\\\
> 	\iff & x              & \lt & \ln\pa{\tfrac{5}{3}}
> \end{array}
> $$
>
> L'ensemble solution est : $\ S=\left\rbrack -\infty\ ;\ \ln\pa{\cfrac{5}{3}} \right\lbrack$.

b. $\ln{(6x - 1) \ge 2}$

> On résout l'inéquation dans $I = \left\rbrack \cfrac{1}{6}\ ;\ +\infty \right\lbrack$, car : $\ 6x-1>0\ $ soit $\ x>\cfrac{1}{6}$.
>
> $$
> \begin{array}{rrcl}
> 	     & \ln\pa{6x - 1} & \ge & 2                    \\\\
> 	\iff & \ln\pa{6x - 1} & \ge & \ln\pa{e^{2}}        \\\\
> 	\iff & 6x - 1         & \ge & e^{2}                \\\\
> 	\iff & 6x             & \ge & e^{2} + 1            \\\\
> 	\iff & x              & \ge & \cfrac{e^{2} + 1}{6}
> \end{array}
> $$
>
> L'ensemble solution est $\ S=\left\lbrack \cfrac{e^{2} + 1}{6}; + \infty \right\lbrack$ car il est inclu dans $I = \left\rbrack \cfrac{1}{6}; + \infty \right\lbrack$.

c. $\ln\pa{3-x} - \ln\pa{x+1} \le 0$

> - Intervalle d'étude :
>
>   On a $\ln\pa{3-x}\ $ et $\ \ln\pa{x+1}\ $ sont définis pour $\pa{3-x} > 0$ et $\pa{x+1}>0$.
>
>   Soit : $\ x\lt 3\ $ et $\ x>\pa{-1}$
>
>   L'inéquation est donc définie sur $\ I = \left\rbrack - 1\ ;\ 3 \right\lbrack$.
>
> - Résolution :
>
> $$
> \begin{array}{rrcl}
> 	     & \ln\pa{3-x}-\ln\pa{x+1} & \le & 0           \\\\
> 	\iff & \ln\pa{3-x}             & \le & \ln\pa{x+1} \\\\
> 	\iff & \pa{3-x}                & \le & \pa{x+1}    \\\\
> 	\iff & 2                       & \le & 2x          \\\\
> 	\iff & 1                       & \le & x           \\\\
> \end{array}
> $$
>
> L'ensemble solution est donc : $\ S=\left\rbrack -1\ ;\ 3 \right\lbrack \cap \left\lbrack 1\ ;\  +\infty \right\lbrack\quad$ soit $\quad S=\left\lbrack 1;3 \right\lbrack$.
```
