---
title: Python - Nombres
hide_table_of_contents: false
hide_title: false
keywords:
    - developpement
    - python
    - programmation
    - nombres
    - variable
tags: [developpement,python,programmation,nombres,variable]
---

Les types de données internes les plus simples de Python : 

- _Booléens_ (qui ont la valeur `True` ou `False`)
- _Entiers_ (nombres entiers tels que **42** et **100 000 000**)
- _Flottans_ (nombres avec des points décimaux tels que **3.14159**, ou parfois des exposants comme **1.0e8**, ce qui signifie _une fois dix à la puissance 8_, soit **100 000 000.0**).

Chaque type a des règles spécifiques pour son utilisation et est géré différemment par l'ordinateur.

## BOOLEENS

En Python, les seules valeurs de type booléen sont `True` et `False`. Parfois, on peut utilser directement ; d'autres fois, on vera la "**véracité**" d'autres types à partir de leurs valeurs. La fonction Python spéciale `bool()` peut convertir n'importe quel type de données Python en booléen.

> **Une fonction a un nom, zéro ou plusieurs arguments d'entrée séparés par des virgules et entourés de paranthèses, et zéro ou plusieurs valeurs de retour.**

La fonction `bool()` prend n'importe quelle valeur comme argument et renvoie l'équivalent booléen.

Les nombres différents de zéro sont considérés comme `True` :

```python
>>> bool(True)
True
>>> bool(1)
True
>>> bool(45)
True
>>> bool(-45)
True
```

Et ceux de valeur nulle sont considérés comme `False` :

```python
>>> bool(False)
False
>>> bool(0)
False
>>> bool(0.0)
False
```

---
## ENTIERS

Les entiers sont des nombres sans fractions, ni points décimaux, tout simplement. Ils ont aussi éventuellement un signe initial. Et ils possèdent la notion de base si l'on souhaite exprimer ces nombres d'une autre manière qu'avec la base décimale habituelle (dite base 10).

### ENTIERS LITTERAUX

Toute séquence de chiffres en Python représente un entier littéral :

```python
>>> 5
5
```

Un zéro simple (0) est valide :

```python
>>> 0
0
```

Mais on ne peut pas avoir un 0 initial suivi d'un chiffre entre 1 et 9 : 

```python
>>> 05
  File "<stdin>", line 1
    05
    ^
SyntaxError: leading zeros in decimal integer literals are not permitted; use an 0o prefix for octal integers
```

Cette exception Python avertit que l'on a tapé quelque chose qui enfreint les règles de Python. 

On peut commencer un entier avec 0b, 0o ou 0x (voir base) : 

- `0b` ou `0B` pour un nombre _binaire_ (base 2).
- `0o` ou `0O` pour un nombre _octal_ (base 8).
- `0x` ou `0X` pour un nombre _hexadécimal_ (base 16).

Une séquence de chiffres spécifie un entier positif. Si l'on mets un signe `+` avant les chiffres, le nombre reste le même : 

```python
>>> 123
123
>>> +123
123
```

Pour spécifier un entier négatif, il faut insérer un signe `-` avant les chiffres : 

```python
>>> -123
-123
```

On ne peut pas avoir de virgules dans l'entier :

```python
>>> 1,000,000
(1, 0, 0)
```

Au lieu d'un million, on obtient ici un _tuple_ avec trois valeurs. Mais on peut utiliser le caractère de soulignement `_` comme séparateur de chiffres. (~*avec Python 3.6 ou plus récent~)

```python
>>> million = 1_000_000
>>> million
1000000
```

## OPERATIONS SUR LES NOMBRES ENTIERS

On peut faire de l'arithmétrique ordinaire avec Python en utilisant les opérateurs mathématiques de ce tableau : 

|Opérateur|Description|Exemple|Résultat|
|:--------|:----------|:------|:-------|
|`+`      |Addition   |`5+8`  |13      |
|`-`      |Soustraction|`90 - 10`|80|
|`*`      |Multiplication|`4*7`|28|
|`/`      |Division en virgule flottante|`7/2`|3.5|
|`//`     |Division entière (troncature)|`7 // 2`|3|
|`%`      |Modulo (reste)|`7 % 3`|1|
|`**`     |Exponentiation|`3 ** 4`|81|

L'addition et la soustraction fonctionnent comme prévu : 

