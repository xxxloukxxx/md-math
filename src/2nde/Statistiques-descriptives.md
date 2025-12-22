# Statistiques descriptives

<!-- toc -->

## Caractéristiques d'une série statistique

```admonish def
- **Série statistique sous forme "brute"**

Voici une série de notes obtenues par un élève :
$$4 ; 6 ; 18 ; 7 ; 17 ; 12 ; 12 ; 18$$

- **Série statistique sous forme de tableau**

|    Notes : $x_i$ |  4  |  6  |  7  | 12  | 17  | 18  |
| ---------------: | :-: | :-: | :-: | :-: | :-: | :-: |
| Effectif : $n_i$ |  1  |  1  |  1  |  2  |  1  |  2  |
```

### Moyenne

```admonish def
La **moyenne** d'une série dont les valeurs sont $x_1$, $x_2$ , $\dots$, $x_k$ et les effectifs correspondants sont $n_1$, $n_2$, $\ldots$, $n_k$ est notée $\overline{x}$ est égale à :

$$\overline{x}=\cfrac{(n_1\times x_1)+(n_2\times x_2)+\ldots+(n_k\times x_k)}{N}$$

avec $\quad N=n_1+n_2+\ldots+n_k$

La moyenne est une **caractéristique de position**.
```

```admonish ex
|    Notes : $x_i$ |  4  |  6  |  7  | 12  | 17  | 18  | Total $(=N)$ |
| ---------------: | :-: | :-: | :-: | :-: | :-: | :-: | :----------: |
| Effectif : $n_i$ |  1  |  1  |  1  |  2  |  1  |  2  |      8       |

- Calcul de la moyenne :

$$\begin{aligned}\overline{x}&=\cfrac{(n_1\times x_1)+\ldots+(n_k\times x_k)}{N}\\\\&=\cfrac{(1\times 4)+(1\times 6)+\ldots+(1\times 17)+(2\times 18)}{8}=11.75\end{aligned}$$
```

### Médiane

```admonish def
La médiane $m$ est une valeur telle que :

- la moitié au moins de l'effectif ait des valeurs inférieures ou égales à $m$,
- l'autre moitié des valeurs supérieures ou égales à $m$.

La médiane est une **caractéristique de position**.
```

```admonish ex
|    Notes : $x_i$ |  4  |  6  |  7  | 12  | 17  | 18  | Total $(=N)$ |
| ---------------: | :-: | :-: | :-: | :-: | :-: | :-: | :----------: |
| Effectif : $n_i$ |  1  |  1  |  1  |  2  |  1  |  2  |      8       |
|  Effectif cumulé |  1  |  2  |  3  |  5  |  6  |  8  |     $$      |

- Calcul de la médiane :

$$N=8\iff\cfrac{N}{2}=4$$

$N$ est pair donc la médiane se situe entre la $4^\text{ème}$ et la $5^\text{ème}$ valeur.

$$m=\cfrac{12+12}{2}=12$$
```

```admonish ex
|    Notes : $x_i$ |  4  |  6  |  7  | 12  | 17  | 18  | Total $(=N)$ |
| ---------------: | :-: | :-: | :-: | :-: | :-: | :-: | :----------: |
| Effectif : $n_i$ |  1  |  1  |  1  |  2  |  1  |  2  |      8       |
|  Effectif cumulé |  1  |  2  |  3  |  5  |  6  |  8  |     $$      |

Série ordonnée séparée en 2 :

$$\boxed{4;6;7;12}\quad|\quad\boxed{12;17;18;18}$$

On a : $\quad m=12$
```

### Étendue

```admonish def
L'étendue d'une série statistique est la **différence** entre la plus **grande valeur** et la plus **petite valeur** de la série.

L'étendue est une **caractéristique de dispersion**.
```

```admonish ex
|    Notes : $x_i$ |  4  |  6  |  7  | 12  | 17  | 18  | Total $(=N)$ |
| ---------------: | :-: | :-: | :-: | :-: | :-: | :-: | :----------: |
| Effectif : $n_i$ |  1  |  1  |  1  |  2  |  1  |  2  |      8       |

L'étendue de la série est : $\quad 18-4=14$
```

### Quartiles, écart interquartile

```admonish def
- Le 1er quartile $(Q_1)$ : Plus petite valeur de la série telle qu'**au moins $25\%$** des autres valeurs de la série sont $\leq$ à cette valeur.
  ![](img/stat/02.png =400x center)
- Le 3ème quartile $(Q_3)$ : Plus petite valeur de la série telle qu'**au moins $75\%$** des autres valeurs de la série sont $\leq$ à cette valeur.
  ![](img/stat/03.png =400x center)
```

```admonish ex
|    Notes : $x_i$ |  4  |  6  |  7  | 12  | 17  | 18  | Total $(=N)$ |
| ---------------: | :-: | :-: | :-: | :-: | :-: | :-: | :----------: |
| Effectif : $n_i$ |  1  |  1  |  1  |  2  |  1  |  2  |      8       |
|  Effectif cumulé |  1  |  2  |  3  |  5  |  6  |  8  |     $$      |

- Calcul des quartiles :

$$N=8\iff\cfrac{1}{4}N=2\quad\text{et}\quad\cfrac{3}{4}N=6$$

- $Q_1$ est la $2^\text{ème}$ valeur de la série. $Q_1=6$
- $Q_3$ est la $6^\text{ème}$ valeur de la série. $Q_3=17$
```

