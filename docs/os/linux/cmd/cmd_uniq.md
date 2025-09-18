---
title: uniq
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - uniq
tags: [os,commandes,linux,uniq]
---

## Objectif

`uniq` est une commande Unix qui affiche les lignes d'un fichier texte en supprimant les multiples occurrences consécutives d'une même ligne, pour n'en garder qu'une seule. On l'utilise souvent après un `sort`.

Exemple : 

<span class="code_language">Shell</span>

```shell
sort file | uniq -c | sort -n
```

permet de trier les lignes de `file` selon le nombre de fois où elles apparaissent.

## Syntaxe

<span class="code_language">Shell</span>

```shell
uniq [ -c | -d | -u ] [ -f Zones ] [ -s Caractères ] [ -Zones ] [ +Caractères ] [ InFile [ OutFile ] ]
```

## Options

```text
   -u : affiche seulement les lignes n'apparaissant qu'une seule fois.
   -d : affiche seulement les lignes répétées.
   -c-: en plus de l'affichage standard, fait précéder chaque ligne du nombre de fois où celle-ci apparaît.
   -ii : rend uniq insensible à la casse.
   -f N : ignore les N premiers champs de chaque ligne
   -s N : ne compare pas les N premiers caractères.
   -w N : ne compare pas plus de N caractères.
   --help : affiche un message d'aide et quitte le programme.
   --version : affiche la version et quitte le programme.
```

## Descriptif
La commande `uniq` supprime les lignes répétées d'un fichier. La commande `uniq` lit une entrée standard ou un fichier spécifié par le paramètre `InFile` . La commande compare d'abord les lignes adjacentes, puis supprime les deuxièmes et suivantes duplications d'une ligne. Les lignes en double doivent être adjacentes. (Avant d'exécuter la commande `uniq` , utilisez la commande `sort` pour que toutes les lignes en double soient adjacentes.) Enfin, la commande `uniq` écrit les lignes uniques résultantes dans la sortie standard ou dans le fichier spécifié par le paramètre `OutFile` . Les paramètres `InFile` et `OutFile` doivent spécifier des fichiers différents.

Le fichier d'entrée doit être un fichier texte. Un fichier texte est un fichier contenant des caractères organisés en une ou plusieurs lignes. Les lignes ne peuvent pas dépasser 2048 octets (y compris les caractères de retour à la ligne) ni contenir de caractères nuls.

La commande `uniq` compare des lignes entières par défaut. Si l'indicateur `-f Fields` ou `-Fields` est spécifié, la commande `uniq` ignore le nombre de zones spécifié par la variable `Fields` . Une zone est une chaîne de caractères séparée des autres chaînes de caractères par un ou plusieurs caractères `<blank>`. Si l'option `-s Caractères` ou `-Caractères` est spécifiée, la commande `uniq` ignore le nombre de caractères spécifié par la variable `Caractères`. Les valeurs spécifiées pour les variables `Zones` et `Caractères` doivent être des entiers décimaux positifs.

L'environnement de langue nationale en cours détermine les caractères `<blank>` utilisés par l'indicateur `-f` ainsi que la façon dont l'indicateur `-s` interprète les octets comme un caractère.

La commande `uniq` se termine avec la valeur `0` en cas de réussite. Sinon, il se ferme avec une valeur supérieure à `0`.

## Indicateurs

|Article|Descriptif|
|:------|:---------|
|`-c`|Précède chaque ligne de sortie d'un nombre de fois où chaque ligne apparaît dans le fichier d'entrée.|
|`-d`|Affiche uniquement les lignes répétées.|
|`-f Zones`|Ignore le nombre de champs spécifiés par la variable `Fields`. Si la valeur de la variable `Fields` dépasse le nombre de champs sur une ligne d'entrée, la commande `uniq` utilise une <u>chaîne nulle</u> pour la comparaison. Cet indicateur est équivalent à l'indicateur `-Fields`.|
|`ii`|Rend `uniq` insensible à la casse.|
|`-u`|Affiche uniquement les lignes non répétées.|
|`-s Caractères`|Ignore le nombre de caractères spécifié par la variable `Caractères`. Si la valeur de la variable `Caractères` dépasse le nombre de caractères sur une ligne d'entrée, la commande `uniq` utilise une <u>chaîne nulle</u> pour la comparaison. Si les indicateurs `-f` et `-s` sont spécifiés, la commande `uniq` ignore le nombre de caractères spécifiés par l'indicateur `-s Caractères` commençant dans la zone qui suit les zones spécifiées par l'indicateur `-f Champs`. Cet indicateur est équivalent à l'indicateur `+Caractères`.|
|`-Zones`|Ignore le nombre de champs spécifiés par la variable `Fields`. Cet indicateur est équivalent à l'indicateur `-f Zones`.
|`+Caractères`|Ignore le nombre de caractères spécifié par la variable Caractères . Si les indicateurs -Champs et +Caractères sont spécifiés, la commande uniq ignore le nombre de caractères spécifiés par l'indicateur +Caractères commençant dans la zone qui suit les zones spécifiées par l'indicateur -Champs . Cet indicateur est équivalent à l'indicateur `-s Caractères`.|

## Statut de sortie

Cette commande renvoie les valeurs de sortie suivantes :

|Article|Descriptif|
|:------|:---------|
|0 %|L'exécution de la commande a abouti.|
|>0|Une erreur s'est produite.|

## Exemple

Pour supprimer des lignes répétées dans un fichier nommé `fruit` et l'enregistrer dans un fichier nommé `newfruit`, <kbd>Entrée</kbd> :

<span class="code_language">Shell</span>

```shell
uniq fruit newfruit
```

Si l'option `fruit` contient les lignes suivantes:

```text
apples
apples
peaches
pears
bananas
cherries
cherries
```

alors le `newfruit` contient les lignes suivantes après l'exécution de la commande `uniq` :

<span class="code_language">Sortie</span>

```text
apples
peaches
pears
bananas
cherries
```

## Fichiers

|Article|Descriptif|
|:------|:---------|
|`/usr/bin/uniq`|Contient la commande `uniq`|

----

Source : 
- https://ss64.com/bash/cd.html
- https://www.it-connect.fr/trier-les-lignes-en-double-avec-la-commande-uniq-sous-linux/
- https://papy-tux.legtux.org/doc1177/index.php
- https://fr.wikipedia.org/wiki/Uniq
- https://www.geeksforgeeks.org/linux-unix/uniq-command-in-linux-with-examples/
- https://www.redhat.com/en/blog/uniq-command-lists
- https://quennec.fr/trucs-astuces/syst%C3%A8mes/gnulinux/programmation-shell-sous-gnulinux/les-commandes-filtres/traitement-de-donn%C3%A9es/d%C3%A9doublonnage-uniq
- https://labex.io/fr/tutorials/linux-linux-uniq-command-duplicate-filtering-219199
