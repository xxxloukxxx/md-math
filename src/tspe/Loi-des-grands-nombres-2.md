# Loi des grands nombres (2/2)

<!-- toc -->

## Moyenne d'un échantillon

```admonish ex
On lance un dé à six faces et on considère la variable aléatoire $X$ qui prend la valeur $1$ si le dé s'arrête sur un chiffre pair et la valeur $0$ sinon.

$X$ suit donc une loi de _Bernoulli_ de paramètre $\cfrac{1}{2}$.

On répète deux fois de suite cette expérience. On considère alors l'échantillon $\left( X_{1}, X_{2} \right)$ de taille $2$ de variables aléatoires $X_{1}$ et $X_{2}$ suivant la même loi que $X$.

Il est ainsi possible d'évaluer le résultat d'une telle expérience en étudiant la variable aléatoire moyenne de $X_{1}$ et $X_{2}$

On appelle $M_{2}$ la variable aléatoire moyenne de l'échantillon $\left( X_{1}, X_{2} \right)$.

Alors $M_{2}$ peut prendre les valeurs suivantes :

$$
\begin{array}{|c|c||c|c||c||c|c|}\hline
	X_{1}                   & P\pa{X_{1}}  & X_{2} & P\pa{X_{2}}  & P\left(X_{1},X_{2}\right)                   & M_{2}                       & P\pa{M_{2}}  \\\\\hline
	\rule[-5mm]{0mm}{12mm}0 & \cfrac{1}{2} & 0     & \cfrac{1}{2} & \cfrac{1}{2}\times\cfrac{1}{2}=\cfrac{1}{4} & \cfrac{0+0}{2}=0            & \cfrac{1}{4} \\\\\hline
	\rule[-5mm]{0mm}{12mm}0 & \cfrac{1}{2} & 1     & \cfrac{1}{2} & \cfrac{1}{2}\times\cfrac{1}{2}=\cfrac{1}{4} & \cfrac{0+1}{2}=\cfrac{1}{2} & \cfrac{1}{4} \\\\\hline
	\rule[-5mm]{0mm}{12mm}1 & \cfrac{1}{2} & 0     & \cfrac{1}{2} & \cfrac{1}{2}\times\cfrac{1}{2}=\cfrac{1}{4} & \cfrac{1+0}{2}=\cfrac{1}{2} & \cfrac{1}{4} \\\\\hline
	\rule[-5mm]{0mm}{12mm}1 & \cfrac{1}{2} & 1     & \cfrac{1}{2} & \cfrac{1}{2}\times\cfrac{1}{2}=\cfrac{1}{4} & \cfrac{1+1}{2}=1            & \cfrac{1}{4} \\\\\hline
\end{array}
$$

Et on a ainsi la loi de probabilité de $M_{2}$ :

$$
\begin{array}{|r|c|c|c|} \hline
	\rule[-5mm]{0mm}{12mm}k                                  & 0            & \cfrac{1}{2} & 1            \\\\ \hline
	\rule[-5mm]{0mm}{12mm}P(M_{2} = k)\rule[-5mm]{0mm}{12mm} & \cfrac{1}{4} & \cfrac{1}{2} & \cfrac{1}{4} \\\\ \hline
\end{array}
$$
```

```admonish def
Soit $\left( X_{1}, X_{2}, \ldots,X_{n} \right)$ un échantillon de taille $n$ de variables aléatoires indépendantes suivant une même loi. **La variable aléatoire moyenne** $M_{n}$ de l'échantillon est donnée par :

$$\boxed{M_{n}=\cfrac{1}{n}\left(X_{1}+X_{2}+\ldots+X_{n}\right)}$$
```

