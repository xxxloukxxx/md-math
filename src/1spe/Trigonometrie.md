# Trigonométrie

<!-- toc -->

## Cercle trigonométrique et radian

### Sens direct

```admonish def
Sur un cercle, on appelle **sens direct**, **sens positif** ou **sens trigonométrique**, le sens **_contraire_** des aiguilles d'une montre.
```

### Cercle trigonométrique

```admonish def
Dans le plan muni d'un repère orthonormé $\left(O;\vec{i},\vec{j}\right)$ et orienté dans le sens direct, le **cercle trigonométrique** est le cercle de centre $O$ et de rayon $1$.

![](img/trigo/01.png =500x center)
```

```admonish rem
![](img/trigo/02.png =500x center)

- Le périmètre du cercle trigo. est de :
  $$\mathscr{C}=2\pi R=2\pi$$
- Le périmètre du demi-cercle est de :
  $$\cfrac{\mathscr{C}}{2}=\cfrac{2\pi}{2}=\pi$$
- L'arc $\overarc{AB}$ (en rose) est le quart du cercle donc sa longueur est :
  $$\overarc{AB}=\cfrac{1}{4}\times 2\pi=\cfrac{\pi}{2}$$
- L'arc $\overarc{AC}$ (en rose), c'est $\cfrac{5}{8}$ du cercle donc sa longueur est :
  $$\overarc{AC}=\cfrac{5}{8}\times 2\pi=\cfrac{5\pi}{4}$$

![](img/trigo/03.png =600x center)
```

```admonish def title="Définition : le radian"
La longueur du cercle trigonométrique est égale à $2\pi$.

Ainsi, à un tour complet sur le cercle, on peut faire correspondre le nombre réel $2\pi$.

On définit alors une nouvelle unité d'angle : **le radian**, tel qu'un tour complet mesure $360^\circ$ ou $2\pi$ radians.

![](img/trigo/04.png =500x center)
```

```admonish rem
Pour faire correspondre l'angle en degré avec l'angle en radians on peut utiliser un tableau de proportionnalité.

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|}\hline
	\rule[-3mm]{0mm}{10mm}\text{Degré}  & 360^\circ & 180^\circ & 90^\circ       & 45^\circ       \\\\ \hline
	\rule[-3mm]{0mm}{10mm}\text{Radian} & 2\pi      & \pi       & \cfrac{\pi}{2} & \cfrac{\pi}{4} \\\\ \hline
\end{array}
$$

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|}\hline
	\rule[-3mm]{0mm}{10mm}\text{Degré}  & 10^\circ        & 1^\circ          & 150^\circ                           & 67.5^\circ      \\\\\hline
	\rule[-3mm]{0mm}{10mm}\text{Radian} & \cfrac{\pi}{18} & \cfrac{\pi}{180} & \cfrac{150\pi}{180}=\cfrac{5\pi}{6} & \cfrac{3\pi}{8} \\\\\hline
\end{array}
$$

- Pour $10^\circ\rarr\quad \cfrac{10^\circ\times\pi}{180}=\cfrac{\pi}{18}$ radians
- Pour $\cfrac{3\pi}{8}$ rad.$~\rarr\quad \cfrac{\cfrac{3\pi}{8}\times 180}{\pi}=67.5^\circ$
- etc...
```

### Le radian

```admonish def
On appelle **1 radian**, noté **1 rad**, la mesure de l'angle au centre qui intercepte un arc de longueur $1$ du cercle trigonométrique.

![](img/trigo/05.png =300x center)
```

```admonish warning title="Angles remaquables"
![](img/trigo/06.png =800x center)
```

## Image d'un nombre sur le cercle trigonométrique

### Image d'un nombre

```admonish prop
À tout nombre $x$, on peut associer un point $M$ du cercle trigonométrique :

- Si $x\geqslant 0$ :
  - On parcourt dans le **sens direct** un chemin de longueur $x$ en partant de $A$ et on place $M$

![](img/trigo/07a.png =400x center)

- Si $x\leqslant 0$ :
  - On parcourt dans le **sens indirect** un chemin de longueur $(-x)$ en partant de $A$ et on place $M$

![](img/trigo/07b.png =400x center)

On dit que $M$ est l'image de $x$ sur le cercle trigonométrique
```

