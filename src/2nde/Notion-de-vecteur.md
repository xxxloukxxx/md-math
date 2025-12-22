# Notion de vecteur

<!-- toc -->

## Rappel sur la translation

```admonish ex
Une translation est un glissement :

- avec une direction donnée :
  - câble du téléphérique, la droite $(AB)$,
- avec un sens donné :
  - le téléphérique monte de $A$ vers $B$,
- avec une longueur donnée :
  - $80$m, longueur $AB$

![](img/vec1/01.png =400x center)

On dit que :

Le téléphérique $T'$ est l'image du téléphérique $T$ par la translation qui transforme $A$ en $B$.
```

```admonish def
Soit $A$ et $A'$ deux points distincts du plan.

On appelle **translation** qui envoie $A$ sur $A'$ la transformation dont l'image $F'$ d'une figure $F$ est obtenue en faisant glisser la figure $F$ :

- selon la direction de la droite $(AA')$,
- dans le sens de $A$ vers $A'$,
- d'une longueur égale à $AA'$.

![](img/vec1/02.png =400x center)
```

```admonish meth title="Méthode : Construire l'image d'une figure par une translation"
Soit **t** la translation qui transforme $A$ en $A'$.

Construction de l'image $B'C'D'E'$ du polygone $BCDE$ par la translation **t**.

|       Configuration initiale       |        Configuration finale        |
| :--------------------------------: | :--------------------------------: |
| ![](img/vec1/03a.png =400x center) | ![](img/vec1/03b.png =400x center) |
```

## Vecteurs dans le plan

### Définition

```admonish def
Soit **t** la translation qui envoie $A$ sur $A'$, $B$ sur $B'$ et $C$ sur $C'$.

Les couples de points $(A ; A')$, $(B ; B')$ et $(C ; C')$ définissent un **vecteur** caractérisé par :

- **une direction** : celle de la droite $(AA')$
- **un sens** : de $A$ vers $A'$
- **une longueur** : la longueur $AA'$

On note $\vv{u}$ ce vecteur et on écrit :

$$\vv{u}=\vv{AA'}$$

On dit que :

- $\vv{AA'}$ est un **représentant** de $\vv{u}$
- $\vv{BB'}$ et $\vv{CC'}$ sont également des représentants de $\vv{u}$.

![](img/vec1/04.png =350x center)
```

```admonish rem
La longueur d'un vecteur est aussi appelée la **norme** du vecteur.

On note : $\quad\norm{\vv{u}}=\norm{\vv{AA'}}=AA'$
```

### Égalité de vecteurs

```admonish def
Les vecteurs $\vv{AB}$ et $\vv{CD}$ sont **égaux** lorsqu'ils ont :

- même **direction**
- même **sens**
- même **longueur**

On note $\vv{AB} = \vv{CD}$.
```

```admonish ex
On peut poser :

$$\vv{u}=\vv{AB}=\vv{CD}$$

$\vv{AB}$ et $\vv{CD}$ sont des **représentants** de $\vv{u}$

![](img/vec1/05.png =400x center)
```

```admonish prop
Dire que $\vv{AB}$ et $\vv{CD}$ sont égaux revient à dire que $ABDC$ est un **parallélogramme**.

$$\vv{AB} = \vv{CD} \quad\iff\quad ABDC \text{ parallélogramme}$$

![](img/vec1/06.png =400x center)
```

```admonish demo
> Si $\vv{AB} = \vv{CD}$, la translation de vecteur $\vv{AB}$ transforme le point $C$ en $D$.
>
> Les segments $\left[AB\right]$ et $\left[CD\right]$ ont donc même longueur et même direction.
>
> $$\vv{AB} = \vv{CD}\quad\Rightarrow\quad\begin{cases}AB=CD\\\\(AB)\parallel(CD)\end{cases}$$
>
> Donc **ABDC** est donc un **parallélogramme**.

Réciproquement :

> Les côtés opposés d'un parallélogramme sont :
>
> - parallèles
> - de même longueur
>
> Donc $\vv{AB}$ et $\vv{CD}$, déﬁnis à l'aide des segments $\left[AB\right]$ et $\left[AB\right]$ d'un parallélogramme $ABDC$, sont égaux.
>
> $$\begin{cases}AB=CD\\\\(AB)\parallel(CD)\end{cases}\quad\Rightarrow\quad\vv{AB} = \vv{CD}$$
```

