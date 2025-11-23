# Fonctions de référence

<!-- toc -->

## Fonctions de référence

### Fonction du 1er degré

```admonish def
Une fonction de la forme $f(x)=\cbox{pink}{a}x+\cbox{lightgreen}{b}$ est appelée **fonction du 1er degré**.

- $\cbox{pink}{a}$ : Pente ou coefficient directeur $\quad a=\cfrac{\Delta y}{\Delta x}$
- $\cbox{lightgreen}{b}$ : Ordonnée à l'origine $\quad b=f(0)$
```

```admonish ex
Soit $f(x)=\cfrac{-1}{2}x+1\quad\rarr\quad$ on a : $ \cbox{pink}{a}=\cfrac{-1}{2} $ et $ \cbox{lightgreen}{b}=1$

- Calcul d'images

$$
\begin{aligned}
	f(\cbox{lightblue}{4}) & =\cfrac{-1}{2}\times \cbox{lightblue}{4}+1 \\\\
	                       & =-2+1=-1
\end{aligned}
$$

- Tableau de valeurs

$$
\begin{array}{|c|c|c|c|c|}\hline
	x    & -2 & 0 & 1   & 4  \\\\ \hline
	f(x) & 2  & 1 & 0.5 & -1 \\\\ \hline
\end{array}
$$

![](img/ref/01.png =600x center)
```

```admonish prop
Soit $f(x)=ax+b$ définie sur $\R$.

- **Sens de varitions de $f$**
  - Si $ a>0 $ alors $ f $ est **croissante** sur $\R$
  - Si $ a<0 $ alors $ f $ est **décroissante** sur $\R$
  - Si $ a=0 $ alors $ f $ est **constante** sur $\R$

![](img/ref/02.png =700x center)

- **Signe de $f$**
  - Pour $x=\cfrac{-b}{a}$, on a $f(x)=0$.
  - Si $ a>0 $ alors $ f $ est :
    - **négative** sur $\left]-\infty ; \cfrac{-b}{a}\right[$
    - **positive** sur $\left]\cfrac{-b}{a} ; +\infty\right[$
  - Si $ a<0 $ alors $ f $ est :
    - **positive** sur $\left]-\infty ; \cfrac{-b}{a}\right[$
    - **négative** sur $\left]\cfrac{-b}{a} ; +\infty\right[$

|             $a\gt 0$              |             $a\lt 0$              |
| :-------------------------------: | :-------------------------------: |
| ![](img/ref/03a.png =300x center) | ![](img/ref/03b.png =300x center) |
```

### Fonction valeur absolue

```admonish rem
C'est la valeur "positive" du nombre donné :

$$\lvert 3\rvert=3\qquad\lvert -1\rvert=1\qquad\lvert -2.51\rvert=2.51\qquad\lvert -\pi\rvert=\pi$$
```

```admonish def
Soit $x\in\R$. On a :

$$\lvert x\rvert=\begin{cases}x&\text{si } x>0\\\\-x&\text{si } x<0 \end{cases}$$
```

```admonish prop
- **Représentation de** $f(x)=\lvert x\rvert$

$$
\begin{array}{|c|c|c|c|c|c|c|c|}\hline
	x                   & -3 & -2 & -1 & 0 & 1 & 2 & 3 \\\\ \hline
	f(x)=\lvert x\rvert & 3  & 2  & 1  & 0 & 1 & 2 & 3 \\\\ \hline
\end{array}
$$

![](img/ref/04.png =500x center)
```

### Fonction carré

```admonish def
La fonction **carré** est définie sur $\R$ par :

$$f(x)=x^2$$
```

```admonish prop
- **Tableau de valeurs**

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|c|}\hline
   x & -3 & -2 & -1 & -0.5 & 0 & 0.5 & 1 & 2 & 3 \\\\ \hline
f(x) &  9 &  4 &  1 & 0.25 & 0 & 0.25 & 1 & 4 & 9 \\\\ \hline
\end{array}
$$

![](img/ref/05.png =300x center)
```

```admonish rem
- La fonction carré **n'est pas** une fonction **linéaire**.
- La représentation graphique de la fonction carré est une **parabole** de sommet $O$.
- La représentation graphique de la fonction carré est **symétrique par rapport à l'axe des ordonnées**.
```

