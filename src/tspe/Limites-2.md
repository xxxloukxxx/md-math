# Limites de fonctions (2/2)

<!-- toc -->

## Limite d'une fonction composée

```admonish meth title="Méthode : Déterminer la limite d'une fonction composée"
Soit la fonction $f$ définie sur $\left\lbrack \cfrac{1}{2}\ ;\ +\infty \right\lbrack$ par : $\quad f(x) = \sqrt{2 - \cfrac{1}{x}}$

:bulb: Calculer la limite de la fonction $f$ en $+\infty$.

---

> On a : $\limite_{x\to +\infty}\pa{\cfrac{1}{x}} = 0$, donc $\limite_{x\to +\infty}\pa{2 -\cfrac{1}{x}} = 2$
>
> Donc, comme limite d'une fonction composée : $\ \boxed{\limite_{x\to +\infty}\sqrt{2 - \cfrac{1}{x}} = \sqrt{2}}$
>
> En effet, si $x\to +\infty$, on a : $X =\pa{2 - \cfrac{1}{x}} \rarr 2\ $ et donc $\ \limite_{x\to 2}\sqrt{X} = \sqrt{2}$
```

## Limites et comparaisons

### Théorème de comparaison

```admonish th
Soit $f$ et $g$ deux fonctions définies sur un intervalle $I = \left\rbrack a; +\infty \right\lbrack$.

Si pour tout $x$ de $I$, on a :

- $\begin{cases}f(x) \le g(x)\\\\ \limite_{x\to +\infty}{f(x) = +\infty}\end{cases}\ $ alors $\ \limite_{x\to +\infty}{g(x) = +\infty}\quad$ (Fig.1)

- $\begin{cases}f(x) \le g(x)\\\\ \limite_{x\to +\infty}{g(x) = -\infty}\end{cases}\ $ alors $\ \limite_{x\to +\infty}{f(x) = -\infty}\quad$ (Fig.2)

|                  Fig.1                   |                  Fig.2                   |
| :--------------------------------------: | :--------------------------------------: |
| ![](img/limite/2image2.png =300x center) | ![](img/limite/2image3.png =300x center) |
```

```admonish rem
On obtient des théorèmes analogues en $-\infty$.
```

```admonish demo title="Démonstration (fig.1)"
On a $\limite_{x\to +\infty}f(x) = +\infty$ donc tout intervalle $\left\rbrack m; +\infty \right\lbrack$, $m$ réel, contient toutes les valeurs de $f(x)$ dès que $x$ est suffisamment grand, soit : $f(x) > m$.

Or, dès que $x$ est suffisamment grand, on a $f(x) \le g(x)$.

Donc dès que $x$ est suffisamment grand, on a $\ g(x) > m\ $ donc $\ \limite_{x\to +\infty}g(x) = +\infty$.
```

### Théorème d'encadrement

```admonish th title="Théorème des gendarmes"
Soit $\ f\ $, $\ g\ $ et $\ h\ $ trois fonctions définies sur un intervalle $I = \left\rbrack a; +\infty \right\lbrack$.

Si pour tout $x$ de $I$, on a : $\begin{cases}
		f(x) \le g(x) \le h(x)           \\\\
		\limite_{x\to +\infty}{f(x) = L} \\\\
		\limite_{x\to +\infty}{h(x) = L} \\\\
	\end{cases}\ $ alors $\ \limite_{x\to +\infty}{g(x) = L}$.

![](img/limite/2image4.png =550x center)
```

```admonish rem
On obtient un théorème analogue en $-\infty$.

Par abus de langage, on pourrait dire que les fonctions $f$ et $h$ (les gendarmes) se resserrent autour de la fonction $g$ pour des valeurs de $x$ suffisamment grandes pour la faire tendre vers la même limite.

Ce théorème est également appelé le **théorème du sandwich**.
```

