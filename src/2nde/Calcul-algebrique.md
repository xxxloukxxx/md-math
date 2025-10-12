# Calcul numérique et algébrique

<!-- toc -->

## Somme de termes et produit de facteurs

```admonish ex title="Exemple : Somme de termes"
- $x-3$
- $(x+4)-(6-x)$
- $1+(x+1)(x-1)$
- $x^2+2x+10$

La dernière opération est une somme (ou une différence)
```

```admonish ex title="Exemple : Produit de facteurs"
- $9\times\cfrac{4x-1}{1-x}$
- $(x+4)(6-x)$
- $(x-1)^2$
- $3x(5-x)$

La dernière opération est un produit (ou un quotient)
```

### Valeurs interdites

```admonish def
Ce sont les valeurs de $x$ pour lesquelles il n'est pas possible de calculer l'expression algébrique.
```

```admonish ex
Soit $f(x)=\cfrac{1-x}{x-4}$.

Si $x=4$ alors $(x-4)=0$ et il n'est pas possible de calculer $f(4)$ (division par zéro).

Pour $f(x)$, $x$ est un nombre réel différent de $4$.
```

```admonish ex
Soit $f(x)=\sqrt{x}$.

Si $x<0$ alors $\sqrt{x}$ n'est pas défini et il n'est pas possible de calculer $f(x)$

Pour $f(x)$, $x$ est un nombre réel positif.
```

## Développer / Factoriser

### Distributivité et factorisation

```admonish def
- **Développer** : c'est transformer un produit en somme
- **Factoriser** : c'est transformer une somme en produit
```

```admonish ex
- **Développer** : $3\pa{\heartsuit+\spadesuit}=3\heartsuit+3\spadesuit$
- **Factoriser** : $3\heartsuit+3\spadesuit=3\pa{\heartsuit+\spadesuit}$
```

```admonish meth title="Méthode : Développer une expression algébrique"
- $\colorbox{lightblue}2(3-x)=\colorbox{lightblue}2\times 3 + \colorbox{lightblue}2\times (-x)=6-2x$
- $\colorbox{lightgreen}{4x}(3x-y)=\colorbox{lightgreen}{4x}\times 3x + \colorbox{lightgreen}{4x}\times (-y)=12x^2-4xy$
- $\colorbox{pink}{-}(x-y)=\colorbox{pink}{(-1)}\times x + \colorbox{pink}{(-1)}\times (-y)=-x+y=y-x$
- $\colorbox{yellow}{x}(3-a+3b)=\colorbox{yellow}{x}\times 3 + \colorbox{yellow}{x}\times (-a)+\colorbox{yellow}{x}\times 3b=3x-ax+3xb$
```

```admonish prop
$$(\colorbox{lightblue}{a}+\colorbox{lightgreen}{b})(\colorbox{pink}{c}+\colorbox{yellow}{d})=\colorbox{lightblue}{a}\colorbox{pink}{c}+\colorbox{lightblue}{a}\colorbox{yellow}{d}+\colorbox{lightgreen}{b}\colorbox{pink}{c}+\colorbox{lightgreen}{b}\colorbox{yellow}{d}$$
```

```admonish meth title="Méthode : Utiliser la double distributivité"
$$
\begin{aligned}
(x+3)(y-1)&=(xy)+(-1x)+(3y)+\Big(3\times (-1)\Big)\\\\
         ~&=xy-x+3y-3\\\\
\end{aligned}
$$
```

```admonish ex
$\begin{aligned}
A=(x+5)(x-2)&=(x\times x)+(-2\times x)+(5\times x)+\Big(5\times (-2)\Big)\\\\
~&=x^2-2x+5x-10\\\\
~&=x^2+3x-10\\\\
\end{aligned}$

$\begin{aligned}
B=(3-x)(3+x)&=(3\times 3)+(3\times x)+(-x\times 3)+(-x\times x)\\\\
~&=9+3x-3x+x^2\\\\
~&=x^2+9\\\\
\end{aligned}$

$\begin{aligned}
C=(4x+5)(x-1)-2(x+1)&=(4x\times x)+(4x\times -1)+(5\times x)+(5\times -1)...\\\\&\quad...+(-2\times x)+(-2\times 1)\\\\
~&=4x^2-4x+5x-5-2x-2\\\\
~&=4x^2-x-7
\end{aligned}$
```

```admonish meth title="Méthode : Factoriser une expression"
Pour factoriser une expression, il faut faire apparaître un **facteur commun**.

$$
\begin{aligned}
4x-2y&=\boxed{2}\times 2x-\boxed{2}\times y\\\\
         ~&=\boxed{2}\times(2x-y)\\\\
         ~&=2(2x-y)\\\\
\end{aligned}
$$
```

