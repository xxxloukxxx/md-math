# Loi des grands nombres (1/2)

<!-- toc -->

## Somme de variables aléatoires

### Définition et méthode

```admonish ex
On considère deux jeux dont les gains sont donnés :

- pour le premier jeu, par la variable aléatoire $X$ qui prend les valeurs $1$ et $2$.
- pour le second jeu, par la variable aléatoire $Y$ qui prend les valeurs $-2$, $3$ et $4$.

Par exemple, l'évènement $\brace{(X=1)\cap(Y=-2)}$ signifie qu'on a gagné $1\euro$ au premier jeu et perdu $2\euro$ au deuxième jeu.

Considérons la variable aléatoire somme $X + Y$ donnant le gain total cumulé aux deux jeux.

Alors la variable aléatoire $X + Y$ peut prendre les valeurs : $\brace{-1;0;4;5;6}$

En effet, on a par exemple $X+Y=0$ avec $\brace{(X=2)\cap(Y=-2)}$.

Par ailleurs, pour calculer la probabilité de l'évènement $(X+Y=5)$, on cherche toutes les sommes $(X+Y)$ égales à $5$.

On a ainsi : $\ P(X+Y=5)=P\Big((X=1)\cap(Y=4)\Big)+P\Big((X=2)\cap(Y=3)\Big)$

Si de plus, les évènements $(X=i)$ et $(Y=j)$ sont indépendants, alors on a :

$$P(X+Y=5)=P(X=1)\times P(Y=4)+P(X=2)\times P(Y=3)$$
```

```admonish def
Soit $X$ et $Y$ deux variables aléatoires. La **loi de probabilité** de la variable aléatoire somme $X + Y$ est donnée par :

$$\boxed{P(X+Y=k)=\sum\limits_{i+j=k}^{}{P\left((X=i)\cap(Y=j)\right)}}$$

Si, de plus, les évènements $(X = i)$ et $(Y = j)$ sont indépendants, alors on a :

$$\boxed{P(X+Y=k)=\sum\limits_{i+j=k}^{}{P(X=i)\times P(Y=j)}}$$

On dit dans ce cas que les **variables aléatoires** $X$ **et** $Y$ **sont indépendantes**.
```

```admonish rem
**Le symbole $\sum$**

Si par exemple, $k=2$ alors :

$$
\begin{array}{rcl}
	P(X+Y=2) & = & \sum\limits_{i+j=2}^{}{P\left((X=i)\cap(Y=j)\right)} \\\\
	         & = & P\Big((X=0)\cap(Y=2)\Big)+\ldots                     \\\\
	         &   & \ldots + P\Big((X=1)\cap(Y=1)\Big) + \ldots          \\\\
	         &   & \ldots + P\Big((X=2)\cap(Y=0)\Big)
\end{array}
$$
```

```admonish meth title="Méthode : Déterminer la loi d'une somme de variables aléatoires"
On considère le jeu suivant qui se déroule en deux parties :

- La 1$^\text{ère}$ partie consiste à lancer une pièce de monnaie.
  - Si on tombe sur "pile", on gagne $1\euro$
  - Si on tombe sur "face", on gagne $2\euro$
- La 2$^\text{ème}$ partie consiste à lancer un dé à $6$ faces.
  - Si on tombe sur un chiffre pair, on gagne $1\euro$
  - Si on tombe sur le $\dicethree$ ou le $\dicefive$, on gagne $2\euro$
  - Si on tombe sur le $\diceone$, on perd $5\euro$

La variable aléatoire $X$ désigne les gains à la 1$^\text{ère}$ partie, la variable aléatoire $Y$ désigne les gains à la 2$^\text{ème}$ partie.

On considère que les variables aléatoires $X$ et $Y$ sont indépendantes.

:bulb: Établir la loi de probabilité de la v.a. somme $S = X + Y$ donnant le gain total cumulé à la fin des deux parties.

---

Dans le tableau ci-dessous, on présente toutes les sommes possibles :

![](img/grandnb/image3.png =150x center)

Ainsi, on a :

- $P(S=-4)=P\Big((X=1)\cap(Y=-5)\Big)=P(X=1)\times P(Y=-5)$

  En effet, $X$ et $Y$ sont indépendantes.

  Donc $P(S=-4)=\cfrac{1}{2}\times\cfrac{1}{6}=\cfrac{1}{12}$

- $P(S=-3)=P(X=2)\times P(Y=-5)=\cfrac{1}{2}\times \cfrac{1}{6}=\cfrac{1}{12}$

- $P(S=2)=P(X=1)\times P(Y=1)=\cfrac{1}{2}\times \cfrac{1}{2}=\cfrac{1}{4}$

- $P(S=3)=P(X=1)\times P(Y=2)+P(X=2)\times P(Y=1)$

  $P(S=3)=\cfrac{1}{2}\times\cfrac{1}{3}+\cfrac{1}{2}\times\cfrac{1}{2}$

  $P(S=3)=\cfrac{1}{6}+\cfrac{1}{4}=\cfrac{5}{12}$

- $P(S=4)=P(X=2)\times P(Y=2)=\cfrac{1}{2}\times \cfrac{1}{3}=\cfrac{1}{6}$

On peut présenter la loi de probabilité de $S$ dans un tableau :

$$
	\begin{array}{|r|c|c|c|c|c|} \hline
		k                              & -4            & -3            & 2            & 3             & 4            \\\\ \hline
		\rule[-4mm]{0mm}{11mm}P(S = k) & \cfrac{1}{12} & \cfrac{1}{12} & \cfrac{1}{4} & \cfrac{5}{12} & \cfrac{1}{6} \\\\ \hline
	\end{array}
$$
```