```admonish prop
Dire que $B$ est le milieu de $\left[AC\right]$ revient à dire que $\vv{AB} = \vv{BC}$.

$$\vv{AB} = \vv{BC}\quad\iff\quad B \text{ mileu de }\left[AC\right]$$

![](img/vec1/07.png =200x center)
```

### Vecteur nul

```admonish def
Un vecteur $\vv{AB}$ est **nul** lorsque $A$ et $B$ sont confondus.

On note : $\vv{AB} = \vv{0}$
```

```admonish rem
Pour tout point $M$, on a : $\quad\vv{MM} = \vv{0}$
```

### Vecteurs opposés

```admonish def
Deux vecteurs sont **opposés** lorsqu'ils ont :

- la **même direction**
- la **même longueur**
- et qu'ils sont de **sens contraire**

On note : $\qquad\vv{AB} = -\vv{DC}$

![](img/vec1/08.png =250x center)
```

### Somme de vecteurs

```admonish def
$\vv{u}$ et $\vv{v}$ sont deux vecteurs quelconques.

On appelle **somme** de $\vv{u}$ et $\vv{v}$, le vecteur $\vv{w}$ associé à la translation **composée** des translations de $\vv{u}$ et $\vv{v}$.

$$\vv{u}+\vv{v}=\vv{w}$$

![](img/vec1/09.png =400x center)
```

```admonish prop title="Relation de Chasles"
Pour tous points $A$, $B$ et $C$ du plan, on a :

$$\vv{AC} = \vv{AB} +\vv{BC}$$

![](img/vec1/10.png =350x center)
```

```admonish rem
Dans un triangle $ABC$, on a :

$$\vv{AB} = \vv{AC} + \vv{CB}$$

$$\vv{BC} = \vv{BA} + \vv{AC}$$

![](img/vec1/11.png =200x center)
```

```admonish meth title="Méthode : Appliquer la relation de Chasles"
- $\vv{AM} + \vv{MN}\quad=\vv{AN}$
- $\vv{MP} + \vv{AM}\quad=\vv{AM}+\vv{MP}\quad=\vv{AP}$
- $\vv{OP} + \vv{KO} + \vv{NK}\quad=\vv{NK} + \vv{KO} + \vv{OP}\quad=\vv{NP}$
- $\vv{KN} - \vv{ON} + \vv{OK}\quad=\vv{KN}+\vv{NO} + \vv{OK}\quad=\vv{KK}\quad=\vv{0}$
```

```admonish prop
Dire que $ABDC$ est un parallélogramme revient à dire que $\quad\vv{AD}=\vv{AB} + \vv{AC}$

$$ABDC\quad\text{parallélogramme}\quad\iff\quad\vv{AD}=\vv{AB} + \vv{AC}$$

![](img/vec1/12.png =400x center)
```

#### Différence de deux vecteurs

```admonish def
$\vv{u}$ et $\vv{v}$ sont deux vecteurs quelconques.

On appelle **différence** de $\vv{u}$ et de $\vv{v}$, le vecteur noté $\vv{u}-\vv{v}$, tel que :

$$\vv{u} - \vv{v} = \vv{u} + \left(-\vv{v}\right)$$

![](img/vec1/13.png =600x center)
```

```admonish meth title="Méthode : Construire un point défini à partir d'une somme de vecteurs"
Soit un triangle $ABC$.

On veut construire le point $F$ tel que $\vv{AF} = \vv{BA} + \vv{BC}$

On construit à partir de $A$ (origine de $\vv{AF}$) le vecteur $\vv{BA} + \vv{BC}$ en mettant "bout à bout" les vecteurs $\vv{BA}$ et $\vv{BC}$.

![](img/vec1/14.png =600x center)

On a ainsi construit un vecteur $\vv{AF}$ et donc le point $F$.
```
