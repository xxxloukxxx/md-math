# Combinatoire dénombrement

<!-- toc -->

## Principe additif et principe multiplicatif

### Notion de dénombrement

```admonish def
- Un ensemble $E$ est **fini** lorsqu'il admet un nombre fini d'éléments.
- Le nombre d'éléments de $E$ est appelé le **cardinal** de l'ensemble et il est noté : $$\boxed{Card(E)}\ \text{ou}\ \boxed{|E|}$$

**Dénombrer**, c'est compter le nombre d'éléments que contient un ensemble fini, c'est à dire en déterminer le cardinal.
```

```admonish ex
- L'ensemble $E$ des joueurs d'une équipe de foot est un ensemble fini. Alors $Card(E)=11$.
- L'ensemble $\N$ des entiers naturels n'est pas un ensemble fini.

On dit que deux ensembles sont **disjoints**, s'ils n'ont aucun élément en commun.
```

### Principe additif

```admonish prop title="Propriété : Principe additif"
Soit $E_{1}, E_{2}, \ldots,E_{p}$, $p$ ensembles finis deux à deux _disjoints_.

Alors

$$\boxed{Card\pa{E_{1}\cup E_{2}\cup\ldots\cup E_{p}}=Card\pa{E_{1}}+Card\pa{E_{2}}+\ldots+Card\pa{E_{p}}}$$
```

```admonish ex
Soit $E_{1} = \brack{ a ;b ;c ;d }$ et $E_{2} = \brack{ \alpha ;\beta ;\gamma }$

Alors $E_{1}$ et $E_{2}$ sont disjoints et on a :

$$Card\pa{ E_{1} \cup E_{2} } = Card\pa{ E_{1} } + Card\pa{ E_{2} } = 4 + 3 = 7$$
```

```admonish meth title="Méthode : Dénombrer en utilisant un diagramme"
Dans une classe, deux options sont proposées : latin et théâtre.

On sait que, $16$ élèves pratiquent le latin, $14$ le théâtre, $5$ pratiquent les deux options et 8 n'en pratiquent aucune.

:bulb: Calculer le nombre d'élèves de cette classe.

---

> Soit $L$ l'ensemble des élèves pratiquant le latin et $T$ le théâtre.
>
> On a alors : $Card(L) = 16\quad Card(T)=14\quad Card(L\cap T)=5\quad Card\pa{\overline{L}\cap\overline{T}}=8$
>
> On ne peut pas utiliser le principe additif car les ensembles $L$ et $T$ ne sont pas disjoints.
>
> On schématise alors la situation à l'aide d'un diagramme :
>
> ![](img/combin/image3.png =400x center)
>
> On en déduit le nombre d'élèves de la classe en utilisant le principe additif sur des ensembles disjoints, soit : $11 + 5 + 9 + 8 = 33$.
```

### Principe multiplicatif

```admonish ex
On considère les 3 ensembles suivants :

$$E_{1} = \brack{\text{renard roux, renard noir, renard blanc}}$$
$$E_{2} = \brack{\text{femme rousse,femme brune,femme blonde}}$$
$$E_{3} = \brack{\text{robe rouge,robe noire,robe blanche}}$$

Les femmes choisissent une robe et un renard de façon aléatoire.

On appelle produit cartésien $E_{1} \times E_{2} \times E_{3}$, l'ensemble de tous les triplets formés d'un élément de $E_{1}$, d'un élément de $E_{2}$ et d'un élément de $E_{3}$.

![](img/combin/image4.png =500x center)

La photo présente 3 triplets, de gauche à droite :

- (renard blanc, femme brune, robe rouge)
- (renard roux, femme blonde, robe noire)
- (renard noir, femme rousse, robe blanche)

Intuitivement, on peut penser qu'il existe $3 \times 3 \times 3 = 27$ triplets différents.
```

