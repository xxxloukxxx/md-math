# Limites de fonctions (1/2)

<!-- toc -->

## Limite d'une fonction à l'infini

### Limite infinie en $\infty$

```admonish def
On dit que la fonction $f$ admet pour **limite** ${+\infty}$ **en** $+\infty$, si $f(x)$ est aussi grand que l'on veut pourvu que $x$ soit suffisamment grand.

![](img/limite/image2.png =400x center)
```

```admonish rem
On a une définition analogue en $-\infty$.
```

```admonish ex
La fonction définie par $f(x) = x^2$ a pour limite $+\infty$ lorsque $x$ tend vers $+\infty$.

On a par exemple : $f(100) = 100^{2} = 10\ 000$

$$f(1\ 000) = {1\ 000}^{2} = 1\ 000\ 000$$

Les valeurs de la fonction deviennent aussi grandes que l'on veut dès que $x$ est suffisamment grand.

Si on prend un intervalle $\left\rbrack a; +\infty \right\lbrack$ quelconque, toutes les valeurs de la fonction appartiennent à cet intervalle dès que $x$ est suffisamment grand.
```

```admonish def
- On dit que la fonction $f$ admet pour limite $+\infty$ en $+\infty$ si tout intervalle $\left\rbrack a; +\infty \right\lbrack$, $a$ réel, contient toutes les valeurs de $f(x)$ dès que $x$ est suffisamment grand et on note :

$$\limite_{x \to +\infty}f(x) = +\infty$$

- On dit que la fonction $f$ admet pour limite $-\infty$ en $+\infty$ si tout intervalle $\left\rbrack -\infty;b \right\lbrack$, $b$ réel, contient toutes les valeurs de $f(x)$ dès que $x$ est suffisamment grand et on note :

$$\limite_{x \to +\infty}f(x) = -\infty$$
```

```admonish rem
- Une fonction qui tend vers $+\infty$ lorsque $x$ tend vers $+\infty$ n'est pas nécessairement croissante.

Par exemple :

![](img/limite/image3.png =550x center)

- Il existe des fonctions qui ne possèdent pas de limite infinie. C'est le cas des fonctions sinusoïdales.

![](img/limite/image4.png =550x center)
```

### Limite finie en $\infty$

```admonish def
On dit que la fonction $f$ admet pour **limite** ${L}$ **en** ${+\infty}$, si $f(x)$ est aussi proche de $L$ que l'on veut, pourvu que $x$ soit suffisamment grand et on note :

$$\limite_{x \to +\infty}{f(x) = L}$$
```

```admonish rem
On a une définition analogue en $-\infty$.
```

```admonish ex
La fonction définie par $\quad f(x) = 2 + \cfrac{1}{x}\quad$ a pour limite $2$ lorsque $x$ tend vers $+\infty$.

On a par exemple :

- $f(100) = 2 + \cfrac{1}{100} = 2,01$
- $f(10\ 000) = 2 + \cfrac{1}{10\ 000} = 2,000\ 1$

Les valeurs de la fonction se resserrent autour de $2$ dès que $x$ est suffisamment grand.

La courbe de la fonction "se rapproche" de la droite d'équation $y = 2$ sans jamais la toucher.

Si on prend un intervalle ouvert quelconque contenant $2$, toutes les valeurs de la fonction appartiennent à cet intervalle dès que $x$ est suffisamment grand.

![](img/limite/image5.png =650x center)
```

```admonish def
Si $\limite_{x \to +\infty}{f(x) = L}$ alors la droite d'équation $y=L$ est appelée **asymptote horizontale** de $\Cf$ en $+\infty$.

![](img/limite/image6.png =450x center)
```

```admonish def
On dit que la fonction $f$ admet pour limite $L$ en $+\infty$ si tout intervalle ouvert contenant $L$ contient toutes les valeurs de $f(x)$ dès que $x$ est suffisamment grand et on note :

$$\limite_{x \to +\infty}f(x) = L$$
```

```admonish rem
On a des définitions analogues en $-\infty$.
```

### Limites des fonctions de référence

