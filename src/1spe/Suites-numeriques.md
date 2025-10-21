# Suites numériques

<!-- toc -->

## Définition et propriétés

```admonish ex
On considère une liste de nombres impairs : $1, 3, 5, 7, \dots$

On note $u_{n}$ l'ensemble des "éléments" de cette suite de nombres tel que :

$$u_0=1\quad ;\quad u_1=3\quad ;\quad u_2=5\quad ;\quad u_3=7 , \ldots$$

On a ainsi défini une **suite numérique**.

On peut lui associer une fonction définie sur $\N$ par $u$ :

$$
\begin{array}{ccc}
	\N & \mapsto & \R         \\\\
	n  & \mapsto & u(n)=u_{n}
\end{array}
$$
```

```admonish def
Une **suite numérique** $(u_{n})$ est une liste **indexée** de nombres telle qu'à tout entier $n$ on associe un réel noté $u_{n}$.

$u_{n}$ est appelé **le terme de rang** $n$ de cette suite (ou d'indice $n$).
```

```admonish ex
Soit $(u_n)$ définie pour $n>0$ tel que :

$$
\begin{array}{|c|c|c|c|c|c|c|c|}\hline
	1   & 2   & 3   & 4   & 5   & 6   & 7   & \ldots \\\\ \hline
	0.1 & 0.1 & 0.2 & 0.3 & 0.5 & 0.8 & 1.3 & \ldots \\\\ \hline
\end{array}
$$

Le terme de rang $5$ est $u_5$ et il vaut $0.8$. $\quad$ on note $u_5=0.8$
```

### Suite numérique définie "explicitement"

```admonish def
Lorsque l'on définie une suite "explicite", chaque terme de la suite est exprimé en fonction de $n$ et **indépendamment des termes précédents**.
```

```admonish ex
Pour tout $n$ de $\N$, on donne : $u_{n}=2\times \tc{red}{n}$

$$
\begin{array}{rclcl}
	u_0 & = & 2 \times \tc{red}{0} & = & 0      \\\\
	u_1 & = & 2 \times \tc{red}{1} & = & 2      \\\\
	u_2 & = & 2 \times \tc{red}{2} & = & 4      \\\\
	u_3 & = & 2 \times \tc{red}{3} & = & \ldots
\end{array}
$$
```

```admonish ex
Pour tout $n$ de $\N$, on donne : $v_n=3\tc{red}{n}^2-1$

Les premiers termes de cette suite sont donc :

$$
\begin{array}{rclcl}
	v_0 & = & 3 \times \tc{red}{0}^2 - 1 & = & -1     \\\\
	v_1 & = & 3 \times \tc{red}{1}^2 - 1 & = & 2      \\\\
	v_2 & = & 3 \times \tc{red}{2}^2 - 1 & = & 11     \\\\
	v_3 & = & 3 \times \tc{red}{3}^2 - 1 & = & \ldots
\end{array}
$$
```

```admonish rem
$$\boxed{\text{Explicite}\quad\Rarr\quad\text{En fonction de }\tc{red}{n}}$$
```

### Suite numérique "récurrentes"

```admonish def
Lorsqu'on génère une suite par une **relation de récurrence**, chaque terme de la suite s'obtient à partir d'un (ou plusieurs) terme(s) précédent(s).
```

```admonish ex
On définit la suite $(u_{n})$ par :

$u_0 = 5\quad$ et chaque terme est le **triple** de son précédent

Les premiers termes de cette suite sont donc :

$$
\begin{array}{rclclcl}
	\tc{red}{u_0}    & = & \tc{red}{5}            &   &                              &   &                        \\\\
	\tc{blue}{u_1}   & = & 3\times \tc{red}{u_0}  & = & 3\times \tc{red}{5}   & = & \tc{blue}{15}   \\\\
	\tc{violet}{u_2} & = & 3\times \tc{blue}{u_1} & = & 3\times \tc{blue}{15} & = & \tc{violet}{45}
\end{array}
$$

De façon générale, on peut noter : $\quad\boxed{u_{n+1}=3\times u_{n}}$
```