```admonish def
L'**écart interquartile** d'une série statistique est égal à $Q_3-Q_1$

![](img/stat/04.png =400x center)
```

```admonish rem
- L'**écart interquartile** mesure la **dispersion** autour de la médiane
- Il contient **au moins 50%** des valeurs de la série
- L'**écart interquartile** n'est pas influencé par les valeurs extrêmes
```

```admonish ex
|    Notes : $x_i$ |  4  |  6  |  7  | 12  | 17  | 18  | Total $(=N)$ |
| ---------------: | :-: | :-: | :-: | :-: | :-: | :-: | :----------: |
| Effectif : $n_i$ |  1  |  1  |  1  |  2  |  1  |  2  |      8       |

- $Q_1=6\quad$ et $\quad Q_3=17$
- L'écart interquartile est de : $\quad 17-6=11$
```

### Variance - Ecart-type

```admonish def
- La variance $V$ est égale à :

$$V=\cfrac{1}{N} \left(n_1\times(x_1-\overline{x})^2+\ldots+n_k\times(x_k-\overline{x})^2\right)$$

- L'écart-type est égal à : $\sigma=\sqrt{V}$

L'écart-type et la variance sont des **caractéristiques de dispersion**.
```

```admonish ex
|    Notes : $x_i$ |  4  |  6  |  7  | 12  | 17  | 18  | Total $(=N)$ |
| ---------------: | :-: | :-: | :-: | :-: | :-: | :-: | :----------: |
| Effectif : $n_i$ |  1  |  1  |  1  |  2  |  1  |  2  |      8       |

- $\overline{x}= 11.75$
- $V=\cfrac{1}{8} \left(1\times(4-11.75)^2+\ldots+2\times(18-11.75)^2\right)\approx 27.7$
- $\sigma=\sqrt{V}=\sqrt{27.7}\approx 5.26$
```

## Calculatrice

```admonish meth title="Méthode : Utilisation de la calculatrice avec une série 'brute'"
- Utilisation de la calculatrice avec une série "brute"

$$4 ; 6 ; 18 ; 7 ; 17 ; 12 ; 12 ; 18$$

![](img/stat/05.png =800x center)

---

![](img/stat/07.png =800x center)
```

```admonish meth title="Méthode : Utilisation de la calculatrice avec un 'tableau'"
- Utilisation de la calculatrice avec un "tableau"

|    Notes : $x_i$ |  4  |  6  |  7  | 12  | 17  | 18  | Total $(=N)$ |
| ---------------: | :-: | :-: | :-: | :-: | :-: | :-: | :----------: |
| Effectif : $n_i$ |  1  |  1  |  1  |  2  |  1  |  2  |      8       |

![](img/stat/06.png =800x center)
```

## Cas de pondération d'une série statistique

```admonish ex
- Tailles des $27$ élèves des $4^\text{ème}$ B en cm : (série brute)

$174$ - $160$ - $161$ - $166$ - $177$ - $172$ - $157$ - $175$ - $162$ - $169$ - $160$ $165$ - $170$ - $152$ - $168$ - $156$ - $163$ - $167$ - $169$ - $158$ - $164$ - $151$ - $162$ - $166$ - $156$ - $165$ - $179$

- Regroupement par classe : (sous forme de tableau)


|   Taille | $[150;155[$ | $[155;160[$ | $[160;165[$ |
| -------: | :---------: | :---------: | :---------: |
| Effectif |     $2$     |     $4$     |     $7$     |
|    Fréq. |   $0.07$    |   $0.15$    |   $0.26$    |

$\ $

|   Taille | $[165;170[$ | $[170;175[$ | $[175;180[$ |
| -------: | :---------: | :---------: | :---------: |
| Effectif |     $8$     |     $3$     |     $3$     |
|    Fréq. |    $0.3$    |   $0.11$    |   $0.11$    |

```

### Représentation sous forme d'histogramme

```admonish ex
![](img/stat/10.png =700x center)
```

### Représentation sous forme d'histogramme (groupement de classes)

```admonish ex
![](img/stat/09.png =700x center)
```

### Calcul de la moyenne

```admonish ex
Dans le cas où les valeurs sont regroupées en classes, on calcul le **centre** de chaque classe pour calculer la moyenne.

- Le centre de la classe $[150;155[$ est $\quad\left(\cfrac{150+155}{2}\right)= 152.5$
- Le centre de la classe $[170;175[$ est $\quad\left(\cfrac{170+175}{2}\right)= 172.5$

- Tableau avec les **classes centrées**

| Classes centrées : $x_i$ | $152.5$ | $157.5$ | $162.5$ |
| -----------------------: | :-----: | :-----: | :-----: |
|         Effectif : $n_i$ |   $2$   |   $4$   |   $7$   |

$\ $

| Classes centrées : $x_i$ | $167.5$ | $172.5$ | $177.5$ |
| -----------------------: | :-----: | :-----: | :-----: |
|         Effectif : $n_i$ |   $8$   |   $3$   |   $3$   |

- La moyenne :

$$\overline{x}=\cfrac{1}{27}\left(\left(2\times 152.5\right)+\ldots+\left(3\times 177.5\right)\right)\approx 165.28\text{cm}$$
```
