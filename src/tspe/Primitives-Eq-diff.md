# Primitives et équations différentielles

<!-- toc -->

## Primitive d'une fonction

### Définition et propriétés

```admonish ex
On considère les fonctions $f\ $ et $\ F$ définies par : $\ f(x)=2x+3\ \ $ et $\ \ F(x)=x^{2}+3x-1\ $

Si on dérive $F$, on constate que : $F'(x)=2x+3=f(x)$.

Lorsque $F'=f$, on dit que $F$ est une **primitive** de $f$.
```

```admonish def
$f$ est une fonction continue sur un intervalle $I$.

On appelle **primitive** de $f$, une fonction $F$, telle que :

$$\boxed{F'=f}$$
```

```admonish rem
**Dans ces conditions**, dire que "$F$ est une **primitive** de $f$" revient à dire que "$f$ est la dérivée de $F$".
```

```admonish meth title="Méthode : Vérifier qu'une fonction est une primitive d'une autre fonction"
:bulb: Dans chaque cas, dire si $F$ est une primitive de $f$.

a. $F(x) = \cfrac{x^{2}}{2}\ $ et $\ f(x) = x$.

b. $F(x) = xe^{x}\ $ et $\ f(x) = e^{x}(x + 1)$.

c. $F(x) = \cfrac{\ln{(x)}}{x}\ $ et $\ f(x) = \cfrac{- \ln(x)}{x^{2}}$.

---

a. $F(x) = \cfrac{x^{2}}{2}\ $ et $\ f(x) = x$.

On a :

$F'(x) = \cfrac{2x}{2} = x = f(x)\ $ donc $F$ est une primitive de $f$.

b. $F(x) = xe^{x}\ $ et $\ f(x) = e^{x}(x + 1)$.

On a :

$F'(x)=1\times e^{x}+x\times e^{x}=e^{x}(x+1)=f(x)\ $ donc $F$ est une primitive de $f$.

c. $F(x) = \cfrac{\ln{(x)}}{x}\ $ et $\ f(x) = \cfrac{- \ln(x)}{x^{2}}$.

On a :

$F'(x)=\cfrac{\tfrac{1}{x}\times x-\ln{(x)\times 1}}{x^{2}}=\cfrac{1-\ln{(x)}}{x^{2}}\neq f(x)$ donc $F$ n'est pas une primitive de $f$.
```

```admonish prop
Deux primitives d'une même fonction continue sur un intervalle diffèrent d'une _constante_.
```

```admonish demo
Soit $F\ $ et $\ G$ deux primitives de la fonction $f$ sur $I$.
Alors :

$$
	\begin{array}{rrcl}
		\     & F'(x) = f(x)\      & \text{et} & \ G'(x) = f(x)    \\\\
		\iff & F'(x)             & =         & G'(x)            \\\\
		\iff & F'(x) - G'(x)     & =         & 0                \\\\
		\iff & \pa{F(x) - G(x)}' & =         & 0                \\\\
		\iff & F(x) - G(x)       & =         & \text{constante} \\\\
	\end{array}
$$

On nomme $C$ cette constante. Ainsi : $F(x) - G(x) = C$ pour tout $x$ de $I$.

On en déduit que les deux primitives de $f$ diffèrent d'une constante.
```

```admonish prop
$f$ est une fonction continue sur un intervalle $I$.

Si **$F$ est une primitive de $f$** alors pour $C\in\R$, la fonction **$x \mapsto F(x) + C$ est une primitive de $f$**
```

```admonish demo
$F$ est une primitive de $f$ et on pose $G(x) = F(x) + C$.

On a : $\ G'(x) = F'(x) + 0 = F'(x) = f(x)\ $ donc $G$ est une primitive de $f$.
```

```admonish ex
On a vu dans la méthode précédente que $F$ est une primitive de $f$ avec : $\ F(x) = \cfrac{x^{2}}{2}\ \ $ et $\ \ f(x) = x$.

Donc, la fonction $G$ définie par $G(x) = \cfrac{x^{2}}{2} + 5$ est également une primitive de $f$.

En effet : $\ G'(x) = \cfrac{2x}{2} + 0 = x = f(x)$
```

