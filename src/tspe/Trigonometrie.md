# Fonctions trigonométriques

## Cosinus, sinus et cercle trigonométrique

### Définitions et propriétés

```admonish ex
![](img/trigo/image3.png#right =350x)

À l'aide du cercle trigonométrique, il est possible de lire le cosinus et le sinus d'un nombre.

Le cosinus se lit sur l'axe des abscisses et le sinus sur l'axe des ordonnées.
```

```admonish def
Soit $M$ le point du cercle trigonométrique associé au nombre $x$ (qui est un angle orienté).

- Le **cosinus** de $x$ est l'abscisse de $M$ et on note $\cos\pa{x}$.
- Le **sinus** de $x$ est l'ordonnée de $M$ et on note $\sin\pa{x}$.

![](img/trigo/image4.png =450x center)
```

```admonish prop
1. ${-1 \le \sin{(x)} \le 1}\ $ et $\ {-1 \le \cos{(x)} \le 1}$

2. $\cos^{2}{(x)}+\sin^{2}(x)=1$
```

```admonish prop title="Valeurs remarquables des fonctions cosinus et sinus"
$$
\begin{array}{|r|c|c|c|c|c|c|}\hline
	\rowcolor{lightblue}\rule[-4mm]{0cm}{12mm}x & \hspace{2mm}0\hspace{2mm}\  & \cfrac{\pi}{6}      & \cfrac{\pi}{4}      & \cfrac{\pi}{3}      & \cfrac{\pi}{2}              & \pi                        \\\\ \hline
	\rule[-4mm]{0cm}{12mm}\cos{(x)}             & 1                           & \cfrac{\sqrt{3}}{2} & \cfrac{\sqrt{2}}{2} & \cfrac{1}{2}        & \hspace{2mm}0\hspace{2mm}\  & -1                         \\\\ \hline
	\rule[-4mm]{0cm}{12mm}\sin{(x)}             & 0                           & \cfrac{1}{2}        & \cfrac{\sqrt{2}}{2} & \cfrac{\sqrt{3}}{2} & 1                           & \hspace{2mm}0\hspace{2mm}\ \\\\ \hline
\end{array}
$$

![](img/trigo/image5.png =450x center)
```

```admonish meth title="Méthode : Résoudre une équation et une inéquation trigonométrique"
1. Résoudre dans $\R$ l'équation : $\cos^{2}{(x)}=\cfrac{1}{2}$
2. Résoudre dans $\lbrack-\pi;\pi\rbrack$, l'inéquation : $\sin{(x)} \le \cfrac{\sqrt{3}}{2}$

---

1. $\cos^{2}{(x)}=\cfrac{1}{2}$

$$
\begin{array}{rrcl}
	     & \cos^{2}{(x)}                                                                                                                  & =         & \cfrac{1}{2}                        \\\\
	\iff & \cos^{2}{(x)}-\cfrac{1}{2}                                                                                                     & =         & 0                                   \\\\
	\iff & \cos^{2}{(x)}-\pa{\sqrt{\cfrac{1}{2}} }^{2}                                                                                    & =         & 0                                   \\\\
	\iff & \cos^{2}{(x)}-\pa{\cfrac{\sqrt{2}}{2} }^{2}                                                                                    & =         & 0                                   \\\\
	     & \text{car}\quad\sqrt{\tfrac{1}{2}}=\tfrac{1}{\sqrt{2}}=\tfrac{1 \times \sqrt{2}}{\sqrt{2} \times \sqrt{2}}=\tfrac{\sqrt{2}}{2} &           &                                     \\\\
	\iff & \pa{\cos{(x)}-\cfrac{\sqrt{2}}{2} }\pa{\cos{(x)}+\cfrac{\sqrt{2}}{2} }                                                         & =         & 0                                   \\\\
	\iff & \cos{(x)} =  \pa{\cfrac{\sqrt{2}}{2}}                                                                                          & \text{ou} & \cos{(x)}=\pa{-\cfrac{\sqrt{2}}{2}}
\end{array}
$$

![](img/trigo/image6.png =450x center)

Soit :

$\begin{cases} x=\cfrac{\pi}{4}+2k_1\pi,\quad k_1\in\Z \\\\ x=-\cfrac{\pi}{4}+2k_2\pi,\quad k_2\in\Z \end{cases}\quad$ ou $\quad\begin{cases} x=\cfrac{3\pi}{4}+2k_3\pi,\quad k_3\in\Z  \\\\ x=-\cfrac{3\pi}{4}+2k_4\pi,\quad k_4\in\Z \\\\ \end{cases}$

$$\boxed{S=\left\lbrace \cfrac{\pi}{4}+\cfrac{k\pi}{2},k\in\Z \right\rbrace}$$

2. $\sin{(x)} \le \cfrac{\sqrt{3}}{2}$

On commence par résoudre $\sin{(x)}=\cfrac{\sqrt{3}}{2}$ dans $\lbrack-\pi;\pi\rbrack.$

Soit : $\ x=\cfrac{\pi}{3}\ $ ou $\ x=\cfrac{2\pi}{3}$

![](img/trigo/image7.png =450x center)

On veut des valeurs de sinus inférieures à $\cfrac{\sqrt{3}}{2}$.

Elles correspondent à la partie du cercle trigonométrique située en dessous des points associés à $\cfrac{\pi}{3}\ $ et $\ \cfrac{2\pi}{3}$.

Ainsi :

$$\boxed{S=\left\lbrack-\pi;\cfrac{\pi}{3} \right\rbrack \cup \left\lbrack \cfrac{2\pi}{3};\pi \right\rbrack}$$
```

