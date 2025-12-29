# Vecteurs, droites et plans dans l'espace

<!-- toc -->

## Vecteurs de l'espace

### Notion de vecteur dans l'espace

```admonish def
Un **vecteur de l'espace** est défini par un direction de l'espace, un sens et une norme (longueur).
```

```admonish prop
Dire que $M'$ est l'image de $M$ par la **translation** de vecteur $\vec{u}$ revient à dire que : $${\vec{MM'} = \vec{u}}$$
```

```admonish rem
- Les **vecteurs** de l'espace suivent les mêmes règles de construction qu'en géométrie plane : somme, produit par un réel, relation de Chasles, colinéarité, $\ldots$

- Les **translations** gardent les mêmes propriétés qu'en géométrie plane : conservation du parallélisme, de l'orthogonalité, du milieu, $\ldots$
```

### Combinaisons linéaires de vecteurs de l'espace

```admonish def
Soit $\vec{u}$, $\vec{v}\ $ et $\ \vec{w}$ trois vecteurs de l'espace.

Tout vecteur de la forme $\ {a\vec{u}+b\vec{v}+c\vec{w}}\ $, avec $a$, $b\ $ et $\ c\in\R$, est appelé **combinaison linéaire** des vecteurs $\vec{u}$, $\vec{v}\ $ et $\ \vec{w}$.
```

```admonish meth title="Méthode : Représenter des combinaisons linéaires de vecteurs donnés"
![](img/vect/image2.png#right =300x)

À l'aide du cube ci-contre, représenter les vecteurs $\vec{a}$, $\vec{b}\ $ et $\ \vec{c}$ donnés par :

- $\vec{a}=\vec{AB}+\vec{CG}+\vec{FH}$

- $\vec{b}=2\vec{AB}+\vec{BD}-\vec{FC}$

- $\vec{c}=\cfrac{1}{2}\vec{AD}+\vec{EF}+\vec{BF}-\vec{AC}$

---

- $\vec{a}=\vec{AB}+\vec{CG}+\vec{FH}$

On construit un chemin d'origine $A$ et formé des vecteurs $\vec{AB},\vec{CG}$ (soit $\vec{BF}$) et $\vec{FH}$.

![](img/vect/image3.png =350x center)

- $\vec{b}=2\vec{AB}+\vec{BD}-\vec{FC}$

![](img/vect/image4.png =450x center)

- $\vec{c}=\cfrac{1}{2}\vec{AD}+\vec{EF}+\vec{BF}-\vec{AC}$

![](img/vect/image5.png =350x center)
```

```admonish meth title="Méthode : Exprimer un vecteur comme combinaison linéaire de vecteurs"
Dans le parallélépipède ci-dessous, $M$ est le centre du rectangle $ABCD$.

![](img/vect/image6.png =350x center)

:bulb: Exprimer les vecteurs $\vec{CE},$ $\vec{MG}\ $ et $\ \vec{MF}$ comme combinaison linéaire des vecteurs $\vec{AM}$, $\vec{AB}\ $ et $\ \vec{AE}$.

---

- On commence par construire un chemin d'origine $C$ et d'extrémité $E$ à l'aide des vecteurs $\vec{AM}$, $\vec{AB}$ ou $\vec{AE}$ ou des vecteurs qui leurs sont colinéaires.

  On a : $\vec{CE}=\vec{CA}+\vec{AE}\quad=-2\vec{AM}+\vec{AE}$

![](img/vect/image7.png =350x center)

- $\vec{MG}=\vec{MC}+\vec{CG}=\vec{AM}+\vec{AE}$

![](img/vect/image8.png =350x center)

- $\vec{MF}=\vec{MA}+\vec{AB}+\vec{BF}=-\vec{AM}+\vec{AB}+\vec{AE}$

![](img/vect/image9.png =350x center)
```

## Droites et plans de l'espace

### Direction d'une droite de l'espace

