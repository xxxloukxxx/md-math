# Fonctions affines

<!-- toc -->

## Définitions et propriétés

### Fonction affine (ou 1<sup>er</sup> degré)

```admonish def
Soit $f$, une fonction définie sur $\R$ tel que :

$$f(x)=\tc{red}{m}x+\tc{blue}{p}\qquad\text{avec}\qquad\tc{red}{m}\in\R \text{ et } \tc{blue}{p}\in\R$$

$f$ est appelée **fonction affine** ou **fonction du 1<sup>er</sup> degré**.
```

```admonish ex
| Fonctions                                                                      |       $\tc{red}{m}$       |      $\tc{blue}{p}$       |
| ------------------------------------------------------------------------------ | :-----------------------: | :-----------------------: |
| $f(x)=\tc{red}{3}x+\tc{blue}{1}$                                               |       $\tc{red}{3}$       |      $\tc{blue}{1}$       |
| $f(x)=5-2x\qquad=\tc{red}{-2}x+\tc{blue}{5}$                                   |      $\tc{red}{-2}$       |      $\tc{blue}{5}$       |
| $f(x)=\cfrac{−2x+4}{5}\qquad=\tc{red}{\cfrac{-2}{5}}x+\tc{blue}{\cfrac{4}{5}}$ | $\tc{red}{\cfrac{-2}{5}}$ | $\tc{blue}{\cfrac{4}{5}}$ |
| $f(x)=\tc{red}{\sqrt{3}}x\tc{blue}{-10}$                                       |   $\tc{red}{\sqrt{3}}$    |     $\tc{blue}{-10}$      |

**Contre-exemples :**

- $f(x)=\sqrt{3x}\quad$ n'est pas une fonction affine.
- $f(x)=x^2+1\quad$ n'est pas une fonction affine.
- $f(x)=\cfrac{3x+1}{x}=3+\cfrac{1}{x}\quad$ n'est pas une fonction affine.
```

```admonish ex title="Calcul d'images"
Soit $f$ définie sur $\R$ tel que :

$$f(x)=\cfrac{1}{2}x+1\quad\rarr\begin{cases}m=\cfrac{1}{2}\\\\p=1\end{cases}$$

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|c|}                                                   \\hline
	\rule[-3mm]{0mm}{10mm}x    & -4 & -2  & -1  & 0 & 1   & 2 & 3   & 4   & 6 \\\\ \\hline
	\rule[-3mm]{0mm}{10mm}f(x) & -1 & ... & ... & 1 & 1.5 & 2 & ... & ... & 4 \\\\ \\hline
\end{array}
$$

- $f(\cbox{pink}{-4})=\cfrac{1}{2}\times (\cbox{pink}{-4})+1\quad=-2+1\quad=-1$
- $f(\cbox{pink}{0})=\cfrac{1}{2}\times (\cbox{pink}{0})+1\quad=0+1\quad=1$
- $f(\cbox{pink}{6})=\cfrac{1}{2}\times (\cbox{pink}{6})+1\quad=3+1\quad=4$
```

### Représentation graphique

```admonish prop
La représentation graphique d'une fonction affine est **une droite**
```

```admonish ex
Soit $f(x)=\cfrac{1}{2}x+1$ définie sur $\R$

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|c|}                   \\hline
	\rule[-3mm]{0mm}{10mm}x    & -4 & ... & 6 \\\\ \\hline
	\rule[-3mm]{0mm}{10mm}f(x) & -1 & ... & 4 \\\\ \\hline
\end{array}
$$

![](img/affine/01.png =600x center)
```

### Vocabulaire

```admonish ex
$$f(x)=\tc{red}{m}x+\tc{blue}{p}$$

- $\tc{red}{m}$ est appelé **coefficient directeur** ou **pente**
- $\tc{blue}{p}$ est appelé **ordonnée à l'origine**
```

```admonish ex
Soit $f(x)=\tc{blue}{3}\tc{red}{-2}x$ définie sur $\R$

- **Coefficient directeur** : $\tc{red}{-2}$
- **Ordonnée à l'origine** : $\tc{blue}{3}$
```

