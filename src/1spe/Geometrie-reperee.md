# Géométrie repérée

<!-- toc -->

## Rappel : Équation de droite

### Fonction du 1<sup>er</sup> degré

```admonish def
Une fonction du 1<sup>er</sup> degré est une fonction de la forme : $\quad f(x)=\tc{red}{a}x+\tc{blue}{b}$

Sa représentation graphique est une **droite**.

- $\tc{red}{a} $ est le **coefficient directeur** ou **pente** de la droite
- $\tc{blue}{b} $ est le **l'ordonnée à l'origine**
```

```admonish ex
**Ex. :**

$f(x)=\tc{red}{\cfrac{-1}{2}}x+\tc{blue}{1}$
Représentation graphique

![](img/geo/01.png =800x center)
```

```admonish meth title="Résoudre $f(x)=0$"
$$\begin{array}{rcll}
		f(x)=0 & \Lrarr & \tc{red}{\cfrac{-1}{2}}x+\tc{blue}{1}=0 &             \\\\
		       & \Lrarr & \cfrac{-1}{2}x=-1\qquad\Lrarr           & \boxed{x=2}
	\end{array}$$
```

```admonish prop title="Représentation graphique en fonction de $a$"
![](img/geo/02.png =900x center)
```

```admonish prop title="Signe de $f(x)$"
$$
\begin{array}{ll}
	a>0                                                              & a<0 \\\\
	\begin{array}{|c|ccccccc|}\hline
		\rule[-4mm]{0mm}{12mm}x    & -\infty &   &  & \cfrac{-b}{a} &  &   & +\infty \\\\ \hline
		\rule[-4mm]{0mm}{12mm}f(x) &         & - &  & 0             &  & + &         \\\\ \hline
	\end{array} &
	\begin{array}{|c|ccccccc|}\hline
		\rule[-4mm]{0mm}{12mm}x    & -\infty &   &  & \cfrac{-b}{a} &  &   & +\infty \\\\ \hline
		\rule[-4mm]{0mm}{12mm}f(x) &         & + &  & 0             &  & - &         \\\\ \hline
	\end{array}
\end{array}
$$
```

### Équation réduite de droite

```admonish def
La droite $d$ est l'ensemble des points $M(x;y)$ qui vérifient l'équation :

$$y=\tc{red}{a}x+\tc{blue}{b}$$

Cette équation est **l'équation réduite** de la droite $d$.
```

```admonish ex
$$y=\tc{red}{\cfrac{-1}{2}}x+\tc{blue}{1}$$

![h:300](img/geo/01.png =800x center)
```

### Équation cartésienne de droite

```admonish def
La droite $d$ est l'ensemble des points $M(x;y)$ qui vérifient l'équation :

$$\tc{red}{a'}x+\tc{blue}{b'}y+\tc{green}{c}=0$$

Cette équation est **l'équation cartésienne** de la droite $d$.
```

```admonish rem
Si $ \tc{blue}{b'}\neq 0$, on peut retrouver l'équation réduite de $d$.

$$
\begin{array}{rcl}
	\tc{red}{a'}x+\tc{blue}{b'}y+\tc{green}{c}=0 & \Lrarr & \tc{blue}{b'}y=-\tc{red}{a'}x-\tc{green}{c}                                   \\\\
	                                             & \Lrarr & y=\cfrac{-\tc{red}{a'}}{\tc{blue}{b'}}x+\cfrac{\tc{green}{-c}}{\tc{blue}{b'}}
\end{array}
$$
```

```admonish rem
Si $ \tc{blue}{b'}=0$ alors $d$ est parallèle à l'axe des ordonnées et son équation est de la forme $x=k$.

$$
\begin{array}{rcl}
	\tc{red}{a'}x+\tc{blue}{b'}y+\tc{green}{c}=0 & \Lrarr & \tc{red}{a'}x+\tc{green}{c}=0                                                  \\\\
	                                             & \Lrarr & \tc{red}{a'}x=-\tc{green}{c}\quad\Lrarr x=\cfrac{-\tc{green}{c}}{\tc{red}{a'}}
\end{array}
$$

![](img/geo/03.png =300x center)
```

### Vecteur directeur de $d$

```admonish def
Soit la droite $d$ d'équation cartésienne $\tc{red}{a}x+\tc{blue}{b}y+\tc{green}{c}=0$

- On appelle **vecteur directeur** de $d$, tout vecteur donnant la **direction** de $d$.
- Le vecteur de coordonnées $\coord{-\tc{blue}{b}}{\tc{red}{a}}$ est un **vecteur directeur** de la droite $d$.
```

