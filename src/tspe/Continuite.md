# Continuité des fonctions

<!-- toc -->

## Notion de continuité

```admonish note title="Un peu d'histoire"
![](img/cont/weierstrass.jpg#right =150x)

Le mathématicien allemand _Karl Weierstrass_ (1815 ; 1897) apporte les premières définitions rigoureuses au concept de limite et de continuité d'une fonction.
```

### Définition

```admonish def title="Définition intuitive"
Une fonction est **continue** sur un intervalle, si sa courbe représentative peut se tracer sans lever le crayon.
```

```admonish meth title="Méthode : Reconnaître graphiquement une fonction continue"
:bulb: Étudier graphiquement la continuité des fonctions $f$ et $g$ définies et représentées ci-dessous sur l'intervalle $\lbrack - 2;2\rbrack$.

|             Fonction $f$              |             Fonction $g$              |
| :-----------------------------------: | :-----------------------------------: |
| ![](img/cont/image3.png =300x center) | ![](img/cont/image4.png =300x center) |

---

- $\Cf$ peut se tracer sans lever le crayon, elle semble donc continue sur l'intervalle $\lbrack -2;2\rbrack$.

- $\Cg$ ne peut pas se tracer sans lever le crayon, elle n'est donc pas continue sur $\lbrack -2;2\rbrack$.

    Cependant, elle semble continue sur $\lbrack -2;1\rbrack$ et sur $\left\rbrack 1;2 \right\rbrack$.
```

```admonish prop
Soit une fonction $f$ définie sur un intervalle $I$ contenant un réel $a$.

- $f$ est continue en $a$ si : $$\boxed{\limite_{x \rightarrow a}f(x) = f(a)}$$
- $f$ est continue sur $I$ si $f$ est continue en tout point de $I$
```

```admonish th
Si une fonction est **dérivable** sur un intervalle $I$, alors elle est **continue** sur cet intervalle.
```

```admonish ex
|        $f$ est continue en $a$        |        $f$ est continue en $a$        |        $f$ est continue en $a$        |
| :-----------------------------------: | :-----------------------------------: | :-----------------------------------: |
| ![](img/cont/image5.png =200x center) | ![](img/cont/image6.png =200x center) | ![](img/cont/image7.png =200x center) |

|     $f$ n'est pas continue en $a$     |     $f$ n'est pas continue en $a$     |
| :-----------------------------------: | :-----------------------------------: |
| ![](img/cont/image8.png =200x center) | ![](img/cont/image9.png =200x center) |
```

### Cas des fonctions de référence

```admonish prop
Les fonctions suivantes sont continues sur l'intervalle donné.

|        Fonctions        | Intervalle de continuité |      Fonctions      | Intervalle de continuité |
| :---------------------: | :----------------------: | :-----------------: | :----------------------: |
|    $\lvert x \rvert$    |           $\R$           | $\pa{\cfrac{1}{x}}$ |        $\R^{\*}$         |
| $x^n\ $ avec $\ n\in\N$ |           $\R$           |     $\sin (x)$      |           $\R$           |
|          $e^x$          |           $\R$           |     $\cos (x)$      |           $\R$           |
|       $\sqrt{x}$        |         $\R^{+}$         |                     |
```

### Opérations sur les fonctions continues

```admonish prop
$f$ et $g$ sont deux fonctions continues sur un intervalle $I$.

- $f + g\ $, $\ f \times g\ $, $\ f^{n}\ $ (avec $n\in\N$)$\ $ et $\ e^{f}\ $ sont continues sur $I$.
- Si $g$ ne s'annule pas sur $I$, alors $\cfrac{f}{g}$ est continue sur $I$.
- Si $f$ est positive sur $I$, alors $\sqrt{f}$ est continue sur $I$.
```

```admonish rem
Dans la pratique, les flèches obliques d'un tableau de variations traduisent la **continuité** et la stricte **monotonie** de la fonction sur l'intervalle considéré.
```

