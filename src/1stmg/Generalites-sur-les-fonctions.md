# Généralités sur les fonctions

## Définitions et notations

### Définition

```admonish ex
On considère la fonction $f$ qui donne l'aire d'un rectangle de dimensions $3$ et $x$.

Une **expression littérale** de $f$ est donc : $\quad f(x)=3x$

![](img/fct/rect.png =350x center)
```

```admonish def
Une fonction $f$ associe à tout nombre réel $x$ un unique nombre réel, noté $f(x)$.

On note également : $\quad\boxed{x\mapsto f(x)}\ $ ou $\ \boxed{y=f(x)}$.
```

```admonish ex
- $f(x)=3x^2+2$
- $f: x\mapsto\cfrac{1}{\sqrt{x}}$
- $f(x)=1+x+\cfrac{x^2}{2}+\cfrac{x^3}{6}$
```

### Image et antécédent

```admonish ex
Dire que $\ f(2)=5\ $ signifie que $\ 2\mapsto 5$

On dit que :

- l'**image** de $2$ par la fonction $f$ est $5$.
- un **antécédent** de $5$ par $f$ est $2$.
```

```admonish rem
- Un nombre possède une **unique image**.
- Cependant, un nombre peut posséder plusieurs antécédents.
```

```admonish meth title="Méthode : Déterminer l'image d'une fonction par calcul"
Soit la fonction $g$ définie par $g(x)=x^{2}-2$.

Calculons l'image de $6$ par la fonction $g$.

$$g(6)=6^{2}-2\quad=36-2\quad=34$$

L'image de $6$ par la fonction $g$ est $34$.
```

```admonish meth title="Méthode : Déterminer un antécédent par calcul"
Soit la fonction $f$ définie par $f(x)=2x-3$.

Déterminons un antécédent de $-5$ par la fonction $f$.

On cherche un antécédent de $-5$ donc $-5$ est une image.

On peut donc écrire $\ f(x)=-5\quad\rarr 2x-3=(-5)$

On résout ainsi l'équation :

$$
\begin{array}{rrl}
	     & f(x) = & -5                    \\\\
	\iff & 2x-3 = & (-5)                  \\\\
	\iff & 2x =   & 3-5                   \\\\
	\iff & 2x =   & (-2)\qquad\iff x=(-1)
\end{array}
$$

L'antécédent de $(-5)$ par $f$ est donc $(-1)$.
```

## Représentation graphique

```admonish meth title="Méthode : Représenter graphiquement une fonction"
Soit la fonction $f$ définie par $f(x)=5x-x^{2}$

On donne un tableau de valeurs de la fonction $f$ :

$$
	\begin{array}{|c|c|c|c|c|c|c|c|c|}\hline
		x    & 1 & 1,5  & 2 & 2,5  & 3 & 3,5  & 4 & 4,5  \\\\ \hline
		f(x) & 4 & 5,25 & 6 & 6,25 & 6 & 5,25 & 4 & 2,25 \\\\ \hline
	\end{array}
$$

On représente les données du tableau de valeurs dans un repère tel que :

- Les valeurs de $x$ se trouvent **en abscisse**
- Les valeurs de $f(x)$ correspondantes se trouvent **en ordonnée**.

![](img/fct/image2.png =450x center)

En reliant les points, on obtient une courbe.

![](img/fct/image3.png =450x center)

Tout point de la courbe ont comme des coordonnées $\coordl{x}{f(x)}$.
```

```admonish rem
Les **images** $f(x)$ se lisent sur l'**axe des ordonnées** $\pa{y}$.

La courbe représentative de $f$ définie par $\ f(x)=5x-x^{2}\ $ peut se noter :

$$y=5x-x^{2}\ $$

De façon générale, l'équation d'une courbe se note $\ y=f(x)$
```

## Résolution graphique d'équations et d'inéquations

```admonish meth title="Méthode : Résoudre graphiquement une équation"
On a représenté la courbe de $f$ définie par : $\qquad f(x)=5x-x^{2}\ $

Résolvons **graphiquement** l'équation $\qquad 5x-x^{2}=4$

![](img/fct/image5.png =450x center)

L'équation $\quad 5x-x^{2}=4\quad$ peut s'écrire $\quad f(x)=4\quad$.

Ce qui revient à trouver des antécédents de $4$ par la fonction $f$.

- On "part" de l'ordonnée $4$
- On "rejoint" la courbe
- On lit les solutions sur l'axe des abscisses

$$f(x)=4\ \iff\ \begin{cases}x=1\\\\x=4\end{cases}$$

On peut noter : $f(x)=4\iff S=\brace{ 1;4 }$.
```

