# Probabilité conditionnelle

<!-- toc -->

## Rappels de 2<sup>nde<sup>

![](img/proba/01.png =250x center)

```admonish def title="Vocabulaire"
- **Expérience aléatoire :** "Lancer la roue et noter le gain"
- **Une issue** : $50$ ; $1000$ ou $\text{Jackpot}$ ...
- **Univers** : L'ensemble des issues possibles
  $$\Omega = \left\\{\text{Lose} ; 50 ; 100 ; 200 ; 300 ; 500 ; 700 ; 1000 ; \text{Jackpot}\right\\}$$
- **Événement** : Un ensemble d'issues
  $$A :  \text{Obtenir - de 450}\quad\Lrarr\quad A = \left\\{\text{Lose} ; 50 ; 100 ; 200 ; 300 \right\\}$$
```

```admonish prop
- **Probabilité de d'un événement** : somme de la probabilité des issues qui le composent.

$$
\begin{aligned}
	p(A) & =p(\text{Lose}) +p(50) +p(100) +p(200) +p(300)                             \\\\
	     & =\cfrac{1}{12} +\cfrac{2}{12} +\cfrac{1}{12} +\cfrac{3}{12} +\cfrac{1}{12} \\\\
	     & =\cfrac{8}{12}=\cfrac{2}{3}                                                \\\\
\end{aligned}
$$

- **Équiprobabilité** : Égalité de la proba. de chaque issues
  - Ce n'est pas le cas ici $\rightarrow p(50)\neq p(1000)$

- La somme des proba. des issues $=1\quad\rarr\sum\limits_{i=1}^{i=n}\ p_i=1$
  - La roue s'arrêtera forcement sur un secteur
    $$p(\text{Lose}) +p(50) +\dots +p(1000)+p(\text{Jackpot})=1$$
```

```admonish prop title="Loi de probabilité"
|  Issue |      Lose       |       50        |       100       |       200       | $\ldots$ |      1000       |     Jackpot     |
| -----: | :-------------: | :-------------: | :-------------: | :-------------: | :------: | :-------------: | :-------------: |
| Proba. | $\cfrac{1}{12}$ | $\cfrac{2}{12}$ | $\cfrac{1}{12}$ | $\cfrac{3}{12}$ | $\ldots$ | $\cfrac{1}{12}$ | $\cfrac{1}{12}$ |
```

```admonish prop title="Événement contraire et intersection/union d'événements"
- **Événement contraire** : $p\left(\bar{A}\right)=1-p(A)$
  - Si $\quad p(A)=\cfrac{2}{3}\quad$ alors $\quad p\left(\bar{A}\right)=\cfrac{1}{3}$

- **Intersection** : $A \cap B$
  - C'est l'événement $A$ **et** $B$

- **Union (ou réunion)** : $A \cup B$
  - C'est l'événement $A$ **ou** $B$

$$p(A \cup B)=p(A) + p(B) - p(A \cap B)$$
```

```admonish ex
On tire au hasard une carte dans une jeu de $32$ cartes.

![](img/proba/02.png =300x center)

On considère les événements suivants :

- $A$ : "La carte tirée est une figure"
  - $A:\left\\{J\spadesuit;Q\spadesuit;\dots;Q\heartsuit;K\heartsuit\right\\}$
- $B$ : "La carte tirée est de couleur noire"
  - $B:\left\\{7\spadesuit;8\spadesuit;\dots;K\clubsuit;A\clubsuit\right\\}$

On a :

- $p(A)=\cfrac{12}{32}=\cfrac{3}{8}\quad$ et $\quad p(B)=\cfrac{16}{32}=\cfrac{1}{2}$

On a :

- $A\cap B$ : "la carte est une figure **et** noire"
  - $A\cap B : \left\\{J\spadesuit;Q\spadesuit;K\spadesuit;J\clubsuit;Q\clubsuit;K\clubsuit\right\\}\quad\rarr p(A\cap B)=\cfrac{6}{32}$
- $A\cup B$ : "la carte est une figure **ou** noire"
  - $A\cup B : \left\\{7\spadesuit;8\spadesuit;\dots;J\heartsuit;\dots;A\clubsuit\right\\}$

$$\def\arraystretch{1.5}\begin{array}{rccccccc}
		p(A\cup B) & = & p(A)           & + & p(B)           & - & p(A\cap B)    &                 \\\\
		           & = & \cfrac{12}{32} & + & \cfrac{16}{32} & - & \cfrac{6}{32} & =\cfrac{22}{32}
	\end{array}$$
```

