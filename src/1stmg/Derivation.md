# Dérivation

<!-- toc -->

## Rappel : Fonctions

### Fonction du 1$^{\text{er}}$ degré : $f(x)=ax+b$

```admonish def
Une fonction de la forme $\boxed{f(x)=ax+b}$ est appelée fonction du 1\up{er} degré.

On a :

- $a$ : Coefficient directeur (ou pente)
- $b$ : Ordonnée à l'origine
```

```admonish ex
Soit $f$ défini sur $\R$ tel que : $f(x)=\cfrac{-1}{2}x+1$

**Calcul d'image :**

$$f(4)=\cfrac{-1}{2}\times 4+1\quad =-1$$

**Représentation :**

![](img/deriv/02.png =650x center)

**Résoudre $f(x)=0$ :**

$$
\begin{array}{crcl}
	\      & \ f(x)             & = & \ 0                       \\\\
	\iff\  & \ \cfrac{-1}{2}x+1 & = & \ 0                       \\\\
	\iff\  & \ \cfrac{-1}{2}x   & = & \ -1                      \\\\
	\iff\  & \ x                & = & -1\ \div\ \cfrac{-1}{2}=2 \\\\
\end{array}
$$

**Représentation en fonction de $a$ :**


![](img/deriv/03.png =750x center)

**Signe de $f(x)$ :**

$$
\begin{array}{lcl}
	\begin{array}{|c|ccccc|}\hline
		a>0  &  &   &                   &   & \\\\ \hline
		x    &  &   & \tfrac{-b}{a}     &   & \\\\ \hline
		f(x) &  & - & \ \quad 0 \quad\  & + & \\\\ \hline
	\end{array}
	 & \qquad &
	\begin{array}{|c|ccccc|}\hline
		a\lt 0 &  &   &                   &   & \\\\ \hline
		x      &  &   & \tfrac{-b}{a}     &   & \\\\ \hline
		f(x)   &  & + & \ \quad 0 \quad\  & - & \\\\ \hline
	\end{array}
\end{array}
$$
```

### Fonction du 2$^{\text{nd}}$ degré : $f(x)=ax^{2}+bx+c$

```admonish def
Une fonction de la forme $\ \boxed{f(x)=ax^2+bx+c}\ $ (avec $a\neq 0$) est appelée fonction du 2$^\text{nd}$ degré.
```

```admonish ex
$f(x)=x^{2}-2x-3\qquad\Rarr\qquad a=1\quad;\quad b=-2\quad\text{et}\quad c=-3$

**Représentation :**

![](img/deriv/04.png =450x center)

**Racines de $f$ :** $\quad$ Valeurs de $x$ pour lesquelles $f(x)=0$

$f(-1)=0\ $ et $\ f(3)=0\ \Rarr\ \begin{cases}x_1=-1\\\\x_2=3\end{cases}\qquad$ sont les **racines** de $f$.

**Forme factorisée :** $\quad f(x)=a(x-x_1)(x-x_2)$

$$f(x)=1\times\left(x-(-1)\right)\times\left(x-3\right)\ \iff\  f(x)=(x+1)(x-3)$$

**Résoudre $f(x)=0$ :**

- Calcul du discriminant : $\Delta=b^{2}-4ac$

- Si $\Delta \lt  0$ : Pas de solution

- Si $\Delta = 0$ : une solution (racine double)
  - $\rule{0cm}{6mm}x_0=\cfrac{-b}{2a}$

- Si $\Delta > 0$ : deux solutions
  - $\rule{0cm}{8mm}x_1=\cfrac{-b+\sqrt{\Delta}}{2a}$
  - $x_2=\cfrac{-b-\sqrt{\Delta}}{2a}$
```

