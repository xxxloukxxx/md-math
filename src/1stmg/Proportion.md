# Proportion et pourcentage (Rappels)

<!-- toc -->

## Proportion

```admonish ex
Sur les $480$ élèves inscrits en classe de 1$^\text{ère}$, $108$ d'entre eux sont en STMG.

![](img/proportion/01.png =350x center)

- La **population totale** des élèves de 1$^\text{ère}$ compte $480$ élèves. C'est la population de **référence**.
- La **sous-population** des élèves de STMG compte $108$ élèves.
- La **proportion** d'élèves de STMG parmi tous les élèves de 1$^\text{ère}$ est :

$$p = \cfrac{108}{480} = \cfrac{9}{40} = 0,225$$

Cette proportion peut s'exprimer en **pourcentage** : $p = 22,5 \\%$.
```

### Pourcentage d'un nombre

```admonish ex
Parmi les 480 élèves de 1$^\text{ère}$, 15 % ont choisi l'option anglais renforcé.

- $15 \\%$ de $480$ ont choisi l'option anglais renforcé, soit :

$$15 \\% \times 480 = \cfrac{15}{100} \times 480 = 72\ \text{élèves}$$
```

```admonish def
![](img/proportion/Diag.png#right =230x)

La proportion d'une **sous-population** (d'effectif $n$) parmi une **population totale** (d'effectif $N$) est égale à :

$$p=\cfrac{n}{N}$$

En pourcentage :

$$p_{\\%}=\cfrac{n}{N}\times 100$$
```

```admonish rem
Pour calculer un effectif à l'aide d'une proportion, on peut utiliser :

- $n = p \times N$
- $N = \cfrac{n}{p}$
```

```admonish meth title="Méthode : Associer effectif, proportion et pourcentage"
Une société de $75$ employés compte $12\\%$ de cadres et le reste d'ouvriers.

$35$ employés de cette société sont des femmes et $5$ d'entre elles sont cadres.

1. Calculer l'effectif des cadres.
2. Calculer la proportion de femmes dans cette société.
3. Calculer la proportion, en %, de cadres parmi les femmes. Les femmes cadres sont-elles sous ou surreprésentées dans cette société ?

---

1. $12 \\%$ de $75$ = $\cfrac{12}{100} \times 75 = 9.\quad$ Cette société compte $9$ cadres.

2. La proportion de femmes est donc égale à :
   $$p_{1} = \cfrac{35}{75}= \cfrac{7}{15} \approx 0,47$$
   La société compte environ $47 \\%$ de femmes.

3. La population de référence est maintenant "les femmes".

   La proportion de cadres parmi les femmes est égale à :
   $$p_{2} =\cfrac{5}{35} = \cfrac{1}{7} \approx 0,14 = 14\\%$$
   $14\\% > 12\\%$ donc les femmes cadres sont surreprésentées dans cette société.
```

### Pourcentage de pourcentage

```admonish ex
Dans un bus, il y a $40\\%$ de scolaires. Parmi les scolaires, $60\\%$ sont des filles.

![](img/proportion/02.png =550x center)

La proportion de scolaires filles dans le bus est donc égale à :

$$
\begin{aligned}
	60                    \\%\text{ de }40\\% & = 60\\% \times 40\\% \\\\
	\  & = 0,6 \times 0,4 \\\\
	\  & = 0,24 = 24      \\%
\end{aligned}
$$

Il y a donc $24 \\%$ de filles scolaires dans le bus.
```

```admonish prop
Soient 3 ensembles $A$ , $B$ et $C$ tel que $A\subset B$ et $B\subset C$.

Soit :

- $p_{1}$ est la proportion de $A$ dans $B$.
- $p_{2}$ est la proportion de $B$ dans $C$.

Alors $\quad\boxed{p_{1} \times p_{2}}\quad$ est la proportion de $A$ dans $C$.

![](img/proportion/03.png =350x center)
```

```admonish rem
Pour calculer **un pourcentage de pourcentage**, on multiplie les pourcentages entre eux.
```

```admonish meth title="Méthode : Calculer un pourcentage de pourcentage"
Sur $67$ millions d'habitants en France, $66\\%$ de la population est en âge de travailler (15-64 ans).

La population active représente $70\\%$ de la population en âge de travailler.

1. Calculer la proportion de population active par rapport à la population totale.
2. Combien de français compte la population active ?

---

1. Le pourcentage de population active par rapport à la population totale est égal à :

   $$70 \\% \times 66 \\% = 0,7 \times 0,66 = 0,462 = 46,2 \\%$$

   On a donc $46,2\\%$ des français sont actifs.

2. $46,2\\%\text{ de }67=0,462 \times 67 = 30,954$.

   La France compte environ $31$ millions d'actifs.

![](img/proportion/04.png =500x center)
```

## Fréquence conditionnelle, fréquence marginale

### Définition et méthode de calcul

```admonish meth title="Méthode : une \textbf{fréquence conditionnelle}, une \textbf{fréquence marginale}"
Dans une entreprise qui compte $360$ employés, on compte :

- $60\\%$ d'hommes et parmi ceux-là, $12,5 \\%$ sont des cadres.
- Par ailleurs, $87,5\\%$ des femmes de cette entreprise sont ouvrières ou techniciennes.

Avec l'énoncé, le tableau d'effectif est le suivant :

|          |        Hommes         |         Femmes         |     Total     |
| -------: | :-------------------: | :--------------------: | :-----------: |
|   Cadres | $12,5\\%\times 216=27$ |      $144-126=18$      |  $27+18=45$   |
| Ouvriers |     $216-27=189$      | $87,5\\%\times 144=126$ | $189+126=315$ |
|    Total | $60\\%\times 360=216$  |     $360-216=144$      |     $360$     |

La **fréquence marginale** se lit en **"marge"** du tableau.

|                       | Hommes | Femmes |     Total     |
| --------------------: | :----: | :----: | :-----------: |
|                Cadres |  $27$  |  $18$  | $\boxed{45}$  |
| Ouvriers, techniciens | $189$  | $126$  |     $315$     |
|                 Total | $216$  | $144$  | $\boxed{360}$ |

On compte $360$ employés en tout et $45$ sont des cadres.

La **fréquence marginale** de cadres est donc égale à :

$$\cfrac{45}{360} = 0,125 = 12,5 \\%$$

---

La **fréquence conditionnelle** restreint l'effectif total.

Ici, on ne considère que les hommes car la "condition" est **"parmi les hommes"**.

La **fréquence conditionnelle** se lit sur **une ligne ou une colonne intérieure** du tableau.

Ici, on ne va donc considérer que la colonne concernant les hommes (condition).

|                       |    Hommes     | Femmes | Total |
| --------------------: | :-----------: | :----: | :---: |
|                Cadres |     $27$      |  $18$  | $45$  |
| Ouvriers, techniciens | $\boxed{189}$ | $126$  | $315$ |
|                 Total | $\boxed{216}$ | $144$  | $360$ |

On compte $216$ hommes en tout et parmi eux, $189$ sont des ouvriers, techniciens.

La fréquence **conditionnelle d'ouvriers, techniciens** parmi **les hommes** est :

$$\cfrac{189}{216} = 0,875 = 87,5 \\%$$
```
