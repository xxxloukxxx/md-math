# Orthogonalité dans l'espace

<!-- toc -->

## Produit scalaire de deux vecteurs de l'espace

### Définition et propriétés

```admonish def
Soit $\vec{u}$ et $\vec{v}$ deux vecteurs de l'espace.

$A$, $B$ et $C$ trois points de l'espace tels que $\vec{u} = \vec{AB}$ et $\vec{v} = \vec{AC}$.

Il existe un plan $P$ contenant les points $A$, $B$ et $C$.

On appelle **produit scalaire de l'espace** de $\vec{u}$ et $\vec{v}$ le produit $\boxed{\vec{u}\cdot\vec{v}=\vec{AB}\cdot\vec{AC}}$ dans le plan $P$.

![](img/ortho/image2.png =800x center)
```

```admonish prop title="Propriété : Calcul d'un produit scalire"
On retrouve alors dans l'espace toutes les propriétés du produit scalaire dans le plan :

![](img/ortho/image3.png =350x center)

- ${\vec{AB}\cdot\vec{AC}=AB\times AC\times cos\left(\widehat{BAC}\right)}$

- ${\vec{AB}\cdot\vec{AB}={\vec{AB}}^{2}=\norm{\vec{AB}}^{2}=AB^{2}}$

- $H$ est le projeté orthogonal du point $C$ sur la droite $(AB)$.
  - On a : ${\vec{AB}\cdot\vec{AC}  = \vec{AB}\cdot\vec{AH}}$

- ${\vec{AB}\cdot\vec{AC}=\cfrac{1}{2}\left({AB}^{2}+{AC}^{2}-{BC}^{2}\right)}$
```

```admonish prop title="Propriétés algébriques"
- **Symétrie** : ${\vec{u}\cdot\vec{v} = \vec{v}\cdot\vec{u}}$

- **Bilinéarité** :
  - ${\vec{u}\cdot\left( \vec{v} + \vec{w} \right) = \vec{u}\cdot\vec{v} + \vec{u}\cdot\vec{w}}$
  - ${\vec{u}\cdot\left( k\vec{v} \right) = k\vec{u}\cdot\vec{v}}$, avec $k\in\R$

- **Identités remarquables** :
  - ${\left(\vec{u}+\vec{v}\right)^{2}={\vec{u}}^{2}+2\vec{u}\cdot\vec{v}+{\vec{v}}^{2}}$
    - On peut également noter : $\norm{\vec{u}+\vec{v}}^{2}=\norm{\vec{u}}^{2}+2\vec{u}\cdot\vec{v}+\norm{\vec{v}}^{2}$
  - $\left( \vec{u} - \vec{v} \right)^{2} = {\vec{u}}^{2} - 2\vec{u}\cdot\vec{v} + {\vec{v}}^{2}$
  - $\left( \vec{u} + \vec{v} \right).\left( \vec{u} - \vec{v} \right) = {\vec{u}}^{2} - {\vec{v}}^{2}$

- **Formule de polarisation** :
  - ${\vec{u}\cdot\vec{v}=\cfrac{1}{2}\left(\norm{\vec{u}}^{2}+\norm{\vec{v}}^{2}-\norm{\vec{u}-\vec{v}}^{2}\right)}$
  - ${\vec{u}\cdot\vec{v}=\cfrac{1}{2}\left(\norm{\vec{u}+\vec{v}}^{2}-\norm{\vec{u}}^{2}-\norm{\vec{v}}^{2}\right)}$
  - ${\vec{u}\cdot\vec{v}=\cfrac{1}{4}\left(\norm{\vec{u}+\vec{v}}^{2}-\norm{\vec{u}-\vec{v}}^{2}\right)}$
```

```admonish prop title="Orthogonalité"
$${\vec{u}\cdot\vec{v}=0\quad\iff\quad\vec{u}\perp\vec{v}}$$
```