```admonish prop
|                         |           $\lim_{x\to-\infty}$           |             $\lim_{x\to+\infty}$              |
| :---------------------: | :--------------------------------------: | :-------------------------------------------: |
|                         |                                          |                                               |
|          $x^2$          | $\limite_{x \to -\infty}x^{2} = +\infty$ |   $\limite_{x \to +\infty}x^{2} = +\infty$    |
|                         |                                          |                                               |
|          $x^3$          | $\limite_{x \to -\infty}x^{3} = -\infty$ |   $\limite_{x \to +\infty}x^{3} = +\infty$    |
|                         |                                          |                                               |
|  $x^n$ avec ($n$ pair)  | $\limite_{x \to -\infty}x^{n} = +\infty$ |   $\limite_{x \to +\infty}x^{n} = +\infty$    |
|                         |                                          |                                               |
| $x^n$ avec ($n$ impair) | $\limite_{x \to -\infty}x^{n} = -\infty$ |   $\limite_{x \to +\infty}x^{n} = +\infty$    |
|                         |                                          |                                               |
|       $\sqrt{x}$        |                                          | $\limite_{x \to +\infty}{\sqrt{x} = +\infty}$ |
|                         |                                          |                                               |
|     $\cfrac{1}{x}$      | $\limite_{x \to -\infty}\cfrac{1}{x}= 0$ |   $\limite_{x \to +\infty}\cfrac{1}{x}= 0$    |
|                         |                                          |                                               |
|          $e^x$          |    $\limite_{x \to -\infty}e^{x}= 0$     |    $\limite_{x \to +\infty}e^{x}= +\infty$    |
|                         |                                          |                                               |
```

## Limite d'une fonction en un réel A

### Définition

```admonish def
On dit que la fonction $f$ admet pour **limite** ${+\infty}$ **en** ${A}$, si $f(x)$ est aussi grand que l'on veut pourvu que $x$ soit suffisamment proche de $A$.

![](img/limite/image7.png =350x center)
```

```admonish ex
La fonction définie par $f(x) = \cfrac{1}{3 - x} + 1$ a pour limite $+\infty$ lorsque $x$ tend vers $3$.

On a, par exemple :

- $f(2,99) = \cfrac{1}{3 - 2,99} + 1 = 101$
- $f(2,999\ 9) = \cfrac{1}{3 - 2,999\ 9} + 1 = 10\ 001$

Les valeurs de la fonction deviennent aussi grandes que l'on veut dès que $x$ est suffisamment proche de $3$.

La courbe de la fonction "se rapproche" de la droite d'équation $x = 3$ sans jamais la toucher.

Si on prend un intervalle $\left\rbrack a; +\infty \right\lbrack$ quelconque, toutes les valeurs de la fonction appartiennent à cet intervalle dès que $x$ est suffisamment proche de $3$.
```

```admonish def
Si $\limite_{x \to A}{f(x) = \pm\infty}$ alors la droite d'équation $\quad x = A\quad$ est appelée **asymptote verticale** à la courbe de la fonction $f$.

![](img/limite/image8.png =450x center)
```

```admonish def
- On dit que la fonction $f$ admet pour limite $+\infty$ en $A$ si tout intervalle $\left\rbrack a; +\infty \right\lbrack$, $a$ réel, contient toutes les valeurs de $f(x)$ dès que $x$ est suffisamment proche de $A$ et on note :

$$\limite_{x \to A}{f(x) = +\infty}$$

- On dit que la fonction $f$ admet pour limite $-\infty$ en $A$ si tout intervalle $\left\rbrack -\infty;b \right\lbrack$, $b$ réel, contient toutes les valeurs de $f(x)$ dès que $x$ est suffisamment proche de $A$ et on note :

$$\limite_{x \to A}{f(x) = -\infty}$$
```

### Limite à gauche, limite à droite

```admonish ex
Considérons la fonction inverse définie sur $\R^{*}$ par $f(x) = \cfrac{1}{x}$

La fonction $f$ admet des limites différentes en $0$ selon que $x > 0$ ou $x \lt 0$.

- Si $x > 0$ : Lorsque $x$ tend vers 0, $f(x)$ tend vers $+\infty$ et on note :

$$\limite_{\begin{matrix}\scriptstyle x \to 0\\\\ \scriptstyle x > 0\end{matrix}}f(x) = +\infty\quad\text{ou}\quad\limite_{x \to 0^{+}}f(x) = +\infty$$

On parle de **limite à droite de $0$**

- Si $x \lt 0$ : Lorsque $x$ tend vers 0, $f(x)$ tend vers $-\infty$ et on note :

$$\limite_{\begin{matrix}\scriptstyle x \to 0 \\\\ \scriptstyle x \lt 0 \end{matrix}}f(x) = -\infty\quad\text{ou}\quad\limite_{x \to 0^{-}}{f(x) = -\infty}$$

On parle de **limite à gauche de $0$**.

![](img/limite/image9.png =350x center)
```

