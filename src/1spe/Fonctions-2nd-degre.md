# Fonctions du 2<sup>nd</sup> degré

<!-- toc -->

## Définition et propriétés

```admonish def
On appelle **fonction polynôme de degré 2** toute fonction $f$ définie sur $\mathbb{R}$ par une expression de la forme :

$$f\left( x \right) = ax^{2} + bx + c$$

où les coefficients **a**, **b** et **c** sont des réels donnés avec $a \neq 0$.
```

```admonish rem
Une fonction polynôme de degré 2 s'appelle également fonction **trinôme du second degré** ou par abus de langage **"trinôme"**.
```

```admonish ex
- $f\left( x \right) = 3x^{2} - 7x + 3$

> :point_right: Fonction du 2<sup>nd</sup> degré avec $\begin{cases}a=3\\\\b=-7\\\\c=3\end{cases}$

---

- $g\left( x \right) = \cfrac{1}{2}x^{2} - 5x + \cfrac{3}{5}$

> :point_right: Fonction du 2<sup>nd</sup> degré avec $\begin{cases}a=\cfrac{1}{2}\\\\b=-5\\\\c=\cfrac{3}{5}\end{cases}$

---

- $h\left( x \right) = 4 - 2x^{2}$

> :point_right: Fonction du 2<sup>nd</sup> degré avec $\begin{cases}a=-2\\\\b=0\\\\c=4\end{cases}$

---

- $k\left( x \right) = \left( x - 4 \right)\left( 5 - 2x \right)$

> :point_right: Fonction du 2<sup>nd</sup> degré car :
>
> $$\begin{aligned}k(x)&=(x-4)(5-2x)\\\\&=5x-2x^2-20+8x\\\\&=-2x^2+13x-20\end{aligned}$$
>
> Donc $k(x)=-2x^2+13x-20  \Rightarrow \begin{cases}a=-2\\\\b=13\\\\c=-20\end{cases}$

---

- $m\left( x \right) = 5x - 3$

> :warning: Fonction polynôme de degré 1 (fonction affine).

---

- $n\left( x \right) = 5x^{4} - 7x^{3} + 3x - 8$

> :warning: Fonction polynôme de degré 4.
```

## Variations et représentation graphique

```admonish ex
Soit $f(x) = 2x^2-4x+5$.

Pour représenter $f$ dans un repère, nous pouvons calculer quelques valeurs de $f(x)$.

- $f(-2)=2\times (-2)^2-4\times (-2)+5=21$
- $f(-1)=2\times (-1)^2-4\times (-1)+5=11$
- $f(0)=2\times (0)^2-4\times (0)+5=5$
- $\ldots$

|  $x$   | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$  | $4$  |
| :----: | :--: | :--: | :-: | :-: | :-: | :--: | :--: |
| $f(x)$ | $21$ | $11$ | $5$ | $3$ | $5$ | $11$ | $21$ |

La représentation graphique d'une fonction polynôme de degré 2 est une **parabole**.

![](img/2nd/01.png =500x center)
```

### Propriété : Minimum et maximum

```admonish prop title="Propriété : Minimum et maximum"
Soit $f$ une fonction polynôme de degré 2 définie par $f(x) = ax^2+bx+c$, avec $a \neq 0$.

- Si $a > 0$, $f$ admet un **minimum** pour $x=\cfrac{-b}{2a}$.
  - Ce **minimum** est égal à $f\left(\cfrac{-b}{2a}\right)$.
- Si $a < 0$, $f$ admet un **maximum** pour $x=\cfrac{-b}{2a}$.
  - Ce **maximum** est égal à $f\left(\cfrac{-b}{2a}\right)$.

On appelle $\alpha$ la valeur $\left(\cfrac{-b}{2a}\right)$ et $\beta$ la valeur $f\left(\cfrac{-b}{2a}\right)$.

$$\boxed{\alpha=\cfrac{-b}{2a}\qquad\beta=f\left(\cfrac{-b}{2a}\right)}$$

![](img/2nd/02a.png =500x center)
```

### Propriété : Variations

```admonish prop title="Propriété : Variations"
![](img/2nd/03.png =900x center)
```

```admonish note
Il existe un moyen pour se souvenir du résultat précedent

![](img/2nd/00.png =500x center)
```

