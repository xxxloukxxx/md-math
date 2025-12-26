# Calcul intégral (2)

<!-- toc -->

## Intégration par parties

### Propriété et méthode

```admonish th
Soit $u$ et $v$ deux fonctions dérivables sur $\lbrack  a ;b\rbrack$. Alors, on a :

$$\boxed{\dint_{a}^{b}{u'(x)v(x)}\ dx=\Big\lbrack u(x)v(x)\Big\rbrack_{a}^{b}-\dint_{a}^{b}{u(x)v'(x)}\ dx}$$
```

```admonish demo
$uv$ est dérivable sur $\lbrack  a ;b\rbrack$ et on a :

$$(uv)'=u'v+uv'$$

Les fonctions $uv'$, $u'v$ et $(uv)'$ sont continues sur $\lbrack  a ;b\rbrack$, donc :

$$
\begin{array}{rcl}
	\Big\lbrack u(x)v(x)\Big\rbrack_{a}^{b} & = & \dint_{a}^{b}{(uv)'(x)}\ dx                               \\\\
	                                        & = & \dint_{a}^{b}{\left(u'v+uv'\right)(x)}\ dx                \\\\
	                                        & = & \dint_{a}^{b}{{(u}'v)(x)}\ dx+\dint_{a}^{b}{(uv')(x)}\ dx \\\\
	                                        & = & \dint_{a}^{b}{u'(x)v(x)}\ dx+\dint_{a}^{b}{u(x)v'(x)}\ dx
\end{array}
$$

D'où: $\quad\dint_{a}^{b}\pa{u'(x)v(x)}\ dx=\Big\lbrack u(x)v(x)\Big\rbrack_{a}^{b}-\dint_{a}^{b}{u(x)v'(x)}\ dx$
```

