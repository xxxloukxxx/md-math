# Représentation paramétrique et équation cartésienne

<!-- toc -->

## Représentation paramétrique d'une droite

### Propriété

```admonish prop
L'espace est muni d'un repère $\left( O;\ \vec{i},\vec{j},\vec{k} \right)$.

Soit une droite $d$ passant par un point $A\pa{x_{A};y_{A};z_{A}}$ et de vecteur directeur $\vec{u}\begin{pmatrix}a\\\\b\\\\c\end{pmatrix}$.

On a :

$$\boxed{M\pa{x;y;z}\in d\quad\iff\quad\text{Il existe }\ t\in\R\ \text{tel que :}\ \begin{cases}x=x_{A}+at\\\\y=y_{A}+bt\\\\z=z_{A}+ct\\\\\end{cases}}$$

Ce système s'appelle une **représentation paramétrique** de la droite $d$.
```

```admonish demo
On a :

$$
\begin{array}{rcl}
	M\in d & \iff & \vec{u}\ \text{et}\ \vec{AM}\ \text{sont colinéaires}                                                                                                                                                                                                  \\\\
	                      & \iff & \text{Il existe}\ t\in\R\ \text{tel que}\ \vec{AM}=t\vec{u}                                                                                                                                                                                            \\\\
	                      & \iff & \begin{pmatrix}x-x_{A}\\\\y-y_{A}\\\\z-z_{A}\end{pmatrix}=t\begin{pmatrix}a\\\\b\\\\c\end{pmatrix}\ \iff\ \begin{cases}x-x_{A}=at\\\\y-y_{A}=bt\\\\z-z_{A}=ct\\\\\end{cases}\ \iff\ \begin{cases}x=x_{A}+at\\\\y=y_{A}+bt\\\\z=z_{A}+ct\\\\\end{cases}
\end{array}
$$
```

```admonish ex
La droite $(d)$ passant par le point $A\pa{1;-2;3}$ et de vecteur directeur $\vec{u}\begin{pmatrix}4\\\\5\\\\-3\end{pmatrix}$ a pour représentation paramétrique : $(d):\begin{cases}x=1+4t\\\\y=-2+5t\\\\z=3-3t\\\\\end{cases}$
```

### Méthode

```admonish meth title="Méthode : Utiliser la représentation paramétrique d'une droite"
L'espace est muni d'un repère $\left( O;\ \vec{i},\vec{j},\vec{k} \right)$.

Soit les points $A\pa{2;3;-1}\ $ et $\ B\pa{1;-3;2}$.

:bulb: Déterminer les coordonnées de $M$, point d'intersection de $(AB)$ avec le plan de repère $\vOIJ$.

---

- On commence par déterminer une représentation paramétrique de la droite $(AB)$ :

  Un vecteur directeur de $(AB)$ est : $\vec{AB}\begin{pmatrix}1-2\\\\-3-3\\\\2-(-1)\end{pmatrix}=\begin{pmatrix}-1\\\\-6\\\\3\end{pmatrix}$.

  La droite $(AB)$ passe par le point $A\pa{2;3;-1}$

  Une représentation paramétrique de $(AB)$ est : $\begin{cases}x=2-t\\\\y=3-6t\\\\z=-1+3t\\\\\end{cases}$, $t\in\R$.

- Soit $M\pa{x;y;z}$ le point d'intersection de $(AB)$ avec le plan de repère $\vOIJ$.

  Alors $z = 0$ car $M$ appartient au plan de repère $\vOIJ$.

  Donc $-1+3t=0$ soit $t=\cfrac{1}{3}$

  Et donc : $\begin{cases}x=2-\pa{\tfrac{1}{3}}=\pa{\tfrac{5}{3}}\\\\y=3-6\times\pa{\tfrac{1}{3}}=1\\\\z=0\\\\\end{cases}$

  Le point $M$ a donc pour coordonnées $\pa{\cfrac{5}{3};1;0}$.
```

## Équation cartésienne d'un plan

### Propriété

```admonish prop
L'espace est muni d'un repère orthonormé $\left( O;\ \vec{i},\vec{j},\vec{k} \right)$.

Un plan $P$ de vecteur normal $\vec{n}\begin{pmatrix}a\\\\b\\\\c\end{pmatrix}$ non nul admet une équation de la forme :

$$\boxed{P:ax+by+cz+d=0}\qquad\text{avec}\qquad d\in\R$$

Réciproquement, si $a$, $b\ $ et $\ c$ sont non tous nuls, l'ensemble des points $M\pa{x;y;z}$ tels que $\boxed{ax+by+cz+d=0}$, avec $d\in\R$, est un plan.

Cette équation s'appelle **équation cartésienne** du plan $P$.

![](img/droite/image2.png =700x center)
```

