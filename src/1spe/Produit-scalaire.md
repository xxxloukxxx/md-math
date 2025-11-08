# Produit scalaire

<!-- toc -->

## Rappels sur les vecteurs

### Caractéristiques

```admonish prop
Un vecteur a pour caractéristiques :

- Une longueur (ou norme)
- Une direction (une droite parallèle à ce vecteur)
- Un sens (de $A$ vers $B$ ou l'inverse)

![](img/pscal/01-cours.png =400x center)
```

#### Norme d'un vecteur

```admonish def
On note la norme (longueur) d'un vecteur avec des $\norm{\ldots}$
```

```admonish ex
$$\norm{\vec{AB}}=\norm{\vec{u}}=AB=\sqrt{17}$$

![](img/pscal/01-cours.png =400x center)
```

#### Vecteurs égaux

```admonish prop
Deux vecteurs sont égaux s'ils ont :

- même longueur (même norme)
- même direction et même sens
```

```admonish ex
![](img/pscal/02.png#right =300x)

On a :

- $\vec{u}=\vec{v}$
- $\quad\vec{t}=\vec{AB}$

Mais $\quad\vec{t}\neq\vec{BA}\quad$ (sens contraires)
```

#### Multiplication par un nombre

```admonish prop
Le produit du vecteur $\vec{u}\neq\vec{0}$ par le réel $k\neq0$ est un vecteur noté $~k\vec{u}~$ tel que :

- si $k > 0$, alors
  - $\vec{u}$ et $k\vec{u}$ ont la même direction, le même sens.
  - $\norm{ k\vec{u}}=k\times\norm{\vec{u}}$

- si $k < 0$, alors
  - $\vec{u}$ et $k\vec{u}$ ont la même direction mais sens **contraire**.
  - $\norm{ k\vec{u}}=-k\times\norm{\vec{u}}$
```

```admonish ex
![](img/pscal/03-cours.png#right =400x)

On a :

- $\vec{b}=2\times \vec{a}$
- $\vec{c}=-3\times \vec{a}$
```

### Somme de vecteurs

```admonish def
L'enchaînement d'une **translation de vecteur $\vec{u}$** et d'une **translation de vecteur $\vec{v}$** est une **translation de vecteur $\vec{u}+\vec{v}$**.

Ce vecteur $\vec{u}+\vec{v}$ est appelé **somme** des vecteurs $\vec{u}$ et $\vec{v}$.

![](img/pscal/04tt.png =400x center)
```

```admonish ex
![](img/pscal/05.png#right =400x)

$\vec{BB^\prime}$ est un représentant de $\vec{CD}$ donc :

$$\vec{BB^\prime}=\vec{CD}$$

On a donc :

$$\color{blue}\vec{AB}\color{black}+\color{red}\vec{CD}\color{black}=\color{green}\vec{AB^\prime}\color{black}$$
```

#### Relation de Chasles

```admonish def
![](img/pscal/06tt.png#right =300x center)

Soient les points $A$, $B$ et $C$ du plan, on a :

$$\color{blue}\vec{AB}\color{black}+\color{red}\vec{BC}\color{black}=\color{green}\vec{AC}\color{black}$$
```

### Vecteurs dans un repère orthonormé

```admonish def
Dans le plan muni du repère $\left(O,I,J\right)$, les coordonnées du vecteur $\vec{AB}$ sont :

$$\vec{AB}\left(x_B-x_A\ ;\  y_B-y_A\right)$$

![](img/pscal/07-cours.png =600x center)

On peut noter :

$$\vec{AB}\begin{pmatrix}x_B-x_A\\\\y_B-y_A\end{pmatrix}$$
```

```admonish ex
Soit $\color{blue}A(3,2)$ et $\color{red}B(-1,1)$, on a :

$$
\vec{AB}\begin{pmatrix}\tc{red}{(-1)}-\tc{blue}{3}\\\\\tc{red}{1}-\tc{blue}{2}\end{pmatrix}\ \rarr\ \vec{AB}\begin{pmatrix}-4\\\\-1\end{pmatrix}$$

![](img/pscal/09-cours.png =400x center)
```

#### Égalité, somme de vecteurs et produit par un réel

