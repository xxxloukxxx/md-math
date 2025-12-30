# Échantillonnage

<!-- toc -->

## Simulation

![](img/echant/de.png#right =100x)

On lance un dé à $6$ faces $n$ fois de suite et on observe le nombre de fois que le dé s'arrête sur la face $\diceone$.

On considère donc comme "succès" le fait d'obtenir un $\diceone$.

Cette expérience suit une loi de Bernoulli de paramètre $p=\cfrac{1}{6}$.

On va simuler l'expérience à l'aide d'un programme qui renvoie une liste composée d'un échantillon de $n$ lancers de dé :

```python
from random import *

def echantillon(n):
    L=[]
    for i in range(n):
        x=randint(1,6)
        L.append(x)
    return (L)
```

On exécute le programme avec $n=10$ :

```python
>>> echantillon(10)
[6, 4, 4, 1, 2, 6, 4, 5, 5, 6]
```

On modifie ensuite le programme afin qu'il renvoie en sortie la fréquence de $\diceone$ obtenu pour un échantillon de taille $n$.

```python
from random import *

def echantillon(n):
    c=0
    for i in range(n):
        x=randint(1,6)
        if x==1:
            c=c+1
    return (c/n)
```

On exécute le programme avec des valeurs de $n$ de plus en plus grandes.

```python
>>> echantillon(10)
0.1
>>> echantillon(100)
0.2
>>> echantillon(1000)
0.164
>>> echantillon(10000)
0.1613
>>> echantillon(10000000)
0.1665664
```

Les fréquences simulées semblent de rapprocher de la valeur théorique $p=\cfrac{1}{6}$.

On améliore encore le programme pour simuler $N$ échantillons de taille $n$ et afficher en sortie les fréquences obtenues :

```python
from random import *

def echantillon(n):
    c=0
    for i in range(n):
        x=randint(1,6)
        if x==1:
            c=c+1
    return (c/n)

def simulation(N,n):
    L=[]
    for i in range(N):
        L.append(echantillon(n))
    return(L)
```

On exécute le programme pour $10$ échantillons de taille $50$ :

```python
>>> simulation(10,50)
[0.3, 0.16, 0.12, 0.18, 0.22, 0.14, 0.14, 0.14, 0.24, 0.12]
```

Pour résumer, l'ordinateur a lancé $10$ fois $50$ dés et il a mesuré la fréquence d'apparition du $\diceone$ lors de chacun de ces $10$ lancers.

### Fluctuation d'échantillonnage

La simulation précédente nous montre que si l'on réalise plusieurs échantillons de même taille, la fréquence observée de succès fluctue.

C'est ce qu'on appelle la **fluctuation d'échantillonnage**.

Plus la taille de l'échantillon est grande, plus les fréquences se rapprochent de la probabilité théorique.

```python
## Taille de l'échantillon : n=50
>>> simulation(10,50)
[0.3, 0.16, 0.12, 0.18, 0.22, 0.14, 0.14, 0.14, 0.24, 0.12]
## Taille de l'échantillon : n=10000
>>> simulation(10,10000)
[0.1706, 0.1632, 0.169, 0.1591, 0.1707, 0.1628, 0.169, 0.1684, 0.1627, 0.1656]
```

On constate alors que le phénomène de fluctuation diminue.

Le nuage de points représente la simulation de $400$ échantillons de taille $50$.

![](img/echant/image8.png =350x center)

On peut lire que les fréquences fluctuent entre $0,08$ et $0,30$.

### Dispersion des résultats

$p$ est la **proportion théorique** dans un échantillon de taille $n$.

$s$ est l'**écart-type** de la série des fréquences obtenues.

On pourra prendre $\quad\boxed{s\approx\cfrac{1}{2\sqrt{n}}}$

En moyenne,

- $68$\% des fréquences appartiennent à l'intervalle $\lbrack p-s\ ;\ p+s\rbrack$.

![](img/echant/image9.png =350x center)

- $95$\% des fréquences appartiennent à l'intervalle $\lbrack p-2s\ ;\ p+2s\rbrack$.

![](img/echant/image10.png =350x center)

- $99$\% des fréquences appartiennent à l'intervalle $\lbrack p-3s\ ;\ p+3s\rbrack$.

![](img/echant/image11.png =350x center)