```admonish meth title="Méthode : Etudier les variations d'une fonction du 2<sup>nd</sup> degré"
Soit $f$ définie sur $\mathbb{R}$ par $f\left( x \right) = -x^{2} + 4x - 1$.

On a : $\begin{cases}a=-1\\\\b=4\\\\c=-1\end{cases}$

Donc :

- $\alpha=\cfrac{-b}{2a} = \cfrac{-4}{2\times (-1)}= 2$
- $\beta=f(\alpha)=f(2)=-(2)^2+4\times 2 -1 =3$

Le sommet de la parabole est le point $S(2;3)$.

$a<0$ donc le tableau de variation de $f$ est :

![](img/2nd/04.png =500x center)

La représentation de $f$ est :

![](img/2nd/05.png =300x center)
```

## Forme factorisée

```admonish rem
Il se peut que le polynôme du 2<sup>nd</sup> degré ne se présente pas sous la forme **developpée** mais sous une forme **factorisée** comme par exemple :

$$f(x)= (x-1)(x-2)$$

En effet :

$$\begin{aligned}
		f(x) & = (x-1)(x-2)                                                           \\\\
		     & = x^2-2x-1x+2                                                          \\\\
		     & = x^2-3x+2\qquad\Rightarrow \begin{cases}a=1\\\\b=-3\\\\c=2\end{cases}
	\end{aligned}$$
```

### Définition : Forme factorisée

```admonish def title="Définition : Forme factorisée"
Soit $f$ une fonction définie sur $\mathbb{R}$ tel que :

$$f(x)=a(x-x_1)(x-x_2)$$

$f$ est la forme **factorisée** d'une fonction du 2<sup>nd</sup> degré.

$x_1$ et $x_2$ sont les **racines** de $f$
```

```admonish rem
les **racines** de $f$ sont solutions de l'équation $f(x)=0$

- $f(x_1) = a(x_1 - x_1)(x_1 - x_2)=0$
- $f(x_2) = a(x_2 - x_1)(x_2 - x_2)=0$
```

```admonish ex

- $f(x)=3(x-1)(x+2)\ =\pa{x-1}\pa{x-\pa{-2}}$

> $f$ est une fonction du 2$^\text{nd}$ degré sous forme factorisée avec $\begin{cases}a=3\\\\x_1=1\\\\x_2=-2\end{cases}$

---

- $f(x)=(2x-6)(x-12)$

> $f$ est une fonction du 2<sup>nd</sup> degré sous forme factorisée avec $\begin{cases}a=3\\\\x_1=1\\\\x_2=-2\end{cases}$
>
> Pour faire apparaître la forme factorisée il faut modifier l'écriture de $(2x-6)$
>
> $(2x-6)=2(x-3)~$ donc $~f(x)=2(x-3)(x-12)$
>
> $f$ est une fonction du 2<sup>nd</sup> degré avec $\begin{cases}a=2\\\\x_1=3\\\\x_2=12\end{cases}$

---

- $f(x)=(3-x)(2x+1)$

> On a $(3-x)=-(x-3)\quad$ et $\quad(2x+1)=2\left(x+\cfrac{1}{2}\right)$
>
> Donc $f(x)=-(x-3)\times 2\left(x+\cfrac{1}{2}\right)=-2(x-3)\left(x+\cfrac{1}{2}\right)$
>
> $f$ est une fonction du 2<sup>nd</sup> degré avec $\begin{cases}a=-2\\\\x_1=3\\\\x_2=\cfrac{-1}{2}\end{cases}$
```

### Propriété : Racines de $f$

```admonish prop title="Propriété : Racines de $f$"
Soit $f$ une fonction définie sur $\mathbb{R}$ tel que $f(x)=ax^2+bx+c$ et $x_1$, $x_2$ les solutions de l'équation $f(x)=0$.

Alors la forme **factorisée** de $f$ est : $f(x)=a(x-x_1)(x-x_2)$
```

```admonish ex
Soit $f(x)=3(x-1)(x+2)$ définie sur $\R$

$f$ est une fonction du 2<sup>nd</sup> degré sous forme factorisée avec $a=3$ , $x_1=1$ et $x_2=-2$.

D'autre part, $f(x)=3\left(x^2 + 2x - 1x -2\right)=3x^2+3x-6$

Donc $\begin{cases}x_1=1\\\\x_2=-2\end{cases}$ sont solutions de l'équation $\ 3x^2+3x-6=0$
```

