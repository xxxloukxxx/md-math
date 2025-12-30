# Suites numériques

<!-- toc -->

## Définition et représentation graphique

### Définition d'une suite

```admonish ex
On considère une liste de nombres formée par tous les nombres impairs rangés dans l'ordre croissant : 1, 3, 5, 7, ...

On note $(u_{n})$ l'ensemble des "éléments" de cette suite de nombres tel que :

- $u_{0}=1$ : le premier terme de la suite
- $u_{1}=3$ : le 2$^{\text{ème}}$ terme
- $u_{2}=5$ : le 3$^{\text{ème}}$ terme
- $u_{3}=7$ ...

On a ainsi défini une suite numérique.
```

```admonish def
Une **suite** $\pa{u_n}$ est une **liste ordonnée de nombres** telle qu'à tout entier $n$, on associe un nombre réel noté $u_{n}$.

$$\pa{u_n}\ :\ n\longmapsto u_{n}$$

$u_{0}$, $u_{1}$, $u_{2}$, ... sont appelés les **termes** de la suite.

$n$ est appelé le **rang**.
```

### Suites définies en fonction de $n$ (forme explicite)

```admonish rem
Une suite peut être définie à l'aide d'une fonction $f$ :

$$
    \begin{array}{cll}
		\mathbb{N} & \longrightarrow & \R \\\\
		n          & \longmapsto     & f(n)=u_{n}\end{array}
$$
```

```admonish meth title="Méthode : Calculer des termes d'une suite définies en fonction de $n$"
Calculons les quatre premiers termes des suites suivantes :

$$u_{n}=2n\qquad\text{et}\qquad v_{n}=3n^{2} - 1$$

Les premiers termes de la suite $u_{\color{blue}{n}}=2\color{blue}{n}$ sont :

- $u_{\color{blue}{0}}=2 \times {\color{blue}{0}}=0$ $\quad\larr$ On remplace $\color{blue}n$ par $\color{blue}0$
- $u_{\color{blue}{1}}=2 \times {\color{blue}{1}}=2$ $\quad\larr$ On remplace $\color{blue}n$ par $\color{blue}1$
- $u_{\color{blue}{2}}=2 \times {\color{blue}{2}}=4$
- $u_{\color{blue}{3}}=...$

Les premiers termes de la suite $v_{\color{red}n}=3{\color{red}{n}}^{2} - 1$ sont :

- $v_{\color{red}0}=3 \times {\color{red}0}^{2} - 1=-1$
- $v_{\color{red}1}=3 \times {\color{red}1}^{2} - 1=2$
- $v_{\color{red}2}=3 \times {\color{red}2}^{2} - 1=11$
- $v_{\color{red}3}=...$
```

### Suites définies par récurrence

```admonish def
Dans ce cas, chaque terme de la suite s'obtient à partir du terme précédent.

On exprimei, en général, **$u_{n+1}$ en fonction de $u_{n}$**

En effet, les termes $\~u_n\~$ et $\~u_{n+1}\~$ se suivent.
```

```admonish meth title="Méthode : Calculer des termes d'une suite définie par récurrence"
Calculons les quatre premiers termes des suites suivantes :

$$
\pa{u_{n}}:\begin{cases}u_{0}=5\\\\u_{n+1}=3u_{n}	\end{cases}
\qquad\text{et}\qquad
\pa{v_{n}}: \begin{cases}v_{0}=3\\\\v_{n+1}=4v_{n}-6\end{cases}
$$

La suite $(u_{n})$ est définie par $u_{0}=5$ et pour tout entier $n$, on a :

$$u_{n+1}=3u_{n}$$

Les premiers termes de cette suite sont donc :

- ${\color{blue}u_{0}}={\color{blue}5}$
- ${\color{red}u_{1}}=3 \times {\color{blue}{u_{0}}}=3 \times {\color{blue}5}={\color{red}15}$ $\quad\larr$ On remplace $u_{0}$ par sa valeur.
- ${\color{green!30!black!70}u_{2}}=3 \times {\color{red}u_{1}}=3 \times {\color{red}15}={\color{green!30!black!70}45}$
- ${\color{purple}u_{3}}=3 \times {\color{green!30!black!70}u_{2}}=3 \times {\color{green!30!black!70}45}={\color{purple}135}$
- ...

La suite $(v_{n})$ est définie par $v_{0}=3$ et pour tout entier $n$, on a :

$$v_{n+1}=4v_{n}-6$$

Les premiers termes de cette suite sont donc :

- ${\color{blue}v_{0}}=\color{blue}{3}$
- ${\color{red}v_{1}}=4 \times {\color{blue}v_{0}} - 6=4 \times {\color{blue}3} - 6={\color{red}6}$
- ${\color{green!30!black!70}v_{2}}=4 \times {\color{red}v_{1}} - 6=4 \times {\color{red}6} - 6={\color{green!30!black!70}18}$
- ${\color{purple}v_{3}}=4 \times {\color{green!30!black!70}v_2} - 6=4 \times {\color{green!30!black!70}18} - 6={\color{purple}{66}}$

```