```admonish meth title="Méthode : Calculer le produit scalaire dans l'espace"
![](img/ortho/image4.png#right =300x)

$ABCDEFGH$ est un cube d'arête $a$.

Calculer les produits scalaires :

a. $\vec{AB}\cdot\vec{DG}$

b. $\vec{EF}\cdot\vec{HD}$

c. $\vec{AD}\cdot\vec{GF}$

---

a. Calcul de $\vec{AB}\cdot\vec{DG}$

$$
\begin{array}{rcl}
	\vec{AB}\cdot\vec{DG} & = & \vec{AB}\cdot\vec{AF}                                             \\\\
	                      & = & \vec{AB}\cdot\vec{AB}                                             \\\\
	                      &   & B \text{ étant le projeté orthogonal de }F\text{ sur }(AB) \\\\
	                      & = & AB^{2}\qquad=a^{2}
\end{array}
$$

b. Calcul de $\vec{EF}\cdot\vec{HD}$

$\vec{EF}\cdot\vec{HD}=\vec{EF}\cdot\vec{EA}=0\ $ car $\ \vec{EF}\ $ et $\ \vec{EA}\ $ sont orthogonaux.

c. Calcul de $\vec{AD}\cdot\vec{GF}$

$$
\begin{array}{rcl}
	\vec{AD}\cdot\vec{GF} & = & \vec{AD}\cdot\vec{DA}  \\\\
	                      & = & -\vec{AD}\cdot\vec{AD} \\\\
	                      & = & -AD^{2}\qquad =-a^{2}
\end{array}
$$
```

```admonish meth title="Méthode : Utiliser le produit scalaire pour démontrer une orthogonalité"
![](img/ortho/image5.png#right =300x)

Soit un tétraèdre régulier $ABCD$ d'arêtes de longueur $l$.

:bulb: Démontrer que les arêtes $\lbrack AD\rbrack$ et $\lbrack BC\rbrack$ sont orthogonales.

---

On va prouver que $\vec{AD}\cdot\vec{BC}=0$.

$$
\begin{array}{rcl}
	\vec{AD}\cdot\vec{BC} & = & \vec{AD}\cdot\left(\vec{BA}+\vec{AC}\right)  \\\\
	                      & = & \vec{AD}\cdot\vec{BA}+\vec{AD}\cdot\vec{AC}  \\\\
	                      & = & -\vec{AD}\cdot\vec{AB}+\vec{AD}\cdot\vec{AC}
\end{array}
$$

Dans le triangle équilatéral ABD, on a :

$$\vec{AD}\cdot\vec{AB}=AD\times AB\times cos\left(\widehat{DAB}\right)=l\times l\times \cos\left(\cfrac{\pi}{3}\right)=\cfrac{l^{2}}{2}$$

On démontre de même dans le triangle équilatéral $ADC$ que : $\ \vec{AD}\cdot\vec{AC}  = \cfrac{l^{2}}{2}$

Ainsi : $\vec{AD}\cdot\vec{BC}=-\cfrac{l^{2}}{2}+\cfrac{l^{2}}{2}=0$

Les vecteurs $\vec{AD}$ et $\vec{BC}$ sont donc orthogonaux, et donc les arêtes $\lbrack AD\rbrack$ et $\lbrack BC\rbrack$ sont orthogonales.
```

### Produit scalaire dans un repère orthonormé

```admonish def
- Une **base** $\left( \vec{i},\vec{j},\vec{k} \right)$ de l'espace est **orthonormée** si :
  - les vecteurs $\vec{i},\vec{j}$ et $\vec{k}$ sont deux à deux _orthogonaux_,
  - les vecteurs $\vec{i},\vec{j}$ et $\vec{k}$ sont _unitaires_, soit :${\norm{\vec{i}} = 1}$, ${\norm{\vec{j}}=1}$ et ${\norm{\vec{k}}=1}$.

- Un repère $\left(O\ ;\vec{i},\vec{j},\vec{k} \right)$ de l'espace est _orthonormé_, si sa base $\left( \vec{i},\vec{j},\vec{k} \right)$ est _orthonormée_.
```

