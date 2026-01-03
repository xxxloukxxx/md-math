# Fonction inverse

<!-- toc -->

## Définition et allure de la courbe

### Définition

```admonish def
La **fonction inverse** $f$ est définie sur $\R - \brace{0}$ par : $\ \boxed{f(x) =\cfrac{1}{x}}$

### Représentation graphique

- Tableau de valeurs

$$
\begin{array}{|r|c|c|c|c|c|c|}\hline
x                          & -2   & -1 & 0.25 & 1 & 2   & 3            \\\\ \hline
\rule[-4mm]{0mm}{10mm}f(x) & -0.5 & -1 & 4    & 1 & 0.5 & \cfrac{1}{3} \\\\ \hline
\end{array}
$$

- Représentation graphique

![](img/inv/courbe1.png =550x center)
```

```admonish rem
La courbe d'équation $y =\cfrac{1}{x}$ de la fonction inverse, appelée **hyperbole** de centre $O$, est symétrique par rapport à l'origine.
```

## Dérivée et sens de variation

### Dérivée

```admonish prop
La dérivée de la fonction inverse $f$ est définie sur $\R - \brace{0}$ par : $\ \boxed{f'(x) = \cfrac{-1}{x^{2}}}$
```

```admonish demo
$$
\begin{array}{rcl}
\cfrac{f(a+h)-f(a)}{h} & = & \cfrac{1}{h}\times\pa{f(a+h)-f(a)}                                                                                  \\\\
                       & = & \cfrac{1}{h}\times\pa{\cfrac{1}{a+h}-\cfrac{1}{a}}                                                                  \\\\
                       & = & \cfrac{1}{h}\times\pa{\cfrac{a-a-h}{a(a+h)}}\qquad = \cfrac{1}{h}\times\pa{\cfrac{-h}{a(a+h)}}\qquad =\cfrac{-1}{a(a+h)}
\end{array}
$$

Donc : $\ \limite_{h\to 0}\pa{\cfrac{f(a+h)-f(a)}{h}}=\limite_{h\to 0}\pa{\cfrac{-1}{a(a+h)}}=-\cfrac{1}{a^{2}}$

Pour tout nombre $a$ non nul, on associe le nombre dérivé de la fonction $f$ égal à $\cfrac{-1}{a^{2}}$

Ainsi, pour tout $x$ de $\R - \brace{0}$, on a : $\ f'(x)=-\cfrac{1}{x^{2}}$.
```

```admonish ex
- $f(x)=\cfrac{5}{x}=5\times\cfrac{1}{x} \qquad \rarr \qquad f'(x)=5\times\left(-\cfrac{1}{x^{2}}\right)=\cfrac{-5}{x^{2}}$

- $g(x)=\cfrac{-3}{x}=-3\times\cfrac{1}{x}\qquad \rarr \qquad g'(x)=-3\times\left(-\cfrac{1}{x^{2}}\right)=\cfrac{3}{x^{2}}$

- $h(x)=\cfrac{4}{3x}=\cfrac{4}{3}\times\cfrac{1}{x}\qquad \rarr \qquad h'(x)=\cfrac{4}{3}\times\left(-\cfrac{1}{x^{2}}\right)=\cfrac{-4}{{3x}^{2}}$
```

### Variations

```admonish prop
La fonction inverse est _décroissante_ sur $\left\rbrack - \infty;0 \right\lbrack$ et sur $\left\rbrack 0; + \infty \right\lbrack$.

![](img/inv/tabvarinv.png =500x center)
```

```admonish demo
Pour tout $x$ de $\R\setminus\brace{0}$, $f'(x)=\cfrac{-1}{x^2} \lt 0$.

Donc $f$ est décroissante sur $\left\rbrack - \infty;0 \right\lbrack$ et sur $\left\rbrack 0; + \infty \right\lbrack$.
```

```admonish meth title="Méthode : Étudier les variations d'une fonction inverse"
Soit la fonction $f$ définie sur $\left\rbrack 0\ ;\ +\infty\right\lbrack$ par $f(x)=\cfrac{-2}{x}$

1. Calculer la fonction dérivée de $f$.
2. En déduire les variations de $f$.

---

1. $f(x)=\cfrac{-2}{x}=-2\times\cfrac{1}{x}\qquad\to\qquad f'(x)=-2\times\left(\cfrac{-1}{x^{2}}\right)=\cfrac{2}{x^{2}}$

2. $f'(x)=\cfrac{2}{x^{2}}>0$, car $x^{2} > 0\qquad\rarr\qquad f$ est donc croissante sur $\left\rbrack 0; + \infty \right\lbrack$.
```

### Comportement de la fonction inverse aux bornes de son ensemble de définition