<!-- TODO : J'en suis la -->

## Résolution d'équations du 2<sup>nd</sup> degré

```admonish rem
Résoudre une équation du 2<sup>nd</sup> degré, c'est résoudre une équation du type

$$ax^2+bx+c=0$$
```

### Définition : Discriminant

```admonish def title="Définition : Discriminant"
On appelle **discriminant** du trinôme $ax^{2} + bx + c$, le nombre réel, noté $\Delta$, égal à $b^{2} - 4ac$.

$$\boxed{\Delta = b^2-4ac}$$
```

### Propriété : Solutions de : $ax^2+bx+c=0$

```admonish prop title="Propriété : Solutions de $ax^2+bx+c=0$"
Soit $\Delta$ le discriminant du trinôme $ax^{2} + bx + c$.

- Si $\Delta < 0$ : L'équation $ax^{2} + bx + c = 0$ n'a **pas de solution réelle**.
- Si $\Delta = 0$ : L'équation $ax^{2} + bx + c = 0$ a **une unique solution** : $\boxed{x_{0}=\cfrac{- b}{2a}}$

- Si $\Delta > 0$ : L'équation $ax^{2} + bx + c = 0$ a **deux solutions distinctes** :

$$\boxed{x_{1} =\cfrac{- b - \sqrt{\Delta}}{2a}\qquad x_{2} =\cfrac{- b + \sqrt{\Delta}}{2a}}$$
```

```admonish ex
- On cherche à résoudre $2x^{2} - x - 6 = 0$

> Calculons le discriminant :
>
> $a=2$, $b=-1$ et $c=-6$ donc
>
> $$\Delta = b^{2} - 4ac = (-1)^{2} - 4\times 2 \times (-6) = 49>0$$
>
> Comme $\Delta > 0$, l'équation possède deux solutions distinctes :
>
> $$x_{1} =\cfrac{- b - \sqrt{\Delta}}{2a}\qquad x_{2} =\cfrac{- b + \sqrt{\Delta}}{2a}$$
>
> |                                                              Calcul de $x_1$                                                               |                                                        Calcul de $x_2$                                                        |
> | :----------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
> | $\begin{aligned}x_{1} &=\cfrac{-b-\sqrt{\Delta}}{2a}\\\\&=\cfrac{-\left(-1\right)-\sqrt{49}}{2\times 2}\\\\&=-\cfrac{3}{2}\end{aligned}$ | $\begin{aligned}x_{2}&=\cfrac{-b+\sqrt{\Delta}}{2a}\\\\&=\cfrac{-\left(-1\right)+\sqrt{49}}{2\times 2}\\\\&=2\end{aligned}$ |
>
> Les solutions de l'équation $2x^{2} - x - 6 = 0$ sont $S=\left\\{ -\cfrac{3}{2};2 \right\\}$
```

```admonish ex
- $2x^{2} - 3x + \dfrac{9}{8} = 0$

> Calculons le discriminant :
>
> $a=2$, $b=-3$ et $c=\cfrac{9}{8}~$ donc $\quad\Delta = b^{2} - 4ac = (-3)^{2}- 4\times 2 \times \cfrac{9}{8} = 0$
>
> Comme $\Delta = 0$, l'équation possède une unique solution :
>
> $$x_{0}=-\cfrac{b}{2a}=-\cfrac{-3}{2 \times 2}=\cfrac{3}{4}$$
```

```admonish ex
- $x^{2} + 3x + 10 = 0$

> $a=1$, $b=3$ et $c=10$ donc :
>
> $$\Delta = b^{2} - 4ac = 3^{2} - 4 \times 1 \times 10 = -31$$
>
> Comme $\Delta < 0$, l'équation ne possède pas de solution réelle.
```

### Propriété : Somme et produit de racines

```admonish prop title="Propriété : Somme et produit de racines"
La somme $S$ et le produit $P$ des **racines** d’un polynôme du 2<sup>nd</sup> degré sont donnés par :

$$S=\cfrac{-b}{a}\qquad P=\cfrac{c}{a}$$
```