```admonish meth title="Méthode : Comparer des images"
Comparons, graphiquement $f(0.5)$ et $f(2)$

![](img/ref/06.png =400x center)

On constate que : $f(0.5)<f(2)$

En effet, on a :

- $f(2)=2^2=4$
- $f(0.5)=0.5^2=0.25$

Donc $ f(2)>f(0.5)$

---

Comparons, graphiquement $f(-1.5)$ et $f(-1)$

![](img/ref/07.png =400x center)

On constate que : $f(-1.5)>f(-1)$

En effet, on a :

- $f(-1.5)=(-1.5)^2=2.25$
- $f(-1)=(-1)^2=1$

Donc $ f(-1.5)>f(-1)$
```

```admonish meth title="Méthode : Comparer des images algébrqiuement"
Soit $f(x)=x^2$.$\quad$ Comparons $f(-0.5)$ et $f(-3)$

On a :

- $(-0.5)\in\left]-\infty;0\right[ $ et $ (-3)\in\left]-\infty;0\right[$
- $f$ **décroissante** sur $\left]-\infty;0\right[$
- $(-3)<(-0.5)$

Donc $\boxed{f(-3)>f(-0.5)}$

En effet,
$$(-3)^2=9\qquad>\qquad(-0.5)^2=0.25$$
```

```admonish prop
- **Signe**

La fonctions carré est **positive** sur $\R$

- **Sens de variations**

![](img/ref/08.png =600x center)
```

```admonish meth title="Méthode : résoudre des équations du type $x^2=k$"
Résoudre $x^2=5$ revient à trouver tous les nombres dont le carré est égal à $5$.

On a :

$$x^2=5\iff\begin{cases}x=\sqrt{5}\\\\x=-\sqrt{5}\end{cases}$$

De manière générale, $x^2=k$ (avec $k>0$) possède 2 solutions

$$x^2=k\iff\begin{cases}x=\sqrt{k}\\\\x=-\sqrt{k}\end{cases}$$

![](img/ref/09.png =400x center)
```

### Fonction inverse

```admonish def
La fonction **inverse** est définie sur $\R\minzero$ par :

$$f(x)=\cfrac{1}{x}$$
```

```admonish rem
- La fonction **inverse** n'est pas définie en $0$.$\qquad$(division par $0$ impossible)
- $\R\minzero$ désigne l'ensemble des nombres réels sauf $0$, c'est-à-dire :

$$\left]-\infty;0\right[\cup\left]0;+\infty\right[$$

- On peut aussi noter $\R\minzero=\Ret$.
```

```admonish prop
- **Tableau de valeurs**

On a, par ex. : $f(-2)=\cfrac{1}{-2}=-0.5$
$\quad$

$$
	\begin{array}{|c|c|c|c|c|c|c|c|c|c|}\hline
		x    & -3            & -2            & -1 & -0.5 & 0.25 & 0.5 & 1 & 2                & 3            \\\\ \hline
		f(x) & \cfrac{-1}{3} & \cfrac{-1}{2} & -1 & -2   & 4    & 2   & 1 & \cfrac{1}{2}=0.5 & \cfrac{1}{3} \\\\ \hline
	\end{array}
$$

La représentation graphique de la fonction **inverse** est une **hyperbole** de centre $O$ et est **symétrique** par rapport à l'**origine**.

![](img/ref/10.png =500x center)

- **Signe**

![](img/ref/11.png =500x center)

- **Sens de variations**

![](img/ref/12.png =500x center)
```

```admonish meth title="Méthode : Comparer des images"
Soit $f(x)=\cfrac{1}{x}$.$\quad$ Comparons $f(0.5)$ et $f(3)$

On a :

- $0.5\in\left]0;+\infty\right[ $ et $ 3\in\left]0;+\infty\right[$
- $f$ **décroissante** sur $\left]0;+\infty\right[$
- $0.5<3$

Donc $\boxed{f(0.5)>f(3)}$

En effet, $\quad\cfrac{1}{0.5}=2\qquad>\qquad\cfrac{1}{3}\approx 0.333...$
```

```admonish meth title="Méthode : résoudre des équations avec des inverses"
Résoudre $\cfrac{1}{x}=5$ revient à trouver tous les nombres dont l'inverse est égal à $5$.

On a :

$$
\begin{array}{rrcl}
	     & \cfrac{1}{x} & = & 5            \\\\
	\iff & \cfrac{1}{x} & = & \cfrac{5}{1} \\\\
	\iff & 5\times x    & = & 1\times 1    \\\\
	\iff & x            & = & \cfrac{1}{5}
\end{array}
$$

De manière générale, $\cfrac{1}{x}=k$ (avec $x\neq 0$) possède $1$ solution :

$$\cfrac{1}{x}=k\quad\iff\quad \boxed{x=\cfrac{1}{k}}$$
```