```admonish ex
On reprend l'exemple précédent.

$$
\begin{array}{|r|c|c|c|}\hline
	\rule[-5mm]{0mm}{12mm}k                                & 0            & \cfrac{1}{2} & 1            \\\\\hline
	\rule[-5mm]{0mm}{12mm}P(M_{2}=k)\rule[-5mm]{0mm}{12mm} & \cfrac{1}{4} & \cfrac{1}{2} & \cfrac{1}{4} \\\\\hline
\end{array}
$$

- Calculons l'espérance de $M_{2}$ :

$${E\left(M_{2}\right)=0\times\cfrac{1}{4}+\cfrac{1}{2}\times\cfrac{1}{2}+1\times\cfrac{1}{4}=\cfrac{1}{2}}$$

On retrouve l'espérance de la variable $X$.

On comprend intuitivement que l'espérance de la variable aléatoire moyenne d'un échantillon $\left(X_{1},X_{2},\ldots,X_{n}\right)$ est égale à l'espérance de la variable aléatoire $X$ associée à cet échantillon.

- Calculons la variance de $M_{2}$ :

$$V\left(M_{2}\right)=\cfrac{1}{4}\times\left(0-\cfrac{1}{2}\right)^{2}+\cfrac{1}{2}\times\left(\cfrac{1}{2}-\cfrac{1}{2}\right)^{2}+\cfrac{1}{4}\times\left(1-\cfrac{1}{2}\right)^{2}=\cfrac{1}{8}$$

Alors que :

$$V(X)=\cfrac{1}{2}\times\cfrac{1}{2}=\cfrac{1}{4}$$

Ainsi la variance de la variable aléatoire moyenne est plus faible que la variance de la variable d'origine.

De plus, la dispersion de la variable aléatoire moyenne diminue au fur et à mesure que la taille de l'échantillon $n$ augmente.

En effet, si l'échantillon devient plus grand, le nombre de situations pouvant donner des valeurs proches de l'espérance augmente.

Ainsi, les valeurs prises par la moyenne deviennent de plus en plus probables dans un voisinage de l'espérance.
```

```admonish prop
Soit une variable aléatoire $X$ et soit un échantillon $\left( X_{1}, X_{2}, \ldots,X_{n} \right)$ de taille $n$ de variables aléatoires indépendantes suivant la même loi que $X$.

$$\boxed{E\left(M_{n}\right)=E(X)}\qquad\boxed{V\left(M_{n}\right)=\cfrac{1}{n}V(X)}\qquad\boxed{\sigma\left(M_{n}\right)=\cfrac{1}{\sqrt{n}}\sigma(X)}$$
```

```admonish meth title="Méthode : Calculer l'espérance, la variance et l'écart-type d'une variable aléatoire moyenne"
On considère la v.a. $X$ qui prend, de façon équiprobable, les valeurs $\brace{-4 ; 0 ; 1 ; 3 ; 6}$.

$M_{50}$ est la variable aléatoire moyenne d'un échantillon de taille $50$ de la loi de $X$.

:bulb: Calculer l'espérance, la variance et l'écart type de $M_{50}$.

---

Par équiprobabilité, on établit le tableau de la loi de probabilité de $X$.

$$
\begin{array}{|r|c|c|c|c|c|}\hline
	\rule[-5mm]{0mm}{12mm}k      & -4           & 0            & 1            & 3            & 6            \\\\\hline
	\rule[-5mm]{0mm}{12mm}P(X=k) & \cfrac{1}{5} & \cfrac{1}{5} & \cfrac{1}{5} & \cfrac{1}{5} & \cfrac{1}{5} \\\\\hline
\end{array}
$$

On a ainsi :

- $E(X)=\cfrac{1}{5}\times (-4)+\cfrac{1}{5}\times 0+\ldots+\cfrac{1}{5}\times 6=1,2$
- $V(X)=\cfrac{1}{5}\times(-4-1,2)^{2}+\cfrac{1}{5}\times(0-1,2)^{2}+\ldots+\cfrac{1}{5}\times(6-1,2)^{2}=10,96$
- $\sigma(X)=\sqrt{10,96}\approx3,31$

On en déduit :

- $E\left(M_{50}\right)=E(X)=1,2$
- $V\left(M_{50}\right)=\cfrac{1}{50}V(X)=\cfrac{10,96}{50}=0,2192$
- $\sigma\left(M_{50}\right)=\cfrac{1}{\sqrt{50}}\sigma(X)\approx\cfrac{3,31}{\sqrt{50}}\approx0,468$
```

