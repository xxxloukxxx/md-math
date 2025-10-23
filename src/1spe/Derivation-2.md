# Fonction dérivée

## Dérivées des fonctions usuelles

```admonish ex
Soit la fonction $f$ définie sur $\R$ par $f(x)=x^2$.

Démontrons que pour tout $x\in\R$ , on : $f'(x)=2x$.

Pour cela, calculons le **nombre dérivé** de $f$ en un nombre réel quelconque $a$.

Pour $h\neq 0$ :

$$
\begin{aligned}
	\cfrac{f(a+h)-f(a)}{h} & =\cfrac{(a+h)^2-a^2}{h}                           \\\\
	                       & =\cfrac{a^2+2ah+h^2-a^2}{h}                       \\\\
	                       & =\cfrac{2ah+h^2}{h}                               \\\\
	                       & =\cfrac{h\times\left(2a+h\right)}{h} \qquad =2a+h \\\\
\end{aligned}
$$

Or $\quad\lim\limits_{h\to 0}\left(\cfrac{f(a+h)-f(a)}{h}\right) = \lim\limits_{h\to 0}\left(2a+h\right)=2a$

Pour tout nombre $a$, on associe le **nombre dérivé** de la fonction $f$ égal à $2a$.

On a donc défini sur $\R$ une fonction, notée $f'$ dont l'expression est $f'(x)=2x$.

Cette fonction s'appelle la **fonction dérivée** de $f$.
```

```admonish def
Soit $f$ une fonction définie sur $I$.

On dit que $f$ est dérivable sur $I$ si elle est dérivable en tout réel $x\in I$.

Dans ce cas, la fonction qui à tout $x\in I$ associe le **nombre dérivé** de $f$ en $x$ est appelée **fonction dérivée** de $f$ et se note $f'$.
```

### Formules de dérivation des fonctions usuelles$^\heartsuit$

```admonish prop

Soit $f$ définie sur $\Df$, $\ a\in\R$ et $n\in\N\minzero$ alors on a :

| $f$                   |          $\Df$           | $f'$                          |    $\mathcal{D}_{f'}$    |
| :-------------------- | :----------------------: | :---------------------------- | :----------------------: |
| $f(x)=a$              |           $\R$           | $f'(x)=0$                     |           $\R$           |
| $f(x)=ax$             |           $\R$           | $f'(x)=a$                     |           $\R$           |
| $f(x)=x^2$            |           $\R$           | $f'(x)=2x$                    |           $\R$           |
| $f(x)=x^n$            |           $\R$           | $f'(x)=nx^{(n-1)}$            |           $\R$           |
| $f(x)=\cfrac{1}{x}$   |       $\R\minzero$       | $f'(x)=\cfrac{-1}{x^2}$       |       $\R\minzero$       |
| $f(x)=\cfrac{1}{x^n}$ |       $\R\minzero$       | $f'(x)=\cfrac{-n}{x^{(n+1)}}$ |       $\R\minzero$       |
| $f(x)=\sqrt{x}$       | $\left[0;+\infty\right[$ | $f'(x)=\cfrac{1}{2\sqrt{x}}$  | $\left]0;+\infty\right[$ |
```

```admonish ex
- Soit $f$ définie sur $\R$ par $\quad \boxed{f(x)=x^4}\quad$ alors :
  - $f$ est dérivable sur $\R$
  - On a, pour tout $x\in\R$, $\quad \boxed{f'(x)=4x^3}$

- Soit $f$ définie sur $\R\minzero$ par $\quad \boxed{f(x)=\cfrac{1}{x^5}}\quad$ alors :
  - $f$ est dérivable sur $\R\minzero$
  - On a, pour tout $x\in\R\minzero$, $\quad \boxed{f'(x)=\cfrac{-5}{x^6}}$
```

