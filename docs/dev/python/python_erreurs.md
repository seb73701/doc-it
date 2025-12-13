---
title: Python - Erreurs
hide_table_of_contents: false
hide_title: false
keywords:
    - developpement
    - python
    - programmation
    - erreurs
tags: [developpement,python,programmation,erreurs]
---

Cette page références les messages d'erreurs les plus courants.

## NameError: name 'x' is not defined

Cette erreur intervient lorsque l'on tente d'accèder à une variable qui n'existe pas ou qui n'est pas instanciée.

Dans cette exemple, la variable `x` n'est pas instanciée avant son utilisation. 

```python
>>> y = x + 12
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'x' is not defined
```

---

## SyntaxError: leading zeros in decimal integer literals are not permitted; use an 0o prefix for octal integers

Cette erreur intervient lorsque l'on met un **0** devant un chiffre (entier).

Dans cette exemple, on ne peut pas avoir un **0** initial suivi d'un chiffre entre **1** et **9**.

```python
>>> 05
  File "<stdin>", line 1
    05
    ^
SyntaxError: leading zeros in decimal integer literals are not permitted; use an 0o prefix for octal integers
```

---

## ZeroDivisionError: division by zero

Cette erreur survient lorsque l'on tente de faire une division par 0.

```python
>>> 5 / 0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

---
## ZeroDivisionError: integer division or modulo by zero

Cette erreur survient lorsque l'on tente de faire une division par 0 pour récupérer le modulo (`%`).

```python
>>> 7 // 0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: integer division or modulo by zero
```

---

## ValueError: invalid literal for int() with base 10

Cette erreur intervient lorque l'on tente de faire une convertion d'une chaîne de caractères en entier.

```python
>>> int('99 bouteuilles de bières')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: '99 bouteuilles de bières'
```

Cette erreur intervient lorque l'on tente de faire une convertion d'une chaîne de caractères vide en entier.

```python
>>> int('')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: ''
```

Ce message peut aussi apparaître lorsque l'on tente une convertion d'une chaîne contenant des points décimaux ou des exposants.

```python
>>> int('98.6')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: '98.6'
```

```python
>>> int('1.0e4')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: '1.0e4'
```

---

## titre

Cette erreur intervient lorque l'on tente de faire 

```python

```

---

## titre

Cette erreur intervient lorque l'on tente de faire 

```python

```

---