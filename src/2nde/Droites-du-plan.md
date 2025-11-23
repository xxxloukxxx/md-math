# Droites du plan

<!-- toc -->

## Vecteur directeur d'une droite

### Vecteur directeur

```admonish def
$\mathcal{D}$ est une droite du plan.

On appelle **vecteur directeur** de $\mathcal{D}$ tout vecteur non nul $\vec{u}$ qui possède la même direction que la droite $\mathcal{D}$.

![](img/droites/01tt.png =400x center)
```

```admonish meth title="Méthode : Déterminer graphiquement un vecteur directeur d'une droite"
Donner des vecteurs directeurs des droites $d_1$, $d_2$, $d_3$ et $d_4$.

![](img/droites/02.png =400x center)

---

Pour $\tc{red}{d_1}$ :

On a : $\tc{red}{\vec{a}}\coord{1}{2}$ ou $\tc{red}{\vec{b}}\coord{2}{4}$ ou encore $\tc{red}{\vec{c}}\coord{-1}{-2}$.

![](img/droites/03.png =400x center)

---

![](img/droites/04.png#right =400x)

- Pour $d_2$ : $\tc{green}{\vec{d}\coord{6}{0}}$
- Pour $d_3$ : $\tc{blue}{\vec{u}\coord{1}{-1}}$
- Pour $d_4$ : $\tc{violet}{\vec{v}\coord{0}{2}}$
```

## Équation cartésienne d'une droite

### Définition et théorème

```admonish th
Toute droite $\mathcal{D}$ admet une équation de la forme $$ax + by + c =0$$ avec $a\neq0$ et $b\neq0$.

Cette équation est appelée **équation cartésienne** de la droite $\mathcal{D}$.

Un vecteur directeur de $\mathcal{D}$ est $\vec{u}\coord{-b}{a}$.
```

```admonish ex
![](img/droites/06tt.png#right =300x)

Soit une droite $(d)$ d'équation cartésienne

$$4x-5y-1=0$$

Alors $\tc{green}{\vec{u}\coord{5}{4}}$ est un **vecteur directeur** de $(d)$.
```

### Théorème réciproque

```admonish th
L'ensemble des points $M\left(x ; y\right)$ tels que $$ax + by + c =0$$ avec $\left( a\ ;b \right) \neq \left(0\ ;0 \right)$, est une droite $\mathcal{D}$ de vecteur directeur $\vec{u}\coord{-b}{a}$.
```

```admonish meth Title="Méthode : Déterminer une équation cartésienne à partir d'un point et d'un vecteur directeur"

Déterminer une équation cartésienne de la droite $(d)$ passant par le point $A\left(3 ;1\right)$ et de vecteur directeur $\coord{-1}{5}$.

![](img/droites/07.png =300x center)

> **Méthode n°1**
>
> Soit un point $M(x ; y)$ de la droite $(d)$.
>
> Les vecteurs $\tc{green}{\vec{AM}}$ et $\tc{blue}{\vec{u}}$ sont colinéaires.
>
> ![](img/droites/08.1.png =300x center)
>
> On a $\vec{AM}\coord{x-3}{y-1}$ et $\vec{u}\coord{-1}{5}$
>
> $$
> \begin{aligned}
> 	\tc{green}{\vec{AM}}\text{ et }\tc{blue}{\vec{u}}\text{ colinéaires } & \iff \det\left( \vec{\text{AM}}\ ;\vec{u} \right) =0                 \\\\
> 	\quad                                                                 & \iff \left| \begin{matrix}x -3& -1\\\\ y -1&5\end{matrix} \right| =0 \\\\
> 	\quad                                                                 & \iff5(x-3)-(y-1)(-1)=0                                               \\\\
> 	\quad                                                                 & \iff5x+y-16=0
> \end{aligned}
> $$
>
> Une équation cartésienne de $(d)$ est :
>
> $$5x+y-16=0$$

> **Méthode n°2**
>
> Le vecteur $\vec{u}\coord{ \tc{blue}{-1}}{\tc{green}{5}}$ est un vecteur directeur de $(d)$ donc son équation est de la forme :
>
> $$\tc{green}{5}x+\tc{blue}{1}y+c=0$$
>
> Le point $A\left(3 ;1\right)$ appartient à la droite $(d)$ donc ses coordonnées vérifient l'équation :
>
> $$
> \begin{aligned}
	> 5x_A+y_A+c=0 & \iff5\times3+1+c=0 \\\\
	             > & \iff16 + c=0          \\\\
	             > & \iff c=-16
> \end{aligned}
> $$
>
> Une équation cartésienne de $(d)$ est :
>
> $$5x+y-16=0$$
```

## Équation réduite d'une droite

### De l'équation cartésienne à l'équation réduite