```admonish def
Soit $p$ ensembles finis $E_{1}, E_{2}, \ldots,E_{p}$.

- Le produit cartésien $E_{1} \times E_{2}$ est l'ensemble des **couples** $(a_{1},a_{2})$ où $a_{1} \in E_{1}$ et $a_{2} \in E_{2}$.
- Le produit cartésien $E_{1} \times E_{2} \times E_{3}$ est l'ensemble des **triplets** $(a_{1},a_{2}, a_{3})$ où $a_{1} \in E_{1}$, $a_{2} \in E_{2}$ et $a_{3} \in E_{3}$.
- Le produit cartésien $E_{1} \times E_{2} \times \ldots \times E_{p}$ est l'ensemble des $\mathbf{p}$**-uplets** $(a_{1},a_{2}, \ldots,a_{p})$ où $a_{1} \in E_{1}$, $a_{2} \in E_{2} \ldots a_{p} \in E_{p}$.
```

```admonish prop title="Principe multiplicatif"
Soit $p$ ensembles finis $E_{1}, E_{2}, \ldots,E_{p}$. Alors on a :

$$\boxed{Card\pa{E_{1}\times E_{2}\times\ldots\times E_{p}}=Card\pa{E_{1}}\times Card\pa{E_{2}}\times\ldots\times Card\pa{E_{p}}}$$
```

```admonish meth title="Méthode : Appliquer le principe multiplicatif pour dénombrer"
Un restaurant propose sur sa carte $3$ entrées, $4$ plats de résistance et $2$ desserts.

a. Combien de menus différents composés d'une entrée, d'un plat et d'un dessert peut-on constituer ?

b. Même question si le dessert est une tarte aux pommes imposée.

---

a. Soit $E$ l'ensemble des entrées, $P$ celui des plats et $D$ celui des desserts.

> On considère alors les triplets de la forme (entrée, plat, dessert) éléments de $E \times P \times D$.
>
> D'après le principe multiplicatif, on a :
>
> $$Card(E \times P \times D) = Card(E) \times Card(P) \times Card(D) = 3 \times 4 \times 2 = 24$$
>
> Il existe $24$ menus différents.

b. $Card(E \times P) = Card(E) \times Card(P) = 3 \times 4 = 12$

> Il existe $12$ menus différents dont le dessert est une tarte aux pommes.
```

## k-uplets et permutations

### Dénombrement des $k$-uplets

```admonish rem
**Ici, l'ordre des éléments compte et les éléments peuvent se répéter**
```

```admonish ex
Si on effectue un produit cartésien d'un ensemble sur lui-même, on note $E \times E = E^{2}$.

On lance par exemple deux dés à six faces. On note $E = \brack{ 1 ;2 ;3 ;4 ;5 ;6 }$ l'ensemble des résultats
possibles pour un dé.

Alors $E^{2}$ est l'ensemble des couples possibles correspondants aux résultats du lancer de deux dés.

On a, par exemple :

$$(1, 2) \in E^{2}$$
$$(6, 3) \in E^{2}$$
$$(5, 5) \in E^{2}$$

D'après le principe multiplicatif, il existe $6 \times 6 = 6^{2}$ couples possibles.

En effet, on a par exemple : $(1, 2) \neq (2, 1)$
```

```admonish prop
Soit un ensemble fini $E$ à $n$ éléments.

Alors le nombre de $k$-uplets d'éléments de $E$ est égal à :

$$\boxed{Card\pa{ E^{k} } = n^{k}}$$
```

