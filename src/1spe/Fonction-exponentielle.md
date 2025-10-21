# Fonction exponentielle

<!-- toc -->

## Définition de la fonction exponentielle

```admonish def
Il existe une unique fonction $f$ dérivable sur $\mathbb{R}$ telle que :
$$f'=f\quad\text{et}\quad f(0)=1$$

Cette fonction s'appelle **fonction exponentielle** et se note $\exp$.
```

```admonish prop
$$\exp(0)=1$$
```

```admonish rem
Il est possible d'observer l'allure de la courbe représentative de la fonction exponentielle

![](img/exp/01.png =500x center)
```

```admonish rem
La fonction exponentielle est **croissante**.

Mais sa croissance est très rapide : $\quad\exp(21)>1~000~000~000$.

Pour des valeurs de $x$ de **plus en plus grandes**, la fonction exponentielle prend des valeurs de **plus en plus grandes**.
```

```admonish prop
La fonction exponentielle est **strictement positive** sur $\mathbb{R}$.

![](img/exp/01.png =400x center)
```

## Étude de la fonction exponentielle

### Dérivabilité

```admonish prop
La fonction exponentielle est dérivable sur $\mathbb{R}$ et

$$\Big(\exp{(x)}\Big)'=\exp{(x)}$$
```

### Variations

```admonish prop
La fonction exponentielle est **strictement croissante** sur $\mathbb{R}$.

En effet, $\Big(\exp{(x)}\Big)'>0$ car $\Big(\exp{(x)}\Big)'=\exp{(x)}>0$.
```

### Courbe représentative

```admonish prop
Tableau de variations de $f(x)=\exp{(x)}$

![](img/exp/02.png =300x center)

![](img/exp/01.png =500x center)
```

## Propriété de la fonction exponentielle

### Relation fonctionnelle

```admonish theoreme
Pour tous réels $x$ et $y$, on a :

$$\exp{(x+y)}=\exp{(x)}\times\exp{y}$$
```

```admonish demo
Soit $f(x)=\cfrac{\exp{(x+a)}}{\exp{(x)}} = \cfrac{u}{v}$ définie sur $\R$.

On a $\quad f'(x)=\cfrac{u'v-uv'}{v^2}=\cfrac{\exp{(x+a)}\exp{(x)}-\exp{(x+a)}\exp{(x)}}{(\exp{(x)})^2}=0$

La fonction $f$ est donc constante et pour tout x, $f(x) = f(0) = exp(a)$.

D'où, $\quad\cfrac{\exp{(x+a)}}{\exp{(x)}}=\exp{(a)}\quad\iff\quad\exp{(x+a)}=\exp{(a)}\times\exp{(x)}$

En prenant $a=y$, on retrouve la formule à démontrer.
```

```admonish rem
Cette formule permet de transformer **une somme** en **produit** et réciproquement.
```

```admonish prop
Pour tous réels $x$ et $y$, on a :

| Propriétés |                                                                               |
| :--------- | :---------------------------------------------------------------------------- |
| Opposé     | $\exp{(-x)}=\cfrac{1}{\exp{(x)}}\qquad$ ou $\quad\exp{(x)}\times\exp{(-x)}=1$ |
| Différence | $\exp{(x-y)}=\cfrac{\exp{(x)}}{\exp{(y)}}$                                    |
| Produit    | $\exp(nx)=\left(\exp{(x)}\right)^n\quad$ avec $n\in\mathbb{N}$                |
```

```admonish demo
1. $\exp{(-x)}=\cfrac{1}{\exp{(x)}}\qquad$ ou $\quad\exp{(x)}\times\exp{(-x)}=1$

> $\begin{aligned}\exp{(x)}\times\exp(-x)&=\exp\Big(x+(-x)\Big)\\\\&=\exp{(0)}=1\end{aligned}$

2. $\exp{(x-y)}=\cfrac{\exp{(x)}}{\exp{(y)}}$

> $\begin{aligned}\exp{(x-y)}&=\exp{\Big(x+(-y)\Big)}\\\\ &=\exp{(x)}\times\exp{(-y)}\\\\ &=\exp{(x)}\times\cfrac{1}{\exp{(y)}}\quad =\cfrac{\exp{(x)}}{\exp{(y)}}\end{aligned}$
```

### Le nombre $e$

```admonish def
L'image de $1$ par la fonction exponentielle est notée $e$.

$$\exp{(1)}=e$$
```