## Espérance et variance de combinaisons linéaires de variables aléatoires

### Propriétés

```admonish prop
- $\boxed{E(aX + b) = aE(X) + b}\quad$ avec $a\in\R$ et $b\in\R$

- $\boxed{E(X + Y) = E(X) + E(Y)}\quad$

- $\boxed{V(aX + b) = a^{2}V(X)}\quad$ avec $a\in\R$ et $b\in\R$

- Si $X$ et $Y$ sont deux variables aléatoires **indépendantes** :

$$\boxed{V(X + Y) = V(X) + V(Y)}$$
```

```admonish meth title="Méthode : Simplifier les calculs de $E(X)$ et de $V(X)$ à l'aide d'une variable aléatoire de transition"
Une entreprise qui fabrique des roulements à bille fait une étude sur une gamme de billes produites. Le diamètre théorique doit être égal à $1,3$cm mais cette mesure peut être légèrement erronée.

L'expérience consiste à tirer au hasard une bille d'un lot de la production et à mesurer son diamètre.

On considère la variable aléatoire $X$ qui, à une bille choisie au hasard, associe son diamètre.

La loi de probabilité de $X$ est résumée dans le tableau suivant :

$$
	\begin{array}{|r|c|c|c|c|c|}\hline
		x_{i}        & 1,298 & 1,299 & 1,3 & 1,301 & 1,302 \\\\ \hline
		P(X = x_{i}) & 0,2   & 0,1   & 0,2 & 0,4   & 0,1   \\\\ \hline
	\end{array}
$$

:bulb: Calculer l'espérance et l'écart-type de la loi de probabilité de $X$.

---

Pour simplifier les calculs, on définit la variable aléatoire $Y={1\ 000}X-{1\ 300}$

La loi de probabilité de $Y$ est alors :

$$
	\begin{array}{|r|c|c|c|c|c|}\hline
		y_{i}        & -2  & -1  & 0   & 1   & 2   \\\\ \hline
		P(Y = y_{i}) & 0,2 & 0,1 & 0,2 & 0,4 & 0,1 \\\\ \hline
	\end{array}
$$

Calculons l'espérance et la variance de la loi de probabilité de $Y$ :

$$
	\begin{array}{rcl}
		E(Y) & = & -2\times0,2+(-1)\times0,1+1\times0,4+2\times0,1=0,1                     \\\\
		V(Y) & = & 0,2\times(-2-0,1)^{2}+0,1\times(-1-0,1)^{2}+0,2\times(0-0,1)^{2}+\ldots \\\\
		\     & \  & \ldots+0,4\times(1-0,1)^{2}+0,1\times(2-0,1)^{2}=1,69
	\end{array}
$$

On en déduit l'espérance et la variance de la loi de probabilité de $X$ :

$$
	\begin{array}{rrcl}
		     & E(Y) & = & E({1\ 000}X - {1\ 300})                                                              \\\\
		     &      & = & {1\ 000}E(X) - {1\ 300}                                                              \\\\
		     &      &   &                                                                                        \\\\
		\iff & E(X) & = & \cfrac{E(Y) + {1\ 300}}{{1\ 000}} = \cfrac{0,1 + {1\ 300}}{{1\ 000}} = {1,300\ 1}
	\end{array}
$$

Pour la variance , on a :

$$
	\begin{array}{rrcl}
		     & V(Y) & = & V({1\ 000}X-{1\ 300})                                 \\\\
		     &      & = & {1\ 000}^{2}V(X)                                       \\\\
		     &      &   &                                                                                        \\\\
		\iff & V(X) & = & \cfrac{V(Y)}{{1\ 000}^{2}}=\cfrac{1,69}{{1\ 000}^{2}}
	\end{array}
$$

Et donc : $\sigma(X) = \sqrt{\cfrac{1,69}{{1\ 000}^{2}}} = \cfrac{1,3}{{1\ 000}} = {0,001\ 3}$

Conclusion : $E(X) = {1,300\ 1}$cm et $\sigma(X) = {0,001\ 3}$cm.
```