## Probabilité conditionnelle : définition et propriétés

### Définition : Probabilité conditionnelle

```admonish def
Soit $A$ et $B$ deux événements avec $p(A)\neq 0$.

On appelle "**probabilité conditionnelle** de $B$ sachant $A$", la probabilité que l'événement $B$ se réalise sachant que l'événement $A$ est réalisé.

Elle est notée $p_A(B)$ et est définie par :

$$p_A(B)=\cfrac{p(A\cap B)}{p(A)}$$
```

```admonish ex
On tire une carte dans une jeu de $32$ cartes.

![](img/proba/02.png =300x center)

On considère les événements suivants :

- $A$ : "La carte tirée est un $\spadesuit$" $\quad\rarr p(A)=\cfrac{8}{32}$
- $B$ : "La carte tirée est un $K$" $\quad\rarr p(B)=\cfrac{4}{32}$

On a $ A\cap B$ : "La carte est le $K\spadesuit$"

$$p(A\cap B)=\cfrac{1}{32}$$

La probabilité que la carte soit un $K$ **sachant que** l'on a tiré un $\spadesuit$ est :

$$p_A(B)=\cfrac{p(A\cap B)}{p(A)}\quad=\cfrac{ \cfrac{1}{32} }{ \cfrac{8}{32} }\quad=\cfrac{1}{8}$$

On peut retrouver intuitivement ce résultat.

En effet, **sachant que** le résultat est un $\spadesuit$, on a $1$ chance sur $8$ d'obtenir le $K$.
```

```admonish ex
Un sac contient $50$ boules, dont $20$ boules **rouges** et $30$ boules **noires**, où il est marqué soit "Gagné" ou soit "Perdu"

- Sur $15$ boules **rouges**, il est marqué Gagné.
- Sur $9$ boules **noires**, il est marqué Gagné.

On tire au hasard une boule dans le sac.

- Soit $R$ l'événement : "On tire une boule rouge"
  - $p(R)=\cfrac{20}{50}=0.4$
- Soit $G$ l'événement : "On tire une boule marquée Gagné"
  - $p(G)=\cfrac{15+9}{50}=\cfrac{24}{50}=0.48$

On a :

- $R\cap G$ : "On tire une boule rouge **et** marquée Gagné"
  - $p(R\cap G)=\cfrac{15}{50}=0.3$

Donc la probabilité qu'on tire une boule marquée Gagné **sachant qu**'elle est rouge est :

$$p_R(G)=\cfrac{p(R\cap G)}{p(R)}\quad=\cfrac{0.3}{0.4}\quad=0.75$$

En effet, **sachant que** le résultat est une boule rouge, on a $15$ chances sur $20$ qu'il soit marqué Gagné. $\left(\cfrac{15}{20}=\cfrac{3}{4}=0.75\right)$
```

### Propriétés

```admonish prop
Soit $A$ et $B$, deux événements avec $p(A)\neq 0$

- $0\leq P_A(B)\leq 1$
- $P_A\left(\bar{B}\right)=1-P_A(B)$
- $P(A\cap B)=P_A(B)\times P(A)$
```

## Arbre pondéré et tableau

### Utilisation d'un arbre pondéré pour modéliser une situation

```admonish ex
$50$ boules : $20$ rouges et $30$ noires.

- Sur $15$ rouges, il est marqué Gagné.
- Sur $9$ noires, il est marqué Gagné.

Soit $\quad R$ : "On tire une boule rouge"$\quad G$ : "On tire une boule marquée Gagné"

L'expérience aléatoire peut être schématisée par un arbre pondéré (ou arbre de probabilité)

$~$

![](img/proba/03.png =900x center)
```