## Inégalité de Bienaymé-Tchebychev

```admonish prop
Soit une variable aléatoire $X$. Pour tout réel strictement positif $\delta$, on a :

$$\boxed{P\Big(\big|X-E(X)\big|\ge\delta\Big)\le\cfrac{V(X)}{\delta^{2}}}$$
```

```admonish meth title="Méthode : Appliquer l'inégalité de Bienaymé-Tchebychev"
Soit une variable aléatoire $X$ qui suit la loi binomiale de paramètres $n = 20$ et $p = 0,1$.

1. Appliquer l'inégalité de Bienaymé-Tchebychev avec $\delta = 2\times\sigma(X).$ Interpréter.
2. Recommencer avec $\delta = 3\times\sigma(X)$, puis $\delta = 4\times\sigma(X)$. Que constate-t-on ?
3. a. Simuler $N$ valeurs de la variable aléatoire $X$ par une fonction en Python dans le but d'estimer la probabilité $P\Big(\big|X - 2\big|  \ge 2\times\sigma(X)\Big)$.

   b. Au regard des résultats obtenus par le programme, peut-on penser que l'inégalité de Bienaymé-Tchebychev a un caractère optimal ?

---

1. $E(X) = 20 \times 0,1 = 2\qquad V(X)=20\times 0,1\times 0,9=1,8\qquad \sigma(X)=\sqrt{1,8}$

$$P\Big(\big|X-E(X)\big|\ge 2\times\sigma(X)\Big)\le\cfrac{V(X)}{\big(2\times\sigma(X)\big)^{2}}\quad\iff\quad P\Big(\big|X-2\big|\ge2\sqrt{1,8}\Big)\le 0,25$$

La probabilité que l'écart de $X$ à $E(X)$ soit supérieur à $2\times\sigma(X)$ est majorée par $0,25$.

2. $\delta = 3\times\sigma(X)$ et $\delta = 4\times\sigma(X)$

- $\delta = 3\times\sigma(X)$ :

$$P\Big(\big|X-E(X)\big|\ge3\times\sigma(X)\Big)\le\cfrac{V(X)}{\big(3\times\sigma(X)\big)^{2}}\quad\iff\quad P\Big(\big|X-2\big|\ge3\sqrt{1,8}\Big)\le\cfrac{1}{9}$$

- $\delta = 4\times\sigma(X)$ :

$$P\Big(\big|X-E(X)\big|\ge4\times\sigma(X)\Big)\le\cfrac{V(X)}{\big(4\times\sigma(X)\big)^{2}}\quad\iff\quad P\Big(\big|X-2\big|\ge4\sqrt{1,8}\Big)\le\cfrac{1}{16}$$

On peut en déduire que les écarts de $X$ à $E(X)$ de quelques $\sigma$ deviennent improbables.

3. a.

|                 Programme                  |                 Simulation                 |
| :----------------------------------------: | :----------------------------------------: |
| ![](img/grandnb/GNimage4.png =450x center) | ![](img/grandnb/GNimage3.png =200x center) |

b. On constate qu'un écart à $E(X)$ supérieur à $2\times\sigma(X)$ est de probabilité souvent inférieure $0,05$ $(0,038 ; 0,0454 ; 0,04178 ; 0,04516)$ alors que l'inégalité de Bienaymé-Tchebychev nous donne pour cette même probabilité une majoration par $0,25$.

L'inégalité est donc loin d'être optimale.
```

## Inégalité de concentration

```admonish prop
Soit la variable aléatoire moyenne $M_{n}$ d'un échantillon de taille $n$ de la variable aléatoire $X$. Pour tout réel strictement positif $\delta$, on a :

$$\boxed{P\Big(\big| M_{n} - E(X) \big| \ge \delta\Big) \le \cfrac{V(X)}{n \delta^{2}}}$$
```