```admonish meth title="Méthode : Étudier la continuité d'une fonction définie par morceaux"
On considère la fonction $f$ définie sur $\R$ par

$$
f(x) = \begin{cases}
	-x+2 \quad\text{,pour}\quad x \le 3       \\\\
	x-4 \quad\text{,pour}\quad 3 \leq x \le 5 \\\\
	-2x+13 \quad\text{,pour}\quad x \geq 5
\end{cases}
$$

:bulb: La fonction $f$ est-elle continue sur $\R$ ?

---

Les fonctions $\begin{cases}x \mapsto -x+2\\\\x \mapsto x-4\\\\x \mapsto -2x+13\end{cases}$ sont des fonctions polynômes donc continues sur $\R$.

Ainsi la fonction $f$ est continue sur $\left\rbrack -\infty;3 \right\lbrack$, sur $\left\lbrack 3;5 \right\lbrack$ et sur $\left\lbrack 5; +\infty \right\lbrack$.

![](img/cont/image10.png =450x center)

Étudions alors la continuité de $f$ en $3$ et en $5$ :

- On a : $\begin{cases}
		\limite_{x \rightarrow 3^{-}}{f(x) =}\limite_{x \rightarrow 3^{-}}{- x + 2 =} -3+2 = -1 \\\\
		\limite_{x \rightarrow 3^{+}}{f(x) =}\limite_{x \rightarrow 3^{+}}{x - 4 =}3 - 4 = - 1
	\end{cases}$

Donc : $\ \limite_{x \rightarrow 3^{-}}{f(x) =}\limite_{x \rightarrow 3^{+}}{f(x) = f(3)}$

Et donc la fonction $f$ est continue en $3$.

- On a : $\begin{cases}
		\limite_{x \rightarrow 5^{-}}{f(x) =}\limite_{x \rightarrow 5^{-}}{x - 4 =}5 - 4 = 1 \\\\
		\limite_{x \rightarrow 5^{+}}{f(x) =}\limite_{x \rightarrow 5^{+}}{- 2x + 13 =} - 2 \times 5 + 13 = 3
	\end{cases}$

La limite de $f$ en $5$ n'existe pas. On parle de limite à gauche de $5$ et de limite à droite de $5$.

La fonction $f$ est continue sur $\left\rbrack -\infty;5 \right\lbrack$ et sur $\left\lbrack 5; +\infty \right\lbrack$.
```

## Théorème des valeurs intermédiaires

```admonish rem
On donne le tableau de variations de la fonction $f$.

![](img/cont/image11.png =450x center)

Il est possible de lire dans le tableau, le nombre de solutions éventuelles pour des équations du type $f(x) = k$.

- L'équation $f(x) = 18$ possède une solution comprise dans l'intervalle $\left\rbrack - 1;1 \right\lbrack$
- L'équation $f(x) = 0$ possède trois solutions chacune comprise dans un des intervalles $\left\rbrack -4;-3\right\lbrack$, $\left\rbrack -3;-1\right\lbrack$ et $\left\rbrack -1;1\right\lbrack$
- L'équation $f(x) = -3$ ne possède pas de solution.
- L'équation $f(x) = 3$ possède deux solutions :
    - l'une égale à $-3$,
    - l'autre comprise dans $\left\rbrack -1;1 \right\lbrack$
```

```admonish th
On considère la fonction $f$ **continue** sur $\lbrack a\ ;\ b\rbrack$.

Pour $k\in\R$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet au moins une solution comprise entre $a$ et $b$.

![](img/cont/image12.png =500x center)
```

```admonish rem
Dans le cas où la fonction $f$ est **strictement monotone** sur l'intervalle $\lbrack a\ ;\ b\rbrack,$ alors la solution est unique.

![](img/cont/image13.png =500x center)
```

```admonish note title="Dans la pratique :"
Pour démontrer que l'équation $f(x) = 0$ admet une unique solution sur l'intervalle $\lbrack a\ ;\ b\rbrack$, on démontre que :

1. $f$ est **continue** sur $\lbrack a\ ;\ b\rbrack$,
2. $f$ **change de signe** sur $\lbrack a\ ;\ b\rbrack$,
3. $f$ est **strictement monotone** sur $\lbrack a\ ;\ b\rbrack$,

Les conditions 1. et 2. nous assurent que des solutions existent.

Avec la condition 3. en plus, nous savons que la solution est unique.
```

```admonish meth title="Méthode : Appliquer le théorème des valeurs intermédiaires (1)"
![](img/cont/image14.png#right =200x)

On considère la fonction $f$ définie sur $\R$ par $f(x) = x^{3} - x^{2} - 1$.

1. Démontrer que l'équation $f(x) = 0$ admet une unique solution $\alpha$ sur $\lbrack 1;2\rbrack$.
2. À l'aide de la calculatrice, donner un encadrement au centième de $\alpha$.

---

1. Théorème des valeurs intermédiaires

- La fonction $f$ est **continue** sur l'intervalle $\lbrack 1;2\rbrack$, car une fonction polynôme est continue sur $\R$.

- On a :
    - $f(1) = 1^{3} - 1^{2} - 1 = - 1 \le 0$
    - $f(2) = 2^{3} - 2^{2} - 1 = 3 > 0$

    Donc la fonction $f$ **change de signe** sur l'intervalle
    $\lbrack 1;2\rbrack$.

- $f^{'}(x) = 3x^{2} - 2x = x(3x - 2)$

    Donc, pour tout $x$ de $\lbrack 1\ ;\ 2\rbrack$, $f^{'}(x) > 0$.

    La fonction $f$ est donc **strictement croissante** sur l'intervalle $\lbrack 1\ ;\ 2\rbrack$.

D'après le théorème des valeurs intermédiaires, l'équation $\ f(x) = 0\ $ admet alors une unique solution sur l'intervalle $\lbrack 1;2\rbrack$.

2. À l'aide de la calculatrice :

   Il est possible d'effectuer des "balayages" successifs en augmentant la précision.

|                      Précision $=0,1$                       |                       Précision $=0,01$                        |
| :---------------------------------------------------------: | :------------------------------------------------------------: |
|           ![](img/cont/image15.png =200x center)            |             ![](img/cont/image16.png =200x center)             |
| $f(1,4) \approx -0,216 \le 0 \\\\ f(1,5) \approx 0,125 > 0$ | $f(1,46) \approx -0,019 \le 0 \\\\ f(1,47) \approx 0,0156 > 0$ |
|        La solution est comprise entre $1,4$ et $1,5$        |        La solution est comprise entre $1,46$ et $1,47$         |
```

