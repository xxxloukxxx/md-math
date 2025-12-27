# Fonction logarithme népérien (2/2)

<!-- toc -->

## Étude de la fonction logarithme népérien

### Continuité et dérivabilité

```admonish prop
La fonction **logarithme népérien** est continue sur $\left\rbrack 0; +\infty \right\lbrack$.
```

```admonish prop
La fonction **logarithme népérien** est dérivable sur $\left\rbrack 0; +\infty \right\lbrack$ et :

$$\boxed{\pa{\ln\pa{x}}'=\cfrac{1}{x}}$$
```

```admonish demo
_Rappel :_ $\pa{ e^{u(x)} }' = u'(x)e^{u(x)}$

En posant : $u(x) = \ln\pa{x}$, on a :

$$
	\begin{array}{rrcl}
		     & \pa{e^{u(x)}}'      & = & u'(x)\times e^{u(x)}                                                         \\\\
		\iff & \pa{e^{\ln\pa{x}}}' & = & (\ln\pa{x})'\times e^{\ln\pa{x}}                                             \\\\
		\iff & \pa{x}'             & = & (\ln\pa{x})' \times x                                                        \\\\
		\iff & 1                   & = & \pa{\ln\pa{x}}' \times x\qquad\iff\quad\boxed{\pa{\ln\pa{x}}'= \cfrac{1}{x}}
	\end{array}
$$
```

```admonish meth title="Méthode : Calculer une dérivée contenant des logarithmes"
:bulb: Dériver la fonction $f$ définie sur $\left\rbrack 0; +\infty \right\lbrack$ par : $f(x) = \cfrac{\pa{ \ln\pa{x} }^{2}}{x}$

---

On a : $f(x) = \cfrac{\pa{ \ln\pa{x} }^{2}}{x} = \cfrac{u(x)}{v(x)}$

Avec $\ \begin{cases}u(x) = \pa{ \ln\pa{x} }^{2}\\\\v(x) = x\end{cases}\ $ donc $\ \begin{cases}u'(x) = 2 \times \cfrac{1}{x} \times \ln\pa{x}=\cfrac{2\ln\pa{x}}{x}\\\\v'(x) = 1\end{cases}$

Donc :

$$
	\begin{array}{rcl}
		f'(x) & = & \cfrac{ u'v-uv' }{v^2}                                                    \\\\
		      & = & \cfrac{\tfrac{2\ln\pa{x}}{x} \times x - \pa{\ln\pa{x}}^{2} \times 1}{x^2} \\\\
		      & = & \cfrac{{2\ln\pa{x} - \pa{ \ln\pa{x} }}^{2}}{x^{2}}\qquad =  \cfrac{\ln\pa{x} \times (2 - \ln(x))}{x^{2}}
	\end{array}
$$
```

### Variations

```admonish prop
La fonction logarithme népérien est **strictement croissante** sur $\left\rbrack 0; +\infty \right\lbrack$.
```

```admonish demo
Pour tout réel $x$ strictement positif, $\pa{ \ln\pa{x} }' =\cfrac{1}{x}> 0$ donc la fonction logarithme est **croissante** sur $\rbrack 0;+\infty\lbrack$
```

### Convexité

```admonish prop
La fonction logarithme népérien est **concave** sur $\left\rbrack 0; +\infty \right\lbrack$.
```

```admonish demo
Pour tout réel $x$ strictement positif, $\pa{ \ln\pa{x} }' =\cfrac{1}{x}\ $ et $\ \pa{ \ln\pa{x} }'' = -\cfrac{1}{x^{2}} \lt 0$ donc la fonction logarithme népérien est **concave** sur $\left\rbrack 0; +\infty \right\lbrack$
```

### Limites aux bornes

```admonish prop
Pour tout réel $x$ strictement positifm p, on a :

$$\boxed{\limite_{x \to 0}{\ln\pa{x} = -\infty}}\quad\text{et}\quad\boxed{\limite_{x\to +\infty}{\ln\pa{x} = +\infty}}$$

On dresse le tableau de variations de la fonction logarithme népérien :

![](img/ln/tabvar1.png =500x center)
```

### Tangentes en $1$ et en $e$