```python
>>> 5 + 9
14
>>> 100 - 7
93
>>> 4 - 10
-6
```

On peut inclure autant de nombres et d'opérateurs que l'on souhaites :

```python
>>> 5 + 9 + 3
17
>>> 4 + 3 - 2 - 1 + 6 
10
```

On est pas obligé d'avoir un espace entre chaque nombre et opérateur : 

```python
>>> 5+9  +  3
17
```

Mais c'est stylistiquement meilleur et plus facile à lire. La multiplication est également sans surprise :

```python
>>> 6 * 7
42
>>> 7 * 6
42
>>> 6 * 7 * 2 * 3 
252
```

La division est un peu plus intéressante car elle se décline en deux versions : 

- `/` effectue une division en _virgule flottante_ (décimale)
- `//` effetue une division _entière_ (avec troncature)

Même si on divise in entier par un entier, il faut utiliser un `/` donnera un résultat en virgule flottante.

```python
>>> 9 / 5
1.8
```

La division entière renvoie à un résultat entier, en tronquant le reste : 

```python
>>> 9 // 5
1
```

Plutôt de causer un trou dans le continuum espace-temps, la division par zéro avec l'un ou l'autre type de division provoque une exception Python : 

```python
>>> 5 / 0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

```python
>>> 7 // 0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: integer division or modulo by zero
```

## ENTIERS ET VARIABLES

Tous les exemples précédents utilisaient des entiers littéraux. On peut mélanger des entiers littéraux et des variables auxquelles des valeurs entières ont été affectées :

```python
>>> a = 95
>>> a
95
>>> a - 3
92
```

Quand j'ai exécuté `a - 3`, je n'ai pas réattribué le résultat à `a`, donc la valeur de `a` n'a pas changé : 

```python
>>> a
95
```

Si l'on veut modifier `a`, on ferait comme ceci : 

```python
>>> a = a - 3
>>> a
92
```

Encore une fois, ce ne serait pas une équation mathématique licite, mais c'est ainsi que l'on réaffecterai une valeur à une variable en Python. En Python, l'expression du côté droit du signe `=` est d'abord calculée, puis affectée à la variable située du côté gauche.

Si cela aide, penser ainsi :

- Soustraire 3 de `a`.
- Affecter le résultat de cette soustraction à une variable temporaire
- Affecter la valeur de la variable temporaire à `a` :

```python
>>> a = 95
>>> temp = a - 3
>>> a = temp
```

Alors quand on écrit

```python
>>> a = a - 3
```

Python effectue la soustraction du côté droit, se souvient du résultat, puis l'assigne à `a` du côté gauche du signe `=`. C'est plus rapide et plus propre que d'utiliser une variable temporaire.

On peut combiner les opérateurs arithmétiques avec l'affectation de plaçant l'opérateur avant le signe `=`. Ici, `a -= 3` revient à dire `a = a - 3` :

```python
>>> a = 95
>>> a -= 3
>>> a
92
```

C'est pareil avec `a = a + 8` :

```python
>>> a = 92
>>> a += 8
>>> a
100
```

Et de même `a = a * 2` :

```python
>>> a = 100
>>> a *= 2
>>> a
200
```

Voici un exemple avec la division en virgule flottante, comme `a = a / 3` :

```python
>>> a = 200
>>> a /= 3
>>> a
66.66666666666667
```

Essayons maintenant avec le raccourci pour `a = a // 4` (division entière tronquée) : 

```python
>>> a = 13
>>> a //= 4
>>> a
3
```

Le caractère `%` a de multiples utilisations en Python. Lorsqu'il est entre deux nombres, il produit le reste dans la division du premier nombre par le second :

```python
>>> 9 % 5
4
```

Voici comment obtenir à la fois le quotient (tronqué) et le reste : 

```python
>>> divmod(9,5)
(1, 4)
```

Sinon, on aurait pu les calculer séparemment :

```python
>>> 9 // 5
1
>>> 9 % 5
4
```

On vient de voir de nouvelles choses ici : une fonction nommée `divmod` reçoit les entiers 9 et 5 et renvoie un tuple à deux éléments.

Une dernière fonctionnalité mathématique est l'exponentiation avec `**` qui permet également de mélanger des entiers et des flottants :

```python
>>> 2**3
8
>>> 2.0 ** 3
8.0
>>> 2 ** 3.0
8.0
>>> 0 ** 3
0
```