```admonish rem
- Par **lecture graphique**, les solutions obtenues sont **approchées**.
- L'équation $f(x)=7$, ne semble pas avoir de solution car la courbe représentée ne possède pas de point d'ordonnée $7$.
- **Graphiquement**, on ne peut pas être certain que les solutions qui apparaissent sont les seules. Il pourrait y en avoir d'autres au-delà des limites de la représentation graphique tracée.
```

```admonish meth title="Méthode : Résoudre graphiquement une inéquation"
Dans la méthode précédente, on a représenté la fonction $f$ définie par : $\quad f(x)=5x-x^{2}\ $

Résolvons **graphiquement** l'inéquation $\qquad 5x-x^{2}>4$

L'inéquation $\ \pa{5x-x^{2}}>4\ $ peut s'écrire $\ f(x)>4$.

Cela revient à déterminer les points de la courbe dont l'**ordonnée est strictement supérieure** à $4$.

![](img/fct/image6.png =450x center)

On lit les solutions sur l'axe des abscisses $\rarr x$ est strictement compris entre $1$ et $4$.

On peut noter : $$f(x)>4\iff S=\left\rbrack1;4\right\lbrack$$
```

## Variations d'une fonction

### Taux de variation

```admonish def
Le **taux de variation** de la fonction $f$ entre $a$ et $b$ est le nombre :

$$\text{Taux de variation}=\cfrac{\text{Variation de }y}{\text{Variation de }x}=\cfrac{f(b)-f(a)}{b-a}$$

![](img/fct/tauxvar.png =700x center)
```

```admonish prop
Le taux de variation de $f$ entre $a$ et $b$ est la pente de la droite passant par les points d'abscisses $a$ et $b$ de la courbe de $f$.

![](img/fct/image7.tt.png =350x center)
```

```admonish meth title="Méthode : Déterminer un taux de variation d'une fonction"
Soit $f$ la fonction définie sur $\R$ par $\quad f(x)=2x^{2}+1$

Déterminons le **taux de variation** entre $1$ et $3$.

$$
\begin{aligned}
	\text{Taux de variation} & =\cfrac{f(3)-f(1)}{3-1}                                      \\\\
	                         & =\cfrac{\pa{2 \times 3^{2}+1}-\pa{2\times 1^{2}+1 }}{2}\quad \\\\
	                         & =\cfrac{19-3}{2}\quad=8
\end{aligned}
$$

La pente de la droite passant par les points d'abscisses $1$ et $3$ est égale à $8$.

![](img/fct/image7.png =650x center)
```

```admonish prop
Soit $a$ et $b$, deux nombres d'un intervalle $I$ tel que $a\lt b$.

Si le taux de variation d'une fonction $f$ entre **tous** les couples $a$ et $b$ de $I$ est ... :

- **...positif,**, alors $f$ est **strictement croissante** sur $I$.
- **...négatif**, alors $f$ est **strictement décroissante** sur $I$.
- **...nul**, alors $f$ est **constante** sur I.
```

### Fonctions monotones

```admonish def
On dit qu'une fonction $f$ est **monotone** sur un intervalle $I$, si $f$ est :

- soit **croissante** sur $I$,
- soit **décroissante** sur $I$,
- soit **constante** sur $I$.
```

```admonish meth title="Méthode : Étudier les variations d'une fonction à l'aide du taux de variation"
Soit $f$ la fonction définie sur $\R$ par : $\quad f(x)=5x-3$.

Démontrons que $f$ est **strictement croissante** sur $\R$.

On considère deux nombres quelconques $a$ et $b$.

Le taux de variation de $f$ entre $a$ et $b$ est égal à :

$$
	\begin{array}{rcl}
		\cfrac{f(b)-f(a)}{b-a} & = & \cfrac{(5b-3)-(5a-3)}{b-a}  \\\\
		                       & = & \cfrac{5b-5a}{b-a}\qquad = \cfrac{5(b-a)}{b-a}\quad =5
	\end{array}
$$

Or, $\ 5>0\ $ donc $\ \cfrac{f(b)-f(a)}{b-a}>0\ $ et donc $f$ est **strictement croissante** sur $\R$.
```
