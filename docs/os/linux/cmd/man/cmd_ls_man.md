---
title: ls (man)
description: (vide)
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - ls
tags: [os,commandes,linux,ls,man]
---

----

## NOM

`ls` - La commande `ls` liste les fichiers et les sous-dossiers. (_ls = list_)

----

## SYNOPSIS

<span class="code_language">Shell</span>

```shell
ls [OPTION]... [FICHIER]...
```

----

## DESCRIPTION

Afficher les informations des `FICHIERs` (du répertoire courant par défaut). Les entrées sont triées alphabétiquement si aucune des options `-cftuvSUX` ou `--sort` n'est indiquée.

Les paramètres obligatoires pour les options de forme longue le sont aussi pour les options de forme courte.

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-a`, `--all`|inclure les entrées débutant par "`.`"|
|`-A`, `--almost-all`|omettre les fichiers "`.`" et "`..`"|
|`--author`|avec `-l`, afficher l'auteur de chaque fichier|
|`-b`, `--escape`|afficher les caractères non graphiques sous la forme de caractères d’échappement de style C|
|`--block-size=TAILLE`|avec `-l`, ajuster les tailles avec `TAILLE` quand elles sont affichées; par exemple `--block-size=M`; voir le format de `TAILLE` ci-dessous|
|`-B`, `--ignore-backups`|omettre les entrées se terminant par "`~`"|
|`-c`|avec `-lt`, trier selon  "`ctime`" (date de la dernière modification d'état du fichier) en l'affichant; avec `-l`, trier selon le nom et afficher la date de modification; sinon, trier selon la date de modification, de la plus récente à la plus ancienne|
|`-C`|afficher en colonnes|
|`--color[=QUAND]`|colorer la sortie `QUAND`; plus d'informations ci-dessous|
|`-d`, `--directory`|afficher le nom des répertoires eux-mêmes, pas leur contenu|
|`-D`, `--dired`|créer une sortie adaptée au mode "`dired`" d'Emacs|
|`-f`|afficher toutes les entrées selon l'ordre des répertoires|
|`-F`, `--classify[=QUAND]`|ajouter un caractère (parmi `*/=>@|`) aux entrées `QUAND`|
|`--file-type`|similaire, mais sans ajouter "`*`"|
|`--format=MODE`|afficher selon le `MODE` **across** `-x`, **commas** `-m`, **horizontal** `-x`, **long** `-l`, **single-column** `-1`, **verbose** `-l` ou **vertical** `-C`|
|`--full-time`|identique à `-l --time-style=full-iso`|
|`-g`|identique à `-l` mais sans afficher le propriétaire|
|`--group-directories-first`|regrouper les répertoires avant les fichiers; peut être renforcé avec une option `--sort`, mais toute utilisation de `--sort=none` (`-U`) désactive le regroupement|
|`-G`, `--no-group`|ne pas afficher le nom des groupes dans un format d'affichage long|
|`-h`, `--human-readable`|avec `-l` ou `-s`, afficher les tailles en format lisible (par exemple 1K, 234M, 2G, etc.)|
|`--si`|équivalent, en utilisant des puissances de 1000 et non de 1024|
|`-H`, `--dereference-command-line`|suivre les liens symboliques de la ligne de commande|
|`--dereference-command-line-symlink-to-dir`|suivre tous les liens symboliques en ligne de commande pointant vers un répertoire|
|`--hide=MOTIF`|ne  pas  afficher les entrées implicites correspondant au MOTIF de l'interpréteur de commandes (écrasé par `-a` ou `-A`)|
|`--hyperlink[=QUAND`|noms de fichier hyperlien `QUAND`|
|`--indicator-style=STYLE`|ajouter au nom des entrées l'indicateur de `STYLE` : `none` __(aucun, par défaut)__, `slash` (`-p`), `file-type` (`--file-type`) ou `classify` (`-F`)|
|`-i`, `--inode`|afficher le numéro d'index de chaque fichier|
|`-I`, `--ignore=MOTIF`|ne pas afficher les entrées implicites correspondant au `MOTIF` de l'interpréteur de commandes|
|`-k`, `--kibibytes`|blocs de 1024 octets par défaut pour l’occupation du système de fichiers; utilisé seulement avec `-s` et pour les totaux de répertoire|
|`-l`|utiliser un format d'affichage long|
|`-L`, `--dereference`|lors  de  l'affichage des entrées pointées par des liens symboliques, afficher les informations du fichier pointé par le lien plutôt que celles du lien lui-même|
|`-m`|remplir la largeur par une liste d'entrées séparées par des virgules|
|`-n`, `--numeric-uid-gid`|identique à `-l` mais en affichant les valeurs numériques des identifiants du propriétaire (`UID`) et du groupe (`GID`)|
|`-N`, `--literal`|afficher les noms d'entrées sans guillemets|
|`-o`|identique à `-l`, mais sans afficher l'information de groupe|
|`-p`, `--indicator-style=slash`|ajouter l'indicateur "`/`" aux répertoires|
|`-q`, `--hide-control-chars`|afficher "`?`" à la place des caractères non graphiques|
|`--show-control-chars`|afficher les caractères non graphiques tels quels (comportement par défaut, à moins que le programme ne soit "`ls`" et la sortie un terminal)|
|`-Q`, `--quote-name`|mettre les noms d'entrées entre guillemets doubles|
|`--quoting-style=MODE`|utiliser le style citation `MODE` pour les noms d'entrées : `literal`, `locale`, `shell`, `shell-always`, `shell-escape`, `shell-escape-always`, `c`, `escape` (outrepasse la variable d'environnement `QUOTING_STYLE`)|
|`-r`, `--reverse`|inverser l'ordre du tri|
|`-R`, `--recursive`|afficher récursivement les sous-répertoires|
|`-s`, `--size`|afficher la taille allouée de chaque fichier en nombre de blocs|
|`-S`|trier selon la taille des fichiers en commençant par le plus gros|
|`--sort=MODE`|trier selon le `MODE` plutôt que selon le nom : `none` (aucun, `-U`), `size` (taille, `-S`), `time` (heure, `-t`), `version` (`-v`), `extension` (`-X`), `width` (largeur)|
|`--time=MOT`|sélection l'horodatage à utiliser pour l'affichage ou le tri; la date d'accès (`-u`) : `atime`, `access`, `use`; date de modification des métadonnées (`-c`): `ctime`, `status`; date modifiée (par défaut) : `mtime`, `modification`; date de création : `birth`, `creation`; avec `-l`, `MOT` détermine la date à afficher; avec `--sort=time`, trier par nom (en commençant par le plus ancien)|
|`--time-style=TIME_STYLE`|format de la date/heure avec `-l`; voir `TIME_STYLE` ci-dessous|
|`-t`|trier selon la date de modification, de la plus récente à la plus ancienne; voir `--time`|
|`-T`, `--tabsize=COLONNES`|définir l'espacement des tabulations à `COLONNES` plutôt qu'à `8`|
|`-u`|avec `-lt`, trier et afficher selon la date de dernier accès; avec `-l`: afficher la date de dernier d'accès et trier par nom; dans les autres cas, trier selon la date de dernier accès en commençant par le plus récent|
|`-U`|ne pas trier, afficher selon l'ordre original des entrées du répertoire|
|`-v`|tri naturel des numéros (de version) dans le texte|
|`-w`, `--width=COLONNES`|définir la largeur de l'affichage à `COLONNES`. `0` signifie pas de limite|
|`-x`|afficher les entrées par ligne plutôt que par colonne|
|`-X`|trier alphabétiquement selon l'extension des entrées|
|`-Z`, `--context`|afficher tout contexte de sécurité de chaque fichier|
|`--zero`|terminer chaque ligne produite par un caractère `NULL` plutôt que par un changement de ligne|
|`-1`|afficher un fichier par ligne|
|`--help`|afficher l'aide-mémoire et quitter.|
|`--version`|afficher les informations de version et quitter.|

L’argument `TAILLE` est un entier suivi d'une unité facultative (10k pour 10×1024 par exemple). Les unités sont `K`, `M`, `G`, `T`, `P`, `E`, `Z`, `Y`, `R` et `Q` (puissances de 1024) ou `KB`, `MB`, etc. (puissances de 1000). Les préfixes binaires peuvent aussi être utilisées : KiB=K, MiB=M et ainsi de suite.

L'argument de `TIME_STYLE` peut être `full-iso`, `long-iso`, `iso`, `locale` ou `+FORMAT`. Le `FORMAT` est interprété comme dans date(1). Si `FORMAT` vaut `FORMAT1<changement de ligne>FORMAT2`, alors `FORMAT1` s'applique aux fichiers anciens et `FORMAT2` aux fichiers récents. Préfixer `TIME_STYLE` par "`posix-`", n'a d'effet qu'en dehors des paramètres régionaux POSIX. De plus, la variable d'environnement `TIME_STYLE` définit le style par défaut à utiliser.

Par défaut, le paramètre `QUAND` vaut "`always`" (toujours) et il peut aussi valoir "`auto`" ou "`never`" (jamais).

La couleur n'est pas utilisée pour distinguer les différents types de fichiers par défaut ou avec l'option `--color=never`. Avec l'option `--color=auto`, `ls` n'utilise des codes couleur que si la sortie standard est reliée à un terminal. La variable d'environnement `LS_COLORS` peut avoir un impact sur la configuration. Utilisez la commande `dircolors`(1) pour la définir.


----

## VOIR AUSSI

`dircolors`(1)

Documentation complète : https://www.gnu.org/software/coreutils/ls

aussi disponible localement à l’aide de la commande : `info '(coreutils) ls invocation'`


----

## DISPONIBILITÉ

`ls` fait partie du paquet `coreutils`.

----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|`/usr/bin/ls`|Chemin du binaire|

----

## VALEUR RENVOYEE

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|Si OK|
|`1`|si problèmes mineurs (par exemple, impossible d'accéder à un sous-répertoire)|
|`2`|si erreur grave (par exemple, impossible d'accéder aux paramètres de la ligne de commande).|

----

## SOURCES

- https://manpages.ubuntu.com/manpages/noble/fr/man1/ls.1.html