```admonish ex
Soit $d$ la droite d'équation $\tc{red}{2}x\tc{blue}{-5}y+\tc{green}{10}=0$

On a : $\quad\tc{red}{a=2}\quad,\quad\tc{blue}{b=-5}\quad\text{et}\quad\tc{green}{c=10}$

Donc le vecteur $\coord{5}{2}$ est un **vecteur directeur** de $d$

![](img/geo/04.png =600x center)
```

```admonish meth title="Déterminer une équation de droite à partir d'un point et d'un vecteur directeur"
Déterminons une **équation cartésienne** de la droite $d$ passant par le point $A\left(3 ; 1\right)$ et de vecteur directeur $\vec{u}\coord{-1}{5}$.

![](img/geo/05.png =400x center)

- La droite $d$ a pour équation $\tc{red}{a}x+\tc{blue}{b}y+\tc{green}{c}=0 $et$ \vec{u}\coord{-1}{5}$ est vecteur directeur de $d$
  - Donc $\quad \tc{red}{a=5}\quad$et$\quad-\tc{blue}{b}=-1 \Lrarr \tc{blue}{b}=1$
  - Donc $ d $ a pour équation $\quad\tc{red}{5}x+\tc{blue}{1}y+\tc{green}{c}=0$

- $A\left(3 ; 1\right)\in d\ \Lrarr\ $Ses coordonnées vérifient l'équation de droite

$$
\begin{array}{rcl}
	\tc{red}{5}x_A+\tc{blue}{1}y_A+\tc{green}{c}=0 & \Lrarr & \tc{red}{5}\times 3+\tc{blue}{1}\times 1+\tc{green}{c}=0 \\\\
	                                               & \Lrarr & 16+\tc{green}{c}=0                                       \\\\
	                                               & \Lrarr & \tc{green}{c}=(-16)
\end{array}
$$

L'équation cartésienne de $d$ est : $\quad\tc{red}{5}x+\tc{blue}{1}y\tc{green}{-16}=0$

![](img/geo/06.png =600x center)
```

## Équation de droite et vecteur normal

### Vecteur normal à $d$

```admonish def

Soit la droite $d$ d'équation cartésienne $\tc{red}{a}x+\tc{blue}{b}y+\tc{green}{c}=0$

- On appelle **vecteur normal** à $d$, tout vecteur de **direction orthogonale** à celle de $d$.
- Le vecteur de coordonnées $\coord{\tc{red}{a}}{\tc{blue}{b}}$ est un **vecteur normal** à $d$.
```

```admonish ex
Soit $d$ la droite d'équation $\tc{red}{2}x\tc{blue}{-5}y+\tc{green}{10}=0$

On a : $\quad\tc{red}{a=2}\quad,\quad\tc{blue}{b=-5}\quad\text{et}\quad\tc{green}{c=10}$

Donc le vecteur $\coord{\tc{red}{2}}{\tc{blue}{-5}}$ est un **vecteur normal** à $d$

![](img/geo/07.png =600x center)
```

```admonish ex
Soit la droite $d$ d'équation cartésienne $\quad \tc{red}{2}x\tc{blue}{-3}y\tc{green}{-6}=0$.

On a $\quad \tc{red}{a=2}\quad\tc{blue}{b=-3}\quad\tc{green}{c=-6}$

Un **vecteur directeur** de $d$ est $\vec{u}\coord{3}{2}$

![](img/geo/08.png =400x center)

Un vecteur $\vec{n}\coord{\tc{red}{a}}{\tc{blue}{b}}$ est un vecteur normal à $ d$.

On a $\ \vec{n}\coord{\tc{red}{2}}{\tc{blue}{-3}}\ $ car $\ \tc{red}{a=2}\ $ et $\ \tc{blue}{b=-3}$

On peut vérifier que $\vec{u}$ et $\vec{n}$ sont orthognaux à l'aide du produit scalaire $ \vec{u}\cdot\vec{n}$ :

$$
\begin{array}{rcl}
	\vec{u}\cdot\vec{n} & = & \coord{3}{2}\cdot\coord{\tc{red}{2}}{\tc{blue}{-3}}                   \\\\
	                    & = & \left(3\times \tc{red}{2}\right)+\left(2\times \tc{blue}{(-3)}\right) \\\\
	                    & = & 6-6=0\quad\Lrarr\quad\vec{n}\perp \vec{u}
\end{array}
$$

![](img/geo/09.png =600x center)
```

### Vecteur normal et équation de droite

