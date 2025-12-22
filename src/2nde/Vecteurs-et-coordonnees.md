# Vecteurs et coordonnées

<!-- toc -->

## Repère du plan

```admonish rem
Trois points distincts $O$, $I$ et $J$ du plan forment un **repère**, que l'on peut noter $(O; I, J)$.

L'origine $O$ et les unités $OI$ et $OJ$ permettent de **graduer** les axes $(OI)$ et $(OJ)$.

Si on pose $\vv{i}=\vv{OI}$ et $\vv{j}=\vv{OJ}$, alors ce repère se note également $\vOIJ$.

![](img/vec2/oij.png =300x center)
```

```admonish def
On appelle **repère du plan** tout triplet $\vOIJ$ où $O$ est un point et $\vv{i}$ et $\vv{j}$ sont deux vecteurs **non colinéaires**.

- Un repère est dit **orthogonal** si $\vv{i}$ et $\vv{j}$ ont des directions **perpendiculaires**.
- Un repère est dit **orthonormé** s'il est **orthogonal** et si $\vv{i}$ et $\vv{j}$ sont de **norme $1$**.

|                                     |          Types de repères           |                                     |
| :---------------------------------: | :---------------------------------: | :---------------------------------: |
| ![](img/vec2/23.1.png =250x center) | ![](img/vec2/23.2.png =250x center) | ![](img/vec2/23.3.png =250x center) |
|             Orthogonal              |             Orthonormé              |             Quelconque              |
```

## Coordonnées d'un vecteur

```admonish def
Soit $M$ un point quelconque d'un repère $\vOIJ$ et un vecteur $\vv{u}$ tel que : $\vv{OM} = \vv{u}$.

Les coordonnées du vecteur $\vv{u}$ sont les coordonnées du point $M$.

On note : $\qquad\vv{u}(x, y)\quad$ ou $\quad\vv{u}\coord{x}{y}$

![](img/vec2/24.png =400x center)
```

```admonish meth title="Méthode : Lire les coordonnées d'un vecteur"
![](img/vec2/26.png =500x center)

Dans cet exemple, pour aller de $A$ vers $B$, on effectue :

- Une translation de $3$ carreaux vers la droite $(+3)$
- Une translation de $2$ carreaux vers le haut $(+2)$

On trace ainsi un "chemin" de vecteurs $\vv{i}$ et $\vv{j}$ mis bout à bout reliant l'origine et l'extrémité du vecteur $\vv{AB}$.

Ainsi $\quad\vv{AB}= 3\times\vv{i} + 2\times\vv{j}$

Les coordonnées de $\vv{AB}$ sont donc $\coord{3}{2}$.

De même, les vecteurs suivants ont pour coordonnées :

- $\vv{AB}\coord{3}{2}$
- $\vv{u}\coord{3}{2}\qquad$ et donc $\quad\vv{AB}=\vv{u}$
- $\vv{v}\coord{-1}{5}$
- $\vv{w}\coord{0}{-2}$
```

```admonish prop
Dans un repère $\vOIJ$, on considère les points $A(x_A;y_A)$ et $B(x_B;y_B)$.

Le vecteur $\vv{AB}$ a pour coordonnées $\begin{pmatrix} x_B-x_A\\\\y_B-y_A \end{pmatrix}$.

$$\vv{AB}\begin{pmatrix} x_B-x_A\\\\y_B-y_A \end{pmatrix}$$

![](img/vec2/27.png =500x center)
```

```admonish ex
Soient $A(1;1)$ et $B(4;2)$

Les coordonnées de $\vv{AB}$ sont $\begin{pmatrix}4-1\\\\2-1\end{pmatrix}\quad\iff\quad\vv{AB}\begin{pmatrix}3\\\\1\end{pmatrix}$

![](img/vec2/28.png =400x center)
```

### Égalité, somme et produit par un réel

```admonish prop
Soit $\vv{u}\coord{x}{y}$ et $\vv{v}\coord{x'}{y'}$ deux vecteurs dans un repère $\vOIJ$.

Soit $k\in\R$.

- $\vv{u} = \vv{v}\iff\begin{cases}x = x'\\\\y = y'\end{cases}$
- Le vecteur $\vv{u} + \vv{v}$ a pour coordonnées $\begin{pmatrix}{x+x'}\\\\{y+y'}\end{pmatrix}$
- Le vecteur $k\vv{u}$ a pour coordonnées $\begin{pmatrix}k\times x\\\\k\times y\end{pmatrix}$
```

```admonish ex
Soient $\vv{u}\coord{−1}{2}$ , $\vv{v}\coord{0.5}{−2}$ et $\vv{w}=2(\vv{u}+3\vv{v})$

On a :

$$
\begin{array}{llcl}
	\bullet & 3\vv{v}\coord{3\times0.5}{3\times -2} & \iff & 3\vv{v}\coord{1.5}{-6}                                              \\\\
	\bullet & \vv{u}+3\vv{v}\coord{-1+1.5}{2-6}     & \iff & \vv{u}+3\vv{v}\coord{0.5}{-4}                                       \\\\
	\bullet & \vv{w}=2(\vv{u}+3\vv{v})              & \iff & \vv{w}\coord{2\times 0.5}{2\times −4}\qquad\iff \vv{w}\coord{1}{−8} \\\\
\end{array}
$$
```

```admonish meth title="Méthode : Calculer les coordonnées d'un point défini par une égalité vectorielle"
Dans un repère, soient les points $A(1;2)$, $B(-4;3)$, $C(1;-2)$.

Déterminons les coordonnées de $D$ tel que $ABCD$ soit un parallélogramme.

$ABCD$ est un parallélogramme si et seulement si $\vv{AB}=\vv{DC}$

On a :

- $\vv{AB}\coord{-4-1}{3-2}=\coord{-5}{1}$
- $\vv{DC}\coord{1-x_D}{-2-y_D}$

Donc $\begin{cases}1-x_D=-5\\\\-2-y_D=1\end{cases}\iff \begin{cases}x_D=6\\\\y_D=-3\end{cases}$

![](img/vec2/29att.png =500x center)
```

### Norme d'un vecteur

```admonish prop
Soit $\vv{u}$ un vecteur de coordonnées $\coord{x}{y}$ dans un repère $\vOIJ$.

On a :

$$\norm{\vv{u}} = \sqrt{x^2+y^2}$$
```

```admonish ex
Soient $\vv{u}\coord{3}{1}$

On a :

$$\norm{\vv{u}} = \sqrt{x^2+y^2} = \sqrt{3^2+1^2}= \sqrt{10}$$

![](img/vec2/28.png =400x center)
```

```

```