```admonish demo
Soit $x_1$ et $x_2$ les solutions de $x^2+bx+c=0$ alors
$$x_{1}=\cfrac{-b-\sqrt{\Delta}}{2a}\qquad x_{2}=\cfrac{-b+\sqrt{\Delta}}{2a}$$

Donc, la somme des **racines** est $S=x_1 + x_2$ :

$\begin{aligned}
		S & = x_1 + x_2                                                                          \\\\
		  & = \cfrac{-b-\sqrt{\Delta}}{2a}+\cfrac{-b+\sqrt{\Delta}}{2a}                          \\\\
		  & = \cfrac{(-b-\sqrt{\Delta})+(-b+\sqrt{\Delta})}{2a}= \cfrac{-2b}{2a} = \cfrac{-b}{a}
	\end{aligned}$

Le produit des **racines** est $P=x_1 \times x_2$ :

$\begin{aligned}
		P & = x_1 \times x_2                                                                                                                                                                         \\\\
		  & = \cfrac{-b-\sqrt{\Delta}}{2a} \times \cfrac{-b+\sqrt{\Delta}}{2a} = \cfrac{(-b-\sqrt{\Delta})\times(-b+\sqrt{\Delta})}{2a\times 2a}                                                     \\\\
		  & = \cfrac{ (-b)^2 + \left((-b) \times \sqrt{\Delta}\right) + \left(\left(-\sqrt{\Delta}\right) \times (-b)\right) + \left(\left(-\sqrt{\Delta}\right) \times \sqrt{\Delta}\right) }{4a^2} \\\\
		  & = \cfrac{b^2 - \Delta}{4a^2} = \cfrac{b^2 - (b^2-4ac)}{4a^2} = \cfrac{4ac}{4a^2} = \cfrac{c}{a}
	\end{aligned}$
```

### Propriété : Forme factorisée de $ax^2+bx+c$

```admonish prop title="Propriété : Forme factorisée de $ax^2+bx+c$"
Soit $f$ une fonction polynôme de degré $2$ définie sur par $f\left( x \right) = ax^{2} + bx + c$.

- Si $\Delta = 0$ : Pour tout réel $x$, on a : $f\left( x \right) = a\left( x - x_{0} \right)^{2}$.

- Si $\Delta > 0$ : Pour tout réel $x$, on a : $f\left( x \right) = a\left( x - x_{1} \right)\left( x - x_{2} \right)$.
```

```admonish rem
Si $\Delta < 0$, il n’existe pas de forme factorisée de $f$.
```

```admonish meth title="Méthode : Factoriser un trinôme"
Factorisons le trinôme ${4x}^{2} + 19x - 5$

On cherche les racines du trinôme ${4x}^{2} + 19x - 5$

On a $a=4$ , $b=19$ et $c=-5$ donc

$$\Delta = 19^2 - 4 \times 4 \times (-5) = 441$$

Les racines du trinôme sont :

|                                       Calcul de $x_1$                                        |                                             Calcul de $x_2$                                              |
| :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
| $\begin{aligned}x_{1} & = \cfrac{-19 - \sqrt{441}}{2 \times 4}\\\\& = -5\end{aligned}\qquad$ | $\begin{aligned}x_{2} & = \cfrac{- 19 + \sqrt{441}}{2 \times 4}\\\\ & = \cfrac{1}{4}\end{aligned}\qquad$ |

On a donc :

$\begin{aligned}
		{4x}^{2}+19x-5 & = 4\left(x-\left(-5\right)\right)\left(x-\cfrac{1}{4}\right)           \\\\
		               & = 4\left(x+5\right)\left(x-\cfrac{1}{4}\right) \quad=\quad (x+5)(4x-1)
	\end{aligned}$

Une vérification à l'aide de la calculatrice n'est jamais inutile \! On peut lire une valeur approchée des racines sur l'axe des abscisses.

|              $x_1$               |              $x_2$               |
| :------------------------------: | :------------------------------: |
| ![](img/2nd/06.png =300x center) | ![](img/2nd/07.png =300x center) |
```

```admonish ex

Factorisons le trinôme ${9x}^{2} - 6x + 1$

On cherche les racines du trinôme ${9x}^{2} - 6x + 1$

On a $a=9$ , $b=-6$ et $c=1$ donc $\Delta = (-6)^2 - 4 \times 9 \times (1) = 0$

La racine du trinôme est : $x_{0} = \cfrac{-(-6)}{2 \times 9} = \cfrac{1}{3}$

On a donc : ${9x}^{2}-6x+1=9\left(x-\cfrac{1}{3}\right)^2$
```

