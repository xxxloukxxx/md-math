# Vecteurs et colinéarité

<!-- toc -->

## Produit d'un vecteur par un réel

```admonish ex
Soit $\vv{u}$ un vecteur du plan.

Appliquer $5$ fois la translation de vecteur $\vv{u}$ revient à appliquer la translation de vecteur :

$$\vv{w} = \vv{u}+\vv{u}+\vv{u}+\vv{u}+\vv{u}=5\vv{u}$$

![](img/vec3/16.png =400x center)
```

```admonish def
On appelle **produit** du vecteur $\vv{u}$ par le réel $k$, le vecteur noté $k\vv{u}$ :

- de **même direction** que $\vv{u}$
- de :
    - **même sens** que $\vv{u}$ si $k>0$
    - **sens contraire** que $\vv{u}$ si $k \lt 0$
- de **norme** égale à :
    - $k$ fois la norme de $\vv{u}$ si $k> 0$
    - $(-k)$ fois norme de $\vv{u}$ si $k \lt 0$

![](img/vec3/15.png =700x center)
```

```admonish ex
![](img/vec3/17tt.png =500x center)

- $\vv{u}\ $, $\ 2.5\vv{u}\ $ et $\ -0.9\vv{u}\ $ ont la même **direction**.
- $\vv{u}\ $ et $\ 2.5\vv{u}\ $ sont de **même sens**. (car $2.5>0$)
- La norme de $\ 2.5\vv{u}\ $ est égale à $2.5$ fois la norme de $\ \vv{u}$
- $\ \vv{u}$ et $\ -0.9\vv{u}\ $ sont de **sens contraire**. (car $-0.9 \lt 0$)
- La norme de $\ -0.9\vv{u}\ $ est égale à $0.9$ fois la norme de $\ \vv{u}$
```

```admonish meth title="Méthode : Représenter un vecteur défini comme produit et somme de vecteurs"
Soit deux vecteurs $\vv{u}$ et $\vv{v}$.

![](img/vec3/18a.png =700x center)

Représentons le vecteur $\vv{w}=2\vv{u}-\vv{v}$.

- Pour représenter $2\vv{u}$, on place bout à bout deux vecteurs $\vv{u}$.
- Pour représenter $\pa{-\vv{v}}$, on représente un vecteur de même direction et même longueur que $\vv{v}$ mais de sens opposé.
- Pour représenter le vecteur $\vv{w}=2\vv{u}-\vv{v}$, on place bout à bout les vecteurs $2\vv{u}$ et $\pa{-\vv{v}}$

![](img/vec3/18.png =700x center)
```

```admonish ex
Soit les points $A$, $B$ et $C$

![](img/vec3/19a.png =600x center)

Construisons $M$ tel que :

$$\vv{AM}=-\vv{AB}+3\vv{AC}$$

Pour représenter $\vv{AM}$, on place bout à bout à partir de $A$ :

- $\vv{-AB}$
- $3\vv{AC}$.

Le point $M$ se trouve à l'extrémité du vecteur $3\vv{AC}$.

![](img/vec3/19b.png =600x center)
```

```admonish meth title="Méthode : Exprimer, par lecture graphique, un vecteur en fonction d'autres vecteurs"
Par lecture graphique, exprimons $\vv{u}$ en fonction de $\vv{a}$ et $\vv{b}$.

![](img/vec3/20a.png =300x center)

On construisons **"un chemin"** de vecteurs $\vv{a}$ et $\vv{b}$ mis bout à bout reliant l'origine et l'extrémité du vecteur $\vv{u}$.

On peut ainsi compter ainsi le nombre de $\vv{a}$ et $\vv{b}$ formant le **"chemin"**. On a :

$$\vv{u}=3\vv{a}+3\vv{b}$$

![](img/vec3/20b.png =300x center)
```

## Notion de colinéarité

### Définition