```admonish meth title="Méthode : Dénombrer des $k$-uplets"
> ~~~
> « Il y avait pour entrer juste un digicode
> Deux lettres et dix chiffres incommodes
> Un détail que t'avais surement oublié
> 4 milliards de possibilités »
> ~~~

Par exemple, RT 49903 42472 pourrait être un code à composer sur le digicode.

---

> Soit $A$ l'ensemble des lettres de l'alphabet et $N$ l'ensemble des chiffres.
>
> On a alors : $Card(A) = 26$ et $Card(N) = 10$.
>
> Pour le choix des $2$ lettres, on compte le nombre de couples d'éléments de $A$ :
>
> $Card\pa{ A^{2} } = 26^{2} = 676$ possibilités.
>
> Pour le choix des $10$ chiffres, on compte le nombre de 10-uplets d'éléments de $N$ :
>
> $Card\pa{ N^{10} } = 10^{10}$ possibilités.
>
> Nombre de possibilités du digicode :
>
> $$Card\pa{ A^{2} \times N^{10} } = Card\pa{ A^{2} } \times Card\pa{ N^{10} } = 676 \times 10^{10} = {6\ 760\ 000\ 000\ 000}$$
>
> Soit environ ${7\ 000}$ milliards de possibilités et non pas $4$ milliards comme dans la chanson.
>
> ---
>
> **À noter :** En pratique, un digicode contient généralement deux lettres possibles (A et B) et le code est souvent composé d'une lettre suivie de $4$ chiffres.
>
> Par exemple : B5633
>
> Dans ce cas :
> $$Card\pa{ A \times N^{4} } = Card(A) \times Card\pa{ N^{4} } = 2 \times 10^{4} = {20\ 000}$$
>
> ---
>
> Pour retrouver les $4$ milliards de la chanson, il faudrait utiliser un tel digicode avec un code composé de deux lettres suivies de $9$ chiffres.
>
> $$Card\pa{ A^{2} \times N^{9} } = Card\pa{ A^{2} } \times Card\pa{ N^{9} } = 2^{2} \times 10^{9} = {4\ 000\ 000\ 000}$$
```

### Dénombrement des $k$-uplets d'éléments distincts

**Ici, l'ordre des éléments compte et les éléments ne se répètent pas.**

```admonish ex
On considère l'ensemble $E = \brack{ a ;b ;o ;p ;r }$.

- $(b, o, a)$ et $(r, a, p)$ sont des triplets d'éléments distincts de $E$.
- $(b, a, r, b, a, r)$ **n'est pas** un 6-uplet d'éléments distincts de $E$ car des éléments se répètent.
- $(p, r, o, b, a)$ est un 5-uplet différent de $(b, a,p,r, o). $ L'ordre des éléments est à prendre en compte.

Calculons par exemple le nombre de triplets d'éléments distincts de $E$.

- Il existe 5 choix pour la 1^ère^ lettre.
- La 1^ère^ lettre étant fixée, il existe 4 choix pour la 2^e^ lettre. Car il n'y a pas répétition d'éléments.
- Les deux premières lettres étant fixées, il existe 3 choix pour la 3^e^ lettre.

En appliquant le principe multiplicatif, le nombre de triplets d'éléments distincts de $E$ est égal à : $5 \times 4 \times 3 = 60$.
```

```admonish def
Soit $E$ un ensemble fini à $n$ éléments et $k \le n$.

Un $\mathbf{k}$**-uplets d'éléments distincts** de $E$ est un $k$-uplet pour lequel tous les éléments sont différents.

Un $k$-uplets d'éléments distincts est également appelé **arrangement** de $k$ éléments parmi $n$.
```

```admonish def
On appelle **factorielle** $\mathbf{n}$ le produit de tous les nombres entiers de $1$ à $n$.

Et on note : $$\boxed{n! = 1 \times 2 \times 3 \times \ldots \times n}$$
```

```admonish rem
$n!$ se lit _factorielle $n$_.
```

```admonish ex
$$5!=1\times 2\times 3\times 4\times 5=120\qquad\qquad 100!=1\times 2\times 3\times\ldots\times 99\times 100\qquad\qquad 1!=1$$

On a $0! = 1$ par convention
```

```admonish prop
Soit $E$ un ensemble fini à $n$ éléments.

Le nombre de $k$-uplet d'éléments distincts de $E$ est égal à :

$$\boxed{n\times(n-1)\times(n-2)\times\ldots\times(n-k+1)=\cfrac{n!}{(n-k)!}}$$
```