```admonish rem
L'ordonnée à l'origine, c'est la valeur de $f(0)$.

C'est l'ordonnée du point d'intersection de la droite représentative de $f$ avec l'axe des ordonnées.
```

```admonish ex
$f(x)=\cfrac{1}{2}x+1\quad\Rightarrow p=1$

![](img/affine/02.png =400x center)
```

### Coefficient directeur (ou pente) et ordonnée à l'origine

```admonish prop
Soient $f$ définie sur $\R$ par $f(x)=mx+p$ et $a$ et $b$ deux réels distincts. On a :

$$m=\cfrac{f(b)-f(a)}{b-a}\quad\text{et}\quad p=f(a)-ma$$
```

```admonish ex
$f$ est uine fonction affine telle que $f(0)=-5$ et $f(1)=-2$

On a :

- $m=\cfrac{f(b)-f(a)}{b-a}=\cfrac{f(1)-f(0)}{1-0}=\cfrac{-2-(-5)}{1}=3$
- $p=f(b)-mb=f(1)-3\times 1=-2-3\times 1=-5\quad=f(0)$

Donc $\quad f(x)=3x-5$

![](img/affine/02.png =400x center)
```

```admonish meth title="Méthode : Lire graphiquement $m$ et $p$"
Pour lire la valeur de $p$, on lit l'ordonnée du point d'intersection de la droite avec l'axe des ordonnées.

Ici $\quad p=1$

![](img/affine/03.png =400x center)

Pour lire la valeur de $m$, on trace un escalier et :

$$m=\cfrac{\text{Montée}}{\text{Avance}}=\cfrac{\Delta y}{\Delta x}=\cfrac{f(b)-f(a)}{b-a}$$

Dans ce cas :

$$m=\cfrac{\text{Montée}}{\text{Avance}}=\cfrac{\Delta y}{\Delta x}=\cfrac{2}{4}=\cfrac{1}{2}$$

On peut le faire pour d'autres escaliers ...

|       Des petits ou des grands       |                                                             Calcul de $m$                                                             |
| :----------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
| ![](img/affine/04a.png =400x center) |       $$\begin{array}{rcl}m&=&\cfrac{\text{Montée}}{\text{Avance}}\\\\&=&\cfrac{\Delta y}{\Delta x} =\cfrac{1}{2}\end{array}$$        |
| ![](img/affine/04b.png =400x center) | $$\begin{array}{rcl}m&=&\cfrac{\text{Montée}}{\text{Avance}}\\\\&=&\cfrac{\Delta y}{\Delta x}=\cfrac{5}{10}=\cfrac{1}{2}\end{array}$$ |

Au final : $$f(x)=\cfrac{1}{2}x+1$$
```

```admonish meth title="Méthode : Déterminer une fonction affine"
Soit $A(-1;3)$ et $B(5;1)$, deux points du plan.

La droite $(AB)$ est la représentation de la fonction $f$ tel que $f(x)=mx+p$

On a :

- $A\in(AB)\Rightarrow f(x_A)=y_A \Rightarrow f(-1)=3$
- $B\in(AB)\Rightarrow f(x_B)=y_B \Rightarrow f(5)=1$

Donc :

$$
\begin{array}{rlcl}
	\tc{red}{m} & =\cfrac{f(x_A)-f(x_B)}{x_A-x_B} & = & \cfrac{y_A-y_B}{x_A-x_B}=\cfrac{\Delta y}{\Delta x} \\\\
	            & =\cfrac{3-1}{-1-5}              & = & \tc{red}{\cfrac{-1}{3}}
\end{array}
$$

et

$$
\begin{array}{rlcl}
	\tc{blue}{p} & =f(x_A)-m\times x_A         & = & y_A-\cfrac{-1}{3}\times x_A \\\\
	             & =3-\cfrac{-1}{3}\times (-1) & = & \tc{blue}{\cfrac{8}{3}}
\end{array}
$$

Au final : $$f(x)=\tc{red}{\cfrac{-1}{3}}x+\tc{blue}{\cfrac{8}{3}}$$

![](img/affine/05.png =400x center)
```