```admonish rem
Contrairement à une suite définie en fonction de $n$, il n'est pas possible de calculer, par ex., $u_{13}$ sans connaître $u_{12}$ pour une suite définie par récurrence.

Cependant, il est possible d'écrire un algorithme avec Python calculant les termes successifs d'une suite définie par récurrence.
```

```admonish meth title="Méthode : Calculer un terme à l'aide d'un algorithme"
Pour tout entier $n$, on donne :

$$\pa{u_{n}}:\begin{cases}u_{0}=3\\\\u_{n+1}={4u}_{n} - 6\end{cases}$$

Le programme en python suivant calcule les termes de la suite $(u_n)$ :

~~~python
def suite(n):
  u=3
  for i in range(1,n+1):
    u=4*u-6
  return u
~~~

Résultat :

~~~python
>>> suite(2)      # Calcul de u2
18
>>> suite(33)     # Calcul de u33
73786976294838206466
~~~
```

### Représentation graphique d'une suite

```admonish meth title="Méthode : Représenter graphiquement une suite"
Pour tout entier $n$, on donne : $u_{n} =\cfrac{n^{2}}{2}-3$.

On désire représenter dans un repère les premiers termes de $(u_n)$.

$$
\begin{array}{|r|c|c|c|c|c|c|c|c|c|}\hline
	n     & 0  & 1    & 2  & 3   & 4 & 5   & 6  & 7    & 8  \\\\ \hline
	u_{n} & -3 & -2,5 & -1 & 1,5 & 5 & 9,5 & 15 & 21,5 & 29 \\\\ \hline
\end{array}
$$

Dans un repère du plan, on représente la suite $(u_{n})$ par **un nuage de points de coordonnées $\pa{ n;u_{n} }$**.

![](img/suite/01.png =450x center)
```

## Sens de variation d'une suite

```admonish ex
On a représenté ci-contre le nuage de points des premiers termes d'une suite $(u_{n})$ :

![](img/suite/02.png =450x center)

On observe que cette suite semble **croissante**.

On constate par ex. que $u_{1}\lt u_{2}$ ou encore $u_{4}\lt u_{5}$.

De manière générale, on pourrait écrire $\quad\boxed{u_{n}\lt u_{n+1}}\quad$ dans le cas où la suite est croissante.
```

### Propriété

```admonish prop
- La suite $(u_{n})$ est **croissante** signifie que, pour tout $n\in\N$, on a :

  $$\boxed{u_{n+1} \geqslant u_{n}}$$

- La suite $(u_{n})$ est **décroissante** signifie que, pour tout $n\in\N$, on a :

  $$\boxed{u_{n+1} \leqslant u_{n}}$$

![](img/suite/03.png =750x center)
```

```admonish rem
- Pour une suite **constante**, on a $\ u_{n+1}=u_{n}$
- Lorsqu'on a $\ u_{n+1}{\ \gt\ }u_{n}\ $, on dit que $\pa{u_n}$ est **strictement** croissante.
- Lorsqu'on a $\ u_{n+1}{\ \lt\ }u_{n}\ $, on dit que $\pa{u_n}$ est **strictement** décroissante.
```

### Méthode

```admonish meth title="Méthode : Étudier les variations d'une suite"
Pour tout $n\in\N$, on donne les suites :

$$u_{n+1}=u_{n}+2\quad\text{et}\quad v_{n}=4n+4$$

Démontrons que les suites $(u_{n})$ et $(v_{n})$ sont **croissantes**.

Pour cela, il faut étudier le signe de $u_{n+1} - u_n$.

- Si $\ u\_{n+1}-u_n \gt 0\quad\iff\quad u_{n+1} \gt u_n\quad\iff\quad\pa{u_n}\quad$ **croissante**
- Si $\ u\_{n+1}-u_n \lt 0\quad\iff\quad u_{n+1} \lt u_n\quad\iff\quad\pa{u_n}\quad$ **décroissante**

---

- Pour $\pa{u_n}$, on a :

  $$
  	\begin{array}{clll}
  		     & u_{n+1}         & = & u_{n}+2     \\\\
  		\iff & u_{n+1} - u_{n} & = & 2\qquad > 0
  	\end{array}
  $$

  On en déduit que $(u_{n})$ est **croissante**.

---

- Pour $\pa{v_n}$, on a :

  $$
  	\begin{array}{cll}
  		v_{n+1} & = & 4(n+1)+4          \\\\
  		        & = & 4n+4+4\qquad=4n+8
  	\end{array}
  $$

  Calculons la différence $\pa{v_{n+1}-v_{n}}$ :

  $$
  \begin{array}{clllll}
  	\pa{v_{n+1}-v_{n}} & = & (4n+8) & - & (4n+4)         \\\\
  	\                  & = & 4n+8   & - & 4n-4\qquad=4>0
  \end{array}
  $$

  Pour tout $n$ entier, on $\ \pa{v_{n+1} - v_{n}}\gt 0\ $, on en déduit que la suite $(v_{n})$ est **croissante**.
```
