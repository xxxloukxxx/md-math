# Sand box

<!-- toc -->

## Markdown ...

### Math

#### Inline

$\oint_S \vec{D} \cdot \hat{n} = \int_0^\pi \int_0^{2\pi}\~D_r\~r^2\~sin\theta\~d\phi\~d\theta = 4\pi r^2 D_r$

#### Block

$$
\begin{align}
	f(x)  & = x^2            \\\\
	f'(x) & = 2x             \\\\
	F(x)  & = \int f(x)dx    \\\\
	F(x)  & = \frac{1}{3}x^3
\end{align}
$$

### Image

![](https://picsum.photos/800/600 =400x center)

### Du code

```python
def f(n):
    if n < 2:
        return 1
    return f(n - 2) + f(n - 1)
```

## ... et autres

### Table Of Content

```
<!-- toc -->
```

### Emojis

[Emojicodes list](https://gist.github.com/rxaviers/7360908#file-gistfile1-md)

:smile: :laughing: :blush: :smiley: :relaxed: :smirk: :heart_eyes: :kissing_heart: :kissing_closed_eyes: :flushed: :relieved: :satisfied: :grin: :wink:
:shit: :+1: :thumbsup: :-1: :thumbsdown: :ok_hand: :punch: :facepunch: :fist: :v: :wave: :hand: :raised_hand: :open_hands: :point_up: :point_down: :point_left: :point_right: :raised_hands: :pray: :point_up_2: :clap: :muscle: :metal: :fu: :walking: :runner: :running: :couple: :family:

### Admonish

```admonish def

[Avec du code dedans](https://tommilligan.github.io/mdbook-admonish/#nested-markdownhtml)

Lorem Ipsum is simply dummy text of the printing and typesetting industry.
```

```admonish ex
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
```

```admonish prop
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
```

```admonish prop title="Caché !!!!" collapsible=true
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
```

```admonish demo
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
```

```admonish rem
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
```

```admonish methode
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
```

```admonish alert
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
```

### Mermaid

[Mermaid Live](https://mermaid.live/edit)

```mermaid
xychart-beta
    title "Sales Revenue"
    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
    y-axis "Revenue (in $)" 4000 --> 11000
    bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
    line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
```

```mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
```

```mermaid
kanban
  Todo
    [Create Documentation]
    docs[Create Blog about the new diagram]
  [In progress]
    id6[Create renderer so that it works in all cases. We also add some extra text here for testing purposes. And some more just for the extra flare.]
  id9[Ready for deploy]
    id8[Design grammar]@{ assigned: 'knsv' }
  id10[Ready for test]
    id4[Create parsing tests]@{ ticket: 2038, assigned: 'K.Sveidqvist', priority: 'High' }
    id66[last item]@{ priority: 'Very Low', assigned: 'knsv' }
  id11[Done]
    id5[define getData]
    id2[Title of diagram is more than 100 chars when user duplicates diagram with 100 char]@{ ticket: 2036, priority: 'Very High'}
    id3[Update DB function]@{ ticket: 2037, assigned: knsv, priority: 'High' }

  id12[Can't reproduce]
    id3[Weird flickering in Firefox]
```

```mermaid
timeline
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook
         : Google
    2005 : YouTube
    2006 : Twitter
```