```admonish def
$\vv{u}$ et $\vv{v}$ sont **colinéaires** signifie qu'ils ont **même direction**.

Dans ce cas, il existe un nombre réel $k$ tel que :

$$\vv{u}=k\vv{v}$$

![](img/vec3/21.png =600x center)
```

```admonish meth title="Méthode : Démontrer que des vecteurs sont colinéaires"
On donne $\vv{u}$ et $\vv{v}$ tel que : $\quad -4\vv{u}+3\vv{v}=\vv{0}$

$\vv{u}$ et $\vv{v}$ sont-ils colinéaires ?

$$
\begin{array}{rcl}
	-4\vv{u}+3\vv{v}=\vv{0} & \iff & -4\vv{u}=-3\vv{v}                          \\\\
	                        & \iff & \vv{u}=\dfrac{-3}{-4}\vv{v}                \\\\
	                        & \iff & \vv{u}=\dfrac{3}{4}\vv{v}                  \\\\
	                        & \iff & \vv{u} \text{et} \vv{v} \text{colinéaires}
\end{array}
$$
```

```admonish prop
- $\vv{AB}\ $ et $\ \vv{CD}\ $ colinéaires $\iff (AB)\parallel(CD)$
- $\vv{AB}\ $ et $\ \vv{AC}\ $ colinéaires $\iff A\ $, $\ B\ $ et $\ C\ $ alignés

| $\vv{AB} $ et $ \vv{CD} $ colinéaires $\iff (AB)\parallel(CD)$ | $\vv{AB} $ et $ \vv{AC} $ colinéaires $\\\\ \iff A$, $B$ et $C$ alignés |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------------------: |
|                ![](img/vec3/22.1.png =300x center)                |                       ![](img/vec3/22.2.png =300x center)                       |
```

### Colinéarité et coordonnées

```admonish prop
Soient $\vv{u}\coord{x}{y}$ et $\vv{v}\coord{x'}{y'}$ deux vecteurs dans un repère $(O;\vv{i},\vv{j})$.

$$\vv{u} \text{ et } \vv{v} \text{ colinéaires }\iff (x\times y')-(y\times x')=0$$
```

```admonish demo
> Dire que les vecteurs $\vv{u}\coord{x}{y}$ et $\vv{v}\coord{x'}{y'}$ sont colinéaires équivaut à dire qu'il existe un nombre réel $k$ tel que $\vv{u}=k\times \vv{v}$.
>
> $$
> \begin{array}{rcl}
> 	\vv{u} \text{ et } \vv{v} \text{colinéaires} & \Rarr & \vv{u}=k\times\vv{v}                                     \\\\
> 	                                             & \Rarr & \begin{cases}x=k\times x'\\\\y=k\times y'\end{cases}     \\\\
> 	                                             & \Rarr & \begin{cases}k=\frac{x}{x'}\\\\k=\frac{y}{y'}\end{cases} \\\\
> 	                                             & \Rarr & \frac{x}{x'}=\frac{y}{y'}                                \\\\
> 	                                             & \Rarr & (x\times y')=(y\times x')                                \\\\
> 	                                             & \Rarr & (x\times y')-(y\times x')=0
> \end{array}
> $$

> Réciproquement, si $xy'-yx'=0$.
>
> $\vv{v}$ étant non nul, l'une de ses coordonnées est non nulle. Supposons que $x'\neq 0$.
>
> Posons alors $k = \frac{x}{x'}$ .
>
> On a :
>
> $$
> \begin{array}{rcl}
> 	xy'-yx'=0 & \Rarr & yx'=xy'                                                                                                                                  \\\\
> 	          & \Rarr & y=\frac{x}{x'}y                                                                                                                          \\\\
> 	          & \Rarr & y=ky'                                                                                                                                    \\\\
> 	          & \Rarr & \begin{cases}x=kx'\\\\y=ky'\end{cases}\quad \Rarr \quad \vv{u}=k\vv{v}\quad \Rarr \quad \vv{u} \text{ et } \vv{v} \text{colinéaires}
> \end{array}
> $$
```