## PRECEDENCE

Qu'est-ce qu'on obtiendrais si on taper ce qui suit :

```python
>>> 2 + 3 * 4
```

Si on fait l'addition en premier, `2 + 3` donne 5 et `5 * 4` donne 20. Mais si on fait d'abord la multiplication, `3 * 4` donne 12 et `2 + 12` donne 14. En Python, comme dans la plupart des langages, la multiplication a une priorité (ou précédence) plus élevée que l'addition, donc c'est la deuxième version que l'on obtiendra :

```python
>>> 2 + 3 * 4
14
```

Comment savoir si les règles de précédence ? Dans le grand tableau ci-dessous, elles sont toutes énumérées. Néanmoins, il est beaucoup plus facile d'ajouter des parenthèses pour regrouper le code lorsque l'on souhaite effectuer un calcul : 

(ajouter tableau page 575)

```python
>>> 2 + (3 * 4)
14
```

Voici un exemple avec des exposants : 

```python
>>> - 5 ** 2
-25
```

est la même chose que 

```python
>>> - (5 ** 2)
-25
```

et probablement pas ce qu'on voulait. Les parenthèses permettent d'indiquer clairement ce qu'on veut :

```python
>>> (-5) ** 2
25
```

De cette façon, toute personne lisant le code n'a pas besoin de deviner son intention ou de rechercher des règles de priorité.

## BASES

Les nombres entiers sont supposés être en base décimale (base 10) sauf si on utilise un préfixe pour spécifier une autre base. On aura peut-être jamais besoin d'utiliser ces autres bases, mais on les verras probablement parfois par endroits dans du code Python.

Nous avons généralement 10 doigts et 10 orteils, donc nous comptons 0,1,2,3,4,5,6,7,8,9. Ensuite, nous manquons de chiffres uniques et ajoutons une retenue à celui des dizaines en mettant un 0 à la place des unités : 10 signifie "1 dizaine et 0 unité". 

Contrairement aux chiffres romains, les nombres arabes n'ont pas un caractère spécial qui représente "10". Ensuite, on obtient 11,12, jusqu'à 19, puis on ajoute une retenue de 1 pour passer à 20 (2 dizaines et 0 unité), et ainsi de suite.

Une base correspond au nombre de chiffres que l'on veut utiliser jusqu'à ce que l'on doit "ajouter une retenue". En base 2 (_binaire_), les seuls chiffres sont 0 et 1. C'est le fameux _bit_. 0 est identique au 0 du système décimal, et 1 est identique au 1 dy système décimal. Cependant, en base 2, si l'on veut ajouter un 1 à un 1, on obtient 10 (ce qui signifie 1 deux du système décimal plus un 0 décimal).

En Python, on peut exprimer des entiers littéraux dans trois bases en plus de la base décimale avec les préfixes suivants :


- `0b` ou `0B` pour un nombre _binaire_ (base 2).
- `0o` ou `0O` pour un nombre _octal_ (base 8).
- `0x` ou `0X` pour un nombre _hexadécimal_ (base 16).

Ces bases sont toutes des puissances de deux (2, 8, 16) et sont pratiques dans certains cas mais il se peut que vous n'ayez jamais besoin d'utiliser autre chose que de bons vieux entiers du système décimal.

L'interpréteur les affiches dans la base décimale. Essayons chacune de ces bases. Pour commencer, un brave nombre 10 décimal, ce qui veut dire _1 dizaine et 0 unité_ :

```python
>>> 10
10
```

Maintenant, le nombre binaire (en base 2) `0b10`, ce qui veux dire _1 deux (décimal) et 0 unité_ :

```python
>>> 0b10
2
```

Le nombre octal (en base 8) `0o10` signifie un _8 et 0 unité_ :

```python
>>> 0o10
8
```

Le nombre hexadécimal (en base 16) `0x10` signifie un _16 et 0 unité_ :

```python
>>> 0x10
16
```

On peut aller dans l'autre sens et convertir un entier en une chaîne dans l'une de ces bases :

```python
>>> value = 65
>>> bin(value)
'0b1000001'
>>> oct(value)
'0o101'
>>> hex(value)
'0x41'
```

La fonction `chr()` convertit un entier en son équivalent sous forme de caractère :

```python
>>> chr(65)
'A'
```

Et la fonction `ord()` fait l'opération inverse :

```python
>>> ord('A')
65
```