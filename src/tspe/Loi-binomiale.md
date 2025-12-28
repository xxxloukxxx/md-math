# Loi binomiale

<!-- toc -->

## Rappels sur les probabilités conditionnelles

### Propriétés

```admonish prop
- $\boxed{P_{A}(B)=\cfrac{P(A\cap B)}{P(A)}}\quad\iff\quad\boxed{P(A\cap B)=P(A)\times P_A(B)=P(B)\times P_B(A)}$

- $\boxed{P(A)=P(B\cap A)+P(\overline{B}\cap A)}\quad$ (Formule des probabilités totales)

- $A$ et $B$ sont **indépendants** lorsque $\boxed{P(A\cap B)=P(A)\times P(B)}$ ou $\boxed{P_{A}(B)=P(B)}$
```

```admonish meth title="Méthode : Appliquer la formule des probabilités totales"
Lors d'une épidémie chez des bovins, on s'est aperçu que si la maladie est diagnostiquée suffisamment tôt chez un animal, on peut le guérir ; sinon la maladie est mortelle.

Un test est mis au point et essayé sur un échantillon d'animaux dont $2\\%$ est porteur de la maladie.

On obtient les résultats suivants :

- si un animal est porteur de la maladie, le test est positif dans 85 % des cas ;
- si un animal est sain, le test est négatif dans 95 % des cas.

On choisit de prendre ces fréquences observées comme probabilités pour toute la population et d'utiliser le test pour un dépistage préventif de la maladie.

On note respectivement $M$ et $T$ les événements :

- $M$ : "Être porteur de la maladie"
- $T$ : "Avoir un test positif"

a. Un animal est choisi au hasard. Quelle est la probabilité que son test soit positif ?

b. Si le test du bovin est positif, quelle est la probabilité qu'il soit malade ?

---

a. On construit un arbre pondéré :

![](img/binom/arbre1.png =650x center)

D'après la formule des probabilités totales :

$$
\begin{array}{rcl}
	P(T) & = & P(M\cap T)+P\left(\overline{M}\cap T\right) \\\\
	     & = & 0,02\times 0,85+0,98\times 0,05             \\\\&=&0,066
\end{array}
$$

La probabilité que le test soit positif est égale à $6,6\\%$.

b. On a : $\ P_{T}(M) =\cfrac{P(T \cap M)}{P(T)} = \cfrac{0,02 \times 0,85}{0,066}\approx 0,26$.

La probabilité que le bovin soit malade sachant que le test est positif est d'environ $26\\%$.
```

### Successions d'épreuves indépendantes

```admonish ex
On lance un dé puis une pièce de $1\euro$ et on note à chaque fois le résultat.

Le résultat du lancer du dé n'influe pas sur le résultat du lancer de la pièce.

On dit que ces deux épreuves sont _indépendantes_.

- L'univers de la première épreuve est $\lbrace 1;2;3;4;5;6 \rbrace$.
- Celui de la deuxième épreuve est $\lbrace P;F \rbrace$.

Les issues de l'expérience aléatoire sont $(1;P),(1;F),(2;P),(2;F),\ldots,(6;P),(6;F).$
```

```admonish def
Deux épreuves qui se succèdent sont **indépendantes**, si l'issue de la première épreuve n'influe pas sur l'issue de la deuxième épreuve.
```

```admonish prop
On considère deux épreuves indépendantes.

La probabilité d'obtenir l'issue $A$ pour la première épreuve suivie de l'issue $B$ pour la deuxième épreuve est :

$$\boxed{P(A;B)=P\pa{A\cap B}=P(A)\times P(B)}$$
```

```admonish rem
Cette propriété se généralise dans le cas de $n$ épreuves indépendantes.
```

```admonish meth title="Méthode : Calculer des probabilités sur une succession d'épreuves indépendantes"
On considère deux urnes contenant des billets indiscernables au toucher.

La $1^\text{ère}$ urne contient $10$ billets dont $8$ de billets de $5\euro$ et $2$ billets de $10\euro$.

La $2^\text{ème}$ urne contient $12$ billets dont $6$ de billets de $10\euro$ et $6$ billets de $20\euro$.

On tire un billet de la $1^\text{ère}$ urne puis un billet de la $2^\text{ème}$ urne.

a. Représenter la situation par un arbre pondéré.

b. Calculer la probabilité de gagner au moins $25\euro$.

---

a.

![](img/binom/arbre2.png =600x center)

b. Les deux épreuves sont indépendantes donc par exemple :

$$P(5\euro;20\euro)=P\left(5\euro)\times P(20\euro\right)=0,8\times 0,5=0,4$$

la probabilité de gagner au moins $25\euro$ est donc égale à :

$$P(5\euro;20\euro) + P(10\euro;20\euro) = 0,8 \times 0,5 + 0,2 \times 0,5 = 0,4 + 0,1 = 0,5$$

La probabilité de gagner au moins $25\euro$ est de $50\\%$.
```

