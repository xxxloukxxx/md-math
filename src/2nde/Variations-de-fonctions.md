# Variations de fonctions

<!-- toc -->

## Croissance, décroissance, monotonie

```admonish def
Soit $f$ une fonction définie sur $I$.

Pour tout $a$ et $b \in I$, tel que $a \lt b$ :

- Si $f(a) \lt f(b) \Rarr f$ est **croissante** sur $I$
- Si $f(a) > f(b) \Rarr f$ est **décroissante** sur $I$
- Si $f(a) = f(b) \Rarr f$ est **constante** sur $I$

|        $f$ **croissante**        |       $f$ **décroissante**       |
| :------------------------------: | :------------------------------: |
| ![](img/var/01.png =400x center) | ![](img/var/02.png =400x center) |
|    $a\lt b\iff f(a) \lt f(b)$    |     $a \lt b\iff f(a)>f(b)$      |
```

```admonish rem
Dire que $f$ est **monotone** sur $I$ signifie que $f$ est soit **croissante** sur $I$, soit **décroissante** sur $I$.
```

```admonish ex
| Fonction monotone sur $[1\ ;\ 7]$  |                                    |
| :--------------------------------: | :--------------------------------: |
| ![](img/var/03.1.png =400x center) | ![](img/var/03.2.png =400x center) |

| Fonction non monotone sur $[1\ ;\ 7]$ |
| :-----------------------------------: |
|   ![](img/var/04.png =400x center)    |
```

```admonish ex
Soit $f$ définie sur $[0;5]$ tel que :

$$f(x)=5x-x^2$$

![](img/var/05.png =400x center)

Graphiquement :

- Sur $[0\ ;\ 2.5]$, $f$ est **croissante**.
- Sur $[2.5\ ;\ 5]$, $f$ est **décroissante**.
```

## Extremums (min. et max.)

```admonish def
Soit $f$ une fonction définie sur $I$.

- Dire que $f$ admet un **maximum** en $a$ signifie que :
  - Pour tout $x\in I$ on a : $f(x)\leq f(a)$

- Dire que $f$ admet un **minimum** en $b$ signifie que :
  - Pour tout $x\in I$ on a : $f(x)\geq f(b)$
```

```admonish ex
Soit $f$ définie sur $[0\ ;\ 3]$ et représentée ci-dessous :

![](img/var/08.png =400x center)

$f$ admet un **maximum** en $x=2$ sur l'intervalle $[0\ ;\ 3]$ car, pour tout $x\in [0\ ;\ 3]$, on a $f(x)\leq f(2)$.

Ce **maximum** vaut $3$
```

```admonish ex
Soit $f$ définie sur $[0\ ;\ 3]$ et représentée ci-dessous :

![](img/var/09.png =400x center)

$f$ admet un **minimum** en $x=1$ sur l'intervalle $[0\ ;\ 3]$ car, pour tout $x\in [0\ ;\ 3]$, on a $f(x)\geq f(1)$.

Ce **minimum** vaut $(-1)$
```

```admonish ex
Soit $f$ définie sur $[0\ ;\ 5]$ tel que :

$$f(x)=5x-x^2$$

![](img/var/10.png =400x center)

Graphiquement :

- $f$ admet un **maximum** en $x=2.5$
- Ce maximum vaut : $f(2.5)=5\times 2.5-2.5^2 = 6.25$
```

## Tableau de variations

```admonish def
Un tableau de variations **résume** les variations d'une fonction en faisant apparaître les intervalles où elle est **monotone**.
```

```admonish ex
![](img/var/11.png =400x center)

La fonction $f$ est $\ldots$

- $\ldots$ **définie** sur $[-3;7]$
- $\ldots$ **croissante** sur $[-3;0]$ et sur $[4;7]$
- $\ldots$ **décroissante** sur $[0;4]$
```

```admonish ex
![](img/var/11.png =400x center)

La fonction $f$ $\ldots$

- $\ldots$ admet un **maximum** en $x=0$
  - Le **maximum** de $f$ est $4$
- $\ldots$ admet un **minimum** en $x=4$
  - Le **minimum** de $f$ est $-2$
```

```admonish ex
![](img/var/10.png =400x center)

Soit $f$ définie sur $[0;5]$ tel que :

$$f(x)=5x-x^2$$

- Le tableau de variations de $f$ est :

![](img/var/12.png =350x center)
```

```admonish ex
Soit la représentation graphique de $f$ définie sur $[-5\ ;\ 7]$.

![](img/var/13.png =600x center)

- L'ensemble de définition de $f$ est $[-5\ ;\ 7]$
- Le tableau de variations de $f$ est :

![](img/var/14.png =500x center)

- $f$ est **croissante** sur $[-4\ ;\ 0]$ et sur $[5\ ;\ 7]$
- $f$ est **décroissante** sur $[-5\ ;\ -4]$ et sur $[0\ ;\ 5]$
- $f$ admet un **minimum** pour $x=(-4)$ et ce **minimum** vaut $(-4)$
- $f$ admet un **maximum** pour $x=0$ et ce **maximum** vaut $3.5$
```

## Équation / inéquations

```admonish rem
On peut résoudre graphiquement une équation (ou inéquation) à l'aide de la représentation graphique d'une fonction.

Pour cela, il suffit de trouver les antécédents d'une valeur (ou plusieurs) par une fonction.
```

```admonish ex
On cherche à résoudre l'équation $5x-x^2=6$

On considère la fonction : $\quad f(x)=5x-x^2$

On doit trouver les antécédent de $6$ par la fonction $f$.

Graphiquement, on lit $\ x=2\ $ et $\ x=3\ $

![](img/var/eq01.png =400x center)

$$5x-x^2 =6\ \iff\ \begin{cases}x_1=2\\\\x_2=3\end{cases}\ \iff\ S=\lbrace 2\ ;\ 3\rbrace$$
```

```admonish ex
On cherche à résoudre l'inéquation $5x-x^2 \gt 6$

On considère la fonction : $\quad f(x)=5x-x^2$

On doit trouver **les abscisses** des points dont **l'ordonnée** est plus grand que $6$.

Graphiquement, on lit :

![](img/var/eq02.png =400x center)

$$5x-x^2>6\ \iff\ x\in [2\ ;\ 3]\ \iff\ S=\lbrack 2\ ;\ 3\rbrack$$
```

```admonish rem
Pour résoudre $f(x)=g(x)$, il faut trouver les **abscisses** des points d'intersection entre $\mathcal{C_f}$ et $\mathcal{C_g}$.
```

```admonish ex
![](img/var/eq03.png =400x center)

Dans le cas ci-dessus, on a :

$$f(x)=g(x)\ \iff\ \begin{cases}x_1=0\\\\x_2=4\ \end{cases}\ \iff\ S=\lbrace 0\ ;\ 4\rbrace$$
```

```admonish rem
Résoudre $g(x)\geq f(x)$, il faut trouver les **abcisses** des points pour lesquelles $\mathcal{C_g}$ est située **au dessus** de $\mathcal{C_f}$
```

```admonish ex
![](img/var/eq04.png =600x center)

Dans le cas ci-dessus, on a :

$$g(x)\geq f(x) \iff x\in [-3\ ;\ 1]\cup [5\ ;\ 6]$$
```