```admonish prop
Dans un repère orthonormé de l'espace $\left( O\ ;\vec{i},\vec{j},\vec{k} \right)$ :

- Soit $\vec{u}\begin{pmatrix}x\\\\y\\\\z\\\\\end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\\\ y' \\\\ z' \\\\ \end{pmatrix}$ deux vecteurs de l'espace.

$$\boxed{\vec{u}\cdot\vec{v}=xx'+yy'+zz'}\quad\text{et}\quad\boxed{\norm{\vec{u}}=\sqrt{\vec{u}\cdot\vec{u}}=\sqrt{x^{2}+y^{2}+z^{2}}}$$

- Soit $A\pa{x_{A};y_{A};z_{A}}$ et $B\pa{x_{B};y_{B};z_{B}}$ deux points de l'espace.

$$\boxed{AB=\sqrt{\left(x_{B}-x_{A}\right)^{2}+\left(y_{B}-y_{A}\right)^{2}+\left(z_{B}-z_{A}\right)^{2}}}$$
```

```admonish demo
- $\vec{u}\cdot\vec{v}=xx'+yy'+zz'$

$$
\begin{array}{rcl}
	\vec{u}\cdot\vec{v} & =  & \left(x\vec{i}+y\vec{j}+z\vec{k}\right)\cdot\left(x'\vec{i}+y'\vec{j}+z'\vec{k}\right)                                                                  \\\\
	                    & =  & xx'\underbrace{\pa{\vec{i}\cdot\vec{i}}}\_{=1}+xy'\underbrace{\pa{\vec{i}\cdot\vec{j}}}\_{=0}+xz'\underbrace{\pa{\vec{i}\cdot\vec{k}}}\_{=0}+\ldots        \\\\
	                    & \  & \ldots+yx'\underbrace{\pa{\vec{j}\cdot\vec{i}}}\_{=0}+yy'\underbrace{\pa{\vec{j}\cdot\vec{j}}}\_{=1}+yz'\underbrace{\pa{\vec{j}\cdot\vec{k}}}\_{=0}+\ldots \\\\
	                    & \  & \ldots+zx'\underbrace{\pa{\vec{k}\cdot\vec{i}}}\_{=0}+xy'\underbrace{\pa{\vec{k}\cdot\vec{j}}}\_{=0}+zz'\underbrace{\pa{\vec{k}\cdot\vec{k}}}\_{=1}        \\\\
	                    & =  & xx'+yy'+zz'
\end{array}
$$

En effet, on a, par exemple, dans le plan définit par le couple $\left(\vec{i};\vec{j}\right)$ :

$$\vec{i}\cdot\vec{i}=\norm{\vec{i}}^{2}=1\ \text{, }\ \vec{j}\cdot\vec{j}=\norm{\vec{j}}^{2}=1\quad\text{et}\quad\vec{i}\cdot\vec{j}=\vec{j}\cdot\vec{i}=0$$

On a, en particulier :

- $\norm{\vec{u}}^{2}=\vec{u}\cdot\vec{u}=xx+yy+zz=x^{2}+y^{2}+z^{2}$

- $\norm{\vec{AB}}^{2}=\left(x_{B}-x_{A}\right)^{2}+\left(y_{B}-y_{A}\right)^{2}+\left(z_{B}-z_{A}\right)^{2}$
```