## Épreuve de Bernoulli

### Définition et loi de probabilité

```admonish def
![](img/binom/arbre.png#right =200x)

Une **épreuve de Bernoulli** est une expérience aléatoire à **deux issues** que l'on nomme "succès" et "échec".
```

```admonish ex
1. Le jeu du pile ou face

   On considère par exemple comme succès "obtenir pile" et comme échec "obtenir face".

2. On lance un dé

   On considère par exemple comme succès "obtenir six" et comme échec "ne pas obtenir six"
```

```admonish def
Une **loi de Bernoulli** est la loi de probabilité d'une épreuve de Bernoulli qui suit le schéma suivant :

- la probabilité d'obtenir un succès est égale à $p$,
- la probabilité d'obtenir un échec est égale à $(1-p)$.

$p$ est le _paramètre_ de la loi de Bernoulli.
```

```admonish ex
Dans les exemples présentés plus haut :

1. $p = \cfrac{1}{2}$
2. $p = \cfrac{1}{6}$
```

```admonish prop
Au succès, on peut associer le nombre $1$ et à l'échec, on peut associer le nombre $0$.

Soit la variable aléatoire $X$ qui suit une loi de Bernoulli de paramètre $p$.

Dans ce cas, la loi de probabilité de $X$ peut être présentée dans le tableau :

|         $x_{i}$         | $1$ |   $0$   |
| :---------------------: | :-: | :-----: |
| $P\left(X=x_{i}\right)$ | $p$ | $(1-p)$ |
```

```admonish prop
Soit $X$ une variable aléatoire qui suit la loi de Bernoulli de paramètre $p$, alors :

$$\boxed{E(X)=p}\quad\text{et}\quad\boxed{V(X)=p(1-p)}$$
```

```admonish demo
- Espérance $E(X)$

$$E(X)= 1 \times P(X = 1) + 0 \times P(X = 0)= 1 \times p + 0 \times (1 - p)= p$$

- Variance $V(X)$

$$
\begin{array}{rcl}
	V(X) & = & \left(1-E(X)\right)^{2}\times P(X=1)+\left(0-E(X)\right)^{2}\times P(X=0) \\\\
	     & = & (1-p)^{2}\times p+(0-p)^{2}\times(1-p)                                    \\\\
	     & = & p-{2p}^{2}+p^{3}+p^{2}-p^{3}                                              \\\\
	     & = & p-p^{2} \qquad =  p(1-p)
\end{array}
$$
```

## Schéma de Bernoulli, loi binomiale

### Schéma de Bernoulli

```admonish def
Un **schéma de Bernoulli** est la répétition de $n$ épreuves de Bernoulli identiques et indépendantes pour lesquelles la probabilité du succès est $p$.
```

```admonish rem
Pour la répétition de $n$ épreuves de Bernoulli, l'univers est $\lbrace 0,1 \rbrace^{n}$
```

```admonish ex
La répétition de $10$ lancers d'une pièce est un schéma de Bernoulli de paramètres :

$$n=10\quad\text{et}\quad p=\cfrac{1}{2}$$
```

### Loi binomiale

```admonish def
On réalise un schéma de Bernoulli composé de $n$ épreuves de Bernoulli identiques et indépendantes.

Une **loi binomiale** est une loi de probabilité définie sur l'ensemble $\brace{ 0 ; 1 ; 2 ; \ldots ; n}$ qui donne les probabilités du nombre de succès de l'expérience.
```

```admonish rem
$n$ et $p$ sont les _paramètres_ de la **loi binomiale** et on note : $\mathcal{B}(n;p)$.

Lorsque qu'une variable aléatoire $X$ suit la loi $\mathcal{B}\pa{n,p}, on note :

$$X\rightsquigarrow\mathcal{B}(n;p)$$.
```

