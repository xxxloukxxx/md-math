# Limites de fonctions (1/2)
classe: Tspé
toc: true
---

# Limite d'une fonction à l'infini

## Limite infinie en $\infty$

\bw{r}{6cm}\cimg{6cm}{img/image2.png}\ew

\definition

On dit que la fonction $f$ admet pour **limite** ${+\infty}$ **en** $+\infty$,

si $f(x)$ est aussi grand que l'on veut pourvu que $x$ soit suffisamment grand.

\rem

On a une définition analogue en $-\infty$.

\exemple

La fonction définie par $f(x) = x^2$ a pour limite $+\infty$ lorsque $x$ tend vers $+\infty$.

On a par exemple : $f(100) = 100^{2} = 10~000$

$$f(1~000) = {1~000}^{2} = 1~000~000$$

Les valeurs de la fonction deviennent aussi grandes que l'on veut dès que $x$ est suffisamment grand.

\ms

Si on prend un intervalle $\left\rbrack a; +\infty \right\lbrack$ quelconque, toutes les valeurs de la fonction appartiennent à cet intervalle dès que $x$ est suffisamment grand.

\definition

- On dit que la fonction $f$ admet pour limite $+\infty$ en $+\infty$ si tout intervalle $\left\rbrack a; +\infty \right\lbrack$, $a$ réel, contient toutes les valeurs de $f(x)$ dès que $x$ est suffisamment grand et on note :

$$\lim\limits_{x \to +\infty}f(x) = +\infty$$

- On dit que la fonction $f$ admet pour limite $-\infty$ en $+\infty$ si tout intervalle $\left\rbrack -\infty;b \right\lbrack$, $b$ réel, contient toutes les valeurs de $f(x)$ dès que $x$ est suffisamment grand et on note :

$$\lim\limits_{x \to +\infty}f(x) = -\infty$$

\newpage

\rem

- Une fonction qui tend vers $+\infty$ lorsque $x$ tend vers $+\infty$ n'est pas nécessairement croissante.

Par exemple :

\cimg{7cm}{img/image3.png}

\ms

- Il existe des fonctions qui ne possèdent pas de limite infinie. C'est le cas des fonctions sinusoïdales.

\cimg{7cm}{img/image4.png}

## Limite finie en $\infty$

\bw{r}{9.5cm}\cimg{9.5cm}{img/image5.png}\ew

\definition

On dit que la fonction $f$ admet pour **limite** ${L}$ **en** ${+\infty}$, si $f(x)$ est aussi proche de $L$ que l'on veut, pourvu que $x$ soit suffisamment grand et on note :

$$\lim\limits_{x \to +\infty}{f(x) = L}$$

\rem On a une définition analogue en $-\infty$.

\ms

\exemple

La fonction définie par $\quad f(x) = 2 + \dfrac{1}{x}\quad$ a pour limite $2$ lorsque $x$ tend vers $+\infty$.

On a par exemple :

- $f(100) = 2 + \frac{1}{100} = 2,01$
- $f(10~000) = 2 + \frac{1}{10~000} = 2,000~1$

\ms

Les valeurs de la fonction se resserrent autour de $2$ dès que $x$ est suffisamment grand.

La courbe de la fonction "se rapproche" de la droite d'équation $y = 2$ sans jamais la toucher.

Si on prend un intervalle ouvert quelconque contenant $2$, toutes les valeurs de la fonction appartiennent à cet intervalle dès que $x$ est suffisamment grand.

\ms

\bw{r}{8cm}\vspace{-0.5cm}\cimg{8cm}{img/image6.png}\vspace{-4cm}\ew

\definition

Si $\lim\limits_{x \to +\infty}{f(x) = L}$ alors la droite d'équation $y=L$ est appelée **asymptote horizontale** de $\Cf$ en $+\infty$.

\newpage

\definition

On dit que la fonction $f$ admet pour limite $L$ en $+\infty$ si tout intervalle ouvert contenant $L$ contient toutes les valeurs de $f(x)$ dès que $x$ est suffisamment grand et on note :

$$\lim\limits_{x \to +\infty}f(x) = L$$

\rem On a des définitions analogues en $-\infty$.

## Limites des fonctions de référence

\prop

