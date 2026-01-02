# Fonctions polynômes de degré 2 (2)

<!-- toc -->

## Forme factorisée d'une fonction du 2$\nd$ degré

### Définition

```admonish ex
La fonction $f$ définie par $f(x)=2(x-3)(x+2)$ est une fonction du 2$\nd$ degré.

En effet, elle s'écrit aussi sous la forme $f(x)=ax^{2}+bx+c$.

$$
\begin{aligned}
	f(x) & =2(x-3)(x+2)                       \\\\
	     & =2\pa{x^{2}-3x+2x-6}               \\\\
	     & =2\pa{x^{2}-x-6}\qquad =2x^2-2x-12
\end{aligned}
$$
```

```admonish def
Les fonctions définies sur $\R$ par :

$$\boxed{f(x)=a\pa{x-x_{1}}\pa{x-x_{2}}}$$

... sont des fonctions polynômes de degré 2 **sous forme factorisées**.

Les coefficients $a$, $x_{1}$et $x_{2}$ sont des réels avec $a \neq 0$.
```

```admonish rem
Plus généralement, on appelle **fonction polynôme de degré 2**, toute fonction qui s'écrit sous la forme $\quad ax^{2}+bx+c$.

Par ex., la fonction $f(x)=3x^{2}-2x+1$ est une **fonction du 2$\nd$ degré**.
```

### Propriétés

```admonish prop
Soit $f$ définie sur $\R$ par $\quad f(x)=a\pa{x-x_{1}}\pa{x-x_{2}}$.

L'équation $f(x)=0$ possède deux solutions (éventuellement égales) : $\quad S=\lbrace x_{1}\ ;\ x_{2}\rbrace$

$x_1$ et $x_2$ sont appelées les **racines** de la fonction polynôme $f$.
```

```admonish prop
Soit la fonction $f$ définie sur $\R$ par $\quad f(x)=a\pa{x-x_{1}}\pa{x-x_{2}}$.

La droite d'équation $\quad x=p\quad$ avec $\quad\boxed{p =\cfrac{x_{1}+x_{2}}{2}}\quad$ est **l'axe de symétrie** de $\Cf$.

![](img/2nd/19-cours.png =500x center)
```

```admonish meth title="Méthode : Représenter une fonction du 2nd degré à partir de sa forme factorisée"
On considère la fonction $f$ définie sur $\R$ par $\quad f(x)=2(x-2)(x+4)$

Déterminons :

- L'intersection de la courbe de $f$ avec l'axe des abscisses,

- Son axe de symétrie,

- Les coordonnées de son extremum (sommet).

---

- **Intersection de la courbe de $f$ avec l'axe des abscisses**

  Il suffit de résoudre l'équation

  $$f(x)=0\ \iff\ 2(x-2)(x+4)=0$$

  Il s'agit d'une équation-produit. On a donc :

  $$2(x-2)(x+4)=0\iff\begin{cases}x-2=0\\\\x+4=0\end{cases}\iff\begin{cases}x=2\\\\x=(-4)\end{cases}$$

  La courbe de $f$ coupe l'axe des abscisses en $x=2$ et $x=(-4)$

  Plaçons, $A$ et $B$, ces deux points d'intersection dans le repère.

![](img/2nd/11tt.png =500x center)

---

- **Axe de symétrie**

  $x_{1}=2\ $ et $\ x_{2}=(-4)\ $ donc $p=\cfrac{x_1+x_2}{2}=\cfrac{2-4}{2}=(-1)$

  La droite d'équation $x=(-1)$ est l'axe de symétrie de la parabole représentant $f$.

---

- **Coordonnées de son extremum (sommet)**

  Le sommet $S$ de la parabole se trouve sur l'axe de symétrie.

  Donc il a pour abscisse $p=(-1)$ et pour ordonnées :

  $$\begin{array}{rcccl}f(p)&=&f(-1)&=&2(-1-2)(-1+4)\\\\&&&=&2\times(-3)\times 3=-18\end{array}$$

  Le sommet de la parabole $S$ a donc pour coordonnées $(-1;-18)$

  ![](img/2nd/13tt.png =500x center)

---

- **Représentation graphique**

  On a $\ f(x)=2(x-2)(x+4)\quad$ donc $\ a=2>0$.

  On en déduit que la parabole représentant $f$ possède des branches tournées vers le haut.

  Le sommet de la parabole correspond donc au minimum de la fonction $f$.

![](img/2nd/14tt.png =500x center)
```