```admonish prop
Toute fonction _continue_ sur un intervalle admet des primitives sur cet intervalle.
```

```admonish rem
Bien que l'existence étant assurée, la forme explicite d'une primitive n'est pas toujours connue.

Par exemple, la fonction $x \mapsto e^{- x^{2}}$ ne possède pas de primitive sous forme explicite.
```

```admonish meth title="Méthode : Recherche d'une primitive particulière"
:bulb: Soit la fonction $f$ définie sur $\R^{*}$ par $f(x)=\cfrac{e^{2x}(2x - 1)}{x^{2}}$.

a. Démontrer que la fonction $F$ définie sur $\R^{*}$ par $F(x)=\cfrac{e^{2x}}{x}$ est une primitive de $f$.

b. Déterminer la primitive $G$ de la fonction $f$ qui s'annule en $x = 1$.

---

a. _$F$ primitve de $f$_

On a : $\ F'(x) = \cfrac{{2e}^{2x}x - e^{2x}}{x^{2}} =\cfrac{e^{2x}(2x - 1)}{x^{2}} = f(x)$

Donc $F'=f$ et donc la fonction $F$ est une primitive de $f$.

b. _$G$ primitve de $f$_

On cherche la primitive $G$ de la fonction $f$ qui s'annule en $x = 1$, soit : $G(1) = 0$.

Si $G$ est une primitive de $f$ alors : $G(x) = F(x) + C,$ où $C\in\R$.

Donc :

$$
\begin{array}{rrcl}
	     & G(1)                      & = & F(1)+C \\\\
	\iff & F(1)+C                    & = & 0      \\\\
	\iff & \cfrac{e^{2\times1}}{1}+C & = & 0      \\\\
	\iff & e^{2}+C                   & = & 0      \\\\
	\iff & C                         & = & -e^{2}
\end{array}
$$

La primitive de $f$ qui s'annule en $x = 1$ est $G$ telle que : $\ G(x) = F(x) - e^{2} = \cfrac{e^{2x}}{x} - e^{2}$

### Primitives des fonctions usuelles

$$
\begin{array}{|l|l|}\hline
	\rowcolor{lightblue}\rule[-3mm]{0mm}{9mm}\text{Fonctions}           & \text{Primitives}    \\\\ \hline
	\rule[-4mm]{0mm}{11mm}a\ \text{avec}\ a\in\R                        & ax                   \\\\ \hline
	\rule[-4mm]{0mm}{11mm}x^{n}\ \text{avec}\ n\in\Z-\lbrace-1,0\rbrace & \cfrac{x^{n+1}}{n+1} \\\\ \hline
	\rule[-4mm]{0mm}{11mm}\cfrac{1}{x^{2}}                              & -\cfrac{1}{x}        \\\\ \hline
	\rule[-4mm]{0mm}{11mm}\cfrac{1}{x}\ \text{avec}\ x>0                & \ln(x)               \\\\ \hline
	\rule[-4mm]{0mm}{11mm}\cfrac{1}{\sqrt{x}}                           & 2\sqrt{x}            \\\\ \hline
	\rule[-4mm]{0mm}{11mm}e^{x}                                         & e^{x}                \\\\ \hline
	\rule[-4mm]{0mm}{11mm}\cos(x)                                       & \sin(x)              \\\\ \hline
	\rule[-4mm]{0mm}{11mm}\sin(x)                                       & -\cos(x)             \\\\ \hline
\end{array}
$$
```

### Linéarité des primitives

```admonish prop
Si $F$ est une primitive de $f\ $ et $\ G$est une primitive de
$g$ alors :

- $\boxed{F + G}$ est une **primitive** de $\boxed{f+g}$
- $\boxed{kF}$ est une **primitive** de $\boxed{kf}$, avec $k\in\R$
```

```admonish demo
- $(F + G)' = F' + G' = f + g$
- $(kF)' = kF' = kf$
```