```admonish prop
Soit $\vec{u}\begin{pmatrix}x_{\vec{u}}\\\\y_{\vec{u}}\end{pmatrix}$ , $\vec{v}\begin{pmatrix}x_{\vec{v}}\\\\y_{\vec{v}}\end{pmatrix}$ et un réel $k\neq0$.

- $\vec{u}=\vec{v}\iff\begin{cases}x_{\vec{u}}=x_{\vec{v}}\\\\y_{\vec{u}}=y_{\vec{v}}\end{cases}\quad\rightarrow~$ Deux vecteurs de même coordonnées sont égaux
- $\vec{u}+\vec{v}\begin{pmatrix}x_{\vec{u}}+x_{\vec{v}}\\\\y_{\vec{u}}+y_{\vec{v}}\end{pmatrix}\quad\rightarrow~$On peut additionner les coordonnées des vecteurs
- $k\vec{u}\begin{pmatrix}k\times x_{\vec{u}}\\\\k\times y_{\vec{u}}\end{pmatrix}\quad\rightarrow~$On peut multiplier les coordonnées des vecteurs par $k$
```

```admonish ex
![](img/pscal/08.png#right =400x)

Soit $\vec{u}\begin{pmatrix}3\\\\-2\end{pmatrix}$ , $\vec{v}\begin{pmatrix}-1\\\\2\end{pmatrix}$ et $k=2$.

On a :

- $\vec{u}+\vec{v}\begin{pmatrix}3+(-1)\\\\(-2)+2\end{pmatrix}$
  - $\vec{u}+\vec{v}\begin{pmatrix}2\\\\0\end{pmatrix}$

- $2\vec{v}\begin{pmatrix}2\times (-1)\\\\2\times 2\end{pmatrix}$
  - $2\vec{v}\begin{pmatrix}-2\\\\4\end{pmatrix}$
```

## Produit scalaire

```admonish def
Le **produit scalaire** de deux vecteurs est un **nombre réel**.

Il se note

$$\boxed{\vec{u}\cdot\vec{v}}$$
```

### Produit scalaire dans un repère orthonormé

```admonish prop
Soit $\vec{u}\begin{pmatrix}x_{\vec{u}}\\\\y_{\vec{u}}\end{pmatrix}$ et $\vec{v}\begin{pmatrix}x_{\vec{v}}\\\\y_{\vec{v}}\end{pmatrix}$.

On a :

$$\boxed{\vec{u}\cdot\vec{v} = \left(x_{\vec{u}}\times x_{\vec{v}}\right) + \left(y_{\vec{u}}\times y_{\vec{v}}\right)}$$
```

```admonish ex
![](img/pscal/10-cours.png#right =250x)

Soit $\vec{u}\begin{pmatrix}2\\\\4\end{pmatrix}$ et $\vec{v}\begin{pmatrix}3\\\\-2\end{pmatrix}$.

On a :

$$
\begin{aligned}
	\vec{u}\cdot\vec{v} & = \left(x_{\vec{u}}\times x_{\vec{v}}\right) + \left(y_{\vec{u}}\times y_{\vec{v}}\right) \\\\
	                    & =  \left(2\times 3\right) + \left(4\times -2\right)                                       \\\\
	                    & =  6 + (-8) = -2
\end{aligned}
$$

```

### Produit scalaire (2)

#### Norme d'un vecteur dans un repère

```admonish prop
![](img/pscal/14-cours.png#right =300x)

Soit $\vec{u}\coord{x_{\vec{u}}}{y_{\vec{u}}}$.

On a :

$$\norm{\vec{u}}=\sqrt{\left(x_{\vec{u}}\right)^2+\left(y_{\vec{u}}\right)^2}$$
```

```admonish ex
![](img/pscal/10.png =400x center)

Soit $\vec{u}\begin{pmatrix}2\\4\end{pmatrix}$ et $\vec{v}\begin{pmatrix}3\\-2\end{pmatrix}$.

On a :

$$
\begin{aligned}
\color{blue}\norm{\vec{u}} &\color{blue}=\sqrt{\left(x_{\vec{u}}\right)^2+\left(y_{\vec{u}}\right)^2}\\
& =\sqrt{2^2+4^2} = \sqrt{20}\\
\color{green}\norm{\vec{v}} &\color{green}=\sqrt{\left(x_{\vec{v}}\right)^2+\left(y_{\vec{v}}\right)^2}\\
& =\sqrt{3^2+(-2)^2} = \sqrt{13}\\
\end{aligned}
$$

![](img/pscal/11.png =400x center)
```