```admonish meth title="Méthode : Calculer une intégrale en intégrant par parties"
:bulb: Calculer les intégrales suivantes :

1. $A=\dint_{0}^{\frac{\pi}{2}}\pa{x\sin{(x)}}\ dx$
2. $B=\dint_{0}^{\frac{\pi}{2}}\pa{x^{2}\cos{(x)}}\ dx$
3. $C=\dint_{1}^{e^{2}}\pa{\ln{(x)}}\ dx$

---

1. $A=\dint\_{0}^{\frac{\pi}{2}}\underbrace{x}\_{\textstyle v}\underbrace{\sin{(x)}}\_{\textstyle u'}\ dx$

> Ce choix n'est pas anodin ! L'idée est ici de ne plus laisser le facteur $x$ dans l'expression qu'il restera à intégrer. Il faudrait donc dériver $x$
>
> On pose : $\begin{cases}v(x)=x\\\\u'(x)=\sin(x)\end{cases}\ \to\ \begin{cases}v'(x)=1\\\\u(x)=-\cos{(x)}\end{cases}$
>
> Ainsi, en intégrant par parties, on a :
>
> $$
> \begin{array}{rcl}
> 	A=\dint_{0}^{\frac{\pi}{2}}{{u'}{(x)}v(x)\ dx} & = & \Big\lbrack u(x)v(x)\Big\rbrack_{0}^{\frac{\pi}{2}}-\dint_{0}^{\frac{\pi}{2}}{u(x)v'(x)}\ dx                       \\\\
> 	                                               & = & \Big\lbrack -\cos{(x)}\times x\Big\rbrack_{0}^{\frac{\pi}{2}}-\dint_{0}^{\frac{\pi}{2}}{-\cos{(x)}\times 1}\ dx    \\\\
> 	                                               & = & \Big\lbrack -x\cos{(x)}\Big\rbrack_{0}^{\frac{\pi}{2}}+\dint_{0}^{\frac{\pi}{2}}{\cos{(x)}}\ dx                    \\\\
> 	                                               & = & -\frac{\pi}{2}\cos\left(\frac{\pi}{2}\right)+0\times\cos{(0)}+\Big\lbrack \sin{(x)}\Big\rbrack_{0}^{\frac{\pi}{2}} \\\\
> 	                                               & = & \sin{\left(\frac{\pi}{2}\right)-\sin{(0)}}=1
> \end{array}
> $$

2. $B=\dint\_{0}^{\frac{\pi}{2}}{\underbrace{x^{2}}\_{\textstyle v}\underbrace{\cos{(x)}}\_{\textstyle u'}\ dx}$

> On pose : $\begin{cases}v(x)=x^2\\\\u'(x)=\cos(x)\end{cases}\ \to\ \begin{cases}v'(x)=2x\\\\u(x)=\sin{(x)}\end{cases}$
>
> Ainsi, en intégrant par parties, on a :
>
> $$
> \begin{array}{rcl}
> 	B=\dint_{0}^{\frac{\pi}{2}}{{u'}{(x)}v(x)\ dx} & = & \Big\lbrack u(x)v(x)\Big\rbrack_{0}^{\frac{\pi}{2}}-\dint_{0}^{\frac{\pi}{2}}{u(x)v'(x)}\ dx                      \\\\
> 	                                               & = & \Big\lbrack \sin{(x)}\times x^{2}\Big\rbrack_{0}^{\frac{\pi}{2}}-\dint_{0}^{\frac{\pi}{2}}{\sin{(x)}\times2x}\ dx \\\\
> 	                                               & = & \Big\lbrack x^{2}\sin{(x)}\Big\rbrack_{0}^{\frac{\pi}{2}}-2\dint_{0}^{\frac{\pi}{2}}{x\sin{(x)}}\ dx
> \end{array}
> $$
>
> Or, dans le terme de droite, on reconnait l'intégrale $A$ de la question précédente qui a été calculée par parties. Il s'agit ici d'une **double intégration par parties**.
>
> On a donc : $\ B\ =\ \Bigg\lbrack\left(\dfrac{\pi}{2}\right)^{2}\sin\left(\dfrac{\pi}{2}\right)-0^{2}\sin{(0)}\Bigg\rbrack-2\times1\ =\ \dfrac{\pi^{2}}{4}-2$

3. $C=\dint\_{1}^{e^{2}}{\underbrace{\ 1\ }\_{\textstyle u'}\times\underbrace{\ln{(x)}}\_{\textstyle v}\ dx}$

> On pose : $\begin{cases}v(x)=\ln(x)\\\\u'(x)=1\end{cases}\ \to\ \begin{cases}v'(x)=\dfrac{1}{x}\\\\u(x)={x}\end{cases}$
>
> Ainsi, en intégrant par parties, on a :
>
> $$
> \begin{array}{rcl}
> 	C=\dint_{1}^{e^{2}}{u'(x)v(x)dx} & = & \Big\lbrack u(x)v(x)\Big\rbrack_{1}^{e^{2}}-\dint_{1}^{e^{2}}{u(x)v'(x)}dx     \\\\
> 	                                 & = & \Big\lbrack x\ln{(x)}\Big\rbrack_{1}^{e^{2}}-\dint_{1}^{e^{2}}{x\frac{1}{x}}dx \\\\
> 	                                 & = & e^{2}\ln\left(e^{2}\right)-1\ln{(1)}-\dint\_{1}^{e^{2}}1dx                     \\\\
> 	                                 & = & e^{2}\times2\ln{(e)}-\lbrack x\rbrack_{1}^{e^{2}}                              \\\\
> 	                                 & = & e^{2}\times2-e^{2}+1 \qquad = e^{2}+1
> \end{array}
> $$
```

## Applications du calcul intégral

### Aire délimitée par deux courbes