```admonish meth title="Méthode : Déterminer une primitive (1)"
Dans chaque cas, déterminer une primitive $F$ de la fonction $f$.

a. $f(x) = x^{3} - 2$

b. $f(x) = {3x}^{2} - \cfrac{3}{x^{2}}$

c. $f(x) = \cfrac{1}{x^{5}}$

d. $f(x) = \cfrac{3}{x}$ sur $\left\rbrack 0; + \infty \right\lbrack$

e. $f(x) = - \sin{(x)}$

f. $f(x) = \cfrac{2}{\sqrt{x}}$

---

a. On a : $\ F(x)=\cfrac{1}{4}x^{4}-2x$

b. $f(x)=3x^{2}-\cfrac{3}{x^2}=3x^2-3\times\cfrac{1}{x^2}$

Donc : $\ F(x)=x^{3}-3\times\left(-\cfrac{1}{x}\right)=x^3+\cfrac{3}{x}$

c. $f(x)=\cfrac{1}{x^{5}}=x^{-5}$

Donc : $\ F(x)=\cfrac{1}{-4}x^{-4}=\cfrac{-1}{4x^{4}}$

d. $f(x)=\cfrac{3}{x}=3\times\cfrac{1}{x}$

On a : $\ F(x)=3\ln{(x)}$

L'intervalle de recherche de la primitive est $\left\rbrack 0; + \infty \right\lbrack$, car $\ln(x)$ est définie pour $x>0$.

e. $f(x)=-\sin{(x)}$

Donc : $\ F(x)=-\left(-\cos(x)\right)=\cos(x)$

f. $f(x)=\cfrac{2}{\sqrt{x}}=2\times\cfrac{1}{\sqrt{x}}$

Donc : $\ F(x)=2\times2\sqrt{x}=4\sqrt{x}$
```

### Primitives de fonctions composées

```admonish prop
$u$ est une fonction dérivable sur un intervalle $I$.

$$
\begin{array}{|l|l|}\hline
	\rowcolor{lightblue}\rule[-3mm]{0mm}{9mm}\text{Fonctions}                   & \text{Primitives}    \\\\ \hline
	\rule[-4mm]{0mm}{11mm}u'u^n\ \text{avec}\ n\in\Z\setminus\lbrace-1,0\rbrace & \cfrac{u^{n+1}}{n+1} \\\\ \hline
	\rule[-4mm]{0mm}{10mm}\cfrac{u'}{\sqrt{u}}                                  & 2\sqrt{u}            \\\\ \hline
	\rule[-4mm]{0mm}{11mm}\cfrac{u'}{u}\ \text{avec}\ u>0                       & \ln(u)               \\\\ \hline
	\rule[-4mm]{0mm}{11mm}u'e^u                                                 & e^u                  \\\\ \hline
	\rule[-4mm]{0mm}{11mm}u'\cos(u)                                             & \sin(u)              \\\\ \hline
	\rule[-4mm]{0mm}{11mm}u'\sin(u)                                             & -\cos(u)             \\\\ \hline
\end{array}
$$
```

```admonish meth title="Méthode : Déterminer une primitive (2)"
Dans chaque cas, déterminer une primitive $F$ de la fonction $f$.

a. $f(x)=(2x-5)\left(x^{2}-5x+4\right)^{2}$

b. $f(x)=\cfrac{x}{\sqrt{x^{2}+1}}$

c. $f(x)=x^{2}e^{x^{3}}$

d. $f(x)=\cos(5x)-3\sin(3x-1)$

---

a. $f(x)=(2x-5)\left(x^{2}-5x+4\right)^{2}$ du type $u'u^{n}$, avec $n = 2$.

En effet : $u(x)=x^{2}-5x+4\rightarrow u'(x)=2x-5$

Une primitive de $u'u^{2}$ est de la forme $\cfrac{u^{3}}{3}$

Soit : $\ F(x)=\cfrac{1}{3}\left(x^2-5x+4\right)^{3}$

b. $f(x)=\cfrac{x}{\sqrt{x^{2}+1}}=\cfrac{1}{2}\times\cfrac{2x}{\sqrt{x^{2}+1}}$ du type $\cfrac{u'}{\sqrt{u}}$

En effet : $u(x)=x^{2}+1\rightarrow u'(x)=2x$

Une primitive de $\cfrac{u'}{\sqrt{u}}$ est de la forme $2\sqrt{u}$.

Soit : $F(x)=\cfrac{1}{2}\times 2\sqrt{x^{2}+1}=\sqrt{x^{2}+1}$

c. $f(x)=x^{2}e^{x^{3}}=\cfrac{1}{3}\times3x^{2}e^{x^{3}}$ du type $u'e^{u}$.

En effet : ${u(x)=x}^{3}\rightarrow u'(x)=3x^{2}$.

Une primitive de $u'e^{u}$ est de la forme $e^{u}$.

Soit : $F(x)=\cfrac{1}{3}\times e^{x^{3}}$

d. $f(x)=\cos(5x)-3\sin(3x-1)=\cfrac{1}{5}\times 5\cos(5x)-3\sin(3x-1)$

Donc $\ F(x) = \cfrac{1}{5} \times \sin(5x) + \cos(3x - 1)$
```