#### Définition à l'aide des normes et de l'angle

```admonish prop
Soit $\vec{u}$ et $\vec{v}$, deux vecteurs du plan et $\alpha$ l'angle $\left(\vec{u} ; \vec{v}\right)$.

On a :

$$\boxed{\vec{u}\cdot\vec{v} = \norm{\vec{u}}\times \norm{\vec{v}}\times \cos\alpha}$$
```

```admonish ex
![](img/pscal/12-cours.png#right =350x)

$$
\begin{aligned}
	\vec{u}\cdot\vec{v} & = \norm{\vec{u}}\times \norm{\vec{v}}\times \cos\alpha \\\\
	                    & = \sqrt{20} \times \sqrt{13}\times \cos(97,125\ldots)                                  \\\\
	                    & = \sqrt{260}\times \cos(97,125\ldots)                                                  \\\\
	                    & = -2
\end{aligned}
$$

```

### Théorème fondamental

```admonish th
![](img/pscal/13-cours.png#right =300x)

Soit $\vec{u}$ et $\vec{v}$, deux vecteurs du plan.

On a :

$$\boxed{\vec{u}\cdot\vec{v}=0\ \iff\ \vec{u}\perp\vec{v}}$$
```

```admonish demo
- Soit $\vec{u}$ et $\vec{v}$ tel que $\vec{u}\perp\vec{v}$.

$$
\begin{aligned}
	\vec{u}\cdot\vec{v} & = \norm{\vec{u}}\times \norm{\vec{v}}\times \cos(90^\circ) \\\\
	                    & = \norm{\vec{u}}\times \norm{\vec{v}}\times 0              \\\\
	                    & = 0
\end{aligned}
$$

---

- Soit $\vec{u}$ et $\vec{v}$ tel que $\vec{u}\cdot\vec{v} = 0$.

$$
\begin{aligned}
	       & \vec{u}\cdot\vec{v} = \norm{\vec{u}}\times \norm{\vec{v}}\times \cos(\alpha)= 0    \\\\
	\iff\  & \cos(\alpha)=0                                                                     \\\\
	\iff\  & \begin{cases}\alpha=90^\circ\\\\\alpha=-90^\circ\end{cases}\iff\vec{u}\perp\vec{v}
\end{aligned}
$$
```

### Propriétés du produit scalaire

```admonish prop
- Commutativité : $~\vec{a}\cdot\vec{b}=\vec{b}\cdot\vec{a}$
- Associativité :
  - $\vec{a}\cdot\vec{b}\cdot\vec{c}=\vec{a}\cdot\left(\vec{b}\cdot\vec{c}\right)=\left(\vec{a}\cdot\vec{b}\right)\cdot\vec{c}$
  - $k\vec{a}\cdot\vec{b}=k\left(\vec{a}\cdot\vec{b}\right)=\vec{a}\cdot k\vec{b}$
- Distributivité :
  - $k\left(\vec{a}+\vec{b}\right)=k\vec{a}+k\vec{b}$
  - $\vec{a}\left(\vec{b}+\vec{c}\right)=\vec{a}\cdot\vec{b}+\vec{a}\cdot\vec{c}$

- Vecteur "au carré" : $\pa{\vec{a}}^2=\vec{a}\cdot\vec{a}=\norm{\vec{a}}^2$

- Identités remarquables :
  - $\pa{\vec{a}+\vec{b}}^2=\vec{a}^2+2\cdot\vec{a}\cdot\vec{b}+\vec{b}^2$
  - $\pa{\vec{a}-\vec{b}}^2=\vec{a}^2-2\cdot\vec{a}\cdot\vec{b}+\vec{b}^2$
  - $\pa{\vec{a}-\vec{b}}\pa{\vec{a}+\vec{b}}=\vec{a}^2-\vec{b}^2$
```


### Produit scalaire (3)

#### Dédinition à l'aide des normes