```admonish prop
**Règle n°1 :**

La somme des probabilités des branches issues d'un même noeud est égale à $1$.

$P(R)+P\left(\bar{R}\right)=1 \rarr$ "Soit on tire une boule rouge, soit une noire"

![](img/proba/04.png =100x center)

**Règle n°2 :**

La probabilité d'une "feuille" (extrémité d'un chemin) est égale au **produit** des probabilités du chemin aboutissant à cette feuille.

On considère la feuille $R\cap G$.

$$
\def\arraystretch{1.2}\begin{array}{rllll}
	P(R\cap G) & = & P(R) & \times & P_R(G)        \\\\
	           & = & 0.4  & \times & 0.75\quad=0.3
\end{array}
$$

![](img/proba/05.png =500x center)
```

```admonish prop title="Propriété : Probabilité totale"

**Règle n°3 :**

La probabilité d'un événement associé à plusieurs "feuilles" est égale à la **somme** des probabilités de chacune de ces "feuilles".

$G$ : "On tire une boule marquée Gagné" est associé aux feuilles $R\cap G$ et $R\cap \bar{G}$

$P(G)=P(G\cap R)+P\left(G\cap \bar{R}\right) = 0.3+0.48 = 0.18$

![](img/proba/06.png =900x center)
```

```admonish meth title="Méthode : Calculer la probabilité d'un événement associé à plusieurs feuilles"
Dans une classe , il y a $65\\%$ de filles et un tiers des filles portent les cheveux courts ainsi que $4$ garçons sur $5$.

On choisit un élève au hasard dans cette classe. On note :

- $F$ : "l'élève choisi est une fille"
- $L$ : "l'élève choisi a les cheveux longs"

![](img/proba/07.png =200x center)

Calculons $P(L)$

On a :

- $P(F\cap L) = P(F)\times P_F(L) = 0.65\times\cfrac{2}{3}\quad\rarr$ "Filles aux cheveux longs"

- $P\left(\bar{F}\cap L\right) = P\left(\bar{F}\right)\times P_{\bar{F}}(L) = 0.35\times\cfrac{1}{5}\quad\rarr$ "Garçons aux cheveux longs"

Donc

$$
\begin{array}{rllll}
	P(L) & = & P(F\cap L)             & + & P\left(\bar{F}\cap L\right) &              \\\\
	     & = & 0.65\times\cfrac{2}{3} & + & 0.35\times\cfrac{1}{5}      & = 0.50333... \\\\
\end{array}
$$

![](img/proba/08.png =700x center)
```

### Utilisation d'un tableau de probabilité/effectifs pour modéliser une situation

```admonish ex
Dans une classe de $32$ élèves, il y a $15$ garçons et $28$ demi-pensionnaires. $12$ garçons sont demi-pensionnaires.

$$
\def\arraystretch{1.2}\begin{array}{|c|c|c|c|}\hline
	             & \quad D\quad        & \quad\overline{D}\quad & \text{TOTAL}        \\\\ \hline
	G            & 12                  & \textcolor{red}{3}     & 15                  \\\\ \hline
	F            & \textcolor{red}{16} & \textcolor{red}{1}     & \textcolor{red}{17} \\\\ \hline
	\text{TOTAL} & 28                  & \textcolor{red}{4}     & 32                  \\\\ \hline
\end{array}
$$

- Probabilités simples
  $$P(G\cap D)=\cfrac{12}{32}\qquad P(F\cap\overline{D})=\cfrac{1}{32}\qquad P(G)=\cfrac{15}{32}$$
- Probabilités conditionnelles
  $$P_G(D)=\cfrac{12}{15}\qquad P_{\overline{D}}(F)=\cfrac{1}{4}\qquad P_G(\overline{D})=\cfrac{3}{15}$$

On peut établir un **tableau de probabilités**

$$
\def\arraystretch{1.7}\begin{array}{|c|c|c|c|}\hline
	             & \quad D\quad   & \quad\overline{D}\quad & \text{TOTAL}     \\\\ \hline
	G            & \cfrac{12}{32} & \cfrac{3}{32}          & \cfrac{15}{32}   \\\\ \hline
	F            & \cfrac{16}{32} & \cfrac{1}{32}          & \cfrac{17}{32}   \\\\ \hline
	\text{TOTAL} & \cfrac{28}{32} & \cfrac{4}{32}          & \cfrac{32}{32}=1 \\\\ \hline
\end{array}
$$

On a :

$$P_G(D)=\cfrac{P(G\cap D)}{P(G)}\quad=\cfrac{ \cfrac{12}{32} }{\cfrac{15}{32}}\quad=\cfrac{12}{15}$$
```

