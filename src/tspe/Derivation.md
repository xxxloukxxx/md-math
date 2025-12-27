## Dérivation

<!-- toc -->

## Rappels sur la dérivation

### Formules de dérivation

```admonish prop title="Propriété : Dérivées des fonctions usuelles"
$$
\begin{array}{|ccccc|}\hline
	\rowcolor{lightblue}\rule[-5mm]{0mm}{12mm}f                   & \Df  &                   & f'                          & \Dfp \\\\ \hline
	\rule[-5mm]{0mm}{12mm}f(x)=a              & \R   & \rarr             & f'(x)=0                     & \R   \\\\
	\text{avec}\ a\in\R                       &      &                   &                             & \    \\\\ \hline
	\rule[-5mm]{0mm}{12mm}f(x)=ax             & \R   & \rarr             & f'(x)=a                     & \R   \\\\
	\text{avec}\ a\in\R                       &      &                   &                             &      \\\\ \hline
	\rule[-5mm]{0mm}{12mm}f(x)=x^2            & \R   & \rarr             & f'(x)=2x                    & \R   \\\\ \hline
	\rule[-5mm]{0mm}{12mm}f(x)=x^n            & \R   & \rarr             & f'(x)=nx^{(n-1)}            & \R   \\\\
	\text{avec}\ n\ge 1                       &      &                   &                             &      \\\\ \hline
	\rule[-5mm]{0mm}{12mm}f(x)=\cfrac{1}{x}   & \Ret & \rarr             & f'(x)=\cfrac{-1}{x^2}       & \Ret \\\\ \hline
	\rule[-5mm]{0mm}{12mm}f(x)=\cfrac{1}{x^n} & \Ret & \rarr             & f'(x)=\cfrac{-n}{x^{(n+1)}} & \Ret \\\\
	\text{avec}\ n\ge 1                       &      &                   &                             &      \\\\ \hline
	\rule[-5mm]{0mm}{12mm}f(x)=\sqrt{x}       & \Rp  & \qquad\rarr\qquad & f'(x)=\cfrac{1}{2\sqrt{x}}  & \Rpe \\\\ \hline
\end{array}
$$
```

```admonish prop title="Propriété : Opérations sur les fonctions"
$$
\begin{array}{|ccc|}\hline
	\rowcolor{lightblue}\rule[-5mm]{0mm}{12mm}f            &                   & f'                       \\\\ \hline
	\rule[-5mm]{0mm}{12mm}u + v        & \rarr             & u' + v'                  \\\\ \hline
	\rule[-5mm]{0mm}{12mm}ku           & \rarr             & ku'                      \\\\
	\text{avec}\ k\in\R                & \                 & \                        \\\\ \hline
	\rule[-5mm]{0mm}{12mm}uv           & \rarr             & u'v + uv'                \\\\ \hline
	\rule[-5mm]{0mm}{12mm}\cfrac{1}{u} & \rarr             & \cfrac{-u'}{u^{2}}       \\\\ \hline
	\rule[-5mm]{0mm}{12mm}\cfrac{u}{v} & \qquad\rarr\qquad & \cfrac{u'v - uv'}{v^{2}} \\\\ \hline
\end{array}
$$
```

```admonish prop title="Propriété : Équation de la tangente"
Une équation de la tangente à $\Cf$ au point d'abscisse $a$ est : $$\boxed{y = f'(a)(x - a) + f(a)}$$
```

### Variations de $f$

```admonish th
Soit une fonction $f$ définie et dérivable sur un intervalle $I$.

- Si $\boxed{f'(x) \le 0}\ $ alors $f$ est **décroissante** sur $I$.
- Si $\boxed{f'(x) \ge 0}\ $ alors $f$ est **croissante** sur $I$.
```