## Application à la loi binomiale

### Échantillon d'une loi de probabilité

```admonish ex
On étudie la fiabilité d'un composant électronique. On appelle $X$ la variable aléatoire égale à :

- $1$ si le composant électronique ne se détériore pas suite aux tests effectués
- $0$ dans le cas contraire.

Le fabricant précise que le composant électronique ne subit pas de détériorations suite aux tests dans $99,8\%$ des cas.

Dans ce cas, la variable aléatoire $X$ suit la loi de Bernoulli de paramètre $0,998$.

On effectue les tests sur un échantillon de $100$ composants électroniques prélevés au hasard dans le stock du fabricant.

On peut considérer alors que la liste $\left( X_{1},X_{2},X_{3},\ldots,X_{100} \right)$ forme un échantillon de taille $100$ de variables aléatoires suivant la loi de Bernoulli de paramètre $0,998$.
```

```admonish def
Un **échantillon de taille** $n$ **d'une loi de probabilité** est une liste de $n$ variables aléatoires indépendantes suivant cette loi.
```

```admonish prop
Soit $\left( X_{1},X_{2},\ldots,X_{n} \right)$ un échantillon de taille $n$ de variables aléatoires indépendantes suivant une même loi.

On pose : $S = X_{1} + X_{2} + \ldots + {X}_{n}$, alors on a :

1. $\boxed{E(S)=E\left(X_{1}\right)+E\left(X_{2}\right)+\ldots+{E(X}_{n})}$
2. $\boxed{V(S)=V\left(X_{1}\right)+V\left(X_{2}\right)+\ldots+{V(X}_{n})}$
```

```admonish meth title="Méthode : Calculer une espérance et une variance à l'aide d'une somme de variables aléatoires"
Sur un axe gradué, on dépose une petite goûte de confiture à la fraise au point d'abscisse $10$.

Pierrot invite Sophie la fourmi à se placer à l'origine de l'axe gradué.

Attirée par la confiture, Sophie se déplace de façon aléatoire d'une unité vers :

- la **droite** avec la probabilité de $\cfrac{2}{3}$
- la **gauche** avec la probabilité de $\cfrac{1}{3}$

![](img/grandnb/image4.png =800x center)

On suppose que les déplacements de la fourmi sont indépendants les uns des autres.

Pour tout entier naturel $k$, on note $X_{k}$ la variable aléatoire valant $1$ si la fourmi se déplace vers la droite au $k$-ième déplacement et valant $-1$ si elle se déplace vers la gauche.

On note $S_{n}=X_{1}+X_{2}+\ldots+X_{n}$ la variable aléatoire somme des $X_{k}$.

1. Calculer $E\left( X_{k} \right)$ et $V\left( X_{k} \right)$

2. En déduire $E\left( S_{n} \right)$ et $V\left( S_{n} \right)$.

3. Au bout de combien de déplacements, Sophie peut-elle espérer théoriquement atteindre la goûte de confiture ? Calculer $\sigma\left( S_{n} \right)$ dans ce cas.

---

1. On établit la loi de probabilité de $X_{k}$ :

$$
\begin{array}{|r|c|c|}\hline
	x_{i}                                  & - 1          & 1            \\\\ \hline
	\rule[-4mm]{0mm}{11mm}P(X_{k} = x_{i}) & \cfrac{1}{3} & \cfrac{2}{3} \\\\ \hline
\end{array}
$$

On a, pour l'espérance :

$$E\left(X_{k}\right)=-1\times\cfrac{1}{3}+1\times\cfrac{2}{3}=\cfrac{1}{3}$$

Et pour la variance :

$$V\left(X_{k}\right)=\cfrac{1}{3}\left(-1-\cfrac{1}{3}\right)^{2}+\cfrac{2}{3}\left(1-\cfrac{1}{3}\right)^{2}=\cfrac{8}{9}$$

2. On a : $S_{n} = X_{1} + X_{2} + \ldots + X_{n}$

Donc la variable aléatoire $S_{n}$ donne l'abscisse de la fourmi après $n$ déplacements.

On a, pour l'espérance :

$$
	\begin{array}{rcl}
		E(S_{n}) & = & E(X_{1} + X_{2} + \ldots + X_{n})       \\\\
		         & = & E(X_{1}) + E(X_{2}) + \ldots + E(X_{n}) \\\\
		         & = & nE\left( X_{k} \right)\qquad =\cfrac{n}{3}
	\end{array}
$$

Et pour la variance :

$$
\begin{array}{rcl}
	V(S_{n}) & = & V(X_{1} + X_{2} + \ldots + X_{n})                 \\\\
	         & = & V(X_{1}) + V(X_{2}) + \ldots + V(X_{n})           \\\\
	         &   & \text{(car les variables sont indépendantes)} \\\\
	         & = & nV\left( X_{k} \right)\qquad =\cfrac{8n}{9}
\end{array}
$$

3. $E(S_{n}) = 10\quad\iff\quad\cfrac{n}{3} = 10\quad\iff\quad n = 30$

Après $30$ déplacements, Sophie peut espérer théoriquement atteindre la goûte de confiture.

$\sigma\left(S_{30}\right)=\sqrt{V(S_{30})}=\sqrt{V(S_{30})}=\sqrt{\cfrac{8\times 30}{9}}\approx 5,2$ unités.
```