```admonish ex
$f(x)=x^{2}-2x-3\quad\Rarr a=1\quad b=-2\quad c=-3$

- $\Delta=b^{2}-4ac=(-2)^{2}-4\times 1 \times (-3)=16>0\quad$ donc 2 solutions :

  - $x_1=\cfrac{-b+\sqrt{\Delta}}{2a}=\cfrac{-(-2)+\sqrt{16}}{2\times 1}=3$
  - $x_2=\cfrac{-b-\sqrt{\Delta}}{2a}=\cfrac{-(-2)-\sqrt{16}}{2\times 1}=-1$

**Représentation en fonction de $a$ et $\Delta$ :**

![](img/deriv/05.png =750x center)

**Signe de $f(x)$ :**

- Si $\Delta>0$

![](img/deriv/06.png =750x center)

- Si $\Delta=0\ $ ou $\ \lt 0$

![](img/deriv/07.png =750x center)
```

### Fonction du 3$^{\text{ème}}$ degré : $f(x)=ax^{3}+bx^{2}+cx+d$

```admonish def
Une fonction de la forme $\boxed{f(x)=ax^3+bx^2+cx+d}$ (avec $a\neq 0$) est une fonction du 3$^\text{ème}$ degré.
```

```admonish ex
$f(x)=0.5x^3-1.5x^2-0.5x+1.5\quad\Rarr\quad a=0.5\ ,\ b=-1.5\ ,\ c=-0.5\ ,\ d=1.5$

**Représentation :**

![](img/deriv/08.1.png =350x center)

**Résoudre $f(x)=0$ :**

À l'aide de la représentation, les racines de $f$ sont : $f(x)=0\iff\begin{cases}x_1=-1\\\\x_2=1\\\\x_3=3\end{cases}$

**Signe de $f$ :**

$$
\begin{array}{|c|ccccccc|}\hline
	x    & \  & -1 & \  & 1 & \  & 3 & \ \\\\ \hline
	f(x) & -  & 0  & +  & 0 & -  & 0 & + \\\\ \hline
\end{array}
$$

![](img/deriv/09.png =450x center)

**Variations de $f$ :**

![](img/deriv/10.png =450x center)
```

## Nombre dérivé

### Nombre dérivé en $x=a$

```admonish def
Soit $f$ une fonction dont la courbe admet une **tangente** au point $x=a$.

Le **nombre dérivé** de $f$ en $x=a$ est le **coefficient directeur** de cette tangente.

Il se note $f^\prime(a)$

$$\boxed{f^\prime(a)=\text{coef.dir. de la tangente en }x=a}$$
```

```admonish ex
![](img/deriv/11.png =450x center)

Soit $f(x)=x^2$ définie sur $\R$.

La tangente au point $x=1$ a pour **coefficient directeur** :

$$\cfrac{\Delta y}{\Delta x}=2$$

On dit que $2$ est **le nombre dérivé** de $f$ en $x=1$, et on note :

$$f^\prime(1)=2$$
```

### Méthode : Déterminer graphiquement $f(a)$ et $f'(a)$

```admonish ex
:bulb: Déterminer graphiquement $f(2)$ et $f'(2)$

---

**Pour déterminer $f(2)$**, on lit sur la courbe l'image de $2$ par $f$.

![](img/deriv/12.png =600x center)

$$f(2)=2$$

---

**Pour déterminer $f'(2)$**, on détermine le coefficient directeur de la tangente à la $\Cf$ en $x=2$.

![](img/deriv/12b.png =600x center)

$$f'(2)=\cfrac{\Delta y}{\Delta x}=\cfrac{-3}{2}=-1.5$$
```

## Fonction dérivée

```admonish rem
Dans l'exemple précédent, on pourrait déterminer le nombre dérivé de $f$ pour toutes les valeurs de $x\in\R$

On parle de **fonction dérivée** de $f(x)$ et on la note $\quad\boxed{f'(x)}$.
```

### Fonctions dérivées usuelles

```admonish prop
Ce tableau indique les **fonctions dérivées** de fonctions les plus souvent rencontrées :

|  $f(x)$ | Constante | $x$ | $x^2$ | $x^3$  |
| ------: | :-------: | :-: | :---: | :----: |
| $f'(x)$ |    $0$    | $1$ | $2x$  | $3x^2$ |
```

### Opérations sur les fonctions dérivables

```admonish prop
Soient $u$ et $v$ deux fonctions dérivables sur $I$. On a :

$$\boxed{(u+v)'=u'+v'}$$

La dérivée d'une **somme** c'est la **somme des dérivées**
```