```admonish meth title="Méthode : Déterminer graphiquement des limites d'une fonction"
On donne ci-contre la représentation graphique de $f$.

![](img/limite/image11.png =750x center)

a. Lire graphiquement les limites en $-\infty,$ en $+\infty$, en $-4$ et en $5$.

b. Déterminer le tableau de variations de $f$.

---

a. **Limites de $f$**

- $\limite_{x \to -\infty}{f(x)} = 5\ $ et $\ \limite_{x \to +\infty}{f(x)} = 5$

    $\Cf$ admet une asymptote horizontale d'équation $y = 5$ en $-\infty$ et $+\infty$

- $\limite_{x \to (-4)}f(x) = +\infty$

    $\Cf$ admet une asymptote verticale d'équation $x =(-4)$

- $\limite_{x \to 5^{-}}{f(x) = +\infty}\ $ et $\ \limite_{x \to 5^{+}}{f(x) = -\infty}$

    $\Cf$ admet une asymptote verticale d'équation $x=5$

b. **Tableau de variations**

![](img/limite/1tabvar.png =700x center)
```

## Opérations sur les limites

### Utiliser les propriétés des opérations sur les limites

```admonish prop
$\alpha$ peut désigner $+\infty$, $-\infty$ ou un nombre réel.

#### Somme

$$
	\begin{array}{|r|c|c|c|c|c|c|}\hline
		\rule[-4mm]{0cm}{11mm}\limite_{x\to\alpha}{f(x) =}      & L    & L       & L       & +\infty & -\infty & +\infty       \\\\ \hline
		\rule[-4mm]{0cm}{11mm}\limite_{x\to\alpha}{g(x) =}      & L'   & +\infty & -\infty & +\infty & -\infty & -\infty       \\\\ \hline
		\rule[-4mm]{0cm}{11mm}\limite_{x\to\alpha}{f(x)+g(x) =} & L+L' & +\infty & -\infty & +\infty & -\infty & \text{F.I.}^* \\\\ \hline
	\end{array}
$$

$^*$Forme indéterminée : On ne peut pas prévoir la limite éventuelle.

#### Produit

$$
	\begin{array}{|r|c|c|c|c|}\hline
		\rule[-4mm]{0cm}{11mm}\limite_{x\to\alpha}{f(x) =}            & L          & L        & \infty   & 0           \\\\ \hline
		\rule[-4mm]{0cm}{11mm}\limite_{x\to\alpha}{g(x) =}            & L'         & \infty   & \infty   & \infty      \\\\ \hline
		\rule[-4mm]{0cm}{11mm}\limite_{x\to\alpha}{f(x)\times g(x) =} & L\times L' & \infty^* & \infty^* & \text{F.I.} \\\\ \hline
	\end{array}
$$

$^*$On applique la règle des signes pour déterminer si le produit est $+\infty$ ou $-\infty$.

#### Quotient

$$
	\begin{array}{|r|c|c|c|c|c|c|}\hline
		\rule[-4mm]{0cm}{11mm}\limite_{x\to\alpha}{f(x) =}               & L             & L\neq 0 & L      & \infty & \infty      & 0           \\\\ \hline
		\rule[-4mm]{0cm}{11mm}\limite_{x\to\alpha}{g(x) =}               & L'\neq 0      & 0       & \infty & L      & \infty      & 0           \\\\ \hline
		\rule[-4mm]{0cm}{11mm}\limite_{x\to\alpha}{\cfrac{f(x)}{g(x)} =} & \cfrac{L}{L'} & \infty  & 0      & \infty & \text{F.I.} & \text{F.I.} \\\\ \hline
	\end{array}
$$

$^*$On applique la règle des signes pour déterminer si le produit est $+\infty$ ou $-\infty$.
```