```admonish prop
_Rappel :_ Une équation de la tangente à $\Cf$ au point d'abscisse $a$ est de la forme :

$$y = f'(a)(x - a) + f(a)$$

Dans le cas de la fonction logarithme népérien, l'équation est de la forme :

$$y=\tfrac{1}{a}\pa{x-a}+\ln\pa{a}$$

- **Au point d'abscisse $1$**, l'équation de la tangente est :

    $$y = \tfrac{1}{1}(x - 1) + \ln{(1)}\ \iff\ \boxed{y=x-1}$$

- **Au point d'abscisse $e$**, l'équation de la tangente est :

    $$y = \tfrac{1}{e}(x-e) + \ln\pa{e}\ \iff\ \boxed{y = \pa{\tfrac{1}{e}}x}$$
```

### Courbe représentative

```admonish prop
Valeurs particulières : $\ln{(1)} = 0$, $\ln{(e)} = 1$

![](img/ln/2image3.png =650x center)
```

## Croissance comparée des fonctions logarithme et puissances

### Limites en $0$ et $\pm\infty$

```admonish prop title="Propriété : Croissances comparées"
a. $\boxed{\limite_{x\to +\infty}\pa{\cfrac{\ln\pa{x}}{x}}=0}\ $ et pour tout $n\in\Z^{*}$, $\ \boxed{\limite_{x\to +\infty}\pa{\cfrac{\ln\pa{x}}{x^{n}}}=0}$

b. $\boxed{\limite_{x \to 0}\pa{x\ln\pa{x}} = 0}$ et pour tout $n\in\Z^{*}$, $\ \boxed{\limite_{x \to 0}\pa{x^{n}\ln\pa{x}} = 0}$
```

```admonish demo title="Démonstration du b. dans les cas où $n = 1$ (au programme)"
En posant $X = \ln\pa{x}$, on a : $x = e^{X}$.

Or, si $x$ tend vers $0$, alors $X = \ln\pa{x}$ tend vers $-\infty$.

Donc $\quad\limite_{x \to 0}\pa{{x\ln}{(x)}} = \limite_{X \to -\infty}\pa{X{e^{X}}} = 0\quad$ par croissance comparée de l'exp. et des puissances.
```

```admonish rem
Les **fonctions puissances** imposent leur limite devant la **fonction logarithme népérien**.
```

```admonish meth title="Méthode : Déterminer une limite par croissance comparée"
a. $\limite_{x\to +\infty}\pa{x-\ln\pa{x}}$

b. $\limite_{x\to +\infty}\pa{\cfrac{\ln\pa{x}}{x - 1}}$

c. $\limite_{x\to 0}\pa{\cfrac{1}{\pa{x^{2} + 1}\ln\pa{x}}}$

---

a. Il s'agit d'une forme indéterminée de type $\infty-\infty$.

> Levons l'indétermination : $x - \ln\pa{x} = x\pa{ 1 - \cfrac{\ln\pa{x}}{x} }$$
>
> Par croissance comparée : $\limite_{x\to +\infty}\pa{\cfrac{\ln\pa{x}}{x}} = 0$
>
> Donc : ${\limite_{x\to +\infty}1 -}\cfrac{\ln\pa{x}}{x} = 1$.
>
> Et donc, comme limite d'un produit : $\limite_{x\to +\infty}{x\pa{ 1 - \cfrac{\ln\pa{x}}{x} }} = +\infty$
>
> Soit : $\limite_{x\to +\infty}{x - \ln\pa{x}} = +\infty$.

b. Il s'agit d'une forme indéterminée de type $\cfrac{\infty}{\infty}$.

> Levons l'indétermination : $\cfrac{\ln\pa{x}}{x - 1} = \cfrac{\tfrac{\ln\pa{x}}{x}}{\tfrac{x - 1}{x}} = \cfrac{\tfrac{\ln\pa{x}}{x}}{1 - \tfrac{1}{x}}$
>
> On a : $\begin{cases}\limite_{x\to +\infty}\pa{\cfrac{\ln(x)}{x}} = 0\qquad\text{par croissance comparée} \\\\ \limite_{x\to +\infty}\pa{1 -\cfrac{1}{x}} = 1\end{cases}$
>
> Donc, comme limite d'un quotient : $\limite_{x\to +\infty}\pa{\cfrac{\tfrac{\ln\pa{x}}{x}}{1 - \tfrac{1}{x}}} = \cfrac{0}{1} = 0$
>
> Soit : $\limite_{x\to +\infty}\pa{\cfrac{\ln\pa{x}}{x - 1}} = 0$

c. $\limite_{x\to 0}\pa{\cfrac{1}{\pa{x^{2} + 1}\ln\pa{x}}}$

> On a : $\cfrac{1}{{(x}^{2} + 1)\ln\pa{x}} = \cfrac{1}{x^{2}\ln\pa{x} + \ln(x)}$
>
> Avec : $\begin{cases}
> \limite_{x \to 0}\pa{x^{2}\ln\pa{x}} = 0\qquad\text{par croissance comparée} \\\\
> \limite_{x \to 0}\pa{\ln\pa{x}} = -\infty \\\\
> \end{cases}$
>
> Donc, comme limite d'une somme : $\ \limite_{x \to 0}\pa{x^{2}\ln\pa{x} + \ln\pa{x}} = -\infty$
>
> Et donc, comme limite d'un quotient (inverse) : $\ \limite_{x \to 0}\pa{\cfrac{1}{x^{2}\ln\pa{x} + \ln(x)}} = 0$
>
> Soit : $\ \limite_{x \to 0}\pa{\cfrac{1}{{(x}^{2} + 1)\ln\pa{x}}} = 0$
```