|      $~$       |             $\lim_{x\to-\infty}$             |               $\lim_{x\to+\infty}$                |
| :------------: | :------------------------------------------: | :-----------------------------------------------: |
|                |                                              |                                                   |
|     $x^2$      | $\lim\limits_{x \to -\infty}x^{2} = +\infty$ |   $\lim\limits_{x \to +\infty}x^{2} = +\infty$    |
|                |                                              |                                                   |
|     $x^3$      | $\lim\limits_{x \to -\infty}x^{3} = -\infty$ |   $\lim\limits_{x \to +\infty}x^{3} = +\infty$    |
|                |                                              |                                                   |
|     $x^n$      | $\lim\limits_{x \to -\infty}x^{n} = +\infty$ |   $\lim\limits_{x \to +\infty}x^{n} = +\infty$    |
|   ($n$ pair)   |                                              |                                                   |
|                |                                              |                                                   |
|     $x^n$      | $\lim\limits_{x \to -\infty}x^{n} = -\infty$ |   $\lim\limits_{x \to +\infty}x^{n} = +\infty$    |
|  ($n$ impair)  |                                              |                                                   |
|                |                                              |                                                   |
|   $\sqrt{x}$   |                     $~$                      | $\lim\limits_{x \to +\infty}{\sqrt{x} = +\infty}$ |
|                |                                              |                                                   |
| $\dfrac{1}{x}$ | $\lim\limits_{x \to -\infty}\dfrac{1}{x}= 0$ |   $\lim\limits_{x \to +\infty}\dfrac{1}{x}= 0$    |
|                |                                              |                                                   |
|     $e^x$      |    $\lim\limits_{x \to -\infty}e^{x}= 0$     |    $\lim\limits_{x \to +\infty}e^{x}= +\infty$    |
|                |                                              |                                                   |

# Limite d'une fonction en un réel A

## Définition

\bw{r}{7cm}\vspace{-1cm}\cimg{7cm}{img/image7.png}\vspace{-3cm}\ew

\definition

On dit que la fonction $f$ admet pour **limite** ${+\infty}$ **en** ${A}$, si $f(x)$ est aussi grand que l'on veut pourvu que $x$ soit suffisamment proche de $A$.

\exemple

La fonction définie par $f(x) = \dfrac{1}{3 - x} + 1$ a pour limite $+\infty$ lorsque $x$ tend vers $3$.

On a, par exemple :

- $f(2,99) = \frac{1}{3 - 2,99} + 1 = 101$
- $f(2,9999) = \frac{1}{3 - 2,9999} + 1 = 10001$

\ms

Les valeurs de la fonction deviennent aussi grandes que l'on veut dès que $x$ est suffisamment proche de $3$.

\ms

La courbe de la fonction "se rapproche" de la droite d'équation $x = 3$ sans jamais la toucher.

\newpage

Si on prend un intervalle $\left\rbrack a; +\infty \right\lbrack$ quelconque, toutes les valeurs de la fonction appartiennent à cet intervalle dès que $x$ est suffisamment proche de $3$.

\ms

\bw{r}{7cm}\cimg{7cm}{img/image8.png}\vspace{-1cm}\ew

\definition

Si $\lim\limits_{x \to A}{f(x) = \pm\infty}$ alors la droite d'équation $\quad x = A\quad$ est appelée **asymptote verticale** à la courbe de la fonction $f$.

\ms

\definition

\ms

- On dit que la fonction $f$ admet pour limite $+\infty$ en $A$ si tout intervalle $\left\rbrack a; +\infty \right\lbrack$, $a$ réel, contient toutes les valeurs de $f(x)$ dès que $x$ est suffisamment proche de $A$ et on note $\lim\limits_{x \to A}{f(x) = +\infty}$

\ms

- On dit que la fonction $f$ admet pour limite $-\infty$ en $A$ si tout intervalle $\left\rbrack -\infty;b \right\lbrack$, $b$ réel, contient toutes les valeurs de $f(x)$ dès que $x$ est suffisamment proche de $A$ et on note $\lim\limits_{x \to A}{f(x) = -\infty}$

## Limite à gauche, limite à droite

\exemple