```admonish meth title="Méthode : Étudier les variations d'une fonction"
Soit la fonction $f$ définie sur $\R$ par $f(x) = x^{3} + \cfrac{9}{2}x^{2} - 12x + 5$.

a. Calculer la fonction dérivée $f'$ de $f$.

b. Déterminer le signe de $f'$ en fonction de $x$.

c. Dresser le tableau de variations de $f$.

---

a. Calcul de $f\prim$

> $\begin{array}{rcl}f'(x) &=& {3x}^{2} + \cfrac{9}{2} \times 2x - 12\\\\ &=& {3x}^{2} + 9x - 12\end{array}$

b. On commence par résoudre l'équation $f'(x) = 0$ :

> Le discriminant du trinôme ${3x}^{2} + 9x - 12$ est égal à :
>
> $$\Delta = 9^{2} - 4 \times 3 \times ( - 12) = 225$$
>
> L'équation possède deux solutions :
>
> $$x_{1} =\cfrac{- 9 - \sqrt{225}}{2 \times 3} =-4\quad\text{et}\quad x_{2} =\cfrac{- 9 + \sqrt{225}}{2 \times 3} = 1$$
>
> Comme $a=3>0$, les branches de la parabole représentant la fonction dérivée sont tournées vers le haut.
>
> La dérivée est **positive**, puis **négative**, puis **positive**.
>
> ![](img/deriv/image3.png =350x center)

c. On dresse le tableau de variations :

> ![](img/deriv/tabvar1.png =600x center)
>
> $\begin{array}{rcl}f(-4) &=& {(-4)}^{3} + \cfrac{9}{2}{(-4)}^{2} - 12 \times (-4) + 5 \\\\ &=& 61\end{array}$
>
> $\begin{array}{rcl}f(1) &=& 1^{3} + \cfrac{9}{2}{\times 1}^{2} - 12 \times 1 + 5 \\\\ &=& -\cfrac{3}{2}\end{array}$
```

## Dérivée d'une fonction composée

### Définition d'une fonction composée

```admonish meth title="Méthode : Identifier la composée de deux fonctions"
On considère la fonction $f$ définie par $f(x) = \sqrt{x - 3}$.

:bulb: Identifier la composée de deux fonctions dans la fonction $f$.

---

On peut décomposer la fonction $f$ en deux fonctions $u$ et $v$ telles que :

|      |          $u$          |            $v$             |
| :--: | :-------------------: | :------------------------: |
| $f:$ | $x \longmapsto x - 3$ | $\longmapsto \sqrt{x - 3}$ |

Donc $u(x)=x-3\ $ et $\ v(x) = \sqrt{x}$.

On dit que la fonction $f$ est la composée de $u$ par $v$ et on note :

$$f(x) = v \circ u(x) = v\left( u(x) \right) = \sqrt{x - 3}$$
```

```admonish def
On appelle **fonction composée** des fonctions $u$ par $v$ la fonction notée $v \circ u$ définie par :

$$\boxed{v \circ u(x) = v\left( u(x) \right)}$$
```

```admonish meth title="Méthode : Composer deux fonctions"
a. On considère les fonctions $u$ et $v$ définies par : $u(x) =\pa{\cfrac{1}{x}}$ et $v(x) = \sqrt{x}$

- Exprimer les fonctions $(v \circ u)$ et $(u \circ v)$ en fonction de $x$

b. Même question avec $u(x) =\pa{x^{2} + x}$ et $v(x) =\pa{\cfrac{x}{x + 1}}$

---

a. On a : $u(x) =\pa{\cfrac{1}{x}}$ et $v(x) = \sqrt{x}$

$$v \circ u(x) = v\left( u(x) \right) = \sqrt{\cfrac{1}{x}}\qquad\text{et}\qquad u \circ v(x) = u\left( v(x) \right) = \cfrac{1}{\sqrt{x}}$$

b. On a : $u(x) =\pa{x^{2} + x}$ et $v(x) =\pa{\cfrac{x}{x + 1}}$

$$v \circ u(x) = v\left( u(x) \right) = \cfrac{x^{2} + x}{x^{2} + x + 1}\qquad\text{et}\qquad u \circ v(x) = u\left( v(x) \right) =\left( \cfrac{x}{x + 1} \right)^{2} + \cfrac{x}{x + 1}$$
```

### Dérivation d'une fonction composée

```admonish prop
$$
	\begin{array}{|ccc|}\hline
	\rowcolor{lightblue}\rule[-5mm]{0mm}{12mm}f             & \rarr             & f'                            \\\\ \hline
	\rule[-5mm]{0mm}{12mm}v\circ u      & \rarr             & v' \circ u \times u'          \\\\ \hline
	\rule[-5mm]{0mm}{12mm}v\pa{u\pa{x}} & \qquad\rarr\qquad & v'\pa{u\pa{x}}\times u'\pa{x} \\\\ \hline
	\end{array}
$$
```

```admonish meth title="Méthode : Déterminer la dérivée d'une fonction composée (cas général)"
:bulb: Déterminer la dérivée de la fonction $f$ définie sur $\R$ par $f(x) = e^{x^{2} + 1}$.

---

On considère les fonctions $u$ et $v$ définies par : $\ u(x) = x^{2} + 1\ $ et $\ v(x) = e^{x}$

Alors : $\ f(x) = e^{x^{2} + 1} = v\left( u(x) \right)\ $ avec $\ u'(x) = 2x$ et $v'(x) = e^{x}$

Donc :

$$
\begin{array}{rcl}f'(x) & = & v'{\left( u(x) \right) \times}u'(x) \\\\
                        & = & e^{\pa{x^{2} + 1}}{\times 2x}       \\\\
                        & = & \boxed{2xe^{x^{2} + 1}}
\end{array}
$$
```