## Équations différentielles

### Définition d'une équation différentielle

```admonish def
Une **équation différentielle** est une équation
dont l'inconnue est une fonction et où interviennent des dérivées de
cette fonction.
```

```admonish ex
a. L'équation $f'(x) = 5$ est une équation différentielle.

L'inconnue est la fonction $f$. En considérant que $y$ est la fonction inconnue qui dépend de $x$, l'équation différentielle peut se noter : $\ y' = 5$

b. L'équation $y' = 2x^{2} - 3$ est également une équation différentielle.

L'inconnue est la fonction $y$ dont la dérivée est égale à $2x^{2} - 3$.
```

### Équation différentielle du type $y' = f$

```admonish def
Soit une fonction $f$ définie sur un intervalle $I$.

La fonction $g$ est une **solution** de l'équation diff. $\boxed{y'=f}$ si et seulement si $\boxed{g'(x)=f(x)}$.
```

```admonish prop
Dire que la fonction $F$ est une primitive de la fonction $f$, revient à dire que $F$ est une
solution de l'équation différentielle $y' = f$.

En effet, $F' = f$.
```

```admonish meth title="Méthode : Vérifier qu'une fonction est solution d'une équation différentielle"
:bulb: Prouver que la fonction $g$ définie sur $\left\rbrack 0; + \infty \right\lbrack$ par $g(x)=3x^{2}+\ln{(x)}$ est solution de l'équation différentielle $y'=6x+\cfrac{1}{x}$.

---

On a : $\ g'(x)=3\times 2x+\cfrac{1}{x}=6x+\cfrac{1}{x}$

Donc, $g$ est solution de l'équation différentielle : $y'=6x+\cfrac{1}{x}$
```

### Équations différentielles du type $y' = ay$

```admonish prop
Les solutions de l'équation différentielle $\boxed{y'=ay}$, avec $a$ un nombre réel, sont les fonctions de la forme $\boxed{x\mapsto Ce^{ax}}$, où $C$ est une constante réelle quelconque.
```

```admonish demo
Soit la fonction $f$ définie sur $\R$ par $f(x) = Ce^{ax}$, où $C$ est un réel.

Alors, $$f'(x)=C\times ae^{ax}=a\times Ce^{ax}=af(x)$$

Donc $f'(x) = af(x)\ \rightarrow f$ est donc solution de l'équation différentielle $y'=ay$.

Réciproquement, soit $f$ une solution de l'équation différentielle $y' = ay$.

Et soit $g$ la fonction définie sur $\R$ par $g(x) = e^{-ax} \times f(x)$.

La fonction $g$ est dérivable sur $\R$ et on a : $$g'(x) = -ae^{-ax} \times f(x) + e^{-ax} \times f'(x)$$

Comme $f$ est solution de l'équation différentielle $y' = ay$, on a : $\ f'(x) = af(x)$.

Ainsi : $$g'(x)=-e^{-ax}\times af(x)+e^{-ax}\times f'(x)=-e^{-ax}\times f'(x)+e^{-ax}\times f'(x)=0$$

La fonction $g$ est donc égale à une constante réelle $C$, soit : $\ e^{-ax}\times f(x)=C$.

Et donc : $f(x)=C\times\pa{\cfrac{1}{e^{-ax}}}=Ce^{ax}$.
```