```admonish meth title="Méthode : Calculer un produit scalaire à l'aide des coordonnées"
![](img/ortho/image6.png#right =300x)

On considère le repère de l'espace $\left( C;\vec{CB},\vec{CD},\vec{CG} \right)$.

$I$ est le milieu du segment $\lbrack BF\rbrack$.

Les vecteurs $\vec{CE}$ et $\vec{DI}$ sont-ils orthogonaux ?

---

On a :

$$\vec{CE}\begin{pmatrix}1\\\\1\\\\1\\\\\end{pmatrix}\ \text{ et }\ \vec{DI}\begin{pmatrix}1-0\\\\0-1\\\\0,5-0\\\\\end{pmatrix}\ \text{ soit }\ \vec{DI}\begin{pmatrix}1\\\\-1\\\\0,5\\\\\end{pmatrix}$$

Alors :

$$\vec{CE}\cdot\vec{DI}=1\times 1+1\times (-1)+1\times 0,5=0,5\neq 0$$

Les vecteurs $\vec{CE}$ et $\vec{DI}$ ne sont donc pas orthogonaux.
```

## Orthogonalité

### Orthogonalité de deux droites

```admonish def
Deux droites de l'espace sont _orthogonales_ lorsque _leurs parallèles passant par un même point quelconque_ sont _perpendiculaires_.

![](img/ortho/image7.png =600x center)
```

```admonish ex
![](img/ortho/image8.png#right =350x)

$ABCDEFGH$ est un cube.

- Les droites $(EH)$ et $(EF)$ sont _perpendiculaires_.
- Les droites $(BC)$ et $(EF)$ sont _orthogonales_.
```

```admonish rem
- Deux droites _perpendiculaires_ sont _coplanaires_ et _sécantes_.
- Deux droites _perpendiculaires_ sont _orthogonales_. La réciproque n'est pas vraie car deux droites _orthogonales_ ne sont pas nécessairement coplanaires et sécantes.
```

### Orthogonalité d'une droite et d'un plan

```admonish prop
Une droite $d$ de l'espace est _orthogonale_ à un plan $P$ si et seulement si elle est _orthogonale à deux droites sécantes de $P$_.

![](img/ortho/image9.png =700x center)
```

```admonish prop
Si une droite $d$ de l'espace est _orthogonale_ à un plan $P$ alors elle est _orthogonale à toutes les droites de $P$_.
```

```admonish demo
Soit une droite $d$ de vecteur directeur $\vec{n}$ orthogonale à deux droites sécantes $d_{1}$ et $d_{2}$ de $P$.

Soit $\vec{u}$ et $\vec{v}$ des vecteurs directeurs respectifs de $d_{1}$ et $d_{2}$.

Alors $\vec{u}$ et $\vec{v}$ sont non colinéaires et orthogonaux au vecteur $\vec{n}$.

Soit une droite quelconque $\Delta$ de $P$ de vecteur directeur $\vec{w}$.

Démontrons que $\Delta$ est orthogonale à $d$.

$\vec{w}$ peut se décomposer en fonction de $\vec{u}$ et $\vec{v}$ qui constituent une base de $P$ (car non colinéaires).

Il existe donc deux réels $x$ et $y$ tels que $\vec{w} = x\vec{u} + y\vec{v}$.

Donc $\vec{w}\cdot\vec{n} = x\vec{u}\cdot\vec{n} + y\vec{v}\cdot\vec{n} = 0$, car $\vec{n}$ est orthogonal avec $\vec{u}$ et $\vec{v}$.

Donc $\vec{n}$ est orthogonal au vecteur $\vec{w}$ et donc $d$ est orthogonale à $\Delta$.
```

```admonish ex
$ABCDEFGH$ est un cube.

![](img/ortho/image10.png =400x center)

$(AE)$ est perpendiculaire aux droites $(AD)$ et $(AB)$.

$(AB)$ et $(AD)$ sont sécantes et définissent le plan $(ABD)$.

Donc $(AE)$ est orthogonal au plan $(ABC)$
```

