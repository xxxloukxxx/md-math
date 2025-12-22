# Repérage et configuration dans le plan

<!-- toc -->

## Coordonnées d'un point dans un repère

### Repère du plan

```admonish def
Définir un repère, c'est donner trois points $O$, $I$ et $J$ **non alignés** dans un ordre précis.

On note $\OIJ$ ce repère.

- Le point $O$ est appelé l'**origine du repère**
- La droite $(OI)$ est l'axe des **abscisses**
- La droite $(OJ)$ est l'axe des **ordonnées**

|           Le repère $\OIJ$            |
| :-----------------------------------: |
| ![](img/reperage/01.png =500x center) |
```

```admonish rem
Les coordonnées d’un point sont toujours écrites dans le même ordre :

$$(\text{abscisse};\text{ordonnée})\qquad\text{ou}\qquad\begin{pmatrix}\text{abscisse}\\\\\text{ordonnée}\end{pmatrix}$$

$$(x;y)\qquad\text{ou}\qquad\begin{pmatrix}x\\\\y\end{pmatrix}$$

Dans tout le repère $\OIJ$, les coordonnées des points $O$,$I$ et $J$ sont :

$$O(0;0)\qquad I(1;0)\qquad J(0;1)$$
```

```admonish ex
- $A(1;2)$
- $B(-4;3)$
- $C(-3;-2)$
- $...$
- $F(5;3)$

![](img/reperage/image.png =600x center)
```

### Repère orthogonal, normé et orthonormé

```admonish def
Soit le repère $\OIJ$

- Si $(OI)\perp(OJ)$, on dit que le reprère est **orthogonal**
- Si $OI=OJ$, on dit que le reprère est **normé**
- **orthogonal** et **normé** = **orthonormé**

![](img/reperage/02.png =800x center)
```

## Coordonnées du milieu d’un segment

```admonish prop
Soient les points $\quad A(x_A;y_A)\quad$ et $\quad B(x_B;y_B)$.

Les coordonnées du milieu $M$ du segment $[AB]$ sont données par :

$$x_M=\dfrac{(x_A+x_B)}{2}\qquad\text{et}\qquad y_M=\dfrac{(y_A+y_B)}{2}$$
```

```admonish rem
Les coordonnées de $M$ sont la **"moyenne"** des coordonnées de $A$ et de $B$
```

```admonish ex
Soient $A(\cbox{lightblue}{2};\cbox{lightgreen}{1})$ et $B(\cbox{lightblue}{6};\cbox{lightgreen}{3})$

Les coordonnées de $M$ milieu de $[AB]$ sont :

- $x_M=\dfrac{(x_A+x_B)}{2}=\dfrac{(\cbox{lightblue}{2}+\cbox{lightblue}{6})}{2}=\dfrac{8}{2}=4$
- $y_M=\dfrac{(y_A+y_B)}{2}=\dfrac{(\cbox{lightgreen}{1}+\cbox{lightgreen}{3})}{2}=\dfrac{4}{2}=2$

On a $M(4;2)$

![](img/reperage/03.png =500x center)
```

```admonish ex
**Rappel :** Un quadrilatère dont les diagonales se coupent en leurs milieux est un parallélogramme.

Soient $A(1;2)\qquad B(3;2)\qquad C(4;1)\qquad D(2;1)$

- $K$ milieu de $[AC]$ : $\quad K\left(\dfrac{1+4}{2};\dfrac{2+1}{2}\right)\Rightarrow K\left(\dfrac{5}{2};\dfrac{3}{2}\right)$
- $L$ milieu de $[BD]$ : $\quad L\left(\dfrac{3+2}{2};\dfrac{2+1}{2}\right)\Rightarrow L\left(\dfrac{5}{2};\dfrac{3}{2}\right)$

$K$ et $L$ ont même coordonnées

$\quad\rarr\quad$**donc** $[AC]$ et $[BD]$ se coupent en leurs milieux

$\quad\rarr\quad$**donc** $ABCD$ est un parallélogramme.

![](img/reperage/04.png =500x center)
```

## Distance entre deux points

```admonish prop
Soient les points $\quad A(x_A; y_A)\quad$ et $\quad B(x_B; y_B)$.

La distance entre $A$ et $B$ :

$$AB=\sqrt{(x_A-x_B)^2+(y_A-y_B)^2}$$
```

```admonish ex
Soient $A(\cbox{lightblue}{-1};\cbox{lightgreen}{2})$ et $B(\cbox{lightblue}{4};\cbox{lightgreen}{3})$. On a :

$$
\begin{aligned}
	AB & =\sqrt{(x_A-x_B)^2+(y_A-y_B)^2}                                                                      \\\\
	   & =\sqrt{(\cbox{lightblue}{(-1)}-\cbox{lightblue}{4})^2+(\cbox{lightgreen}{2}-\cbox{lightgreen}{3})^2} \\\\
	   & =\sqrt{(-5)^2+(-1)^2}                                                                                \\\\
	   & =\sqrt{26}\approx 5,1                                                                                \\\\
\end{aligned}
$$

![](img/reperage/05.png =400x center)
```

```admonish demo
Soient les points $\quad A(x_A; y_A)\quad$ et $\quad B(x_B; y_B)$.

Considérons le point $C$ tel que : $\quad C(x_B;y_A)$

![](img/reperage/06.png =400x center)

On a :

$$AC=(x_B-x_A)\quad \text{et}\quad BC=(y_B-y_A)$$

D'après le théorème de Pythagore :

$$AB^2=AC^2+BC^2$$

Donc :

$$AB^2=(x_B-x_A)^2+(y_B-y_A)^2\ \iff\ AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$$
```

```admonish ex
Soient $A(6;5)$, $B(2;-3)$ et $C(-4;0)$

- $AB=\sqrt{(6-2)^2+(5-(-3))^2}=\sqrt{4^2+8^2} = \sqrt{80}$
- $BC=\sqrt{(2-(-4))^2+((-3)-0)^2}=\sqrt{6^2+(-3)^2} = \sqrt{45}$
- $AC=\sqrt{(6-(-4))^2+(5-0)^2}=\sqrt{10^2+5^2} = \sqrt{125}$

On a : $\quad AC^2=AB^2+BC^2$ donc $ABC$ est un triangle rectangle

![](img/reperage/07.png =500x center)
```

### Alignement de 3 points

```admonish prop
Soient $A$, $B$ et $C$ trois points distincts du plan.

Si $AC=AB+BC$ alors $A$, $B$ et $C$ sont alignés dans cet ordre.

![](img/reperage/08.png =600x center)
```

```admonish ex
Dans le repère $\pa{A;I,J}$, on a :

- $ABCD$ est un carré de coté $8$
- $E(0;13)$ et $F(21;0)$

$E$, $C$ et $F$ sont-ils alignés ?

![](img/reperage/09.png =500x center)

On a $E(0;13)$, $F(21;0)$ et $C(8;8)$

- $EC=\sqrt{(8-0)^2+(8-13)^2}=\sqrt{89}$
- $CF=\sqrt{(21-8)^2+(0-8)^2}=\sqrt{233}$
- $EF=\sqrt{(21-0)^2+(0-13)^2}=\sqrt{610}$

![](img/reperage/10.2.png =300x center)

$EF\neq EC+CF$ donc $E$, $F$ et $C$ ne sont pas alignés.
```