```admonish meth title="Méthode : Associer une fonction du 2nd degré à sa représentation graphique"
:bulb: Associer chaque fonction à sa représentation graphique

- $f(x)=3(x-1)(x+3)$

- $g(x)=-2(x-1)(x+3)$

- $h(x)=5(x-1)^2$

![](img/2nd/15.png =400x center)

---

- $h(x)=5(x-1)^{2}\ =5\pa{x-\mathbf{1}}\pa{x-\mathbf{1}}$

  La fonction $h$ est la seule à posséder une **racine double**.

  $$x_0=1$$

  La parabole correspondante ne possède qu'un seul point d'intersection avec l'axe des abscisses en $x=1$.

  La **parabole bleue** est la représentation graphique de la fonction $h$.

---

- $f(x)=3(x-1)(x+3)$
- $g(x)=-2(x-1)(x+3)\ $

  Ces fonctions possèdent toutes les deux les mêmes racines :

  $$x_{1}=1\ \text{et}\ x_{2}=(-3)$$

  On peut donc les associer à la **parabole rouge** et à la **parabole verte** qui coupent toutes les deux l'axe des abscisses en $(-3)$ et $1$.

  Les branches de la **parabole verte** sont tournées vers le haut donc $a>0$.

  Donc :

  - La **parabole verte** représente $f$ pour qui $a=3>0$.
  - La **parabole rouge** représente alors la fonction $g$.
```

```admonish meth title="Méthode : Factoriser une expression du 2nd degré"
On considère la fonction $f$ définie sur $\R$ par $\ f(x)=2x^{2}+4x-6$.

- On peut faire l'hypothèse que $1$ est racine de la fonction polynôme $f$

  En effet, $\ f(1)=2{\times 1}^{2}+4 \times 1-6\quad =2+4-6=0$.

- D'après l'expression de la fonction $f$, on a : $$f(x)=2x^{2}+4x-6$$

  On peut affirmer que $a=2$.

  Donc, sous sa forme factorisée, $f$ s'écrit :

  $$f(x)=2(x-1)\pa{x-x_{2}}$$

  Il s'agit donc de déterminer $x_{2}$, tel que :

  $$f(x)=2x^{2}+4x-6=2(x-1)\pa{x-x_{2}}$$

  En prenant par exemple $x=0$, cette égalité s'écrit :

  $$
  \begin{array}{rcrrcl}
  	     & f(x) & = & 2x^{2}+4x-6              & = & 2(x-1)\pa{x-x_{2}} \\\\
  	\iff & f(0) & = & 2\times0^{2}+4\times 0-6 & = & 2(0-1)\pa{0-x_{2}} \\\\
  	\iff & f(0) & = & -6                       & = & 2x_{2}             \\\\
  	\iff &      &   & -3                       & = & x_{2}
  \end{array}
  $$

  Ainsi, sous sa forme factorisée, la fonction polynôme $f$ s'écrit :

  $$f(x)=2(x-1)\pa{x-(-3) }\quad\Rarr\quad \boxed{f(x)=2(x-1)(x+3)}$$
```

## Signe d'une fonction polynôme de degré 2

```admonish meth title="Méthode : Étudier le signe d'une fonction du 2nd degré sous forme factorisée"
Soit $f$ définie sur $\R$ par $f(x)=-2(x-3)(x+2)$

Le signe de $f(x)=-2(x-3)(x+2)$ dépend du signe de chaque facteur :

- $(-2)$,
- $(x-3)$,
- $(x+2)$

On étudie ainsi le signe de chaque facteur et on présente les résultats dans un tableau de signes.

On a : $\quad\begin{cases}x-3\ge 0\\\\x+2\ge 0\end{cases}\iff\begin{cases}x\ge 3\\\\x\ge -2\end{cases}$

En appliquant la règle des signes dans le tableau, on pourra en déduire le signe de $f(x)$.

![](img/2nd/16.png =500x center)

On en déduit que :

- $f(x) \geqslant 0$ pour $x \in \lbrack-2;3\rbrack$
- $f(x) \leqslant 0$ pour $x \in \left\rbrack-\infty;-2 \right\rbrack \cup \left\lbrack 3;+\infty \right\lbrack$.

La représentation de la fonction $f$ à l'aide d'un logiciel permet de confirmer les résultats établis précédemment.

![](img/2nd/17.png =300x center)
```

```admonish rem
- Lorsque $\ x_1\ $ et $\ x_2\ $ existent, le signe de $a$ est situé _"à l'extérieur des racines"_ dans le tableau de signes.

![](img/2nd/18.png =600x center)

- Si $\ x_1\ $ et $\ x_2\ $ n'existe pas (voir paragraphe suivant), $f$ est du _signe de $a$_.
```

### Équation de la forme $ax^2+bx+c=0$

```admonish rem
Il suffit de connaître les valeurs de $x_1$ et $x_2$ ainsi que de $a$ pour pouvoir déterminer le signe, la variation, le mini/maxi de $f$.

Pour déterminer les racines de $f$, il faut résoudre l'équation $f(x)=0$ avec $f(x)=ax^2+bx +c$
```