```admonish demo title="Démonstration au programme : Dérivée de la fonction inverse"
Soit la fonction $f$ définie sur $\R\minzero$ par $f(x)=\cfrac{1}{x}$.

Démontrons que pour tout $x$ de $\R\minzero$, on a : $f'(x)=\cfrac{-1}{x^2}$.

Pour $h\neq 0$ et $h\neq-a$ :

$$
\begin{aligned}
	\cfrac{f(a+h)-f(a)}{h} & =\cfrac{\cfrac{1}{a+h}-\cfrac{1}{a}}{h}                           \\\\
	                       & =\cfrac{\quad\cfrac{a-(a+h)}{a(a+h)}\quad}{h}                     \\\\
	                       & =\cfrac{\quad\cfrac{-h}{a(a+h)}\quad}{h}\quad =\cfrac{-1}{a(a+h)}
\end{aligned}
$$

Donc $\lim\limits_{h\to 0}\left(\cfrac{f(a+h)-f(a)}{h}\right) =\lim\limits_{h\to 0}\left(\cfrac{-1}{a(a+h)}\right) =\cfrac{-1}{a^2}$

Pour tout nombre $a$, on associe le **nombre dérivé** de $f$ égal à $\cfrac{-1}{a^2}$

Ainsi, pour tout $x\in\R\minzero$, on a : $f'(x)=\cfrac{-1}{x^2}$.
```

```admonish demo title="Démonstration au programme : Non dérivabilité de la fonction racine carrée en 0"
Soit la fonction $f$ définie sur $\left[0;+\infty\right[$ par $f(x)=\sqrt{x}$

On calcule le taux de variation de $f$ en $0$ :

Pour $h>0$ :

$$
\begin{aligned}
	\cfrac{f(0+h)-f(0)}{h} & =\cfrac{\sqrt{0+h}-\sqrt{0}}{h}                                  \\\\
	                       & =\cfrac{\sqrt{h}}{h}                                             \\\\
	                       & =\cfrac{\sqrt{h}}{\sqrt{h}\times\sqrt{h}} & =\cfrac{1}{\sqrt{h}}
\end{aligned}
$$

Donc : $\lim\limits_{h\to 0}\left(\cfrac{f(0+h)-f(0)}{h}\right)=\lim\limits_{h\to 0}\left(\cfrac{1}{\sqrt{h}}\right)=+\infty$

En effet, lorsque $h\to 0$, $\left(\cfrac{1}{\sqrt{h}}\right)$ prend des valeurs de plus en plus grandes.

Donc $f$ n'est pas dérivable en $0$.

Géométriquement, cela signifie que la courbe représentative de la fonction **racine carrée** admet une **tangente verticale** en $x=0$.

![](img/deriv2/01.png =800x center)
```

## Opérations sur les fonctions dérivées

### Somme, produit, inverse, quotient de dérivées

```admonish ex
Soit la fonction $f$ définie sur $\R$ par $f(x)=x+x^2$.

Pour $h\neq 0$ :

$$
\begin{aligned}
	\cfrac{\tc{blue}{f(a+h)}-\tc{red}{f(a)}}{h} & =\cfrac{\left(\tc{blue}{(a+h)+(a+h)^2}\right)-\tc{red}{(a+a^2)}}{h}           \\\\
	                                            & =\cfrac{a+h+a^2+2ah+h^2-a-a^2}{h}                                             \\\\
	                                            & =\cfrac{h+2ah+h^2}{h}=\cfrac{h(1+2a+h)}{h}                          & =1+2a+h
\end{aligned}
$$

Donc : $\lim\limits_{h\to 0}\left(\cfrac{f(a+h)-f(a)}{h}\right)= \lim\limits_{h\to 0}\left(1+2a+h\right)=1+2a$.

Alors $f$ est dérivable sur $\R$ et on a pour tout $x\in\R$, $f'(x)=1+2x$.

On pose pour tout $x\in\R$ :

- $u(x)=x$
- $v(x)=x^2$

On a ainsi : $f(x)=u(x)+v(x)$

Pour tout $x\in\R$, on a donc :

- $u'(x)=1$
- $v'(x)=2x$

On constate sur cet exemple que : $f'(x)=u'(x)+v'(x)$

Soit encore $\boxed{(u+v)'(x)=u'(x)+v'(x)}$
```

### Formules d'opération sur les fonctions dérivées$^\heartsuit$

