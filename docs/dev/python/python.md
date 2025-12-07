---
title: Python
hide_table_of_contents: false
hide_title: false
keywords:
    - developpement
    - python
    - programmation
tags: [developpement,python,programmation]
---



# LES BASES DE PYTHON

## LES DONNEES PYTHON SONT DES OBJETS

En Python, un objet est un bloc de données contenant au moins les éléments suivants :

- Un _type_ qui définit ce qu'il peut faire
- Un _identifiant_ unique pour le distinguer des autres objets.
- Une _valeur_ cohérente avec son type.
- Un _compteur de références_ (en anglais _reference count_) qui traque le nombre de fois que cet objet est utilisé.

## LES TYPES

Le tableau ci-dessous présente les types de données de base de Python. 

- La deuxième colonne (Type) contient le nom Python de ce type. 
- La troisième colonne (Modifiable ?) indique si la valeur peut être modifiée après sa création. 
- Les exemples montrent un ou plusieurs éléments littéraux de ce type.

|Nom|Type|Modifiable ?|Exemples|
|:---|:---|:---|:----|
|Booléen|`bool`|non|`True`, `False`|
|Entier|`int`|non|`47`, `25 000`, `25_000`|
|Virgule flottante|`float`|non|`3.14`, `2.7e5`|
|Complexe|`complex`|non|`3j`, `5 + 9j`|
|Chaîne de texte|`str`|non|`'alas'`, `"alack"`, `'''a verse attack'''`|
|Liste|`list`|oui|`['Winken', 'Blinken', 'Nod']`|
|Tuple|`tuple`|non|`(2, 4, 8)`|
|Octets|`bytes`|non|`b'ab\xff'`|
|Table d'octets|`bytearray`|oui|`bytearray(...)`|
|Ensemble|`set`|oui|`set([3, 5, 7])`|
|Ensemble figé|`frozenset`|non|`frozenset(['Else', 'Otto'])`|
|Dictionnaire|`dict`|oui|`{'game': 'bingo', 'dog': 'dingo', 'drummer': 'Ringo'}`|


## MUTABILITE

Le type détermine également si la _valeur_ des données peut être modifiée (_mutable_) ou demeurer constante (_immutable_).

Python est un langage _fortement typé_, ce qui signifie que le type d'un objet ne change pas, même si sa valeur est modifiable.


## VALEURS LITTERALES

Il existe deux façons de spécifier des valeurs de données en Python : 

- _Littérale_
- _Variable_

Voici quelques exemples de spécifier des valeurs littérales pour différents types de données : 

- Les entiers sont une séquence de chiffres.
- Les flottant contiennent un point décimal.
- Les chaînes de texte sont entourées de guillements

## VARIABLES

Python permets de définir des _variables_, des noms de valeurs dans la mémoire de l'ordinateur.

Les noms de variables de Python doivent respecter quelques règles : 

- Ils ne peuvent contenir que les caractères suivants :
  - Lettres minuscules (de `a` à `z`)
  - Lettres majuscules (`A` à `Z`)
  - Chiffres (`0` à `9`)
  - Soulignement (`_`)
- Ils sont _sensibles à la casse_ : thing, Thing et THING sont des noms différents.
- Ils doivent commencer par une lettre ou un trait de soulignement, pas un chiffre.
- Les noms qui commencent par un trait de soulignement sont traités spécialement.
- Ils ne peuvent pas être l'un des _mots réservés_ de Python (également appelés _mots-clés_). 

Les **mots réservés** sont :

|`False`|`await`|`else`|`import`|`pass`|`None`|`break`|`except`|`in`|`raise`|`True`|`class`|`finally`|`is`|`return`|`and`|`continue`|`for`|`lambda`|`try`|`as`|`def`|`from`|`nonlocal`|`while`|`assert`|`del`|`global`|`not`|`with`|`async`|`elif`|`if`|`or`|`yield`|

Dans un programme Python, on peut trouver les mots réservés avec les instructions :

```python
>>> help("keywords")
```

ou :
```python
>>> import keyword
>>> keyword.kwlist
```

Voici quelques noms valides : 

- `a`
- `a1`
- `a_b_c___95`
- `_abc`
- `_1a`


Les noms suivants au contraire ne sont pas valides : 

- `1`
- `1a`
- `1_`
- `name!`
- `another-name`

## AFFECTATION

En Python, on utilise le signe `=` pour affecter une valeur à une variable.