```admonish meth title="Méthode : Démontrer que des droites sont orthogonales"
![](img/ortho/image11.png#right =350x)

$ABC$ est un triangle équilatéral.

$E$ est le point d'intersection de ses hauteurs.

La droite $d$ passant par $E$ est orthogonale au plan $(ABC)$.

La pyramide $ABCD$ est telle que $D$ soit un point de la droite $d$.

Démontrer que les droites $(BD)$ et $(AC)$ sont orthogonales.

---

La droite $d$ est orthogonale au plan $(ABC)$.

La droite $d$ est donc orthogonale à toutes les droites du plan $(ABC)$.

Comme la droite $(AC)$ appartient au plan $(ABC)$, la droite $d$ est orthogonale à la droite $(AC)$.

Par ailleurs, la droite $(AC)$ est perpendiculaire à la droite $(BE)$.

Ainsi, $(AC)$ est orthogonale à deux droites sécantes du plan $(BED)$ : $(BE)$ et $d$.

Donc $(AC)$ est orthogonale au plan $(BED)$.

Et donc la droite $(AC)$ est orthogonale à toutes les droites du plan $(BED)$.

La droite $(BD)$ appartient au plan $(BED)$ donc la droite $(AC)$ est orthogonale à la droite $(BD)$.
```

## Vecteur normal à un plan

### Définition et propriétés

```admonish def
Un vecteur non nul $\vec{n}$ de l'espace est _normal_ à un plan $P$ si $\vec{n}$ est un _vecteur directeur d'une droite orthogonale au plan $P$_.

![](img/ortho/image12.png =500x center)
```

```admonish prop
Un vecteur non nul $\vec{n}$ de l'espace est _normal_ à un plan $P$, s'il est _orthogonal à deux vecteurs non colinéaires de la direction de $P$_.

![](img/ortho/image13.png =600x center)
```

```admonish prop
Soit un point $A$ et un vecteur $\vec{n}$ non nul de l'espace.

L'ensemble des points $M$ tels que $\boxed{\vec{AM}\cdot\vec{n} = 0}$ est le _plan passant par $A$ et de vecteur normal $\vec{n}$_.

![](img/ortho/image14.png =600x center)
```

```admonish rem
![](img/ortho/image15.jpeg#right =120x)

Au XIX$^e$ siècle, le vecteur normal $\vec{n}$, appelé produit vectoriel, est noté $\vec{u}\wedge\vec{v}$.

Le produit vectoriel a été inventé par un mathématicien allemand, _Hermann Günther Grassmann_ $(1809 ; 1877)$.
```

```admonish meth title="Méthode : Déterminer si un vecteur est normal à un plan"
$ABCDEFGH$ est un cube.

![](img/ortho/image19.png =400x center)

:bulb: Démontrer que le vecteur $\vec{CF}$ est normal au plan $(ABG)$.

---

On considère le repère orthonormé $\left( B;\vec{BA},\vec{BC},\vec{BF} \right)$.

Dans ce repère : $A\begin{pmatrix}1\\\\0\\\\0\\\\\end{pmatrix}$, $B\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\\\ \end{pmatrix}$, $C\begin{pmatrix}0\\\\1\\\\0\\\\\end{pmatrix}$, $F\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\\\ \end{pmatrix}$, $G\begin{pmatrix}0\\\\1\\\\1\\\\\end{pmatrix}$.

On a ainsi :

$$\vec{CF}\begin{pmatrix}0\\\\-1\\\\1\\\\\end{pmatrix}\qquad\vec{BG}\begin{pmatrix}0\\\\1\\\\1\\\\\end{pmatrix}\qquad\vec{AB}\begin{pmatrix}-1\\\\0\\\\0\\\\\end{pmatrix}$$

Donc :

- $\vec{CF}\cdot\vec{BG}=(0)\times(0)+(-1)\times(1)+(1)\times(1)=0$
- $\vec{CF}\cdot\vec{AB}=0\times(-1)+(-1)\times(0)+(1)\times(0)=0$

Donc $\vec{CF}$ est orthogonal à deux vecteurs non colinéaires de $(ABG)$, il est donc normal à $(ABG)$.
```