## Indépendance

### Définition : Indépendance de 2 événements

```admonish def
On dit que deux évènements $A$ et $B$ (de probabilité non nulle) sont indépendants lorsque :

$$P(A\cap B)=P(A)\times P(B)$$
```

```admonish rem
$P(A\cap B)=P(A)\times P(B) $ est vrai **UNIQUEMENT** si $A$ et $B$ sont indépendants.
```

```admonish rem
$A$ et $B$ indépendants $\Lrarr P_A(B)=P(B) \text{ ou } P_B(A)=P(A)$
```

```admonish demo
$A$ et $B$ indépendants $\Rarr P(A\cap B)=P(A)\times P(B)$

Donc

$$
\begin{aligned}
	P_A(B) & =\cfrac{P(A\cap B)}{P(A)}                \\\\
	       & =\cfrac{P(A)\times P(B)}{P(A)}\quad=P(B) \\\\
\end{aligned}
$$
```

```admonish ex
On tire une carte dans une jeu de $32$ cartes.

![](img/proba/02.png =300x center)

On considère les événements suivants :

- $A$ : "La carte tirée est un $\spadesuit$"
  $\quad\rarr P(A)=\cfrac{8}{32}=\cfrac{1}{4}$
- $B$ : "La carte tirée est un $K$"
  $\quad\rarr P(B)=\cfrac{4}{32}=\cfrac{1}{8}$
- $ A\cap B$ : "La carte est le $K\spadesuit$"
  $\quad\rarr P(A\cap B)=\cfrac{1}{32}$

On constate que :

$$P(A)\times P(B)=\cfrac{1}{4}\times\cfrac{1}{8}=\cfrac{1}{32}=P(A\cap B)$$

Donc $A$ et $B$ sont indépendants.
```

### Répétition d'expérience aléatoires et indépendantes à l'aide d'un arbre

```admonish meth title="Méthode : Représenter la répétition d'expériences identiques et indépendantes dans un arbre"
Une urne contient $3$ boules blanches et $2$ boules rouges.

![](img/proba/09.png =200x center)

On tire au hasard une boule et **on la remet dans l'urne**.

On répète l'expérience deux fois de suite.

Soit

- $A$ : "Tirer une boule blanche" $\quad\rarr P(A)=\cfrac{3}{5}=0.6$
- $B$ : "Tirer une boule rouge" $\quad\rarr P(B)=\cfrac{2}{5}=0.4$

On peut représenter la situation par un arbre.

$ $

![](img/proba/10.png =800x center)

$ $

Soit :

- $E_1$ : "Obtenir 2 blanches"
  - $P(E_1)=P(A;A)=0.36$

- $E_2$ : "Obtenir 1 blanche et 1 rouge"
  - $P(E_2)=P(A;B)+P(B;A)=0.24+0.24=0.48$

- $E_3$ : "Obtenir **au moins** 1 blanche"
  - $P(E_3)=P(E_1)+P(E_2)=0.36+0.48=0.84$
  - $P(E_3)=1-P(B;B)=1-0.16=0.84$
```

```admonish rem
Pour une expérience dont **le nombre d'issues est $>2$**, le principe reste le même.

![](img/proba/11.png =300x center)

Pour une expérience dont **le nombre de répétition est $>2$**, le principe reste le même.

![](img/proba/12.png =300x center)
```