```admonish def
![](img/pscal/15-cours.png#right =200x)

Soit $\vec{u}$ et $\vec{v}$, deux vecteurs du plan.

On a :

- $\boxed{\vec{u}\cdot\vec{v}=\cfrac{1}{2}\left(\norm{\vec{u}+\vec{v}}^2-\norm{\vec{u}}^2-\norm{\vec{v}}^2\right)}$
- $\boxed{\vec{u}\cdot\vec{v}=\cfrac{1}{2}\left(\norm{\vec{u}}^2+\norm{\vec{v}}^2-\norm{\vec{u}-\vec{v}}^2\right)}$
```

```admonish demo
$$
\begin{array}{rrcl}
	     & \left(\vec{u}+\vec{v}\right)^2 & = & \pa{\vec{u}}^2+2\vec{u}\cdot\vec{v}+\pa{\vec{v}}^2                                   \\\\
	\iff & 2\vec{u}\cdot\vec{v}           & = & \left(\vec{u}+\vec{v}\right)^2-\pa{\vec{u}}^2-\pa{\vec{v}}^2                         \\\\
	\iff & \vec{u}\cdot\vec{v}            & = & \cfrac{1}{2}\left(\left(\vec{u}+\vec{v}\right)^2-\pa{\vec{u}}^2-\pa{\vec{v}}^2\right) \\\\
	\iff & \vec{u}\cdot\vec{v}            & = & \cfrac{1}{2}\left(\norm{\vec{u}+\vec{v}}^2-\norm{\vec{u}}^2-\norm{\vec{v}}^2\right)
\end{array}
$$

La seconde proposition se démontre de la même manière avec $\left(\vec{u}-\vec{v}\right)^2$
```

### Résumé

```admonish prop title="Résumé"
- $\boxed{\vec{u}\cdot\vec{v} = \left(x_{\vec{u}}\times x_{\vec{v}}\right) + \left(y_{\vec{u}}\times y_{\vec{v}}\right)}$
- $\boxed{\vec{u}\cdot\vec{v} = \norm{\vec{u}}\times \norm{\vec{v}}\times \cos\alpha}$
- $\boxed{\vec{u}\cdot\vec{v}=\cfrac{1}{2}\left(\norm{\vec{u}+\vec{v}}^2-\norm{\vec{u}}^2-\norm{\vec{v}}^2\right)}$
- $\boxed{\vec{u}\cdot\vec{v}=\cfrac{1}{2}\left(\norm{\vec{u}}^2+\norm{\vec{v}}^2-\norm{\vec{u}-\vec{v}}^2\right)}$
```


### Produit scalaire et projeté orthogonal

```admonish prop
![](img/pscal/16.png#right =300x)

Soient $A$, $B$, $C$ trois points du plan et $H$ le projeté orthogonal de $C$ sur $(AB)$.

On a :

$$\boxed{\vec{AB}\cdot\vec{AC}=\vec{AB}\cdot\vec{AH}}$$

Donc :

- Si $H\in\left[AB\right)\Rarr\vec{AB}\cdot\vec{AC}=AB\times AH$
- Si $H\notin\left[AB\right)\Rarr\vec{AB}\cdot\vec{AC}=-AB\times AH$
```

```admonish demo
![](img/pscal/17-cours.png#right =250x)

Cas où $H\in\left[AB\right)$

On a :

- $\vec{AB}\cdot\vec{AC}= AB\times AC\times \cos\alpha$
- $\cos\alpha=\cfrac{AH}{AC}=\cfrac{\text{Adjacent}}{\text{Hypothénuse}}$

Donc

$$\begin{aligned}
\vec{AB}\cdot\vec{AC} & = AB\times AC\times\cfrac{AH}{AC} \\\\
& = AB\times AH
\end{aligned}$$

---

![](img/pscal/18-cours.png#right =300x)

Cas où $H\notin\left[AB\right)$

On a $\quad\alpha=180^\circ-\beta\quad$ donc :

$$
\begin{aligned}
	\cos\alpha & =\cos(180^\circ-\beta)        \\\\
	           & =-\cos(\beta)=\cfrac{-AH}{AC}
\end{aligned}
$$

Donc

$$\begin{aligned}
\vec{AB}\cdot\vec{AC} & = AB\times AC\times\cfrac{-AH}{AC} \\\\
& = -AB\times AH
\end{aligned}$$
```
