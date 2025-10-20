# Fonction exponentielle A FINIR

## Définition de la fonction exponentielle

**Définition :**

Il existe une unique fonction $f$ dérivable sur $\mathbb{R}$ telle que :
$$f'=f\quad\text{et}\quad f(0)=1$$

Cette fonction s'appelle **fonction exponentielle** et se note $\exp$.

**Propriété :**

$$\exp(0)=1$$

**Rem :**

Il est possible d'observer l'allure de la courbe représentative de la fonction exponentielle

![](img/exp/01.png =300x center)

**Rem :**

La fonction exponentielle est **croissante**.

Mais sa croissance est très rapide : $\quad\exp(21)>1~000~000~000$.

Pour des valeurs de $x$ de **plus en plus grandes**, la fonction exponentielle prend des valeurs de **plus en plus grandes**.

**Propriété :**

La fonction exponentielle est **strictement positive** sur $\mathbb{R}$.

![](img/exp/01.png =300x center)

## Étude de la fonction exponentielle

### Dérivabilité

La fonction exponentielle est dérivable sur $\mathbb{R}$ et

$$\Big(\exp{(x)}\Big)'=\exp{(x)}$$

### Variations

La fonction exponentielle est **strictement croissante** sur $\mathbb{R}$.

En effet, $\Big(\exp{(x)}\Big)'>0$ car $\Big(\exp{(x)}\Big)'=\exp{(x)}>0$.

### Courbe représentative

Tableau de variations de $f(x)=\exp{(x)}$

![](img/exp/02.png =300x center)

![](img/exp/01.png =300x center)

## Propriété de la fonction exponentielle

### Relation fonctionnelle

**Théorème :**

Pour tous réels $x$ et $y$, on a :

$$\exp{(x+y)}=\exp{(x)}\times\exp{y}$$

**Remarque :**

Cette formule permet de transformer **une somme** en **produit** et réciproquement.

**Propriétés :**

Pour tous réels $x$ et $y$, on a :

1. $\exp{(-x)}=\dfrac{1}{\exp{(x)}}\qquad$ ou $\quad\exp{(x)}\times\exp{(-x)}=1$
2. $\exp{(x-y)}=\dfrac{\exp{(x)}}{\exp{(y)}}$
3. $\exp(nx)=\left(\exp{(x)}\right)^n\quad$ avec $n\in\mathbb{N}$

**Démonstrations du 1. et 2. :**

1. $\exp{(x)}\times\exp(-x)=\exp\Big(x+(-x)\Big)=\exp{(0)}=1$

2. $~$
   $\qquad\begin{aligned}
		\exp{(x-y)} & =\exp{\Big(x+(-y)\Big)}             \\\\
		~           & =\exp{(x)}\times\exp{(-y)}          \\\\
		~           & =\exp{(x)}\times\frac{1}{\exp{(y)}} \\\\
		~           & =\frac{\exp{(x)}}{\exp{(y)}}
	\end{aligned}$

### Le nombre $e$

**Définition :**

L'image de $1$ par la fonction exponentielle est notée $e$.

$$\exp{(1)}=e$$

**Remarque :**

Avec la calculatrice, on peut obtenir une valeur approchée de $e$.

![](img/exp/03.png =300x center)

**Notation nouvelle :**

$$\exp{(x)}=\exp(x\times 1)=\Big(\exp{(1)}\Big)^x =e^x$$

On note, pour tout $x\in\mathbb{R}$, $~\exp{(x)}=e^x$

Comme $\pi$, le nombre $e$ est un nombre **irrationnel**, c'est à dire qu'il s'écrit avec un nombre infini de décimales sans suite logique.

Ses premières décimales sont :

$$e \approx 2,7182818284 5904523536 \ldots$$

**Propriétés :**

Pour tous réels $x$ et $y$, on a :

- Valeurs remarquables : $~e^0=1\quad$ et $\quad e^1=e$
- Signe et dérivée : $~e^x>0\quad$ et $\quad (e^x)'=e^x$
- Exp. d'une somme : $~e^{(x+y)}=e^x\times e^y$
- Exp. d'une différence : $~e^{(x-y)}=\dfrac{e^x}{e^y}\quad$ et $\quad e^{(-x)}=\dfrac{1}{e^x}$
- Puissance d'une exp. : $~{(e^x)}^{n}=e^{nx}\quad$ avec $~n\in\mathbb{N}$.

