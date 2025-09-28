---
title: cd (man)
description: (vide)
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - cd
tags: [os,commandes,linux,cd,man]
---

----

## NOM

`cd` - La commande `cd` vous permet de changer de répertoire (_cd = change directory_).

----

## SYNOPSIS

<span class="code_language">Shell</span>

```shell
cd [-L|[-P [-e]] [-@]] [dir]
```

----

## DESCRIPTION

Quand on ouvre un terminal en mode utilisateur on est dans notre répertoire personnel (`/home/utilisateur`). La commande est équivalente à `cd $HOME` 

Si `dir` contient '`-`', le chemin précédent est stocké dans la variable `$OLDPWD`.

Cette commande doit impérativement respecter les majuscules et les minuscules (sensible à la casse). 

Au moment de la saisie, vous pouvez utiliser des <u>chemins relatifs</u> qui se rapportent à la hiérarchie des sous-répertoires et qui mènent directement de votre chemin au chemin supérieur. Il est également possible d’opter pour un <u>chemin absolu</u>, pour accéder immédiatement à une destination pouvant être plus éloignée. 

La commande s’exécute à la condition que le répertoire indiqué existe et que vous disposiez de droits d’accès à celui-ci. Dans le cas contraire, vous recevez un message d’erreur et restez dans le répertoire de travail précédent.

Il est possible d'utiliser la touche <kbd>TAB</kbd> pour l'autocomplétion.

La variable `CDPATH` définit le chemin de rechercher du répertoire contenant `dir`.

Les autres répertoires de `CDPATH` sont séparés par des caractères deux points (`:`). 

Si le `dir` n'est pas trouvé et si l'option de shell `cdable_vars` est définie, `bash` essaiera d'utiliser `dir` comme un nom de variable. Si cette variable contient une valeur, celle-ci deviendra le nouveau répertoire de travail courant.

Si `dir` commence avec un slash (`/`) alors `CDPATH` n'est pas utilisé.

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-P`|Utilise la structure physique des répertoires au lieu de suivre les lieux symboliques.|
|`-L`|Suit les liens symboliques.|
|`-e`|Si l'option `-P` est fournie et que le répertoire de travail actuel ne peut pas être déterminé avec succès, quitter avec un statut différent de zéro.|
|`-@`|Sur les systèmes qui le prennent en charge, présenter un fichier avec des attributs étendus comme un répertoire contenant les attributs du fichier|

Par défaut, les liens symboliques sont suivis, comme si l'option `-L` avait été spécifiée. `..` est traité en supprimant le composant de chemin immédiatement précédent jusqu'à la barre oblique ou le début de `dir`.


----

## DISPONIBILITÉ

:::info

La commande `cd` est une commande interne à Linux.

:::

----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|`cd:`|La commande `cd` est une commande interne.|

----

## VALEUR RENVOYEE

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|L'exécution de la commande a abouti.|
|`>0`|Une erreur s'est produite.|

Renvoie `0` si le répertoire est modifié et si `$PWD` est défini avec succès lorsque `-P` est utilisé; sinon, renvoie une valeur différente de zéro.

----

## SOURCES

- https://man7.org/linux/man-pages/man1/cd.1p.html