```admonish prop
$u$ et $v$ sont deux fonctions dérivables sur $I$.

| Dérivabilité                                           | Propriété      |
| :----------------------------------------------------- | :------------- |
| $(u+v)$ est dérivable sur $I$                          | $(u+v)'=u'+v'$ |
| $(ku)$ est dérivable sur $I\\\\$ avec $k\in\R$ | $(ku)'=ku'$    |
```

```admonish prop
$u$ et $v$ sont deux fonctions dérivables sur $I$.

| Dérivabilité                                                                             | Propriété                                         |
| :--------------------------------------------------------------------------------------- | :------------------------------------------------ |
| $(uv)$ est dérivable sur $I$                                                             | $(uv)'=u'v+uv'$                                   |
| $\left(\cfrac{1}{u}\right)$ est dérivable sur $I\\\\$ où $u$ **ne s'annule pas** sur $I$ | $\left(\cfrac{1}{u}\right)'=\cfrac{-u'}{u^2}$     |
| $\left(\cfrac{u}{v}\right)$ est dérivable sur $I\\\\$ où $v$ **ne s'annule pas** sur $I$ | $\left(\cfrac{u}{v}\right)'=\cfrac{u'v-uv'}{v^2}$ |
```

```admonish demo
**Démonstration au programme pour $(uv)'=u'v+uv'$**

On veut démontrer que $\lim\limits_{h\to 0}\left(\cfrac{(uv)(a+h)-(uv)(a)}{h}\right) = u'(a)v(a)+u(a)v'(a)$

Calculons $\cfrac{(uv)(a+h)-(uv)(a)}{h}$

$$
\begin{aligned}
	\cfrac{(uv)(a+h)-(uv)(a)}{h} & =\cfrac{u(a+h)v(a+h)-u(a)v(a)}{h}                                                                                                                           \\\\
	                             & =\cfrac{u(a+h)v(a+h)\quad\color{blue}-u(a)v(a+h)+u(a)v(a+h)\color{black}\quad-u(a)v(a)}{h}                                                                  \\\\
	                             & =\cfrac{u(a+h)\color{green}v(a+h)\color{black}-u(a)\color{green}v(a+h)\color{black}+\color{red}u(a)\color{black}v(a+h)-\color{red}u(a)\color{black}v(a)}{h} \\\\
	                             & =\cfrac{\Big(u(a+h)-u(a)\Big)\color{green}v(a+h)\color{black}+\color{red}u(a)\color{black}\Big(v(a+h)-v(a)\Big)}{h}                                         \\\\
	                             & =\cfrac{\Big(u(a+h)-u(a)\Big)v(a+h)}{h}+\cfrac{u(a)\Big(v(a+h)-v(a)\Big)}{h}                                                                                \\\\
	                             & =\cfrac{u(a+h)-u(a)}{h}\times v(a+h)\quad+\quad u(a)\times \cfrac{v(a+h)-v(a)}{h}
\end{aligned}
$$

On a :

- $\lim\limits_{h\to 0}\left(u(a+h)\right)=u(a)$
- $\lim\limits_{h\to 0}\left(v(a+h)\right)=v(a)$

De plus, on a $u$ et $v$ dérivables sur $I$ donc :

- $\lim\limits_{h\to 0}\left(\cfrac{u(a+h)-u(a)}{h}\right)=u'(a)$
- $\lim\limits_{h\to 0}\left(\cfrac{v(a+h)-v(a)}{h}\right)=v'(a)$

En passant à la limite lorsque $h\to 0$, on a :

$$
\begin{aligned}
	(uv)' & =\lim\limits_{h\to 0}\left(\cfrac{(uv)(a+h)-(uv)(a)}{h}\right)                                                                           \\\\
	      & =\lim\limits_{h\to 0}\left(\cfrac{u(a+h)-u(a)}{h}\times v(a+h)\quad+\quad u(a)\times \cfrac{v(a+h)-v(a)}{h}\right)                       \\\\
	      & =\lim\limits_{h\to 0}\left(\cfrac{u(a+h)-u(a)}{h}\times v(a+h)\right)+\lim\limits_{h\to 0}\left(\cfrac{v(a+h)-v(a)}{h}\times u(a)\right) \\\\
	      & =u'(a)v(a)+u(a)v'(a)
\end{aligned}
$$

On conclut que $(uv)'=u'v+uv'$
```

