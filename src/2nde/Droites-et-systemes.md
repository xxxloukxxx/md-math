# Droites et systèmes

<!-- toc -->

## Équations de droites

### Definition : Équation réduite de droites

```admonish def
L'ensemble des points $M$ de coordonnées $(x;y)$, solution de l'équation $y=mx+p$, est une droite.

L'équation de la forme $y=mx+p$ est appelée **équation réduite de droite**.
```

```admonish ex
![](img/syst/01.png#right =200x)

$y=3x+1$ est une équation de droite.

Les solutions sont les coordonnées des points de la droite $(d)$.

On dit aussi que la droite $(d)$ a pour équation $y=3x+1$

Le point $A(0;1)$ est une solution de l´equation car ses coordonnées vérifient l´equation, car :

$$3\times x_A+1=3\times 0+1=1=y_A$$

Donc $\ y_A=3x_A+1\iff A\in (d)$

De même, $B(-2;-5)\in (d)$

Représentation des solutions de l'équation de droite :

$$y=3x+1$$
```

```admonish rem
- $y=mx+p$ est l'équation **réduite** de la droite $(d)$.
- $m$ est le **coefficient directeur** de la droite.
- $p$ est **l'ordonnée à l'origine** de la droite.
```

### Propriété : Coefficient directeur

```admonish prop
Soient les points $A(x_A;y_A)$ et $B(x_B;y_B)$ appartenant à la droite $(d)$ d'équation $y=mx+p$.

On a :

$$m=\cfrac{\Delta y}{\Delta x}=\cfrac{y_B-y_A}{x_B-x_A}$$
```

```admonish meth title="Méthode : Établir l'équation d'une droite"
Soient $A(7;8)$ et $B(-1;4)$

Le coefficient directeur $m$ de la droite $(AB)$ est :

$$m=\cfrac{\Delta y}{\Delta x}=\cfrac{y_B-y_A}{x_B-x_A}=\cfrac{4-8}{(-1)-7}=\cfrac{-4}{-8}=\cfrac{1}{2}$$

On a $A\in (AB)$ donc :

$$
\begin{array}{rl}
	     & y_A=m\times x_A+p                                     \\\\
	\iff & p=y_A-m\times x_A=8-\cfrac{1}{2}\times 7=\cfrac{9}{2}
\end{array}
$$

Au final :

$$(D) : y=\cfrac{1}{2}x+\cfrac{9}{2}$$

Représentation graphique de :

$$(D) : y=\cfrac{1}{2}x+\cfrac{9}{2}$$

![](img/syst/02.png =400x center)
```

```admonish rem
![](img/syst/03.png#right =200x)

Les droites parallèles à l'axe des ordonnées n'ont pas **d'équation réduite**.

En effet, si $(AB)$ est parallèle à l'axe des ordonnées alors $x_A=x_B$.

Le coefficient directeur ... $$m=\cfrac{y_B-y_A}{x_B-x_A}$$ ... n'est donc pas défini car $(x_B-x_A)=0$.

L'équation d'une droite parallèle à l'axe des abscisses est de la forme :

$$x=k$$
```

### Définition : Équations cartésiennes de droites

```admonish def
Les équation de la forme $ax+by+c=0$ sont apellées **équations cartésiennes** de droites.

L'ensemble des points $M$ de coordonnées $(x;y)$ est une droite.
```

```admonish ex
$2x+3y+6=0$ est une **équation cartésienne** de la droite $(d)$.

On peut retrouver **l'équation réduite** de $(d)$ :

$$
\begin{array}{rcl}
	2x+3y+6=0 & \iff & 3y=-2x-6           \\\\
	          & \iff & y=\cfrac{-2}{3}x-2
\end{array}
$$

![](img/syst/04.png =400x center)
```

```admonish prop
Les droites parallèles à l'axe des ordonnées ont une **équation cartésienne** avec $b=0$.
```

```admonish ex
![](img/syst/05.png#right =250x center)

La droite $(d)$ d'équation ... $$x=6$$ ... est parallèle à l'axe des ordonnées.
```

## Systèmes d'équations

### Définition : Système d'équations

```admonish def
Un **système d'équations** se présente sous la forme de $2$ (ou plus) équations à $2$ (ou plus) inconnues.

La (ou les) solution(s) de ce système doit vérifier les $2$ (ou plus) équations.
```

```admonish ex
Soit le système suivant :

$$
S:\begin{cases}
	3\tc{red}{x}+2\tc{blue}{y}=7 \\\\2\tc{red}{x}-\tc{blue}{y}=0
\end{cases}
$$

La solution de ce système est $(1;2)$.

En effet, si $\tc{red}{x=1}$ et $\tc{blue}{y=2}$

$$
\begin{cases}
	3\times \tc{red}{1}+2\times \tc{blue}{2}=7 \\\\2\times \tc{red}{1}-\tc{blue}{2}=0
\end{cases}
$$
```

### Propriété géométrique

```admonish prop
Résoudre un système constitué des $2$ **équations de droites** revient à trouver les **coordonnées** du **point d'intersection des droites**.
```