```admonish ex
On définit la suite $(v_n)$ par :

$v_0 = 3\quad$ et pour tout $n$ de $\N$, $\quad v_{n+1}=4\times v_n-6$

Les premiers termes de cette suite sont donc :

$$
\begin{array}{rclclcl}
	\tc{red}{v_0}    & = & \tc{red}{3}                                                                                     \\\\
	\tc{blue}{v_1}   & = & 4\times\tc{red}{v_0}-6    & = & 4\times \tc{red}{3} - 6     & = & \tc{blue}{6}    \\\\
	\tc{violet}{v_2} & = & 4\times\tc{blue}{v_1}-6   & = & 4\times \tc{blue}{6} - 6    & = & \tc{violet}{18} \\\\
	\tc{green}{v_3}  & = & 4\times\tc{violet}{v_2}-6 & = & 4\times \tc{violet}{18} - 6 & = & \tc{green}{66}  \\\\
\end{array}
$$
```

```admonish rem
$$\boxed{\text{Récurrente}\quad\Rarr\quad u_{n+1}\text{ en fonction de }u_{n}}$$
```

### Représentation graphique d'une suite

```admonish note title="Représentation graphique d'une suite"
Dans un repère du plan, on représente une suite par un **nuage de points** de coordonnées $(n ; u_{n})$.
```

```admonish ex
Pour tout $\tc{red}{n}$ de $\N$, on donne : $\quad u_{n}= \cfrac{\tc{red}{n}^2}{2} - 3$

- Tableau de valeurs des termes de la suite :

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|c|c}\hline
	\tc{red}{n}     & 0  & 1    & 2                    & 3   & 4                   & 5   & 6  & 7    & 8  & \ldots \\\\ \hline
	u_{\tc{red}{n}} & -3 & -2.5 & \tc{blue}{-1} & 1.5 & \tc{magenta}{5} & 9.5 & 15 & 21.5 & 29 & \ldots \\\\ \hline
\end{array}
$$

On a, par exemple,

$$u_{\tc{red}{2}}=\cfrac{\tc{red}{2}^2}{2}-3 =2-3 = \tc{blue}{-1}\quad\text{ et }\quad u_{\tc{red}{4}}=\cfrac{\tc{red}{4}^2}{2}-3 = 8-3 = \tc{magenta}{5}$$

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|c|}\hline
	\text{Point}             & P_1 & P_2  & P_3 & P_4 & P_5 & P_6 & P_7 & P_8  & P_9 \\\\ \hline
	x=\tc{red}{n}     & 0   & 1    & 2   & 3   & 4   & 5   & 6   & 7    & 8   \\\\ \hline
	y=u_{\tc{red}{n}} & -3  & -2.5 & -1  & 1.5 & 5   & 9.5 & 15  & 21.5 & 29  \\\\ \hline
\end{array}
$$

![](img/suites/02.png =900x center)
```

## Suites arithmétiques

### Définition

```admonish def
Une suite $(u_{n})$ est une suite **arithmétique** s'il existe $\tc{green}{r}\in\R$ tel que, pour tout $n\in\N$, on a :

$$\boxed{u_{n+1}=u_{n}+\tc{green}{r}}$$

Le nombre $\tc{green}{r}$ est appelé **raison** de la suite.
```

```admonish rem
$$\boxed{\text{Suite arithmétique}\Rarr\text{On \underline{\textbf{ajoute}} toujours la même quantité}}$$
```

```admonish ex
Considérons une suite définie par : $\begin{cases}u_0=10\\\\u_{n+1}=u_{n}-3\end{cases}$

$(u_n)$ est une **suite arithmétique** de raison $(-3)$ et de terme initial $10$

$$
\begin{array}{rclclcl}
	\tc{red}{u_0}     & = & \tc{red}{10}        &                 &                   \\\\
	\tc{green}{u_1}   & = & \tc{red}{u_0}-3=    & \tc{red}{10}-3  & = & \tc{green}{7} \\\\
	\tc{blue}{u_2}    & = & \tc{green}{u_1}-3 = & \tc{green}{7}-3 & = & \tc{blue}{4}  \\\\
	\tc{magenta}{u_3} & = & \ldots              &                 &
\end{array}
$$
```