```admonish meth title="Méthode : Calculer les dérivées de sommes, produits et quotients de fonctions"
Calculons les fonctions dérivées des fonctions suivantes :

- $f_1(x)=5x^3$

> $f_1(x)=5\times u(x)\quad$ avec $\quad u(x)=x^3$ et $u'(x)=3x^2$
>
> Donc $\quad f_1'(x)=5\times u'(x)\quad=5\times 3x^2=15x^2$
>
> $\boxed{f_1'(x)=15x^2}$

- $f_2(x)=3x^2+4\sqrt{x}$

> $f_2(x)=3\times u(x)+4\times v(x)\quad$ avec $\begin{cases}u(x)=x^2\\\\v(x)=\sqrt{x}\end{cases}\Rarr\begin{cases}u'(x)=2x\\\\v'(x)=\cfrac{1}{2\sqrt{x}}\end{cases}$
>
> Donc $f_2'(x)=\left(3\times u'(x)\right)+\left(4\times v'(x)\right)=\left(3\times 2x\right)+\left(4\times \cfrac{1}{2\sqrt{x}}\right)$
>
> $\boxed{f_2'(x)=6x+\cfrac{2}{\sqrt{x}}}$

- $f_3(x)=\cfrac{1}{2x^2+5x}$

> $f_3(x)=\cfrac{1}{u}\quad$ avec $u(x)=2x^2+5x\quad\Rarr u'(x)=\left(2\times 2x\right)+\left(5\times 1\right)=4x+5$
>
> Donc $f_3'(x)=\cfrac{u'}{u^2}=\cfrac{4x+5}{(2x^2+5x)^2}$
>
> $\boxed{f_3'(x)=\cfrac{4x+5}{(2x^2+5x)^2}}$

- $f_4(x)=(3x^2+4x)(5x-1)$

> $f_4(x)=u(x)\times v(x)\quad$ avec $\begin{cases}u(x)=3x^2+4x\\\\v(x)=5x-1\end{cases}\Rarr\begin{cases}u'(x)=6x+4\\\\v'(x)=5\end{cases}$
>
> Donc :
>
> $\begin{aligned}
> f_4'(x)&=u'v+uv'\\\\
> &=(6x+4)(5x-1)+(3x^2+4x)(5)\\\\
> &=30x^2-6x+20x-4+15x^2+20x\\\\
> &=45x^2+34x-4
> \end{aligned}$
>
> $\boxed{f_4'(x)=45x^2+34x-4}$

- $f_5(x)=\cfrac{6x-5}{x^3-2x^2-1}$

> $f_5(x)=\cfrac{u(x)}{v(x)}\quad$ avec $\begin{cases}u(x)=6x-5\\\\v(x)=x^3-2x^2-1\end{cases}\Rarr\begin{cases}u'(x)=6\\\\v'(x)=3x^2-4x\end{cases}$
>
> Donc :
>
> $\begin{aligned}
> f_5'(x)&=\cfrac{u'v-uv'}{v^2}\\\\
> &=\cfrac{(6)(x^3-2x^2-1)-(6x-5)(3x^2-4x)}{(x^3-2x^2-1)^2}\\\\
> &=\cfrac{6x^3-12x^2-6-18x^3+24x^2+15x^2-20x}{(x^3-2x^2-1)^2}\\\\
> &=\cfrac{-12x^3+27x^2-20x-6}{(x^3-2x^2-1)^2}
> \end{aligned}$
>
> $\boxed{f_5'(x)=\cfrac{-12x^3+27x^2-20x-6}{(x^3-2x^2-1)^2}}$
```

### Composée de dérivées

```admonish prop
Soit $f$ définie sur $\Df$, $\ a\in\R$ et $b\in\R$, on a :

| $f$       | $\Df$                 | $f'$        |
| --------- | --------------------- | ----------- |
| $f(ax+b)$ | $f$ dérivable sur $I$ | $af'(ax+b)$ |
```