```admonish ex
Soit $f(x)=x^3+x^2$ définie sur $\R$. On a :

$$f'(x)=3x^2+2x$$
```

```admonish prop
Soit $u$ une fonction dérivable sur $I$ et $k\in\R$. On a :

$$\boxed{(k\times u)'=k\times u'}$$

Si une fonction est multipliée par une **constante**, celle-ci est conservée lors de la dérivation.
```

```admonish ex
Soit $f(x)=4\times x^3$ définie sur $\R$. On a :

$$f'(x)=4\times 3x^2 = 12 x^2$$
```

### Exemples

```admonish ex
$$
\begin{array}{cllllll}
	f(x) =  & 3\color{red}{x^2}      & + & \color{green!30!black!70}{x} & + & \color{blue}{1} & \          \\\\
	f'(x) = & 3\times\color{red}{2x} & + & \color{green!30!black!70}{1} & + & \color{blue}{0} & \quad=6x+1
\end{array}
$$
```

```admonish ex
$$
\begin{array}{cllllll}
	f(x) =  & \cfrac{1}{3}\color{red}{x^3}        & - & 5\color{green!30!black!70}{x^2}      & + & \color{blue}{137} & \             \\\\
	f'(x) = & \cfrac{1}{3}\times\color{red}{3x^2} & - & 5\times\color{green!30!black!70}{2x} & + & \color{blue}{0}   & \quad=x^2-10x
\end{array}
$$
```

```admonish ex
$$
\begin{array}{cllllll}
	f(x) = & \cfrac{1}{2} \color{red}{x^4}        & + & 8\color{green!30!black!70}{x}        & - & \color{blue}{1} & \             \\\\
	f'(x)= & \cfrac{1}{2}\times \color{red}{4x^3} & + & 8\times \color{green!30!black!70}{1} & - & \color{blue}{0} & \quad =2x^3+8
\end{array}
$$
```

```admonish ex
$$
\begin{array}{cllllll}
	g(x)  & = & -0.2\color{green!30!black!70}{x^3}         & + & 600\color{blue}{x^2}      & - & 150\color{red}{x}        & - & \color{purple}{9000} \\\\
	g'(x) & = & -0.2\times \color{green!30!black!70}{3x^2} & + & 600\times\color{blue}{2x} & - & 150\times \color{red}{1} & - & \color{purple}{0}    \\\\ & =&-0.6x^2&+&1200x&-&150
\end{array}
$$
```

```admonish ex
Le bénéfice d'une soiciété est modélisée par la fonction $B(x)$ :

$$
\begin{array}{cclllllll}
	B(x)  & = & -2x^3 & + & 15x^2 & + & 84x & - & 50 \\\\
	B'(x) & = & -6x^2 & + & 30x   & + & 84  & - & 0  \\\\
	      & = & -6x^2 & + & 30x   & + & 84  &   &
\end{array}
$$
```

### Étude de la variation d'une fonction

```admonish prop
Soit $f$ une fonction définie et dérivable sur $I$.

- Si $\boxed{f'(x)\gt 0}$ alors $f$ est **croissante**.
- Si $\boxed{f'(x)\lt 0}$ alors $f$ est **décroissante**.

![](img/deriv/13.png =750x center)
```

```admonish meth

Pour étudier la variation d'une fonction $f$ sur $I$, il faut :

1. Calculer $f'(x)$
2. Étudier le signe de $f'(x)$
3. Conclure sur le sens de variation de la fonction $f$

Les résultats sont présentés dans un tableau de signes/variations

![](img/deriv/14.png =600x center)
```

