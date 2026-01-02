# Probabilité conditionnelle

<!-- toc -->

## Rappel : Probabilité en 2nde

```admonish def
- **Expérience aléatoire :** Expérience dont le résultat dépend du hasard.
- **Univers :** L'ensemble de tous les issues possibles $\Rarr \Omega$
- **Événement :** Un ensemble d'issues
```

```admonish ex
![](img/proba/01.png#right =100x center)

- **Exp. :** Lancer un dé à 6 faces.

- **Univers :** $\Omega =\brace{1; 2; 3; 4; 5; 6}$

- **Événement :** $E$ : "On obtient un nombre pair"
  - $E=\brace{2; 4; 6}$

- **Calcul de probabilité**
  - $P(E)=P(2)+ P(4)+ P(6)=\cfrac{3}{6}=0.5$

- **Événement Contraire**
  - $\overline{E}$ : "Obtenir un nombre impair"
  - $P\pa{\overline{E}}=1-P(E)=1-0.5=0.5$
```

```admonish rem
- Évènement **impossible** :
  - L'évènement impossible est l'ensemble vide noté $\varnothing$.

- Évènement **certain** :
  - L'évènement certain est l'univers $\Omega$.
  - Toutes les issues le réalisent.
```

```admonish ex
- **Exp. :** Lancer un dé à 6 faces.
- **Univers :** $\Omega =\brace{1; 2; 3; 4; 5; 6}$

Soit $F$ : "Obtenir **au plus** $4$" $\quad\Rarr F =\brace{1; 2; 3; 4}$

On a $P(F)=P(1)+P(2)+P(3)+P(4)=\cfrac{4}{6}=\cfrac{2}{3}\approx 0.66$

---

**Intersection d'événements : "ET"**

Soit $G$ : "Obtenir un nombre pair **ET** au plus 4".

On a $G=E \text{ et } F\quad\Rarr$ Notation : $G=E \cap F$

$E=\\\{2; 4; 6\\\}\ \text{ et }\ F=\\\{1; 2; 3; 4\\\}\ $ donc $\ G=\\\{2; 4\\\}$

$$P(G)=P(E\cap F)=P(2)+P(4)=\cfrac{2}{6}=\cfrac{1}{3}$$

---

**Union d'événements : "OU"**

Soit $H$ : "Obtenir un nombre pair **OU** au plus 4"

On a $H=E \text{ ou } F\quad\Rarr$ Notation : $H=E \cup F$

$E=\\\{2; 4; 6\\\}\ \text{ et }\ F=\\\{1; 2; 3; 4\\\}\ $ donc $\ H=\\\{1; 2; 3; 4; 6\\\}$

$$
\begin{array}{rcl}
	P(H) & = & P(E\cup F)                       \\\\
	     & = & P(1) + P(2) + P(3) + P(4) + P(6) \\\\
	     & = & \cfrac{5}{6}=0,8333...
\end{array}
$$
```

```admonish prop
$$\boxed{P(A \cup B)=P(A) + P(B) - P(A \cap B)}$$

![](img/proba/04.png =450x center)
```

```admonish ex
On tire une boule dans l'urne ci-contre.

![](img/proba/02.png =350x center)

On a $\quad\Omega=\brace{1;2;3;4}$

- Événements :
  - $A$ : $\\\{1;2\\\}\quad\Rarr$ Tirer une boule n$^\circ 1$ ou $2\quad\Rarr P(A)=\cfrac{4}{8}$
  - $C$ : $\\\{1;3\\\}\quad\Rarr$ Tirer une boule n$^\circ 1$ ou $3\quad\Rarr P(C)=\cfrac{5}{8}$

On a, donc :

- $\overline{A}=\\\{3;4\\\}$
  - Issues qui **ne** sont **pas** dans $A\qquad\rarr P(\overline{A})=\cfrac{4}{8}=0.5$

- $A\cap C=\\\{1\\\}$
  - Issues **communes** à $A$ et $C\qquad\rarr P(A\cap C)=\cfrac{2}{8}=0.25$

- $A\cup C=\\\{1;2;3\\\}$
  - **Réunion** des issues de $A$ et $C$

$$
	\begin{array}{rccccccl}
		\rarr P(A\cup C) & = & P(A)         & + & P(C)         & - & P(A\cap C)   & \              \\\\
		                 & = & \cfrac{4}{8} & + & \cfrac{5}{8} & - & \cfrac{2}{8} & =\cfrac{7}{8}
	\end{array}
$$

- **Diagramme de Venn**

![](img/proba/03.png =750x center)
```

