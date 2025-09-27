---
title: ts
description: Adds a timestamp to the beginning of each line of input
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - ts
tags: [alpha,os,commandes,linux,ts,date,horodatage]
---

----

## SYNTAXE

<span class="code_language">Shell</span>

```shell
ts [-r] [-i | -s] [-m] [format]
```

----

## INFORMATION

ts - timestamp input

ts adds a timestamp to the beginning of each line of input.

The optional format parameter controls how the timestamp is formatted, as used by strftime(3). The default format is "%b %d %H:%M:%S". In addition to the regular strftime conversion specifications, "%.S" and "%.s" and "%.T" are like "%S" and "%s" and "%T",
but provide subsecond resolution (ie, "30.00001" and "1301682593.00001" and "1:15:30.00001").

If the -r switch is passed, it instead converts existing timestamps in the input to relative times, such as "15m5s ago". Many common timestamp formats are supported. Note that the Time::Duration and Date::Parse perl modules are required for this mode to
work. Currently, converting localized dates is not supported.

If both -r and a format is passed, the existing timestamps are converted to the specified format.

If the -i or -s switch is passed, ts reports incremental timestamps instead of absolute ones. The default format changes to "%H:%M:%S", and "%.S" and "%.s" can be used as well. In case of -i, every timestamp will be the time elapsed since the last
timestamp. In case of -s, the time elapsed since start of the program is used.

The -m switch makes the system's monotonic clock be used.

----

## PACKAGE

<span class="code_language">Shell</span>

```shell
apt install moreutils
```

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-x`||
|`-x`||

----

## VALEUR RENVOYEE

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|L'exécution de la commande a abouti.|
|`>0`|Une erreur s'est produite.|

----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|``||

----

## MAN

- [man](https://manpages.ubuntu.com/manpages/noble/fr/man1/)

C'est possible d'avoir la page `man` avec la commande : 

<span class="code_language">Shell</span>

```shell
man ts
```

ou

<span class="code_language">Shell</span>

```shell
ts --help
```

----

## EXEMPLES

### exemple01

<span class="code_language">Shell</span>

```shell
%nom_commande%
```

<span class="code_language">Sortie</span>

```text

```

----

### exemple02

<span class="code_language">Shell</span>

```shell
%nom_commande%
```

<span class="code_language">Sortie</span>

```text

```

----

## LINKS

- https://ostechnix.com/moreutils-collection-useful-unix-utilities/
- https://joeyh.name/code/moreutils/