```admonish meth title="Méthode : Calculer la limite d'une fonction à l'aide des formules d'opération"
:bulb: Déterminer les limites suivantes :

a. $\limite_{x \to -\infty}{(x - 5)\left( 3 + x^{2} \right)}$

b. $\limite_{x \to 3^-}\pa{\cfrac{1 - 2x}{x - 3}}$

---

a. $\limite_{x \to -\infty}(x - 5)\pa{3 + x^{2}}$

> On a : $\begin{cases}
> 		\limite_{x \to -\infty}(x - 5) = -\infty                                                       \\\\
> 		\limite_{x \to -\infty}(x^2) = +\infty\quad\text{donc}\quad\limite_{x \to -\infty}3 + x^{2} = +\infty \\\\
> 	\end{cases}$
>
> Comme limite d'un produit : $\quad\boxed{\limite_{x \to -\infty}\pa{x - 5}\pa{3 + x^{2}} = -\infty}$

b. $\limite_{x \to 3^{-}}\pa{\cfrac{1 - 2x}{x - 3}}$

> On a : $\begin{cases}
> 		\limite_{x \to 3^{-}}\pa{1 - 2x} = 1 - 2 \times 3 = -5 \\\\
> 		\limite_{x \to 3^{-}}\pa{x - 3} = 0^{-}                \\\\
> 	\end{cases}$
>
> Une limite de la forme $\pa{\cfrac{5}{0}}$ est égale à "$\infty$".
>
> Donc, d'après la règle des signes, une limite de la forme $\pa{\cfrac{- 5}{0^-}}$ est égale à "+$\infty$".
>
> D'où, comme limite d'un quotient : $\quad\boxed{\limite_{x \to 3^{-}}\cfrac{1 - 2x}{x - 3} = +\infty}$
```

### Cas des formes indéterminée

```admonish rem
Comme pour les suites, on rappelle que :

Les quatre **formes indéterminées** sont, par abus d'écriture :

$$\boxed{\infty - \infty}\qquad\boxed{0 \times \infty}\qquad\boxed{\cfrac{\infty}{\infty}}\qquad\boxed{\cfrac{0}{0}}$$
```

```admonish meth title="Méthode : Lever une forme indéterminée à l'aide de factorisations (1)"
:bulb: Calculer $\quad\limite_{x \to +\infty}{- 3x^{3} + 2x^{2} - 6x + 1}$

---

> On a : $\begin{cases}
> 		\limite_{x \to +\infty}{- 3x^{3} = -\infty} \\\\
> 		\limite_{x \to +\infty}{2x^{2} = +\infty.}  \\\\
> 	\end{cases}\quad$ On reconnait une forme indéterminée du type $\boxed{\infty -\infty}$
>
> - Levons l'indétermination en factorisant par le monôme de plus haut degré :
>
> $$-3x^{3} + 2x^{2} - 6x + 1 = x^{3}\left( - 3 + \cfrac{2}{x} - \cfrac{6}{x^{2}} + \cfrac{1}{x^{3}} \right)$$
>
> On a $\quad\limite_{x \to +\infty}\pa{\cfrac{2}{x}}=\ \limite_{x \to +\infty}\pa{\cfrac{6}{x^2}}=\ \limite_{x \to +\infty}\pa{\cfrac{1}{x^3}}=\ 0$
>
> Donc, par limite d'une somme : $\quad\limite_{x \to +\infty}-3 + \cfrac{2}{x} - \cfrac{6}{x^{2}} + \cfrac{1}{x^{3}} = -3$
>
> On a : $\begin{cases}
> 		\limite_{x \to +\infty}-3 + \cfrac{2}{x} - \cfrac{6}{x^{2}} + \cfrac{1}{x^{3}} = - 3 \\\\
> 		\limite_{x \to +\infty}x^{3} = +\infty                                             \\\\
> 	\end{cases}$
>
> Donc, par limite d'un produit : $\limite_{x \to +\infty}{x^{3}\left( - 3 + \cfrac{2}{x} - \cfrac{6}{x^{2}} + \cfrac{1}{x^{3}} \right) = -\infty}$
>
> Soit : $\quad\boxed{\limite_{x \to +\infty}{- 3x^{3} + 2x^{2} - 6x + 1} = -\infty}$
```

