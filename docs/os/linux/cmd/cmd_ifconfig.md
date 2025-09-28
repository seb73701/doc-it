---
title: ifconfig
description: Affiche ou configure les interfaces réseau (obsolète, mais encore utilisée).
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - ifconfig
tags: [os,commandes,linux,ifconfig,reseau,network]
---

----

## INFORMATION

`ifconfig` - Configurer une interface réseau.

`ifconfig` est considéré comme dépassé par `ip`.

----

## PACKAGE

<span class="code_language">Shell</span>

```shell
apt install net-tools
# ou
apt install inetutils-tools
```

----

## MAN

- [Page man (interne)](man/cmd_ifconfig_man)

----

## EXEMPLES

### Afficher toutes les interfaces réseau

<details>

Simplement en exécutant `ifconfig` sans argument, on peut afficher toutes les interfaces réseau.

<span class="code_language">Shell</span>

```shell
ifconfig
```

<span class="code_language">Sortie</span>

```text
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 172.22.227.33  netmask 255.255.240.0  broadcast 172.22.239.255
        inet6 fe80::215:5dff:fe94:15ce  prefixlen 64  scopeid 0x20<link>
        ether 00:15:5d:94:15:ce  txqueuelen 1000  (Ethernet)
        RX packets 16032  bytes 19274211 (19.2 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 6354  bytes 853006 (853.0 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 166969  bytes 59473886 (59.4 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 166969  bytes 59473886 (59.4 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

</details>

----

### Configurer une adresse IP

<details>

Permet de configurer manuellement une adresse IP et un masque de sous-réseau sur une interface réseau spécifique.

<span class="code_language">Shell</span>

```shell
ifconfig eth0 192.168.1.100 netmask 255.255.255.0
```

</details>

----

### Activer/désactiver une interface

<details>

Active ou désactive l'interface spécifiée, ce qui peut être utile pour la gestion de la connectivité ou la résolution de problèmes réseau.

- Activer une interface

<span class="code_language">Shell</span>

```shell
ifconfig eth0 up
```

- Désactiver une interface

<span class="code_language">Shell</span>

```shell
ifconfig eth0 down
```

</details>

----

### Configurer une adresse MAC

<details>

Change l'adresse MAC (Media Access Control) de l'interface réseau, ce qui peut être requis pour des raisons de sécurité ou de tests.

<span class="code_language">Shell</span>

```shell
ifconfig eth0 hw ether02:01:02:03:04:05
```

</details>

----

### Afficher une interface spécifique

<details>

Montre les détails tels que l'adresse IP, le masque de sous-réseau, et d'autres informations de la configuration réseau pour une interface spécifique.

<span class="code_language">Shell</span>

```shell
ifconfig eth0
```

</details>

----

### Afficher toutes les interfaces

<details>

Par défaut, sur GNU/Linux, la commande ifconfig seule, sans option, fournit la liste et les propriétés des interfaces actives. Si l’on souhaite visualiser l’ensemble des interfaces, y compris celles qui ne sont pas actives, il faut utiliser l’option –a :

<span class="code_language">Shell</span>

```shell
ifconfig -a
```

</details>

----

### Ajouter une seconde adresse IP à une interface déjà configurée

<details>

<span class="code_language">Shell</span>

```shell
ifconfig eth2:en1 172.18.2.39
```

</details>