```admonish meth title="Méthode : Appliquer le théorème des valeurs intermédiaires (2)"
On considère la fonction $f$ définie sur $\R$ par $f(x) = x^{3} - 4x^{2} + 6$.

Démontrer que l'équation $f(x) = 2$ admet au moins une solution sur $\lbrack -1 ; 4\rbrack$.

---

- $f$ est **continue** sur $\lbrack -1\ ;\ 4\rbrack$ car une fonction polynôme est continue sur $\R$.
- On a :
    - $f(-1) = (-1)^{3} - 4(-1)^{2} + 6 = 1$
    - $f(4) = 4^{3} - 4{\times 4}^{2} + 6 = 6$

        $\rarr$ Donc $2$ est compris entre $f\left(-1\right)$ et $f\left(4\right)$.

D'après le **théorème des valeurs intermédiaires**, on en déduit que l'équation $f(x) = 2$ admet **au moins** une solution sur l'intervalle $\lbrack -1\ ;\ 4\rbrack$.

Ici, on n'a pas la stricte monotonie de $f$, donc on n'a pas l'unicité de la solution.
```

## Application à l'étude de suites

```admonish th
Soit :

- Une fonction $f$ **continue** sur un intervalle $I$
- Une suite $(u_{n})$ telle que pour tout $n$, on a $u_{n} \in I$ et $u_{n+1} = f\left( u_{n} \right)$.

Si $(u_{n})$ **converge** vers $L$ alors $f(L) = L$.
```

```admonish meth title="Méthode : Étudier une suite définie par une relation de récurrence du type $u_{n + 1} = f(u_{n})$"
Soit $(u_{n})$ la suite définie par $u_{0} = 8$ et pour tout entier naturel $n$, $u_{n + 1} = 0,85u_{n} + 1,8$.

1. Dans un repère orthonormé, on considère la fonction $f$définie par : $f(x) = 0,85x + 1,8.$

    a. Tracer les droites d'équations respectives $y = 0,85x + 1,8$ et $y = x$.

    b. Dans ce repère, placer $u_{0}$ sur l'axe des abscisses, puis en utilisant les droites précédemment tracées, construire sur le même axe $u_{1}$, $u_{2}$et $u_{3}$.

    c. À l'aide du graphique, conjecturer la limite de la suite $(u_{n})$.

2. En supposant que la suite $(u_{n})$ est convergente, démontrer le résultat conjecturé dans en 1.c.

---

1. Dans un repère :

- On place le premier terme $u_{0}$ sur l'axe des abscisses.
- On trace l'image de $u_{0}$ par $f$ pour obtenir sur l'axe des ordonnées $u_{1} = f\left( u_{0} \right)$.
- On reporte $u_{1}$ sur l'axe des abscisses à l'aide de la droite d'équation $y = x$.
- On fait de même pour obtenir $u_{2}$ puis $u_{3}\ldots$
- En continuant le tracé en escalier, celui-ci se rapprocherait de plus en plus de l'intersection des deux droites. On conjecture que la limite de la suite $(u_{n})$ est $12$.

![](img/cont/image17.png =750x center)

2. La suite $(u_{n})$ **converge** et la fonction $f$ est **continue** sur $\R$.

    La limite $L$ de la suite $(u_{n})$ est donc solution de l'équation $f(L) = L$.

    Soit :

$$
\begin{array}{rrcl}
	     & 0,85L + 1,8 & = & L                       \\\\
	\iff & L - 0,85L   & = & 1,8                     \\\\
	\iff & 0,15L       & = & 1,8                     \\\\
	\iff & L           & = & 1,8\div 0,15\qquad = 12
\end{array}
$$

La suite $(u_{n})$ converge vers $12$.
```