```admonish ex
![](img/syst/06.png#right =250x)

Soit le système suivant :

$$
S:\begin{cases}
	\tc{#800080}{3x+2y=7} \\\\\tc{#993300}{2x-y=0}
\end{cases}
$$

Les droites d'équations $\tc{#800080}{3x+2y-7=0}$ et $\tc{#993300}{2x-y=0}$ ont un point d'intersection $A(1;2)$.

En effet :

- Si $A\in d_1$ alors ses coordonnées vérifient l'équation :

$$\tc{#800080}{3x+2y=7}$$

- Si $A\in d_2$ alors ses coordonnées vérifient l'équation :

$$\tc{#993300}{2x-y=0}$$
```

### Méthode par substitution

```admonish meth
Cette méthode consiste à :

- **Exprimer** une inconnue en fonction de l'autre.
- **Substituer** cette inconnue par son expression, dans l'autre équation, pour obtenir une équation à une seule inconnue.
```

```admonish ex
Soit le système : $\qquad S:\begin{cases}3x+2y=7\\\\2x-y=0\end{cases}$

On a :

$$
\begin{array}{rcl}
	S & \iff & \begin{cases}3x+2\tc{red}{y}=7\\\\\tc{red}{y=2x}\qquad\larr\tc{green}{\small{\text{on exprime }y\text{ en fonction de }x}}\end{cases}     \\\\
	  & \iff & \begin{cases}3x+2\tc{red}{(2x)}=7\qquad\larr\tc{green}{\small{\text{on remplace }y\text{ par son expression}}}\\\\\tc{red}{y=2x}\end{cases} \\\\
	  & \iff & \begin{cases}7x=7\\\\y=2x\end{cases}\iff\begin{cases}x=1\\\\y=2\end{cases}
\end{array}
$$

La solution du système est $(1;2)$
```

### Méthode par combinaison

```admonish meth
Cette methode consiste à faire une **combinaison linéaire** des lignes $L_1$ et $L_2$ pour obtenir une équation à **une inconnue**.
```

```admonish ex
Soit le système :

$$S:\begin{cases}L_1:&3x+2y=7\\\\L_2:&2x-y=0\end{cases}$$

On a :

$$S:\begin{cases}L_1:&3x\tc{green}{+2y}=7\\\\2\times L_2:&4x\tc{green}{-2y}=0\end{cases}$$

Donc :

$$
\begin{array}{rcl}
	L_1+(2\times L_2) & \iff & (3x\tc{green}{+2y})+(4x\tc{green}{-2y})=7+0 \\\\
	                  & \iff & 3x+4x\tc{green}{+2y-2y}=7                   \\\\
	                  & \iff & 7x=7                                        \\\\
	                  & \iff & \boxed{x=1}                                 \\\\
\end{array}
$$

Pour trouver $y$ :

$$
\begin{array}{rcl}
	L_2 & \iff & 2\boxed{x}-y=0        \\\\
	    & \iff & 2\times \boxed{1}-y=0 \\\\
	    & \iff & y=2                   \\\\
\end{array}
$$

La solution du système est $(1;2)$
```

### Existence de solutions

```admonish prop title="Propriété : Nombre de solutions"
Il se peut que certains systèmes ne possèdent pas de solution ou une infinité.
```

```admonish ex
$$S_1:\begin{cases}3x+2y&=4\\\\-6x-4y&=1\end{cases}$$

On a :

$$
\begin{array}{rcl}
	S_1 & \iff & \begin{cases}2y&=-3x+4\\\\-4y&=6x+1\end{cases}                                                                                                               \\\\
	    & \iff & \begin{cases}y=\cfrac{-3}{2}x+2\\\\y=\cfrac{6}{-4}x+\cfrac{1}{-4}\end{cases} \iff\begin{cases}y=\cfrac{-3}{2}x+2\\\\y=\cfrac{-3}{2}x-\cfrac{1}{4}\end{cases} \\\\
\end{array}
$$

Les $2$ droites représentées par les $2$ équations du système ont même coefficient directeur $\left(\cfrac{-3}{2}\right)$.

Leurs ordonnées à l'origine sont différentes $\left(2\neq\cfrac{-1}{4}\right)$ donc elles sont donc **strictement parallèles**.

Il n'existe pas de point d'intersection donc pas de solutions au système.

$$S=\emptyset$$
```

```admonish ex
$$
S_2:
\begin{cases}
  3x+2y  & =4  \\\\
  -6x-4y & =-8
\end{cases}
$$

On a :

$$
\begin{array}{rcl}
  S_2 & \iff &
  \begin{cases}2y&=-3x+4\\\\-4y&=6x-8
  \end{cases}
  \\\\
  & \iff &
  \begin{cases}y=\cfrac{-3}{2}x+2\\\\y=\cfrac{6}{-4}x+\cfrac{-8}{-4}
  \end{cases} \iff
  \begin{cases}y=\cfrac{-3}{2}x+2\\\\y=\cfrac{-3}{2}x+2
  \end{cases} \\\\
\end{array}
$$

Les $2$ droites représentées par les $2$ équations du système ont
même coefficient directeur $\left(\cfrac{-3}{2}\right)$ et même
ordonnées à l'origine $(2)$ donc elles sont donc **confondues**.

Les solutions du système sont les couples $(x;y)$ tel que $y=\cfrac{-3}{2}x+2$

$$S=\Big\lbrace(x;y)\quad\text{tel que}\quad y=\cfrac{-3}{2}x+2\Big\rbrace$$
```
