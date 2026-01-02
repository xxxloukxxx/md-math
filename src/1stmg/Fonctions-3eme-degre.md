# Fonctions polynômes de degré $3$

<!-- toc -->

## Définition

```admonish def
Les fonctions définies sur $\R$ par $\ \boxed{x \mapsto ax^{3}}\ $ ou $\ \boxed{x \mapsto ax^{3}+b}\ $ sont des **fonctions de degré $3$\*\*.

Les coefficients $a$ et $b$ sont des réels donnés avec $a \neq 0$.

| **Exemple**                            | **Contre-exemple**                            |
| -------------------------------------- | --------------------------------------------- |
| $f(x)=4x^{\textcolor{red}{3}}+1$       | $m(x)=- x+4$                                  |
|                                        | ... est une fonction affine                   |
| $g(x)=x^{\textcolor{red}{3}}-2$        |                                               |
|                                        | $n(x)=2x^{5}-x^{3}+5x-1$                      |
| $f(x)=1+x^{2}-2x^{\textcolor{red}{3}}$ | ... est une fonction du degré 5\up{ème} degré |
```

## Représentation graphique

```admonish prop
Soit $f$ une fonction de degré $3$, telle que $\quad f(x)=ax^{3}+b$

- Si $a>0$ : $f$ est strictement **croissante**
- Si $a\lt 0$ : $f$ est strictement **décroissante**

|              $f(x)=ax^3$              |
| :-----------------------------------: |
| ![](img/3eme/image1.png =500x center) |

|             $f(x)=ax^3+b$             |
| :-----------------------------------: |
| ![](img/3eme/image2.png =500x center) |
```

## Forme factorisée d'une fonction polynôme de degré $3$

```admonish ex
La fonction $\ f\ $ définie par $f(x)=5(x-4)(x-1)(x+3)$ est une fonction polynôme de degré $3$ sous sa forme **factorisée**

Si on développe l'expression de $f$, on obtient bien l'expression de degré $3$

$$
\begin{array}{rcl}
	f(x) & = & 5(x-4)\underbrace{(x-1)(x+3)}   \\\\
	     & = & 5\underbrace{(x-4)(x^2+2x-3)}   \\\\
	     & = & \underbrace{5(x^3-2x^2-11x+12)} \\\\
	     & = & 5x^{3}-10x^{2}-55x+60
\end{array}
$$
```

```admonish def
Les fonctions définies sur $\R$ par :

$$\boxed{f(x)=a\pa{x-x_{1}}\pa{x-x_{2}}\pa{x-x_{3}}}$$

... sont des fonctions polynômes de degré $3$ sous **forme factorisée**.

Les nombres $a$, $x_{1}$, $x_{2}$ et $x_{3}$ sont des réels avec $a \neq 0$.

![](img/3eme/image4-cours.png =500x center)
```

```admonish prop
Soit la fonction $f$ définie sur $\R$ par $f(x)=a\pa{x-x_{1}}\pa{x-x_{2}}\pa{x-x_{3}}$.

L'équation $f(x)=0$ possède trois solutions (éventuellement égales) :

$$S=\lbrace x_{1}\ ;\ x_{2}\ ;\ x_{3}\rbrace$$

Ces solutions sont appelées les **racines** de la fonction polynôme $f$.
```

```admonish ex
Soit $\ f(x)=5(x-4)(x-1)(x+3)\qquad = 5x^{3}-10x^{2}-55x+60\quad\text{(cf ex. précédent)}$

On peut vérifier que $4$, $1$ et $-3$ sont des racines de $f$.

$$
\begin{array}{rcl}
	f(\textcolor{green!35!black!65}{4}) & = & 5\times \textcolor{green!35!black!65}{4}^{3}-10 \times \textcolor{green!35!black!65}{4}^{2}-55 \times \textcolor{green!35!black!65}{4}+60 \\\\
	                                    & = & 320-160-220+60\quad =0                                                                                                                    \\\\
	                                    &   &                                                                                                                                           \\\\
	f(\textcolor{red}{1})               & = & 5\times \textcolor{red}{1}^{3}-10 \times \textcolor{red}{1}^{2}-55 \times \textcolor{red}{1}+60                                           \\\\
	                                    & = & 5-10-55+60\quad =0                                                                                                                        \\\\
	                                    &   &                                                                                                                                           \\\\
	f(\textcolor{blue}{-3})             & = & 5{\times \textcolor{blue}{(-3)}}^{3}-10 \times \textcolor{blue}{(-3)}^{2}-55 \times \textcolor{blue}{(-3)}+60                             \\\\
	                                    & = & -135-90+165+60\quad=0
\end{array}
$$

Les nombres $4$, $1$ et $(-3)$, solutions de l'équation $f(x)=0$, sont donc des **racines** de $f$.
```

```admonish meth title="Méthode : Étude du signe d'un polynôme de degré $3$"
Étudions le signe de la fonction polynôme $f$ définie sur $\R$ par :

$$f(x)=2(x+1)(x-2)(x-5)$$

$a=2$ étant un nombre positif, le signe de $2(x+1)(x-2)(x-5)$ dépend du signe de chaque facteur : $$(x+1)\text{, }(x-2)\text{ et }(x-5)$$

On étudie ainsi le signe de chaque facteur et on présente les résultats dans un tableau de signes.

- $(x+1)=0\ \iff\ x_1=(-1)$
- $(x-2)=0\ \iff\ x_2=2$
- $(x-5)=0\ \iff\ x_3=5$

![](img/3eme/image6.png =450x center)

Les nombres $(-1)$, $2$ et $5$ sont donc les racines de $f$.

En appliquant la règle des signes dans le tableau ci-dessous, on pourra en déduire le signe du produit $\ f(x)=2(x+1)(x-2)(x-5)$.

![](img/3eme/image5.png =600x center)

On en déduit que :

- $f(x) \ge 0$ pour $x \in \lbrack-1;2\rbrack \cup \left\lbrack 5;+\infty \right\lbrack$
- $f(x) \le 0$ pour $x \in \left\rbrack-\infty;-1 \right\rbrack \cup \lbrack 2;5\rbrack$.

La représentation de la fonction $f$ à l'aide d'un logiciel permet de confirmer les résultats établis précédemment.
```

## Équation de la forme $x^{3}=c$

```admonish prop
L'équation $\boxed{x^{3}=c}$, avec $c$ positif, possède une **unique** solution $\boxed{\sqrt[3]{c}}$.

Cette solution peut également se calculer à l'aide de $\ \boxed{\sqrt[3]{c}\ =\ c^{\tfrac{1}{3}}}$.
```

```admonish meth title="Méthode : Résoudre une équation du type $x^3=c$"
- Résoudre dans $\R$ l'équation $\quad x^{3}=27$

  On cherche le nombre qui, élevé au cube, donne $27$.

  Ce nombre est égal à la **racine cubique** de $27$, soit $x=\sqrt[3]{27}=27^{\tfrac{1}{3}}=3$.

- Résoudre dans $\R$ l'équation $\quad {2x}^{3}-6=16$

  Pour résoudre cette équation il faut se ramener à la forme $x^3=c$

  $$
  \begin{array}{rrl}
  	     & {2x}^{3}-6 & =16                                              \\\\
  	\iff & {2x}^{3}   & =22                                              \\\\
  	\iff & x^{3}      & =11                                              \\\\
  	\iff & x          & =\sqrt[3]{11}=11^{\tfrac{1}{3}}\approx 2,223\ 98
  \end{array}
  $$
```