```admonish meth title="Méthode : Utiliser un arbre pondéré avec la loi binomiale"
On considère un jeu de $4$ cartes dont une carte est un as.

On tire _trois fois_ de suite une carte en _remettant_ à chaque fois la carte tirée dans le jeu.

On considère comme succès l'évènement "Obtenir un as".

Soit $X$ la variable aléatoire qui compte le nombre de succès.

Calculer $P(X = 2)$ en utilisant un arbre pondéré.

---

On répète $3$ fois de suite des épreuves de Bernoulli identiques et indépendantes.

Pour chaque épreuve la probabilité du succès (tirer un as) est égale à $\cfrac{1}{4} = 0,25$.

Donc la probabilité d'un échec est égale à $0,75$.

La variable aléatoire $X$ suit la loi binomiale de paramètres $n = 3$ et $p = 0,25$.

On cherche à calculer la probabilité d'obtenir 2 succès parmi 3 tirages.

On construit alors un arbre pondéré présentant les données de l'énoncé :

![](img/binom/arbre3.png =600x center)

On compte 3 triplets formés de deux succès : $(S;S;\overline{S})$, $(S;\overline{S};S)$ et $(\overline{S};S;S)$.

Et on a :

$$P\left( S;S;\overline{S} \right) = P\left( S;\overline{S};S \right) = P\left( \overline{S};S;S \right) = 0,25 \times 0,25 \times 0,75 = {0,25}^{2} \times 0,75$$

Et donc $\ P(X = 2) = 3 \times {0,25}^{2} \times 0,75 = 0,140\ 625$.
```

### Expression de la loi binomiale à l'aide des coefficients binomiaux

```admonish ex
On considère un schéma de Bernoulli à $3$ épreuves.

![](img/binom/image5.png =350x center)

Combien existe-t-il de chemins conduisant à $2$ succès parmi $3$ épreuves ?

On compte le nombre de combinaisons de $2$ succès parmi $3$ :

$$\begin{pmatrix}3\\\\2\\\\\end{pmatrix}=3$$
```

```admonish def
On réalise une expérience suivant un schéma de Bernoulli de paramètres $n$ et $p$.

Soit un entier naturel $k$ tel que $0\le k\le n$

On appelle **coefficient binomial** ou **combinaison de** $k$ **parmi** $n$, le nombre de chemins conduisant à $k$ succès parmi $n$ épreuves sur l'arbre représentant l'expérience.

Ce nombre se note : $\boxed{\begin{pmatrix}n\\\\k\\\\\end{pmatrix}}$
```

```admonish prop
Soit $X$ une variable aléatoire qui suit la loi binomiale de paramètres $n$ et $p$.

Pour tout entier naturel $k$ tel que $0 \le k \le n$, on a :

$$\boxed{P(X=k)=\begin{pmatrix}n\\\\k\\\\\end{pmatrix}p^{k}(1-p)^{n-k}}$$
```

```admonish demo
Un chemin comportant $k$ succès (de probabilité $p$) comporte $\pa{n - k}$ échecs (de probabilité $\pa{1 - p}$).

Ainsi sa probabilité est égale à : $\ p^{k}(1 - p)^{n - k}$.

Le nombre de chemins menant à $k$ succès est égal à $\begin{pmatrix} n \\\\ k \\\\ \end{pmatrix}$.

Donc :

$$P(X=k)=\begin{pmatrix}n\\\\k\\\\\end{pmatrix}p^{k}(1-p)^{n-k}$$
```

```admonish meth title="Méthode : Calculer les probabilités d'une loi binomiale"
Une urne contient 5 boules gagnantes et 7 boules perdantes. Une expérience consiste à tirer au hasard 4 fois de suite une boule et de la remettre.

On appelle $X$ la variable aléatoire qui associe le nombre de tirages gagnants.

a. Justifier que $X$ suit une loi binomiale.

b. Calculer la probabilité d'obtenir 3 boules gagnantes.

---

a. On répète 4 fois de suite de façon identique et indépendante une épreuve à deux issues :

- boules gagnantes (5 issues) ;
- boules perdantes (7 issues).

Le **succès** est d'obtenir une boule gagnante.

La **probabilité du succès** sur un tirage est égale à $\cfrac{5}{12}$.

La variable aléatoire $X$ suit donc la loi binomiale de paramètres : $n = 4$ et $p =\cfrac{5}{12}$.

b. Calcul de $P(X=3)$

$$
\begin{array}{rcccccl}
	P(X=3) & = & \begin{pmatrix}4\\\\3\\\\\end{pmatrix} & \times & \left(\cfrac{5}{12}\right)^{3} & \times & \left(1-\cfrac{5}{12}\right)^{4-3}                            \\\\
	       & = & \begin{pmatrix}4\\\\3\\\\\end{pmatrix} & \times & \left(\cfrac{5}{12}\right)^{3} & \times & \left(\cfrac{7}{12}\right)^{1}                                \\\\
	       & = & 4                                      & \times & \cfrac{125}{1728}              & \times & \cfrac{7}{12}  \qquad = \cfrac{875}{5\ 184}\qquad\approx 0,17
\end{array}
$$
```