```admonish meth title="Méthode : Lever une forme indéterminée à l'aide de factorisations (2)"
:bulb: Calculer :

a. $\limite_{x \to +\infty}\cfrac{2x^{2} - 5x + 1}{6x^{2} - 5}$

b. $\limite_{x \to -\infty}\cfrac{3x^{2} + 2}{4x - 1}$

---

a. $\limite_{x \to +\infty}\cfrac{2x^{2} - 5x + 1}{6x^{2} - 5}$

> En appliquant la méthode précédente pour le numérateur et le dénominateur cela conduirait à une forme indéterminée du type $\cfrac{\infty}{\infty}$.
>
> - Levons l'indétermination en factorisant par les monômes de plus haut degré :
>
> $$\cfrac{2x^{2} - 5x + 1}{6x^{2} - 5} = \cfrac{x^{2}}{x^{2}} \times \cfrac{2 - \cfrac{5}{x} + \cfrac{1}{x^{2}}}{6 - \cfrac{5}{x^{2}}}{=}\cfrac{2 - \cfrac{5}{x} + \cfrac{1}{x^{2}}}{6 - \cfrac{5}{x^{2}}}$$
>
> On a : $\quad\limite_{x \to +\infty}\pa{\cfrac{5}{x}}=\ \limite_{x \to +\infty}\pa{\cfrac{1}{x^2}} =\ \limite_{x \to +\infty}\pa{\cfrac{5}{x^2}} = 0$
>
> Donc, comme limite de sommes : $\quad\limite_{x \to +\infty}{2 - \cfrac{5}{x} + \cfrac{1}{x^{2}} =}2\quad\text{et}\quad\limite_{x \to +\infty}{6 - \cfrac{5}{x^{2}} =}6$
>
> Donc, comme limite d'un quotient : $\quad\limite_{x \to +\infty}\cfrac{2 - \cfrac{5}{x} + \cfrac{1}{x^{2}}}{6 - \cfrac{5}{x^{2}}}{=}\cfrac{2}{6} = \cfrac{1}{3}$
>
> Soit : $\quad\boxed{\limite_{x \to +\infty}\cfrac{2x^{2} - 5x + 1}{6x^{2} - 5} =\cfrac{1}{3}}$

b. $\limite_{x \to -\infty}\cfrac{3x^{2} + 2}{4x - 1}$

> Il s'agit d'une forme indéterminée du type $\cfrac{\infty}{\infty}$
>
> - Levons l'indétermination en factorisant par les monômes de plus haut degré :
>
> $$\cfrac{3x^{2} + 2}{4x - 1} = \cfrac{x^{2}}{x} \times \cfrac{3 + \cfrac{2}{x^{2}}}{4 - \cfrac{1}{x}}{=}x \times \cfrac{3 + \cfrac{2}{x^{2}}}{4 - \cfrac{1}{x}}$$
>
> On a : $\limite_{x \to -\infty}\pa{\cfrac{1}{x}}=\ \limite_{x \to -\infty}\pa{\cfrac{2}{x^{2}}}=\ 0$
>
> Donc, comme limite de sommes : $\limite_{x \to -\infty}3 + \cfrac{2}{x^2}=3\quad\text{et}\quad\limite_{x \to -\infty}4 - \cfrac{1}{x} =4$
>
> Donc, comme limite d'un quotient : $\quad\limite_{x \to -\infty}\cfrac{3 + \cfrac{2}{x^{2}}}{4 - \cfrac{1}{x}}{=}\cfrac{3}{4}$
>
> De plus, $\quad\limite_{x \to -\infty}(x) = -\infty$
>
> Donc, comme limite d'un produit : $\quad\limite_{x \to -\infty}x \times \cfrac{3 + \cfrac{2}{x^{2}}}{4 - \cfrac{1}{x}}{= -\infty}$
>
> Soit : $\quad\boxed{\limite_{x \to -\infty}\cfrac{3x^{2} + 2}{4x - 1} = -\infty}$
```