```admonish prop
- Une droite de vecteur normal $\vec{n}\coord{\tc{red}{a}}{\tc{blue}{b}}$ admet une équation cartésienne de la forme $\tc{red}{a}x+\tc{blue}{b}y+\tc{green}{c}=0$ où $\tc{green}{c}$ est un nombre réel à déterminer.
- La droite d d'équation cartésienne $\tc{red}{a}x+\tc{blue}{b}y+\tc{green}{c}=0$ admet le vecteur $\vec{n}\coord{\tc{red}{a}}{\tc{blue}{b}}$ pour **vecteur normal**.

![](img/geo/10.png =500x center)
```

```admonish prop title="Méthode : Déterminer une équation de $d$ à l'aide un point et un vecteur normal"
On considère la droite $d$ passant par $A(-5;4)$ et dont un vecteur normal est $\vec{n}\coord{3}{-1}$.

Comme $\vec{n}\coord{\tc{red}{3}}{\tc{blue}{-1}}$ est un **vecteur normal** à $d$, l'équation cartésienne de $d$ est de la forme :

$$\tc{red}{3}x\tc{blue}{-1}y+\tc{green}{c}=0$$

Le point $A(-5;4)$ appartient à $d$, donc :

$$
\begin{array}{rcl}
	\tc{red}{3}\times x_A\tc{blue}{-1}\times y_A+c=0 & \Lrarr & \tc{red}{3}\times (-5)\tc{blue}{-1}\times 4+\tc{green}{c}=0 \\\\
	                                                 & \Lrarr & -19+\tc{green}{c}=0\quad\Lrarr \tc{green}{c=19}             \\\\
\end{array}
$$

Une équation cartésienne de $d$ est $\quad\tc{red}{3}x\tc{blue}{-}y+\tc{green}{19}=0$
```

```admonish prop
Soient $A$ et $B$ deux points du plan et $M(x ; y)$.

$$\boxed{M\in(AB) \iff \det\left(\vec{AB} , \vec{AM}\right)=0}$$
```

```admonish prop
Soit $(d)$ une droite du plan et $A$ un point tel que $A\in(d)$.

Soit $\vec{n}$ un vecteur normal à $(d)$ et $M({x} ; {y})$.

$$\boxed{M\in(d) \iff \vec{AM}\cdot\vec{n}=0}$$
```

## Équation de cercle

### Propriété : Équation de cercle

```admonish prop
Une équation de **cercle** de centre $A\left(\tc{red}{x_A} ; \tc{blue}{y_A}\right)$ et de rayon $\tc{green}{r}$ est :

$$\left(x-\tc{red}{x_A}\right)^2+\left(y-\tc{blue}{y_A}\right)^2=\tc{green}{r}^2$$

![](img/geo/12.png =600x center)
```

```admonish rem
Cela signifie que tous les points appartenant au cercle ont leurs coordonnées $(x;y)$ qui vérifient l'équation.
```

```admonish demo
Soit l'ensemble des points $M(x;y)$ appartenant au cercle $\mathscr{C}$ de centre $A(\tc{red}{x_A};\tc{blue}{y_A})$ et de rayon $\tc{green}{r}$

$$M\in\mathscr{C}\Lrarr\tc{green}{AM}=\tc{green}{r}$$

À l'aide de Pythagore :

$$\tc{green}{AM}^2=(x-\tc{red}{x_A})^2+(y-\tc{blue}{y_A})^2$$

Donc, on a :

$$\left(x-\tc{red}{x_A}\right)^2+\left(y-\tc{blue}{y_A}\right)^2=\tc{green}{r}^2$$

![](img/geo/13.png =400x center)
```

```admonish prop
Soient $M({x} ; {y})$ et un cercle $\mathcal{C}$ de diamètre $[AB]$.

$$\boxed{M\in\mathcal{C} \iff \vec{MA}\cdot\vec{MB}=0}$$
```

```admonish meth title="Méthode : Déterminer une équation d'un cercle"
Déterminons l'équation du cercle $\mathscr{C}$ de centre $A(\tc{red}{4};\tc{blue}{-1})$ et passant par le point $B(3;5)$

![](img/geo/14.png =500x center)

Le rayon de $\mathscr{C}$ est :

$$
\begin{aligned}
	r^2=AB^2 & =(x_B-\tc{red}{x_A})^2+(y_B-\tc{blue}{y_A})^2           \\\\
	         & =(3-\tc{red}{4})^2+\left(5-\tc{blue}{(-1)}\right)^2 \qquad =37
\end{aligned}
$$

Donc l'équation de $\mathscr{C}$ est donc :

$$\left(x-\tc{red}{4}\right)^2+\left(y-\tc{blue}{(-1)}\right)^2=37\quad\Lrarr\quad\boxed{\left(x-4\right)^2+\left(y+1\right)^2=37}$$
```

