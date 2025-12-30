# Suites arithmétiques / géométriques

<!-- toc -->

## Suites arithmétiques

### Définition : Suite arithmétique

```admonish ex
Considérons la suite $(u_{n})$ où l'on passe d'un terme au suivant en **ajoutant** $5$.

Si le premier terme est égal à $3$, les termes suivants sont :

- $u_{0} = 3$
- $u_{1} = 8$
- $u_{2} = 13$
- $u_{3} = 18$

Une telle suite est appelée une suite **arithmétique** de raison $5$ et de premier terme $3$.

La suite est définie par $\pa{u_n}:\begin{cases}u_{0} = 3\\\\u_{n + 1} = u_{n} + 5\end{cases}$
```

```admonish ex
Soit la suite **arithmétique** $(v_{n})$ de premier terme $5$ et de raison $-2$.

Les premiers termes successifs sont :

- $v_{0}=5$
- $v_{1}=5-2 = 3$
- $v_{2}=3-2 = 1$
- $v_{3}=1-2 = -1$

La suite est donc définie par $(v_n):\begin{cases}v_{0} = 5 \\\\ v_{n + 1} = v_{n}-2\end{cases}$
```

```admonish def
Une suite $(u_{n})$ est une **suite arithmétique** s'il existe $r\in\R$ tel que pour tout $n\in\N$, on a :

$$\boxed{u_{n + 1} = u_{n} + r}$$

Le nombre $r$ est appelé **raison** de la suite.

![](img/arith-geo/03b.png =700x center)
```

```admonish ex
$$
\begin{array}{ccc}
	(u_n):\begin{cases}u_{0} = 10\\\\u_{n + 1} = u_{n}\color{red}{+3}\end{cases}  &\qquad
	(v_n):\begin{cases}v_{0} = -15\\\\v_{n + 1} = v_{n}\color{red}{-6}\end{cases} &\qquad
	(w_n):\begin{cases}w_{0} = 300\\\\w_{n + 1} = w_{n}\color{red}{+2.1}\end{cases}
\end{array}
$$

![](img/arith-geo/03a.png =700x center)
```

### Variations : Suite arithmétique

```admonish prop
$(u_{n})$ est une suite **arithmétique** de raison $r$.

- Si $r\gt 0$ alors la suite $(u_{n})$ est **croissante**.
- Si $r = 0$ alors la suite $(u_{n})$ est **constante**.
- Si $r\lt 0$ alors la suite $(u_{n})$ est **décroissante**.
```

```admonish demo
$u_{n + 1}-u_{n} = u_{n} + r - u_{n} = r$.

- Si $\ r > 0\ $ alors $\ u*{n + 1} - u*{n} > 0\ $ et la suite $\ (u\_{n})\ $ est **croissante**.
- Si $\ r \lt 0\ $ alors $\ u*{n + 1} - u*{n} \lt 0\ $ et la suite $\ (u\_{n})\ $ est **décroissante**.
```

```admonish meth title="Méthode : Déterminer le sens de variation d'une suite arithmétique"
Étudier les variations des suites arithmétiques $(u_{n})$ et $(v_{n})$ définies par :

$$u_{n} = 3 + 5n\qquad\text{et}\qquad(v_n):\begin{cases}v_{0} = -3 \\\\ v_{n + 1} = v_{n}-4\end{cases}$$

---

- Soit $u_{n} = 3 + 5n$. En calculant quelques termes de $(u_n)$, on a :

  |  $n$  | $0$ | $1$ | $2$  | $3$  | $4$  | $5$  | $...$ |
  | :---: | :-: | :-: | :--: | :--: | :--: | :--: | :---: |
  | $u_n$ | $3$ | $8$ | $13$ | $18$ | $23$ | $18$ | $...$ |

  Donc la suite $(u_{n})$ est une suite **arithmétique croissante** de raison $r=5$ positive.

- Soit la suite $(v_n)$ définie par $\begin{cases}v_{0} = -3 \\\\ v_{n + 1} = v_{n}\color{red}{-4}\end{cases}$

  On passe d'un terme au suivant en ajoutant $-4$.

  Donc $(v_{n})$ une suite **arithmétique décroissante** de raison $r=-4$ négative.
```