```admonish def
On appelle **vecteur directeur** de $d$ tout vecteur non nul qui possède la _même direction_ que la droite $d$.
```

```admonish prop
Soit une droite $d$ passant par un point $A$ et de vecteur directeur $\vec{u}$.

Un point $M$ appartient à la droite $d$ si et seulement si les vecteurs $\vec{AM}\ $ et $\ \vec{u}$ sont _colinéaires_.
```

```admonish prop
Deux droites de l'espace de vecteurs directeurs $\vec{u}\ $ et $\ \vec{v}$ sont _parallèles_ si et seulement si les vecteurs $\vec{u}\ $ et $\ \vec{v}$ sont _colinéaires_.
```

### Direction d'un plan de l'espace

```admonish prop
Deux vecteurs non nuls et non colinéaires déterminent la _direction_ d'un plan.

![](img/vect/image10.png =550x center)
```

```admonish prop
Soit un plan $P$ passant par un point $A$ et dirigé par deux vecteurs $\vec{u}\ $ et $\ \vec{v}$ non colinéaires.

Un point $M$ appartient au plan $P$ si et seulement si $\ {\vec{AM}=x\vec{u}+y\vec{v}}\quad$ avec $x\in\R\ $ et $\ y\in\R$.

![](img/vect/image11.png =550x center)
```

```admonish demo
- Soit deux points $B\ $ et $\ C$ tel que $\vec{u}=\vec{AB}\ $ et $\ \vec{v}=\vec{AC}$.

  $\vec{u}\ $ et $\ \vec{v}$ ne sont pas colinéaires donc $\left(A;\vec{u},\vec{v}\right)$ est un repère du plan ($ABC$).

  Dans ce repère, tout point $M$ de coordonnées $(x,y)$ est tel que $\vec{AM} = x\vec{u} + y\vec{v}$.

- Réciproquement, soit $M$ un point de l'espace tel que $\vec{AM} = x\vec{u} + y\vec{v}$.

  Soit $N$ le point du plan ($ABC$) de coordonnées $(x,y)$ dans le repère $\left( A;\vec{u},\vec{v} \right)$.

  Alors $\vec{AN} = x\vec{u} + y\vec{v}$ et donc $\vec{AN} = \vec{AM}$.

  $M\ $ et $\ N$ sont confondus donc $M$ appartient à ($ABC$).
```

```admonish rem
Un plan est donc totalement déterminé par _un point_ et _deux vecteurs non colinéaires_.
```

```admonish prop
Deux plans déterminés par le même couple de vecteurs non colinéaires sont _parallèles_.
```

```admonish demo
Soit deux plan $P\ $ et $\ P'$ de repères respectifs $\left(A;\vec{u},\vec{v}\right)\ $ et $\ \left(B;\vec{u},\vec{v}\right)$.

- Si $P\ $ et $\ P'$ sont confondus, la démonstration est triviale.

- Dans la suite $P\ $ et $\ P'$ ne sont pas confondus.

  Supposons que $P\ $ et $\ P'$ possède un point $M$ en commun.

  Alors dans $P$, on a : $\vec{AM}=x\vec{u}+y\vec{v}$, où $(x,y)$ sont les coordonnées de $M$ dans $P$.

  Et dans $P'$, on a : $\vec{BM}=x'\vec{u}+y'\vec{v}$, où $(x',y')$ sont les coordonnées de $M$ dans $P'$.

  Donc $\vec{AB}=\vec{AM}-vec{BM}=(x-x')\vec{u}+(y-y')\vec{v}$ donc $B$ appartient à $P$.

  Donc le repère $\left( B;\vec{u},\vec{v} \right)$ est un repère de $P$ et donc $P\ $ et $\ P'$ sont confondus ce qui est contraire à l'hypothèse de départ.

  $P\ $ et $\ P'$ n'ont aucun point en commun et sont donc parallèles.
```

```admonish note title="Conséquence :"
Pour démontrer que deux plans sont parallèles, il suffit de montrer que deux vecteurs non colinéaires de l'un des plans sont respectivement colinéaires à deux vecteurs non colinéaires de l'autre.
```