```admonish prop title="Comportement en $+∞$"
On s'intéresse aux valeurs de $f(x)$ lorsque $x$ devient de plus en plus grand.

$$
\begin{array}{|r|c|c|c|c|c|}\hline
x    & 5   & 10  & 100  & {10\ 000} & \ldots \\\\ \hline
f(x) & 0.2 & 0.1 & 0.01 & {0.000\ 1} & \ldots \\\\ \hline
\end{array}
$$

On constate que $f(x)$ se rapproche de $0$ lorsque $x$ devient de plus en plus grand.

On dit que la limite de $f$ lorsque $x$ tend vers $+ \infty$ est égale à $0$.

On note : $\ \limite_{x \to  + \infty}{f(x)} = 0$

Graphiquement, pour des valeurs de plus en plus grandes, $\Cf$ se rapproche de plus en plus de l'axe des abscisses.

![](img/inv/image4.png =450x center)
```

```admonish prop title="Comportement en $-∞$"
On s'intéresse aux valeurs de $f(x)$ lorsque $x$ devient de plus en plus "grand dans les négatifs"

$$
\begin{array}{|r|c|c|c|c|c|}\hline
x    & \ldots & {-10\ 000}  & -100  & -10  & -5   \\\\ \hline
f(x) & \ldots & {-0.000\ 1} & -0.01 & -0.1 & -0.2 \\\\ \hline
\end{array}
$$

On constate que $f(x)$ se rapproche de $0$ lorsque $x$ devient de plus en plus "grand dans les négatifs".

On dit que la limite de $f$ lorsque $x$ tend vers $-\infty$ est égale à $0$.

On note : $\ \limite_{x \to  - \infty}{f(x)} = 0$

Graphiquement, pour des valeurs de plus en plus "grandes dans les négatifs", la courbe de $f$ se rapproche de plus en plus de l'axe des abscisses.

On dit que l'axe des abscisses est une **asymptote horizontale** à $\Cf$ en $-\infty$ et en $+ \infty$.

![](img/inv/image5.png =450x center)
```

```admonish prop title="Au voisinage de $0$"
L'image de $0$ par la fonction $f$ n'existe pas.

On s'intéresse cependant aux valeurs de $f(x)$ lorsque $x$ se rapproche de $0$.

$$
\begin{array}{|r|c|c|c|c|c|c|c|c|c|}\hline
x    & -0.5 & -0.1 & -0.01 & {-0.00\ 1} & \ldots & {0.00\ 1} & 0.01 & 0.1 & 0.5 \\\\ \hline
f(x) & -2   & -10  & -100  & {-1\ 000}  & \ldots & {1\ 000}  & 100  & 10  & 2   \\\\ \hline
\end{array}
$$

À l'aide de la calculatrice, on constate que :

- _Pour $x > 0$ :_

   $f(x)$ devient de plus en plus grand lorsque $x$ se rapproche de $0$.

   On dit que la limite de $f$ lorsque $x$ tend vers $0$, pour $x > 0$, est égale à $+ \infty$

   On note : $\ \limite_{\scriptsize\begin{matrix} x\to 0\\\\ x>0 \end{matrix}}{f(x)}=+\infty$

   Graphiquement, pour des valeurs positives, de plus en plus en proches de $0$, la courbe de $f$ se rapproche de plus en plus de l'axe des ordonnées.

   ![](img/inv/image6.png =450x center)

- _Pour $x \lt 0$ :_

  $f(x)$ devient de plus en plus "grand dans les négatifs" lorsque $x$ se rapproche de $0$.

  On dit que la limite de $f$ lorsque $x$ tend vers $0$ pour $x \lt 0$ est égale à $-\infty$.

  On note : $\ \limite_{\scriptsize\begin{matrix}x\to 0\\\\x\lt 0\end{matrix}}{f(x)}=-\infty$

  Graphiquement, pour des valeurs négatives, de plus en plus en proches de $0$, la courbe de $f$ se rapproche de plus en plus de l'axe des ordonnées.

  ![](img/inv/image7.png =450x center)

On dit que l'axe des ordonnées est une **asymptote verticale** à $\Cf$.
```

### Somme d'une fonction polynôme et d'une fonction inverse

```admonish meth title="Méthode : Étudier une fonction obtenue comme somme de la fonction inverse et d'une fonction polynôme"
Soit la fonction $f$ définie sur $\left\rbrack 0;5 \right\lbrack$ par $f(x) = 1 - 2x +\cfrac{2}{x}$

1. Calculer la fonction dérivée de $f$.
2. Dresser le tableau de variations de $f$.
3. Représenter la fonction $f$ dans un repère.

---

1. On a : $f(x) = 1 - 2x + 2 \times \cfrac{1}{x}$

   Donc : $f'(x) = - 2 +2 \times \left( - \cfrac{1}{x^{2}} \right) = - 2 -\cfrac{2}{x^{2}}$

2. $\pa{\cfrac{-2}{x^{2}}} \lt 0\ $ car $\ x^{2} > 0\ $ donc $\ f'(x) = - 2 -\cfrac{2}{x^{2}} \lt 0$

   On dresse alors le tableau de variations :

   ![](img/inv/tabvar.png =300x center)

   En effet :

   - En testant, pour des valeurs positives de plus en plus en proches de $0$, $f(x)$ devient de plus en plus grand.
   - $f(5) = 1 - 2 \times  5 + 2 \times \cfrac{1}{5} = - 8.6$

3. L'axe des ordonnées est une asymptote verticale à la courbe de la fonction $f$.

   ![](img/inv/courbe2.png =500x center)
```