## Étude d'une fonction affine

### Sens de variations

```admonish prop
Soit $\quad f(x)=\tc{red}{m}x+\tc{blue}{p}\quad$ définie sur $\R$.

- Si $ m>0 $ alors $ f$ est **croissante** ![h:110 center](img/affine/06.png =400x center)
- Si $ m<0 $ alors $ f$ est **décroissante** ![h:110 center](img/affine/07.png =400x center)
```

```admonish ex
Soit $\quad f(x)=\cfrac{-1}{3}x+\cfrac{5}{3}\quad$ définie sur $\R$.

On a $ \tc{red}{m}=\cfrac{-1}{3}<0$ donc $f$ est **décroissante**.

![](img/affine/07.png =400x center)

![](img/affine/05.png =400x center)
```

### Signe de $f(x)=\tc{red}{m}x+\tc{blue}{p}$

```admonish prop
Pour établir le signe de $f$, il faut résoudre $f(x)>0$.

$$
\begin{array}{rcl}
	f(x)>0 & \iff & mx+p>0  \\\\
	       & \iff & mx>(-p) \\\\
	       & \iff & \begin{cases}x>\cfrac{-p}{m} & \text{si}\quad m>0 \\\\ x\lt \cfrac{-p}{m} & \text{si}\quad m\lt 0 \end{cases}
\end{array}
$$

Donc :

|               $m\gt 0$                |               $m\lt 0$                |
| :-----------------------------------: | :-----------------------------------: |
| ![](img/affine/08sa.png =400x center) | ![](img/affine/08sb.png =400x center) |
| ![](img/affine/08a.png =200x center)  | ![](img/affine/08b.png =200x center)  |
```

```admonish ex
On veut établir le signe de $\ f(x)=3x+1$

Il faut résoudre $f(x)>0$

$$
\begin{aligned}
	f(x)>0 & \iff  3x+1>0          \\\\
	       & \iff  3x>-1           \\\\
	       & \iff  x>\cfrac{-1}{3} \\\\
\end{aligned}
$$

Donc :

$$
\begin{array}{|c|ccccc|}\hline
	x    & -\infty & \quad & \cfrac{-1}{3} & \quad & +\infty \\\\ \hline
	f(x) &         & -     & 0             & +     &         \\\\ \hline
\end{array}
$$
```

```admonish ex
Signe de $ f(x)=2-\cfrac{1}{3}x$

Il faut résoudre $f(x)>0$

$$
\begin{aligned}
		f(x)>0 & \iff  2-\cfrac{1}{3}x>0        \\\\
		       & \iff  \cfrac{-1}{3}x>-2        \\\\
		       & \iff  x<(-2)\div \cfrac{-1}{3} \\\\
		       & \iff  x<6
	\end{aligned}
$$

Donc :

$$
\begin{array}{|c|ccccc|}\hline
	x    & -\infty & \quad & 6 & \quad & +\infty \\\\ \hline
	f(x) &         & +     & 0 & -     &         \\\\ \hline
\end{array}
$$
```

```admonish prop
**Cas général :**

$$
\begin{array}{|c|ccccc|}\hline
	x    & -\infty & \quad                & \cfrac{-p}{m} & \quad               & +\infty \\\\ \hline
	f(x) &         & \text{signe de }(-m) & 0             & \text{signe de }(m) &         \\\\ \hline
\end{array}
$$
```

## Équations / Inéquations

### Équations / Inéquations du 1<sup>er</sup> degré

```admonish ex
$$
\begin{array}{rclcl}
	3x+2=2(7-x) & \iff & 3x+2\quad\tc{red}{\scriptstyle +2x}                                          & = & 14-2x\quad\tc{red}{\scriptstyle +2x} \\\\
	            & \iff & 3x+2+2x\quad\tc{red}{\scriptstyle -2}                                        & = & 14\quad\tc{red}{\scriptstyle -2}     \\\\
	            & \iff & 5x\quad\tc{red}{\scriptstyle\div 5}                                          & = & 12\quad\tc{red}{\scriptstyle\div 5}  \\\\
	            & \iff & x                                                                            & = & \cfrac{12}{5}                        \\\\
	            & \iff & S=\left\\{\cfrac{12}{5}\right\\}
\end{array}
$$
```