```admonish meth title="Méthode : Démontrer que deux plans sont parallèles"
$SABC$ est une pyramide. $I$, $J\ $ et $\ K$ sont les milieux respectifs de $\lbrack SA\rbrack$, $\lbrack SB\rbrack\ $ et $\ \lbrack SC\rbrack$.

![](img/vect/image12.png =250x center)

Démontrer que les plans $(IJK)\ $ et $\ (ABC)$ sont parallèles.

---

Deux plans sont parallèles, si deux vecteurs non colinéaires de l'un sont respectivement colinéaires à deux vecteurs non colinéaires de l'autre.

- Démontrons que $\vec{IJ}\ $ et $\ \vec{AB}$ sont colinéaires :

  $$
  \begin{array}{rcl}
  	\vec{IJ} & = & \vec{IS}+\vec{SJ}                                                                                                                           \\\\
  	         & = & \cfrac{1}{2}\vec{AS}+\cfrac{1}{2}\vec{SB}                                                                                                   \\\\
  	         & = & \cfrac{1}{2}\left(\vec{AS}+\vec{SB}\right)\qquad=\cfrac{1}{2}\vec{AB}\qquad\text{donc }\vec{IJ}\text{ et }\vec{AB}\text{ sont colinéaires.}
  \end{array}
  $$

- Dans le triangle $SBC$, on démontre de même que $\vec{JK}\ $ et $\ \vec{BC}$ sont colinéaires.
- Deux vecteurs non colinéaires du plan $(IJK)$, $\vec{IJ}\ $ et $\ \vec{JK}$, sont respectivement colinéaires à deux vecteurs non colinéaires du plan $(ABC)$, $\vec{AB}\ $ et $\ \vec{BC}$, donc $(IJK)\ $ et $\ (ABC)$ sont _parallèles_.
```

## Positions relatives de droites et de plans de l'espace

### Positions relatives de deux droites

```admonish prop
Deux droites de l'espace sont soit _coplanaires_ (dans un même plan) soit _non coplanaires_.

| $d_1\ $ et $\ d_2$ sont coplanaires        |                                        |                                        |
| :------------------------------------- | :------------------------------------- | :------------------------------------- |
| $d_1\ $ et $\ d_2$ sont sécantes           | $d_1\ $ et $\ d_2$ sont parallèles         |                                        |
|                                        | strictement parallèles ou ...          | ...confondues                          |
| ![](img/vect/image13.png =300x center) | ![](img/vect/image14.png =300x center) | ![](img/vect/image15.png =300x center) |

| $d_1\ $ et $\ d_2$ sont _non_ coplanaires  |
| :------------------------------------- |
| $d_1\ $ et $\ d_2$ sont _non_ sécantes     |
| ![](img/vect/image16.png =300x center) |
```

```admonish ex
$ABCDEFGH$ est un cube.

![](img/vect/image17.png =350x center)

- Les droites $(EG)\ $ et $\ (FG)$ appartiennent au même plan $(EFG)$ et sont sécantes en $G$.
- Les droites $(AD)\ $ et $\ (FG)$ appartiennent au même plan $(ADG)$ et sont parallèles.
- Les droites $(AD)\ $ et $\ (CG)$ sont non coplanaires.
```

### Positions relatives de deux plans

```admonish prop
Deux plans de l'espace sont soit _sécants_ soit _parallèles_.

|      $P_1\ $ et $\ P_2$ sont sécants       | $P_1\ $ et $\ P_2$ sont parallèles ou ...  |             ... confondus              |
| :------------------------------------: | :------------------------------------: | :------------------------------------: |
| ![](img/vect/image18.png =300x center) | ![](img/vect/image19.png =300x center) | ![](img/vect/image20.png =300x center) |
```