```admonish meth title="Méthode : Résoudre une équation différentielle du type $y' = ay$"
On considère l'équation différentielle $3y'+5y=0$.

1. _Résolution de l'équation différentielle_

   a. Déterminer la forme générale des fonctions solutions de l'équation.

   b. Représenter à l'aide de la calculatrice ou d'un logiciel, quelques courbes des fonctions solutions.

2. Déterminer l'unique solution $f$ telle que $f(1)=2$.

---

1. _Résolution de l'équation différentielle_

a. On a : $\ 3y'+5y=0\ \iff\ 3y'=-5y\ \iff\ y'=\cfrac{-5}{3}y$

Les solutions sont les fonctions de la forme : $\boxed{x\mapsto Ce^{\tfrac{-5}{3}x}}$, $C\in\R$

b. Pour différentes valeurs de $C$, on obtient :

![](img/image3.png =650x center)

2. $f$ est solution de l'équation différentielle, donc de la forme : $\ f(x) = Ce^{\tfrac{-5}{3}x}$

Donc $\ f(1)=Ce^{\tfrac{-5}{3}\times 1}=Ce^{\tfrac{-5}{3}}$. Or, $f(1)=2$.

$$
	\begin{array}{rrcl}
		\     & f(1)                    & = & 2                            \\\\
		\iff & Ce^{\pa{\tfrac{-5}{3}}} & = & 2                            \\\\
		\iff & C                       & = & \cfrac{2}{e^{\pa{\tfrac{-5}{3}}}} \\\\
		\iff & C                       & = & 2e^{\pa{\tfrac{5}{3}}}
	\end{array}
$$

Et donc : $\ f(x) = 2e^{\pa{\tfrac{5}{3}}}\times e^{\pa{\tfrac{-5x}{3}}} = 2e^{\pa{\tfrac{5}{3}-\tfrac{5}{3}x}} = 2e^{\pa{\tfrac{5(1-x)}{3}}}$
```

```admonish prop
Si $f\ $ et $\ g$ sont deux solutions de l'équation différentielle $y'=ay$, avec $a\in\R$, alors :

- $\pa{f+g}$ est aussi solution de l'équation différentielle
- $\pa{kf}$, avec $k\in\R$, est également solution de l'équation différentielle
```

```admonish demo
- $(f + g)' = f' + g' = af + ag = a(f + g)$
- $(kf)' = kf' = k \times af = a(kf)$
```

### Équations différentielles du type $y'=ay+b$

```admonish prop
La fonction $\boxed{x \mapsto \cfrac{-b}{a}}$ est solution de l'équation différentielle $\boxed{y' = ay + b}$ ($a \neq 0$).

Cette solution est appelée **solution particulière constante**.
```

```admonish demo
On pose : $g(x)=\cfrac{-b}{a}$. Alors $g'(x) = 0.$

Or, $ag(x)+b=a\times\left(\cfrac{-b}{a}\right)+b=-b+b=0=g'(x)$.

Donc : $g'(x)=ag(x)+b\ \rightarrow\ g$ est donc solution de l'équation différentielle $y'=ay+b$
```

```admonish prop
Les solutions de l'équa. diff. $\ y' = ay + b\ $ avec $(a \neq 0)$ sont les fonctions de la forme :

$$\boxed{x\mapsto \underbrace{\quad Ce^{ax}\quad}\_{(1)}\underbrace{\quad-\cfrac{b}{a}\quad}\_{(2)}}\quad\text{où}\ C\in\R$$

- (1) : Solution de l'équation $y' = ay$
- (2) : Solutions particulière constante de l'équation $y' = ay + b$

```

```admonish rem
L'équation $y' = ay + b$ est appelée équation diff. linéaire du $1^{\text{er}}$ ordre à coefficients constants.
```

