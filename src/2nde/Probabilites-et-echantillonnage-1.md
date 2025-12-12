# Probabilités

<!-- toc -->

## Vocabulaire : Expérience aléatoire, issue, univers, ...

### Expérience aléatoire

```admonish def
Une expérience est dite **aléatoire** lorsque l'on ne peut pas prévoir l'issue de cette expérience.
```

```admonish ex
Expérience aléatoire : "Lancer cette roue"

![](img/proba/01.png =300x center)
```

### Vocabulaire

```admonish def
- **Issue** : Un résultat de l'expérience aléatoire
  - $50$ ; $1000$ ou $\text{Jackpot}$ ...

- **Univers** : L'ensemble de toutes les issues possibles
  - $\Omega=\lbrace \text{LOSE} ; 50 ; 100 ;... ;1000 ;\text{JACKPOT}\rbrace$

- **Événement** : Un ensemble d'issues
  - $A$ : "Obtenir moins de 450€" $\ \Rarr A=\lbrace \text{LOSE} ;50 ;100 ;200 ;300\rbrace$
```

```admonish ex

![](img/proba/02.png =300x center)

- **Expérience aléatoire** : "Choisir, au hasard, une lettre dans l'alphabet"
  - $\Omega =\lbrace A;B;C;D;E;F;G;H;...;X;Y;Z\rbrace$

- $E_1=\lbrace A;E;I;O;U\rbrace$ est un **événement**.

En français, cet événement se traduit par : $E_1:$ "La lettre choisie est une voyelle"

- $E_2=\lbrace K;W;X;Y;Z\rbrace$ est un autre **événement**.

Ce second événement se traduit par : $E_2:$ "La lettre choisie vaut 10 pts"
```

```admonish rem
- Évènement **impossible** :
  - L'évènement impossible est l'ensemble vide noté $\varnothing$.

- Évènement **certain** :
  - L'évènement certain est l'univers $\Omega$.
  - Toutes les issues le réalisent.
```

```admonish ex

![](img/proba/03.png =100x center)

- Expérience aléatoire : "Lancer un dé"
- Univers : $\Omega=\lbrace 1;2;3;4;5;6\rbrace$
- Événements :
  - $A$ : "Obtenir un nombre pair" $\quad\rarr A :\lbrace 2\ ;\ 4 ;\ 6\rbrace$
  - $B$ : "Obtenir un nombre $\gt 4$" $\quad\rarr B :\lbrace  5\ ;\ 6\rbrace$
- Événement **certain** : "Obtenir un nombre entre $1$ et $6$"
- Événement **impossible** : "Obtenir $7$"
```

## Calcul de probabilités

### Loi de probabilité

```admonish def
Définir une **loi de probabilité** d'une expérience aléatoire, c'est associer chaque issue à sa probabilité.
```

```admonish ex
- Exp. aléatoire : "Lancer un dé"
- Univers : $\Omega=\lbrace 1;2;3;4;5;6\rbrace$

On a :

$$
\begin{array}{|c|c|c|c|c|c|c|}\hline
	e_i    & 1           & 2           & 3           & 4           & 5           & 6           \\\\ \hline
	P(e_i) & \cfrac{1}{6} & \cfrac{1}{6} & \cfrac{1}{6} & \cfrac{1}{6} & \cfrac{1}{6} & \cfrac{1}{6}\\\\ \hline
\end{array}
$$
```

```admonish prop
$$\boxed{P(e_1)+P(e_2)+...+P(e_n)=1}$$
```

```admonish ex
Une urne contient $10$ boules ($3$ rouges, $2$ vertes, $5$ noires)

![](img/proba/04.png =200x center)

- **Exp. aléatoire** : «  On tire une boule et on note **sa couleur** »
- **Univers** : $\Omega :{ \text{\color{Red}{Rouge}} ; \text{\color{green}{Verte}} ; \text{\color{Black}{Noire}} }$
- **Loi de probabilité** :

$$
\begin{array}{|c|c|c|c|}\hline
	e_i    & \text{\color{Red}{Rouge}} & \text{\color{green}{Verte}} & \text{\color{Black}{Noire}} \\\\ \hline
	P(e_i) & \cfrac{3}{10}=0.3         & \cfrac{2}{10}=0.2           & \cfrac{5}{10}=0.5           \\\\ \hline
\end{array}
$$
```

### Équiprobabilité