### Représentation graphique

```admonish prop Les points de la représentation graphique d'une suite arithmétique sont **alignés**.

```

```admonish ex
On a représenté ci-dessous la suite de raison $-0.5$ et de premier terme $4$.

![](img/arith-geo/04.png =700x center)
```

### Expression du terme général d'une suite arithmétique

```admonish prop
Soit $(u_{n})$, une suite **arithmétique** de raison $r$. On a :

$$\boxed{u_{n}=u_0+n\times r}$$

![](img/arith-geo/07.png =700x center)
```

```admonish rem
On a aussi : $\quad u_{n}=u_{\textcolor{blue}{1}}+(n-\textcolor{blue}{1})\times r$
```

```admonish ex
Considérons une suite définie par : $\quad u_{n+1}=u_{n}-3\quad\text{et}\quad u_0=10$

$(u_n)$ est une **suite arithmétique** de raison $r=(-3)$

$$
	\begin{array}{|c|c|c|c|c|c|c|c|c|c|c}\hline
		n   & 0  & 1 & 2 & 3 & 4  & 5  & 6  & ... & \textcolor{red}{17} & ... \\\\ \hline
		u_n & 10 & 7 & 4 & 1 & -2 & -5 & -8 & ... & -41                 & ... \\\\ \hline
	\end{array}
$$

On a :

$${u_n=u_0+n\times r\quad\iff\quad \boxed{u_n=10-3n}}$$

Avec cette expression, on a :

$$u_{\textcolor{red}{17}}=\quad 10-3\times \textcolor{red}{17}\quad=10-51\quad=(-41)$$
```

```admonish note title="Suite arithmétique"
![](img/arith-geo/05.png =800x center)
```

## Suites géométriques

### Définition : Suite géométrique

```admonish ex
Considérons la suite $(u_{n})$ où l'on passe d'un terme au suivant en **multipliant** par $2$.

Si le premier terme est égal à $5$, les termes suivants sont :

$$u_{0} = 5\qquad u_{1} = 10\qquad u_{2} = 20\qquad u_{3} = 40\qquad ...$$

Une telle suite est appelée une suite **géométrique** de raison $2$ et de premier terme $5$.

La suite $(u_n)$ est donc définie par $\begin{cases}u_{0} = 5 \\\\u_{n + 1} = 2u_{n}\end{cases}$
```

```admonish ex
Soit la suite numérique $(v_{n})$ de premier terme $4$ et de raison $0.1$

Les premiers termes successifs sont :

- $v_{0}=4$
- $v_{1}=0.1 \times 4 = 0.4$
- $v_{2}=0.1 \times 0.4 = 0.04$
- $v_{3}=0.1 \times 0.04 = 0.004$

La suite $(v_n)$ est donc définie par $\begin{cases}v_{0} = 4 \\\\ v_{n + 1} = 0.1 \times v_{n}\end{cases}$
```

```admonish def
Une suite $(u_{n})$ est une **suite géométrique** s'il existe un nombre $q$, **strictement positif**, tel que pour tout $n\in\N$, on a :

$$\boxed{u_{n + 1} = u_{n}\times q}$$

Le nombre $q$ est appelé **raison** de la suite.

![](img/arith-geo/08b.png =700x center)
```

```admonish rem
Dans le cas où $q \lt  0$, la suite est également géométrique mais cette situation n'est pas au programme cette année.
```

```admonish ex
$$
\begin{array}{ccc}
	(u_n):\begin{cases}u_{0} = 2\\\\     u_{n + 1} = \textcolor{red}{7}\times u_{n}\end{cases}                     & \qquad
	(v_n):\begin{cases}v_{0} = 1\ 500\\\\v_{n + 1} = \textcolor{red}{\cfrac{2}{5}}\times v_{n}\end{cases} & \qquad
	(w_n):\begin{cases}w_{0} = 300\\\\   w_{n + 1} = \textcolor{red}{0.4}\times w_{n}\end{cases}
\end{array}
$$

![](img/arith-geo/08a.png =700x center)
```