```admonish ex
Prenons $\quad x=\cfrac{3\pi}{4}$

On a $\cfrac{3\pi}{4}\text{ rad.}=135^\circ\quad$ donc la longueur de $\overarc{AM}=\cfrac{3\pi}{4}$

![](img/trigo/08.png =400x center)
```

```admonish ex
Prenons $\quad x=\cfrac{-5\pi}{6}$

On a $\quad \cfrac{-5\pi}{6}\text{ rad.}=\cfrac{-5\pi}{6}\times\cfrac{180}{\pi}=-150^\circ\quad$ donc la longueur de $\overarc{AM}=\cfrac{5\pi}{6}$

![](img/trigo/09.png =400x center)
```

```admonish rem
Plusieurs nombres peuvent avoir la même image sur le cercle trigo. Par ex :

- $\pi\quad$ et $\quad-\pi$
- $\cfrac{-\pi}{2}\quad$ et $\quad\cfrac{3\pi}{2}$
- $2\pi\quad$ ; $\quad4\pi\quad$ ; $\quad-8\pi$

![](img/trigo/10.png =500x center)
```

```admonish rem
Les nombres $(x)$ et $(x+2k\pi)$, avec $k\in\Z$, ont la même image sur le cercle trigo. Par ex :

- $\cfrac{3\pi}{7}$ et $\cfrac{17\pi}{7}$ ont même image car $\cfrac{17\pi}{7}=\textcolor{blue}{\cfrac{14\pi}{7}}+\cfrac{3\pi}{7}=\textcolor{blue}{2\pi}+\cfrac{3\pi}{7}$
- $\cfrac{3\pi}{4}$ et $\cfrac{19\pi}{4}$ ont même image car $\cfrac{19\pi}{4}=\textcolor{blue}{\cfrac{16\pi}{4}}+\cfrac{3\pi}{4}=\textcolor{blue}{4\pi}+\cfrac{3\pi}{4}$
- $\cfrac{6\pi}{5}$ et $\cfrac{-4\pi}{5}$ ont même image car $\cfrac{-4\pi}{5}=\textcolor{blue}{\cfrac{-10\pi}{5}}+\cfrac{6\pi}{5}=\textcolor{blue}{-2\pi}+\cfrac{6\pi}{5}$
```

```admonish meth title="Méthode : Placer un point sur le cercle trigonométrique"
Plaçons sur le cercle trigonométrique, le point $M$ tel que l'angle $\left(\vec{i};\overrightarrow{OM}\right)$ mesure $\cfrac{9\pi}{4}$ rad.

On a :

$\quad\cfrac{9\pi}{4}=\textcolor{blue}{\cfrac{8\pi}{4}}+\cfrac{1\pi}{4}=\textcolor{blue}{2\pi}+\cfrac{1\pi}{4}\qquad\left(\textcolor{blue}{\text{1 tour}}~+\cfrac{1\pi}{4}\right)$

et $\quad\cfrac{1\pi}{4}~\text{rad.}=45^\circ$

![](img/trigo/11.png =400x center)

---

Plaçons sur le cercle trigonométrique, le point $N$ tel que l'angle $\left(\vec{i};\overrightarrow{ON}\right)$ mesure $\cfrac{8\pi}{3}$ rad.

On a :

$\quad\cfrac{8\pi}{3}=\textcolor{blue}{\cfrac{6\pi}{3}}+\cfrac{2\pi}{3}=\textcolor{blue}{2\pi}+\cfrac{2\pi}{3}\qquad\left(\textcolor{blue}{\text{1 tour}}~+\cfrac{2\pi}{3}\right)$

et $\quad\cfrac{2\pi}{3}~\text{rad.}=120^\circ$

![](img/trigo/12.png =400x center)
```