```admonish ex
$$\cfrac{1}{x}=\cfrac{2}{3}\quad\iff x=\cfrac{\quad 1\quad}{\cfrac{2}{3}}\quad\iff x=\cfrac{3}{2}$$
```

### Fonction racine carrée

```admonish def
La fonction **racine carrée** est définie sur $\left[0;+\infty\right[$ par :

$$f(x)=\sqrt{x}$$
```

```admonish rem
- La fonction **racine carrée** est définie pour des valeurs de $x$ **positives**.
  - $Df=\Rp$
- Pour tout $x\in\Rp$, on a $f(x)\geq 0$.
  - La fonction **racine carrée** est **positive** sur $\Rp$
```

```admonish prop
- **Tableau de valeurs**

$$
\begin{array}{|c|c|c|c|c|c|c|c|}\hline
	x    & 0        & 1        & 2               & 3               & 4        & 5               & ... \\\\ \hline
	f(x) & \sqrt{0} & \sqrt{1} & \sqrt{2}        & \sqrt{3}        & \sqrt{4} & \sqrt{5}        & ... \\\\
	     & =0       & =1       & \approx1.414... & \approx1.732... & =2       & \approx 2.23... &     \\\\ \hline
\end{array}
$$

- **Représentation**

![](img/ref/13.png =600x center)


- **Signe**

![](img/ref/14.png =300x center)

- **Sens de variations**

![](img/ref/15.png =300x center)
```

```admonish meth title="Méthode : Comparer des images"
Soit $f(x)=\sqrt{x}$.$\quad$ Comparons $f(0.5)$ et $f(3)$

On a :

- $0.5\in\R^{+} $ et $ 3\in\R^{+}$
- $f$ **croissante** sur $\R^{+}$
- $0.5<3$

Donc $\boxed{f(0.5)<f(3)}$

En effet,
$$\sqrt{0.5}\approx 0.707...\qquad<\qquad\sqrt{3}\approx 1.732...$$
```

```admonish meth title="Méthode : résoudre des équations avec des racines carrés"
Résoudre $\sqrt{x}=5$ revient à trouver tous les nombres dont la racine carrée est $5$.

On a :

$$\sqrt{x}=5\quad\iff\left(\sqrt{x}\right)^2=5^2\quad\iff \boxed{x=25}$$

De manière générale, $\sqrt{x}=k $, **avec $k>0$ et $x>0$**, possède $1$ solution :

$$\sqrt{x}=k\quad\iff\quad \boxed{x=k^2}$$
```

```admonish ex
$$
\begin{array}{rrcl}
	     & \sqrt{x+1} & = & 2     \\\\
	\iff & (x+1)      & = & 2^2=4 \\\\
	\iff & x          & = & 3
\end{array}
$$
```

### Fonction cube

```admonish def
La fonction **cube** est définie sur $\R$ par :

$$f(x)=x^3$$
```

```admonish prop
- **Tableau de valeurs**

$$
\begin{array}{|c|c|c|c|c|c|c|}\hline
	x    & -2     & -1     & 0   & 1.5     & 2   & 3   \\\\ \hline
	f(x) & (-2)^3 & (-1)^3 & 0^3 & (1.5)^3 & 2^3 & 3^3 \\\\
	     & =-8    & =-1    & =0  & =3.375  & =8  & =27 \\\\ \hline
\end{array}
$$

- **Représentation**

La représentation graphique de la fonction cube est **symétrique** par rapport à **l'origine du repère**.

![](img/ref/16a.png =500x center)

- **Signe**

![](img/ref/17.png =500x center)

- **Sens de variations**

![](img/ref/18.png =300x center)
```

```admonish meth title="Méthode : Comparer des images"
Soit $f(x)=x^3$.

Comparons $f(0.5)$ et $f(2)$

On a :

- $f$ croissante sur $\R$
- $0.5<2$

Donc $\boxed{f(0.5)<f(2)}$

En effet,

$$0.5^3=0.125\qquad<\qquad2^3=8$$
```

## Position relatives des courbes : $y=x $ ; $ y=x^2 $ et $ y=x^3$

```admonish prop
- Si $\quad x\geq 1\quad$, on a $\quad \color{blue}x^3\color{black}\geq\color{green}x^2\color{black}\geq\color{red}x$
- Si $\quad x\leq 1\quad$, on a $\quad \color{blue}x^3\color{black}\leq\color{green}x^2\color{black}\leq\color{red}x$

![](img/ref/19.png =600x center)
```