### Propriété : Les différentes représentations possibles de $f$

```admonish prop title="Propriété : Les différentes représentations possibles de $f$"
En fonction du signe de $a$ et de $\Delta$, nous pouvons en déduire les représentations de $f$.

|             Pour $a>0$              |                                     |                                     |
| :---------------------------------: | :---------------------------------: | :---------------------------------: |
|             $\Delta>0$              |             $\Delta=0$              |             $\Delta<0$              |
| ![](img/2nd/img11.png =200x center) | ![](img/2nd/img13.png =200x center) | ![](img/2nd/img12.png =200x center) |

|             Pour $a<0$              |                                     |                                     |
| :---------------------------------: | :---------------------------------: | :---------------------------------: |
|             $\Delta>0$              |             $\Delta=0$              |             $\Delta<0$              |
| ![](img/2nd/img14.png =200x center) | ![](img/2nd/img15.png =200x center) | ![](img/2nd/img16.png =200x center) |
```

### Propriété : Signe de : $ax^2+bx+c$

```admonish prop title="Propriété : Signe de : $ax^2+bx+c$"
En fonction du signe de $a$ et de $\Delta$, nous pouvons en déduire le signe de $f$.

| Pour $a>0$ |                                   |                                     |
| :--------: | :-------------------------------: | :---------------------------------: |
| $\Delta>0$ | ![](img/2nd/s11.png =400x center) | ![](img/2nd/img11.png =100x center) |
| $\Delta=0$ | ![](img/2nd/s21.png =400x center) | ![](img/2nd/img13.png =100x center) |
| $\Delta<0$ | ![](img/2nd/s31.png =400x center) | ![](img/2nd/img12.png =100x center) |

---

| Pour $a<0$ |                                   |                                     |
| :--------: | :-------------------------------: | :---------------------------------: |
| $\Delta>0$ | ![](img/2nd/s12.png =400x center) | ![](img/2nd/img14.png =100x center) |
| $\Delta=0$ | ![](img/2nd/s22.png =400x center) | ![](img/2nd/img15.png =100x center) |
| $\Delta<0$ | ![](img/2nd/s32.png =400x center) | ![](img/2nd/img16.png =100x center) |
```

## Forme canonique

### Définition : Forme canonique

```admonish def title="Définition : Forme canonique"
Toute fonction polynôme $f$ de degré 2 définie sur $\mathbb{R}$ par $f\left( x \right) = ax^{2} + bx + c$ peut s'écrire sous la forme :

$$f\left( x \right) = a\left( x - \alpha \right)^{2} + \beta$$

où $\alpha$ et $\beta$ sont deux nombres réels.

Cette dernière écriture s'appelle la **forme canonique** de $f$.
```

```admonish ex
$f(x)=2(x-1)^2+3$ est une fonction du 2<sup>nd</sup> degré sous forme **canonique** avec $a=2$ , $\alpha=1$ et $\beta=3$.

En effet,

$\begin{aligned}f(x) & = 2(x-1)^2+3 \\\\ & = 2(x^2-2x+1)+3 \\\\ & = 2x^2-4x+2+3 = 2x^2-4x+5\end{aligned}$

Donc $a=2$ , $b=-4$ et $c=5$
```

```admonish meth title="Méthode : Déterminer la forme canonique d'une fonction du 2<sup>nd</sup> degré"
Soit la fonction $f$ définie sur $\mathbb{R}$ par : $f\left( x \right) = 2x^{2} - 20x + 10$. On veut exprimer la fonction $f$ sous sa forme canonique.

$\begin{aligned}
		f\left(x\right) & = 2x^{2}-20x+10                                        \\\\
		                & = 2\left\lbrack x^{2}-10x\right\rbrack+10              \\\\
		                & = 2\left\lbrack x^{2}-10x+25-25\right\rbrack+10        \\\\
		                & = 2\left\lbrack\left(x-5\right)^{2}-25\right\rbrack+10 \\\\
		                & = 2\left(x-5\right)^{2}-50+10                          \\\\
		                & = 2\left(x-5\right)^{2}-40
	\end{aligned}$

On a donc $\alpha=5$ et $\beta=-40$

$f(x) = 2\left( x - 5 \right)^{2} - 40$ est la forme **canonique** de $f$.
```