```admonish ex
$$
\begin{array}{rclcl}
	x-2>5+3x & \iff & x-2\quad\tc{red}{\scriptstyle -3x}      & > & 5+3x\quad\tc{red}{\scriptstyle -3x}   \\\\
	         & \iff & -2x-2\quad\tc{red}{\scriptstyle +2}     & > & 5\quad\tc{red}{\scriptstyle +2}       \\\\
	         & \iff & -2x\quad\tc{red}{\scriptstyle\div (-2)} & > & 7\quad\tc{red}{\scriptstyle\div (-2)} \\\\
	         & \iff & x                                       & < & \cfrac{-7}{2}                         \\\\
	         & \iff & S=\left]-\infty;\cfrac{-7}{2}\right[
\end{array}
$$
```

### Équations / Inéquations produit

```admonish prop
Si $\quad \tc{red}{a}\times \tc{blue}{b}=0\quad$ alors $\quad\begin{cases}\tc{red}{a}=0\\\\ \text{ ou}\\\\ \tc{blue}{b}=0\end{cases}$
```

```admonish ex
$$
\begin{aligned}
		\tc{red}{(3x-1)}\tc{blue}{(2x+5)}=0 & \iff \begin{cases}\tc{red}{3x-1}=0\\\\ \tc{blue}{2x+5}=0\end{cases}                                    \\\\
		                                    & \iff \begin{cases}3x=1\\\\2x=-5\end{cases}                                                               \\\\
		                                    & \iff \begin{cases}x=\cfrac{1}{3}\\\\x=\cfrac{-5}{2}\end{cases}                                           \\\\
		                                    & \iff \boxed{S=\left\\{\cfrac{1}{3};\cfrac{-5}{2}\right\\}}
	\end{aligned}
$$
```

```admonish meth title="Méthode : Résoudre une inéquation produit"
On cherche à résoudre $\tc{red}{(3x-1)}\tc{blue}{(2x+5)}<0$

Il faut établir le tableau de signe de $\tc{red}{(3x-1)}$ et de $\tc{blue}{(2x+5)}$ puis appliquer la règle des signes.

$$
\begin{array}{cc|cc}
	\begin{array}{rcl}
		\tc{red}{3x-1}>0 & \iff & 3x>1           \\\\
		                 & \iff & x>\cfrac{1}{3}
	\end{array}
	 &  &  &
	\begin{array}{rcl}
		\tc{blue}{2x+5}>0 & \iff & 2x>-5           \\\\
		                  & \iff & x>\cfrac{-5}{2}
	\end{array}
\end{array}
$$

On a $\quad\tc{red}{(3x-1)}>0 \iff  x>\cfrac{1}{3}\qquad\text{et}\qquad \tc{blue}{(2x+5)}>0 \iff  x>\cfrac{-5}{2}$

Donc :

$$
\begin{array}{|c|ccccccc|}\hline
	\rule[-5mm]{0mm}{15mm}x                                       & -\infty & \quad & \cfrac{-5}{2} & \quad & \cfrac{1}{3} & \quad & +\infty \\\\ \hline
	\rule[-5mm]{0mm}{15mm}\tc{red}{(3x-1)}                        & -       & -     & -             & -     & 0            & +     & +       \\\\ \hline
	\rule[-5mm]{0mm}{15mm}\tc{blue}{(2x+5)}                       & -       & -     & 0             & +     & +            & +     & +       \\\\ \hline
	\rule[-5mm]{0mm}{15mm}\tc{red}{(3x-1)}\times\tc{blue}{(2x+5)} & +       & +     & 0             & -     & 0            & +     & +       \\\\ \hline
\end{array}
$$

Au final : $\quad\tc{red}{(3x-1)}\tc{blue}{(2x+5)}<0\iff \boxed{S=\left]\cfrac{-5}{2};\cfrac{1}{3}\right[}$
```