```admonish ex
$$
\begin{aligned}
6x^2-5x&=\boxed{x}\times 6x-\boxed{x}\times 5\\\\
         ~&=\boxed{x}\times(6x-5)\\\\
         ~&=x(6x-5)\\\\
\end{aligned}
$$

$$
\begin{aligned}
110a+11&=\boxed{11}\times 10a+\boxed{11}\times 1\\\\
         ~&=\boxed{11}\times(10a+1)\\\\
         ~&=11(10a+1)\\\\
\end{aligned}
$$
```

```admonish ex
$$
\begin{aligned}
3(2+3x)-(5+2x)(2+3x)&=\boxed{(2+3x)}\times 3-\boxed{(2+3x)}\times (5+2x)\\\\
         ~&=\boxed{(2+3x)}\times\Big(3-(5+2x)\Big)\\\\
         ~&=(2+3x)\times\Big(3-5-2x)\Big)\\\\
         ~&=(2+3x)(-2-2x)\\\\
         ~&=-(2+3x)(2+2x)\\\\
\end{aligned}
$$

```

```admonish ex
$$
\begin{aligned}
(2-5x)^2-(2-5x)(1+x)&=\boxed{(2-5x)}\times (2-5x)-\boxed{(2-5x)}\times (1+x)\\\\
         ~&=\boxed{(2-5x)}\times\Big((2-5x)-(1+x)\Big)\\\\
         ~&=(2-5x)(2-5x-1-x)\\\\
         ~&=(2-5x)(1-6x)\\\\
\end{aligned}
$$
```

```admonish rem
Lorsque le facteur commun n'est pas immédiatement apparent, il est parfois possible de modifier l'écriture d'un des termes de l'expression pour faire apparaître un facteur commun :
$$
\begin{aligned}
4(1-x)^2-3x(x-1)&=4(1-x)(1-x)\colorbox{#ddd}{+}3x(\colorbox{#ddd}{1-x})\\\\
         ~&=\boxed{(1-x)}\times 4(1-x)+\boxed{(1-x)}\times (3x)\\\\
         ~&=\boxed{(1-x)}\Big( 4(1-x)+ (3x)\Big)\\\\
         ~&=(1-x)(4-4x+ 3x)\\\\
         ~&=(1-x)(4-x)\\\\
\end{aligned}
$$
```

## Identités remarquables

### Identités remarquables

```admonish prop
Pour tout $a$ et $b$, on a :

$$(a+b)^2=a^2+2ab+b^2$$
$$(a-b)^2=a^2-2ab+b^2$$
$$(a+b)(a-b)=a^2-b^2$$

![](img/calcul/02.png =400x center)
```

```admonish ex
$$
\begin{aligned}
23^2=(20+3)^2&=20^2+2\times 20\times 3+3^2 \\\\
            ~&=400+120+9=529
\end{aligned}
$$

![](img/calcul/01.png =400x center)
```

```admonish meth title="Méthode : Utiliser les identités remarquables pour développer"
$\begin{aligned}A=(x-5)^2&=x^2-2\times x\times 5+5^2\\\\&=x^2-10x+25\end{aligned}$

---

$\begin{aligned}B=\left(6+\cfrac{1}{2}x\right)^2&=6^2+2\times 6\times \cfrac{1}{2}x+\left(\cfrac{1}{2}x\right)^2\\\\&=36+6x+\cfrac{1}{4}x^2\end{aligned}$

---

$\begin{aligned}C=(2x-1)(2x+1)&=(2x)^2-1^2\\\\&=4x^2-1\end{aligned}$

---

$\begin{aligned}D=-2(1-x)^2&=-2(1^2-2x+x^2)\\\\&=-2+4x-2x^2\end{aligned}$

---

$\begin{aligned}E=2(x+3)-(2x+3)(2x-3)&=2x+6-\left((2x)^2-3^2\right)\\\\&=2x+6-4x^2+9\\\\&=-4x^2+2x+15\end{aligned}$
```

```admonish meth title="Méthode : Utiliser les identités remarquables pour factoriser"
Il faut faire apparaître les termes $a^2$, $b^2$ et $2ab$.

$\begin{aligned}
x^2-4x+4&=\colorbox{pink}x^2-2\times \colorbox{pink}x\times \colorbox{lightblue}2+\colorbox{lightblue}2^2\\\\
~&=\colorbox{pink}a^2-2\times \colorbox{pink}a\times \colorbox{lightblue}b+\colorbox{lightblue}b^2\\\\
~&=(\colorbox{pink}a-\colorbox{lightblue}b)^2\\\\
~&=(x-2)^2\\\\
\end{aligned}$
```