```admonish meth title="Méthode : Calculer l'aire délimitée par les courbes de deux fonctions continues et positives"
On considère les fonctions $f$ et $g$ définies par :

$$f(x)=x^{2}+1\ \text{et}\ g(x)=-x^{2}+2x+5$$

On admet que pour tout $x$ de $\lbrack -1;2\rbrack$, on a $0 \le f(x) \le g(x)$

![](img/int/2image3.png =350x center)

:bulb: Déterminer l'aire délimitée par $\Cf$ et de $\Cg$ sur l'intervalle $\lbrack  - 1 ;2\rbrack$.

---

On calcule la différence de l'aire sous $\Cg$ et de l'aire sous $\Cf$.

Cela revient à calculer la différence des intégrales :

$$A=\dint_{-1}^{2}{g(x)}\ dx-\dint_{-1}^{2}{f(x)}\ dx=I_{g}-I_{f}$$

$\begin{array}{rcl}
	I_{g} & = & \dint_{-1}^{2}{g(x)}\ dx                                                                        \\\\
	      & = & \dint_{-1}^{2}{-x^{2} + 2x + 5}\ dx                                                             \\\\
	      & = & {\Bigg\lbrack-\dfrac{1}{3}x^{3}+x^{2}+5x\Bigg\rbrack}_{-1}^{2}                                  \\\\
	      & = & \pa{\dfrac{-1}{3}\times2^{3}+2^{2}+5\times2}-\pa{\dfrac{-1}{3}(-1)^{3}+(-1)^{2}+5\times(-1)}=15
\end{array}$

$\begin{array}{rcl}
	I_{f} & = & \dint_{-1}^{2}{f(x)}\ dx                                          \\\\
	      & = & \dint_{-1}^{2}{x^{2}+1}\ dx                                       \\\\
	      & = & {\Bigg\lbrack\dfrac{1}{3}x^{3}+x\Bigg\rbrack}\_{-1}^{2}           \\\\
	      & = & \pa{\dfrac{1}{3}{\times2}^{3}+2}-\pa{\dfrac{1}{3}(-1)^{3}+(-1)}=6
\end{array}$

Donc : $\ A=I_{g}-I_{f}=15-6=9\ u.a.$
```

```admonish rem
Une autre méthode, un peu plus rapide, consisterait à utiliser la linéarité de l'intégrale.

$$
\begin{array}{rcl}
	A & = & \dint_{-1}^{2}{g(x)}\ dx-\dint_{-1}^{2}{f(x)}\ dx                 \\\\
	  & = & \dint_{-1}^{2}\pa{-x^{2}+2x+5}\ dx-\dint_{-1}^{2}\pa{x^{2}+1}\ dx \\\\
	  & = & \dint_{-1}^{2}\pa{-x^{2}+2x+5}-\pa{x^{2}+1}\ dx                   \\\\
	  & = & \dint_{-1}^{2}\pa{-2x^{2}+2x+4}\ dx=\ldots=9
\end{array}
$$
```

### Valeur moyenne d'une fonction

```admonish def
Soit $f$ une fonction continue sur un intervalle $\lbrack  a ;b\rbrack$ avec $a \neq b$.

On appelle **valeur moyenne** de $f$ sur $\lbrack  a ;b\rbrack$ le nombre réel :

$$\boxed{m=\dfrac{1}{b-a}\dint_{a}^{b}{f(x)}dx}$$
```

```admonish prop title="Propriété : interprétation géométrique"
L'aire sous la courbe représentative de $f$ (en rouge ci-dessous) est
égale à l'aire sous la droite d'équation $y = m$ (en bleu), entre $a$ et $b$.

![](img/int/2image4.png =500x center)
```

```admonish ex
Calculons la valeur moyenne de la fonction $f$ définie par $f(x)=3x^{2}-4x+5$ sur l'intervalle $\bra{1;10}$.

$$
\begin{array}{rcl}
	m & = & \pa{\dfrac{1}{10-1}\dint_{1}^{10}{3x^{2}-4x+5}}\ dx                                                                   \\\\
	  & = & \dfrac{1}{9}\Big\lbrack x^{3}-2x^{2}+5x\Big\rbrack_{1}^{10}                                                           \\\\
	  & = & \dfrac{1}{9}\left(\left(10^{3}-2{\times 10}^{2}+5\times 10\right)-\left(1^{3}-2{\times 1}^{2}+5\times 1\right)\right) \\\\
	  & = & \dfrac{1}{9}(850-4)                                                                                                   \\\\
	  & = & \dfrac{846}{9}=94
\end{array}
$$
```

```admonish meth title="Méthode : Calculer la valeur moyenne d'une fonction"
On modélise, à l'aide d'une fonction, le nombre de malades lors d'une épidémie.

Au $x$-ième jour après le signalement des premiers cas, le nombre de malades est égal à :

$$f(x)=16x^{2}-x^{3}$$

:bulb: Déterminer le nombre moyen de malades chaque jour sur une période de $16$ jours.

---

$$
\begin{array}{rcl}
	m & = & \dfrac{1}{16-0}\dint_{0}^{16}{f(x)}\ dx                                            \\\\
	  & = & \dfrac{1}{16}\dint_{0}^{16}{16x^{2}-x^{3}}\ dx                                     \\\\
	  & = & \dfrac{1}{16}\Bigg\lbrack\dfrac{16}{3}x^{3}-\dfrac{1}{4}x^{4}\Bigg\rbrack_{0}^{16} \\\\
	  & = & \dfrac{1}{16}\left(\dfrac{16}{3}{\times16}^{3}-\dfrac{1}{4}\times16^{4}\right)     \\\\
	  & = & \dfrac{1024}{3}\approx 341
\end{array}
$$

Le nombre moyen de malades chaque jour est environ égal à $341$.

![](img/int/2image5.png =500x center)
```