```admonish meth title="Méthode : Lever une forme indéterminée à l'aide de l'expression conjuguée"
:bulb: Calculer :

a. $\limite_{x \to +\infty}{\sqrt{x + 1} - \sqrt{x}}$

b. $\limite_{x \to 5}\cfrac{\sqrt{x - 1} - 2}{x - 5}$

---

a. $\limite_{x \to +\infty}{\sqrt{x + 1} - \sqrt{x}}$

> On a : $\begin{cases}
> 		\limite_{x \to +\infty}{\sqrt{x + 1} = +\infty} \\\\
> 		\limite_{x \to +\infty}{\sqrt{x} = +\infty}
> 	\end{cases}\quad$ Il s'agit d'une forme indéterminée du type $\infty -\infty$
>
> - Levons l'indétermination à l'aide de l'expression conjuguée :
>
> $$
> 	\begin{array}{rcl}
> 		\sqrt{x + 1} - \sqrt{x} & = & \cfrac{\left( \sqrt{x + 1} - \sqrt{x} \right)\left( \sqrt{x + 1} + \sqrt{x} \right)}{\sqrt{x + 1} + \sqrt{x}} \\\\
> 		\                        & = & \cfrac{\left( \sqrt{x + 1} \right)^{2} - \left( \sqrt{x} \right)^{2}}{\sqrt{x + 1} + \sqrt{x}}                \\\\
> 		\                        & = & \cfrac{x + 1 - x}{\sqrt{x + 1} + \sqrt{x}}                                                                    \\\\
> 		\                        & = & \cfrac{1}{\sqrt{x + 1} + \sqrt{x}}
> 	\end{array}
> $$
>
> Comme limite d'une somme : $\quad\limite_{x \to +\infty}{\sqrt{x + 1} + \sqrt{x} = +\infty}$
>
> Et donc, comme limite d'un quotient : $\quad\limite_{x \to +\infty}\cfrac{1}{\sqrt{x + 1} + \sqrt{x}} = 0$.
>
> Soit : $\quad\boxed{\limite_{x \to +\infty}{\sqrt{x + 1} - \sqrt{x} = 0}}$

b. $\limite_{x \to 5}\cfrac{\sqrt{x - 1} - 2}{x - 5}$

> On a : $\begin{cases}
> 		\limite_{x \to 5}\pa{\sqrt{x - 1} - 2} = \sqrt{5 - 1} - 2 = 0 \\\\
> 		\limite_{x \to 5}\pa{x - 5} = 5 - 5 = 0
> 	\end{cases}\ $ Il s'agit d'une forme indéterminée $\cfrac{0}{0}$.
>
> - Levons l'indétermination à l'aide de l'expression conjuguée :
>
> $$
> 	\begin{array}{rcl}
> 		\cfrac{\sqrt{x - 1} - 2}{x - 5} & = & \cfrac{\left( \sqrt{x - 1} - 2 \right)\left( \sqrt{x - 1} + 2 \right)}{(x - 5)\left( \sqrt{x - 1} + 2 \right)} \\\\
> 		\                                & = & \cfrac{x - 1 - 4}{(x - 5)\left( \sqrt{x - 1} + 2 \right)}                                                      \\\\
> 		\                                & = & \cfrac{x - 5}{(x - 5)\left( \sqrt{x - 1} + 2 \right)}\qquad = \cfrac{1}{\sqrt{x - 1} + 2}
> 	\end{array}
> $$
>
> On a : $\quad\limite_{x \to 5}{\sqrt{x - 1} + 2 = \sqrt{5 - 1} + 2 = 4}$
>
> Donc, comme limite d'un quotient, on a : $\quad\limite_{x \to 5}\cfrac{1}{\sqrt{x - 1} + 2} = \cfrac{1}{4}$
>
> Soit : $\quad\boxed{\limite_{x \to 5}\cfrac{\sqrt{x - 1} - 2}{x - 5} =\cfrac{1}{4}}$
```

```admonish meth title="Méthode : Déterminer une asymptote"
Soit $f$ la fonction définie sur $\R \smallsetminus\left\\{ 1 \right\\}$ par : $\quad f(x) =\cfrac{- 2}{1 - x}$

:bulb: Démontrer que $\Cf$ admet des asymptotes dont on précisera la nature et les équations.

---

> - On a : $\quad\limite_{x \to +\infty}\pa{1 - x} = -\infty$
>
>     Donc comme limite d'un quotient, on a : $\quad\limite_{x \to +\infty}\pa{\cfrac{- 2}{1 - x}}= 0$ et $\limite_{x \to -\infty}\pa{\cfrac{- 2}{1 - x}}= 0$
>
>     $\Rarr$ La droite d'équation $y = 0$ est **asymptote horizontale** à $\Cf$ en $+\infty$ et en $-\infty$.

> - On a : $\limite_{x \to 1^{-}}\pa{1 - x} = 0^{+}$
>
>     Donc comme limite d'un quotient, on a : $\limite_{x \to 1^{-}}\pa{\cfrac{-2}{1 - x}} = -\infty$
>
>     Et : $\limite_{x \to 1^{+}}\pa{1 - x} = 0^{-}$
>
>     Donc comme limite d'un quotient, on a : $\limite_{x \to 1^{+}}\pa{\cfrac{- 2}{1 - x}} = +\infty$
>
>     $\Rarr$ La droite d'équation $x = 1$ est **asymptote verticale** à $\Cf$.

![](img/limite/image16.png =600x center)
```
