---
title: apt-file
description: Apt-file permet de retrouver à quel paquet appartient un fichier.
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - apt-file
tags: [beta,os,commandes,linux,apt-file,apt,package]
---

----

## SYNTAXE

<span class="code_language">Shell</span>

```shell
apt-file [options] search pattern
apt-file [options] show package
```

----

## INFORMATION

`apt-file` permet de retrouver à quel paquet appartient un fichier. Cette commande peut s'avérer pratique dans bien des cas, notamment lors de la recherche d'un fichier contenu dans des paquets non installés. La commande renvoie également le chemin ou va être stocké le fichier. Selon l'option utilisée il est proche de la commande `dpkg -S`.

----

## PACKAGE

<span class="code_language">Shell</span>

```shell
apt install apt-file
```

----

## ACTIONS

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

### `/etc/apt/apt.conf.d/50apt-file.conf`

Choisit les fichiers `Contents` à télécharger. Notez qu'`apt-file` ne reconnaît que les cibles "`Acquire`" qui commencent par "`Contents-`".

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

----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|`/usr/bin/apt-file`|Fichier binaire|
|`/etc/apt/apt-file.conf`|Fichier de configuration|
|`/etc/apt/apt.conf.d/50apt-file.conf`|Fichier de configuration personnalisé.|
|`~/.config/apt-file.conf`|Fichier de configuration associé à un compte utilisateur.|

----

## MAN

- [man](https://manpages.ubuntu.com/manpages/questing/en/man1/apt-file.1.html)

C'est possible d'avoir la page `man` avec la commande : 

<span class="code_language">Shell</span>

```shell
man apt-file
```

ou

<span class="code_language">Shell</span>

```shell
apt-file --help
```

----

## EXEMPLES

### Indexer apt-file

C'est bien sûr une commande qu'il faudra réutiliser lorsque l'on mettra à jour le fichier `/etc/apt/sources.list`.

<span class="code_language">Shell</span>

```shell
apt-file update
```

----

### Lister les fichiers d'un package Debian

<span class="code_language">Shell</span>

```shell
apt-file show fail2ban
```

<span class="code_language">Sortie</span>

```text
fail2ban: /etc/default/fail2ban
fail2ban: /etc/fail2ban/action.d/abuseipdb.conf
fail2ban: /etc/fail2ban/action.d/apf.conf
fail2ban: /etc/fail2ban/action.d/apprise.conf
fail2ban: /etc/fail2ban/action.d/blocklist_de.conf
fail2ban: /etc/fail2ban/action.d/bsd-ipfw.conf
fail2ban: /etc/fail2ban/action.d/cloudflare-token.conf
fail2ban: /etc/fail2ban/action.d/cloudflare.conf
fail2ban: /etc/fail2ban/action.d/complain.conf
fail2ban: /etc/fail2ban/action.d/dshield.conf
fail2ban: /etc/fail2ban/action.d/dummy.conf
fail2ban: /etc/fail2ban/action.d/firewallcmd-allports.conf
fail2ban: /etc/fail2ban/action.d/firewallcmd-common.conf
fail2ban: /etc/fail2ban/action.d/firewallcmd-ipset.conf
fail2ban: /etc/fail2ban/action.d/firewallcmd-multiport.conf
fail2ban: /etc/fail2ban/action.d/firewallcmd-new.conf
...
fail2ban: /usr/share/man/man1/fail2ban-python.1.gz
fail2ban: /usr/share/man/man1/fail2ban-regex.1.gz
fail2ban: /usr/share/man/man1/fail2ban-server.1.gz
fail2ban: /usr/share/man/man1/fail2ban-testcases.1.gz
fail2ban: /usr/share/man/man1/fail2ban.1.gz
fail2ban: /usr/share/man/man5/jail.conf.5.gz
```

----

### Retrouver le package d'un fichier

<span class="code_language">Shell</span>

```shell
apt-file search /usr/bin/htpasswd
```

<span class="code_language">Sortie</span>

```text
apache2-utils: /usr/bin/htpasswd
```

----

### Retrouver le package d'un fichier en filtrant la sortie

<span class="code_language">Shell</span>

```shell
apt-file search ip | grep -E "bin/ip$"
```

<span class="code_language">Sortie</span>

```text
iproute2: /bin/ip
iproute2: /sbin/ip
```

----

###  Spécifier une architecture précise

<span class="code_language">Shell</span>

```shell
apt-search /usr/bin/owncloud -a amd64
```

----

### Spécifier un fichier source

<span class="code_language">Shell</span>

```shell
apt-file show apache2 --sources-list /opt/sources.list.test
```

----