```admonish ex
$ABCDEFGH$ est un parallélépipède rectangle.

![](img/vect/image21.png =550x center)

- Les plans $(BCG)\ $ et $\ (BCE)$ sont sécants suivant la droite $(BC)$.
- Les plans $(ABC)\ $ et $\ (EFG)$ sont parallèles
```

### Positions relatives d'une droite et d'un plan

```admonish prop
Une droite et un plan de l'espace sont soit _sécants_ soit _parallèles_.

|        $d\ $ et $\ P$ sont sécants         | $P_1\ $ et $\ P_2$ sont parallèles ou ...  |       ... strictement parallèles       |
| :------------------------------------: | :------------------------------------: | :------------------------------------: |
| ![](img/vect/image22.png =300x center) | ![](img/vect/image23.png =300x center) | ![](img/vect/image24.png =300x center) |
|     $d\ $ et $\ P$ sont sécants en $I$     |        $d$ est incluse dans $P$        | $d\ $ et $\ P$ sont strictement parallèles |
```

```admonish ex
$ABCDEFGH$ est un cube.

![](img/vect/image25.png =350x center)

- La droite $(GI)$ et le plan $(ABC)$ sont sécants en $I$.
- La droite $(EG)$ est incluse dans le plan $(EFG)$.
- La droite $(EG)$ et le plan $(ABC)$ sont parallèles.
```

## Bases et repères de l'espace

### Vecteurs coplanaires et bases de l'espace

```admonish def
Trois vecteurs de l'espace sont **coplanaires** s'ils possèdent des _représentants appartenant à un même plan_.

![](img/vect/image26.png =750x center)
```

```admonish prop
Trois vecteurs $\vec{u}$, $\vec{v}\ $ et $\ \vec{w}$ de l'espace sont coplanaires, s'il existe un couple de réels $(x;y)$ tel que : $${\vec{u}=x\vec{v}+y\vec{w}}$$
```

```admonish prop
Soit $\vec{i}$, $\vec{j}\ $ et $\ \vec{k}$ trois vecteurs de l'espace non coplanaires.

Pour tout vecteur $\vec{u}$, il existe un unique triplet $(x;y;z)$ tel que : $$\vec{u}=x\vec{i}+y\vec{j}+z\vec{k}$$
```

```admonish demo
- _Existence :_ Soit $\vec{AB}$ un représentant de $\vec{u}$.

  Soit $P$ le plan de repère $\left( A;\vec{i};\vec{j} \right)$.

  Si $B$ appartient à $P$ alors $\vec{AB}$ se décompose suivant les vecteurs $\vec{i}\ $ et $\ \vec{j}$.

  Supposons que $B$ n'appartient pas à $P$.

  Soit $d$ la droite passant par $B$ de vecteur directeur $\vec{k}$.

  Comme $\vec{k}$ n'est pas colinéaire avec $\vec{i}\ $ et $\ \vec{j}$, la droite $d$ coupe le plan $P$ en un point $C$.

  On peut écrire $\vec{AB} = \vec{AC} + \vec{CB}$.

  $\vec{AC}$ appartient au plan $P$ donc il existe un couple $(x;y)$ tel que $\vec{AC} = x\vec{i} + y\vec{j}$.

  $\vec{CB}$ est colinéaire avec $\vec{k}$ donc il existe un réel $z$ tel que $\vec{CB} = z\vec{k}$.

  Il existe donc un triplet $(x;y;z)$ tel que $\vec{AB} = \vec{u} = x\vec{i} + y\vec{j} + z\vec{k}$.

- _Unicité :_

  On suppose que l'on ait les 2 écritures distinctes : $$\vec{u} = x\vec{i} + y\vec{j} + z\vec{k} = x'\vec{i} + y'\vec{j} + z'\vec{k}$$

  Alors $\vec{u}-\vec{u}=(x-x')\vec{i}+(y-y')\vec{j}+(z-z')\vec{k}=\vec{0}$.

  Supposons que l'une au moins des trois différences n'est pas nulle, par ex. : $z - z' \neq 0$.

  Donc $\vec{k}=\cfrac{x'-x}{z-z'}\times\vec{i}+\cfrac{y'-y}{z-z'}\times\vec{j}$ et dans ce cas, les vecteurs $\vec{i}$, $\vec{j}\ $ et $\ \vec{k}$ seraient coplanaires. Ce qui est exclu.

  Les trois différences $\pa{x'-x}$, $\pa{y'-y}\ $ et $\ \pa{z'-z}$ sont donc nulles.
```