```admonish def
On dit qu'il y a **équiprobabilité** (ou que la situation est **équiprobable**) si la probabilité de chaque issue est **égale**.

$$P(e_1)=P(e_2)=...=P(e_n)$$
```

```admonish ex
- Exp. aléatoire : "Lancer un dé **non truqué**"
- Univers : $\Omega=\lbrace 1\ ;\ 2;\ 3;\ 4;\ 5;\ 6\rbrace$

On a : $\quad P(\text{"1"})=P(\text{"2"})...=P(\text{"6"})=\cfrac{1}{6}$

C'est une situation d'**équiprobabilité**.
```

```admonish ex
- "Lancer une piece non truquée"
- "Choisir une carte au hasard"
- ...
```

### Probabilité d'un événement

```admonish prop
La probabilité d'un événement est la **somme** des probabilités des issues qui le composent.
```

```admonish ex
Si $\quad A:\lbrace e_1;e_3;e_7\rbrace\quad$ alors $\quad P(A)=P(e_1 )+P(e_3)+P(e_7)$
```

```admonish ex
- Exp. aléatoire : "Lancer un dé"
- Univers : $\Omega=\lbrace 1;2;3;4;5;6\rbrace$
- Événements :
  - $A$ : "Obtenir un nombre pair"$\quad\rarr A:\lbrace 2\ ;\ 4\ ;\ 6\rbrace$
  - $B$ : "Obtenir un nombre strictement supérieur à 4"$\quad\rarr B:\lbrace 5\ ;\ 6\rbrace$

On a :

- $P(A)=P(\text{"2"})+P(\text{"4"})+P(\text{"6"})\quad=\cfrac{1}{6}+\cfrac{1}{6}+\cfrac{1}{6}\quad=\cfrac{3}{6}$
- $P(B)=P(\text{"5"})+P(\text{"6"})\quad=\cfrac{1}{6}+\cfrac{1}{6}\quad=\cfrac{2}{6}$
```

### Propriétés

```admonish prop
- La probabilité de l'évènement **certain** $\Omega$ est : $\quad\boxed{P(\Omega) = 1}$
- La probabilité de l'évènement **impossible** est : $\quad\boxed{P(\varnothing) = 0}$
- Pour tout évènement $A$ on a : $\quad\boxed{0 \leq P(A) \leq 1}$
```

## Intersection, réunion, évènement contraire

```admonish ex
- Exp. aléatoire : "Lancer un dé" $\ \rarr\ $ Univers : $\Omega=\lbrace 1;2;3;4;5;6\rbrace$
- Événements :
  - $A$ : "Obtenir un nombre pair"$\quad\rarr A:\lbrace 2\ ;\ 4\ ;\ 6\rbrace$
  - $B$ : "Obtenir un nombre strictement supérieur à 4"$\quad\rarr B:\lbrace 5\ ;\ 6\rbrace$

On a :

- L'événement **contraire** de $A$ :
  - $\bar{A}: $ "Obtenir un nombre impair" $\quad\rarr\bar{A}:\lbrace 1;3;5\rbrace$

- L'**intersection** de $A$ et de $B$ :
  - $A \cap B: $ "Obtenir un nombre pair $\boxed{\text{et}}$ >4" $\quad\rarr A \cap B:\lbrace 6\rbrace$

- L'**union** de $A$ et de $B$ :
  - $A \cup B: $ "Obtenir un nombre pair $\boxed{\text{ou}}$ >4" $\quad\rarr A \cup B:\lbrace 2;4;5;6\rbrace$
```

```admonish ex
![](img/proba/05.png =300x center)

On tire une boule dans l'urne ci-dessus, et on note le nombre inscrit.

- $\Omega=\lbrace 1\ ;\ 2\ ;\ 3\ ;\ 4\rbrace$
- Événements :
  - $A$ : "Tirer une boule n°1 ou n°2"$\quad\rarr A:\lbrace 1\ ;\ 2\rbrace$
  - $C$ : "Tirer une boule n°1 ou n°3"$\quad\rarr B:\lbrace 1\ ;\ 3\rbrace$

On a :

- $\bar{A} : \lbrace 3\ ;\ 4\rbrace\quad\rarr$ Les issues de $\Omega$ qui **ne** sont **pas** dans $A$.
- $A\cap C : \lbrace 1\rbrace\quad\rarr$ Les issues **en commun** de $A$ et $C$.
- $A\cup C : \lbrace 1\ ;\ 2\ ;\ 3\rbrace\quad\rarr$ La réunion de $A$ et $C$.

On peut représenter la situation à l'aide d'un diagramme de **Venn**

![](img/proba/06.png =800x center)

$$\bar{A}:\lbrace 3;4\rbrace\qquad A\cap C:\lbrace 1\rbrace\qquad A\cup C:\lbrace 1;2;3\rbrace$$
```