#### Méthode : Dériver une fonction exponentielle

- $f(x)=4x-3e^x$

On a $\quad \left(4x\right)'=4\quad$ et $\quad\left(e^x\right)'=e^x$

Donc $\quad f'(x)=4-3e^x$

- $g(x)=(x-1)e^x\qquad = u\times v\quad$ avec $\begin{cases}u=(x-1)& u'=1\\\\v=e^x&v'=e^x\end{cases}$

On a $\quad g'(x)=u'v+uv'=(1\times e^x)+(x-1)e^x=e^x+xe^x-e^x$

Donc $\quad g'(x)=xe^x$

- $h(x)=\dfrac{e^x}{x}\qquad =\dfrac{u}{v}\quad$ avec $\begin{cases}u=e^x& u'=e^x\\\\v=x&v'=1\end{cases}$

On a $\quad h'(x)=\dfrac{u'v+uv'}{v^2}=\dfrac{xe^x+e^x}{x^2}$

Donc $\quad h'(x)=\dfrac{(x+1)e^x}{x^2}$

#### Méthode : Simplifier les écritures

$\begin{aligned}
		A=\dfrac{e^{7}\times e^{-4}}{e^{-5}}\qquad & =\dfrac{e^{7+(-4)}}{e^{-5}}             \\\\
		~                                          & =\dfrac{e^{3}}{e^{-5}}=e^{3-(-5)}=e^{8} \\\\
	\end{aligned}$


$\begin{aligned}
		B={(e^5)}^{-6}\times e^{-3}\qquad & =e^{5\times (-6)}\times e^{-3} \\\\
		~                                 & =e^{-30}\times e^{-3}~=e^{-33}
	\end{aligned}$

$\begin{aligned}
		C=\dfrac{1}{\left(e^{-3}\right)^2}+\dfrac{{(e^4)}^{-1}}{e^2\times e^{-6}}\qquad & =\dfrac{1}{e^{-6}}+\dfrac{e^{-4}}{e^{-4}} \\\\
		~                                                                               & =e^{6}+1
	\end{aligned}$


$\begin{aligned}
		D=\dfrac{{\left(e^{2x}\right)}^3}{e^{(3x+1)}\times e^{(-x-1)}}\qquad & =\dfrac{e^{6x}}{e^{(3x+1-x-1)}}            \\\\
		~                                                                    & =\dfrac{e^{6x}}{e^{2x}}~=e^{6x-2x}~=e^{4x}
	\end{aligned}$

**Propriétés :**

Pour tous réels $a$ et $b$, on a :

- $e^a=e^b\quad\Leftrightarrow\quad a=b$
- $e^a<e^b\quad\Leftrightarrow\quad a<b$

#### Méthode : Résoudre une équation ou une inéquation

- Résoudre dans $\mathbb{R}$ l'équation : $\quad e^{(x^2-3)}-e^{(-2x)}=0$

$$
\begin{aligned}
e^{(x^2-3)}-e^{(-2x)}=0\quad&\Leftrightarrow\quad e^{(x^2-3)}=e^{(-2x)}\\\\
                       \quad&\Leftrightarrow\quad x^2-3=-2x\\\\
                       \quad&\Leftrightarrow\quad x^2+2x-3=0\quad~~\Rightarrow\Delta=b^2-4ac=16\\\\
                       \quad&\Leftrightarrow\quad
                                        \begin{cases}
                                          x_1=\frac{-2-\sqrt{16}}{2\times 1}=-3\\\\
                                          x_2=\frac{-2+\sqrt{16}}{2\times 1}=1
                                        \end{cases}
                                        \quad\Leftrightarrow\boxed{S=\left\{-3~;~1\right\}}\\\\
\end{aligned}
$$

- Résoudre dans $\mathbb{R}$ l'inéquation : $\quad e^{(4x-1)}\geq 1$