```admonish meth title="Utiliser les théorèmes de comparaison et d'encadrement"
:bulb: Calculer :

1. $\limite_{x\to +\infty}\pa{x + \sin x}$
2. $\limite_{x\to +\infty}\pa{\cfrac{x\cos x}{x^{2} + 1}}$

---

1. $\limite_{x\to +\infty}\pa{x + \sin x}$

> $\limite_{x\to +\infty}\sin x$ n'existe pas. Donc sous la forme donnée, la limite cherchée est indéterminée.
>
> Levons l'indétermination : $-1\le\sin x\ \iff\ (x-1)\le (x+\sin x)$
>
> On a $\ \limite_{x\to +\infty}\pa{x - 1} = +\infty$ donc d'après le théorème de comparaison :
>
> $$\boxed{\limite_{x\to +\infty}\pa{x + \sin x} = +\infty}$$

2. $\limite_{x\to +\infty}\pa{\cfrac{x\cos x}{x^{2} + 1}}$

> $\limite_{x\to +\infty}{\cos x}$ n'existe pas.
>
> Donc sous la forme donnée, la limite cherchée est indéterminée.
>
> Levons l'indétermination :
>
> $-1\le\cos{(x)}\le 1\quad\iff\quad -x\le x\cos{(x)} \le x\ $ car $\ x > 0$
>
> Et donc :
>
> $$\pa{\cfrac{-x}{x^{2} + 1}}\le\pa{\cfrac{x\cos{(x)}}{x^{2} + 1}}\le\pa{\cfrac{x}{x^{2} + 1}}$$
>
> Et on a : $\ \pa{\cfrac{x}{x^{2} + 1}} = \pa{\cfrac{x}{x\left( x + \cfrac{1}{x} \right)}} = \pa{\cfrac{1}{x + \cfrac{1}{x}}}$
>
> On a : $\ \limite_{x\to +\infty}\pa{\cfrac{1}{x}}= 0\ $ donc $\ \limite_{x\to +\infty}\pa{x + \cfrac{1}{x}}= +\infty$.
>
> Et donc : $\ \limite_{x\to +\infty}\pa{\cfrac{1}{x + \tfrac{1}{x}}}=0\ $ comme limite d'un quotient.
>
> On a donc : $\ \limite_{x\to +\infty}\pa{\cfrac{-x}{x^{2} + 1}} = \limite_{x\to +\infty}\pa{\cfrac{x}{x^{2} + 1}} = 0$
>
> D'après le théorème des gendarmes, on a : $\ \boxed{\limite_{x\to +\infty}\pa{\cfrac{x\cos{(x)}}{x^{2} + 1}} = 0}$
```

## Cas de la fonction exponentielle

### Limites aux bornes

```admonish prop
$$\boxed{\limite_{x\to +\infty}e^{x} = +\infty}\quad\text{ et }\quad\boxed{\limite_{x\to -\infty}e^{x} = 0}$$
```

```admonish demo
La suite $\left( e^{n} \right)$ est une suite géométrique de raison $e > 1$.

Donc, on a : $\limite_{n \to +\infty}e^{n} = +\infty$.

Si on prend un réel $a$ quelconque (aussi grand que l'on veut), il existe un rang $n_{1}$ à partir duquel tous les termes de la suite dépassent $a$, soit :

$$e^{n_{1}} > a$$

La fonction exponentielle étant strictement croissante, on a également, pour tout $x > n_{1}\ $:

$$e^{x} > e^{n\_{1}}$$

Donc, pour tout $x > n_{1}\ $ on a $\ e^{x} > e^{n_{1}} > a$.

Ainsi, tout intervalle $\left\rbrack a; +\infty \right\lbrack$ contient toutes les valeurs de $e^{x}$ dès que $x$ est suffisamment grand.

Soit : $\ \limite_{x\to +\infty}e^{x} = +\infty$.

De plus, $\ \limite_{x\to -\infty}e^{x} = \limite_{x\to -\infty}\pa{\cfrac{1}{e^{- x}}} = \limite_{X\to +\infty}\pa{\cfrac{1}{e^{X}}}\ $ en posant $X = -x$

Or, $\ \limite_{X\to +\infty}e^{X} = +\infty\ $, donc $\ \limite_{X\to +\infty}\pa{\cfrac{1}{e^{X}}} = 0\ $ comme limite d'un quotient.

Soit $\ \limite_{x\to -\infty}e^{x} = 0$.
```

