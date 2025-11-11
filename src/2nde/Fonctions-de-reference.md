# Fonctions de référence.... à finir

<!-- toc -->

## Rappel : fonction du 1er degré

### Définition : fonction du 1er degré

admonish def

Une fonction de la forme $f(x)=\cbox{pink}{a}x+\cbox{lightgreen}{b}$ est appelée **fonction du 1er degré**.

- $\cbox{pink}{a}$ : Pente ou coefficient directeur $\quad a=\frac{\Delta y}{\Delta x}$
- $\cbox{lightgreen}{b}$ : Ordonnée à l'origine $\quad b=f(0)$

**Ex. :**

$f(x)=\frac{-1}{2}x+1$

on a : $ \cbox{pink}{a}=\frac{-1}{2} $ et $ \cbox{lightgreen}{b}=1$

- Calcul d'images

$$
\begin{aligned}
	f(\cbox{lightblue}{4}) & =\frac{-1}{2}\times \cbox{lightblue}{4}+1 \\
	                       & =-2+1=-1
\end{aligned}
$$

- Tableau de valeurs

$$
\begin{array}{c|c|c|c|c}
	x    & -2 & 0 & 1   & 4  \\ \hline
	f(x) & 2  & 1 & 0.5 & -1
\end{array}
$$

![](img/01.png =300x center)

### Propriétés : fonctions du 1er degré

Soit $f(x)=ax+b$ définie sur $\R$.

- **Sens de varitions de $f$**
  - Si $ a>0 $ alors $ f $ est **croissante** sur $\R$
  - Si $ a<0 $ alors $ f $ est **décroissante** sur $\R$
  - Si $ a=0 $ alors $ f $ est **constante** sur $\R$

![](img/02.png =300x center)

- **Signe de $f$**
  - Pour $x=\frac{-b}{a}$, on a $f(x)=0$.
  - Si $ a>0 $ alors $ f $ est :
    - **négative** sur $\left]-\infty ; \frac{-b}{a}\right[$
    - **positive** sur $\left]\frac{-b}{a} ; +\infty\right[$
  - Si $ a<0 $ alors $ f $ est :
    - **positive** sur $\left]-\infty ; \frac{-b}{a}\right[$
    - **négative** sur $\left]\frac{-b}{a} ; +\infty\right[$

![](img/03.png =300x center)

### Définition : Valeur absolue

```admonish rem
C'est la valeur "positive" du nombre donné :

$$\lvert 3\rvert=3\qquad\lvert -1\rvert=1\qquad\lvert -2.51\rvert=2.51\qquad\lvert -\pi\rvert=\pi$$
```

### Définition : Fonction valeur absolue

Soit $x\in\R$. On a :

$$\lvert x\rvert=\begin{cases}x&\text{si } x>0\\-x&\text{si } x<0 \end{cases}$$

- **Représentation de** $f(x)=\lvert x\rvert$

$$
\begin{array}{|c|c|c|c|c|c|c|c|}\hline
	x                   & -3 & -2 & -1 & 0 & 1 & 2 & 3 \\ \hline
	f(x)=\lvert x\rvert & 3  & 2  & 1  & 0 & 1 & 2 & 3
	\\ \hline
\end{array}
$$

![](img/04.png =300x center)

## Fonction carré

### Définition : fonction carré

La fonction **carré** est définie sur $\R$ par

$$ f(x)=x^2$$

### Propriétés : fonction carré

- **Tableau de valeurs**

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|c|}\hline
   x & -3 & -2 & -1 & -0.5 & 0 & 0.5 & 1 & 2 & 3 \\ \hline
f(x) &  9 &  4 &  1 & 0.25 & 0 & 0.25 & 1 & 4 & 9 \\ \hline
\end{array}
$$

![](img/05.png =300x center)

![](img/05.png =300x center)

**Rem :**

- La fonction carré **n'est pas** une fonction **linéaire**.
- La représentation graphique de la fonction carré est une **parabole** de sommet $O$.
- La représentation graphique de la fonction carré est **symétrique par rapport à l'axe des ordonnées**.

![](img/06.png =300x center)

**Méthode : Comparer des images**

Comparons, graphiquement $f(0.5)$ et $f(2)$

On constate que : $f(0.5)<f(2)$