```admonish demo
$$\begin{aligned}
		f\left( x \right) & =  ax^{2} + bx + c                                                                                                  \\\\
		                  & =  a\left\lbrack x^{2}+\cfrac{b}{a}x\right\rbrack + c                                                               \\\\
		                  & =  a\left\lbrack x^{2}+\cfrac{b}{a}x+\left(\cfrac{b}{2a}\right)^{2}-\left(\cfrac{b}{2a}\right)^{2}\right\rbrack + c \\\\
		                  & =  a\left\lbrack \left( x + \cfrac{b}{2a} \right)^{2} - \left( \cfrac{b}{2a} \right)^{2} \right\rbrack + c          \\\\
		                  & =  a\left( x + \cfrac{b}{2a} \right)^{2} - a\cfrac{b^{2}}{4a^{2}} + c                                               \\\\
		                  & = a\left( x + \cfrac{b}{2a} \right)^{2} - \cfrac{b^{2}}{4a} + c                                                     \\\\
		                  & =  a\left( x + \cfrac{b}{2a} \right)^{2} - \cfrac{b^{2} - 4ac}{4a}\quad = a\left( x - \alpha \right)^{2} + \beta
	\end{aligned}$$

avec $\quad\alpha = \cfrac{-b}{2a}\quad$ et $\quad\beta = f(\alpha) = \cfrac{-\pa{b^{2} - 4ac}}{4a}$
```

```admonish rem
Pour écrire un trinôme sous sa forme canonique, il est possible d’utiliser les deux dernières formules donnant $\alpha$ et $\beta$

$$\alpha = \cfrac{-b}{2a}\qquad\beta = f(\alpha) = \cfrac{-\pa{b^{2} - 4ac}}{4a}$$
```

```admonish meth title="Méthode : Déterminer la forme canonique d'une fonction du 2<sup>nd</sup> degré"
Soit la fonction $f$ définie sur $\mathbb{R}$ par : $f\left( x \right) = 2x^{2} - 20x + 10$.

On veut exprimer la fonction $f$ sous sa forme canonique.

On a $a=2$ , $b=-20$ et $c=10$ donc

$$
\begin{aligned}
	\alpha & = -\cfrac{b}{2a}              \\\\
	       & = -\cfrac{-20}{2\times 2} = 5
\end{aligned}
$$

Calculons $\beta$ :

$$
\begin{aligned}
	\beta & = f(\alpha)                       \\\\
	      & = 2\times 5^{2} - 20\times 5 + 10 \\\\
	      & = 50-100+10 = 40
\end{aligned}
$$

On a donc $\alpha=5\quad$ et $\quad\beta=-40\quad$ donc $\quad f(x) = 2\left( x - 5 \right)^{2} - 40$
```

### Propriété : Minimum et maximum à l'aide de la forme canonique

```admonish prop title="Propriété : Minimum et maximum à l'aide de la forme canonique"
Soit $f$ une fonction polynôme de degré 2 définie par $f(x) = a\left( x - \alpha \right)^{2} + \beta$

- Si $a > 0$, $f$ admet un **minimum** pour $x = \alpha$. Ce **minimum** est égal à $\beta$.
- Si $a < 0$, $f$ admet un **maximum** pour $x = \alpha$. Ce **maximum** est égal à $\beta$.
```

```admonish rem
On peut retenir que $f$ admet un maximum (ou un minimum) pour $x = -\cfrac{b}{2a}$
```

```admonish ex
Soit la fonction $f$ donnée sous sa forme canonique par : $f\left( x \right) = 2\left( x - 1 \right)^{2} + 3$

On a :

$\begin{aligned}
		                     & \left( x - 1 \right)^{2} > 0                                        \\\\
		\Leftrightarrow\quad & 2\left( x - 1 \right)^{2} >  0                                      \\\\
		\Leftrightarrow\quad & 2\left( x - 1 \right)^{2} +3 > 3 \quad\Leftrightarrow\quad f(x) > 3 \\\\
	\end{aligned}$

Or $f\left( 1 \right) = 3$ donc $f\left( x \right) \geq f(1)$.

$f$ admet donc un minimum en $x=1$. Ce minimum est égal à $3$.
```