```admonish meth title="Méthode : Déterminer un vecteur normal à un plan"
Dans un repère orthonormé, on donne : $A\begin{pmatrix}1\\\\2\\\\-2\\\\\end{pmatrix}$, $B\begin{pmatrix}-1\\\\3\\\\1\\\\\end{pmatrix}$ et $C\begin{pmatrix}2\\\\0\\\\-2\\\\\end{pmatrix}$.

Déterminer un vecteur normal au plan $(ABC)$.

---

On a : $\vec{AB}\begin{pmatrix}-2\\\\1\\\\3\\\\\end{pmatrix}$ et $\vec{AC}\begin{pmatrix}1\\\\-2\\\\0\\\\\end{pmatrix}$.

Soit un vecteur $\vec{n}\begin{pmatrix}a\\\\b\\\\c\\\\\end{pmatrix}$ orthogonal au plan $(ABC)$. Il est tel que : $\begin{cases}\vec{n}\cdot\vec{AB}=0\\\\\vec{n}\cdot\vec{AC}=0\\\\\end{cases}$

On a :

$$
\begin{array}{rcl}
	\begin{cases}\vec{n}\cdot\vec{AB}=0\\\\\vec{n}\cdot\vec{AC}=0\\\\\end{cases} & \iff & \begin{cases}-2a+b+3c=0\\\\a-2b=0\end{cases}                                                  \\\\
	\                                                                            & \iff & \begin{cases}-2\times2b+b+3c=0\\\\a=2b\\\\\end{cases}                                         \\\\
	\                                                                            & \iff & \begin{cases}-3b+3c=0\\\\a=2b\\\\\end{cases}\qquad\iff\begin{cases}c=b\\\\a=2b\\\\\end{cases}
\end{array}
$$

Prenons par exemple, $b = 1$ (arbitrairement choisi) alors $c = 1$ et $a = 2$.

Le vecteur $\vec{n}\begin{pmatrix}2\\\\1\\\\1\\\\\end{pmatrix}$ est donc normal au plan $(ABC)$.
```

```admonish rem
La solution n'est pas unique. Tout vecteur colinéaire à $\vec{n}$ est solution.
```

### Projections orthogonales

```admonish def
Soit un point $A$ et une droite $d$ de l'espace.

Le **projeté orthogonal du point** $\mathbf{A}$ **sur la droite** $\mathbf{d}$ est le point $H$ appartenant à $d$ tel que la droite $(AH)$ soit perpendiculaire à la droite $d$.

![](img/ortho/image20.png =400x center)
```

```admonish def
Soit un point $A$ et un plan $P$ de l'espace.

Le **projeté orthogonal du point** $\mathbf{A}$ **sur le plan** $\mathbf{P}$ est le point $H$ appartenant à $P$ tel que la droite $(AH)$ soit orthogonale au plan $P$.

![](img/ortho/image21.png =400x center)
```

```admonish prop
Le projeté orthogonal d'un point $M$ sur un plan $P$ est le point de $P$ le plus proche de $M$.

![](img/ortho/image22.png =400x center)
```

```admonish demo
Soit $H$ le projeté orthogonal du point $M$ sur le plan $P$.

Supposons qu'il existe un point $K$ du plan $P$ plus proche de $M$ que l'est le point $H$.

On a $\ KM \le HM\ $ car $K$ est le point de la droite le plus proche de $M$. Donc ${KM}^{2} \le {HM}^{2}$.

Or, $(MH)$ est orthogonale à $P$, donc $(MH)$ est orthogonale à toute droite de $P$.

En particulier, $(MH)$ est perpendiculaire à $(HK)$.

Le triangle $MHK$ est donc rectangle en $H$.

D'après Pythagore, on a : ${HM}^{2}+{HK}^{2}={KM}^{2}$

Donc $\ {HM}^{2}+{HK}^{2}\le{HM}^{2}$.

Donc $\ {HK}^{2} \le 0$. Ce qui est impossible sauf dans le cas où le point $K$ est le point $H$.

On en déduit que $H$ est le point du plan le plus proche du point $M$.
```