En effet, on a :

- $f(2)=2^2=4$
- $f(0.5)=0.5^2=0.25$

Donc $ f(2)>f(0.5)$

![](img/07.png =300x center)

Comparons, graphiquement $f(-1.5)$ et $f(-1)$

On constate que : $f(-1.5)>f(-1)$

En effet, on a :

- $f(-1.5)=(-1.5)^2=2.25$
- $f(-1)=(-1)^2=1$

Donc $ f(-1.5)>f(-1)$

**Méthode sans graphique**

Soit $f(x)=x^2$.$\quad$ Comparons $f(-0.5)$ et $f(-3)$

On a :

- $f$ **décroissante** sur $\left]-\infty;0\right[$
- $(-0.5)\in\left]-\infty;0\right[ $ et $ (-3)\in\left]-\infty;0\right[$
- $(-3)<(-0.5)$

Donc $\boxed{f(-3)>f(-0.5)}$

En effet,
$$(-3)^2=9\qquad>\qquad(-0.5)^2=0.25$$

![](img/05.png =300x center)

- **Signe**

La fonctions carré est **positive** sur $\R$

- **Sens de variations**

![](img/08.png =300x center)

![](img/09.png =300x center)

**Méthode : résoudre des équations du type $x^2=k$**

Résoudre $x^2=5$ revient à trouver tous les nombres dont le carré est égal à $5$.

On a :

$$x^2=5\Leftrightarrow\begin{cases}x=\sqrt{5}\\x=-\sqrt{5}\end{cases}$$

De manière générale, $x^2=k$ (avec $k>0$) possède 2 solutions

$$x^2=k\Leftrightarrow\begin{cases}x=\sqrt{k}\\x=-\sqrt{k}\end{cases}$$

## Fonction inverse

### Définition : Fonction inverse

La fonction **inverse** est définie sur $\R-\{0\}$ par $f(x)=\frac{1}{x}$

**Rem :**

- $\R-\{0\}$ désigne l'ensemble des nombres réels sauf $0$, c'est-à-dire :

$$\left]-\infty;0\right[\cup\left]0;+\infty\right[$$

- On peut aussi noter $\R-\{0\}=\R^∗$.
- La fonction **inverse** n'est pas définie en $0$.$\qquad$(division par $0$ impossible)

- **Tableau de valeurs**

On a, par ex. : $f(-2)=\frac{1}{-2}=-0.5$
$\quad$

$$
\def\arraystretch {1.4}
\begin{array}{|c|c|c|c|c|c|c|c|c|c|}\hline
   x & -3           & -2           & -1 & -0.5 & 0.25 & 0.5 & 1 & 2           & 3 \\ \hline
f(x) & \frac{-1}{3} & \frac{-1}{2} & -1 & -2   & 4  & 2   & 1 & \frac{1}{2}=0.5 & \frac{1}{3} \\ \hline
\end{array}
$$

![](img/10.png =300x center)

**Rem :**

La représentation graphique de la fonction **inverse** est une **hyperbole** de centre $O$ et est **symétrique** par rapport à l'**origine**.

![](img/10.png =300x center)

![](img/10.png =300x center)

- **Signe**

![](img/11.png =300x center)

- **Sens de variations**

![](img/12.png =300x center)

**Méthode : Comparer des images**

Soit $f(x)=\frac{1}{x}$.$\quad$ Comparons $f(0.5)$ et $f(3)$

On a :

- $f$ **décroissante** sur $\left]0;+\infty\right[$
- $0.5\in\left]0;+\infty\right[ $ et $ 3\in\left]0;+\infty\right[$
- $0.5<3$

Donc $\boxed{f(0.5)>f(3)}$

En effet,

$$\frac{1}{0.5}=2\qquad>\qquad\frac{1}{3}\approx 0.333$$

**Méthode : résoudre des équations du type $\frac{1}{x}=k$**

Résoudre $\frac{1}{x}=5$ revient à trouver tous les nombres dont l'inverse est égal à $5$.
On a :
$$\frac{1}{x}=5\quad\Leftrightarrow\frac{1}{x}=\frac{5}{1}\quad\Leftrightarrow 5\times x=1\times 1\quad\Leftrightarrow \boxed{x=\frac{1}{5}}$$

De manière générale, $\frac{1}{x}=k$ (avec $x\neq 0$) possède 1 solution :
$$\frac{1}{x}=k\quad\Leftrightarrow\quad \boxed{x=\frac{1}{k}}$$

**Ex. :** $\frac{1}{x}=\frac{2}{3}\quad\Leftrightarrow x=\frac{  1  }{\frac{2}{3}}\quad\Leftrightarrow x=\frac{3}{2}$

## Fonction racine carrée

### Définition : fonction racine carrée

La fonction **racine carrée** est définie sur $\left[0;+\infty\right[$ par $f(x)=\sqrt{x}$

**Rem :**

- La fonction **racine carrée** est définie pour des valeurs de $x$ **positives** $\Rightarrow\mathscr{D_f}=\R^{+}$
- Pour tout $x\in\mathscr{D_f}$, on a $f(x)\geq 0$.$\quad$La fonction **racine carrée** est **positive** sur $\mathscr{D_f}$

- **Tableau de valeurs**

$$
\def\arraystretch {1.4}
\begin{array}{|c|c|c|c|c|c|c|c|}\hline
x & 0 & 1 & 2 & 3 & 4 & 5 & ...\\ \hline
f(x) & \sqrt{0}=0 & \sqrt{1}=1 & \sqrt{2}\approx1.414... & \sqrt{3}\approx1.732... & \sqrt{4}=2 & \sqrt{5}\approx 2.23...&...\\ \hline
\end{array}
$$

- **Représentation**

![](img/13.png =300x center)

![](img/13.png =300x center)

- **Signe**

![](img/14.png =300x center)

- **Sens de variations**

![](img/15.png =300x center)

**Méthode : Comparer des images**

Soit $f(x)=\sqrt{x}$.$\quad$ Comparons $f(0.5)$ et $f(3)$

On a :

- $f$ **croissante** sur $\R^{+}$
- $0.5\in\R^{+} $ et $ 3\in\R^{+}$
- $0.5<3$

Donc $\boxed{f(0.5)<f(3)}$

En effet,
$$\sqrt{0.5}\approx 0.707...\qquad<\qquad\sqrt{3}\approx 1.732...$$

**Méthode : résoudre des équations du type $\sqrt{x}=k$**

Résoudre $\sqrt{x}=5$ revient à trouver tous les nombres dont la racine carrée est $5$.
On a :
$$\sqrt{x}=5\quad\Leftrightarrow\left(\sqrt{x}\right)^2=5^2\quad\Leftrightarrow \boxed{x=25}$$

De manière générale, $\sqrt{x}=k $ (avec $k>0$ et $x>0$) possède 1 solution :
$$\sqrt{x}=k\quad\Leftrightarrow\quad \boxed{x=k^2}$$

**Ex. :** $\sqrt{x+1}=2\quad\Leftrightarrow (x+1)=2^2=4\quad\Leftrightarrow x=3$

## Fonction cube

### Définition : fonction cube

La fonction **cube** est définie sur $\R$ par $f(x)=x^3$

![](img/16.png =300x center)

- **Tableau de valeurs**

$$
\def\arraystretch {1.4}
\begin{array}{|c|c|c|c|c|c|c|}\hline
x & -2 & -1 & 0 & 1.5 & 2 & 3 \\ \hline
f(x) & (-2)^3=-8 & (-1)^3=-1 & 0^3=0 & (1.5)^3=3.375 & 2^3=8 & 3^3=27\\ \hline
\end{array}
$$

- **Représentation**

La représentation graphique de la fonction cube est **symétrique** par rapport à **l'origine du repère**.

![](img/16.png =300x center)

- **Signe**

![](img/17.png =300x center)

- **Sens de variations**

![](img/18.png =300x center)

**Méthode : Comparer des images**

Soit $f(x)=x^3$.$\quad$ Comparons $f(0.5)$ et $f(2)$

On a :

- $f$ croissante sur $\R$
- $0.5<2$

Donc $\boxed{f(0.5)<f(2)}$

En effet,

$$0.5^3=0.125\qquad<\qquad2^3=8$$

## Position relatives des courbes : $y=x $ ; $ y=x^2 $ et $ y=x^3$

### Propriété

- Si $\quad x\geq 1\quad$, on a $\quad \color{blue}x^3\color{black}\geq\color{green}x^2\color{black}\geq\color{red}x$
- Si $\quad x\leq 1\quad$, on a $\quad \color{blue}x^3\color{black}\leq\color{green}x^2\color{black}\leq\color{red}x$

![](img/19.png =300x center)

**Démonstration :**

- **Cas n°1 :** $\quad \boxed{x\geq 1}$

Étudions le signe de $(x^2-x)$ et de $(x^3-x^2)$.

- $(x^2-x)=x(x-1) $ donc $\begin{cases}x>0\\x-1\geq 0\end{cases}\Rightarrow(x^2-x)\geq 0$

Donc $(x^2-x)\geq 0\Leftrightarrow x^2\geq x$

- $(x^3-x^2)=x^2(x-1) $ donc $\begin{cases}x^2>0\\x-1\geq0\end{cases}\Rightarrow(x^3-x^2)\geq 0$

Donc $(x^3-x^2)\geq 0\Leftrightarrow x^3\geq x^2\quad$donc si $\quad\boxed{x\geq1 \Rightarrow x^3\geq x^2\geq x}$

- **Cas n°2 :** $\quad \boxed{0\leq x\leq 1}$
  Étudions le signe de $(x^2-x)$ et $(x^3-x^2)$.

- $(x^2-x)=x(x-1) $ donc $\begin{cases}x>0\\x-1\leq 0\end{cases}\Rightarrow(x^2-x)\leq 0$

Donc $(x^2-x)\leq 0\Leftrightarrow x^2\leq x$

- $(x^3-x^2)=x^2(x-1) $ donc $\begin{cases}x^2\geq 0\\x-1\leq0\end{cases}\Rightarrow(x^3-x^2)\leq 0$

Donc $(x^3-x^2)\leq 0\Leftrightarrow x^3\leq x^2  $donc si $ \boxed{0\leq x\leq1 \Rightarrow x^3\leq x^2\leq x}$

## Fonction paire/impaire

### Définition : parité d'une fonction

- Une fonction $f$ est **paire** lorsque pour tout réel $x\in\mathscr{D_f}$, on a :
  - $(-x)\in\mathscr{D_f}$
  - $f(-x)=f(x)$

- Une fonction $f$ est **impaire** lorsque pour tout réel $x\in\mathscr{D_f}$, on a :
  - $(-x)\in\mathscr{D_f}$
  - $f(-x)=-f(x)$

  **Ex. :**

La fonction $f(x)=x^2$ définie sur $\R$ est **paire** car, pour tout $x\in\R$, on a :

$$\begin{aligned}f(-x)=(-x)^2&=(-1\times x)^2\\&=(-1)^2\times x^2\\&=x^2=f(x)\end{aligned}$$

![](img/20.png =300x center)

**Ex. :**

La fonction $f(x)=\dfrac{1}{x}$ définie sur $\R^{*}$ est **impaire** car, pour tout $x\in\R^{*}$, on a :

$$\begin{aligned}f(-x)=\frac{1}{-x}&=-\frac{1}{x}\\&=-\left(\frac{1}{x}\right)=-f(x)\end{aligned}$$

![](img/21.png =300x center)

**Rem :**

- Une fonction peut être ni paire, ni impaire. Ex: $f(x)=\sqrt{x}$
- La représentation graphique d'une fonction **paire** est **symétrique** par rapport à **l'axe des ordonnées**.
- La représentation graphique d'une fonction **impaire** est **symétrique** par rapport à **l'origine du repère**.

| ![h:180 center](img/20.png =300x center) | ![w:180 center](img/21.png) |
| :--------------------------------------: | :-------------------------: |
|            Fonction **paire**            |    Fonction **impaire**     |

![bg right:38% fit](img/22.png =300x center)

**Méthode : Étudier la parité d'une fonction**

Soit $f(x)=2x^2-1$ définie sur $\R$.

Pour tout $x\in\R$, on a :

$$\begin{aligned}f(-x)&=2(-x)^2-1\\ &=2\times (-1\times x)^2-1\\ &=2\times (-1)^2\times x^2-1\\ &=2x^2-1=f(x)\end{aligned}$$

Donc $f$ est **paire**.

Sa représentation graphique est **symétrique** par rapport à **l'axe des ordonnées**.
