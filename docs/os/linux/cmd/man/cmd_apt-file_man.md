---
title: apt-file (man)
description: (vide)
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - apt-file
tags: [os,commandes,linux,apt-file,apt,package,man]
---

----

## NOM

`apt-file` -- Utilitaire de recherche de paquets APT -- interface en ligne de commande

----

## SYNOPSIS

<span class="code_language">Shell</span>

```shell
apt-file [options] search pattern
apt-file [options] show package
```

----

## DESCRIPTION

`apt-file` permet de retrouver à quel paquet appartient un fichier. Cette commande peut s'avérer pratique dans bien des cas, notamment lors de la recherche d'un fichier contenu dans des paquets non installés. La commande renvoie également le chemin ou va être stocké le fichier. Selon l'option utilisée il est proche de la commande `dpkg -S`.

`apt-file` est un outil en ligne de commande permettant de rechercher des fichiers dans les paquets pour le système de gestion de paquets APT.

Certaines actions sont nécessaires pour lancer la recherche :

|Name|Description|
|:------|:----------|
|`find`|Alias de `search`.|
|`list`|Liste le contenu du package. Cette action est équivalente à `dpkg -L` mais il n'est pas nécessaire de l'installer pour avoir la liste des fichiers.|
|`list-indices`|Listez les indices `Contents` connus et leur statut dans un format lisible. Ces indices peuvent être recherché via l' option `-I` (lorsqu'elle est activée et après avoir récupéré les indices). La sortie est soumise à être modifiés sans préavis et ne sont donc pas adaptés à l'utilisation de scripts / à l'automatisation.<br/>Pour les formats lisibles par machine (par exemple automatisation), veuillez utiliser `apt-config dump` (rechercher les options en commençant par `Acquire::IndexTargets`) et `apt-get indextargets` pour vérifier le cache (recherchez les entrées avec un champ `Identifier` commençant par `Contents-`).|
|`search`|Rechercher dans quel paquet un fichier est inclus. Une liste de tous les paquets contenant le motif `pattern` est retourné.<br/>Étant donné que les fichiers `Contents` ne contiennent pas de répertoires, le `pattern` doit correspondre à (une partie d'un) nom de fichier.<br/>Par défaut, l'action de recherche interprète son `pattern` comme si `--substring-match` était spécifié.|
|`show`|Alias de `list`.|
|`update`|Cette action appelle `apt update` ou `apt-get update` (dépend du `tty`).|

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-a`, `--architecture architecture[,...]`|Cette option est utile si vous recherchez un paquet pour une architecture différente de celle installée sur votre système. Il peut s'agir d'une liste séparée par des virgules pour effectuer une recherche sur plusieurs architectures.|
|`-c`, `--config-file custom_config-file`|Fichier de configuration ; spécifiez un fichier de configuration à utiliser. Le programme lira le fichier de configuration par défaut puis ce fichier de configuration. Si des paramètres de configuration doivent être définis avant l'analyse des fichiers de configuration par défaut, spécifiez un fichier avec la variable d'environnement `APT_CONFIG`. Consultez `apt.conf`(5) pour plus d'informations sur la syntaxe.<br/>Le fichier de configuration sera lu par rapport à son emplacement dans la ligne de commande et pourra écraser les options qui apparaissent avant lui.<br/>Notez que le fichier de configuration sera également transmis à tous les outils **APT** appelés par `apt-file`.|
|`-D`, `--from-deb`|Utilise le contenu des archives `.deb` fournies comme modèles. Utile pour rechercher les conflits de fichiers avec d'autres paquets. Implique `-F`.|
|`-f, --from-file`|Lit les modèles à partir du ou des fichiers indiqués, un par ligne. Utilise `-` comme nom de fichier pour `stdin`.  Si aucun fichier n'est indiqué, la liste sera lue à partir de `stdin`. Ceci est beaucoup plus rapide que d'invoquer `apt-file` plusieurs fois.|
|`--filter-origins origin[,...]`|Rechercher uniquement dans les index provenant des sources répertoriées (par exemple "Debian"). Ce filtre correspond au nom indiqué dans le champ `origin` du fichier `Release`. Si il est défini sur "`*`", ce filtre sera désactivé (ceci  est particulièrement utile pour remplacer le paramètre dans un fichier de configuration). Alias de l'option de configuration APT : `apt-file::Search-Filter::Origin`|
|`--filter-suites suite[,...]`|Recherchez uniquement les index provenant des suites ou noms de code répertoriés (par exemple "`unstable`"). Ce filtre correspond au nom indiqué dans les champs `Codename` et `suite` du fichier `Release`. Cela signifie que "`unstable`" ou "`sid`" correspondront à la suite instable de Debian. Si il est défini sur "`*`", ce filtre sera désactivé (ceci est particulièrement utile pour remplacer le paramètre dans un fichier de configuration). Alias de l'option de configuration APT : `apt-file::Search-Filter::Suite`|
|`-F`, `--fixed-string`|N'étendez pas le `pattern` de recherche avec des caractères génériques au début et à la fin du `pattern`. Il s'agit du comportement par défaut pour `show` et `list`.|
|`--index-names type[,...]`, `-I type[,...]`|Recherche uniquement les index des noms donnés. Si la valeur spéciale `ALL` (sensible à la casse) est définie, tous les index `apt-file` sont recherchés.<br/>Le ou les noms doivent correspondre à un ou plusieurs des identifiants utilisés dans la configuration APT (sans le préfixe "`Contents-`"). Exemple si la configuration contient les extraits suivants :<br/>`Acquire::IndexTargets::deb::Contents-deb \{ ... \};`<br/>`Acquire::IndexTargets::deb-src::Contents-dsc \{ ... \};`<br/>`Acquire::IndexTargets::deb::Contents-udeb \{ ... \};`<br/>`Acquire::IndexTargets::deb::Contents-deb-legacy \{`<br/>`# Explicitly named to "Contents-deb"`<br/>`Identifier "Contents-deb";`<br/>`...;`<br/>`\};`<br/>Ensuite, `apt-file` reconnaîtra "`deb`", "`dsc`" et "`udeb`" comme noms d'index.<br/>Cette option prend par défaut la valeur de l'option de configuration `apt` "`apt-file::Index-Names`" (ou "`deb`" si omise).|
|`-i`, `--ignore-case`|Ignorer la casse lors de la recherche d'un motif.|
|`-l`, `--package-only`|Afficher uniquement le nom du paquet ; ne pas afficher les noms de fichiers.|
|`--stream-results`|Il s'agit d'une option à usage spécial utile pour traiter les recherches qui produisent un nombre élevé de résultats (10 000+) et/ou le traitement automatisé des résultats.<br/>Désactivez la logique de déduplication et affichez immédiatement un résultat lorsqu'une correspondance est trouvée<br/>Cela peut considérablement réduire les besoins en mémoire d'`apt-file` lors du traitement des recherches comportant de nombreuses correspondances. Cela réduira également le temps nécessaire pour émettre la première correspondance,  ce qui peut être utile si les correspondances peuvent être traitées au fur et à mesure qu'elles sont découvertes et si le consommateur peut gérer les correspondances dupliquées.|
|`-o`, `--option APT::Option=Valeur`|Définir une option de configuration; cela permettra de définir une option de configuration arbitraire. La syntaxe est `-o APT::Option=Valeur`. `-o` et `--option` peuvent être utilisés plusieurs fois pour définir différentes options.<br/>Cette option peut être utilisée pour remplacer d'autres options de ligne de commande (par exemple, "`-o apt-file::Search-Filter::Origin=Debian`" équivaut en fait à "`--filter-origins Debian`").<br/>Notez que les options de configuration transmises via cette option seront également transmises à tous les outils APT appelés par `apt-file`.|
|`--substring-match`|Correspond si le `pattern` de recherche donné est une sous-chaîne d'un chemin ou d'un paquet. Il s'agit du paramètre par défaut pour les actions de recherche et de localisation.|
|`-v`, `--verbose`|Exécutez `apt-file` en mode verbose/debug.|
|`-x`, `--regexp`|Traite le `pattern` comme une expression régulière (perl). Voir `perlreref`(1) pour plus de détails. Sans cette option, le motif est traité comme une chaîne littérale à rechercher. Sachez que cette option peut être assez lente. Si les performances sont un problème, envisagez de donner à `apt-file` trop de correspondances de `patterns` non réguliers et redirigez la sortie vers `perl -ne '/<motif-ici>/'`. Cela permet à `apt-file` d'utiliser davantage d'optimisations et laisse moins de travail à l'expression régulière "plus lente".|
|`-h`, `--help`|Afficher un écran d'aide.|

----

## FICHIER DE CONFIGURATION

La commande `apt-file` dépend de la configuration APT. Il est à noter que la configuration par défaut fait en sorte qu'`apt` récupère
les fichiers `Contents` par défaut lors d'un appel à `apt update`.

Pour plus d'informations sur la configuration d'APT afin de récupérer plus ou moins de fichiers `Contents`, veuillez vous reporter à
`/usr/share/doc/apt-file/README.md.gz`.

Les fichiers suivants sont particulièrement intéressants :

### `/etc/apt/apt-file.conf`

Notez que ce chemin est en fait configurable en modifiant la valeur de la configuration APT appelée "`Dir::Etc::apt-file-main`". La valeur indiquée n'est que la valeur par défaut de cette option.

Si ce fichier est présent, `apt-file` le lira <u>après</u> tous les fichiers de configuration APT par défaut. Tout fichier de configuration `-c` ou option (`-o`) sera évalué <u>avant</u> ce fichier (et pourra remplacer les options qui y sont définies).

Le fichier sera également transmis à tous les outils APT appelés par `apt-file`.

<span class="code_language">Json</span>

```json
/*
 Install as /etc/apt/apt-file.conf to make apt-file parse this file.
 It will be parsed *after* all other apt config files.

 Combine with disable-apt-file.conf to make apt-file only update the
  Contents files on "apt-file update".

  Alternative uses:
  - If you change the Dir::State below, you can use this config file
    to emulate a "user cache" (similar to the old "apt-file --cache").
    - You will have to create the "cache" directory yourself.

  CAVEATS:
  * Note this operates on a black list to avoid re-fetching other
    resources.  See inline shell snippet to see if it is up to
    date.
  * This will *not* overrule explicitly enabled indices or sources
    lists that explicitly enables a given index target.
*/

Acquire::IndexTargets {
        deb::Contents-deb::DefaultEnabled "true";
        deb-src::Contents-dsc::DefaultEnabled "true";

        deb::Packages::DefaultEnabled "false";
        deb::Translations::DefaultEnabled "false";
        deb-src::Sources::DefaultEnabled "false";
        // Add other index targets here as necessary, use:
        // apt-config dump | perl -ne \
        //   'print "$1\n" if m/^Acquire::IndexTargets::(deb(?:-src)?::[^:\s]+)\s/;'
        // to list known names.
};

Dir::State "var/lib/apt-file/";
// Otherwise, APT will complain about APT::Default-Release not
// being available in the sources.
#clear APT::Default-Release;
```

### `/etc/apt/apt.conf.d/50apt-file.conf`

Choisit les fichiers `Contents` à télécharger. Notez qu'`apt-file` ne reconnaît que les cibles "`Acquire`" qui commencent par "`Contents-`".

<span class="code_language">Json</span>

```perl
## This file is provided by apt-file(1) to download Contents
## files, which is used by apt-file for searching.

Acquire::IndexTargets {
    deb::Contents-deb  {
        MetaKey "$(COMPONENT)/Contents-$(ARCHITECTURE)";
        ShortDescription "Contents-$(ARCHITECTURE)";
        Description "$(RELEASE)/$(COMPONENT) $(ARCHITECTURE) Contents (deb)";

        flatMetaKey "Contents-$(ARCHITECTURE)";
        flatDescription "$(RELEASE) Contents (deb)";
        PDiffs "true";
        KeepCompressed "true";
    };

    # Download Contents for source files if there is a deb-src
    # line
    deb-src::Contents-dsc  {
        MetaKey "$(COMPONENT)/Contents-source";
        ShortDescription "Contents-source";
        Description "$(RELEASE)/$(COMPONENT) source Contents (dsc)";

        flatMetaKey "Contents-source";
        flatDescription "$(RELEASE) Contents (dsc)";
        PDiffs "true";
        KeepCompressed "true";
        DefaultEnabled "false";
    };

    # Configuration for downloading Contents files for
    # debian-installer packages (udebs).
    deb::Contents-udeb  {
        MetaKey "$(COMPONENT)/Contents-udeb-$(ARCHITECTURE)";
        ShortDescription "Contents-udeb-$(ARCHITECTURE)";
        Description "$(RELEASE)/$(COMPONENT) $(ARCHITECTURE) Contents (udeb)";

        flatMetaKey "Contents-udeb-$(ARCHITECTURE)";
        flatDescription "$(RELEASE) Contents (udeb)";
        KeepCompressed "true";
        PDiffs "true";
        DefaultEnabled "false";
    };
    ### FALLBACKS
    deb::Contents-deb-legacy {
        MetaKey "Contents-$(ARCHITECTURE)";
        ShortDescription "Contents-$(ARCHITECTURE)";
        Description "$(RELEASE) $(ARCHITECTURE) Contents (deb)";

        PDiffs "true";
        KeepCompressed "true";
        Fallback-Of "Contents-deb";
        Identifier "Contents-deb";
    };
};
Dir::Etc::apt-file-main "apt-file.conf";
# Default for -I/--index-names (comma-separated)
apt-file::Index-Names "deb";
# Set to true, if you are working with Contents files generated by
# older versions of dak or reprepro (<< 5.2.0-1~) that includes a
# descriptive header.
apt-file::Parser::Check-For-Description-Header "false";
```

----

## BOGUES, BIZARRERIES

Il existe certains problèmes connus ou "bizarreries" qu'il est bon de garder à l'esprit.

- Les fichiers Contents n'incluent pas de barre oblique au début des chemins d'accès. Cela signifie que `/bin/ls` est répertorié comme `bin/ls` dans le fichier `Contents`. Si vous recherchez quelque chose dans un répertoire de niveau supérieur, il est souvent préférable d'omettre la barre oblique au début.<br/>L'algorithme de recherche tentera de contourner la barre oblique initiale, mais cela ne fonctionnera pas dans tous les cas. Pour contourner ce problème, essayez de placer la barre oblique initiale au début des expressions régulières. Par exemple, utilisez "`/(?:usr/bin/vim|sbin/lvm)`" au lieu de "`/usr/bin/vim|/sbin/lvm`".
- Lorsqu'une nouvelle ligne a été ajoutée au fichier `sources.list` et que la mise à jour `apt` n'a pas été exécutée, `apt-file` n'affiche pas de message d'avertissement.
- Par défaut, `apt-file` suppose que les fichiers `Contents` ne contiennent pas d'en-tête descriptif (expliquant ce qu'est le fichier et comment l'interpréter). Cependant, certains outils les ont générés avec un tel en-tête (par exemple pour les anciennes versions des fichiers `Contents` de l'archive Debian ou les fichiers `Contents` générés par `reprepro` avant la version 5.2.0).<br/>Si vous recherchez de tels fichiers, vous devrez définir `apt-file::Parser::Check-For-Description-Header` sur `true` (par exemple dans `/etc/apt/apt.conf.d/50apt-file.conf`) pour que `apt-file` filtre correctement les en-têtes et évite les fausses correspondances.<br/>La raison pour laquelle ce n'est pas le comportement par défaut est que cela coûte deux fois plus en surcharge, alors que la plupart des fichiers `Contents` courants n'ont plus d'en-tête. (voir \#881405 pour plus de détails).
- Tous les référentiels APT ne disposent pas de fichiers `Contents`. Les supports d'installation courants (CD, etc.) peuvent notamment les omettre pour économiser de l'espace.<br/>La configuration par défaut d'`apt-file` marque les fichiers `Contents` comme facultatifs et échouera simplement à rechercher dans les fichiers `Contents` de ces référentiels.

----

## VOIR AUSSI

`apt`(1), `apt-cache`(8), `apt.conf`(5)

Le guide d'utilisation d'APT dans `/usr/share/doc/apt/`

L'exemple de configuration dans `/usr/share/doc/apt-file/examples`

Le fichier `README` dans `/usr/share/doc/apt-file/README.md.gz`

----

## DISPONIBILITÉ

`apt-file` fait partie du paquet `apt-file`.

----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|`/usr/bin/apt-file`|Fichier binaire|
|`/etc/apt/apt-file.conf`|Fichier de configuration|
|`/etc/apt/apt.conf.d/50apt-file.conf`|Fichier de configuration personnalisé.|
|`~/.config/apt-file.conf`|Fichier de configuration associé à un compte utilisateur.|

----

## VALEUR RENVOYEE

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|`apt-file` a renvoyé une réponse positive. Si la commande était une recherche, il y avait au moins un résultat.|
|`1`|`apt-file` a effectué une recherche avec succès, mais n'a trouvé aucun résultat.|
|`2`|Une erreur s'est produite (y compris des options utilisateur non valides/contradictoires).|
|`3`|`apt-file` n'a pas pu exécuter la commande car le cache était vide. Veuillez vous assurer que les index sont activés dans la configuration APT et exécutez `apt update` pour les récupérer.|
|`4`|`apt-file` n'a pas pu exécuter la commande car le cache ne contient aucun fichier correspondant aux restrictions. Modifiez les restrictions (par exemple `--index-names`) ou configurez apt pour récupérer les fichiers pertinents et exécutez `apt update`.|
|`255`|Une erreur interne / exception non interceptée s'est produite dans `apt-file`.  Veuillez signaler un bogue concernant `apt-file`.|

Tout autre code de sortie est réservé pour une utilisation future.

----

## SOURCES

- https://manpages.ubuntu.com/manpages/questing/en/man1/apt-file.1.html
- https://doc.ubuntu-fr.org/apt-file
- https://wiki.debian.org/apt-file