```admonish demo
Soit un point $A\pa{x_{A};y_{A};z_{A}}$ de $P$.

On a :

$$
\begin{array}{rcl}
	M\pa{x;y;z}\in P & \iff & \vec{AM}\perp\vec{n}                                                \\\\
	                 & \iff & \vec{AM}\cdot\vec{n} = 0                                            \\\\
	                 & \iff & a\left(x-x_{A}\right)+b\left(y-y_{A}\right)+c\left(z-z_{A}\right)=0 \\\\
	                 & \iff & ax+by+cz-ax_{A}-by_{A}-cz_{A}=0                                     \\\\
	                 & \iff & ax+by+cz+d=0\quad\text{avec}\quad d=-ax_{A}-by_{A}-cz_{A}
\end{array}
$$

Réciproquement, supposons par exemple que $a\neq 0$ ($a$, $b\ $ et $\ c$ sont tous non nuls).

On note $E$ l'ensemble des points $M\pa{x;y;z}$ vérifiant l'équation $ax+by+cz+d=0$

Alors le point $A\pa{-\cfrac{d}{a};0;0}$ vérifie l'équation $ax+by+cz+d=0$. Et donc $A \in E$.

Soit un vecteur $\vec{n}\begin{pmatrix}a\\\\b\\\\c\end{pmatrix}$. Pour tout point $M\pa{x;y;z}$, on a :

$$\vec{AM}\cdot\vec{n}=a\left(x+\cfrac{d}{a}\right)+b(y-0)+c(z-0)=ax+by+cz+d=0$$

$E$ est donc l'ensemble des points $M\pa{x;y;z}$ tels que $\vec{AM}\cdot\vec{n} = 0$.

Donc l'ensemble $E$ est le plan passant par $A$ et de vecteur normal $\vec{n}$.
```

### Exemples et méthodes

```admonish ex
Le plan d'équation cartésienne $\ x - y + 5z + 1 = 0\ $ a pour vecteur normal $\vec{n}\begin{pmatrix}1\\\\-1\\\\5\end{pmatrix}$
```

```admonish meth title="Méthode : Déterminer une équation cartésienne de plan"
Dans un repère orthonormé, déterminer une équation cartésienne du plan $P$ passant par le point $A\pa{-1;2;1}$ et de vecteur normal $\vec{n}\begin{pmatrix}3\\\\-3\\\\1\end{pmatrix}$.

---

Une équation cartésienne de $P$ est de la forme $3x - 3y + z + d = 0$.

Le point $A$ appartient à $P$ donc ses coordonnées vérifient l'équation :

$$3\times(-1)-3\times(2)+1+d=0\quad\iff\quad d=8$$

Une équation cartésienne de $P$ est donc : $3x-3y+z+8=0$
```

### Plans perpendiculaires

```admonish prop
Deux plans sont perpendiculaires lorsqu'un vecteur normal de l'un est orthogonal à un vecteur normal de l'autre.

![](img/droite/image3.png =550x center)
```

```admonish meth title="Méthode : Démontrer que deux plans sont perpendiculaires"
Dans un repère orthonormé, les plans $P\ $ et $\ P'$ ont pour équations respectives : $$P:2x+4y+4z-3=0\qquad P':2x-5y+4z-1=0$$

Démontrer que les plans $P\ $ et $\ P'$ sont perpendiculaires.

---

Les plans $P\ $ et $\ P'$ sont perpendiculaires si et seulement si un vecteur normal de l'un est orthogonal à un vecteur normal de l'autre.

Un vecteur normal de $P$ est $\vec{n}\begin{pmatrix}2\\\\4\\\\4\end{pmatrix}$ et un vecteur normal de $P'$ est $\vec{n'}\begin{pmatrix}2\\\\-5\\\\4\end{pmatrix}$.

On a :

$$\vec{n}\cdot\vec{n'}=2\times 2+4\times(-5)+4\times4=0$$

Les vecteurs $\vec{n}\ $ et $\ \vec{n'}$ sont orthogonaux donc les plans $P\ $ et $\ P'$ sont perpendiculaires.
```