```admonish meth title="Méthode : Déterminer la limite d'une fonction contenant des exponentiels"
:bulb: Calculer les limites suivantes :

a. $\limite_{x\to +\infty}\pa{x + e^{-3x}}$

b. $\limite_{x\to -\infty}\pa{e^{1-\tfrac{1}{x}}}$

---

a. $\limite_{x\to +\infty}{x + e^{- 3x}}$

> On a $\limite_{x\to +\infty}\pa{-3x} = -\infty$
>
> Donc, comme limite d'une fonction composée : $\ \limite_{x\to +\infty}e^{-3x} = 0$
>
> En effet, si $x\to +\infty$, on a : $X = -3x\to -\infty$ et donc :$\limite_{X\to -\infty}e^{X} = 0$.
>
> On a : $\ \limite_{x\to +\infty}{x = +\infty}$
>
> Donc, comme limite d'une somme : $\ \boxed{\limite_{x\to +\infty}\pa{x + e^{- 3x}} = +\infty}$

b. $\limite_{x\to -\infty}e^{1 - \tfrac{1}{x}}$

> On a $\limite_{x\to -\infty}\pa{\cfrac{1}{x}} = 0$, donc $\ \limite_{x\to -\infty}\pa{1 - \cfrac{1}{x}} = 1$
>
> Donc, comme limite d'une fonction composée : $\ \boxed{\limite_{x\to -\infty}\pa{e^{1 - \tfrac{1}{x}}} = e^{1} = e}$
```

### Croissance comparée des fonctions exponentielles et puissances

```admonish ex
Observons la fonction $x\mapsto e^x$ et la fonction puissance $x\mapsto x^{4}$ dans différentes fenêtres graphiques.

Dans cette première fenêtre, la fonction puissance semble l'emporter devant la fonction exponentielle.

![](img/limite/2image6.png =350x center)

Mais on constate que pour $x$ suffisamment grand, la fonction exponentielle dépasse la fonction puissance $x \longmapsto x^{4}$.

![](img/limite/2image7.png =550x center)
```

```admonish rem
Dans le cas de limites infinies, la fonction exponentielle impose sa limite devant les fonctions puissances.

Sa croissance est plus rapide.
```

```admonish prop title="Propriété : Croissances comparées"
a. $\boxed{\limite_{x\to +\infty}\pa{\cfrac{e^{x}}{x}} = +\infty}\ $ et pour tout entier $n$, $\ \boxed{\limite_{x\to +\infty}\pa{\cfrac{e^{x}}{x^{n}}} = +\infty}$

b. $\boxed{\limite_{x\to -\infty}\pa{xe^{x}} = 0}\ $ et pour tout entier $n$, $\ \boxed{\limite_{x\to -\infty}x^{n}e^{x} = 0}$
```

