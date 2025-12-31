# Variables aléatoires

<!-- toc -->

## Variable aléatoire et loi de probabilité

### Variable aléatoire

```admonish ex
![](img/va/de.png#right =80x)

Soit l'expérience aléatoire : "On lance un dé à six faces et on regarde le résultat."

L'ensemble de toutes les issues possibles s'appelle l'**univers des possibles** :

$$\Omega=\brace{\diceone ; \dicetwo ; \dicethree ; \dicefour ; \dicefive ; \dicesix}$$

On considère le jeu suivant :

- Si le résultat est $\dicefive$ ou $\dicesix,$ on gagne $2$€.
- Sinon, on perd $1$€.

On peut définir ainsi une variable aléatoire $X$ qui donne **le gain** du joueur.

$X$ peut prendre les valeurs $2$ ou $-1$.

- Pour les issues $\dicefive$ et $\dicesix,$ on a $\ X=2$
- Pour les issues $\diceone,$ $\dicetwo,$ $\dicethree$ et $\dicefour,$ on a $\ X=-1$

![](img/va/diagram.png =350x center)
```

```admonish def
Une **variable aléatoire** $X$ associe un nombre réel à chaque issue de l'univers d'une expérience aléatoire.

$$
	\boxed{
		\begin{array}{rcl}
			\Omega & \longrightarrow & \R        \\\\
			e_i    & \longmapsto     & X(\Omega)
		\end{array}
	}
$$
```

```admonish meth title="Méthode : Calculer une probabilité à l'aide d'une variable aléatoire"
![](img/va/32cartes.png#right =250x)

On tire une carte au hasard dans un jeu de 32 cartes.

- Si cette carte est un $\heartsuit$, on gagne $5$€.
- Si cette carte est un $\spadesuit$, on gagne $2$€.
- Dans les autres cas, on perd $1$€.

Soit $X$ la variable aléatoire qui associe le gain du jeu.

:bulb: Calculons $P(X=5)$, $P(X=-1)$ et $P(X\le 2)$.

- $P(X=5)$ est la probabilité de gagner $5$€.

  On gagne $5$€ lorsqu'on tire un $\heartsuit$.

  $$P(X=5)=\cfrac{8}{32}=\cfrac{1}{4}$$

- $P(X=-1)$ est la probabilité de perdre $1$€.

  On perd $1$€ lorsqu'on ne tire ni un $\heartsuit$, ni un $\spadesuit$.

  $$P(X=-1)=\cfrac{16}{32}=\cfrac{1}{2}$$

- $P(X\le 2)$ est la probabilité de gagner au plus $2$€.

  $$P(X\le 2)=P(X=2)+P(X=-1)\quad=\cfrac{1}{4}+\cfrac{1}{2}\quad=\cfrac{3}{4}$$
```

### Loi de probabilité

```admonish def
Soit une variable aléatoire $X$ prenant les valeurs $x_{1}, x_{2}, ... , x_{n}$.

La **loi de probabilité** de $X$ est donnée par toutes les probabilités $P(X=x_{i})$.

|   $x_i$    | $x_1$ | $x_2$ | $...$ | $x_n$ |
| :--------: | :---: | :---: | :---: | :---: |
| $P(X=x_i)$ | $p_1$ | $p_2$ | $...$ | $p_n$ |
```

```admonish rem
Les "$x_{i}$" sont toutes les valeurs prises par $X$
```

```admonish meth title="Méthode : Déterminer une loi de probabilité d'une variable aléatoire"
![](img/va/2de.png#right =100x)

On lance simultanément **deux** dés à 6 faces et on note les valeurs obtenues.

Soit $X$ la variable aléatoire égale à **la plus grande des deux valeurs**.

:bulb: Établissons la loi de probabilité de $X$.

---

La variable aléatoire $X$ peut prendre les valeurs $\diceone,$ $\dicetwo,$ $\dicethree,$ $\dicefour,$ $\dicefive$ et $\dicesix.$

Par ex., si on obtient la combinaison $\dicetwo$ $\dicefive,$ la plus grande valeur est $\dicefive$ et on a $\ X=5$

On peut modéliser cette situation par un tableau :

$$
\begin{array}{|c|c|c|c|c|c|c|}\hline
	X=...      & \diceone & \dicetwo & \dicethree & \dicefour & \dicefive & \dicesix \\\\ \hline
	\diceone   & 1        & 2        & 3          & 4         & 5         & 6        \\\\ \hline
	\dicetwo   & 2        & 2        & 3          & 4         & 5         & 6        \\\\ \hline
	\dicethree & 3        & 3        & 3          & 4         & 5         & 6        \\\\ \hline
	\dicefour  & 4        & 4        & 4          & 4         & 5         & 6        \\\\ \hline
	\dicefive  & 5        & 5        & 5          & 5         & 5         & 6        \\\\ \hline
	\dicesix   & 6        & 6        & 6          & 6         & 6         & 6        \\\\ \hline
\end{array}
$$

On a donc :

- $P(X=1)=\cfrac{1}{36}$
- $P(X=2)=\cfrac{3}{36}$
- $P(X=3)=\cfrac{5}{36}$
- etc...

Résumons les résultats dans le tableau de la loi de probabilité de $X$ :

$$
	\begin{array}{|r|c|c|c|c|c|c|}\hline
		x_{i}      & 1            & 2            & 3            & 4            & 5            & 6             \\\\ \hline
		P(X=x_{i}) & \cfrac{1}{36} & \cfrac{3}{36} & \cfrac{5}{36} & \cfrac{7}{36} & \cfrac{9}{36} & \cfrac{11}{36} \\\\ \hline
	\end{array}
$$
```