```admonish ex
$\begin{aligned}
A = 25+x^2+10x &=\textcolor{red}{x}^2+2\times \textcolor{red}{x}\times \textcolor{blue}{5}+\textcolor{blue}{5}^2\\\\
~&=\textcolor{red}{a}^2+2\times \textcolor{red}{a}\times \textcolor{blue}{b}+\textcolor{blue}{b}^2\\\\
~&=(a+b)^2\\\\
~&=(x+5)^2\\\\
\end{aligned}$

---

$\begin{aligned}
		B = 1-36x^2 & =1^2-(6x)^2   \\\\
		~           & =a^2-b^2      \\\\
		~           & =(a+b)(a-b)   \\\\
		~           & =(1-6x)(1+6x) \\\\
	\end{aligned}$

---

$\begin{aligned}
		C = (2-x)^2-64 & =(2-x)^2-8^2         \\\\
		~              & =a^2-b^2             \\\\
		~              & =(a+b)(a-b)          \\\\
		~              & =((2-x)+8)((2-x)-85) \\\\
		~              & =(10-x)(-6-x)        \\\\
		~              & =-(10-x)(6+x)        \\\\
		~              & =(x+10)(x+6)         \\\\
	\end{aligned}$
```

## Somme de fractions

### Réduire au même dénominateur

```admonish def
Réduire au même dénominateur c'est transformer une **somme** (ou une différence) de
deux fractions en une seule fraction.
```

```admonish prop
Pour tout nombre $a$, $b$, $c$ et $d$, réels on a :
$$\cfrac{a}{b}+\cfrac{c}{d}=\cfrac{ad+bc}{bd}$$
```

```admonish rem
Dénominateur commun = Produit des dénominateurs (Solution non optimale)
```

```admonish demo
$$\begin{alignedat}{5}
		\cfrac{a}{b}+\cfrac{c}{d} & =\left(\cfrac{a}{b}\times\boxed{\cfrac{d}{d}}\right) & + & \left(\cfrac{c}{d}\times\boxed{\cfrac{b}{b}}\right)                      \\\\
		~                         & =\cfrac{ad}{bd}                                      & + & \cfrac{bc}{bd}                                      & =\cfrac{ad+bc}{bd}
	\end{alignedat}$$
```

```admonish ex
$\begin{alignedat}{5}
		\cfrac{2}{5}+\cfrac{1}{3} & =\left(\cfrac{2}{5}\times\boxed{\cfrac{3}{3}}\right) & + & \left(\cfrac{1}{3}\times\boxed{\cfrac{5}{5}}\right)                   \\\\
		~                         & =\left(\cfrac{6}{15}\right)                          & + & \left(\cfrac{5}{15}\right)                          & =\cfrac{11}{15}
	\end{alignedat}$

---

$\begin{alignedat}{5}
		A=\left(\cfrac{2}{x}\right)-\left(\cfrac{x+1}{2}\right) & =\left(\cfrac{2}{x}\times\boxed{\cfrac{2}{2}}\right) & - & \left(\cfrac{x+1}{2}\times\boxed{\cfrac{x}{x}}\right)                         \\\\
		~                                                       & =\left(\cfrac{4}{2x}\right)                          & - & \left(\cfrac{(x+1)x}{2x}\right)                                               \\\\
		~                                                       & =\left(\cfrac{4}{2x}\right)                          & - & \left(\cfrac{x^2+x}{2x}\right)                        & =\cfrac{-x^2-x+4}{2x}
	\end{alignedat}$

---

$\begin{alignedat}{5}
		B=2-\left(\cfrac{5x}{x-2}\right) & =\left(\cfrac{2}{1}\times\boxed{\cfrac{x-2}{x-2}}\right) & - & \left(\cfrac{5x}{x-2}\times\boxed{\cfrac{1}{1}}\right)                      \\\\
		~                                & =\left(\cfrac{2(x-2)}{x-2}\right)                        & - & \left(\cfrac{5x}{x-2}\right)                                                \\\\
		~                                & =\cfrac{2x-4-5x}{x-2}                                    & ~ & =\cfrac{-3x-4}{x-2}                                    & =\cfrac{3x+4}{2-x}
	\end{alignedat}$

---

$\begin{alignedat}{5}
		C=\left(\cfrac{3x}{1-x}\right)+\left(\cfrac{5}{2x-3}\right) & =\left(\cfrac{3x\color{blue}(2x-3)}{(1-x)\color{blue}(2x-3)}\right) & + & \left(\cfrac{5\color{red}(1-x)}{(2x-3)\color{red}(1-x)}\right) \\\\
		~                                                           & =\cfrac{6x^2-9x}{(1-x)(2x-3)}                                       & + & \cfrac{5-5x}{(1-x)(2x-3)}                                      \\\\
		~                                                           & =\cfrac{6x^2-14x+5}{(1-x)(2x-3)}
	\end{alignedat}$
```
