# Arbre pondéré et loi de Bernoulli

<!-- toc -->

## Expérience aléatoire à deux épreuves

### Indépendance de deux événements

```admonish def
Deux expériences sont dites **indépendantes** si le résultat de l'une n'a aucune influence sur le résultat de l'autre.
```

```admonish meth title="Méthode : Calcul d'une probabilité associée à une exp. aléatoire à 2 épreuves"
![](img/bernoulli/01.png#right =240x)

Léa tente l'expérience suivante avec ses vêtements :

Elle dépose dans un panier $4$ chemisiers indiscernables au toucher :

- $1$ blanc
- $1$ rouge
- $2$ verts

Dans un autre panier, elle y dépose $2$ jupes également indiscernables au toucher :

- $1$ blanche
- $1$ noire

---

Elle tire au hasard, un chemisier du 1er panier et une jupe du 2ème panier.

Ces 2 expériences, **"tirer un vêtement dans chaque panier"**, sont dites **indépendantes**.

La probabilité de tirer un chemisier vert est égale à $0,5$ car le 1er panier contient $2$ chemisiers verts sur $4$ en tout.

$$P(V)=\cfrac{2}{4}=\cfrac{1}{2}=0,5$$

---

**Technique de calcul sur un arbre pondéré :**

![](img/bernoulli/01b.png =450x center)

$$\boxed{\text{Sur un "chemin de branches", les probabilités se multiplient}}$$

---

La probabilité d'obtenir deux vêtements blancs correspond aux issues $(B;B)$ :

$$P_1=P(B;B)=0,25\times 0,5=0,125$$

La probabilité d'obtenir deux vêtements blancs est égale à $0,125$.

![](img/bernoulli/01a.png =450x center)

$$\boxed{\text{Les probabilités de "plusieurs feuilles" s'additionnent}}$$

La probabilité de **ne pas obtenir un chemisier vert** et d'**obtenir une jupe noire** correspond aux issues $(B;N)$ et $(R;N)$.

Les proba. de "plusieurs feuilles" s'additionnent :

$$
	\begin{array}{rcl}
		P_2 & = & P(B;N)+P(R;N)                     \\\\
		    & = & (0,25\times 0,5)+(0,25\times 0,5) \\\\
		    & = & 0,125+0,125=0,25\end{array}
$$

La probabilité de ne pas obtenir un chemisier vert et d'obtenir une jupe noire est égale à $0,25$.
```

### Trois règles concernant les arbres pondérés

```admonish prop
- **Règle 1 :** La **somme** des probabilités des branches issues d'un même noeud est **égale à 1**.

![](img/bernoulli/02.png =150x center)

- **Règle 2 :** La probabilité d'une "feuille" (extrémité d'un chemin) est égale au **produit** des probabilités du chemin aboutissant à cette feuille.

![](img/bernoulli/03.png =500x center)

- **Règle n°3 (Probabilités totales) :** La probabilité d'un événement associé à plusieurs "feuilles" est égale à la **somme** des probabilités de chacune de ces "feuilles".

![](img/bernoulli/04.png =700x center)
```

```admonish ex
**Ex. "graphique" :**

![](img/bernoulli/05.png =800x center)
```

```admonish ex
Dans une classe , il y a $65\%$ de filles et un tiers des filles portent les cheveux courts ainsi que $4$ garçons sur $5$.

On choisit un élève au hasard dans cette classe. On note :

- $F$ : "l'élève choisi est une fille"
- $L$ : "l'élève choisi a les cheveux longs"

![](img/bernoulli/07.png =250x center)

:bulb: Calculons $P(L)$

On a :

- $P(F\cap L) = P(F)\times P_F(L) = 0.65\times\cfrac{2}{3}$ $\quad\rarr$ "Filles aux cheveux longs"
- $P\pa{\bar{F}\cap L} = P\pa{\bar{F}}\times P_{\bar{F}}(L) = 0.35\times\cfrac{1}{5}$ $\quad\rarr$ "Garçons aux cheveux longs"

Donc

$$
\begin{array}{rllll}
	P(L) & = & P(F\cap L)             & + & P\pa{\bar{F}\cap L}                           \\\\
	\    & = & 0.65\times\cfrac{2}{3} & + & 0.35\times\cfrac{1}{5}\qquad=\cfrac{151}{300} \\\\
\end{array}
$$
```

## Épreuve de Bernoulli

### Définitions

```admonish def
Une **épreuve de Bernoulli** est une expérience aléatoire à **deux issues** que l'on peut nommer "**succès**" ou "**échec**".
```

```admonish rem
- Au succès, on peut associer le nombre $1$
- À l'échec, on peut associer le nombre $0$
```

```admonish ex
- Le jeu du **pile ou face**
- On considère comme **succès** "obtenir pile" et comme **échec** "obtenir face"
```

```admonish ex
- Un **lancer un dé à six faces**
- On considère comme **succès** "obtenir un $\diceone$" et comme **échec** "ne pas obtenir un $\diceone$"

La loi de Bernoulli associée à cette expérience est :

|      $x_i$ |      $1$       |      $0$       |
| ---------: | :------------: | :------------: |
| $P(X=x_i)$ | $\cfrac{1}{6}$ | $\cfrac{5}{6}$ |
```