```admonish demo
Étudions le signe de $(x^2-x)$ et de $(x^3-x^2)$.

---

- **Cas n°1 :** $\quad \boxed{x\geq 1}$

> On a $\quad (x^2-x)=x(x-1)$
>
> Et on a $\quad x\geq 1\iff\begin{cases}x>0\\\\x-1\geq 0\end{cases}\quad$ donc $\quad x(x-1)\geq 0$
>
> Donc $\quad x(x-1)\geq 0\ \iff\ (x^2-x)\geq 0\ \iff\ x^2\geq x$

> On a $(x^3-x^2)=x^2(x-1)$
>
> Et on a $\quad x\geq 1\iff\begin{cases}x^2>0\\\\x-1\geq 0\end{cases}\quad$ donc $\quad x^2(x-1)\geq 0$
>
> Donc $\quad x^2(x-1)\geq 0\ \iff\ (x^3-x^2)\geq 0\ \iff\ x^3\geq x^2$

Donc $\quad\boxed{x\geq 1\ \Rarr\ x^3\geq x^2\geq x}$

---

- **Cas n°2 :** $\quad \boxed{0\lt x\leq 1}$

> On a $\quad (x^2-x)=x(x-1)$
>
> Et on a $\quad 0\lt x\leq 1\iff\begin{cases}x>0\\\\x-1\leq 0\end{cases}\quad$ donc $\quad x(x-1)\leq 0$
>
> Donc $\quad x(x-1)\le 0\ \iff\ (x^2-x)\le 0\ \iff\ x^2\le x$

> On a $(x^3-x^2)=x^2(x-1)$
>
> Et on a $\quad 0\lt x\leq 1\iff\begin{cases}x^2>0\\\\x-1\le 0\end{cases}\quad$ donc $\quad x^2(x-1)\le 0$
>
> Donc $\quad x^2(x-1)\le 0\ \iff\ (x^3-x^2)\le 0\ \iff\ x^3\le x^2$

Donc $\quad\boxed{0\lt x\leq 1\ \Rarr\ x^3\leq x^2\leq x}$
```

## Fonction paire/impaire

```admonish def
- Une fonction $f$ est **paire** lorsque pour tout réel $x\in\Df$, on a :

$$(-x)\in\Df\quad\text{et}\quad f(-x)=f(x)$$

- Une fonction $f$ est **impaire** lorsque pour tout réel $x\in\Df$, on a :

$$(-x)\in\Df\quad\text{et}\quad f(-x)=-f(x)$$
```

```admonish ex
La fonction $f(x)=x^2$ définie sur $\R$ est **paire** car, pour tout $x\in\R$, on a :

$$\begin{aligned}f(-x)=(-x)^2&=(-1\times x)^2\\\\&=(-1)^2\times x^2\\\\&=x^2\qquad=f(x)\end{aligned}$$

![](img/ref/20.png =400x center)
```

```admonish ex
La fonction $f(x)=\cfrac{1}{x}$ définie sur $\Ret$ est **impaire** car, pour tout $x\in\Ret$, on a :

$$
\begin{array}{rcl}
	f(-x) & = & \cfrac{1}{-x}              \\\\
	      & = & -\cfrac{1}{x}              \\\\
	      & = & -\left(\cfrac{1}{x}\right)\qquad = -f(x)
\end{array}
$$

![](img/ref/21.png =400x center)
```

```admonish rem
- Une fonction peut être ni paire, ni impaire.
  - Ex: $f(x)=\sqrt{x}$
- La représentation graphique d'une fonction **paire** est **symétrique** par rapport à **l'axe des ordonnées**.
- La représentation graphique d'une fonction **impaire** est **symétrique** par rapport à **l'origine du repère**.

|        Fonction **paire**        |       Fonction **impaire**       |
| :------------------------------: | :------------------------------: |
| ![](img/ref/20.png =300x center) | ![](img/ref/21.png =300x center) |
```

```admonish meth title="Méthode : Étudier la parité d'une fonction"
Soit $f(x)=2x^2-1$ définie sur $\R$.

Pour tout $x\in\R$, on a :

$$
\begin{array}{rcl}
	f(-x) & = & 2(-x)^2-1                  \\\\
	      & = & 2\times (-1\times x)^2-1   \\\\
	      & = & 2\times (-1)^2\times x^2-1 \\\\
	      & = & 2x^2-1\qquad =f(x)
\end{array}
$$

Donc $f$ est **paire**.

Sa représentation graphique est **symétrique** par rapport à **l'axe des ordonnées**.

![](img/ref/22.png =400x center)
```