```admonish rem
![](img/suites/03.png =900x center)
```

### Variation d'une suite arithmétique

```admonish prop
Soit $(u_{n})$ est une suite **arithmétique** de raison $\tc{green}{r}$

- si $r>0$ alors la suite $(u_{n})$ est **croissante**.
- si $r=0$ alors la suite $(u_{n})$ est **constante**.
- si $r<0$ alors la suite $(u_{n})$ est **décroissante**.
```

```admonish ex
Soit $(u_{n})$ définie sur $\N$ par $\begin{cases}u_0=5\\\\u_{n+1}=u_{n}-4\end{cases}$

$(u_{n})$ est une **suite arithmétique** de raison $r=(-4)<0$ donc **décroissante**
```

### Représentation graphique d'une suite arithmétique

```admonish prop
Les points de la représentation graphique d'une **suite arithmétique** sont **alignés**.
```

```admonish ex
On a représenté la suite **arithmétique** de raison $(-0.5)$ et de terme initial $4$.

$$
\begin{array}{|c|c|c|c|c|c|c|c|c}\hline
	4 & 3.5 & 3 & 2.5 & 2 & 1.5 & 1 & 0.5 & \ldots \\\\ \hline
\end{array}
$$

![](img/suites/04.png =900x center)
```

### Expression du terme général d'une suite arithmétique

```admonish prop
Soit $u_{n}$, une suite **arithmétique** de raison $r$. On a :

$$\boxed{u_{n}=u_0+n\times r}$$

![](img/suites/05.png =900x center)
```

```admonish rem
On a aussi : $\quad u_{n}=u_{\tc{blue}{1}}+(n-\tc{blue}{1})\times r$
```

```admonish ex
Considérons une suite définie par : $\begin{cases}u_0=10\\\\ u_{n+1}=u_{n}-3\end{cases}$

$(u_n)$ est une **suite arithmétique** de raison $r=(-3)$

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|c}\hline
	n   & 0  & 1 & 2 & 3 & 4    & 5    & 6    & \tc{red}{7} & \ldots \\\\ \hline
	u_n & 10 & 7 & 4 & 1 & (-2) & (-5) & (-8) & (-11)              & \ldots \\\\ \hline
\end{array}
$$

On a :

$\quad u_n=u_0+n\times r\quad\Lrarr\quad \boxed{u_n=10-3n}$

Avec cette expression : $\quad u_{\tc{red}{7}}=\quad 10-3\times \tc{red}{7}\quad=10-21\quad=(-11)$
```

> ![](img/suites/06.png =900x center)

## Suites géométriques

### Définition

```admonish def
Une suite $u_{n}$ est une suite **géométrique** s'il existe $q\in\R$, **strictement positif**, tel que, pour tout $n\in\N$, on a :

$$\boxed{u_{n+1}=u_{n}\times \tc{blue}{q}}$$

Le nombre $\tc{blue}{q}$ est appelé **raison** de la suite.
```

```admonish rem
$$\boxed{\text{Suite géométrique}\Rarr\text{On \underline{\textbf{multiplie}} toujours par la même quantité positive}}$$
```

```admonish ex
Considérons une suite définie par : $\begin{cases}u_0=100\\\\u_{n+1}=0.5\times u_{n}\end{cases}$

$(u_n)$ est une **suite géométrique** de raison $r=0.5$

$$
\begin{array}{|c|c|c|c|c|c|c|c}\hline
	n   & 0   & 1  & 2  & 3    & 4    & 5     & \ldots \\\\ \hline
	u_n & 100 & 50 & 25 & 12.5 & 6.25 & 3.125 & \ldots \\\\ \hline
\end{array}
$$
```

```admonish rem
![](img/suites/07.png =900x center)
```

### Variation d'une suite géométrique