```admonish meth title="Méthode : Déterminer les caractéristiques d’une parabole"
Déterminons l’axe de symétrie et le sommet de la parabole d’équation $y = 2x^{2} - 12x + 1$

> La parabole possède un axe de symétrie d'équation $x = -\cfrac{b}{2a}$
>
> $$x = -\cfrac{- 12}{2 \times 2} = 3$$
>
> La droite d’équation $x = 3$ est donc axe de symétrie de la parabole.
>
> ![](img/2nd/17.png =300x center)
>
> Les coordonnées de son sommet sont $\left( - \cfrac{b}{2a}\ ;\ f\left( - \cfrac{b}{2a} \right) \right)$
>
> Soit :
>
> $$\left( 3\ ;2 \times 3^{2} - 12 \times 3 + 1 \right) = \left( 3\ ;\ - 17 \right)$$
>
> Le point $S\pa{3\ ;\ -17}$ est le sommet de la parabole.
>
>$a = 2 > 0$, ce sommet correspond à un minimum.
```

```admonish demo title="Démonstration : Solutions de l'équation : $ax^2+bx+c=0$"
La fonction $f$ définie sur $\mathbb{R}$ par $f\left( x \right) = ax^{2} + bx + c$ peut s'écrire sous sa forme canonique :

$f(x) = a\left( x - \alpha \right)^{2} + \beta$ avec $\ \alpha = -\cfrac{b}{2a}\ $ et $\ \beta =-\cfrac{b^{2} - 4ac}{4a}$.

Donc :

$ax^{2} + bx + c = 0$ peut s’écrire :

$$\begin{aligned}
		a\left( x + \cfrac{b}{2a} \right)^{2} - \cfrac{b^{2} - 4ac}{4a} & = 0                                                  \\\\
		a\left( x + \cfrac{b}{2a} \right)^{2} - \cfrac{\Delta}{4a}      & = 0                                                  \\\\
		a\left( x + \cfrac{b}{2a} \right)^{2}                           & = \cfrac{\Delta}{4a}                                 \\\\
		\left( x + \cfrac{b}{2a} \right)^{2}                            & = \cfrac{\Delta}{4a^{2}} \text{\quad car  } a \neq 0
	\end{aligned}$$

> - Si $\Delta < 0$ :
>
>   Comme un carré ne peut être négatif $\left( \cfrac{\Delta}{4a^{2}} < 0 \right)$, l'équation $ax^{2} + bx + c = 0$ n'a pas de solution.

> - Si $\Delta = 0$ :
>
>   L'équation $ax^{2} + bx + c = 0$ peut s'écrire : $\left( x + \cfrac{b}{2a} \right)^{2} = 0$
>   L'équation n'a qu'une seule solution : $x = \cfrac{-b}{2a}$

> - Si $\Delta > 0$ :
>
> L'équation $ax^{2} + bx + c = 0$ est équivalente à :
>
> |                                                                                                                                    Solution n°1                                                                                                                                    |                                                                                                                                    Solution n°2                                                                                                                                    |
> | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
> | $\begin{aligned}x_1 + \cfrac{b}{2a} & = +\sqrt{\cfrac{\Delta}{4a^{2}}} \\\\ x_1 & = +\sqrt{\cfrac{\Delta}{4a^{2}}} - \cfrac{b}{2a} \\\\ x_1 & = \cfrac{+\sqrt{\Delta}}{2a} - \cfrac{b}{2a} \\\\ x_1 & = \cfrac{+\sqrt{\Delta}-b}{2a}  = \cfrac{-b+\sqrt{\Delta}}{2a}\end{aligned}$ | $\begin{aligned}x_2 + \cfrac{b}{2a}  & = -\sqrt{\cfrac{\Delta}{4a^{2}}} \\\\x_2  & = -\sqrt{\cfrac{\Delta}{4a^{2}}} - \cfrac{b}{2a} \\\\x_2  & = \cfrac{-\sqrt{\Delta}}{2a} - \cfrac{b}{2a} \\\\x_2 & = \cfrac{-\sqrt{\Delta}-b}{2a}  = \cfrac{-b-\sqrt{\Delta}}{2a}\end{aligned}$ |
>

L'équation a deux solutions distinctes :

$$x_1 = \cfrac{-b+\sqrt{\Delta}}{2a}\qquad x_2 = \cfrac{-b-\sqrt{\Delta}}{2a}$$
```