```admonish meth title="Méthode : Vérifier si deux vecteurs sont colinéaires"
- Soient $\vv{u}\coord{4}{-7}$ et $\vv{v}\coord{-12}{21}$.

$$\begin{aligned}xy'-yx' &=\left(4\times 21\right)-\left((-7)\times (-12)\right)\\\\ &=84-84=0\qquad\Rarr\vv{u} \text{ et } \vv{v} \text{colinéaires}\end{aligned}$$

- Soient $\vv{u}\coord{5}{-2}$ et $\vv{v}\coord{15}{-7}$.

$$\begin{aligned}xy'-yx' &=\left(5\times (-7)\right)-\left((-2)\times 15\right)\\\\ &=-35+30=-5\qquad\Rarr\vv{u} \text{ et } \vv{v} \text{non colinéaires}\end{aligned}$$
```

### Déterminant

```admonish def
Soient $\vv{u}\coord{x}{y}$ et $\vv{v}\coord{x'}{y'}$ deux vecteurs dans un repère $(O;\vv{i},\vv{j})$.

Le nombre $\ \pa{xy'-yx'}\ $ est appelé déterminant de $\vv{u}$ et $\vv{v}$.

On note :

$$\det(\vv{u};\vv{v})=\begin{vmatrix}x&x'\\\\y&y'\end{vmatrix}=xy'-yx'$$
```

### Colinéarité et déterminant

```admonish prop
$$\vv{u} \text{ et } \vv{v} \text{ colinéaires }\ \iff\ \det(\vv{u};\vv{v})=0$$
```

```admonish meth title="Méthode : Vérifier si deux vecteurs sont colinéaires à l'aide du déterminant"
Soient $\quad\vv{u}\coord{-6}{10}\ $ et $\ \vv{v}\coord{9}{-15}$

$$\begin{aligned}\det(\vv{u};\vv{v}) & =\begin{vmatrix}-6&9\\\\10&-15\end{vmatrix} \\\\ &=\big((-6)\times (-15)\big)-\big(10\times 9\big)\\\\ &=90-90=0\qquad\Rarr\vv{u} \text{ et } \vv{v} \text{colinéaires}\end{aligned}$$
```

```admonish meth title="Méthode : Utiliser la colinéarité dans un repère"
Soient $A(-1;1)$, $\ B(3;2)$, $\ C(-2;-3)$, $\ D(6;-1)\ $ et $\ E(5;0)$.

> Démontrons que $(AB)\parallel(CD)$
>
> On a : $\ \vv{AB}=\begin{pmatrix}3-(-1)\\\\2-1\end{pmatrix}=\begin{pmatrix}4\\\\1\end{pmatrix}\quad$ et $\quad\vv{CD}=\begin{pmatrix}6-(-2)\\\\-1-(-3)\end{pmatrix}=\begin{pmatrix}8\\\\2\end{pmatrix}$
>
> Donc :
>
> $$\det(\vv{AB};\vv{CD})=\begin{vmatrix}4&8\\\\1&2\end{vmatrix}=(4\times 2)-(8\times 1)=0$$
>
> Donc $ \vv{AB} $ et $\vv{CD}$ sont colinéaires $\iff(AB)\parallel(CD)$

> Démontrons que $E$, $B$ et $D$ sont alignés
>
> On a : $\ \vv{EB}=\begin{pmatrix}3-5\\\\2-0\end{pmatrix}=\begin{pmatrix}-2\\\\2\end{pmatrix}\quad$ et $\quad\vv{ED}=\begin{pmatrix}6-5\\\\-1-0\end{pmatrix}=\begin{pmatrix}1\\\\-1\end{pmatrix}$
>
> Donc :
>
> $$\det(\vv{EB};\vv{ED})=\begin{vmatrix}-2&1\\\\2&-1\end{vmatrix}=\big((-2)\times (-1)\big)-(2\times 1)=0$$
>
> Donc $ \vv{EB} $ et $\vv{ED}$ sont colinéaires $\iff E$, $B$ et $D$ sont alignés
```