```admonish prop
Soit $(u_{n})$ est une suite **géométrique** de raison $\tc{blue}{q}$. Le sens de variation de $u_n$ dépend :

- de **la valeur** de $\tc{blue}{q}$
- du **signe** de $u_0$

> **Cas $u_0$ positif**
>
> |            $0<q<1$            |             $q>1$             |
> | :---------------------------: | :---------------------------: |
> |      $u_n$ décroissante       |       $u_n$ croissante        |
> | ![](img/suites/08a.png =300x center) | ![](img/suites/08b.png =300x center) |

> **Cas $u_0$ négatif**
>
> |            $0<q<1$            |             $q>1$             |
> | :---------------------------: | :---------------------------: |
> |       $u_n$ croissante        |      $u_n$ décroissante       |
> | ![](img/suites/08c.png =300x center) | ![](img/suites/08d.png =300x center) |
```

```admonish ex
Soit $(u_{n})$ définie sur $\N$ par : $\begin{cases}u_0=1\ 500\\\\u_{n+1}=u_{n}\times 0.8\end{cases}$

$(u_{n})$ est une **suite géométrique** de raison $q=0.8$

Donc $(u_{n})$ est **décroissante** car $q=0.8<1$ et $u_0=1500$ positif

$$
\begin{array}{|c|c|c|c|c|c|c|c}\hline
	n   & 0    & 1    & 2   & 3   & 4     & 5      & \ldots \\\\ \hline
	u_n & 1500 & 1200 & 960 & 768 & 614.4 & 491.52 & \ldots \\\\ \hline
\end{array}
$$
```

### Représentation graphique d'une suite géométrique

```admonish prop
Les points de la représentation graphique d'une **suite géométrique** ne sont pas **alignés**.
```

```admonish ex
On a représenté la suite **géométrique** de raison $0.5$ et de terme initial $5$.

$$u_{n+1}=0.5\times u_{n}\quad\text{et}\quad u_0=5$$

$$
\begin{array}{|c|c|c|c|c|c}\hline
	5 & 2.5 & 1.25 & 0.625 & 0.3125 & \ldots \\\\ \hline
\end{array}
$$

![](img/suites/09.png =500x center)
```

### Expression du terme général d'une suite géométrique

```admonish prop
Soit $u_{n}$, une suite **géométrique** de raison $q$. On a :

$$\boxed{u_{n}=u_0\times q^{n}}$$

![](img/suites/10.png =900x center)
```

```admonish rem
On a aussi : $\quad u_{n}=u_{\tc{blue}{1}}\times q^{(n-\tc{blue}{1})}$
```

```admonish ex
Considérons une suite définie par : $\begin{cases}u_0=100\\\\u_{n+1}=u_{n}\times 0.25\end{cases}$ 

$(u_n)$ est une **suite géométrique** de raison $q=0.25$

$$
\begin{array}{|c|c|c|c|c|c|c|c|c|c}\hline
	n   & 0   & 1  & 2    & 3      & 4        & 5            & 6            & \tc{red}{7}  & \ldots \\\\ \hline
	u_n & 100 & 25 & 6.25 & 1.5625 & 0.390625 & 0.0976\ldots & 0.0244\ldots & 0.0061\ldots & \ldots \\\\ \hline
\end{array}
$$

On a :

$\quad u_n=u_0\times q^{n}\quad\Lrarr\quad \boxed{u_n=100\times 0.25^{n}}$

Avec cette expression : $\quad u_{\tc{red}{7}}=\quad 100\times 0.25^{\tc{red}{7}}\quad\approx 0.0061$
```

> ![](img/suites/10a.png =900x center)

## Sens de variation d'une suite numérique

### Définition

```admonish def
Soit un entier $p$ et une suite numérique $(u_n)$

- La suite $(u_{n})$ est **croissante** à partir du rang $p$ signifie que pour $n\geq p$, on a :
  $$u_{n+1}\geq u_{n}$$

- La suite $(u_{n})$ est **décroissante** à partir du rang $p$ signifie que pour $n\geq p$, on a :
  $$u_{n+1}\leq u_{n}$$
```

```admonish ex
Dans cet exemple, $(u_n)$ est croissante $\quad$ (à partir de $n=3$)

![](img/suites/11.png =900x center)
```