## Études de fonctions

### Cas de fonctions contenant la fonction ${x \longmapsto \ln}{(x)}$

```admonish meth title="Méthode : Étudier les variations d'une fonction contenant des logarithmes"
a. Déterminer les variations de la fonction $f$ définie sur $\left\rbrack 0; +\infty \right\lbrack$ par :

$$f(x) = 3-x+2\ln\pa{x}$$

b. Étudier la convexité de la fonction $f$.

---

a. On a : $\ f'(x) = - 1 + \cfrac{2}{x} = \cfrac{2 - x}{x}$

> Comme $x > 0$, $f'(x)$ est du signe de $\ \pa{2-x}\ $ et $\ \pa{2-x}\ge 0\ \iff\ x\le 2$.
>
> Et on a : $\ f(2) = 3 - 2 + 2\ln{(2) = 1 + 2\ln{(2)}}$
>
> On dresse le tableau de variations :
>
> ![](img/ln/tabvar2.png =450x center)

b. Convexité

> On a :
>
> $$
> \begin{array}{rl}
> 		f''(x) & = \cfrac{- 1 \times x - (2 - x) \times 1}{x^{2}} \\\\
> 		       & = \cfrac{- x - 2 + x}{x^{2}}\qquad\qquad = \cfrac{- 2}{x^{2}} \lt 0
> \end{array}
> $$
>
> On en déduit que la fonction $f$ est concave sur $\left\rbrack 0; +\infty \right\lbrack$.
```

```admonish meth title="Méthode : Position relative de courbes"
:bulb: Étudier la position relative de la courbe de $f(x)=\ln(x)$ et de la droite d'équation $y = x$.

---

On considère la fonction $g$ définie sur $\ \left\rbrack 0; +\infty \right\lbrack$ par $\ g(x) = x - \ln\pa{x}$

On a : $\ g'(x) = 1 - \cfrac{1}{x} = \cfrac{x - 1}{x}$

Comme $x$ est strictement positif, $\ g'(x)$ est du signe de $\ (x-1)$

On a : $\ (x-1)\ge 0\ \iff\ x\ge 1$

Et on a : $g(1) = 1 - \ln{(1)} = 1$

On dresse ainsi le tableau de variations :

![](img/ln/tabvar3.png =500x center)

On en déduit que pour tout $x$ de $\left\rbrack 0; +\infty \right\lbrack$, on a : $g(x) = x-\ln\pa{x} \ge 1 > 0\ $ soit $\ x > \ln\pa{x}$.

La fonction logarithme est située en dessous de la droite d'équation $y = x$.
```

### Cas de fonctions contenant la fonction composée ${x \longmapsto \ln}{(u(x))}$

```admonish prop
|   Fonction   |      Dérivée      |
| :----------: | :---------------: |
| $$\ln{(u)}$$ | $$\cfrac{u'}{u}$$ |
```