```admonish meth title="Méthode : Dénombrer des $k$-uplets d'éléments distincts (arrangements)"
Pour nettoyer un appareil électrique, Fred débranche les 3 prises qui se trouvent à l'arrière de l'appareil.

Mais au moment d'effectuer à nouveau les branchements, il se rend compte qu'il existe $12$ positions différentes pour les $3$ prises.

![](img/combin/image5.png =300x center)

Comme il n'a pas pris soin de noter les positions respectives des 3 prises et qu'il n'y connait rien en électronique, il décide d'effectuer
les branchements au hasard.

:bulb: Quelle est la probabilité qu'il retrouve le bon branchement ?

---

> Fred doit choisir $3$ positions parmi $12$. L'ordre a une importance, on voit que les prises sont de différentes couleurs.
>
> Il existe $12$ positions possibles pour la 1^ère^ prise. Celle-ci étant fixée, il existe alors $11$ positions pour la 2^e^ et ainsi $10$ positions pour la 3^e^ prise.
>
> En appliquant le principe multiplicatif, le nombre de positions possibles est égal à :
>
> $$12 \times 11 \times 10 = {1\ 320}$$
>
> On peut également considérer les triplets d'éléments distincts (arrangements de $3$ éléments parmi $12$), soit :
>
> $$
> \begin{array}{rcl}
> 	\cfrac{12!}{(12-3)!} & = & \cfrac{12!}{9!}                                                                    \\\\
> 	                    & = & \cfrac{1\times2\times\ldots\times12}{1\times2\times\ldots\times9}                  \\\\
> 	                    & = & \cfrac{1\times2\times\ldots9\times10\times11\times12}{1\times2\times\ldots\times9} \\\\
> 	                    & = & 10\times11\times12\qquad={1\ 320}
> \end{array}
> $$
>
> Parmi les $1 320$ positions, une seule est la bonne.
>
> La probabilité que Fred retrouve le bon branchement est égale à : $\cfrac{1}{1\ 320}$.
```

### Dénombrement des permutations

```admonish rem
**Ici, l'ordre des éléments compte et les éléments ne se répètent pas**
```

```admonish ex
On considère l'ensemble $E = \brack{ 1 ;2 ;3 ;4 ;5 }$.

$(1, 3, 2, 5, 4)$ et $(5, 1, 2, 3, 4)$ sont des $5$-uplets qui utilisent tous les éléments de $E$.

On les appelle des permutations de $E$.
```

```admonish def
Soit $E$ un ensemble fini à $n$ éléments.

Une **permutation** de $E$ est un $n$-uplet d'éléments distincts de $E$.
```

```admonish rem
Une permutation d'un ensemble à $n$ élément est un $n$-uplet d'un ensemble à $n$ éléments.

Pour une permutation, on a $k = n$.
```

```admonish prop
Soit $E$ un ensemble fini à $n$ éléments.

Le nombre de permutations de $E$ est égal à $\boxed{n!}$.
```

```admonish ex
Il existe $3! = 6$ façons différentes que $3$ personnes s'assoient sur un banc à $3$ places.
```