```admonish rem
On a vu qu'un angle possède plusieurs mesures.

Si $\theta$ est une mesure de l'angle $\left(\vec{i};\overrightarrow{OM}\right)$ alors tout angle de la forme $(\theta+2k\pi)$, avec $k\in\Z$ , est une mesure de l'angle $\left(\vec{i};\overrightarrow{OM}\right)$.

On dit que l'angle $\left(\vec{i};\overrightarrow{OM}\right)$ est égal à $\theta$ **modulo** $2\pi$.
```

### Mesure principale d'un angle

```admonish def
La **mesure principale d'un angle** orienté est la mesure, qui parmi toutes les autres, se situe dans l'intervalle $\left]-\pi~;~\pi\right]$
```

```admonish ex
Une mesure d'un angle orienté est $\cfrac{7\pi}{4}$

D'autres mesures sont : $\quad\cfrac{7\pi}{4}-2\pi;\quad\cfrac{7\pi}{4}-4\pi;\quad\cfrac{7\pi}{4}+2\pi;\quad\ldots$

Soit : $\quad\cfrac{-\pi}{4}\quad;\quad\cfrac{-9\pi}{4}\quad;\quad\cfrac{15\pi}{4}$

Donc $\left(\cfrac{-\pi}{4}\right)$ est la **mesure principale** de cet **angle orienté** car c'est la seule comprise dans $\left]-\pi~;~\pi\right]$.

![](img/trigo/13.png =600x center)
```

```admonish meth title="Méthode : Donner la mesure principale d'un angle"
Donnons la mesure principale de l'angle $\cfrac{27\pi}{4}$

- On choisit un multiple de $4$ proche de $27$, soit $28$

$$\cfrac{27\pi}{4}=\cfrac{28\pi}{4}-\cfrac{\pi}{4}=7\pi-\cfrac{\pi}{4}$$

- Dans $7\pi$, on fait apparaître un multiple de $2\pi$ soit $6\pi$ :

$$
\def\arraystretch{1.4}\begin{array}{rcl}
	\cfrac{27\pi}{4} & = & 6\pi+\pi-\cfrac{\pi}{4}             \\
	                 & = & 6\pi+\cfrac{4\pi}{4}-\cfrac{\pi}{4} \\&=&6\pi+\cfrac{3\pi}{4}
\end{array}
$$

$6\pi$ correspond à $3$ tours entiers.

On a $\cfrac{3\pi}{4}\in\left]-\pi;\pi\right]$ donc $\cfrac{3\pi}{4}$ est la mesure principale de $\cfrac{27\pi}{4}$

![](img/trigo/14.png =600x center)
```

## Cosinus et sinus d'un angle

```admonish note title="Rappel de 3$^{ème}$"

$\def\arraystretch{2.9}\begin{array}{l}
		\bullet~\cos(\textcolor{#444}{\text{angle}})=\cfrac{\textcolor{green}{\text{Adjacent}}}{\textcolor{red}{\text{Hypoténuse}}} \\\\
		\bullet~\sin(\textcolor{#444}{\text{angle}})=\cfrac{\textcolor{blue}{\text{Opposé}}}{\textcolor{red}{\text{Hypotenuse}}}    \\\\
		\bullet~\tan(\textcolor{#444}{\text{angle}})=\cfrac{\textcolor{blue}{\text{Opposé}}}{\textcolor{green}{\text{Adjacent}}}
	\end{array}$

![](img/trigo/15.png =600x center)
```

```admonish ex
Pour déterminer l'angle $\widehat{BAC}$, on peut déterminer son **cosinus** (ou **sinus**) :

![](img/trigo/16.png =400x center)

$$
\def\arraystretch{1.5}\begin{array}{rcl}
	AC^2 & = & AB^2+BC^2                           \\\\
	     & = & 5^2+3^2\qquad=34\qquad AC=\sqrt{34} \\\\
\end{array}
$$

On a : $\quad\cos\left(\widehat{BAC}\right)=\cfrac{\textcolor{green}{AB}}{\textcolor{red}{AC}}=\cfrac{\textcolor{green}{5}}{\textcolor{red}{\sqrt{34}}}\approx 0.8575$

Donc $\quad\widehat{BAC}=\cos^{-1}\left(\cfrac{5}{\sqrt{34}}\right)\approx 30,96^\circ$
```