### Probabilité événement contraire et union d'événements

```admonish prop
- La probabilité de l'événement **contraire** de $A$ est : $$\boxed{P\pa{\bar{A}}=1-P(A)}$$

- La probabilité de l'**union** de $A$ et de $B$ est : $$\boxed{P(A\cup B)=P(A)+P(B)-P(A\cap B)}$$
```

```admonish ex
On tire une boule dans l'urne ci-dessous, et on note le nombre inscrit.

![](img/proba/05.png =300x center)

On a :

- $\Omega=\lbrace \boxed{1};\boxed{2};\boxed{3};\boxed{4}\rbrace$
- Loi de probabilité :

$$
\begin{array}{|c|c|c|c|c|}\hline
	e_i    & \boxed{1}         & \boxed{2}         & \boxed{3}          & \boxed{4}          \\\\ \hline
	P(e_i) & \cfrac{2}{8}=0.25 & \cfrac{2}{8}=0.25 & \cfrac{3}{8}=0.375 & \cfrac{1}{8}=0.125 \\\\ \hline
\end{array}
$$

Soit $B$ : "Obternir $\boxed{2}$ ou $\boxed{4}$"$\quad\rarr B:\lbrace \boxed{2}\ ;\ \boxed{4}\rbrace$

On a :

$$
\begin{array}{rccccc}
	P(B) & = & P(\boxed{2}) & + & P(\boxed{4})&                          \\\\
	     & = & \cfrac{2}{8} & + & \cfrac{1}{8}&=\cfrac{3}{8}=0.375
\end{array}
$$

Et :

$$P(\bar{B})=1-P(B)=1-0.375=0.625$$

---

**Vérification :**

$B$ : "Obternir $\boxed{2}$ ou $\boxed{4}$"$\quad\rarr B:\lbrace \boxed{2}\ ;\ \boxed{4}\rbrace$

Donc, on a :

$\bar{B}$ : "Obternir $\boxed{1}$ ou $\boxed{3}$"$\quad\rarr \bar{B}:\lbrace \boxed{1}\ ;\ \boxed{3}\rbrace$

$$
\begin{array}{rccccc}
	P(\bar{B}) & = & P(\boxed{1}) & + & P(\boxed{3}) &                     \\\\
	           & = & \cfrac{2}{8} & + & \cfrac{3}{8} & =\cfrac{5}{8}=0.625
\end{array}
$$
```

```admonish ex
On tire une boule dans l'urne ci-dessous, et on note le nombre inscrit.

![](img/proba/05.png =300x center)

Soit $A:\lbrace \boxed{1};\boxed{2}\rbrace\quad$ et $\quad C:\lbrace \boxed{1};\boxed{3}\rbrace$

On a :

- $P(A)=P(\boxed{1})+P(\boxed{2})\quad=\cfrac{2}{8}+\cfrac{2}{8}\quad=\cfrac{4}{8}$
- $P(C)=P(\boxed{1})+P(\boxed{3})\quad=\cfrac{2}{8}+\cfrac{3}{8}\quad=\cfrac{5}{8}$
- $P(A\cap C)=P(\boxed{1})\quad=\cfrac{2}{8}$

Donc, on a :

$$
\begin{array}{rccccccc}
	P(A\cup C) & = & P(A)         & + & P(C)         & - & P(A\cap C)   &               \\\\
	           & = & \cfrac{4}{8} & + & \cfrac{5}{8} & - & \cfrac{2}{8} & =\cfrac{7}{8} \\\\
\end{array}
$$

---

**Vérification :**

$A:\lbrace \boxed{1};\boxed{2}\rbrace\quad$ et $\quad C:\lbrace \boxed{1};\boxed{3}\rbrace\quad$ Donc $\quad A\cup C:\lbrace \boxed{1};\boxed{2};\boxed{3}\rbrace$

Donc, on a :

$$
\begin{array}{rccccccc}
	P(A\cup C) & = & P(\boxed{1}) & + & P(\boxed{2}) & + & P(\boxed{3}) &                   \\\\
	           & = & \cfrac{2}{8} & + & \cfrac{2}{8} & + & \cfrac{3}{8}&=\cfrac{7}{8}
\end{array}
$$
```