## Probabilité conditionnelle

### Calcul à l'aide d'un tableau croisé

```admonish meth title="Méthode : une fréquence conditionnelle, une fréquence marginale"
Dans une entreprise qui compte $360$ employés, on compte :

- $60\\%$ d'hommes et parmi ceux-là, $12,5 \\%$ sont des cadres.

- Par ailleurs, $87,5\\%$ des femmes de cette entreprise sont ouvrières ou techniciennes.

---

Avec l'énoncé, le tableau d'effectif est le suivant :

|          |         Hommes         |         Femmes          |     Total     |
| -------: | :--------------------: | :---------------------: | :-----------: |
|   Cadres | $12,5\\%\times 216=27$ |      $144-126=18$       |  $27+18=45$   |
| Ouvriers |      $216-27=189$      | $87,5\\%\times 144=126$ | $189+126=315$ |
|    Total | $60\\%\times 360=216$  |      $360-216=144$      |     $360$     |

---

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

```admonish meth title="Méthode : Calculer une probabilité conditionnelle à l'aide d'un tableau croisé"
|             | **Filles** | **Garçons** | **Total** |
| :---------: | :--------: | :---------: | :-------: |
|  **Apple**  |    $10$    |    $11$     |   $21$    |
| **Samsung** |    $7$     |     $2$     |    $9$    |
|  **Total**  |    $17$    |    $13$     |   $30$    |

- **Exp. Aléatoire :** On choisit au hasard un élève dans la classe.
- **Événements :**
  - $A$ : "L'élève à un tél. **Apple**"
  - $G$ : "L'élève est un **Garçon**"

---

**Probabilité "simple"**

- $P(A)$ : Proba. que l'élève choisi possède un tel. Apple.
  - $P(A)=\cfrac{21}{30}=0,7$

|         | Filles | Garçons |    Total     |
| :-----: | :----: | :-----: | :----------: |
|  Apple  |  $10$  |  $11$   | $\boxed{21}$ |
| Samsung |  $7$   |   $2$   |     $9$      |
|  Total  |  $17$  |  $13$   | $\boxed{30}$ |

- $P(A\cap G)$ : Proba. que l'élève choisi soit un garçon **et** qu'il possède un tel. Apple.
  - $P(A\cap G)=\cfrac{11}{30}$

|         | Filles |   Garçons    |    Total     |
| :-----: | :----: | :----------: | :----------: |
|  Apple  |  $10$  | $\boxed{11}$ |     $21$     |
| Samsung |  $7$   |     $2$      |     $9$      |
|  Total  |  $17$  |     $13$     | $\boxed{30}$ |

---

**Probabilité conditionnelle (sachant que)}**

Calculons la probabilité que l'élève soit un garçon **sachant qu' il** possède un tel. Apple.

- Notation : $\quad P_A(G)\quad\Rarr$ Probabilité de $G$ sachant $A$
  - $P_A(G)=\cfrac{11}{21}=0,5238...$

|           | Filles |   Garçons    |    Total     |
| :-------: | :----: | :----------: | :----------: |
| **Apple** |  $10$  | $\boxed{11}$ | $\boxed{21}$ |
|  Samsung  |  $7$   |     $2$      |     $9$      |
|   Total   |  $17$  |     $13$     |     $30$     |