## Propriétés des fonctions cosinus et sinus

### Définitions

```admonish def
- La **fonction cosinus** est la fonction définie sur $\R$ qui, à tout réel $x$, associe $\cos(x)$.
- La **fonction sinus**, est la fonction définie sur $\R$ qui, à tout réel $x$, associe $\sin(x)$.

|            Fonction cosinus            |
| :------------------------------------: |
| ![](img/trigo/image8.png =700x center) |

|             Fonction sinus             |
| :------------------------------------: |
| ![](img/trigo/image9.png =700x center) |
```

### Périodicité

```admonish prop
1. $\cos{(x)}=\cos\pa{x+2k\pi}\quad$ où $k\in\Z$
2. $\sin{(x)}=\sin\pa{x+2k\pi}\quad$ où $k\in\Z$
```

```admonish demo
Aux nombres $x\ $ et $\ x+2k\pi$, on fait correspondre le même point du cercle trigonométrique... donc même cosinus et sinus.
```

```admonish rem
On dit que les fonctions cosinus et sinus sont **périodiques de période** $2\pi$.

Cela signifie qu'on retrouve le même morceau de courbe sur chaque intervalle de longueur 2$\pi$.

![](img/trigo/image10.png =750x center)
```

### Parité

```admonish def
- Une fonction dont la courbe est **symétrique** par rapport à **l'axe des ordonnées** est une **paire**.
- Une fonction dont la courbe est **symétrique** par rapport à **l'origine du repère** est une **impaire**.

```

```admonish rem
- Pour une fonction **paire**, on a : $\ f(-x)=f(x)$.
- Pour une fonction **impaire**, on a : $\ f(-x)=-f(x)$.

Ce sont ces résultats qu'il faudra vérifier pour prouver qu'une fonction est **paire** ou **impaire**.
```

```admonish prop
![](img/trigo/image11.png#right =350x)

- La fonction cosinus est **paire** et on a :

$${\cos(-x)=\cos(x)}$$

- La fonction sinus est **impaire** et on a :

$${\sin(-x)=-\sin(x)}$$
```

```admonish demo
Les angles de mesures $\ x\ $ et $\ -x\ $ sont symétriques par rapport à l'axe des abscisses donc :

$$\sin(-x)=-\sin(x)\quad\text{et}\quad\cos(-x)=\cos(x)$$
```

```admonish rem
- La courbe de la fonction cosinus est symétrique par rapport à l'axe des ordonnées.
- La courbe de la fonction sinus est symétrique par rapport à l'origine.
```

```admonish meth title="Méthode : Étudier la parité d'une fonction trigonométrique"
Démontrer que la fonction $f$ définie sur $\R$ par $\ f(x)=\sin{(x)-\sin(2x)}$ est impaire.

---

On a :

$$
\begin{array}{rcl}
	f(-x) & = & \sin{(-x)}-\sin{(-2x)}                \\\\
	      & = & -\sin{(x)}+\sin{(2x)}                 \\\\
	      & = & -\pa{\sin{(x)}-\sin{(2x)}}\quad=-f(x)
\end{array}
$$

La fonction $f$ est donc **impaire**.

Sa représentation graphique est symétrique par rapport à l'origine du repère.
```

```admonish meth title="Méthode : Compléter un graphique par parité et périodicité"
Soit $f$ une fonction **impaire** et **périodique** de période $\pi$.

:bulb: Compléter sa représentation graphique sur l'intervalle $\left\lbrack-\cfrac{3\pi}{2};\cfrac{3\pi}{2} \right\rbrack$.

![](img/trigo/image12.png =650x center)

---

**1$^\text{ère}$ étape :** La fonction est impaire. Sa courbe est symétrique par rapport à l'origine du repère.

On complète donc par symétrie centrale.

![](img/trigo/image13.png =650x center)

**2$^\text{ème}$ étape :** La fonction est périodique de période $\pi$.

On retrouve le même morceau de courbe sur chaque intervalle de longueur $\pi$.

Le morceau déjà tracé a pour longueur $\pi$, on le reproduit à gauche et à droite par translation.

![](img/trigo/image14.png =650x center)
```

## Variations des fonctions cosinus et sinus

### Dérivées

```admonish prop
|                Fonctions                |    Dérivées    |
| :-------------------------------------: | :------------: |
|                $\cos(x)$                |   $-\sin(x)$   |
|                                         |                |
|                $\sin(x)$                |   $\cos(x)$    |
|                                         |                |
| $\cos(ax+b)\ $ avec $a\ $ et $\ b\in\R$ | $-a\sin(ax+b)$ |
|                                         |                |
| $\sin(ax+b)\ $ avec $a\ $ et $\ b\in\R$ | $a\cos(ax+b)$  |
```