```admonish demo
> On pose : $v(x) = \ln\pa{x}$, donc : $\ v'(x) = \pa{ \ln\pa{x} }' = \cfrac{1}{x}$
>
> Donc :
>
> $$
> \begin{array}{rcl}
> 	\pa{ \ln{u(x)} }' & = & \pa{ v(u(x)) }'                                           \\\\
> 	                  & = & v'{\pa{ u(x) } \times}u'(x)                               \\\\
> 	                  &   & \text{selon la dérivée d'une fonction composée}      \\\\
> 	                  & = & \cfrac{1}{u(x)} \times u'(x) \qquad = \cfrac{u'(x)}{u(x)} \\\\
> \end{array}
> $$
```

```admonish meth title="Méthode : Dériver des fonctions du type $ln(u)$"
:bulb: Dériver la fonction $f$ définie sur $\left\rbrack 0;2 \right\lbrack$ par :

$$f(x) = \ln\pa{ 2x - x^{2} }$$

---

> On a : $\ f(x) = \ln\pa{ 2x - x^{2} } = \ln{(u(x))}\ $ avec $\ u(x) = 2x - x^{2} \to u'(x) = 2 - 2x$
>
> Donc : $\ f'(x) = \cfrac{u'(x)}{u(x)} = \cfrac{2 - 2x}{2x - x^{2}}$
```

```admonish meth title="Méthode : Étudier une fonction du type $ln{(u)}$"
On considère la fonction $f$ définie sur $\left\rbrack - 2;1 \right\lbrack$ par : $\ f(x) = \ln\pa{ \cfrac{x + 2}{1 - x} }$

a. Calculer les limites de $f$ aux bornes de son ensemble de définition et en déduire les équations des asymptotes à la courbe.

b. Déterminer le sens de variations de la fonction $f$.

c. Tracer la courbe représentative de $f$.

---

a. _Limites aux bornes de l'ensemble de définition_

> - $\limite_{x \to - 2}{f(x)}$
>
>     On a : $\ \begin{cases}\limite_{x \to - 2}\pa{x + 2} = 0 \\\\ \limite_{x \to - 2}\pa{1 - x} = 3\end{cases}$
>
>     Donc, comme limite d'un quotient : $\ \limite_{x \to - 2}\pa{\cfrac{x + 2}{1 - x}} = 0$
>
>     Et donc, comme limite d'une fonction composée : $\ \limite_{x \to - 2}\pa{\ln\pa{ \cfrac{x + 2}{1 - x} }} = -\infty$
>
> - $\limite_{x \to 1}{f(x)}$
>
>     On a : $\begin{cases}\limite_{x \to 1}\pa{x + 2} = 3\\\\ \limite_{x \to 1}\pa{1 - x} = 0^{+}\quad\text{car}\quad x \lt 1\end{cases}$
>
>     Donc, comme limite d'un quotient : $\ \limite_{x \to 1}\pa{\cfrac{x + 2}{1 - x}} = +\infty$
>
>     Et donc, comme limite d'une fonction composée : $\ \limite_{x \to 1}{\ln\pa{ \cfrac{x + 2}{1 - x} }} = +\infty$
>
> La courbe de fonction $f$ admet deux asymptotes verticales d'équations : $\ x = -2\ $ et $\ x = 1$

b. _Variations de $f$_

> On a : $\ f(x) = \ln\pa{ \cfrac{x + 2}{1 - x} } = \ln{(u(x))}\ $ avec $\ u(x) = \cfrac{x + 2}{1 - x}\ $
>
> Derivons $u(x)$ :
>
> $${u}'(x)=\cfrac{1\times(1-x)-(x+2)\times(-1)}{(1-x)^{2}}=\cfrac{1-x+x+2}{(1-x)^{2}}=\cfrac{3}{(1-x)^{2}}$$
>
> Donc :
>
> $$f(x)=\ln\pa{u(x)}\quad\iff\quad f'(x)=\cfrac{u'(x)}{u(x)}=\cfrac{\cfrac{3}{(1-x)^{2}}}{u(x)}$$
>
> On a, sur $\left\rbrack -2;1 \right\lbrack$, $u(x)=\pa{\cfrac{x+2}{1-x}}>0$ et $\pa{\cfrac{3}{(1 - x)^{2}}}>0\quad$ donc $\ f'(x) > 0$
>
> On présente le sens de variations de $f$ dans le tableau :
>
> ![](img/ln/tabvar4.png =300x center)

c. _Représentation graphique_

![](img/ln/2image6.png =750x center)
```