```admonish meth title="Méthode : Dénombrer des permutations"
![](img/combin/image6.png =300x center)

Pour une conférence, on a invité $12$ scientifiques, $6$ hommes et $6$ femmes renommés, qui seront placés au premier rang de la salle qui comprend $12$ places.

On attend $5$ mathématiciens, $3$ physiciens et $4$ biologistes.

C'est le moment de prendre place, l'organisateur demande aux scientifiques de s'installer.

- Les mathématiciens proposent que chacun choisisse une place au hasard.
- Les physiciens préfèrent rester ensemble et qu'ainsi tous les physiciens soient assis côte à côte.
- Les biologistes disent qu'il serait mieux que les hommes se placent ensemble et que les femmes en fassent de même.

:bulb: Calculer le nombre de façons différentes de s'assoir pour chaque proposition.

---

> - _Proposition des mathématiciens :_
>
> Le nombre de façons de placer ces $12$ scientifiques est égal au nombre de permutations dans un ensemble à $12$ éléments, soit : $12! = 1 \times 2 \times 3 \times \ldots \times 11 \times 12 = {479\ 001\ 600}$
>
> ---
>
> - _Proposition des physiciens :_
>
> Le groupe des physiciens est composé de $3$ personnes.
>
> Vu qu'ils souhaitent s'assoir côte à côte, le groupe dispose de $10$ positions possibles :
>
> Les places $1-2-3$ ou $2-3-4$ ou $3-4-5$ ou $\ldots$ ou $10-11-12$.
>
> Au sein du groupe des physiciens, le nombre de façons de s'assoir est égal au nombre de permutations d'un ensemble à $3$ éléments, soit : $3! = 6$.
>
> Au sein du groupe formé par les autres scientifiques, le nombre de façons de s'assoir est égal au nombre de permutations d'un ensemble à $12 - 3 = 9$ éléments, soit : $9! = {362\ 880}$.
>
> Donc, d'après le principe multiplicatif, le nombre total de façons de s'assoir selon les physiciens est égal à : $10 \times 6 \times {362\ 880} = {21\ 772\ 800}$
>
> ---
>
> - _Proposition des biologistes_ :
>
> Le nombre d'ordres possibles pour placer le groupe des femmes et des hommes est égal à $2$ : hommes-femmes ou femmes-hommes.
>
> Au sein du groupe des femmes, le nombre de façons de s'assoir est égal au nombre de permutations d'un ensemble à 6 éléments, soit : $6! = 720$.
>
> De même pour le groupe des hommes : $6! = 720$.
>
> Donc, d'après le principe multiplicatif, le nombre total de façons de s'assoir selon les biologistes est égal à : $2 \times 720 \times 720 = {1\ 036\ 800}$.
```

## Combinaisons

### Nombre de combinaisons

```admonish rem
**Ici, l'ordre des éléments n'a pas d'importance et les éléments ne se répètent pas**
```

```admonish ex
On considère l'ensemble $E = \brack{ 1 ;2 ;3 ;4 ;5 }$.

Le sous-ensemble $\brack{ 1 ;2 ;3 }$ est appelée une combinaison de $E$ à $3$ éléments.

Le sous-ensemble $\brack{ 2 ;5 }$ est appelée une combinaison de $E$ à $2$ éléments.

Pour une combinaison, l'ordre n'a pas d'importance. Ainsi $\brack{ 1 ;2 }$ et $\brack{ 2 ;1 }$ correspondent à la même combinaison de $E$.
```

```admonish def
Soit $E$ un ensemble fini à $n$ éléments et $k \le n$.

Une **combinaison** de $k$ éléments de $E$ est un sous-ensemble de $E$.
```

```admonish prop
Soit $E$ un ensemble fini à $n$ éléments.

Le nombre de combinaisons de $k$ éléments de $E$ est égal à :

$$\boxed{\cfrac{n \times (n - 1) \times (n - 2) \times \ldots \times (n - k + 1)}{k!} = \cfrac{n!}{k!(n - k)!}}$$

Ce nombre se note : $\boxed{\coord{n}{k}}$

_Cas particuliers :_ $\qquad\coord{n}{0}= 1\qquad\coord{n}{n}=1\qquad\coord{n}{1}=n$
```

```admonish meth title="Méthode : Dénombrer des combinaisons"
Une classe composée de $18$ filles et $16$ garçons va élire les $4$ délégués.

Dans cet exercice, on ne distingue pas les délégués et les délégués-adjoints.

a. Combien existe-t-il de possibilités pour cette élection ?
b. Emma dit qu'elle ne souhaite pas être élue si Bastien est élu. Dans ces conditions, combien existe-t-il de possibilités ?

---

a. On compte le nombre de combinaisons de $4$ élèves parmi $18 + 16 = 34$ élèves, soit :

> $$\coord{34}{4} = \cfrac{34!}{4!(34 - 4)!} = \cfrac{34!}{4!30!} = \cfrac{31 \times 32 \times 33 \times 34}{1 \times 2 \times 3 \times 4} = {46\ 376}$$

b. On commence par compter le nombre de possibilités tel que Emma et Bastien sont élus.

> Si Emma et Bastien sont élus, il reste à choisir 2 élèves parmi $32$, soit le nombre de combinaisons de $2$ élèves parmi $32$ élèves, soit encore :
>
> $$\coord{32}{2}=\cfrac{32!}{2!(32-2)!}=\cfrac{32!}{2!30!}=\cfrac{31\times32}{1\times2}=496$$
>
> Ainsi dans ce cas, le nombre de possibilités est égal à ${46\ 376} - 496 = {45\ 880}$.
```