### Cas particuliers de fonctions composées

```admonish prop
$$
\begin{array}{|ccc|}\hline
	\rowcolor{lightblue}\rule[-5mm]{0mm}{12mm}f & \rarr             & f'                    \\\\ \hline
	\rule[-5mm]{0mm}{12mm}\sqrt{u}              & \rarr             & \cfrac{u'}{2\sqrt{u}} \\\\ \hline
	\rule[0mm]{0mm}{7mm}u^{n}                   & \qquad\rarr\qquad & nu'u^{n - 1}          \\\\
	\text{avec}\ n \in \Z^{*}                   &                   &                       \\\\ \hline
	\rule[-5mm]{0mm}{12mm}e^{u}                 & \rarr             & u'e^{u}               \\\\ \hline
\end{array}
$$
```

```admonish demo
- $\sqrt{u(x)} = v \circ u(x)$ avec $v(x) = \sqrt{x}$

> Donc :
>
> $$
> 	\begin{array}{rcl}
> 		\left( \sqrt{u(x)} \right)' & = & v'\left( u(x) \right) \times u'(x)                                             \\\\
> 		                            & = & \cfrac{1}{2\sqrt{u(x)}}\times u'(x)\qquad\text{car }v'(x)=\cfrac{1}{2\sqrt{x}} \\\\
> 		                            & = & \cfrac{u'(x)}{2\sqrt{x}}
> 	\end{array}
> $$
>
> Soit $\boxed{\left( \sqrt{u(x)} \right)' = \cfrac{u'(x)}{2\sqrt{u(x)}}}$

- $\left( u(x) \right)^{n} = v \circ u(x)$ avec $v(x) = x^{n}$

> Donc :
>
> $$
> 	\begin{array}{rcl}
> 		\left( \left( u(x) \right)^{n} \right)' & = & v'\left( u(x) \right) \times u'(x)                                           \\\\
> 		                                        & = & n\left( u(x) \right)^{n - 1} \times u'(x)\qquad\text{car }v'(x) = nx^{n - 1}
> 	\end{array}
> $$
>
> Soit $\boxed{\left( \left( u(x) \right)^{n} \right)' = nu'(x)\left( u(x) \right)^{n - 1}}$

- Démonstration analogue pour $e^{u}$.
```

```admonish meth title="Méthode : Déterminer la dérivée de fonctions composées (cas particuliers)"
:bulb: Déterminer la dérivée des fonctions définies par :

a. $f(x) = \sqrt{3x^{2} + 4x - 1}$

b. $g(x) = \left( 2x^{2} + 3x - 3 \right)^{4}$

c. $h(x) = 2e^{\left(\tfrac{1}{x}\right)}$

---

a. On pose : $f(x) = \sqrt{u(x)}\ $ avec $\ u(x) = 3x^{2} + 4x - 1\quad\rarr\quad u'(x) = 6x + 4$

> Donc : $\ f'(x) = \cfrac{u'(x)}{2\sqrt{u(x)}}\ =\ \cfrac{6x + 4}{2\sqrt{3x^{2} + 4x - 1}}\ =\ \boxed{\cfrac{3x + 2}{\sqrt{3x^{2} + 4x - 1}}}$

b. On pose : $g(x) = \left( u(x) \right)^{4}\ $ avec $\ u(x) = 2x^{2} + 3x - 3\quad\rarr\quad u'(x) = 4x + 3$

> Donc : $\ g'(x) = 4u'(x)\left( u(x) \right)^{3}\ =\ \boxed{4(4x + 3)\left( 2x^{2} + 3x - 3 \right)^{3}}$

c. On pose : $h(x) = 2e^{u(x)}\ $ avec $\ u(x) = \cfrac{1}{x}\quad\rarr\quad u'(x) = \cfrac{-1}{x^{2}}$

> Donc : $\ h'(x) = 2u'(x)e^{u(x)}\ =\ 2 \times \left( \cfrac{-1}{x^{2}} \right)e^{\left(\tfrac{1}{x}\right)}\ =\ \boxed{\cfrac{-2}{x^{2}}e^{\left(\tfrac{1}{x}\right)}}$
```

## Étude d'une fonction composée