## Applications

### Intersection et projeté orthogonal

```admonish meth title="Méthode : Déterminer l'intersection d'une droite et d'un plan"
![](img/droite/image4.png#right =350x)

Dans un repère orthonormé, le plan $P$ a pour équation $2x-y+3z-2=0$.

Soit les points $A\pa{1;2;-3}\ $ et $\ B\pa{-1;2;0}$.

a. Démontrer que la droite $(AB)$ et le plan $P$ sont sécants.

b. Déterminer leur point d'intersection.

---

a. Un vecteur normal de $P$ est $\vec{n}\begin{pmatrix}2\\\\-1\\\\3\end{pmatrix}$.

$(AB)\ $ et $\ P$ sont sécants si $\vec{n}\ $ et $\ \vec{AB}$ ne sont pas orthogonaux.

On a : $\ \vec{AB}\begin{pmatrix}-2\\\\0\\\\3\end{pmatrix}\ $ et $\ \vec{AB}\cdot\vec{n}=-2\times 2+3\times 3\neq 0$

On conclut que $(AB)$ et le plan $P$ ne sont pas parallèles et donc sont sécants.

b. Une représentation paramétrique de la droite $(AB)$ est : $\begin{cases}x=1-2t\\\\y=2\\\\z=-3+3t\\\\\end{cases}\ $, avec $\ t\in\R$.

Le point $M\pa{x;y;z}$, intersection de $(AB)$ et de $P$, vérifie donc le système suivant :

$$S:\begin{cases}x=1-2t\\\\y=2\\\\z=-3+3t\\\\2x-y+3z-2=0\end{cases}$$

On a : $\ S\ \iff\ 2(1-2t)-2+3(-3+3t)-2=0\ \iff\ 5t-11=0\ \iff\ t=\cfrac{11}{5}$

D'où : $\begin{cases}x=1-2\times\cfrac{11}{5}=\cfrac{-17}{5}\\\\y=2\\\\z=-3+3\times\cfrac{11}{5}=\cfrac{18}{5}\\\\\end{cases}$

Ainsi la droite $(AB)$ et le plan $P$ sont sécants en $M\pa{\cfrac{-17}{5};2;\cfrac{18}{5}}$.
```

```admonish meth title="Méthode : Déterminer les coordonnées du projeté orthogonal d'un point sur une droite"
Dans un repère orthonormé, on donne les points $A\pa{1;0;2}$, $B\pa{-1;2;1}\ $ et $\ C\pa{0;1;-2}$.

:bulb: Déterminer les coordonnées du projeté orthogonal du point $C$ sur la droite $(AB)$.

---

On appelle $H$ le projeté orthogonal du point $C$ sur la droite $(AB)$. On a : $\vec{AB}\begin{pmatrix}-2\\\\2\\\\-1\end{pmatrix}$

Une représentation paramétrique de $(AB)$ est : $\begin{cases}x=1-2t\\\\y=2t\\\\z=2-t\\\\\end{cases}\ $,avec $\ t\in\R$.

Le point $H$ appartient à la droite $(AB)$ donc ses coordonnées vérifient les équations du système paramétrique de $(AB)$.

On a ainsi : $H\pa{\pa{1-2t};\pa{2t};\pa{2-t}}$ et donc $\vec{CH}\begin{pmatrix}1-2t\\\\2t-1\\\\2-t+2\end{pmatrix}=\begin{pmatrix}1-2t\\\\2t-1\\\\4-t\end{pmatrix}$

Or, $\vec{CH}\ $ et $\ \vec{AB}$ sont othogonaux, donc :

$$
	\begin{array}{rcl}
		\vec{CH}\cdot\vec{AB}=0 & \ \iff\  & (1-2t)\times(-2)+(2t-1)\times 2+(4-t)\times(-1)=0 \\\\
		                        & \ \iff\  & -2+4t+4t-2-4+t=0                                  \\\\
		                        & \ \iff\  & 9t-8=0\qquad t=\cfrac{8}{9}
	\end{array}
$$

Le point $H$, projeté orthogonal du point $C$ sur la droite $(AB)$, a donc pour coordonnées :

$$
H\pa{\pa{1-2\times\cfrac{8}{9}};\pa{2\times\cfrac{8}{9}};\pa{2-\cfrac{8}{9}}}\ \iff\ H\pa{\cfrac{-7}{9};\cfrac{16}{9};\cfrac{10}{9}}
$$
```