### Coefficients binomiaux

```admonish rem
Le nombre $\coord{n}{k}$ de combinaisons de $k$ parmi $n$ porte également le nom de **coefficient binomial** en référence à une loi de probabilité : la _loi binomiale_ qui est définie à l'aide des coefficients $\coord{n}{m}$.
```

```admonish prop title="Propriété : Symétrie"
Pour tout entier naturel $k$ tel que $0 \le k \le n$ :

$$\boxed{\coord{n}{n-k}=\coord{n}{k}}$$
```

```admonish prop title="Propriété : Triangle de Pascal"
Pour tout entier naturel $k$ tel que $0 \le k \le n$ :

$$\boxed{\coord{n+1}{k+1}=\coord{n}{k}+\coord{n}{k+1}}$$
```

```admonish demo
$$
\begin{array}{rcl}
	\coord{n}{k}+\coord{n}{k+1} & = & \cfrac{n!}{k!(n-k)!}+\cfrac{n!}{(k+1)!(n-k-1)!}          \\\\
	                            & = & \cfrac{n!}{k!(n-k-1)!(n-k)}+\cfrac{n!}{k!(k+1)(n-k-1)!}  \\\\
	                            & = & \cfrac{n!}{k!(n-k-1)!}\pa{\cfrac{1}{n-k}+\cfrac{1}{k+1}} \\\\
	                            & = & \cfrac{n!}{k!(n-k-1)!}\pa{\cfrac{k+1+n-k}{(n-k)(k+1)}}   \\\\
	                            & = & \cfrac{n!}{k!(n-k-1)!}\pa{\cfrac{n+1}{(n-k)(k+1)}}       \\\\
	                            & = & \cfrac{n!(n+1)}{k!(k+1)(n-k-1)!(n-k)}                    \\\\
	                            & = & \cfrac{(n+1)!}{(k+1)!(n-k)!} \qquad = \coord{n+1}{k+1}
\end{array}
$$
```

```admonish meth title="Méthode : Calculer des coefficients binomiaux"
Calculer :

a. $\coord{25}{24}$

b. $\coord{4}{2}$

---

a. $\coord{25}{24}=\coord{25}{25-24}=\coord{25}{1}=25$

b. $\coord{4}{2}=\coord{3}{1}+\coord{3}{2}=3+\coord{2}{2}+\coord{2}{1}=3+1+2=6$

> Avec la calculatrice : Il est possible de vérifier les résultats à l'aide d'une calculatrice.
>
> La fonction se nomme "**_combinaison_**" ou "**_nCr_**".
>
> Pour calculer $\coord{25}{24}$, on saisit : 25**_combinaison_**24 ou 25**_nCr_**24
>
> Avec un tableur, la fonction se nomme "**_COMBIN_**". Pour calculer $\coord{25}{24}$, on saisit =**_COMBIN_**(25;24)
```

### Le triangle de Pascal