```admonish def
Une **loi de Bernoulli** est une loi de probabilité qui suit le schéma suivant :

- la probabilité d'obtenir $1$ est égale à $p$,
- la probabilité d'obtenir $0$ est égale à $(1 - p)$.

$p$ est appelé le **paramètre** de la loi de **Bernoulli**.

On peut résumer la loi de Bernoulli de paramètre $p$ dans le tableau :

|      $x_i$ | $\ 1\ $ |     $0$      |
| ---------: | :-----: | :----------: |
| $P(X=x_i)$ |   $p$   | $\pa{1 - p}$ |
```

```admonish ex
- Le jeu du **pile ou face** ($S$="Faire pile") $\quad\rarr p=\cfrac{1}{2}$
- Lancer **un dé** ($S$="Faire $\diceone$") $\quad\rarr p=\cfrac{1}{6}$
```

### Espérance

```admonish prop
Soit $X$ une variable aléatoire qui suit la loi de **Bernoulli** de paramètre $p$.

Alors : $\quad\boxed{E(X)=p}$
```

```admonish demo
On a :

|      $x_i$ | $\ 1\ $ |     $0$      |
| ---------: | :-----: | :----------: |
| $P(X=x_i)$ |   $p$   | $\pa{1 - p}$ |

Donc : $\quad E(X)=1\times p+0\times (1 - p)=p$
```

```admonish meth title="Méthode : Reconnaître une situation modélisée par une loi de Bernoulli"
Après la correction d'un contrôle, le professeur compte que $24$ élèves ont obtenu une note $\ge 10$ et $6$ ne l'ont pas obtenue.

Le professeur choisit une copie au hasard.

Cette expérience aléatoire possède 2 issues.

La probabilité de l'issue **"la copie indique une note $\ge 10$"** est égale à :

$$p=\cfrac{24}{30}=\cfrac{4}{5}$$

On peut définir comme **succès** l'événement **"la copie a une note $\ge 10$"**.

La situation est donc modélisée par une loi de **Bernoulli** de paramètre $p=\cfrac{4}{5}$.
```

### Répétitions d'épreuves de Bernoulli

```admonish def
Plusieurs expériences sont **identiques et indépendantes** si :

- elles ont les mêmes issues,
- chaque issue possède la même probabilité.
```

```admonish ex
On lance $20$ fois de suite une pièce de monnaie.

![](img/bernoulli/09.png#right =200x)

On considère comme succès **"obtenir Pile"** et comme échec **"obtenir Face"**.

Ces expériences de **Bernoulli** sont **identiques et indépendantes**.

Pour chaque expérience, on a les probabilités ci-contre.

On dit que $p=0,5$ est le **paramètre** de l'épreuve de **Bernoulli** répétée $20$ fois.
```

```admonish ex
On lance $5$ fois un dé à six faces et on note à chaque fois le résultat.

À chaque lancer, on considère comme **succès** "obtenir un $\dicesix$" et comme **échec** "ne pas obtenir un $\dicesix$".

On répète ainsi $5$ fois de suite la même expérience de **Bernoulli** (lancer un dé) et les expériences sont **indépendantes** l'une de l'autre : un lancer n'influence pas le résultat d'un autre lancer.

On dit que $p=\cfrac{1}{6}$ est le **paramètre** de l'épreuve de **Bernoulli** répétée **$5$ fois**.
```

```admonish meth title="Méthode : Calculer une probabilité associée à une épreuve de Bernoulli"
On considère l'expérience suivante :

Une urne contient $3$ boules blanches et $2$ boules rouges.

![](img/bernoulli/10.png#right =250x)

On tire au hasard une boule et on la remet dans l'urne.

On répète l'expérience $2$ fois de suite.

Représentons l'ensemble des issues de ces expériences dans un arbre.

- Déterminer les probabilités suivantes :
  1. On tire deux boules blanches
  2. On tire une boule blanche et une boule rouge
  3. On tire au moins une boule blanche

On note :

- $A$ l'issue "On tire une boule blanche"
- $\overline{A}$ l'issue contraire "On tire une boule rouge"

On a $\ P(A)=\cfrac{3}{5}=0,6\ $ et $\ P\pa{\overline{A}}=\cfrac{2}{5}=0,4$

---

1. Obtenir deux boules blanches correspond à l'issue $\pa{A ;A}$ :

$$P_1\ =\ P\pa{AA}\ =\ 0,6\times0,6\ =\ 0,36$$

2. Obtenir une blanche et une rouge correspond aux issues $\pa{ A ; \overline{A} }$ et $\pa{\overline{A} ;A}$

$$
	\begin{array}{rccccr}
		P_2 & = & P\pa{A\bar{A}} & + & P\pa{\bar{A}A} & \           \\\\
		\    & = & 0,6\times 0,4  & + & 0,4\times 0,6  & \           \\\\
		\    & = & 0,24           & + & 0,24           & \quad=0,48
	\end{array}
$$

3. Obtenir **au moins** une blanche correspond à $\pa{A;\overline{A}}$, $\pa{A;A}$ et $\pa{\overline{A} ;A}$

$$
	\begin{array}{rccccccr}
		P_3 & = & P\pa{A\bar{A}} & + & P\pa{AA}  &+       & P\pa{\bar{A}A} & \           \\\\
		\    & = & 0,6\times 0,4  & + & 0,6\times 0,6&   + & 0,4\times 0,6  & \           \\\\
		\    & = & 0,24           & + & 0,36 &+            & 0,24           & \quad=0,84
	\end{array}
$$

**Arbre de probabilité de la situation**

![](img/bernoulli/11.png =600x center)
```