```admonish meth title="Méthode : Appliquer l'inégalité de concentration pour déterminer la taille d'un échantillon"
Soit une variable aléatoire $X$ qui suit la loi de Bernoulli de paramètre $0,2$.

On considère un échantillon de $n$ variables aléatoires suivant la loi de $X$.

On appelle $M_{n}$ la variable aléatoire moyenne associée à cet échantillon.

:bulb: Déterminer la taille $n$ de l'échantillon tel que la probabilité que la moyenne $M_{n}$ appartienne à l'intervalle $\left\rbrack 0,03 ;0,37 \right\lbrack$ soit supérieure à $0,95$.

---

On cherche à calculer $n$ tel que $P\big( 0,03 \le M_{n} \le 0,37 \big) \ge 0,95$

Dans l'idée d'appliquer l'inégalité de concentration, on fait apparaitre l'espérance de $X$ dans l'inégalité.\qquad Or, $E(X) = p = 0,2$

Ainsi, on cherche $n$ tel que :

$$
\begin{array}{rrcl}
	\    & P\Big(0,03-0,2\le M_{n}-0,2\le 0,37-0,2\Big)  & \ge & 0,95 \\\\
	\iff & P\Big(-0,17\le M_{n}-0,2\le 0,17\Big)         & \ge & 0,95 \\\\
	\iff & P\Big( \big| M_{n} - 0,2 \big| \le 0,17 \Big) & \ge & 0,95
\end{array}
$$

Et donc, en considérant l'évènement contraire :

$$
\begin{array}{rrcl}
	\    & 1-P\Big(\big|M_{n}-0,2\big| \ge 0,17\Big) & \ge & 0,95 \\\\
	\iff & P\Big(\big|M_{n}-0,2\big| \ge 0,17\Big)   & \le & 0,05
\end{array}
$$

En prenant $\delta = 0,17$ dans l'inégalité de concentration, on a :

$$P\Big(\big|M_{n}-E(X)\big|\ge\delta\Big)\le 0,05\qquad\text{avec}\qquad\cfrac{V(X)}{n\delta^{2}}=0,05$$

Or, $V(X)=p(1-p)=0,2\times0,8=0,16$

On cherche donc un entier $n$ tel que :

$$
\begin{array}{rrcl}
	\    & \cfrac{0,16}{n 0,17^{2}}          & \le & 0,05                                                  \\\\
	\iff & \cfrac{0,16}{0,05\times 0,17^{2}} & \le & n                                                     \\\\
	\iff & n                                 & \ge & \cfrac{0,16}{0,05 \times  0,17^{2}}\quad\approx 110,7
\end{array}
$$

Pour $n \ge 111$, la probabilité que la moyenne $M_{n}$ appartienne à l'intervalle $\left\rbrack 0,03 ;0,37 \right\lbrack$ est supérieure à $0,95$.
```

## Loi des grands nombres

```admonish prop
Soit la variable aléatoire moyenne $M_{n}$ d'un échantillon de taille $n$ de la variable aléatoire $X$.

Pour tout réel strictement positif $\delta$, on a :

$$\boxed{\limite_{n\to+\infty}{P\Big(\big|M_{n}-E(X)\big|\ge\delta\Big)=0}}$$
```

```admonish rem
La loi des grands nombres traduit le fait que plus la **taille de l'échantillon d'une v.a. $X$ est grande**, plus **l'écart entre la moyenne de cet échantillon et l'espérance de la v.a. $X$ est faible**.
```