```admonish def
Soit $\vec{i}$, $\vec{j}\ $ et $\ \vec{k}$ trois vecteurs non coplanaires de l'espace.

On appelle **base de l'espace** le triplet $\left(\vec{i},\vec{j},\vec{k}\right)$.
```

```admonish meth title="Méthode : Reconnaitre une base de l'espace"
$ABCDEFGH$ est un cube.

![](img/vect/image27.png =350x center)

a. Reconnaître une base de l'espace.

b. Décomposer le vecteurs $\vec{AG}$ dans cette base.

---

a. Les vecteurs $\vec{AB}$, $\vec{BC}\ $ et $\ \vec{CG}$ sont non coplanaires donc forment une base de l'espace.

b. Le vecteurs $\vec{AG}$ se décompose dans la base $\left( \vec{AB},\vec{BC},\vec{CG} \right)$ en : $$\vec{AG}=\vec{AB}+\vec{BC}+\vec{CG}$$.
```

```admonish meth title="Méthode : Démontrer l'alignement par décomposition de vecteurs dans une base"
$ABCDEFGH$ est un cube.

Soit $I$ le milieu de $\lbrack AH\rbrack\ $ et $\ J$ le point de $\lbrack FI\rbrack$ tel que : $\vec{FJ}=\cfrac{2}{3}\vec{FI}$

Démontrer que les points $E$, $J\ $ et $\ C$ sont alignés.

![](img/vect/image28.png =450x center)

---

Pour prouver cet alignement, on va démontrer que les vecteurs $\vec{EJ}\ $ et $\ \vec{EC}$ sont colinéaires.

Les vecteurs $\vec{AB}$, $\vec{AD}\ $ et $\ \vec{AE}$ sont non coplanaires donc il est possible de décomposer les vecteurs $\vec{EJ}\ $ et $\ \vec{EC}$ dans la base $\left( \vec{AB},\vec{AD},\vec{AE} \right)$ :

$$
\begin{array}{rcl}
	\vec{EJ} & = & \vec{EF} + \vec{FJ}                                                                                     \\\\
	         & = & \vec{AB} + \cfrac{2}{3}\vec{FI}                                                                         \\\\
	         & = & \vec{AB} + \cfrac{2}{3}\left( \vec{FE} + \vec{EA} + \cfrac{1}{2}\vec{AH} \right)                        \\\\
	         & = & \vec{AB} + \cfrac{2}{3}\left( \vec{FE} + \vec{EA} + \cfrac{1}{2}\vec{AE} + \cfrac{1}{2}\vec{EH} \right) \\\\
	         & = & \vec{AB} + \cfrac{2}{3}\left( \vec{FE} + \cfrac{1}{2}\vec{EA} + \cfrac{1}{2}\vec{EH} \right)            \\\\
	         & = & \vec{AB} + \cfrac{2}{3}\vec{FE} + \cfrac{1}{3}\vec{EA} + \cfrac{1}{3}\vec{EH}                           \\\\
	         & = & \vec{AB} - \cfrac{2}{3}\vec{AB} - \cfrac{1}{3}\vec{AE} + \cfrac{1}{3}\vec{AD}                           \\\\
	         & = & \cfrac{1}{3}\vec{AB} + \cfrac{1}{3}\vec{AD} - \cfrac{1}{3}\vec{AE}
\end{array}
$$

Donc : $\ \vec{EJ} = \cfrac{1}{3}\vec{EC}$

Les vecteurs $\vec{EJ}\ $ et $\ \vec{EC}$ sont colinéaires et donc les points $E$, $J\ $ et $\ C$ sont alignés.
```