### Échantillon de la loi de Bernoulli

```admonish prop
Soit $\left(X_{1},X_{2},\ldots X_{n}\right)$ un échantillon de taille $n$ de la loi de Bernoulli de paramètre $p$.

La variable aléatoire $S=X_{1}+X_{2}+\ldots+X_{n}$ suit la loi binomiale de paramètres $n$ et $p$.
```

```admonish ex
En reprenant l'exemple des composants électroniques, on a $\ S=X_{1}+X_{2}+\ldots+X_{100}\ $ suit la loi binomiale de paramètres $n=100$ et $p=0,998$.
```

### Espérance, variance et écart-type de la loi binomiale

```admonish prop
Soit $S$ une variable aléatoire qui suit la loi binomiale de paramètres $n$ et $p$.

$$\boxed{E(S)=np}\qquad\boxed{V(S)=np(1-p)}\qquad\boxed{\sigma(S)=\sqrt{V(S)}}$$
```

```admonish demo
Soit $\left(X_{1},X_{2},\ldots X_{n}\right)$ un échantillon de taille $n$ de la loi de Bernoulli de paramètre $p$.

On rappelle que pour une variable aléatoire $X$ qui suit une loi de Bernoulli, on a :

$$\boxed{E(X)=p}\quad\text{et}\quad\boxed{V(X)=p(1-p)}$$

Donc, on a :


$$
\begin{array}{rcl}
	E(S) & = & E\left( X_1 + X_2 + \ldots+ X_n \right)                                        \\\\
	     & = & E\left( X_{1} \right) + E\left( X_{2} \right) + \ldots + E\left( X_{n} \right) \\\\
	     & = & p + p + \ldots + p = np
\end{array}
$$

$$
\begin{array}{rcl}
	V(S) & = & V\left( X_{1} + X_{2} + \ldots+ X_n \right)                                    \\\\
	     & = & V\left( X_{1} \right) + V\left( X_{2} \right) + \ldots + V\left( X_{n} \right) \\\\
	     &   & \ldots \text{car } X_1\ ,\ X_{2}\ ,\ \ldots\ X_n\ \text{sont indépendantes.}
\end{array}
$$

Donc : $V(S)=p(1-p)+p(1-p)+\ldots+p(1-p)=np(1-p)$
```

```admonish meth title="Méthode : Calculer l'espérance, la variance et l'écart-type pour une loi binomiale"
On lance $5$ fois de suite un dé à six faces.

On considère comme succès le fait d'obtenir $\dicefive$ ou $\dicesix$.

On considère la variable aléatoire $S$ donnant le nombre de succès.

:bulb: Calculer $E(S)$, $V(S)$ et $\sigma(S)$

---

La variable aléatoire $S$ suit la loi binomiale de paramètres $p=\cfrac{1}{3}$ et $n = 5$.

On a :

- $E(S) = 5 \times \cfrac{1}{3} = \cfrac{5}{3} \approx 1,7$
- $V(S) = 5 \times \cfrac{1}{3} \times \cfrac{2}{3} = \cfrac{10}{9}$
- $\sigma(S) = \sqrt{\cfrac{10}{9}} = \cfrac{\sqrt{10}}{3}$

En moyenne, on peut espérer obtenir environ $1,7$ fois un $\dicefive$ ou un $\dicesix$, en $5$ lancers.

Représentation de $\mathcal{B}\pa{5,\cfrac{1}{3}}$

![](img/grandnb/histo.png =400x center)
```