```admonish meth title="Méthode : Appliquer la loi des grands nombres"
Soit une variable aléatoire $X$ d'espérance $3$ et de variance $0,2$.

Soit $M_{n}$ la variable aléatoire moyenne d'un échantillon de taille $n$ de la variable aléatoire $X$.

1. Déterminer un majorant de $P\Big(\big|M_{n}-3\big|\ge 0,1\Big)$ pour :
   - $n=100$,
   - $n=1\ 000$
   - et $n=10\ 000\qquad$ Que constate-t-on ?
2. Démontrer et interpréter le résultat précédent.

---

1. D'après l'inégalité de concentration, on a :

$$
P\Big(\big|M_{n}-E(X)\big|\ge\delta\Big)\le\cfrac{V(X)}{n\delta^{2}}\quad\iff\quad P\Big(\big|M_{n}-3\big|\ge 0,1\Big)\le\cfrac{0,2}{n\times 0,1^{2}}=\cfrac{20}{n}
$$

- Pour $n=100$, on a :

  $$P\Big(\big|M\_{n}-3\big|\ge 0,1\Big)\le 0,2$$

- Pour $n={1\ 000}$, on a :

  $$P\Big(\big|M\_{n}-3\big|\ge 0,1\Big)\le 0,02$$

- Pour $n={10\ 000}$, on a :

  $$P\Big(\big|M\_{n}-3\big|\ge 0,1\Big)\le 0,002$$

On constate que plus $n$ augmente, plus le majorant de la probabilité se rapproche de $0$.

2. D'après la loi des grands nombres, on a :

$$\limite_{n\to +\infty}{P\Big(\big|M_{n}-E(X)\big|\ge\delta\Big)=0}$$

Soit, dans le contexte de l'exercice :

$$\limite_{n\to+\infty}{P\Big(\big|M_{n}-3\big|\ge 0,1\Big)=0}$$

Plus la taille de l'échantillon est grande, plus l'écart entre la moyenne et l'espérance est faible.
```

```admonish meth title="Méthode : Simuler des valeurs d'une v.a. moyenne dans le but d'observer la loi des grands nombres"
On considère la v.a. $X$ qui prend ses valeurs de manière équiprobable parmi les entiers $1$ à $5$.

Et on nomme $M_{n}$ la variable aléatoire moyenne d'un échantillon de taille $n$ de la v.a. $X$.

1. Simuler $500$ valeurs de la variable aléatoire $M_{n}$ par une fonction en Python dans le but d'estimer la probabilité $P\Big(\big|M_{n}-E(X)\big|\ge\delta\Big)$.

   Tester le programme pour différentes valeurs de $\delta$ et des valeurs de $n$ de plus en plus grande.

2. Que constate-t-on ?
3. Justifier et interpréter ce résultat.

---

1. Comme il y a équiprobabilité et cinq issues possibles, toutes les probabilités des valeurs prises par $X$ sont égale à $\cfrac{1}{5}$.

On a ainsi : $\ E(X)=\pa{\cfrac{1}{5}\times1}+\pa{\cfrac{1}{5}\times2}+\pa{\cfrac{1}{5}\times3}+\pa{\cfrac{1}{5}\times4}+\pa{\cfrac{1}{5}\times5}=3$

Et donc : $P\Big(\big|M_{n}-E(X)\big|\ge\delta\Big)=P\Big(\big|M_{n}-3\big|\ge\delta\Big)$.

|              Programme Python              |
| :----------------------------------------: |
| ![](img/grandnb/GNimage5.png =450x center) |

|                 Simulation                 |                                            |                                            |
| :----------------------------------------: | :----------------------------------------: | :----------------------------------------: |
| ![](img/grandnb/GNimage6.png =300x center) | ![](img/grandnb/GNimage7.png =300x center) | ![](img/grandnb/GNimage8.png =300x center) |
|                $\delta=0.5$                |                $\delta=0.2$                |                $\delta=0.1$                |

2. On constate que plus $n$ augmente plus la probabilité $P\Big(\big|M_{n}-E(X)\big|\ge\delta\Big)$ se rapproche de $0$.

3. D'après la loi des grands nombres, on a :

$$\limite_{n \to + \infty}{ P\Big(\big|M_{n}-E(X)\big|\ge\delta\Big)} = 0$$

Soit, dans le contexte de l'exercice :

$$\limite_{n \to + \infty}{ P\Big(\big|M_{n}-3\big|\ge\delta\Big) } = 0$$

Plus la taille de l'échantillon est grande, plus l'écart entre la moyenne de cet échantillon et l'espérance de la variable aléatoire $X$ est faible.
```