```admonish meth title="Méthode : Déterminer l'intersection de deux plans"
Dans un repère orthonormé, les plans $P\ $ et $\ P'$ ont pour équations respectives :

$$P:-x+2y+z-5=0\qquad P':2x-y+3z-1=0$$

1. Démontrer que les plans $P\ $ et $\ P'$ sont sécants.
2. Déterminer une représentation paramétrique de leur droite d'intersection $d$.

---

1. $P\ $ et $\ P'$ sont sécants si leurs vecteurs normaux ne sont pas colinéaires.

Un vecteur normal de $P$ est $\vec{n}\begin{pmatrix}-1\\\\2\\\\1\end{pmatrix}$ et un vecteur normal de $P'$ est $\vec{n'}\begin{pmatrix}2\\\\-1\\\\3\end{pmatrix}$.

Les coordonnées de \vec{n} et \vec{n'} ne sont pas proportionnelles donc ils ne sont pas colinéaires.

2. Le point $M\begin{pmatrix} x \\\\ y \\\\ z \\\\ \end{pmatrix}$ de $d$, intersection de $P$ et de $P'$, vérifie donc le système suivant :

$$S:\begin{cases}-x+2y+z-5=0 \\\\2x-y+3z-1=0\end{cases}$$

On choisit par exemple $x$ comme paramètre et on pose $x = t$. On a alors :

$$
	\begin{array}{rcl}
		S\ \iff\ \begin{cases}x=t\\\\-t+2y+z-5=0\\\\2t-y+3z-1=0\\\\\end{cases} & \iff & \begin{cases}x=t\\\\z=-2y+t+5\\\\-y+3z=1-2t\\\\\end{cases}                                                                                                            \\\\
		                                                               & \iff & \begin{cases}x=t\\\\z=-2y+t+5\\\\-y+3(-2y+t+5)=1-2t\\\\\end{cases}                                                                                                    \\\\
		                                                               & \iff & \begin{cases}x=t\\\\z=-2y+t+5\\\\-y-6y+3t+15=1-2t\\\\\end{cases}                                                                                                      \\\\
		                                                               & \iff & \begin{cases}x=t\\\\z=-2y+t+5\\\\-7y=-14-5t\\\\\end{cases}                                                                                                            \\\\
		                                                               & \iff & \begin{cases}x=t\\\\y=2+\cfrac{5}{7}t\\\\z=-2\left(2+\cfrac{5}{7}t\right)+t+5\\\\\end{cases}\qquad\iff\begin{cases}x=t\\\\y=2+\cfrac{5}{7}t\\\\z=1-\cfrac{3}{7}t\\\\\end{cases}
	\end{array}
$$

Ce dernier système est une représentation paramétrique de $d$, avec $t\in\R$.
```

### Résumé : Pour démontrer des positions relatives

```admonish note title="Résumé"
Soit $d$ droite de vecteur directeur $\vec{u}\ $ et $\ P$ plan de vecteur normal $\vec{n}$.

| $d\ $ et $\ P$ sont $\ldots$ |                                        |                                         |
| :--------------------------: | :------------------------------------: | :-------------------------------------: |
|     $\ldots$ parallèles      |        $\vec{u}\cdot\vec{n}=0$         | ![](img/droite/image5.png =200x center) |
|       $\ldots$ sécants       |      $\vec{u}\cdot\vec{n}\neq 0$       | ![](img/droite/image6.png =200x center) |
|     $\ldots$ orthogonaux     | $\vec{u}\ $ et $\ \vec{n}$ colinéaires | ![](img/droite/image7.png =200x center) |

$P_{1}$ plan de vecteur normal $\vec{n_{1}}\ $ et $\ P_{2}$ plan de vecteur normal $\vec{n_{2}}$.

| $P_1\ $ et $\ P_2$ sont $\ldots$ |                                                |                                          |
| :------------------------------: | :--------------------------------------------: | :--------------------------------------: |
|       $\ldots$ parallèles        |   $\vec{n_1}\ $ et $\ \vec{n_2}$ colinéaires   | ![](img/droite/image8.png =200x center)  |
|         $\ldots$ sécants         | $\vec{n_1}\ $ et $\ \vec{n_2}$ non colinéaires | ![](img/droite/image9.png =200x center)  |
|    $\ldots$ perpendiculaires     |            $\vec{u}\cdot\vec{n}=0$             | ![](img/droite/image10.png =200x center) |
```