```admonish rem
Avec la calculatrice, on peut obtenir une valeur approchée de $e$.

![](img/exp/03.png =300x center)
```

```admonish prop
**Notation nouvelle :**

$$\exp{(x)}=\exp(x\times 1)=\Big(\exp{(1)}\Big)^x =e^x$$

On note, pour tout $x\in\mathbb{R}$, $~\exp{(x)}=e^x$

Comme $\pi$, le nombre $e$ est un nombre **irrationnel**, c'est à dire qu'il s'écrit avec un nombre infini de décimales sans suite logique.

Ses premières décimales sont :

$$e \approx 2,7182818284 5904523536 \ldots$$
```

```admonish prop
Pour tous réels $x$ et $y$, on a :

| Propriétés            |                                                                       |
| :-------------------- | :-------------------------------------------------------------------- |
| Valeurs remarquables  | $~e^0=1\quad$ et $\quad e^1=e$                                        |
| Signe et dérivée      | $~e^x>0\quad$ et $\quad (e^x)'=e^x$                                   |
| Exp. d'une somme      | $~e^{(x+y)}=e^x\times e^y$                                            |
| Exp. d'une différence | $~e^{(x-y)}=\cfrac{e^x}{e^y}\quad$ et $\quad e^{(-x)}=\cfrac{1}{e^x}$ |
| Puissance d'une exp.  | $~{(e^x)}^{n}=e^{nx}\quad$ avec $~n\in\mathbb{N}$                     |
```

```admonish meth title="Méthode : Dériver une fonction exponentielle"
- $f(x)=4x-3e^x$

> On a $\quad \left(4x\right)'=4\quad$ et $\quad\left(e^x\right)'=e^x$
>
> Donc $\quad f'(x)=4-3e^x$

---

- $g(x)=(x-1)e^x\qquad = u\times v\quad$ avec $\begin{cases}u=(x-1)& u'=1\\\\v=e^x&v'=e^x\end{cases}$

> On a $\quad g'(x)=u'v+uv'=(1\times e^x)+(x-1)e^x=e^x+xe^x-e^x$
>
> Donc $\quad g'(x)=xe^x$

---

- $h(x)=\cfrac{e^x}{x}\qquad =\cfrac{u}{v}\quad$ avec $\begin{cases}u=e^x& u'=e^x\\\\v=x&v'=1\end{cases}$

> On a $\quad h'(x)=\cfrac{u'v+uv'}{v^2}=\cfrac{xe^x+e^x}{x^2}$
>
> Donc $\quad h'(x)=\cfrac{(x+1)e^x}{x^2}$
```

```admonish meth title="Méthode : Simplifier les écritures"
> $\begin{aligned}
> A=\cfrac{e^{7}\times e^{-4}}{e^{-5}}\qquad & =\cfrac{e^{7+(-4)}}{e^{-5}}             \\\\
> ~                                          & =\cfrac{e^{3}}{e^{-5}}=e^{3-(-5)}=e^{8} \\\\
> \end{aligned}$

> $\begin{aligned}
> B={(e^5)}^{-6}\times e^{-3}\qquad & =e^{5\times (-6)}\times e^{-3} \\\\
> ~                                 & =e^{-30}\times e^{-3}~=e^{-33}
> \end{aligned}$

> $\begin{aligned}
> C=\cfrac{1}{\left(e^{-3}\right)^2}+\cfrac{{(e^4)}^{-1}}{e^2\times e^{-6}}\qquad & =\cfrac{1}{e^{-6}}+\cfrac{e^{-4}}{e^{-4}} \\\\
> ~                                                                               & =e^{6}+1
> \end{aligned}$

> $\begin{aligned}
> D=\cfrac{{\left(e^{2x}\right)}^3}{e^{(3x+1)}\times e^{(-x-1)}}\qquad & =\cfrac{e^{6x}}{e^{(3x+1-x-1)}}            \\\\
>                                                                     & =\cfrac{e^{6x}}{e^{2x}}\ =e^{6x-2x}\ =e^{4x}
> \end{aligned}$
```

```admonish prop
Pour tous réels $a$ et $b$, on a :

- $e^a=e^b\quad\iff\quad a=b$
- $e^a<e^b\quad\iff\quad a<b$
```