### Intégrales et suites

```admonish meth title="Méthode : Étudier une suite d'intégrales"
On considère la suite d'intégrales $\left( I_{n} \right)$ définie pour tout entier $n$, par :

$$I_{n}=\dint_{1}^{e}{x\left(\ln{(x)}\right)^{n}}\ dx$$

a. Calculer $I_{0}$.

b. À l'aide d'une intégration par parties, démontrer que : $\ I_{n+1}=\dfrac{e^{2}}{2}-\dfrac{n+1}{2}I_{n}$

c. À l'aide d'un programme écrit en Python, conjecturer la limite de la suite $\left( I_{n} \right).$

---

a. Calcul de $I_{0}$

> Pour $n = 0$, on a :
>
> $$I_{0}=\dint_{1}^{e}{x}dx=\Big\lbrack {\dfrac{1}{2}x}^{2}\Big\rbrack_{1}^{e}=\dfrac{1}{2}e^{2}-\dfrac{1}{2}1^{2}=\dfrac{e^{2}-1}{2}$$

b. $I_{n+1}=\dfrac{e^{2}}{2}-\dfrac{n+1}{2}I_{n}$

> On a : $\ I_{n+1}=\dint\_{1}^{e}\underbrace{\ x\ }\_{\textstyle u'}\times\underbrace{\left(\ln{(x)}\right)^{n+1}}\_{\textstyle v}\ dx$$
>
> On pose : $\begin{cases}v(x)=\pa{\ln{(x)}}^{n+1}\\\\u'(x)=x\end{cases}\ \to\ \begin{cases}v'(x)=(n+1)\times\dfrac{1}{x}\times\left(\ln{(x)}\right)^{n}\\\\u(x)=\dfrac{1}{2}x^2\end{cases}$
>
> Ainsi, en intégrant par parties, on a :
>
> $$
> \begin{array}{rclcl}
> 	I_{n+1} & = & \dint_{1}^{e}{u'(x)v(x)\ dx}                                                  & \  &                                                                                                                  \\\\
> 	        & = & \Big\lbrack u(x)v(x)\Big\rbrack_{1}^{e}                                       & -  & \dint_{1}^{e}{u(x)v'(x)}\ dx                                                                                     \\\\
> 	        & = & \Big\lbrack {\dfrac{1}{2}x}^{2}\left(\ln{(x)}\right)^{n+1}\Big\rbrack_{1}^{e} & -  & \dint_{1}^{e}{{\dfrac{1}{2}x}^{2}(n+1)\times\dfrac{1}{x}\times\left(\ln{(x)}\right)^{n}}\ dx                     \\\\
> 	        & = & {\dfrac{1}{2}e}^{2}\left(\ln{(e)}\right)^{n+1}                                & -  & {\dfrac{1}{2}\times1}^{2}\left(\ln{(1)}\right)^{n+1}-\dfrac{n+1}{2}\dint_{1}^{e}{x\left(\ln{(x)}\right)^{n}}\ dx \\\\
> 	        & = & \dfrac{e^{2}}{2}                                                              & -  & \dfrac{n+1}{2}I_{n}
> \end{array}
> $$
>
> Donc :
>
> $$I_{n+1}=\dfrac{e^{2}}{2}-\dfrac{n+1}{2}I_{n}$$

c. _Simulation á l'aide de Python_

> |               Programme               |              Simulation               |
> | :-----------------------------------: | :-----------------------------------: |
> | ![](img/int/2image7.png =300x center) | ![](img/int/2image6.png =300x center) |
>
> On conjecture que : $\limite_{n\to+\infty}{I_{n}=+\infty}$
>
> En fait cette conjecture n'est pas exacte !
```