```admonish prop
Soit l'équation $\boxed{ax^2+bx+c=0}$

Le nombre de solution de cette équation dépend du signe de $\boxed{\Delta=b^2-4ac}$

- $\Delta>0\Rarr$ 2 solutions $\boxed{x_1=\cfrac{-b+\sqrt{\Delta}}{2a}}$ et $\boxed{x_2=\cfrac{-b-\sqrt{\Delta}}{2a}}$
- $\Delta=0\Rarr$ 1 solution $\boxed{x_0=\pa{\cfrac{-b}{2a}}}$
- $\Delta\lt 0\Rarr$ pas de solutions
```

```admonish ex
On cherche à résoudre $\quad x^2-2x-3=0$

On a $\quad\begin{cases}a=1\\\\b=-2\\\\c=-3\end{cases}\qquad\Rarr\begin{cases}\begin{array}{rcl}\Delta&=&b^2-4ac\\\\&=&(-2)^2-4\times(1)\times(-3)\\\\&=&16\end{array}\end{cases}$

On a $\quad\Delta=16>0\quad\Rarr\begin{cases}x_1=\cfrac{-b+\sqrt{\Delta}}{2a}=\cfrac{-(-2)+\sqrt{16}}{2\times (1)}=3\\\\x_2=\cfrac{-b-\sqrt{\Delta}}{2a}=\cfrac{-(-2)-\sqrt{16}}{2\times (1)}=-1\end{cases}$
```

```admonish meth title="Méthode : Étudier une fonction de la forme $f(x)=ax^2+bx+c$"
Soit la fonction $f(x)=x^2-2x-3$ définie sur $\R$.

Nous avons, d'après l'exemple précédent, que $f$ possède 2 racines $\begin{cases}x_1=3\\\\x_2=(-1)\end{cases}$

---

**Variations de $f(x)$ :**

On a :

- $p=\cfrac{x_1+x_2}{2}=\cfrac{-1+3}{2}=1$

- et $\ f(1)=(1)^2-2\times(1)-3=-4$

Le sommet $S$ a pour coordonnées $(1;-4)$

$a=1>0$ donc le tableau de variations de $f$ est :

![](img/2nd/04.png =350x center)

---

**Forme factorisée :**

On a $\ a=1\ $, $\ x_1=(-1)\ $ et $\ x_2=3\ $ donc :

$$
\begin{array}{rcl}
	f(x) & = & a(x-x_1)(x-x_2)      \\\\
	     & = & 1\pa{x-(-1)}\pa{x-3} \\\\
	     & = & (x+1)(x-3)
\end{array}
$$

---

**Signe de $f(x)$ :**

$a=1>0$ donc le signe de $f(x)=(x+1)(x-3)$ est :

![](img/2nd/05.png =400x center)

---

**Représentation graphique :**

À l'aide de toutes les informations, nous pouvons établir la représentation de $f$.

![](img/2nd/06.png =350x center)
```

```admonish prop
Les solutions dans $\R$ de l'équation $\boxed{x^{2}=k}$ dépendent du signe de $k$.

- Si $k\lt 0$, alors l'équation n'a pas de solution.
- Si $k=0$, alors l'équation possède une unique solution qui est $0$.
- Si $k>0$, alors l'équation possède deux solutions qui sont $\sqrt{k}$ et $-\sqrt{k}$.
```

```admonish rem
Résoudre $x^2=k$ revient à résoudre $x^2-k=0$.

Dans ce cas on a $\begin{cases}a=1\\\\b=0\\\\c=-k\end{cases}$
```

```admonish meth title="Méthode : Résoudre une équation du type $x^2=k$"
Résoudre dans $\R$ les équations :

- $x^{2}=16$

- $x^{2}=-8$

- ${2x}^{2}-8=120$

---

- **$x^{2}=16$**

  $16$ est positif donc l'équation $x^{2}=16$ admet deux solutions :

  $$
  \begin{cases}
  	x_1=\sqrt{16}=4 \\\\
  	x_2=-\sqrt{16}=-4
  \end{cases}
  $$

---

- **$x^{2}=-8$**

  $(-8)$ est négatif donc l'équation $x^{2}=-8$ n'a pas de solution dans $\R$.

---

- **${2x}^{2}-8=120$**

  $$
  \begin{array}{rcl}
	  {2x}^{2}-8 & = & 120                                                                            \\\\
	  {2x}^{2}   & = & 120+8                                                                          \\\\
	  {2x}^{2}   & = & 128                                                                            \\\\
	  x^{2}      & = & 64\quad\Rarr\begin{cases}x_1=\sqrt{64}=8\\\\x_2=-\sqrt{64}=-8\end{cases}
  \end{array}
  $$

  L'équation admet donc deux solutions $\ x_1=8\ $ et $\ x_2=(-8)$
```