```admonish meth title="Méthode : Résoudre une équation ou une inéquation"
- Résoudre dans $\mathbb{R}$ l'équation : $\quad e^{(x^2-3)}-e^{(-2x)}=0$

$$
\begin{aligned}
e^{(x^2-3)}-e^{(-2x)}=0\quad&\iff\quad e^{(x^2-3)}=e^{(-2x)}\\\\
                       \quad&\iff\quad x^2-3=-2x\\\\
                       \quad&\iff\quad x^2+2x-3=0\quad~~\Rightarrow\Delta=b^2-4ac=16\\\\
                       \quad&\iff\quad
                                        \begin{cases}
                                          x_1=\cfrac{-2-\sqrt{16}}{2\times 1}=-3\\\\
                                          x_2=\cfrac{-2+\sqrt{16}}{2\times 1}=1
                                        \end{cases}
                                        \quad\iff\quad S=\left\\{-3~;~1\right\\}\\\\
\end{aligned}
$$

- Résoudre dans $\mathbb{R}$ l'inéquation : $\quad e^{(4x-1)}\geq 1$

$$
\begin{aligned}
e^{(4x-1)}\geq 1 \quad&\iff\quad e^{(4x-1)}\geq e^{0}\\\\
                 \quad&\iff\quad 4x-1\geq 0\\\\
                 \quad&\iff\quad 4x\geq 1\\\\
                 \quad&\iff\quad x\geq \cfrac{1}{4}\quad\iff\quad S=\Big[\cfrac{1}{4};+\infty\Big[
\end{aligned}
$$
```

```admonish meth title="Méthode : Étudier une fonction exponentielle"

Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x)=(x+1)e^x$.

- Calcul de $f'(x)$

> $f(x)=(x+1)e^x\quad=u\times v\qquad$ avec $\begin{cases}u=x+1\quad&u'=1\\\\v=e^x\quad&v'=e^x\end{cases}$
>
> On a :
>
> $f'(x)=u'v+uv'\quad=(1\times e^x)+(x+1)e^x$
>
> $f'(x)=(x+2)e^x$

- Signe de $f'(x)$

> Pour tout $x\in\mathbb{R}$, on a : $\quad e^x>0\quad$ donc $f'(x)$ est du signe de $x+2$.
>
> $f'(x)>0\quad\iff\quad x+2>0\quad\iff\quad x>(-2)$

- Tableau de variations de $f$

![](img/exp/04.png =300x center)

> $f(-2)=(-2+1)e^{-2}=-e^{-2}$

- Équation de la tangente à $\mathscr{C_f}$ au point d'abscisse $x=0$

> $f(0)=(0+1)\times e^0=1\quad$ et $\quad f'(0)=(0+2)\times e^0=2$
>
> Une équation de la tangente à $\mathscr{C_f}$ en $x=0$ est :
>
> $$y=f'(0)(x-0)+f(0)\quad\iff\quad y=2x+1$$

- Courbe représentative de $f$

![](img/exp/05.png =500x center)
```

## Exponentielle et suite géométrique

### Rappel et propriété

```admonish note title="Rappel"
Une suite géométrique de raison $q$ et de 1$^{er}$ terme $u_0$ a pour terme général :

$$u_n=u_0\times q^n$$
```

```admonish prop
Pour tout $n\in\mathbb{N}$ et tout $a\in\mathbb{R}$, on a : $~e^{na}={(e^a)}^{n}=1\times {(e^a)}^{n}$.

Donc la suite $(e^{na})$ est une suite géométrique de raison $e^a$ et de 1$^{er}$ terme $1$.
```

```admonish meth title="Méthode : Déterminer une suite géométrique comprenant une exponentielle"
- $u_n=e^{4n}\qquad=1\times {\left(e^4\right)}^n$

> $(u_n)$ est une suite géométrique de raison $e^4$ et de 1$^\text{er}$ terme $~1$

- $v_n=2e^{-3n}\qquad=2\times {\left(e^{-3}\right)}^n$

> $(v_n)$ est une suite géométrique de raison $e^{-3}$ et de 1$^\text{er}$ terme $~2$

- $w_n=-{e}^{\left(\cfrac{n}{3}\right)}\qquad=-1\times{\left({e}^{\cfrac{1}{3}}\right)}^n$

> $(w_n)$ est une suite géométrique de raison $\left({e}^{\cfrac{1}{3}}\right)$ et de 1$^\text{er}$ terme $~(-1)$

- $z_n=e^{(2n-1)}\qquad=e^{2n}\times e^{(-1)}=e^{(-1)}\times {\left(e^{2}\right)}^n$

> $(z_n)$ est une suite géométrique de raison $\left({e}^{2}\right)$ et de 1$^\text{er}$ terme $~e^{(-1)}$

- Terme général d'une suite géométrique de raison $\left(\cfrac{1}{e}\right)$ et de premier terme $3$.

> $a_n=a_0\times q^n\qquad\iff\qquad a_n=3\times \left(\cfrac{1}{e}\right)^n=3{\left(e^{-1}\right)}^n=3e^{-n}$
```