Calculons la probabilité que l'élève possède un tel. Apple **sachant qu' il** s'agit s'une fille.

- Notation : $\quad P_{\overline{G}}(A)\quad\Rarr$ Probabilité de $A$ sachant $\overline{G}$
  - $P_{\overline{G}}(A)=\cfrac{10}{17}=0,5882...$

|         |  **Filles**  | Garçons | Total |
| :-----: | :----------: | :-----: | :---: |
|  Apple  | $\boxed{10}$ |  $11$   | $21$  |
| Samsung |     $7$      |   $2$   |  $9$  |
|  Total  | $\boxed{17}$ |  $13$   | $30$  |
```

```admonish def
On appelle **probabilité conditionnelle** de $B$ sachant $A$, la probabilité que l'événement $B$ se réalise **sachant que** l'événement $A$ est réalisé.

On la note :

$$\boxed{P_A(B)}$$
```

```admonish ex
**Calcul de $P_{\overline{A}}\pa{\overline{G}}$**

C'est la probabilité de $\overline{G}$ sachant que $\overline{A}$ est réalisé.

|             |   Filles    | Garçons |    Total    |
| :---------: | :---------: | :-----: | :---------: |
|    Apple    |    $10$     |  $11$   |    $21$     |
| **Samsung** | $\boxed{7}$ |   $2$   | $\boxed{9}$ |
|    Total    |    $17$     |  $13$   |    $30$     |

$$P_{\overline{A}}\pa{\overline{G}}=\cfrac{7}{9}\approx 0,777$$

**Parmi** les élèves qui n'ont pas de tel. Apple, $77,7\\%$ élèves sont des filles.
```

### Calcul à l'aide de la formule

```admonish rem
$\text{Card}(A)=$ c'est le nombre d'issues de l'événement $A$.
```

```admonish prop
Dans un tableau croisé, on a :

|           |               $B$               |               $\bar{B}$               |           Total           |
| :-------: | :-----------------------------: | :-----------------------------------: | :-----------------------: |
|    $A$    |    $\text{Card}\pa{A\cap B}$    |    $\text{Card}\pa{A\cap \bar{B}}$    |    $\text{Card}\pa{A}$    |
| $\bar{A}$ | $\text{Card}\pa{\bar{A}\cap B}$ | $\text{Card}\pa{\bar{A}\cap \bar{B}}$ | $\text{Card}\pa{\bar{A}}$ |
|   Total   |       $\text{Card}\pa{B}$       |       $\text{Card}\pa{\bar{B}}$       | $\text{Card}\pa{\Omega}$  |
```

```admonish prop
$$\boxed{P_B(A)=\cfrac{\text{Card}\pa{A\cap B}}{\text{Card}\pa{B}}}$$
```

```admonish ex
Étude pharmaceutique sur **800** patients

|               | Médicament A | Médicament B | Total |
| :-----------: | :----------: | :----------: | :---: |
|   **Guéri**   |    $383$     |    $291$     | $674$ |
| **Non guéri** |     $72$     |     $54$     | $126$ |
|   **Total**   |    $455$     |    $345$     | $800$ |

- $A$ : "Le patient a pris le médicament A."
- $B$ : "Le patient a pris le médicament B."
- $G$ : "Le patient a guéri."

**Calculons $P_G(A)$**

$$P_G(A)=\cfrac{\text{Card}\pa{G\cap A}}{\text{Card}\pa{G}}\quad=\cfrac{383}{674}=0,568$$

|               | Médicament A  | Médicament B |     Total     |
| :-----------: | :-----------: | :----------: | :-----------: |
|   **Guéri**   | $\boxed{383}$ |    $291$     | $\boxed{674}$ |
| **Non guéri** |     $72$      |     $54$     |     $126$     |
|   **Total**   |     $455$     |    $345$     |     $800$     |

La proba. que le patient a pris le médicamnet A **sachant qu'il a guéri** est de $0,568$
```