```admonish ex
$f(x)=\sqrt{5x-4}=u(5x-4)\quad$ avec $u(x)=\sqrt{x}\Rarr u'(x)=\cfrac{1}{2\sqrt{x}}$

Donc $f'(x)=5\times u'(5x-4)\ =5\times\cfrac{1}{2\sqrt{5x-4}}\ =\cfrac{5}{2\sqrt{5x-4}}$
```

### Cas de la fonction valeur absolue

#### Valeur absolue d'un nombre

```admonish ex
- La valeur absolue de -5 est égale à 5.
- La valeur absolue de 8 est égale à 8.
```

```admonish def
La **valeur absolue** d'un nombre $A$ est égal au nombre $A$ si $A$ est **positif**, et au nombre $-A$ si $A$ est négatif.

La **valeur absolue** de $A$ se note $|A|$.

$$|A|=\begin{cases}A&\text{si }A\geq0\\\\-A&\text{si }A\leq0\end{cases}$$
```

```admonish ex
$$|x-5|\quad=\begin{cases}x-5&\text{si }(x-5)\geq 0\\\\-(x-5)&\text{si }(x-5)\leq 0\end{cases}\quad=\begin{cases}x-5&\text{si }x\geq5\\\\5-x&\text{si }x\leq 5\end{cases}$$
```

#### Fonction valeur absolue

```admonish def
La fonction **valeur absolue** est la fonction $f$ définie sur $\R$ par $f(x)=|x|$.
```

```admonish prop
La fonction **valeur absolue** est :

- strictement **décroissante** sur $\left]-\infty;0\right]$
- strictement **croissante** sur $\left[0;+\infty\right[$.

![](img/deriv2/03.png =300x center)
```

```admonish note title="Représentation graphique"
![](img/deriv2/02.png =500x center)
```

```admonish rem
Dans un repère orthogonal, la courbe de la fonction valeur absolue est symétrique par rapport à l'axe des ordonnées.
```

```admonish demo title="Étude de la dérivabilité en 0"
Soit $f$ définie sur $\R$ par $f(x)=|x|$.

Calculons le taux de variation de $f$ en 0 :

$$\cfrac{f(0+h)-f(0)}{h}=\cfrac{|0+h|-|0|}{h}=\cfrac{|h|}{h}$$

- Si $h>0\iff |h|=h  \iff \cfrac{f(0+h)-f(0)}{h}=\cfrac{h}{h}=1$
- Si $h<0\iff |h|=-h \iff \cfrac{f(0+h)-f(0)}{h}=\cfrac{-h}{h}=-1$

Donc $\quad\lim\limits_{h\to 0}\left(\cfrac{f(0+h)-f(0)}{h}\right)=\begin{cases}1\quad\text{si }h>0\\\\-1\quad\text{si }h<0\end{cases}$

Cette limite n'existe pas car elle dépend du signe de $h$.

La fonction **valeur absolue** n'est donc pas dérivable en 0.

Cependant, il est à noter que la fonction $f(x)=|x|$ est dérivable en tout nombre différent de $0$.
```

## Étude de fonctions

### Variations d'une fonction

```admonish th
Soit une fonction $f$ définie et dérivable sur $I$.

- Si $f'(x)\leq 0$, alors $f$ est **décroissante** sur $I$.
- Si $f'(x)\geq 0$, alors $f$ est **croissante** sur $I$.
```

```admonish ex
Soit la fonction $f$ définie sur $\R$ par $f(x)=2x^2-8x+1$.

- Calcul de $f'(x)$

> $f$ est dérivable sur $\R$ et $\quad f'(x)=4x-8$

- Signe de $f'$ en fonction de $x$.

> Il faut résoudre $f'(x)>0$
>
> $$
> \begin{aligned}
> f'(x)>0 & \iff 4x-8>0 \\\\
> & \iff 4x>8   \\\\
> & \iff x>2    \\\\
> \end{aligned}
> $$
>
> Si $x>2$ alors $f'(x)>0$

- Tableau de variations de $f$.

> ![](img/deriv2/04.png =300x center)
>
> $f(2)=2\times (2)^2-8\times(2)+1=-7$
>
> La fonction $f$ admet un minimum égal à $(-7)$ en $x=2$
```