```admonish ex
Étude de $f(x)=\color{blue}{x^3}\color{black}-12\color{red}{x}\ $ sur $\lbrack-10;10\rbrack$ :

1. $f'(x)=\color{blue}{3x^2}\color{black}-12\times\color{red}{1}\color{black}\quad=3x^2-12$

2. $f'$ est une fonction du 2$^{\text{nd}}$ degre avec :

- $\color{blue}{a=3}\ $, $\ \color{red}{b=0}\ $ et $\ \color{green!30!black!70}{c=-12}$
- Pour étudier le signe de $f'$, il faut résoudre $f'(x)=0$
  - $\Delta=b^2-4ac=0^2-4\times 3\times12 =144>0$ donc deux racines :

$$x_1=\cfrac{-b-\sqrt{\Delta}}{}=\cfrac{-0-\sqrt{144}}{2\times 3}=-2\quad\text{et}\quad x_2=\cfrac{-b+\sqrt{\Delta}}{2a}=\cfrac{-0+\sqrt{144}}{2\times 3}=+2$$

- Le signe de $a$ à l'extérieur des racines donc ...

![](img/deriv/15.png =550x center)

3. On conclut sur la variation de $f(x)=x^3-12x$

![](img/deriv/16.png =550x center)

- Calcul d'images :
  - $f(-10)=(-10)^3-12\times(-10)=-880$
  - $f(-2)=(-2)^3-12\times(-2)=16$
  - $f(2)=(2)^3-12\times(2)=-16$
  - $f(10)=(10)^3-12\times(10)=880$
```

```admonish ex
Soit $B$ une fonction définie sur $[-10\ ;\ 10]$ tel que : $$B(x)=-15x^3+120x^2+180x-750$$

1. **Calcul de $B'(x)$ :**

$$B'(x)=-15\times 3x^2+120\times 2x+180\times 1 - 0 = -45x^2+240x+180$$

2. **Signe de $B'(x)$**

   $B'(x)$ est une fonction du 2$^\text{nd}$ degré avec $a=-45$, $b=240$ et $c=180$

   - $\Delta=b^2-4ac=240^2-4\times(-45)\times(180) = 90\ 000>0$

      - $x_1=\cfrac{-b-\sqrt{\Delta}}{}=\cfrac{-240-\sqrt{90\ 000}}{2\times (-45)}=6$
	  - $x_2=\cfrac{-b-\sqrt{\Delta}}{}=\cfrac{-240+\sqrt{90\ 000}}{2\times (-45)}=\cfrac{-2}{3}$

- Le signe de $a$ à l'extérieur des racines donc ...

![](img/deriv/17.png =650x center)

3. **Conclusion sur la variations de $B(x)$**

![](img/deriv/18.png =650x center)

- Maximum du bénéfice : $\quad B(6)=-15\times6^3+120\times6^2+180\times 6-750=1410$
```

```admonish rem
Le maxi./mini. d'une fonction est **généralement** atteint lorsque $f'(x)=0$
```

```admonish ex
Dans cet exemple, $f'(x)=0$ pour $x=-1$ , $0$ ou $2$.

Le maximum de $f$ est $4$ lorsque $x=2$.

![](img/deriv/19.png =550x center)
```

### Équation de la tangente à $\mathcal{C}_f$ en $x=a$

```admonish prop
Soit $f$ une fonction définie et dérivable sur $I$.

La tangente à la courbe représentative de $f$, au point d'abscisse $x=a$ est :

$$\boxed{y=f'(a)(x-a)+f(a)}$$
```

```admonish ex
Soit $f(x)=0.6x^2$ définie sur $\R$

Déterminons l'équation de la tangente à la courbe $\Cf$ au point d'abscisse $x=1$.

Calcul de $f'(x)$ :

$$f'(x)\ =\ 0.6\times 2x\ =\ 1.2x$$

On a :

- $f(1)=0.6\times 1^2=0.6$
- $f'(1)=1.2\times 1=1.2$

L'équation réduite de la tangente en $x=1$ est :

$$
	\begin{array}{cccccccc}
		\     & y & = & f'(a)       & \times & (x-a)          & + & f(a) \\\\
		\iff & y & = & f'(1)       & \times & (x-1)          & + & f(1) \\\\
		\iff & y & = & 1.2         & \times & (x-1)          & + & 0.6  \\\\
		\iff & y & = & 1.2\times x & +      & 1.2\times (-1) & + & 0.6  \\\\
		\iff & y & = & 1.2x-0.6                                         \\\\
	\end{array}
$$

![](img/deriv/20tt.png =450x center)
```
