# Fonctions polynômes de degré 2 (1)

<!-- toc -->

## Fonction polynôme de degré 2

```admonish def
On appelle **fonction polynôme de degré 2** toute fonction $f$ définie sur $\R$ par :

$$\boxed{f(x)=ax^{\textcolor{red}{2}}+bx+c}$$

Les coefficients $a$, $b$ et $c$ sont des réels donnés avec $a \neq 0$.
```

```admonish ex
- $f(x)=3x^{\textcolor{red}{2}}-7x+3$

- $g(x)=\cfrac{1}{2}x^{\textcolor{red}{2}}-5x+\cfrac{3}{5}$

- $h(x)=4-2x^{\textcolor{red}{2}}$

- $k(x)=(x-4)(5-2x)\quad=(-2x^{\textcolor{red}{2}}+13x-20)$

**Contre-exemples :**

- $m(x)=5x-3\quad$ ...est une fonction polynôme de degré $1$ (fonction affine).

- $n(x)=5x^{\textcolor{blue}{4}}-7x^{3}+3x-8\quad$ ...est une fonction polynôme de degré $4$.
```

```admonish def
Les fonctions polynômes de degré 2 _étudiées dans ce chapitre_ sont définies sur $\R$ par :

$$\boxed{f(x)=ax^{2}}\quad\text{ou}\quad \boxed{f(x)=ax^{2}+b}$$
```

```admonish rem
Une fonction polynôme du 2$\eme$ degré s'appelle également **trinôme**.
```

## Représentation graphique

### Parabole

```admonish rem
La représentation graphique d'une fonction polynôme de degré 2 s'appelle une **parabole**.

![](img/2nd/image2tt.png =350x center)
```

```admonish prop
Soit $f$ une fonction polynôme du 2nd degré, telle que $\ \boxed{f(x)=ax^{2}+b}$

- Si $\boxed{a>0}$, $f$ est d'abord **décroissante**, puis **croissante**
- Si $\boxed{a\lt 0}$, $f$ est d'abord **croissante**, puis **décroissante**

![](img/2nd/01.png =450x center)
```

### Axe de symétrie et sommet

```admonish ex
La fonction $f$ telle que : $\quad\ f(x)=-x^{2}+2\ $

![](img/2nd/02tt.png =350x center)

La représentation graphique de $f$ **une parabole** dont _les branches sont tournées vers le bas_ et dont le sommet est le point $S\left(0;2\right)$.

L'axe de symétrie de la parabole est l'**axe des ordonnées**.
```

```admonish prop
Les paraboles d'équation :

$$\boxed{y=ax^{2}+b}$$

...ont pour **axe de symétrie l'axe des ordonnées** et pour **sommet** le point de coordonnées $(0;b)$.

![](img/2nd/03.1.png =350x center)
```

```admonish meth title="Méthode : Associer une fonction du 2nd degré à sa représentation graphique"
![](img/2nd/image7-cours.png#right =350x center)

Soient les fonctions :

- $f(x)=-x^2+3$

- $g(x)=-3x^2$

- $h(x)=x^2+3$

- $p(x)=\cfrac{x^2}{4}+1$

- $q(x)=\cfrac{-x^2}{4}+1$

:bulb: Associer chaque fonction à sa représentation graphique ci-contre.

---

1. La **parabole rouge** est la seule dont le sommet est l'origine $(0;0)$.

   Donc $b=\mathbf{0}$ dans l'écriture de la fonction $x \mapsto ax^{2}+b$.

   Ainsi, la **parabole rouge** est la fonction $g$ définie par $g(x)=- 3x^{2}$.

![](img/2nd/image7.1-cours.png =350x center)

---

2. La **parabole verte** et **noire** ont toutes les deux pour sommet le point $(0;3)$.

   Donc $b=\mathbf{3}$ dans l'écriture de la fonction $x \mapsto ax^{2}+b$.

   Ainsi, il faut choisir parmi les expressions : $\quad f(x)=-x^{2}+3\quad$ et $\quad h(x)=x^{2}+3$

![](img/2nd/image7.2-cours.png =350x center)

- Les branches de la **parabole noire** sont tournées vers le haut donc $\ a\gt 0$

   La **parabole noire** représente la fonction $h(x)=x^{2}+3$ pour qui $a=1>0$.

- Les branches de la **parabole verte** sont tournées vers le bas donc $\ a\lt 0$

   La **parabole verte** représente la fonction $f(x)=-x^{2}+3$ pour qui $a=-1\lt 0$

---

3. La **parabole bleue** et **jaune** ont toutes les deux pour sommet le point $(0;1)$.

   Donc $b=\mathbf{1}$ dans l'écriture de la fonction $x \mapsto ax^{2}+b$.

   Ainsi, il faut choisir parmi les expressions : $\quad p(x)=\cfrac{x^{2}}{4}+1\quad$ et $\quad q(x)=\cfrac{-x^{2}}{4}+1$

![](img/2nd/image7.3-cours.png =350x center)

- Les branches de la **parabole bleue** sont tournées vers le haut donc $\ a\gt 0$.

   La **parabole bleue** représente la fonction $p(x)=\cfrac{x^{2}}{4}+1$ pour qui $a=\cfrac{1}{4}>0$.

- Les branches de la **parabole jaune** sont tournées vers le bas donc $\ a\lt 0$.

   La **parabole jaune** représente la fonction $q(x)=\cfrac{-x^{2}}{4}+1$ pour qui $a=-\cfrac{1}{4}\lt 0$.
```

```admonish meth title="Méthode : Déterminer l'expression de $f$ à partir de sa représentation"
Déterminons graphiquement l'expression de la fonction $f$ représentée ci-dessous.

![](img/2nd/image9.png =350x center)

---

1. La courbe est une parabole et a pour axe de symétrie l'axe des ordonnées, donc $f$ est de la forme :

$$f(x)=ax^{2}+b$$

2. Le sommet de la parabole a pour coordonnées $(0;3)$, donc $b=3$ :

$$f(x)=ax^{2}+3$$

3. On lit graphiquement $f(1)=1$ donc :

$$
\begin{array}{rcl}
	f(1)            & = & 1             \\\\
	a\times 1^{2}+3 & = & 1             \\\\
	a+3             & = & 1             \\\\
	a               & = & 1-3\quad=(-2)
\end{array}
$$

On a donc : $\quad\boxed{f(x)=-2x^2+3}$
```