### Cosinus et sinus dans le cercle trigonométrique

```admonish def
Soit, dans le cercle trigonométrique, l'angle $\left(\vec{i};\overrightarrow{OM}\right)$ de **mesure principale** $x$.

- Le **cosinus** de $x$ est **l'abscisse** de $M$ : $\quad\cos(x)=x_M$
- Le **sinus** de $x$ est **l'ordonnée** de $M$ : $\quad\sin(x)=y_M$

![](img/trigo/17.png =350x center)
```

```admonish ex
- Si $x=\cfrac{\pi}{2}$ alors $M$ a pour coordonnées $(0;1)$ donc :

$$\quad\cos\left(\cfrac{\pi}{2}\right)=0\qquad\qquad\sin\left(\cfrac{\pi}{2}\right)=1$$

![](img/trigo/18a.png =300x center)

- Si $x=\cfrac{3\pi}{4}$ alors $M$ a pour coordonnées $\approx(-0.7;0.7)$ donc :

$$\cos\left(\cfrac{3\pi}{4}\right)\approx -0.7\qquad\qquad\sin\left(\cfrac{3\pi}{4}\right)\approx 0.7$$

![](img/trigo/18b.png =300x center)
```

```admonish ex
Si $x=\cfrac{5\pi}{12}(\rarr 75^\circ)$ alors $M$ à pour coordonnées $\approx(0.26;0.97)$

Donc $\quad\cos\left(\cfrac{5\pi}{12}\right)\approx 0.26\quad$ et $\quad\sin\left(\cfrac{5\pi}{12}\right)\approx 0.97$

![](img/trigo/19.png =700x center)
```

### Valeurs remarquables$^\heartsuit$

```admonish prop
$$
\begin{array}{|c|c|c|c|c|c|c|}\hline
\rule[-3mm]{0mm}{10mm}x & 0 & \cfrac{\pi}{6} & \cfrac{\pi}{4} & \cfrac{\pi}{3} & \cfrac{\pi}{2}  & \pi \\\\ \hline
\rule[-3mm]{0mm}{10mm}\cos(x) & 1 & \cfrac{\sqrt{3}}{2} & \cfrac{\sqrt{2}}{2} & \cfrac{1}{2}  & 0 & -1 \\\\ \hline
\rule[-3mm]{0mm}{10mm}\sin(x) & 0 & \cfrac{1}{2} & \cfrac{\sqrt{2}}{2} & \cfrac{\sqrt{3}}{2}  & 1 & 0 \\\\ \hline
\end{array}
$$

![](img/trigo/20.png =800x center)
```

```admonish demo
Démontrons que $\cos\left(\cfrac{\pi}{4}\right)=\cfrac{\sqrt{2}}{2}$

$\left(\cfrac{\pi}{4}\right)~$ correspond à un angle de $45^\circ$

![](img/trigo/21.png =350x center)

On a $~\widehat{OMH}=180^\circ-45^\circ-90^\circ=45^\circ$ donc $OHM$ est un triangle rectangle et isocèle en $H$.

On a :

$$
\def\arraystretch{1.5}\begin{array}{ll}
	~      & OH^2+HM^2=OM^2                                                                                                                 \\\\
	\Lrarr & OH^2+OH^2=1\qquad\text{car}\quad OM=1~\text{et}~OH=HM                                                                          \\\\
	\Lrarr & 2\times OH^2=1                                                                                                                 \\\\
	\Lrarr & OH=\sqrt{\cfrac{1}{2}}=\cfrac{\sqrt{2}}{2}\qquad\text{donc}\quad\boxed{\cos\left(\cfrac{\pi}{4}\right)=OH=\cfrac{\sqrt{2}}{2}} \\\\
\end{array}
$$
```