### Repère de l'espace

```admonish def
Soit $\vec{i}$, $\vec{j}\ $ et $\ \vec{k}$ trois vecteurs non coplanaires de l'espace. $O$ est un point de l'espace.

On appelle **repère de l'espace** le quadruplet $\left( O;\vec{i},\vec{j},\vec{k} \right)$.
```

```admonish rem
$O$ est appelé l'origine du repère.

- La décomposition $\vec{OM}=x\vec{i}+y\vec{j}+z\vec{k}$ donne les coordonnées $\pa{x;y;z}$ du point $M$.
  - $x$ est _l'abscisse_ de $M$, $y$ est _l'ordonnée_ de $M\ $ et $\ z$ est la _cote_ de $M$.

- De même, la décomposition $\vec{u} = x\vec{i} + y\vec{j} + z\vec{k}$ donne les coordonnées $\begin{pmatrix}x\\\\y\\\\z\end{pmatrix}$ du vecteur $\vec{u}$.
```

```admonish prop
Soit deux points de l'espace $A\begin{pmatrix}x_{A}\\\\y_{A}\\\\z_{A}\end{pmatrix}\ $ et $\ B\begin{pmatrix}x_{B}\\\\y_{B}\\\\z_{B}\end{pmatrix}$

- Les _coordonnées du vecteur_ $\vec{AB}$ sont : ${\begin{pmatrix}x_{B}-x_{A}\\\\y_{B}-y_{A}\\\\z_{B}-z_{A}\end{pmatrix}}$
- Les coordonnées du milieu du segment $\lbrack AB\rbrack$ sont : ${\begin{pmatrix}\tfrac{x_{A}+x_{B}}{2}\\\\ \tfrac{y_{A}+y_{B}}{2}\\\\ \tfrac{z_{A}+z_{B}}{2}\end{pmatrix}}$
```

```admonish ex title="Ex. : Lire des coordonnées dans l'espace"
![](img/vect/image29.png#right =250x)

Soit un parallélépipède $ABCDEFGH$.

$I$ est le milieu de $\lbrack CG\rbrack$.

Les points $M\ $ et $\ N$ sont définis par :

- $\vec{NF}=2\vec{FG}$

- $\vec{BM}=\vec{CB}+\vec{CI}$

1. Dans le repère $\left(A;\vec{AB},\vec{AD},\vec{AE}\right)$, donner les coordonnées de tous les points de la figure.
2. Placer le point $K(1;3;-1)$.
3. Démontrer que les vecteurs $\vec{IF}\ $ et $\ \vec{MN}$ sont égaux.
4. Démontrer que $M$ est le milieu du segment $\lbrack BN\rbrack$.

---

1.

$$A\begin{pmatrix}0\\\\0\\\\0\end{pmatrix},B\begin{pmatrix}1\\\\0\\\\0\end{pmatrix},C\begin{pmatrix}1\\\\1\\\\0\end{pmatrix},D\begin{pmatrix}0\\\\1\\\\0\end{pmatrix},$$

$$E\begin{pmatrix}0\\\\0\\\\1\end{pmatrix},F\begin{pmatrix}1\\\\0\\\\1\end{pmatrix},G\begin{pmatrix}1\\\\1\\\\1\end{pmatrix},H\begin{pmatrix}0\\\\1\\\\1\end{pmatrix},$$

$$I\begin{pmatrix}1\\\\1\\\\0,5\end{pmatrix},M\begin{pmatrix}1\\\\-1\\\\0,5\end{pmatrix},N\begin{pmatrix}1\\\\-2\\\\1\end{pmatrix}$$

2.

![](img/vect/image30.png =350x center)

3. $\vec{IF}\begin{pmatrix}1-1\\\\0-1\\\\1-0,5\\\\\end{pmatrix}=\begin{pmatrix}0\\\\-1\\\\0,5\\\\\end{pmatrix}\ \ $ et $\ \ \vec{MN}\begin{pmatrix}1-1\\\\-2-(-1)\\\\1-0,5\\\\\end{pmatrix}=\begin{pmatrix}0\\\\-1\\\\0,5\\\\\end{pmatrix}\ $ donc $\vec{IF}=\vec{MN}$

4. Le milieu du segment $\lbrack BN\rbrack$ a pour coordonnées : $\begin{pmatrix}\tfrac{1+1}{2}\\\\\ \tfrac{0+(-2)}{2}\\\\\ \tfrac{0+1}{2}\\\\\end{pmatrix}=\begin{pmatrix}1\\\\-1\\\\0,5\\\\\end{pmatrix}$

Il s'agit bien des coordonnées de $M$.
```