### La loi binomiale avec la calculatrice

```admonish meth title="Méthode : Chercher un intervalle $I$ pour lequel la probabilité est $<$ ou $>$ à une valeur"
On fait l'hypothèse que $55$% des électeurs ont voté pour le candidat A.

On interroge au hasard à la sortie des urnes $50$ personnes.

Soit $X$ est la variable aléatoire qui compte le nombre $k$ de personnes qui ont voté pour le candidat A.

a. Déterminer des réels $a$ et $b$ tels que : $P(a \le X \le b) \ge 0,95$

b. Donner une interprétation du résultat précédent.

---

a. _$P(a\le X\le b)\ge 0.95$_

La variable aléatoire $X$ suit une loi binomiale de paramètre $n = 50$ et $p = 0,55$.

![](img/binom/tableur.png#right =200x)

Avec le tableur, il est possible d'obtenir la loi de probabilité de $X$.

Avec la loi binomiale $\mathcal{B}(50 ; 0,55)$ :

- Pour calculer $P(X = 20)$, il faut saisir :

~~~
=LOI.BINOMIALE(20;50;0,55;0)
~~~

- Pour calculer $P(X \le 20)$, il faut saisir :

~~~
=LOI.BINOMIALE(20;50;0,55;1)
~~~

On obtient ainsi :

![](img/binom/image6.png#left =350x center)

$$
\begin{array}{|r|c|c|c|c|c|c|c|c|}\hline
	k        & 17    & 18    & 19    & 20    & 21    & 22    & 23   & 24    \\\\ \hline
	P(X = k) & 0,001 & 0,003 & 0,006 & 0,012 & 0,021 & 0,034 & 0,05 & 0,069 \\\\ \hline
	k        & 25    & 26    & 27    & 28    & 29    & 30    & 31   & 32    \\\\ \hline
	P(X = k) & 0,087 & 0,102 & 0,112 & 0,112 & 0,104 & 0,089 & 0,07 & 0,051 \\\\ \hline
	k        & 33    & 34    & 35    & 36    & 37    & 38    &      &       \\\\ \hline
	P(X = k) & ,034  & 0,021 & 0,012 & 0,006 & 0,003 & 0,001 &      &       \\\\ \hline
\end{array}
$$

Pour $k \lt 17$ et $k \gt 38$, les probabilités sont inférieures à $10^{-3}$ et peuvent être considérées comme négligeables.

On obtient également le tableau des probabilités cumulées :

$$
\begin{array}{|r|c|c|c|c|c|c|c|c|}\hline
	k          & 17    & 18    & 19    & 20    & 21    & 22    & 23    & 24    \\\\ \hline
	P(X \le k) & 0,002 & 0,005 & 0,01  & 0,023 & 0,044 & 0,077 & 0,127 & 0,196 \\\\ \hline
	k          & 25    & 26    & 27    & 28    & 29    & 30    & 31    & 32    \\\\ \hline
	P(X \le k) & 0,283 & 0,386 & 0,498 & 0,61  & 0,713 & 0,802 & 0,872 & 0,923 \\\\ \hline
	k          & 33    & 34    & 35    & 36    & 37    & 38                    \\\\ \hline
	P(X \le k) & 0,957 & 0,978 & 0,989 & 0,995 & 0,998 & 0,999                 \\\\ \hline
\end{array}
$$

On cherche $a$ et $b$ tel que : $P(a \le X \le b) \ge 0,95$.

On commence par déterminer $a$ le plus petit possible, tel que : $P(X\le a)>0,025$.

$\rarr$ On lit : $a = 21$.

On détermine ensuite $b$, le plus petit possible, tel que : $P(X \le b) \ge 0,975$.

$\rarr$ On lit : $b = 34$.

Ainsi : $\boxed{P(21 \le X \le 34) \ge 0,95}$

Représentation de la loi binomiale $\mathcal{B}\pa{50\ ;\ 0,55}$

![](img/binom/image7.png =650x center)

b. _Intervalle de fluctuation_

Or, on a $\cfrac{21}{50} = 42\\%\ $ et $\ \cfrac{34}{50} = 68\\%$.

Pour un échantillon de $50$ personnes, il y a au moins $95\\%$ de chance qu'il y ait entre $42\\%$ et $68\\%$ des électeurs qui votent pour le candidat A.
```

```admonish rem
L'intervalle $\lbrack 0,42 ; 0,68\rbrack$ s'appelle **intervalle de fluctuation au seuil de** $95\\%$.
```
