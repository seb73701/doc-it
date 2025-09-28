---
title: alias (man)
description: (vide)
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - alias
tags: [os,commandes,linux,alias,man]
---

----

## NOM

`alias` — définir ou afficher des alias

----

## SYNOPSIS

<span class="code_language">Shell</span>

```shell
alias [-p] [ NOM[=VALEUR] ... ]
```

----

## DESCRIPTION

:::info

La commande `alias` est une commande interne à Linux.

:::

Les alias sont des substitutions abrégées de commandes répétitives et/ou longues à taper dans la console.

Sans argument ou avec l'option `-p`, `alias` affiche une liste des alias sur la sortie standard, sous une forme permettant leur réutilisation en entrées. 

Avec des arguments, un `alias` est défini pour chaque `NOM` pour lequel une `VALEUR` est indiquée. 

Si aucune `VALEUR` n'est indiquée, le nom et la valeur de l'`alias` sont affichés.

Il est possible de définir vos alias dans deux fichiers cachés qui se trouvent dans votre **Dossier Personnel (`/home/user/`)**:

- `~/.bashrc` (Bash shell)
- `~/.zshrc` (Zsh shell)
- `~/.tcshrc` (Tcsh shell)
- `~/.config/fish/config.fish` (Fish shell) 
- `~/.bash_aliases`. Si ce dernier n'existe pas, créez-le. Quelques shells stockent les alias dans un autre fichier qui est `~/.aliases`

:::tip

Pour éviter de modifier trop souvent le fichier sensible qu'est `~/.bashrc`, il est conseillé d'utiliser le fichier `~/.bash_aliases`.

:::

:::info

Il est à noter que l'autocomplétion fonctionne également avec les alias.

:::

:::note

Il est possible de mettre plusieurs commandes dans un seul alias en séparant chaque commande par un point-virgule (`;`). Exemple : `alias test='clear; ls'`.

:::

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-p`|Affiche tous les alias dans un format réutilisable|


----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|`~/.bashrc`|Ce fichier permet la configuration lors du lancement du programme bash. (Bash Shell)|
|`~/.zshrc`|(Zsh Shell)|
|`~/.tcshrc`|(Tcsh Shell)|
|`~/.config/fish/config.fish`|(Fish Shell)|
|`~/.bash_aliases` ou `~/.aliases`|Ce fichier permet de séparer le script `.bashrc` des `alias`. Vous pouvez mettre des variables dedans qui seront chargées à chaque lancement de terminal. (Bash Shell)|

----

## VALEUR RENVOYEE

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|L'exécution de la commande a abouti.|
|`>0`|Une erreur s'est produite.|

----

## SOURCES

- https://man7.org/linux/man-pages/man1/alias.1p.html