```admonish rem
![](img/droites/09.1tt.png#right =250x)

Si $b \neq 0$, alors l'équation cartésienne $ax + by + c =0$ de la droite $(d)$ peut être ramenée à une équation réduite :

$$y = \tc{red}{-\cfrac{a}{b}}x \tc{blue}{-\cfrac{c}{b}}\qquad\text{ou}\qquad y = \tc{red}{m}x +\tc{blue}{p}$$

On note $\quad\tc{red}{m = -\cfrac{a}{b}}\quad$ et $\quad\tc{blue}{p = -\cfrac{c}{b}}$
```

```admonish def title="Vocabulaire"
- $\tc{red}{m}$ est **la pente** ou **le coefficient directeur** de la droite $(d)$.
- $\tc{blue}{p}$ est appelé **l'ordonnée à l'origine** de la droite $(d)$.
```

```admonish rem
![](img/droites/10tt.png#right =200x)

Si $b=0$, alors l'équation cartésienne $ax+by+c=0$ de la droite $(d)$ peut être ramenée à l'équation réduite :

$$x=\tc{green}{\cfrac{-c}{a}}$$

Dans ce cas, la droite $(d)$ est parallèle à l'axe des ordonnées.
```

```admonish ex
![](img/droites/11.png#right =350x)

Soit $(d)$ une droite d'équation cartésienne

$$4x + y -6=0$$

Son équation réduite est :

$$
\begin{aligned}
	4x + y -6=0 & \iff\ 4x + y = 6                       \\\\
	            & \iff\ y = \tc{red}{-4}x + \tc{blue}{6} \\\\
\end{aligned}
$$
```

### Équation réduite

```admonish prop
![](img/droites/12.png#right =200x)

Soit $\left(O;\vec{i},\vec{j}\right)$ un repère du plan. Soit $\mathcal{D}$ une droite du plan.

- Si $\mathcal{D}$ est parallèle à l'axe des ordonnées :
  - L'équation de $\mathcal{D}$ est de la forme $$x = \tc{green}{n}$$ ...où $\tc{green}{n}$ est un nombre réel.

- Si $\mathcal{D}$ n'est pas parallèle à l'axe des ordonnées :
  - L'équation de $\mathcal{D}$ est de la forme $$y=\tc{red}{m}x+\tc{blue}{p}$$ ...où $\tc{red}{m}$ et $\tc{blue}{p}$ sont deux nombres réels.
```

```admonish ex
![](img/droites/13.png#right =300x)

- $D$ a pour équation $x = \tc{green}{3}$
- $D^\prime$ a pour équation $y = \tc{red}{3}x + \tc{blue}{2}$
  - Son **ordonnée à l'origine** est $\tc{blue}{2}$
  - Son **coefficient directeur** est $\tc{red}{+3}$.
```

```admonish meth title="Méthode : Représenter graphiquement une droite d'équation réduite"

Tracer les droites $d_1$, $d_2$ et $d_3$ d'équations réduites respectives :

- $y =2x +3$
- $y =4$
- $x =3$

---

> La droite $d_1$ d'équation $y =2x +3$ a pour ordonnée à l'origine $3$.
>
> Donc le point $A\left(0;3\right)$ appartient à la droite $d_1$.
>
> Soit $B$ le point d'abscisse $1$ appartenant à la $d_1$.
>
> Les coordonnées de $B$ vérifient l'équation de $d_1$, donc :
>
> $$
> \begin{aligned}
> 	y_B & =2\times x_B +3    \\\\
> 	    & =2\times (1) +3=5
> \end{aligned}
> $$
>
> Le point $B\left(1;5\right)$ appartient à la droite $d_1$.
>
> On peut ainsi tracer la droite $d_1$ passant par $A\left(0;3\right)$ et $B\left(1;5\right)$.
>
> ![](img/droites/16.png =250x center)

---

> La droite $d_2$ d'équation $y =4$ est l'ensemble des points dont l'ordonnée est égale à $4$.
>
> La droite $d_2$ est donc la droite parallèle à l'axe des abscisses coupant l'axe des ordonnées au point de coordonnées $\left(0;4\right)$
>
> ![](img/droites/17.png =250x center)

---

> La droite $d_3$ d'équation $x=3$ est l'ensemble des points dont l'abscisse est égale à $3$.
>
> La droite $d_3$ est donc la droite parallèle à l'axe des ordonnées coupant l'axe des abscisses au point de coordonnées $\left(3;0\right)$
>
> ![](img/droites/18tt.png =400x center)
```

### Propriété réciproque

```admonish prop
Soit $\left(O;\vec{i},\vec{j}\right)$ un repère du plan et $m$, $p$, $n$ trois nombres réels, $m$ étant non nul.

L'ensemble des points $M$ du plan dont les coordonnées $\left(x;y\right)$ tels que :

$$y = mx + p\quad\text{ou}\quad x = n$$

... est une droite.
```