```admonish rem
On peut vérifier que la somme des probabilités est égale à $1$ :

$$\cfrac{1}{36}+\cfrac{3}{36}+\cfrac{5}{36}+\cfrac{7}{36}+\cfrac{9}{36}+\cfrac{11}{36}=1$$
```

## Espérance

### Définition

```admonish def
Soit une variable aléatoire $X$ prenant les valeurs $x_{1}, x_{2}, ... , x_{n}$.

La loi de probabilité de $X$ associe à $x_{i}$ la probabilité $p_{i}=P(X=x_{i})$.

|   $x_i$    | $x_1$ | $x_2$ | $...$ | $x_n$ |
| :--------: | :---: | :---: | :---: | :---: |
| $P(X=x_i)$ | $p_1$ | $p_2$ | $...$ | $p_n$ |

L'**espérance** de $X$ est ;

$$\boxed{E(X)=p_{1} x_{1}+p_{2} x_{2}+ \ldots +p_{n} x_{n}\ =\ \sum\limits_{i=1}^{i=n} p_i\times x_i}$$
```

```admonish rem
C'est la moyenne des $x_i$ pondérée par les $p_i$
```

```admonish ex
Dans l'exemple précédent, on a la loi de probabilité suivante :

$$
\begin{array}{|r|c|c|c|c|c|c|}\hline
	x_{i}      & 1             & 2             & 3             & 4             & 5             & 6              \\\\ \hline
	P(X=x_{i}) & \cfrac{1}{36} & \cfrac{3}{36} & \cfrac{5}{36} & \cfrac{7}{36} & \cfrac{9}{36} & \cfrac{11}{36} \\\\ \hline
\end{array}
$$

On a :

$$E(X)=1\times \cfrac{1}{36}+2\times\cfrac{3}{36}+\ldots+6\times\cfrac{11}{36}\quad=\cfrac{161}{36}$$
```

```admonish meth title="Méthode : Calculer l'espérance d'une variable aléatoire"
![](img/va/32cartes.png#right =250x)

On tire une carte dans un jeu de $32$ cartes.

- Si on tire un $\heartsuit$, on gagne $2$€.
- Si on tire un $K$ on gagne $5$€.
- Si on tire une autre carte, on perd $1$€.

$X$ est la variable aléatoire donnant le gain du jeu.

:bulb: Calculons l'espérance de $X$.

---

$X$ peut prendre les valeurs $\ -1$€, $\ 2$€, $\ 5$€ mais aussi $\ 7$€.

En effet, si on tire le $K\heartsuit$, on gagne $2$€ (pour le $\heartsuit$) + $5$€ (pour le roi).

- Si la carte tirée est un $\heartsuit$ (autre que le K$\heartsuit$), $X=2$

$$P(X=2)=\cfrac{7}{32}$$

- Si la carte tirée est un K (autre que le K$\heartsuit$), $X=5$

$$P(X=5)=\cfrac{3}{32}$$

- Si la carte tirée est le K$\heartsuit$, $X=7$

$$P(X=7)=\cfrac{1}{32}$$

- Si la carte tirée n'est ni un $\heartsuit$, ni un roi, $X=-1$

$$P(X=-1)=\cfrac{21}{32}$$

La loi de probabilité de $X$ est :

$$
\begin{array}{|r|c|c|c|c|}\hline
	x_{i}                           & -1             & 2             & 5             & 7             \\\\ \hline
	\rule[-5mm]{0cm}{1cm}P(X=x_{i}) & \cfrac{21}{32} & \cfrac{7}{32} & \cfrac{3}{32} & \cfrac{1}{32} \\\\ \hline
\end{array}
$$

On a :

$$E(X)=\cfrac{21}{32}\times (-1)+\cfrac{7}{32}\times 2+\cfrac{3}{32}\times 5+\cfrac{1}{32}\times 7\quad=\cfrac{15}{32}\quad\approx 0.47$$

Si l'on répète l'expérience un grand nombre de fois, on peut espérer gagner, **en moyenne**, environ $0,47$€ par tirage.

Si l'organisateur du jeu veut espérer faire un bénéfice, il pourra demander, par exemple, aux joueurs une participation de $0,50$€ par tirage.

Il gagnera en moyenne environ $0,03$€ par tirage.
```