```admonish def
Le grand tableau qui suit s'appelle le triangle de Pascal.

$$
\begin{array}{c|ccccccc}
	n\downarrow\ k\rarr & 0      & 1         & 2                   & 3      & 4      & 5      & \ldots \\\\ \hline
	0                   & 1      & \         & \                   & \      & \      & \      & \      \\\\
	1                   & 1      & 1         & \                   & \      & \      & \      & \      \\\\
	2                   & 1      & 2         & 1                   & \      & \      & \      & \      \\\\
	3                   & 1      & 3         & 3                   & 1      & \      & \      & \      \\\\
	4                   & 1      & 4         & \cbox{lightblue}{6} & 4      & 1      & \      & \      \\\\
	5                   & 1      & \boxed{5} & \boxed{10}          & 10     & 5      & 1      & \      \\\\
	6                   & 1      & 6         & \boxed{15}          & 20     & 15     & 6      & 1      \\\\
	\ldots              & \ldots & \ldots    & \ldots              & \ldots & \ldots & \ldots & \ldots \\\\
\end{array}
$$

Il se complète de proche en proche de la manière ci-dessous.

![](img/combin/image7.png =200x center)

Le triangle de Pascal peut être utilisé pour lire rapidement les coefficients binomiaux.

Par exemple, pour $n = 4$ et $k = 2$, on a : $\coord{n}{k}=\coord{4}{2}=\cbox{lightblue}{6}$

On retrouve la propriété du triangle de Pascal : $\coord{5}{1}+\coord{5}{2}=\coord{6}{2}=10+5=15$

De façon générale, on a : $\boxed{\coord{n}{k}+\coord{n}{k+1}=\coord{n+1}{k+1}}$
```

### Parties d'un ensemble

```admonish prop
Soit $E$ un ensemble fini à $n$ éléments.

Le nombre de sous-ensemble de $E$ est égal à :

$$\boxed{\sum_{k = 0}^{n}\coord{n}{k}=\coord{n}{0}+\coord{n}{1}+\coord{n}{2}+\ldots+\coord{n}{n}=2^n}$$
```

```admonish demo
- Le nombre de sous-ensemble de $E$ est égal à la somme des sous-ensembles à $0$ élément, à $1$ éléments, à $2$ éléments, $\ldots$, à $n$ éléments. Soit : $\coord{n}{0}+\coord{n}{1}+\coord{n}{2}+\ldots+\coord{n}{n}$
- Par ailleurs, pour construire un sous-ensemble de $E$, on considère $n$ étapes où à chaque élément de $E$, on décide de le choisir ou de ne pas le choisir pour l'inclure dans le sous-ensemble.

Il y a donc deux possibilités par étape et il y a $n$ étapes.

Il y a donc $2 \times 2 \times \ldots \times 2$ ($n$ facteurs) possibilités d'obtenir un sous-ensemble de $E$, soit $2^{n}$.
```

```admonish ex
Soit : $E = \{ 1, 2, 3\}$. Alors toutes les parties de $E$ sont :

$$\varnothing,\\{1\\},\\{2\\},\\{3\\},\\{1,2\\},\\{1,3\\},\\{2,3\\},\\{1,2,3\\}$$

Elles sont au nombre de $8$. En effet, ici $n = 3$ et $2^{3} = 8$.
```

### Pour résumer : Arrangement, permutation, combinaison... : lequel choisir ?

```admonish exemple title="Exemple : ORDONNÉ - RÉPÉTITION"
Nombre de mots composés de $3$ lettres de l'alphabet ?

$\rarr$ Nombre de triplets d'un ensemble à $26$ éléments = $26^{3}$.
```

```admonish exemple title="Exemple : ORDONNÉ - PAS RÉPÉTITION"
Nombre de mots composés de $3$ lettres de l'alphabet toutes différentes ?

$\rarr$ Nombre de triplets d'éléments tous distincts (arrangements) d'un ensemble à $26$ éléments = $26 \times 25 \times 24$.
```

```admonish exemple title="Exemple : ORDONNÉ - PAS RÉPÉTITION"
Nombre d'anagrammes du mot "MDR".

$\rarr$ Nombre de permutations à $3$ éléments = $3!$
```

```admonish exemple title="Exemple : NON ORDONNÉ - PAS RÉPÉTITION"
Nombre de possibilités de tirer simultanément $3$ jetons parmi $6$ jetons marqués de $6$ lettres toutes différentes.

$\rarr$ Nombre de combinaisons à $3$ éléments parmi $6 = \coord{6}{3}$.
```