```admonish meth title="Méthode : Déterminer les caractéristiques d'un cercle"
On considère l'ensemble $E$ des points $M(x;y)$ qui vérifient l'équation :

$$x^2+y^2-2x-10y+17=0$$

Démontrons que l'ensemble $E$ est un cercle et déterminons ses caractéristiques (centre, rayon).

$$\tc{brown}{x^2}\tc{violet}{+y^2}\tc{brown}{-2x}\tc{violet}{-10y}+17=0$$

$$
\begin{array}{rlllllll}
	\Lrarr & \tc{brown}{x^2-2x}                                                 & + & \tc{violet}{y^2-10y}                                                   & + & 17 & = & 0 \\\\
	\Lrarr & x^2-2x\tc{blue}{+1}\tc{blue}{-1} & + & y^2-10y\tc{blue}{+25}\tc{blue}{-25} & + & 17 & = & 0 \\\\
	\Lrarr & \tc{#0AD}{(x-1)^2}-1                                               & + & \tc{green}{(y-5)^2}-25                                                 & + & 17 & = & 0 \\\\
	\Lrarr & (x-1)^2                                                            & + & (y-5)^2                                                                & - & 9  & = & 0 \\\\
	\Lrarr & (x-1)^2                                                            & + & (y-5)^2                                                                &   &    & = & 9
\end{array}
$$

On a donc $ E:(x-1)^2+(y-5)^2=3^2$

L'ensemble $E$ est le cercle de centre $A(1 ; 5)$ et de rayon $3$.

**Vérification graphique :**

![](img/geo/15.png =700x center)
```

```admonish meth title="Méthode : Déterminer les points d'intersection d'une droite et d'un cercle"
Déterminons les coordonnées des points d'intersection du cercle $\mathscr{C}$ de centre $D(3;4)$ et de rayon $4$ et de la droite $d$ d'équation $ x+y=3$

- $\mathscr{C}$ a pour équation : $(x-x_D)^2+(y-y_D)^2=r^2\ \Lrarr\ \tc{red}{(x-3)^2+(y-4)^2=16}$

- $d$ a pour équation : $\ \tc{blue}{d:x+y=3}$

Les coordonnées des points d'intersection vérifient les 2 équations

Il faut donc résoudre le système $ S:\begin{cases}\tc{red}{(x-3)^2+(y-4)^2=16}&:L_1\\\\ \tc{blue}{x+y=3}&:L_2\end{cases}$

On a $L_2:\tc{blue}{x+y=3} \Lrarr y=(3-x)$

Remplaçons $y$ dans $L_1$ par $(3-x)$ :

$$
\begin{array}{rclllll}
	\tc{red}{(x-3)^2+(y-4)^2=16} & \Lrarr & (x-3)^2    & + & ((3-x)-4)^2 & = & 16 \\\\
	                             & \Lrarr & (x-3)^2    & + & (-x-1)^2    & = & 16 \\\\
	                             & \Lrarr & (x^2-6x+9) & + & (x^2+2x+1)  & = & 16 \\\\
	                             & \Lrarr & 2x^2-4x+10 & = & 16                   \\\\
	                             & \Lrarr & 2x^2-4x-6  & = & 0                    \\\\
	                             & \Lrarr & x^2-2x-3   & = & 0
\end{array}
$$

Il reste à résoudre $x^2-2x-3=0$

$$
\begin{array}{rcl}
	x^2-2x-3=0 & \Lrarr & a=1\quad b=-2\quad c=-3                                                    \\\\
	           & \Lrarr & \Delta=b^2-4ac\enspace=(-2)^2-4\times (1)\times (-3)\enspace=16>0          \\\\
	           & \Lrarr & x_1=\cfrac{-b-\sqrt{\Delta}}{2a}\qquad x_2=\cfrac{-b+\sqrt{\Delta}}{2a}    \\\\
	           & \Lrarr & x_1=\cfrac{-(-2)-\sqrt{16}}{2}=(-1)\qquad x_2=\cfrac{-(-2)+\sqrt{16}}{2}=3
\end{array}
$$

Les 2 points d'intersection ont pour abscisses $(-1)$ et $3$.

On calcule leurs ordonnées avec $ L_2:y=(3-x)$

Au final : $\quad A(-1;4)\quad$ et $\quad B(3;0)$

**Vérification graphique :**

![](img/geo/16.png =500x center)
```