```admonish meth title="Méthode : Étudier une fonction composée"
Soit $f$ la fonction définie sur $\R$ par $\ f(x) = xe^{\left(-\tfrac{x}{2}\right)}$

a. Étudier les limites de $f$ à l'infini.

b. Calculer la dérivée de la fonction $f$.

c. Dresser le tableau de variations de la fonction $f$.

d. Tracer la courbe représentative de la fonction $f$.

---

a. _Limites en $\pm\infty$_

> - _Limite en $-\infty$_
>
>     Comme limite d'une fonction composée : $\ \limite_{x\to -\infty}e^{\left(\tfrac{-x}{2}\right)} = \limite_{X\to +\infty}e^{X} = +\infty$
>
>     En effet, lorsque $x \to -\infty$, on a : $X =\cfrac{-x}{2} \to +\infty$
>
>     Or, $\limite_{x \to -\infty}x = -\infty$
>
>     Donc, limite d'un produit : $\ \boxed{\limite_{x \to -\infty}xe^{\left(\tfrac{-x}{2}\right)} = -\infty}$
>
> - _Limite en $+\infty$_
>
>     On reconnait une forme indéterminée du type $\infty \times 0$
>
>     Levons l'indétermination :
>
>     $$xe^{\left(\tfrac{-x}{2}\right)} = \cfrac{x}{e^{\left(\tfrac{x}{2}\right)}} = 2\cfrac{\left(\tfrac{x}{2}\right)}{e^{\left(\tfrac{x}{2}\right)}}$$
>
>     Par croissance comparée, on a :
>
>     $\limite_{x \to +\infty}{\cfrac{e^{\left(\tfrac{x}{2}\right)}}{\left(\tfrac{x}{2}\right)} = +\infty}\ $ car $\ \limite_{X \to +\infty}{\cfrac{e^{X}}{X} = +\infty}\ $ avec $\ X = \tfrac{x}{2}$
>
>     Donc, $\ \limite_{x \to +\infty}{\cfrac{\left(\tfrac{x}{2}\right)}{e^{\left(\tfrac{x}{2}\right)}} = 0}$, comme inverse de limite.
>
>     Donc $\ \limite_{x \to +\infty}2\cfrac{\left(\tfrac{x}{2}\right)}{e^{\left(\tfrac{x}{2}\right)}} = 0$
>
>     Soit $\ \boxed{\limite_{x \to +\infty}xe^{\left(\tfrac{-x}{2}\right)} = 0}$

b. _Calcul de la dérivée de $f$_

> On a : $\ f(x)=  u(x) \times v(x)\ $ avec $\ \begin{cases}u(x)=x\\\\ v(x)=e^{\left(\tfrac{-x}{2}\right)}\end{cases}\ $ et $\ \begin{cases}u'(x)=1\\\\ v'(x)=\pa{\cfrac{-1}{2}}e^{\left(\tfrac{-x}{2}\right)}\end{cases}$
>
> On a :
>
> $$
> 	\begin{array}{rcl}
> 		f'(x) & = & u'(x)v(x)+u(x)v'(x)                                                                                           \\\\
> 		      & = & 1 \times e^{\left(\tfrac{-x}{2}\right)} + x \times \left( \cfrac{-1}{2} \right)e^{\left(\tfrac{-x}{2}\right)} \\\\
> 		      & = & e^{\left(\tfrac{-x}{2}\right)} + \left(\cfrac{-x}{2}\right)e^{\left(\tfrac{-x}{2}\right)}                     \\\\
> 		      & = & \left( 1 +\cfrac{-x}{2}\right)e^{\left(\tfrac{-x}{2}\right)}
> 	\end{array}
> $$
>
> Donc : $\ \boxed{f'(x) = \pa{1-\cfrac{x}{2}}e^{\pa{\tfrac{-x}{2}}}}$

c. _Étude du signe de $f'(x)$_

> Comme $e^{\left(\tfrac{-x}{2}\right)} > 0$, $f'(x)$ est du signe de $\pa{1- \cfrac{x}{2}}$
>
> On a : $$\begin{array}{rcl}\pa{1- \cfrac{x}{2}}\ge 0&\iff&\cfrac{-x}{2}\ge -1\\\\&\iff& -x \ge 2\\\\&\iff&x\le -2\end{array}$$
>
> Donc $\ f'$ est donc :
>
> - **Positive** sur l'intervalle $\left\rbrack -\infty;2 \right\rbrack$
> - **Négative** sur l'intervalle $\left\lbrack 2; +\infty \right\lbrack$
>
> On dresse le tableau de variations :
>
> ![](img/deriv/tabvar2.png =400x center)
>
> En effet : $f(2) = 2e^{\tfrac{-2}{2}} = 2e^{-1} = \pa{\cfrac{2}{e}}$

d. _Représentation graphique_

> ![](img/deriv/image4.png =700x center)
```