```admonish demo
Démontrons que : $\ \limite_{x\to +\infty}\pa{\cfrac{e^{x}}{x^{n}}} = +\infty$

On pose $f(x) = e^{x} -\cfrac{x^{2}}{2}\qquad\Rarr f\prim(x) = e^{x} - x$

On calcule la dérivée de la dérivée $f\prim$ : $\ \left( f\prim(x) \right)' = e^{x} - 1\qquad\Rarr f\pprim(x) = e^{x} - 1$

Pour tout $x$ strictement positif, $f\pprim(x) = e^{x} - 1 > 0$.

On dresse alors le tableau de variations :

![](img/limite/2tabvar.png =300x center)

On en déduit que pour tout $x$ strictement positif, $f(x) > 0$ et donc

$$
\begin{array}{rcl}
	f(x)\gt 0 & \iff & e^{x} -\cfrac{x^{2}}{2}>0      \\\\
	          & \iff & e^{x} >\cfrac{x^{2}}{2}        \\\\
	          & \iff & \cfrac{e^{x}}{x} >\cfrac{x}{2}
\end{array}
$$

Comme $\limite_{x\to +\infty}\pa{\cfrac{x}{2}} = +\infty$, on en déduit par comparaison de limites que :

$$\boxed{\limite_{x\to +\infty}\pa{\cfrac{e^{x}}{x}} = +\infty}$$

---

Dans le cas général, on a $\cfrac{e^{x}}{x^{n}} = \cfrac{\left( e^{\tfrac{x}{n}} \right)^{n}}{x^{n}} = \left( \cfrac{e^{\tfrac{x}{n}}}{x} \right)^{n} = \left( \cfrac{1}{n} \times \cfrac{e^{\tfrac{x}{n}}}{\tfrac{x}{n}} \right)^{n}$

Or $\ \limite_{x\to +\infty}\pa{\cfrac{e^{\tfrac{x}{n}}}{\tfrac{x}{n}}} = +\infty\ $ car on a vu que $\limite_{X\to +\infty}\cfrac{e^{X}}{X} = +\infty$.

Donc $\ \limite_{x\to +\infty}\pa{\cfrac{1}{n}\times\cfrac{e^{\tfrac{x}{n}}}{\tfrac{x}{n}}} = +\infty\ $ car $n$ est positif.

Et donc $\ \limite_{x\to +\infty}\left( \cfrac{1}{n} \times \cfrac{e^{\tfrac{x}{n}}}{\tfrac{x}{n}} \right)^{n} = +\infty$, comme produit de $n$ limites infinies.

Soit : $\ \boxed{\limite_{x\to +\infty}\cfrac{e^{x}}{x^{n}} = +\infty}$
```

```admonish meth title="Méthode : Calculer une limite par croissance comparée"
:bulb: Calculer la limite suivante : $\limite_{x\to +\infty}\pa{\cfrac{e^{x} + x}{e^{x} - x^{2}}}$

---

Le dénominateur comprend une forme indéterminée de type $\infty -\infty$.

Levons l'indétermination : $\ \pa{\cfrac{e^{x} + x}{e^{x} - x^{2}}} = \pa{\cfrac{e^{x}}{e^{x}}}\times\pa{\cfrac{1 + \cfrac{x}{e^{x}}}{1 - \cfrac{x^{2}}{e^{x}}}} = \cfrac{\pa{1 + \cfrac{x}{e^{x}}}}{\pa{1 - \cfrac{x^{2}}{e^{x}}}}$

Par croissance comparée : $\ \limite_{x\to +\infty}\pa{\cfrac{e^{x}}{x}} = \limite_{x\to +\infty}\pa{\cfrac{e^{x}}{x^{2}}} = +\infty$

Donc, comme inverse de limites : $\ \limite_{x\to +\infty}\pa{\cfrac{x}{e^{x}}} = \limite_{x\to +\infty}\pa{\cfrac{x^{2}}{e^{x}}} = 0$

Donc $\ \limite_{x\to +\infty}\pa{1 + \cfrac{x}{e^{x}}} = \limite_{x\to +\infty}\pa{1 - \cfrac{x^{2}}{e^{x}}} = 1$

Donc $\ \limite_{x\to +\infty}\cfrac{\pa{1 + \cfrac{x}{e^{x}}}}{\pa{1 - \cfrac{x^{2}}{e^{x}}}} = \cfrac{1}{1} = 1$ et donc $\ \boxed{\limite_{x\to +\infty}\pa{\cfrac{e^{x} + x}{e^{x} - x^{2}}} = 1}$
```