$$
\begin{aligned}
e^{(4x-1)}\geq 1 \quad&\Leftrightarrow\quad e^{(4x-1)}\geq e^{0}\\\\
                 \quad&\Leftrightarrow\quad 4x-1\geq 0\\\\
                 \quad&\Leftrightarrow\quad 4x\geq 1\\\\
                 \quad&\Leftrightarrow\quad x\geq \dfrac{1}{4}\quad\Leftrightarrow\quad\boxed{S=\left[\frac{1}{4}~;~+\infty\right[}\\\\
\end{aligned}
$$

#### Méthode : Étudier une fonction exponentielle

Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x)=(x+1)e^x$.

- Calcul de $f'(x)$

$f(x)=(x+1)e^x\quad=u\times v\qquad$ avec $\begin{cases}u=x+1\quad&u'=1\\\\v=e^x\quad&v'=e^x\end{cases}$

On a :

$f'(x)=u'v+uv'\quad=(1\times e^x)+(x+1)e^x$

$f'(x)=(x+2)e^x$

- Signe de $f'(x)$

Pour tout $x\in\mathbb{R}$, on a : $\quad e^x>0\quad$ donc $f'(x)$ est du signe de $x+2$.

$f'(x)>0\quad\Leftrightarrow\quad x+2>0\quad\Leftrightarrow\quad x>(-2)$

- Tableau de variations de $f$

![](img/exp/04.png =300x center)
$f(-2)=(-2+1)e^{-2}=-e^{-2}$

- Équation de la tangente à $\mathscr{C_f}$ au point d'abscisse $x=0$

$f(0)=(0+1)\times e^0=1\quad$ et $\quad f'(0)=(0+2)\times e^0=2$

Une équation de la tangente à $\mathscr{C_f}$ en $x=0$ est :

$$y=f'(0)(x-0)+f(0)\quad\Leftrightarrow\quad y=2x+1$$

- Courbe représentative de $f$

![](img/exp/05.png =300x center)

## Exponentielle et suite géométrique

### Rappel et propriété

**Rappel :**

Une suite géométrique de raison $q$ et de 1$^{er}$ terme $u_0$ a pour terme général :

$$u_n=u_0\times q^n$$

**Propriété :**

Pour tout $n\in\mathbb{N}$ et tout $a\in\mathbb{R}$, on a : $~e^{na}={(e^a)}^{n}=1\times {(e^a)}^{n}$.

Donc la suite $(e^{na})$ est une suite géométrique de raison $e^a$ et de 1$^{er}$ terme $1$.

#### Méthode : Déterminer une suite géométrique comprenant une exponentielle

- $u_n=e^{4n}\qquad=1\times {\left(e^4\right)}^n$

$(u_n)$ est une suite géométrique de raison $e^4$ et de 1$^\text{er}$ terme $~1$

- $v_n=2e^{-3n}\qquad=2\times {\left(e^{-3}\right)}^n$

$(v_n)$ est une suite géométrique de raison $e^{-3}$ et de 1$^\text{er}$ terme $~2$

- $w_n=-{e}^{\left(\frac{n}{3}\right)}\qquad=-1\times {\left({e}^{\frac{1}{3}}\right)}^n$

$(w_n)$ est une suite géométrique de raison $\left({e}^{\frac{1}{3}}\right)$ et de 1$^\text{er}$ terme $~(-1)$

- $z_n=e^{(2n-1)}\qquad=e^{2n}\times e^{(-1)}=e^{(-1)}\times {\left(e^{2}\right)}^n$

$(z_n)$ est une suite géométrique de raison $\left({e}^{2}\right)$ et de 1$^\text{er}$ terme $~e^{(-1)}$

- Terme général d'une suite géométrique de raison $\left(\frac{1}{e}\right)$ et de premier terme $3$.

$a_n=a_0\times q^n\qquad\Leftrightarrow\qquad a_n=3\times \left(\frac{1}{e}\right)^n=3{\left(e^{-1}\right)}^n=3e^{-n}$

## Fonctions de la forme $~t\mapsto e^{kt}$

### Variations de $~t\mapsto e^{kt}$

**Propriété :**

La fonction $t\mapsto e^{kt}$, avec $k\in\mathbb{R}\setminus{0}$, est dérivable sur $\mathbb{R}$.

Sa dérivée est la fonction $~t\mapsto k\times e^{kt}$

**Démonstration :**

On rappelle que la dérivée d'une fonction $~t\mapsto g(at+b)$ est $~t\mapsto a\times g'(at+b)$.

En considérant $\quad g(t)=e^t$, $a=k$ et $b=0$

On a : $\quad\left(e^{kt}\right)'=k\times e^{kt}$.

**Exemple :**

Soit $\quad f(t)=e^{(-4t)}\quad$ alors $\quad f'(t)=-4e^{(-4t)}$.

**Propriété :**

- Si $k > 0$ : la fonction $~t\mapsto e^{kt}$ est strictement **croissante**.
- Si $k < 0$ : la fonction $~t\mapsto e^{kt}$ est strictement **décroissante**.

**Démonstration :**

On a : $\left(e^{kt}\right)'=ke^{kt}$

Or, $e^{kt}>0$ pour tout réel $t$ et tout entier relatif $k$ non nul.

Donc le signe de la dérivée $~t\mapsto ke^{kt}$ dépend du signe de $k$.

- Si $(k\geq 0)$ alors $\left(ke^{kt}\geq 0\right)$ donc $~t\mapsto e^{kt}$ est croissante.
- Si $(k\leq 0)$ alors $\left(ke^{kt}\leq 0\right)$ donc $~t\mapsto e^{kt}$ est décroissante.

### Représentation graphique de $~t\mapsto e^{kt}$

![](img/exp/06.png =300x center)

#### Méthode : Étudier $t\mapsto e^{kt}$ dans une situation concrète

Suite à une infection, le nombre de bactéries contenues dans un organisme en fonction du temps (en heures) peut être modélisé par la fonction $f$ définie sur $[0~;~10]$ et telle que :

$$f'(t)=0.14\times f(t)$$

- Montrer que la fonction $f$ définie sur $[0~;~10]$ par $f(t)=Ae^{0.14t}$ convient.

$$
\begin{aligned}
	f(t)=Ae^{0.14t}\quad & \Leftrightarrow f'(t)=A\times 0.14\times e^{0.14t} \\\\
	\quad                & \Leftrightarrow f'(t)=0.14\times A\times e^{0.14t} \\\\
	\quad                & \Leftrightarrow f'(t)=0.14\times f(t)
\end{aligned}
$$

$f$ définie sur $[0~;~10]$ par $f(t)=Ae^{0.14t}$ vérifie l'égalité $f'(t)=0.14\times f(t)$

- On suppose que $f(0)=50~000$. Déterminer $A$.

$f(0)=A\times e^{(0.14\times 0)}=A\times e^0=A$

Donc, si $\quad f(0)=50~000\quad$, on a $\quad A=50~000$.

Une expression de la fonction $f$ est donc : $\quad f(t)=50~000\times e^{0.14t}$

- Déterminer les variations de $f$ sur $[0~;~10]$.

Comme $k=0.14>0$, on en déduit que $~t\mapsto e^{0.14t}$ est **croissante** sur $[0~;~10]$.

Il en est de même pour la fonction $f(t)=50~000\times e^{0.14t}$.

- À l'aide de la calculatrice :
  - Donner un arrondi (au millier près) du nombre de bactéries après 3h puis 5h30.
  - Déterminer au bout de combien de temps le nombre de bactéries a-t-il doublé. Arrondir à l'heure près.

$f(3)=50~000\times e^{(0.14\times 3)}=50~000\times e^{0.42}\approx 76~000$

$f(5.5)=50~000\times e^{(0.14\times5.5)}=50~000\times e^{0.77}\approx 108~000$

Après 3h, l'organisme contient environ $76~000$ bactéries.
Après 5h30, l'organisme contient environ $108~000$ bactéries.

Le nombre de bactéries a doublé à partir de $100~000$ bactéries, soit au bout d'environ 5h.

![](img/exp/07.png =300x center)
