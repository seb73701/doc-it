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
tags: [os,commandes,linux,apt-file,apt,package]
---

----

## INFORMATION

`apt-file` est un outil en ligne de commande permettant de rechercher des fichiers dans les paquets pour le système de gestion de paquets APT. Selon l'option utilisée il est proche de la commande `dpkg -S` mais il est plus lent qu'`apt-file`.

`apt-file` indexe le contenu des paquets dans vos dépôts disponibles, afin que vous puissiez trouver quel paquet contient un fichier donné. Par exemple, si un guide en ligne vous indique d'utiliser un certain programme, `apt-file search <nom-du-programme>` peut vous indiquer quel(s) paquet(s) vous devez installer.

----

## PACKAGE

<span class="code_language">Shell</span>

```shell
apt install apt-file
```

----


## MAN

- [Page man (interne)](man/cmd_apt-file_man)

----

## EXEMPLES

### Indexer `apt-file`

<details>

C'est bien sûr une commande qu'il faudra réutiliser lorsque l'on mettra à jour le fichier `/etc/apt/sources.list`.

<span class="code_language">Shell</span>

```shell
apt-file update
```

</details>

----

### Lister les fichiers d'un package Debian

<details>

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

</details>

----

### Retrouver le package d'un fichier

<details>

<span class="code_language">Shell</span>

```shell
apt-file search /usr/bin/htpasswd
```

<span class="code_language">Sortie</span>

```text
apache2-utils: /usr/bin/htpasswd
```

</details>

----

### Retrouver le package d'un fichier en filtrant la sortie

<details>

<span class="code_language">Shell</span>

```shell
apt-file search ip | grep -E "bin/ip$"
```

<span class="code_language">Sortie</span>

```text
iproute2: /bin/ip
iproute2: /sbin/ip
```

</details>

----

###  Spécifier une architecture précise

<details>

<span class="code_language">Shell</span>

```shell
apt-search /usr/bin/owncloud -a amd64
```

</details>

----

### Spécifier un fichier source

<details>

<span class="code_language">Shell</span>

```shell
apt-file show apache2 --sources-list /opt/sources.list.test
```

</details>

----

### Recherche avancée (regex)

<details>

`apt-file` supporte les regex pour la recherche (https://manpages.debian.org/man/perlreref)

<span class="code_language">Shell</span>

```shell
apt-file search -x "bin/dig$"
apt-file search -x "bin/file[sn]"
```

</details>

----

### Liste les fichiers

<details>

`apt-file` peut également lister le contenu d'un paquet :

<span class="code_language">Shell</span>

```shell
apt-file list libmp3lame0
```

<span class="code_language">Sortie</span>

```text
libmp3lame0: /usr/lib/x86_64-linux-gnu/libmp3lame.so.0
libmp3lame0: /usr/lib/x86_64-linux-gnu/libmp3lame.so.0.0.0
libmp3lame0: /usr/share/doc/libmp3lame0/changelog.Debian.amd64.gz
libmp3lame0: /usr/share/doc/libmp3lame0/changelog.Debian.gz
libmp3lame0: /usr/share/doc/libmp3lame0/changelog.gz
libmp3lame0: /usr/share/doc/libmp3lame0/copyright
```

</details>

## ARTICLES

- [Lien](#)