Les programmes ne sont _pas_ comme l'algèbre. A l'école, nous avons appris les mathématiques avec des équations du style : 

```
y = x + 12
```

Exemple, `x` à la valeur **5**, alors **5 + 12** vaut 17 et donc, la valeur de `y` serait 17.

En Python et dans d'autres langages informatiques, `x` et `y` sont des _variables_. Python sait qu'une séquence nue de chiffres comme 12 ou 5 est un entier littéral.

Voici un petit programme Python qui imite cette équation, affichant la valeur résultante de `y` :

```python
>>> x = 5
>>> y = x + 12
>>> y
17
```

C'est la grande différence entre les mathématiques et les programmes : en mathématiques, `=` signifie l'_égalité_ de deux membres d'une expression tandis que, dans les programmes, cela désigne l'**affectation** : _vous affectez la valeur de doite à la variable de gauche_.

Dans les programmes également, tout ce qui se trouve à droite du signe égal doit avoir une valeur (cela s'appelle être _initialisé_). Le terme de droite peut être une valeur littérale, ou une variable à laquelle une valeur a déjà été attribuée, ou une combinaison.

Lorsque Python lit `y = x + 12`, il effectue les opérations suivantes :

- Il voit le signe = au milieu
- Il sait qu'il s'agit d'une affectation
- Il calcule le côté droit (en obtenant la valeur de l'objet référencé par `x` et en lui ajoutant 12)
- Il assigne le résultat à la variable de gauche, `y`

Dans le cas où le programme démarre à la ligne `y = x + 12`, Python aurait généré une _exception_ (une erreur), car la variable `x` n'aurait pas encore de valeur :

```python
>>> y = x + 12
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'x' is not defined
```

## LES VARIABLES SONT DES NOMS, PAS DES EMPLACEMENTS

En Python, _les variables ne sont rien d'autres que des noms_. Ceci est différent de nombreux autres langages informatiques et c'est une notion clé à savoir sur Python, en particulier lorsque l'on travail avec des objets _mutables_ comme les listes. L'affectation _ne copie pas_ une valeur ; elle _attache simplement un nom_ à l'objet qui contient les données. Le nom fait _référence_ à une chose, il n'est pas la chose elle-même.

Dans d'autres langages, ma variable elle-même a un type et se rattache à un emplacement de la mémoire. On peut modifier sa valeur à cet endroit, mais cela doit rester du même type. C'est pourquoi les langages _statiques_ nous font déclarer le type des variables. Python ne le fait pas, car un nom peut faire référence à n'importe quoi. Cela fait gagner du temps, mais il y a quelques inconvénients : 

- On peut mal orthographier une variable et obtenir une exception car elle ne fait référence à rien, et Python  ne le vérifie pas automatiquement comme le font les autres langages statiques.
- La vitesse brute de Python est plus lente qu'un langage comme le C. Il faut faire plus de travail à l'ordinateur pour que l'on a pas à le faire nous-même.

Petit exemple : 

1. Attribuez la valeur 7 au nom de la variable a.
1. Affichez la valeur de a.
1. Attribuez a à b.
1. Affichez la valeur de b.

```python
>>> a = 7
>>> print(a)
7
>>> b = a
>>> print(b)
7
```

En Python, si l'on veut connaître le type de quoi que ce soit (une variable ou une valeur littérale), on peut utiliser `type(chose)`. `type()` est l'un des fonctions intégrées de Python. Si l'on veut vérifier si une variable pointe vers un objet d'un type spécicique, on utilise `isinstance(type)` : 

```python
>>> type(7)
<class 'int'>
>>> type(7) == int
True
>>> isinstance(7, int)
True
```

Exemples avec des valeurs littérales (58, 99.9, 'abc') et de variables (a,b) :

```python
>>> a = 7
>>> b = a
>>> type(a)
<class 'int'>
>>> type(b)
<class 'int'>
>>> type(58)
<class 'int'>
>>> type(99.9)
<class 'float'>
>>> type('abc')
<class 'str'>
```

Une classe est la définition d'un objet ; En Python, "**classe**" et "**type**" signifient à peu près la même chose.

Comme on l'a vu, lorsque l'on utilise une variable en Python, il recherche l'objet auquel elle fait référence. En coulisse, Python est actif, créant souvent des objets temporaires qui seront supprimés une ou deux lignes plus tard.

Exemple : 

```python
>>> y = 5
>>> x = 12-y
>>> x
7
```

Dans cet extrait de code, Python a effectué les opérations suivantes :

- Création d'un objet entier avec la valeur **5**
- Faire pointer la variable `y` vers cet objet **5**
- Incrémenter le compteur de référence de l'objet ayant la valeur **5**
- Création d'un autre objet entier avec la valeur **12**
- Soustraire la valeur de l'objet vers lequel `y` pointe (**5**) de la valeur **12** dans l'objet (anonyme) contenant cette valeur
- Affecter la valeur obtenue (**7**) à un nouvel objet entier (pour le moment anonyme)
- Faire pointer la variable `x` vers ce nouvel objet
- Augmenter le compteur de références de ce nouvel objet vers lequel `x` pointe
- Rechercher la valeur de l'objet vers lequel `x` pointe (**7**) et l'afficher

Lorsque le compte de référence d'un objet atteint zéro, aucun nom ne pointe plus vers lui et il n'y a donc pas besoin de rester. Python à un outil joliment nommé _ramasse-miettes_ (en anglais, _garbage collector_) qui récupère la mémoire des objets qui ne sont plus utilisés.

Dans cet exemple, on a plus besoin des objets contenant les valeurs **5**, **12** ou **7**, ni des variables `x` et `y`. Le ramasse-miettes de Python peut choisir de les envoyer au paradis des objets, ou d'en garder quelques-uns pour des raisons de performances étant que les petits entiers ont tendance à être beaucoup utilisés. 

## ATTRIBUTION A PLUSIEURS NOMS

On peut attribuer une valeur à plusieurs noms de variable en même temps : 

```python
>>> two = deux = zwei = 2
>>> two
2
>>> deux
2
>>> zwei
2
```

## REATTRIBUER UN NOM

Etant donné que les noms pointent vers des objets, la modification de la valeur attribuée à un nom fait simplement pointer le nom vers un nouvel objet. Le compteur de référence de l'ancien objet est décrémenté et celui du nouveau est incrémenté.

## COPIER

Comme on l'a vu, l'affectation d'une variable existante `a` à une nouvelle variable nommée `b` fait simplement pointer `b` vers le même objet que `a`.

Si l'objet est immuable (comme un entier), sa valeur ne peut pas être modifiée, les deux noms sont donc essentiellement en lecture seule.

Exemple : 

```python
>>> x = 5
>>> x
5
>>> y = x
>>> y
5
>>> x = 29
>>> x
29
>>> y
5
```

Lorsque l'on a assigné `x` à `y`, cela a fait pointer le nom `y` vers l'objet entier avec la valeur **5** vers lequel `x` pointait également. La modification de `x` l'a fait pointer vers un nouvel objet entier avec la valeur **29**. Cela n'a pas changé celui contenant **5** vers lequel `y` pointe toujours.

Mais si les deux noms pointent vers un objet _modifiable_ (_mutable_), on peut modifier la valeur de l'objet via l'un ou l'autre nom, et on peut voir la valeur modifiée lorsque l'on utilise l'un ou l'autre des noms. Quand on ne le sait pas, cela peut surprendre.

Une _liste_ est un tableau de valeurs modifiables. Pour cet exemple, `a` et `b` pointent chacun vers une liste comportant trois éléments entiers : 

```python
>>> a = [2,4,6]
>>> b = a
>>> a
[2, 4, 6]
>>> b
[2, 4, 6]
```

Ces éléments de la liste (`a[0]`, `a[1]` et `a[2]`) sont eux-mêmes comme des noms pointant vers des objets entiers contenant les valeurs **2**, **4**, **6**. L'objet liste maintient ses éléments dans l'ordre.

Maintenant, changeons le premier élément de la liste, via le nom `a`, et voyons que `b` a également changé :

```python
>>> a[0] = 99
>>> a
[99, 4, 6]
>>> b
[99, 4, 6]
```

Lorsque le premier élément de la liste est modifié, il ne pointe plus vers l'objet de valeur **2**, mais un nouvel objet de valeur **99**. La liste est toujours de type liste, mais sa valeur (les éléments et leur ordre) est modifiable.

## CHOISIR DE BONS NOMS DE VARIABLES

Il est important de choisir de bons noms pour les variables. On doit trouver un équilibre entre concision et clarté. Par exemple, il est plus rapide de taper `num_loons` plutôt que `number_of_loons` ou `gaviidae_inventory`, mais c'est plus parlant que simplement `n`.