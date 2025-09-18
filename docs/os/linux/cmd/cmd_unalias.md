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

## INFORMATION

La commande `unalias` supprime la définition de chaque nom d'alias spécifié ou supprime toutes les définitions d'alias si l'indicateur `-a` est utilisé. Les définitions d'alias sont supprimées de l'environnement de l'interpréteur en cours.

Voir cette page : [`alias`](cmd_alias)


### Man

- [man](https://www.man7.org/linux/man-pages/man1/unalias.1p.html)

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
- Il ne vous reste plus qu’à lire le fichier de commandes alias :

<span class="code_language">Shell</span>

```shell
source ~/.bash_aliases
```

----