### Tableaux de variations

```admonish prop
![](img/trigo/tabvar.png =800x center)
```

### Représentations graphiques

```admonish prop
On retrouve la représentation graphique de $\cos{(x)}$ en complétant les données du tableau de variations :

- par symétrie avec l'axe des ordonnées (cosinus est paire),
- par translation (cosinus est périodique de période 2$\pi$).

![](img/trigo/image15.png =650x center)

On retrouve la représentation graphique de $\sin{(x)}$ en complétant les données du tableau de variations :

- par symétrie avec l'origine du repère (sinus est impaire),
- par translation (sinus est périodique de période 2$\pi$).

![](img/trigo/image16.png =650x center)
```

```admonish meth title="Méthode : Étudier une fonction trigonométrique"
On considère la fonction $f$ définie sur $\R$ par $f(x)=\cos{(2x)-}\cfrac{1}{2}$ .

a. Étudier la parité de $f$.

b. Démontrer que la fonction $f$ est périodique de période $\pi$.

c. Étudier les variations de $f$ sur $\left\lbrack 0;\cfrac{\pi}{2} \right\rbrack$.

d. Représenter graphiquement la fonction $f$ sur $\left\lbrack 0;\cfrac{\pi}{2} \right\rbrack$ et prolonger de part et d'autre la représentation par symétrie et par translation.

---

a. _Parité_

On a :

$$
\begin{array}{rcl}
	\ f(-x) & = & \cos(-2x)-\cfrac{1}{2}            \\\\
	        & = & \cos(2x)-\cfrac{1}{2}\qquad =f(x)
\end{array}
$$

La fonction $f$ est donc **paire**. Dans un repère orthogonal, sa représentation graphique est donc symétrique par rapport à l'axe des ordonnées.

b. _Périodicitié_

On a :

$$
\begin{array}{rcl}
	\ f(x+\pi) & = & \cos{\pa{2(x+\pi) }-}\cfrac{1}{2}  \\\\
	\          & = & \cos{(2x+2\pi)-}\cfrac{1}{2}       \\\\
	\          & = & \cos{(2x)-}\cfrac{1}{2}\qquad=f(x)
\end{array}
$$

On en déduit que la fonction $f$ est périodique de période $\pi$.

c. _Variations_

On a :

$$f(x)=\cos(2x)-\cfrac{1}{2}=v\pa{u(x)}-\cfrac{1}{2}\quad\text{avec}\quad\begin{cases}u(x)=2x\\\\v(x)=\cos(x)\end{cases}\rarr\begin{cases}u'(x)=2\\\\v'(x)=-\sin(x)\end{cases}$$

Donc : $\ f'(x)=u'(x) \times v'\pa{u(x)} - 0$

On a :

$$
\begin{array}{rcl}
	\ f'(x) & = & u'(x) \times v'\pa{u(x)} \\\\
	\       & = & 2 \times \pa{-\sin(2x)}  \\\\
	\       & = & -2 \times \pa{\sin(2x)}  \\\\
\end{array}
$$

Si $x \in \left\lbrack 0;\cfrac{\pi}{2} \right\rbrack$, alors $2x \in \lbrack 0;\pi\rbrack$ et donc $\sin{(2x)} \ge 0$.

Donc si $x \in \left\lbrack 0;\cfrac{\pi}{2} \right\rbrack$, alors $f^{'}(x) \le 0$. Ainsi $f$ est décroissante sur $\left\lbrack 0;\cfrac{\pi}{2} \right\rbrack$.

![](img/trigo/tabvar2.png =300x center)

On a :

- $f(0)=\cos(2 \times 0)-\cfrac{1}{2}\ =1-\cfrac{1}{2}\ =\cfrac{1}{2}$

- $f\pa{\cfrac{\pi}{2}}=\cos\pa{2 \times \cfrac{\pi}{2} }-\cfrac{1}{2}\ =-1-\cfrac{1}{2}\ =-\cfrac{3}{2}$

d. _Représentation graphique_

- On commence par tracer la courbe sur l'intervalle $\left\lbrack 0;\cfrac{\pi}{2} \right\rbrack$.

- La fonction $f$ est paire, donc sa courbe représentative est symétrique par rapport à l'axe des ordonnées.

  On peut ainsi prolonger la courbe par symétrie axiale sur l'intervalle $\left\lbrack-\cfrac{\pi}{2};0 \right\rbrack$.

- La fonction $f$ est périodique de période $\pi$, on peut ainsi prolonger la courbe en translatant horizontalement la portion de courbe déjà tracée.

  En effet, la portion déjà tracée se trouve sur l'intervalle $\left\lbrack-\cfrac{\pi}{2};\cfrac{\pi}{2} \right\rbrack$ de longueur $\pi$.

![](img/trigo/image17.png =650x center)
```