```admonish meth title="Méthode : Vérifier si un point appartient à une droite d'équation donnée"
Soit la droite $(d)$ d'équation $y=7x-3$

Les points $A\coordl{6.4}{42}$ et $B\coordl{346}{2419}$ appartiennent-ils à $(d)$ ?

---

Dire que le point $A\coordl{6.4}{42}$ appartient à $(d)$ d'équation $y=7x-3$ revient à dire que les coordonnées de $A$ vérifient l'équation de $(d)$.

$$
\begin{aligned}
	7\times x_A-3 & =7 \times 6.4 -3 \\\\
	              & =41.8 \neq 42    \\\\
\end{aligned}
$$

Donc $\qquad y_A \neq 7\times x_A-3\quad\Rarr\quad$Le point $A$ n'appartient pas à $(d)$.

---

Dire que le point $B\coordl{346}{2419}$ appartient à $(d)$ d'équation $y=7x-3$ revient à dire que les coordonnées de $B$ vérifient l'équation de $(d)$.

$$
\begin{aligned}
	7\times x_B-3 & =7 \times 346-3   \\\\
	              & = 2419\quad = y_B \\\\
\end{aligned}
$$

Donc $\quad y_B =7\times x_B-3\quad\Rarr\quad$ Le point $B$ appartient à $(d)$.
```

```admonish rem
Pour démontrer que $A$, $B$ et $C$ sont alignés, il suffit de montrer que le point $A$ vérifie l'équation de la droite $(BC)$.
```

### Coefficient directeur

```admonish prop
Si $\quad A\coordl{x_{A}}{y_{A}}\quad$ et $\quad B\coordl{x_{B}}{y_{B}}\quad$ sont deux points distincts d'une droite $\mathcal{D}$ tel que $x_{A} \neq x_{B}$ alors la droite $\mathcal{D}$ a pour **pente** (ou **coefficient directeur**) :

$$m = \cfrac{y_{B} - y_{A}}{x_{B} - x_{A}}=\cfrac{\Delta y}{\Delta x}$$
```

```admonish meth title="Méthode : Déterminer une équation réduite de droite dont on connaît deux points"

Soit $A\coordl{4}{-1}$ et $B\coordl{3}{5}$ deux points d'une droite $(d)$.

Déterminer une équation de la droite $(d)$.

---

On a $A\coordl{4}{-1}$ et $B\coordl{3}{5}$ donc $x_A\neq x_B$ donc la droite $(d)$ n'est pas parallèle à l'axe des ordonnées.

L'équation de $(d)$ est de la forme :

$$\qquad y = mx + p$$

... où $m$ et $p$ sont deux nombres réels.

- Le coefficient directeur de $(d)$ est :

$$m=\cfrac{y_{B} - y_{A}}{x_{B} - x_{A}}=\cfrac{5-(-1)}{3-4}=-6$$

L'équation de $(d)$ est donc de la forme :

$$y=-6x+p$$

- Comme $A\coordl{4}{-1}$ appartient à $(d)$, ses coordonnées vérifient l'équation de $(d)$ soit :

$$
\begin{array}{lrcl}
	     & y_A & = & -6\times x_A+p  \\\\
	\iff & -1  & = & -6\times 4+p    \\\\
	\iff & p   & = & -1+6\times 4\qquad =23 \\\\
\end{array}
$$

Une équation de $(d)$ est donc : $y = -6x +23$

![](img/droites/19.png =400x center)
```

## Position relative de deux droites

### À partir l'aide de l'équation cartésienne

```admonish prop
Dire que $(D)$ et $(D')$ sont parallèles entre-elles équivaut à dire qu'elles ont des **vecteurs directeurs colinéaires**.
```

```admonish meth title="Méthode : Démontrer que deux droites sont parallèles"
Démontrons que les droites $(d_1):6x-10y-5=0$ et $(d_2):-9x+15y=0$ sont parallèles.

- Le vecteur $\vec{u}\coord{10}{6}$ est un vecteur directeur de la droite $(d_1)$.
- Le vecteur $\vec{v}\coord{-15}{-9}$ est un vecteur directeur de la droite $(d_2)$.

Calculons $\det\left(\vec{u}\ ;\vec{v} \right)$ :

$$\det\left(\vec{u};\vec{v}\right)=\left|\begin{matrix}10&-15\\\\6&-9\\\\\end{matrix}\right|\quad=10\times\left(-9\right)-6\times\left(-15\right)\quad=0$$

Donc $\vec{u}$ et $\vec{v}$ sont colinéaires et $(d_1)\parallel(d_2)$.
```

### À partir l'aide de l'équation réduite