## Fonctions de la forme $~t\mapsto e^{kt}$

### Variations de $~t\mapsto e^{kt}$

```admonish prop
La fonction $t\mapsto e^{kt}$, avec $k\in\mathbb{R}\setminus{0}$, est dérivable sur $\mathbb{R}$.

Sa dérivée est la fonction $~t\mapsto k\times e^{kt}$
```

```admonish demo
On rappelle que la dérivée d'une fonction $~t\mapsto g(at+b)$ est $~t\mapsto a\times g'(at+b)$.

En considérant $\quad g(t)=e^t$, $a=k$ et $b=0$

On a : $\quad\left(e^{kt}\right)'=k\times e^{kt}$.
```

```admonish ex
Soit $\quad f(t)=e^{(-4t)}\quad$ alors $\quad f'(t)=-4e^{(-4t)}$
```

```admonish prop
- Si $k > 0$ : la fonction $~t\mapsto e^{kt}$ est strictement **croissante**.
- Si $k < 0$ : la fonction $~t\mapsto e^{kt}$ est strictement **décroissante**.
```

```admonish demo
On a : $\left(e^{kt}\right)'=ke^{kt}$

Or, $e^{kt}>0$ pour tout réel $t$ et tout entier relatif $k$ non nul.

Donc le signe de la dérivée $~t\mapsto ke^{kt}$ dépend du signe de $k$.

- Si $(k\geq 0)$ alors $\left(ke^{kt}\geq 0\right)$ donc $~t\mapsto e^{kt}$ est croissante.
- Si $(k\leq 0)$ alors $\left(ke^{kt}\leq 0\right)$ donc $~t\mapsto e^{kt}$ est décroissante.
```

### Représentation graphique de $~t\mapsto e^{kt}$

> ![](img/exp/06.png =800x center)

```admonish meth
Suite à une infection, le nombre de bactéries contenues dans un organisme en fonction du temps (en heures) peut être modélisé par la fonction $f$ définie sur $[0~;~10]$ et telle que :

$$f'(t)=0.14\times f(t)$$

- Montrer que la fonction $f$ définie sur $[0~;~10]$ par $f(t)=Ae^{0.14t}$ convient.

> $$
> \begin{aligned}
> f(t)=Ae^{0.14t}\quad & \iff f'(t)=A\times 0.14\times e^{0.14t} \\\\
> \quad                & \iff f'(t)=0.14\times A\times e^{0.14t} \\\\
> \quad                & \iff f'(t)=0.14\times f(t)
> \end{aligned}
> $$
>
> $f$ définie sur $[0~;~10]$ par $f(t)=Ae^{0.14t}$ vérifie l'égalité $f'(t)=0.14\times f(t)$

- On suppose que $f(0)=50~000$. Déterminer $A$.

> $f(0)=A\times e^{(0.14\times 0)}=A\times e^0=A$
>
> Donc, si $\quad f(0)=50~000\quad$, on a $\quad A=50~000$.
>
> Une expression de la fonction $f$ est donc : $\quad f(t)=50~000\times e^{0.14t}$

- Déterminer les variations de $f$ sur $[0~;~10]$.

> Comme $k=0.14>0$, on en déduit que $\quad t\mapsto e^{0.14t}$ est **croissante** sur $[0;10]$.
>
> Il en est de même pour la fonction $f(t)=50~000\times e^{0.14t}$.

- À l'aide de la calculatrice :
  - Donner un arrondi (au millier près) du nombre de bactéries après 3h puis 5h30.
  - Déterminer au bout de combien de temps le nombre de bactéries a-t-il doublé. Arrondir à l'heure près.

> $f(3)=50~000\times e^{(0.14\times 3)}=50~000\times e^{0.42}\approx 76~000$
>
> $f(5.5)=50~000\times e^{(0.14\times5.5)}=50~000\times e^{0.77}\approx 108~000$
>
> Après 3h, l'organisme contient environ $76~000$ bactéries.
> Après 5h30, l'organisme contient environ $108~000$ bactéries.
>
> Le nombre de bactéries a doublé à partir de $100~000$ bactéries, soit au bout d'environ $5$h.

![](img/exp/07.png =300x center)
```