```admonish meth title="Méthode : Étudier les variations d'une suite (1)"
Pour déterminer le sens de variation d'une suite, on peut étudier le signe de $(u_{n+1}-u_{n})$

- Si $(u_{n+1} - u_{n}) > 0$ alors $u_{n}$ est **croissante**
- Si $(u_{n+1} - u_{n}) < 0$ alors $u_{n}$ est **décroissante**
```

```admonish ex
Pour tout $n\in\N$, on donne la suite $(u_{n})$ définie par : $u_{n}=n^2-4n+4$

$u_{n+1}$ c'est lorsque l'on remplace $n$ par $n+1$ :

$\begin{aligned}
	u_{n+1} & =(n+1)^2-4(n+1)+4     \\\\
	        & =(n^2+2n+1) -(4n+4)+4 \\\\
	        & =n^2-2n+1
\end{aligned}$

Donc :

$\begin{aligned}
		u_{n+1} - u_{n} & = (n^2-2n+1)\quad - \quad(n^2-4n+4) \\\\
		                & = n^2-n^2-2n+4n+1-4                 \\\\
		                & = 2n-3
	\end{aligned}$

Signe de $(u_{n+1} - u_{n})$

$\begin{array}{rclc}
		(u_{n+1}-u_{n})\geq 0 & \Lrarr & 2n-3\geq 0                           \\\\
		                      & \Lrarr & 2n\geq 3                             \\\\
		                      & \Lrarr & n\geq \cfrac{3}{2}\quad\Lrarr n\geq2
	\end{array}$

Ainsi pour $n\geq 2$ (n est entier), on a $(u_{n+1}-u_{n})\geq 0$.

On en déduit qu'à partir du rang $2$ la suite $(u_{n})$ est **croissante**.
```

```admonish meth title="Méthode : Étudier les variations d'une suite (2)"
Pour déterminer le sens de variation d'une suite, on peut étudier $\left(\cfrac{u_{n+1}}{u_{n}}\right)$

- Si $\left(\cfrac{u_{n+1}}{u_{n}}\right) > 1$ alors $u_{n}$ est **croissante**
- Si $\left(\cfrac{u_{n+1}}{u_{n}}\right) < 1$ alors $u_{n}$ est **décroissante**
```

### Sens de variation de $u_{n}=f(n)$

```admonish prop
Soit une fonction $f$ définie sur $\left[0 ; +\infty\right[$.

Soit une suite $(u_{n})$ définie sur $\N$ par $u_{n}=f(n)$.

Soit un entier $p$.

- Si $f$ est **croissante** sur $\left[p ; +\infty\right[$, alors $(u_{n})$ est **croissante** à partir du rang $p$
- Si $f$ est **décroissante** sur $\left[p ; +\infty\right[$, alors $(u_{n})$ est **décroissante** à partir du rang $p$
```

```admonish meth title="Méthode : Étudier les variations d'une suite à l'aide de la fonction associée"
Étudions le sens de variation de $u_{n}=n^2-n+1$

On a $u_{n}=f(n)\quad$ avec $\quad f(x)=x^2-x+1$ (fonction du 2nd degré)

Le minimum de $f$ est atteint pour $x=\cfrac{(-b)}{2a}=\cfrac{-(-1)}{(2\times 1)}=\cfrac{1}{2}$ et $a=1>0$

![](img/suites/12.png =600x center)

Conclusion : $\quad u_{n}$ est **croissante** pour $n\geq 1$
```

```admonish rem
La réciproque de la propriété énoncée plus haut est fausse.

La représentation suivante montre une suite décroissante alors que la fonction $f$ n'est pas **monotone**.

![](img/suites/13.png =400x center)
```

## Somme des termes consécutifs

### Cas d'une suite arithmétique

```admonish prop
**Somme des entiers de $1$ à $n$**

$n$ est un entier naturel non nul alors on a :

$$\boxed{1+2+3+\ldots+n=\cfrac{n(n+1)}{2}}$$
```