```admonish meth title="Méthode : Résoudre une équation différentielle du type $y' = ay + b$"
On considère l'équation différentielle $2y'-y = 3$.

a. Déterminer la forme générale des fonctions solutions de l'équation.

b. Déterminer l'unique solution $f$ telle que $f(0)=-1$.

---

a. $2y' - y = 3$

On a : $$2y'-y=3\quad\iff\quad 2y'=y+3\quad\iff\quad y'=\cfrac{1}{2}y+\cfrac{3}{2}\quad\iff\quad\begin{cases}a=\tfrac{1}{2}\\\\b=\tfrac{3}{2}\end{cases}$$

- Une solution particulière constante est la fonction : $\ x \mapsto -3$.

  En effet : $\cfrac{-b}{a}=\cfrac{-\tfrac{3}{2}}{\tfrac{1}{2}}=-3$.

- Les solutions de l'équation diff. $\ y'=\cfrac{1}{2}y\ $ sont de la forme : $\ x \mapsto Ce^{\pa{\tfrac{1}{2}x}}$, $C\in\R$.
- Les solutions de l'équation diff. $\ 2y'-y=3\ $ sont donc de la forme :

$$x\mapsto Ce^{\pa{\tfrac{1}{2}x}}-3\quad\text{avec}\quad C\in\R$$

b. $f$ est solution de l'équation différentielle, donc de la forme : $f(x)=Ce^{\pa{\tfrac{1}{2}x}}-3$

Donc :

$$
	\begin{array}{rrcl}
		     & f(0) & = & Ce^{\tfrac{1}{2}\times 0}-3=C-3\quad=-1 \\\\
		\iff & C-3  & = & -1                                \\\\
		\iff & C    & = & 2                                 \\\\
	\end{array}
$$

Et donc : $\boxed{\ f(x)=2e^{\pa{\tfrac{1}{2}x}}-3}$
```

### Équations différentielles du type $y'=ay+f$

```admonish prop
$f$ est une fonction définie sur un intervalle $I$.

Les solutions de l'équation différentielle $y' = ay + f$ ($a \neq 0)$ sont les fonctions de la forme :

$$\boxed{x \mapsto \underbrace{\quad Ce^{ax}\quad}\_{(1)} + \underbrace{\quad p(x)\quad}\_{(2)}\quad\text{où}\quad C\in\R}$$

- (1) : Solutions de l'équation $y' = ay$
- (2) : Solution particulière de l'équation $y' = ay + f$
```

```admonish meth title="Méthode : Résoudre une équation différentielle du type $y' = ay + f$"
On considère l'équation différentielle $y'-2y=x^{2}$.

a. Démontrer que la fonction $p$ définie sur $\R$ par $p(x)=\cfrac{-x^2}{2}-\cfrac{x}{2}-\cfrac{1}{4}$ est solution particulière de l'équation différentielle.

b. En déduire la forme générale de toutes les solutions de l'équation différentielle.

---

a. _Solution particulière_

On a : $\ p'(x)=\cfrac{-2x}{2}-\cfrac{1}{2}=-x-\cfrac{1}{2}$

Donc :

$$
	\begin{array}{rcl}
		\ p'(x)-2p(x) & = & \pa{-x-\cfrac{1}{2}}-2\times\left(\cfrac{-x^2}{2}-\cfrac{x}{2}-\cfrac{1}{4}\right)\\\\
		\             & = & - x - \cfrac{1}{2} + x^{2} + x + \cfrac{1}{2}\\\\
		\             & = & x^{2}
	\end{array}
$$

On a donc : $p'(x) - 2p(x) = x^{2}$

La fonction $p$ définie sur $\R$ par $p(x)=\cfrac{-x^2}{2}-\cfrac{1}{2}x-\cfrac{1}{4}$ est donc une solution particulière de l'équation différentielle $y'-2y=x^{2}$.

b. _Solution générale_

Les solutions de l'équation différentielle $y' = 2y$ sont de la forme $x \mapsto Ce^{2x}$, $C\in\R$.

On en déduit que les solutions de l'équation différentielle $y'-2y=x^{2}$ sont les fonctions de la forme :

$$\boxed{f(x)=Ce^{2x}-\cfrac{x^2}{2}-\cfrac{x}{2}-\cfrac{1}{4}}\quad\text{avec}\quad C\in\R$$
```
