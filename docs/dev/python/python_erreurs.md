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