```admonish meth title="Méthode : Utiliser la projection orthogonale pour déterminer la distance d'un point à un plan"
![](img/ortho/image23.png =400x center)

Soit un cube $ABCDEFGH$.

On considère le repère orthonormé $\left( A;\vec{AB},\vec{AD},\vec{AE} \right)$.

a. Calculer les coordonnées du projeté orthogonal $I$ du point $G$ sur le plan $(BDE)$.

b. En déduire la distance $GI$ du point $G$ au plan $(BDE)$.

---

a. On cherche à déterminer les coordonnées $\begin{pmatrix}x\\\\y\\\\z\\\\\end{pmatrix}$ du point $I$.

Dans le repère orthonormé $\left(A;\vec{AB},\vec{AD},\vec{AE}\right)$, on a :

$$
B\begin{pmatrix}1\\\\0\\\\0\\\\\end{pmatrix},D\begin{pmatrix}0\\\\1\\\\0\\\\\end{pmatrix},E\begin{pmatrix}0\\\\0\\\\1\\\\\end{pmatrix},G\begin{pmatrix}1\\\\1\\\\1\\\\\end{pmatrix}
$$

On a alors :

$$\vec{BD}\begin{pmatrix}-1\\\\1\\\\0\\\\\end{pmatrix}\qquad\vec{EB}\begin{pmatrix}1\\\\0\\\\-1\\\\\end{pmatrix}\qquad\vec{BI}\begin{pmatrix}x-1\\\\y\\\\z\\\\\end{pmatrix}\qquad\vec{GI}\begin{pmatrix}x-1\\\\y-1\\\\z-1\\\\\end{pmatrix}$$

Or, $(GI)$ est orthogonale au plan $(BDE)$ donc $\vec{GI}$ est orthogonal aux vecteurs $\vec{BD}$ et $\vec{EB}$.

$$
\begin{array}{rcl}
	\vec{BD}\cdot\vec{GI}  = 0 & \iff & (-1)\times(x-1)+(1)\times(y-1)+(0)\times(z-1)=0 \\\\
	                           & \iff & -x+1+y-1=0                                      \\\\
	                           & \iff & x = y
\end{array}
$$

$$
\begin{array}{rcl}
	\vec{EB}\cdot\vec{GI}=0 & \iff & (1)\times(x-1)+(0)\times(y-1)+(-1)\times(z-1)=0 \\\\
	\                       & \iff & x-1-z+1=0                                       \\\\
	\                       & \iff & x=z
\end{array}
$$

On a ainsi : $x = y = z$

De plus, $\vec{GI}$ est orthogonal au vecteur $\vec{BI}$, soit :

$$
\begin{array}{rcl}
	\vec{BI}\cdot\vec{GI} = 0 & \iff & (x-1)^{2}+y(y-1)+z(z-1)=0                                \\\\
	\                         & \iff & (x-1)^{2}+x(x-1)+x(x-1)=0\qquad\text{car}\quad x = y = z \\\\
	\                         & \iff & (x-1)(x-1+x+x)=0                                         \\\\
	\                         & \iff & (x-1)(3x-1)=0
\end{array}
$$

Donc $(3x-1)=0$ car $(x - 1) \neq 0$ sinon $I$ et $G$ sont confondus, ce qui est impossible.

Soit $x=\cfrac{1}{3}$

On en déduit les coordonnées de $I$ : $\left( \cfrac{1}{3};\cfrac{1}{3};\cfrac{1}{3} \right)$.

b. Et ainsi :

$$
IG=\sqrt{\left(1-\cfrac{1}{3}\right)^{2}+\left(1-\cfrac{1}{3}\right)^{2}+\left(1-\cfrac{1}{3}\right)^{2}}=\sqrt{3\times\left(\cfrac{2}{3}\right)^{2}}=\cfrac{2}{3}\sqrt{3}\approx 1,155
$$
```