\bw{r}{7cm}\vspace{-1cm}\cimg{7cm}{img/image9.png}\vspace{-2cm}\ew

Considérons la fonction inverse définie sur $\mathbb{R}^{*}$ par $f(x) = \dfrac{1}{x}$

La fonction $f$ admet des limites différentes en $0$ selon que $x > 0$ ou $x \less 0$.

\ms

- Si $x > 0$ : Lorsque $x$ tend vers 0, $f(x)$ tend vers $+\infty$ et on note :

$$\lim\limits_{\begin{matrix}\scriptstyle x \to 0\\ \scriptstyle x > 0\end{matrix}}f(x) = +\infty\quad\text{ou}\quad\lim\limits_{x \to 0^{+}}f(x) = +\infty$$

On parle de **limite à droite de $0$**

\ms

- Si $x \less 0$ : Lorsque $x$ tend vers 0, $f(x)$ tend vers $-\infty$ et on note :

$$\lim\limits_{\begin{matrix}\scriptstyle x \to 0 \\ \scriptstyle x \less 0 \end{matrix}}f(x) = -\infty\quad\text{ou}\quad\lim\limits_{x \to 0^{-}}{f(x) = -\infty}$$

On parle de **limite à gauche de $0$**.

\methode \ul{Déterminer graphiquement des limites d'une fonction}

On donne ci-contre la représentation graphique de $f$.

a. Lire graphiquement les limites en $-\infty,$ en $+\infty$, en $-4$ et en $5$.
b. Déterminer le tableau de variations de $f$.

\cimg{11cm}{img/image11.png}

\newpage

\correction

a. **Limites de $f$**

- $\lim\limits_{x \to -\infty}{f(x)} = 5~$ et $~\lim\limits_{x \to +\infty}{f(x)} = 5$

> $\Cf$ admet une asymptote horizontale d'équation $y = 5$ en $-\infty$ et $+\infty$

\ms

- $\lim\limits_{x \to (-4)}f(x) = +\infty$

> $\Cf$ admet une asymptote verticale d'équation $x =(-4)$

\ms

- $\lim\limits_{x \to 5^{-}}{f(x) = +\infty}~$ et $~\lim\limits_{x \to 5^{+}}{f(x) = -\infty}$

> $\Cf$ admet une asymptote verticale d'équation $x=5$

b. **Tableau de variations**

\begin{center}
\begin{tikzpicture}
\tkzTabInit{$x$ / 0.75 , $f(x)$ / 1.5}{$-\infty$, $-4$, $2$, $5$, $+\infty$}
\tkzTabVar{-/ $5$, +D+/ $+\infty$ , -/ $\approx 6$, +D-/ $+\infty$ / $-\infty$, +/ $5$}
\end{tikzpicture}
\end{center}

# Opérations sur les limites

## Utiliser les propriétés des opérations sur les limites

$\alpha$ peut désigner $+\infty$, $-\infty$ ou un nombre réel.

### Somme

$$
	\begin{array}{|r|c|c|c|c|c|c|}\hline
		\rule[-4mm]{0cm}{11mm}\lim\limits_{x\to\alpha}{f(x) =}      & L    & L       & L       & +\infty & -\infty & +\infty       \\ \hline
		\rule[-4mm]{0cm}{11mm}\lim\limits_{x\to\alpha}{g(x) =}      & L'   & +\infty & -\infty & +\infty & -\infty & -\infty       \\ \hline
		\rule[-4mm]{0cm}{11mm}\lim\limits_{x\to\alpha}{f(x)+g(x) =} & L+L' & +\infty & -\infty & +\infty & -\infty & \text{F.I.}^* \\ \hline
	\end{array}
$$

$^*$Forme indéterminée : On ne peut pas prévoir la limite éventuelle.

### Produit

$$
	\begin{array}{|r|c|c|c|c|}\hline
		\rule[-4mm]{0cm}{11mm}\lim\limits_{x\to\alpha}{f(x) =}            & L          & L        & \infty   & 0           \\ \hline
		\rule[-4mm]{0cm}{11mm}\lim\limits_{x\to\alpha}{g(x) =}            & L'         & \infty   & \infty   & \infty      \\ \hline
		\rule[-4mm]{0cm}{11mm}\lim\limits_{x\to\alpha}{f(x)\times g(x) =} & L\times L' & \infty^* & \infty^* & \text{F.I.} \\ \hline
	\end{array}
$$

$^*$On applique la règle des signes pour déterminer si le produit est $+\infty$ ou $-\infty$.

### Quotient

$$
	\begin{array}{|r|c|c|c|c|c|c|}\hline
		\rule[-4mm]{0cm}{11mm}\lim\limits_{x\to\alpha}{f(x) =}               & L             & L\neq 0 & L      & \infty & \infty      & 0           \\ \hline
		\rule[-4mm]{0cm}{11mm}\lim\limits_{x\to\alpha}{g(x) =}               & L'\neq 0      & 0       & \infty & L      & \infty      & 0           \\ \hline
		\rule[-4mm]{0cm}{11mm}\lim\limits_{x\to\alpha}{\dfrac{f(x)}{g(x)} =} & \dfrac{L}{L'} & \infty  & 0      & \infty & \text{F.I.} & \text{F.I.} \\ \hline
	\end{array}
$$

$^*$On applique la règle des signes pour déterminer si le produit est $+\infty$ ou $-\infty$.

\newpage

\methode \ul{Calculer la limite d'une fonction à l'aide des formules d'opération}

Déterminer les limites suivantes :

a. $\lim\limits_{x \to -\infty}{(x - 5)\left( 3 + x^{2} \right)}$
b. $\lim\limits_{x \to 3^-}\pa{\dfrac{1 - 2x}{x - 3}}$

\ms

\correction

a. $\lim\limits_{x \to -\infty}(x - 5)\pa{3 + x^{2}}$

> On a : $\begin{cases}
> 		\lim\limits_{x \to -\infty}(x - 5) = -\infty                                                       \\
> 		\lim\limits_{x \to -\infty}(x^2) = +\infty\quad\text{donc}\quad\lim\limits_{x \to -\infty}3 + x^{2} = +\infty \\
> 	\end{cases}$
>
> \ms
>
> Comme limite d'un produit : $\quad\boxed{\lim\limits_{x \to -\infty}\pa{x - 5}\pa{3 + x^{2}} = -\infty}$

\ms

b. $\lim\limits_{x \to 3^{-}}\pa{\dfrac{1 - 2x}{x - 3}}$

> On a : $\begin{cases}
> 		\lim\limits_{x \to 3^{-}}\pa{1 - 2x} = 1 - 2 \times 3 = -5 \\
> 		\lim\limits_{x \to 3^{-}}\pa{x - 3} = 0^{-}                \\
> 	\end{cases}$
>
> \ms
>
> Une limite de la forme $\pa{\dfrac{5}{0}}$ est égale à "$\infty$".
>
> Donc, d'après la règle des signes, une limite de la forme $\pa{\dfrac{- 5}{0^-}}$ est égale à "+$\infty$".
>
> D'où, comme limite d'un quotient : $\quad\boxed{\lim\limits_{x \to 3^{-}}\dfrac{1 - 2x}{x - 3} = +\infty}$

## Cas des formes indéterminée

Comme pour les suites, on rappelle que :

Les quatre **formes indéterminées** sont, par abus d'écriture : $\boxed{\infty - \infty}$, $\boxed{0 \times \infty}$, $\boxed{\frac{\infty}{\infty}}$ et $\boxed{\frac{0}{0}}$

\ms

\methode \ul{Lever une forme indéterminée à l'aide de factorisations (1)}

Calculer $\quad\lim\limits_{x \to +\infty}{- 3x^{3} + 2x^{2} - 6x + 1}$

\ms

\correction

\ms

> On a : $\begin{cases}
> 		\lim\limits_{x \to +\infty}{- 3x^{3} = -\infty} \\
> 		\lim\limits_{x \to +\infty}{2x^{2} = +\infty.}  \\
> 	\end{cases}\quad$ On reconnait une forme indéterminée du type $\boxed{\infty -\infty}$
>
> \ms
>
> - Levons l'indétermination en factorisant par le monôme de plus haut degré :
>
> $$-3x^{3} + 2x^{2} - 6x + 1 = x^{3}\left( - 3 + \frac{2}{x} - \frac{6}{x^{2}} + \frac{1}{x^{3}} \right)$$
>
> On a $\quad\lim\limits_{x \to +\infty}\pa{\dfrac{2}{x}}=~\lim\limits_{x \to +\infty}\pa{\dfrac{6}{x^2}}=~\lim\limits_{x \to +\infty}\pa{\dfrac{1}{x^3}}=~0$

\ms

> Donc, par limite d'une somme : $\quad\lim\limits_{x \to +\infty}-3 + \dfrac{2}{x} - \dfrac{6}{x^{2}} + \dfrac{1}{x^{3}} = -3$
>
> On a : $\begin{cases}
> 		\lim\limits_{x \to +\infty}-3 + \dfrac{2}{x} - \dfrac{6}{x^{2}} + \dfrac{1}{x^{3}} = - 3 \\
> 		\lim\limits_{x \to +\infty}x^{3} = +\infty                                             \\
> 	\end{cases}$
>
> Donc, par limite d'un produit : $\lim\limits_{x \to +\infty}{x^{3}\left( - 3 + \dfrac{2}{x} - \dfrac{6}{x^{2}} + \dfrac{1}{x^{3}} \right) = -\infty}$
>
> Soit : $\quad\boxed{\lim\limits_{x \to +\infty}{- 3x^{3} + 2x^{2} - 6x + 1} = -\infty}$

\newpage

\methode \ul{Lever une forme indéterminée à l'aide de factorisations (2)}

Calculer :

a. $\lim\limits_{x \to +\infty}\dfrac{2x^{2} - 5x + 1}{6x^{2} - 5}$
b. $\lim\limits_{x \to -\infty}\dfrac{3x^{2} + 2}{4x - 1}$

\ms

\correction

\ms

a. $\lim\limits_{x \to +\infty}\dfrac{2x^{2} - 5x + 1}{6x^{2} - 5}$

\ms

> En appliquant la méthode précédente pour le numérateur et le dénominateur cela conduirait à une forme indéterminée du type $\dfrac{\infty}{\infty}$.
>
> - Levons l'indétermination en factorisant par les monômes de plus haut degré :
>
> $$\dfrac{2x^{2} - 5x + 1}{6x^{2} - 5} = \dfrac{x^{2}}{x^{2}} \times \dfrac{2 - \dfrac{5}{x} + \dfrac{1}{x^{2}}}{6 - \dfrac{5}{x^{2}}}{=}\dfrac{2 - \dfrac{5}{x} + \dfrac{1}{x^{2}}}{6 - \dfrac{5}{x^{2}}}$$
>
> On a : $\quad\lim\limits_{x \to +\infty}\pa{\dfrac{5}{x}}=~\lim\limits_{x \to +\infty}\pa{\dfrac{1}{x^2}} =~\lim\limits_{x \to +\infty}\pa{\dfrac{5}{x^2}} = 0$
>
> \ms
>
> Donc, comme limite de sommes : $\quad\lim\limits_{x \to +\infty}{2 - \dfrac{5}{x} + \dfrac{1}{x^{2}} =}2\quad\text{et}\quad\lim\limits_{x \to +\infty}{6 - \dfrac{5}{x^{2}} =}6$
>
> \ms
>
> Donc, comme limite d'un quotient : $\quad\lim\limits_{x \to +\infty}\dfrac{2 - \dfrac{5}{x} + \dfrac{1}{x^{2}}}{6 - \dfrac{5}{x^{2}}}{=}\dfrac{2}{6} = \dfrac{1}{3}$
>
> \ms
>
> Soit : $\quad\boxed{\lim\limits_{x \to +\infty}\dfrac{2x^{2} - 5x + 1}{6x^{2} - 5} =\dfrac{1}{3}}$

\ms

b. $\lim\limits_{x \to -\infty}\dfrac{3x^{2} + 2}{4x - 1}$

> Il s'agit d'une forme indéterminée du type $\dfrac{\infty}{\infty}$
>
> - Levons l'indétermination en factorisant par les monômes de plus haut degré :
>
> $$\dfrac{3x^{2} + 2}{4x - 1} = \dfrac{x^{2}}{x} \times \dfrac{3 + \dfrac{2}{x^{2}}}{4 - \dfrac{1}{x}}{=}x \times \dfrac{3 + \dfrac{2}{x^{2}}}{4 - \dfrac{1}{x}}$$
>
> \ms
>
> On a : $\lim\limits_{x \to -\infty}\pa{\dfrac{1}{x}}=~\lim\limits_{x \to -\infty}\pa{\dfrac{2}{x^{2}}}=~0$
>
> \ms
>
> Donc, comme limite de sommes : $\lim\limits_{x \to -\infty}3 + \dfrac{2}{x^2}=3\quad\text{et}\quad\lim\limits_{x \to -\infty}4 - \dfrac{1}{x} =4$
>
> \ms
>
> Donc, comme limite d'un quotient : $\quad\lim\limits_{x \to -\infty}\dfrac{3 + \dfrac{2}{x^{2}}}{4 - \dfrac{1}{x}}{=}\dfrac{3}{4}$$
>
> \ms
>
> De plus, $\quad\lim\limits_{x \to -\infty}(x) = -\infty$
>
> \ms
>
> Donc, comme limite d'un produit : $\quad\lim\limits_{x \to -\infty}x \times \dfrac{3 + \dfrac{2}{x^{2}}}{4 - \dfrac{1}{x}}{= -\infty}$
>
> \ms
>
> Soit : $\quad\boxed{\lim\limits_{x \to -\infty}\dfrac{3x^{2} + 2}{4x - 1} = -\infty}$

\newpage

\methode \ul{Lever une forme indéterminée à l'aide de l'expression conjuguée}

\ms

Calculer :

a. $\lim\limits_{x \to +\infty}{\sqrt{x + 1} - \sqrt{x}}$
b. $\lim\limits_{x \to 5}\frac{\sqrt{x - 1} - 2}{x - 5}$

\ms

\correction

\ms
a. $\lim\limits_{x \to +\infty}{\sqrt{x + 1} - \sqrt{x}}$

> On a : $\begin{cases}
> 		\lim\limits_{x \to +\infty}{\sqrt{x + 1} = +\infty} \\
> 		\lim\limits_{x \to +\infty}{\sqrt{x} = +\infty}
> 	\end{cases}\quad$ Il s'agit d'une forme indéterminée du type $\infty -\infty$
>
> - Levons l'indétermination à l'aide de l'expression conjuguée :
>
> $$
> 	\def\arraystretch{2.5}
> 	\begin{array}{rcl}
> 		\sqrt{x + 1} - \sqrt{x} & = & \dfrac{\left( \sqrt{x + 1} - \sqrt{x} \right)\left( \sqrt{x + 1} + \sqrt{x} \right)}{\sqrt{x + 1} + \sqrt{x}} \\
> 		~                       & = & \dfrac{\left( \sqrt{x + 1} \right)^{2} - \left( \sqrt{x} \right)^{2}}{\sqrt{x + 1} + \sqrt{x}}                \\
> 		~                       & = & \dfrac{x + 1 - x}{\sqrt{x + 1} + \sqrt{x}}                                                                    \\
> 		~                       & = & \dfrac{1}{\sqrt{x + 1} + \sqrt{x}}
> 	\end{array}
> $$
>
> Comme limite d'une somme : $\quad\lim\limits_{x \to +\infty}{\sqrt{x + 1} + \sqrt{x} = +\infty}$
>
> \ms
>
> Et donc, comme limite d'un quotient : $\quad\lim\limits_{x \to +\infty}\dfrac{1}{\sqrt{x + 1} + \sqrt{x}} = 0$.
>
> \ms
>
> Soit : $\quad\boxed{\lim\limits_{x \to +\infty}{\sqrt{x + 1} - \sqrt{x} = 0}}$

\ms

b. $\lim\limits_{x \to 5}\dfrac{\sqrt{x - 1} - 2}{x - 5}$

> On a : $\begin{cases}
> 		\lim\limits_{x \to 5}\pa{\sqrt{x - 1} - 2} = \sqrt{5 - 1} - 2 = 0 \\
> 		\lim\limits_{x \to 5}\pa{x - 5} = 5 - 5 = 0
> 	\end{cases}~$ Il s'agit d'une forme indéterminée $\dfrac{0}{0}$.
>
> \ms
>
> - Levons l'indétermination à l'aide de l'expression conjuguée :
>
> $$
> 	\def\arraystretch{2.5}
> 	\begin{array}{rcl}
> 		\dfrac{\sqrt{x - 1} - 2}{x - 5} & = & \dfrac{\left( \sqrt{x - 1} - 2 \right)\left( \sqrt{x - 1} + 2 \right)}{(x - 5)\left( \sqrt{x - 1} + 2 \right)} \\
> 		~                               & = & \dfrac{x - 1 - 4}{(x - 5)\left( \sqrt{x - 1} + 2 \right)}                                                      \\
> 		~                               & = & \dfrac{x - 5}{(x - 5)\left( \sqrt{x - 1} + 2 \right)}\qquad = \dfrac{1}{\sqrt{x - 1} + 2}
> 	\end{array}
> $$
>
> On a : $\quad\lim\limits_{x \to 5}{\sqrt{x - 1} + 2 = \sqrt{5 - 1} + 2 = 4}$
>
> \ms
>
> Donc, comme limite d'un quotient, on a : $\quad\lim\limits_{x \to 5}\dfrac{1}{\sqrt{x - 1} + 2} = \dfrac{1}{4}$
>
> \ms
>
> Soit : $\quad\boxed{\lim\limits_{x \to 5}\dfrac{\sqrt{x - 1} - 2}{x - 5} =\dfrac{1}{4}}$

\newpage

\methode \ul{Déterminer une asymptote}

\ms

Soit $f$ la fonction définie sur $\R \smallsetminus\left\{ 1 \right\}$ par : $\quad f(x) =\dfrac{- 2}{1 - x}$

Démontrer que $\Cf$ admet des asymptotes dont on précisera la nature et les équations.

\ms

\correction

\ms

> - On a : $\quad\lim\limits_{x \to +\infty}\pa{1 - x} = -\infty$
>
>   Donc comme limite d'un quotient, on a : $\quad\lim\limits_{x \to +\infty}\pa{\dfrac{- 2}{1 - x}}= 0$ et $\lim\limits_{x \to -\infty}\pa{\dfrac{- 2}{1 - x}}= 0$
>
>   $\Rarr$ La droite d'équation $y = 0$ est \ul{asymptote horizontale} à $\Cf$ en $+\infty$ et en $-\infty$.

\ms

\ms

> - On a : $\lim\limits_{x \to 1^{-}}\pa{1 - x} = 0^{+}$
>
>   Donc comme limite d'un quotient, on a : $\lim\limits_{x \to 1^{-}}\pa{\dfrac{-2}{1 - x}} = -\infty$
>
>   Et : $\lim\limits_{x \to 1^{+}}\pa{1 - x} = 0^{-}$
>
>   Donc comme limite d'un quotient, on a : $\lim\limits_{x \to 1^{+}}\pa{\dfrac{- 2}{1 - x}} = +\infty$
>
>   $\Rarr$ La droite d'équation $x = 1$ est \ul{asymptote verticale} à $\Cf$.

\ms

\begin{center}
\begin{tikzpicture}[line cap=round,line join=round,>=triangle 45,x=1.0cm,y=1.0cm]
\begin{axis}[
x=1.2cm,y=1.2cm,
axis lines=middle,ymajorgrids=true,xmajorgrids=true,
xmin=-5,xmax=5,xtick={-5.0,-4.0,...,5.0},
ymin=-5,ymax=5,ytick={-5.0,-4.0,...,5.0},]
\draw [line width=2pt,color=blue,smooth,samples=50,domain=-5:0.9] plot(\x,{-2/(1-(\x))});
\draw [line width=2pt,color=blue,smooth,samples=50,domain=1.1:5] plot(\x,{-2/(1-(\x))});
\draw [line width=2pt, dashed] (1,-5) -- (1,5);
\draw [line width=2pt, dashed] (-5,0) -- (5,0);
\draw (3,1) node[anchor=south west] {$\Cf$};
\draw (-3.5,0) node[anchor=south] {$y=0$};
\draw (1,-3.5) node[anchor=west] {$x=1$};
\end{axis}
\end{tikzpicture}
\end{center}

\newpage\quad
