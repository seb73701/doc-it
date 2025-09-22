---
title: unalias
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - unalias
tags: [os,commandes,linux,unalias]
---

----

## SYNTAXE

<span class="code_language">Shell</span>

```shell
unalias [-a] NOM [NOM ...]
```

----

## INFORMATION

`unalias` supprime chaque `NOM` de la liste des alias. Si `-a` est indiquée, `unalias` supprime tous les alias.

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-a`|Supprime toutes les définitions d'alias dans le shell courant.|

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
|`~/.bashrc`|Ce fichier permet la configuration lors du lancement du programme bash. (Bash Shell)|
|`~/.zshrc`|(Zsh Shell)|
|`~/.tcshrc`|(Tcsh Shell)|
|`~/.config/fish/config.fish`|(Fish Shell)|
|`~/.bash_aliases` ou `~/.aliases`|Ce fichier permet de séparer le script `.bashrc` des `alias`. Vous pouvez mettre des variables dedans qui seront chargées à chaque lancement de terminal. (Bash Shell)|

----

## MAN

- [man](https://manpages.ubuntu.com/manpages/noble/en/man1/unalias.1posix.html)

C'est possible d'avoir la page `man` avec la commande : 

<span class="code_language">Shell</span>

```shell
man %nom_commande%
```

ou

<span class="code_language">Shell</span>

```shell
%nom_commande% --help
```

----

## EXEMPLES

### Supprimer un alias temporairement

<span class="code_language">Shell</span>

```shell
unalias mon_alias
```

----

### Supprimer tous les alias temporairement

<span class="code_language">Shell</span>

```shell
unalias -a
```

----

### Supprimer un alias définitivement

- Editer le fichier `~/.bash_aliases` ou `~/.bashrc` avec un éditeur
- Supprimer la ou les lignes des alias à supprimer
- Enregistrer et quitter
- Il ne vous reste plus qu’à lire le fichier de commandes `alias` :

<span class="code_language">Shell</span>

```shell
source ~/.bash_aliases
```

----