```admonish ex
$1+2+3+\ldots+100\quad=\cfrac{100\times 101}{2}\quad=5050$
```

```admonish demo title="Démonstration : (Carl Friedrich Gauss - 1777-1855)"
![](img/suites/14.png =200x center)

$$
\def\arraystretch{1.2}\begin{array}{rccccccccccccc}
	  & S  & = & 1     & + & 2     & + & 3     & + & \ldots & + & (n-1) & + & n     \\\\
	+ & S  & = & n     & + & (n-1) & + & (n-2) & + & \ldots & + & 2     & + & 1     \\\\ \hline
	  & 2S & = & (n+1) & + & (n+1) & + & (n+1) & + & \ldots & + & (n+1) & + & (n+1) \\\\
\end{array}
$$

Donc :

$$2S=n\times (n+1)\quad\Lrarr\quad S=\cfrac{n(n+1)}{2}$$
```

```admonish meth title="Méthode : Calculer la somme des termes d'une suite arithmétique"
Calculons $S=33+36+39+\ldots+267\quad$ Suite arithmétique de raison $=3$

$$
\def\arraystretch{1.3}\begin{array}{rcl}
	S & = & 33+36+39\ldots+267                                                                                  \\\\
	  & = & 3\times \tc{blue}{(11+12+13\ldots+89)}                                                              \\\\
	  & = & 3\times \left(\tc{green}{(1+2+3+\ldots+89)}-\tc{red}{(1+2+3+\ldots+10)}\right)                      \\\\
	  & = & 3\times \left(\tc{green}{\cfrac{89\times 90}{2}}-\tc{red}{\cfrac{10\times 11}{2}}\right)\quad=11\ 850
\end{array}
$$

$$
\begin{array}{|c|}
	\begin{array}{lcr}\larr\quad\qquad\qquad\tc{green}{\text{somme de 1 à 89}}\qquad\qquad\quad\rarr\end{array}        \\\\
	\begin{array}{l|r}\larr\tc{red}{\text{somme de 1 à 10}}\rarr&\larr\tc{blue}{\text{somme de 11 à 89}}\rarr\end{array} \\\\
	\begin{array}{lr}\begin{array}{ccccc}1&2&\ldots&9&10\end{array}&\begin{array}{ccccc}11&12&\ldots&88&89\end{array}\end{array}
\end{array}
$$
```

### Cas d'une suite géométrique

```admonish prop
**Somme $1+q^1+q^2+\ldots+q^n$**

$n$ est un entier naturel non nul et $q$ un réel différent de $1$ alors on a :

$$\boxed{1+q+q^2+q^3+...+q^n= \cfrac{1-q^{n+1}}{1-q}}$$
```

```admonish rem
Il s'agit de la somme des $(n+1)$ premiers termes d'une suite **géométrique** de raison $q$ et de premier terme $1$.
```

```admonish meth title="Méthode : Calculer la somme des termes d'une suite géométrique"

Calculons la somme $S$ suivante :

$$S=1+3+3^2+\ldots+3^{13}$$

Avec la propriété : $\quad q=3\quad\text{et}\quad n=13$

$$S=\quad 1+3+3^2+\ldots+3^{13}\quad=\cfrac{1-3^{14}}{1-3}\quad=2\times (3^{14}-1)\quad=2\ 391\ 484$$
```

```admonish demo
$$
\def\arraystretch{1.3}\begin{array}{ccccccccccccc}
	S    & = & 1 & + & q & + & q^2 & + & ... & + & q^n &   &         \\\\
	qS   & = &   &   & q & + & q^2 & + & ... & + & q^n & + & q^{n+1} \\\\ \hline
	S-qS & = & 1 & + & 0 & + & 0   & + & ... & + & 0   & - & q^{n+1} \\\\
\end{array}
$$

On a donc :

$$
\def\arraystretch{2}\begin{array}{rcl}
	S-qS=1-q^{n+1} & \Lrarr & S(1-q)=1-q^{n+1}         \\\\
	               & \Lrarr & S=\cfrac{1-q^{n+1}}{1-q}
\end{array}
$$
```