```admonish ex
Soit la fonction $f$ définie sur $\R$ par $f(x)=x^3+\cfrac{9}{2}x^2-12x+5$.

- Calcul de $f'(x)$

> $f$ est dérivable sur $\R$ et $\quad f'(x)=3x^2+9x-12$

- Signe de $f'$ en fonction de $x$.

> Il faut résoudre $f'(x)>0$
>
> $f'$ étant une fonction du 2$^{nd}$ degré, il faut trouver les racines de $3x^2+9x-12$
>
> $\Delta=b^2-4ac=9^2-4\times 3\times (-12)=225\quad>0$
>
> Il existe donc 2 racines : $\begin{cases}x_1=\cfrac{-b+\sqrt{\Delta}}{2a}=\cfrac{-9+\sqrt{225}}{2\times 3}=1\\\\x_2=\cfrac{-b-\sqrt{\Delta}}{2a}=\cfrac{-9-\sqrt{225}}{2\times 3}=-4\end{cases}$
>
> On a : $a=3>0$ donc $f'(x)=(3x^2+9x-12)<0$ pour $x\in\left[-4;1\right]$

- Tableau de variations de $f$.

> ![](img/deriv2/05.png =400x center)
>
> On a :
>
> $f(-4)=(-4)^3+\cfrac{9}{2}\times(-4)^2-12\times(-4)+5=61$
>
> $f(1)=(1)^3+\cfrac{9}{2}\times(1)^2-12\times(1)+5=\cfrac{-3}{2}$

- Représentation graphique

> On retrouve les résultats obtenus à l'aide de l'étude précédente
>
> ![](img/deriv2/06.png =400x center)
```

### Extremum d'une fonction

```admonish th
Soit $f$ définie et dérivable sur $I$ et $f'$ sa dérivée.

Si $f'$ s'**annule et change de signe** en $x=c$ de $I$ alors $f$ admet un **extremum** en $x=c$.
```

```admonish ex
Soit $f$ définie sur $\R$ par $f(x)=5x^2-3x+4$

Pour tout $x\in\R$, on a : $f'(x)=10x-3$

Et $f'(x)=0$ pour $x=\cfrac{3}{10}$

![](img/deriv2/07.png =300x center)

On a : $f\left(\cfrac{3}{10}\right)=\cfrac{71}{20}$

$f$ admet donc un **minimum** égal à $\left(\cfrac{71}{20}\right)$ en $x=\cfrac{3}{10}$.
```

### Position relative de deux courbes

```admonish ex
Soit $f$ et $g$ deux fonctions définies sur $\left[2;+\infty\right[$ par :

- $f(x)=x^3$
- $g(x)=-5x+18$

L'étude de la position relative de $\mathcal{C_f}$ et de $\mathcal{C_g}$ revient à étudier le signe de la différence $f(x)-g(x)$

On pose : $h(x)=f(x)-g(x)=x^3+5x-18$

Pour tout $x$ de $\left[2;+\infty\right[$, on a : $h'(x)=3x^2+5$

$h'$ est une fonction du 2<sup>nd</sup> degré :

- $a=3$ , $b=0$ et $c=5$
- $\Delta=b^2-4ac=0^2-4\times 3\times 5=-60<0$
  - $\rarr h'(x)$ est du signe de $a=3>0$

On a $h'(x)>0 \Rarr h$ est strictement **croissante** sur $\left[2;+\infty\right[$

- Tableau de variations :

![](img/deriv2/08.png =200x center)

De plus, on a : $h(2)=(2)^3+5\times (2)-18=0$

D'après le tableau de variations, on a $h(x)\geq 0$.

Donc, pour tout $x\in\left[2;+\infty\right[$, on a :

$$h(x)=f(x)-g(x)\geq 0\iff f(x)\geq g(x)$$

On en déduit que $\mathcal{C_f}$ est **au-dessus** de $\mathcal{C_g}$ sur $x\in\left[2;+\infty\right[$.

![](img/deriv2/09.png =800x center)
```