```admonish demo
Démontrons que $\cos\left(\cfrac{\pi}{3}\right)=\cfrac{1}{2}\quad$ et $\quad\sin\left(\cfrac{\pi}{3}\right)=\cfrac{\sqrt{3}}{2}$

![](img/trigo/22.png =400x center)

$\left(\cfrac{\pi}{3}\right)~$ correspond à un angle de $60^\circ$

$OMA$ est un triangle équilatéral.

On a $H$ milieu de $[OA]$ donc $OH=\cos\left(\cfrac{\pi}{3}\right)=\cfrac{1}{2}$

Pour le sinus, on a :

$$
\begin{array}{ll}
	HM^2 & =OM^2-OH^2                                                                                            \\\\
	~    & =1-\left(\cfrac{1}{2}\right)^2=\cfrac{3}{4}\quad\rarr\quad HM=\sqrt{\cfrac{3}{4}}=\cfrac{\sqrt{3}}{2}
\end{array}
$$

Donc $\quad HM=\sin\left(\cfrac{\pi}{3}\right)=\cfrac{\sqrt{3}}{2}$
```

```admonish rem
Dans le cercle trigonométrique $(R=1)$, $OHM$ est un triangle rectangle et $HM=OK$ donc :

![](img/trigo/17.png =350x center)

$$OH^2+OK^2=OM^2\quad\Lrarr\quad OH^2+OK^2=1$$

Or $~OH^2=\left(\cos(x)\right)^2\quad$et$\quad OK^2=\left(\sin(x)\right)^2$

Donc, pour tout $x$ :

$$\left(\cos(x)\right)^2+\left(\sin(x)\right)^2=1$$
```

### Propriétés trigonométriques

```admonish prop
- $(-1)\leqslant\cos(x)\leqslant(+1)\quad$et$\quad(-1)\leqslant\sin(x)\leqslant(+1)$
  - Cercle de rayon $1\Rarr$ abscisse et ordonnée de $M\in[-1;1]$

- $\cos^2(x)+\sin^2(x)=1$
  - Voir démonstration au-dessus

- $\cos(x+2k\pi)=\cos(x)\quad$et$\quad\sin(x+2k\pi)=\sin(x)$
  - $(x)$ et $(x+2k\pi)$ ont même image sur le cercle trigo. donc même cosinus/sinus
```

### Propriété : $\cos(-x)$ et $\sin(-x)$

```admonish prop
Pour tout $x$, on a :

$$\cos(-x)=\cos(x)\quad\text{et}\quad\sin(-x)=-\sin(x)$$

![](img/trigo/23.png =500x center)
```

### Propriété : $\cos(x+\pi)$ et $\sin(x+\pi)$

```admonish prop
Pour tout $x$, on a :

$$\cos(x+\pi)=-\cos(x)\quad\text{et}\quad\sin(x+\pi)=-\sin(x)$$

![](img/trigo/24.png =500x center)
```

## Fonctions cosinus/sinus

```admonish note title="Représentations graphiques"
![](img/trigo/25.png =800x center)

![](img/trigo/26.png =800x center)
```

### Propriété : Périodicité de $\cos(x)$ et $\sin(x)$

```admonish prop
On a vu que : $\quad\cos(x+2k\pi)=\cos(x)\quad$et$\quad\sin(x+2k\pi)=\sin(x)$

On dit que les fonctions $\cos(x)$ et $\sin(x)$ sont **périodiques** (et plus précisément $2\pi$-périodique)
```

```admonish rem
Pour tracer la courbe représentative de la fonction $\cos(x)$ ou de la fonction $\sin(x)$, il suffit de la tracer sur un intervalle de longueur $2\pi$ et de la compléter par translation.
```

### Propriété : Parité de $\cos(x)$ et $\sin(x)$

```admonish prop
On a vu que : $\quad\cos(-x)=\cos(x)\quad$et$\quad\sin(-x)=-\sin(x)$

On dit que :

- La fonction $\cos(x)$ est **paire**
- La fonction $\sin(x)$ est **impaire**
```

```admonish rem
- La courbe représentative de $\cos(x)$ est symétrique par rapport à l'**axe des ordonnées**.
- La courbe représentative de la $\sin(x)$ est symétrique par rapport à **l’origine du repère**.
```

## Représentations graphiques

```admonish note title="Représentations graphiques"

![](img/trigo/27.png =800x center)

![](img/trigo/4135456.jpg =800x center)
```