```admonish meth title="Méthode : Démontrer que 4 points sont coplanaires"
Dans un repère $\left( O;\vec{i},\vec{j},\vec{k} \right)$, on considère les points : $A\begin{pmatrix}2\\\\-1\\\\4\\\\\end{pmatrix},B\begin{pmatrix}6\\\\-7\\\\0\\\\\end{pmatrix},C\begin{pmatrix}1\\\\0\\\\1\\\\\end{pmatrix}\ $ et $\ D\begin{pmatrix}13\\\\-16\\\\5\\\\\end{pmatrix}$

Démontrer que les points $A$, $B$, $C\ $ et $\ D$ sont coplanaires.

---

On va démontrer que les trois vecteurs $\vec{AB}$, $\vec{AC}\ $ et $\ \vec{AD},$ de même origine $A$, sont coplanaires.

Pour cela, on va démontrer qu'il existe un couple de réels $(x;y)$ tel que $\vec{AD}=x\vec{AB}+y\vec{AC}$.

- Calculons les coordonnées des vecteurs $\vec{AB}$, $\vec{AC}\ $ et $\ \vec{AD}$ :

  $$\vec{AB}\begin{pmatrix}4\\\\-6\\\\-4\end{pmatrix}, \vec{AC}\begin{pmatrix}-1\\\\1\\\\-3\end{pmatrix}\quad\text{et}\quad\vec{AD}\begin{pmatrix}11\\\\-15\\\\1\end{pmatrix}$$

- On cherche $x\ $ et $\ y$, réels, tels que : $\vec{AD}=x\vec{AB}+y\vec{AC}$.

  Soit : $\ 11=x\times 4+y\times(-1)\quad\Rarr 4x-y=11$

  On fait de même pour les autres coordonnées et on a :

  $$\ -6x+y=-15\quad\text{et}\quad -4x-3y=1$$

- Soit le système de trois équations à deux inconnues :

  $$
  S:\begin{cases}
  	4x-y=11   \\\\
  	-6x+y=-15 \\\\
  	-4x-3y=1  \\\\
  \end{cases}
  $$

  On fait la somme membre à membre des deux premières lignes :

  $$\pa{4x-y}+\pa{-6x+y}=\pa{11}+\pa{-15}\quad\iff\quad-2x=-4\quad\iff\quad x=\cfrac{-4}{-2}=2$$

  On remplace dans la deuxième équation :

  $$-6\times 2+y=-15\quad\iff\quad y=-15+12\quad\iff\quad y=-3\quad\iff\begin{cases}x=2\\\\y=-3\end{cases}$$

  Le couple $\coordl{x=2}{y=-3}$ doit vérifier la troisième équation :

  $$-4x-3y=-4\times(2)-3\times(-3)=-8+9=1$$

  C'est le cas, donc le couple $(2;-3)$ convient.

- On a donc : $\vec{AD}=2\vec{AB}-3\vec{AC}$

  Les vecteurs $\vec{AB}$, $\vec{AC}\ $ et $\ \vec{AD}$ sont coplanaires et tous les trois d'origine $A$.

  On en déduit que les points $A$, $B$, $C\ $ et $\ D$ sont coplanaires.
```
