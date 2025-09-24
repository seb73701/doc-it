---
title: uniq
description: uniq est une commande Unix qui affiche les lignes d'un fichier texte en supprimant les multiples occurrences consécutives d'une même ligne, pour n'en garder qu'une seule.
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - uniq
tags: [beta,os,commandes,linux,uniq]
---

----

## SYNTAXE

<span class="code_language">Shell</span>

```shell
uniq [OPTION] ... [ENTRÉE [SORTIE]]
```

----

## INFORMATION

Filtrer les lignes successives identiques du fichier d'`ENTRÉE` (ou de l'<u>entrée standard</u>), écrire dans le fichier de `SORTIE` (ou vers la <u>sortie standard</u>).

Sans options, les lignes identiques sont fusionnées avec la première occurrence.

Les paramètres obligatoires pour les options de forme longue le sont aussi pour les options de forme courte.

Le fichier d'entrée doit être un fichier texte. Un fichier texte est un fichier contenant des caractères organisés en une ou plusieurs lignes. Les lignes <u>ne peuvent pas dépasser 2048 octets</u> (y compris les caractères de retour à la ligne) ni contenir de caractères nuls.

L'environnement de langue nationale en cours détermine les caractères `<blank>` utilisés par l'indicateur `-f` ainsi que la façon dont l'indicateur `-s` interprète les octets comme un caractère.

La commande `uniq` compare des lignes entières par défaut.

Les lignes en double doivent être adjacentes (avant d'exécuter la commande `uniq`, utilisez la commande `sort` pour que toutes les lignes en double soient adjacentes.).

Exemple : 

- permet de trier les lignes de `file` selon le nombre de fois où elles apparaissent.

<span class="code_language">Shell</span>

```shell
sort file | uniq -c | sort -n
```

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-c`, `--count`|préfixer les lignes par le nombre d'occurrences|
|`-d`, `--repeated`|n'afficher que les lignes dupliquées, une par groupe|
|`-D`|afficher toutes les lignes dupliquées|
|`--all-repeated[=MÉTHODE]`|identique  à `-D`, mais permettre de séparer les groupes par une ligne vide; valeurs possibles pour `MÉTHODE`: `none` __(par défaut)__, `prepend` ou `separate`.|
|`-f`, `--skip-fields=N`|ne pas comparer les `N` premiers champs|
|`--group[=MÉTHODE]`|montrer tous les éléments, en séparant les groupes par une ligne vide; valeurs possibles pour `MÉTHODE`: `separate` __(par défaut)__, `prepend`, `append` ou `both`.|
|`-i`, `--ignore-case`|ignorer les différences de casse|
|`-s`, `--skip-chars=N`|ne pas comparer les `N` premiers caractères|
|`-u`, `--unique`|n'afficher que les lignes uniques|
|`-z`, `--zero-terminated`|le délimiteur de lignes est l’octet `NULL`, pas le changement de ligne|
|`-w`, `--check-chars=N`|ne pas comparer plus de `N` caractères par ligne|
|`--help`|afficher l'aide-mémoire et quitter.|
|`--version`|afficher les informations de version et quitter.|

:::info

`uniq` ne détecte pas les lignes répétées, sauf si elles sont adjacentes. Il faut trier l'entrée d'abord ou utiliser `sort -u` sans `uniq`.

:::

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
|`/usr/bin/uniq`|Contient la commande `uniq`|

----

## MAN

- [man](https://manpages.ubuntu.com/manpages/noble/fr/man1/uniq.1.html)

C'est possible d'avoir la page `man` avec la commande : 

<span class="code_language">Shell</span>

```shell
man uniq
```

ou

<span class="code_language">Shell</span>

```shell
uniq --help
```

----

## EXEMPLES

### Supprimer des lignes répétées dans un fichier et enregistrer le résultat dans un autre fichier

Pour supprimer des lignes répétées dans un fichier nommé `fruit` et l'enregistrer dans un fichier nommé `newfruit` :

Fichier (source) : `fruit`

<span class="code_language">Texte</span>

```text
apples
apples
peaches
pears
bananas
cherries
cherries
```


<span class="code_language">Shell</span>

```shell
uniq fruit newfruit
```

alors le nouveau fichier `newfruit` contient les lignes suivantes après l'exécution de la commande `uniq` :

<span class="code_language">Sortie</span>

```text
apples
peaches
pears
bananas
cherries
```

----

### N'afficher que les lignes présentes une fois

Il est également possible de ne faire ressortir que les lignes présentes une seule fois dans notre fichier, les lignes présentes plusieurs fois seront alors totalement exclues de l'affichage :

Fichier (source) : `file.txt`

```text
11
11
22
33
33
44
55
55
```

<span class="code_language">Shell</span>

```shell
uniq -u file.txt
```

<span class="code_language">Sortie</span>

```text
22
44
```

----

### N'afficher que les lignes présentes plusieurs fois

Il est également possible de n'afficher que les lignes présentes plusieurs fois dans le fichier donné, celles-ci seront affichées une seule fois dans la sortie :

Fichier (source) : `file.txt`

```text
11
11
22
33
33
44
55
55
```

<span class="code_language">Shell</span>

```shell
uniq -d file.txt
```

<span class="code_language">Sortie</span>

```text
11
33
55
```

Il est également possible d'effectuer le même traitement mais cette fois ci en affichant toutes les occurrences des lignes présentes plusieurs fois, on utilisera pour cela l'option `-D`:

<span class="code_language">Shell</span>

```shell
uniq -D file.txt
```

<span class="code_language">Sortie</span>

```text
11
11
33
33
55
55
```

----

### Compter les occurrences des lignes en double

Une autre option très pratique est celle permettant de compter le nombre d'occurrence par ligne avec l'option `-c` :

Fichier (source) : `file.txt`

```text
11
11
22
33
33
44
55
55
```

<span class="code_language">Shell</span>

```shell
uniq -c file.txt
```

<span class="code_language">Sortie</span>

```text
2 11
1 22
2 33
1 44
2 55
```

On voit ici que la ligne "**11**" est présente <u>deux fois</u>, alors que la ligne "**22**" n'est elle présente qu'<u>une fois</u>. Une petite astuce, on peut utiliser la commande `sort` pour effectuer un tri croissant de cette sortie :

<span class="code_language">Shell</span>

```shell
uniq -c file.txt | sort
```

<span class="code_language">Sortie</span>

```text
1 22
1 44
2 11
2 33
2 55
```

----

### Formatté la sortie de la commande `uniq`


Fichier (source) : `file.txt`

```text
I love music.
I love music.
I love music.

I love music of Kartik.
I love music of Kartik.

Thanks.
```

<span class="code_language">Shell</span>

```shell
sort file.txt | uniq -c | awk '{print $2 ", " $1}'
```

<span class="code_language">Sortie</span>

```text
, 2
I, 2
I, 3
Thanks., 1
```


## Autres exemples

- https://www.redhat.com/en/blog/uniq-command-lists
- https://labex.io/fr/tutorials/linux-linux-uniq-command-duplicate-filtering-219199