```admonish prop
Soit $(D)$ et $(D')$ deux droites non parallèles à l'axe des ordonnées.

Dire que $(D)$ et $(D')$ sont parallèles entre-elles équivaut à dire qu'elles ont le **même coefficient directeur**.
```

```admonish ex
Soient les droites d'équations :

- $(d_1):y=0.5x+2$
- $(d_2):y=0.5x-1$

$(d_1)$ est parallèle à $(d_2)$ car leurs coefficients directeurs sont égaux à $0.5$
```

```admonish note title="Tableau récapitulatif"
|   **Équation de** $D$ |             $x=n$              |            $y=mx+p$            |
| --------------------: | :----------------------------: | :----------------------------: |
|  **Équation de** $D'$ |             $x=n'$             |             $x=n$              |
| **Position relative** |        $D\parallel D'$         |      $D$ et $D'$ sécantes      |
|    **Représentation** | ![](img/droites/20a.png =150x) | ![](img/droites/20b.png =150x) |

|   **Équation de** $D$ |            $y=mx+p$            |            $y=mx+p$            |
| --------------------: | :----------------------------: | :----------------------------: |
|  **Équation de** $D'$ |           $y=m'x+p'$           |           $y=m'x+p'$           |
| **Position relative** |           Si $m=m'$            |         Si $m\neq m'$          |
|    **Représentation** | ![](img/droites/20c.png =150x) | ![](img/droites/20d.png =150x) |
```

```admonish ex
Dans un repère du plan, on a :

- $(d_1) : y=3x+4$
- $(d_2) : y=3x+9$
- $(d_3) : x=8$

$(d_1)\parallel(d_2)$ car elles ont un **coefficient directeur** égal à $3$.

Les droites $(d_1)$ et $(d_3)$ sont **sécantes**.
```

## Projeté orthogonal d'un point sur une droite

### Projeté orthogonal

```admonish def
Soit une droite $(d)$ et un point $M$ du plan.

Le **projeté orthogonal** du point $M$ sur $(d)$ est le point d'intersection $H$ de $(d)$ avec **la perpendiculaire** à $(d)$ passant par $M$.

![](img/droites/21.png =300x center)
```

### Distance minimale

```admonish prop
Le projeté orthogonal de $M$ sur $(d)$ est le point de la droite $(d)$ le plus proche du point $M$.
```

```admonish demo
Soit $H$ le projeté orthogonal du point $M$ sur $(d)$.

**Supposons** qu'il existe un point $K$ de $(d)$ plus proche de $M$ que l'est $H$.

![](img/droites/22.png =300x center)

On a $\quad KM\leq HM\quad$ (car $K$ est le point de $(d)$ le plus proche de $M$)

Donc $KM^2\leq HM^2$

Or, d'après l'égalité de Pythagore, on a :

$$HM^2 + HK^2 = KM^2\quad\leq HM^2$$

Donc

$$HM^2 + HK^2 \leq HM^2$$

Donc $HK^2 \leq0$.

Ce qui est impossible sauf dans le cas où le point $K$ est le point $H\quad$($HK=0$ dans ce cas).

On en déduit que $H$ est le point de $(d)$ le plus proche de $M$.
```

```admonish demo

**Démonstration :** $\left(\cos\alpha\right)^2+\left(\sin\alpha\right)^2=1$

![](img/droites/23.png#right =250x)

Soit une droite $(d)$ et un point $P\in (d)$.

Soit un point $M$ n'appartenant pas à $d$.

On appelle $H$ le projeté orthogonal de $M$ sur $(d)$.

On note $\alpha$ l'angle $\widehat{\text{MPH}}$.

Le triangle $PHM$ est rectangle en $H$, on a donc :

- $\cos\alpha =\cfrac{PH}{PM}\quad$ soit $\quad PH = PM \times \cos\alpha$.
- $\sin\alpha =\cfrac{HM}{PM}\quad$ soit $\quad HM = PM \times \sin\alpha$.

D'après le théorème de Pythagore, on a :
$$PH^2 + HM^2 = PM^2$$

Soit en remplaçant les valeurs de $PH$ et $HM$ :

$$
\begin{array}{rcccl}
	     & PH^2                                    & + & HM^2                                      & = & PM^2 \\\\
	\iff & \left( PM \times \cos\alpha \right)^2   & + & \left( PM \times \sin\alpha \right)^2     & = & PM^2 \\\\
	\iff & PM^2 \times \left( \cos\alpha \right)^2 & + & {PM^2 \times \left( \sin\alpha \right)}^2 & = & PM^2 \\\\
	\iff & \left( \cos\alpha \right)^2             & + & \left( \sin\alpha \right)^2               & = & 1
\end{array}
$$

Donc, pour tout $\alpha\in\left[\ 0^\circ\ ;\ 90^\circ\right[$, on a :

$$\left(\cos\alpha\right)^2+\left(\sin\alpha\right)^2 =1$$
```