```admonish ex
On place un capital de $500$€ sur un compte dont les intérêts annuels s'élèvent à $4\\%$.

Chaque année, le capital est donc multiplié par $1.04$.

Ce capital suit une **progression géométrique** de raison $1.04$.

On a ainsi :

- $u_{1} = 1.04 \times 500 = 520$
- $u_{2} = 1.04 \times 520 = 540.80$
- $u_{3} = 1.04 \times 540.80 = 562,432$

De manière générale : $\boxed{u_{n + 1} = 1.04 \times u_{n}}$ avec $u_{0} = 500$
```

### Variations : Suite géométrique

```admonish prop
Soit $(u_{n})$ est une suite **géométrique** de raison $q$ et de premier terme $u_{0}$ **strictement positif**.

- Si $\quad q\gt 1\quad$ alors la suite $(u_{n})$ est **croissante**.
- Si $\quad q=1\quad$ alors la suite $(u_{n})$ est **constante**.
- Si $\quad 0\lt q\lt 1\quad$ alors la suite $(u_{n})$ est **décroissante**.
```

```admonish meth title="Méthode : Déterminer le sens de variation d'une suite géométrique"
Déterminer le sens de variation des suites géométriques $(u_{n})$ et $(v_{n})$ définies par :

$$\begin{array}{ccc}u_{n} = 4 \times 2^{n}&\quad\text{et}\quad&(v_n):\begin{cases}v_{0} = 2 \\\\v_{n + 1} = \cfrac{1}{2}\times v_{n}\end{cases}\end{array}$$

- Soit $u_{n} = {4 \times 2}^{n}$. En calculant quelques termes de $(u_n)$, on a :

  |  $n$  | $0$ | $1$ | $2$  | $3$  | $4$  |  $5$  | $...$ |
  | :---: | :-: | :-: | :--: | :--: | :--: | :---: | :---: |
  | $u_n$ | $4$ | $8$ | $16$ | $32$ | $64$ | $128$ | $...$ |

  La suite $(u_{n})$ est géométrique et croissante de car $q = 2 > 1$.

- Soit la suite $(v_{n})$ définie par $\begin{cases}v_{0} = 2 \\\\ v_{n + 1} ={\color{red}\cfrac{1}{2}}\times v_{n}\end{cases}$

  $(v_n)$ est **décroissante** car $q ={\color{red}\cfrac{1}{2}}$ est compris entre $0$ et $1$.

  Calcul de quelques termes :

  |  $n$  | $0$ | $1$ |  $2$  |  $3$   |   $4$   | $...$ |
  | :---: | :-: | :-: | :---: | :----: | :-----: | :---: |
  | $u_n$ | $2$ | $1$ | $0.5$ | $0.25$ | $0.125$ | $...$ |

  On a représenté ci-contre la suite $(v_n)$.

![](img/arith-geo/09tt.png =400x center)
```

### Expression du terme général d'une suite géométrique

```admonish prop

Soit $(u_{n})$, une suite **géométrique** de raison $q$. On a :

$$\boxed{u_{n}=u_0\times q^n}$$

![](img/arith-geo/10.png =700x center)
```

```admonish rem
On a aussi : $\quad u_{n}=u_{\textcolor{blue}{1}}\times q^{(n-\textcolor{blue}{1})}$
```

```admonish ex
Considérons une suite définie par : $\quad u_{n+1}=u_{n}\times 0.25\quad\text{et}\quad u_0=100$

$(u_n)$ est une **suite géométrique** de raison $q=0.25$

$$
	\begin{array}{|c|c|c|c|c|c|c|c|c}\hline
		n   & 0   & 1  & 2    & 3      & 4        & ... & \textcolor{red}{7} & ... \\\\ \hline
		u_n & 100 & 25 & 6.25 & 1.5625 & 0.390625 & ... & 0.0061...          & ... \\\\ \hline
	\end{array}
$$

On a :

$$u_n=u_0\times q^{n}\quad\iff\quad \boxed{u_n=100\times 0.25^{n}}$$

Avec cette expression :

$$u_{\textcolor{red}{7}}=\quad 100\times 0.25^{\textcolor{red}{7}}\quad\approx 0.0061$$
```

```admonish note title="Suite géométrique"
![](img/arith-geo/06.png =800x center)
```
