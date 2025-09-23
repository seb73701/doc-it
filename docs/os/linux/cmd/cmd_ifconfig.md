---
title: ifconfig
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

## SYNTAXE

<span class="code_language">Shell</span>

```shell
ifconfig [-v] [-a] [-s] [interface]
ifconfig [-v] interface [aftype] options | adresse ...
```

----

## INFORMATION

`ifconfig` - Configurer une interface réseau.

`ifconfig` permet de configurer les interfaces réseau présentes dans le noyau. On peut les configurer lors du démarrage quand c'est nécessaire. Ensuite, on l'utilise généralement pour le débogage ou pour d'éventuels réglages.

Si aucun argument n'est donné, `ifconfig` affiche l'état des interfaces actives. Si seul le paramètre `interface` est donné, il affiche seulement l'état de l'interface correspondante; si seul le paramètre `-a` est fourni, il affiche l'état de toutes les interfaces, même celles qui sont inactives. Autrement, il permet de configurer une interface.

`ifconfig` est considéré comme dépassé par `ip`.

`ifconfig` est installé par le package : `net-tools`

Pour l'installer, il suffit d'exécuter cette commande :

<span class="code_language">Shell</span>

```shell
apt apt update && install net-tools
```

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-a`|Afficher toutes les interfaces actuellement disponibles, même celles qui sont inactives.|
|`-s`|Afficher un résumé (comme netstat -i)|
|`-v`|Mode volubile pour certains types d'erreurs.|
|`interface`|Correspond au nom de l'interface de réseau. C'est généralement un nom de pilote suivi d'un chiffre, comme `eth0` pour la première interface Ethernet. Si votre noyau accepte les **alias** d'interfaces, vous pouvez les spécifier avec `eth0:0` pour le premier **alias** de `eth0`. On peut les utiliser pour les affecter à une seconde adresse. Pour supprimer un **alias** d'interface, utilisez `ifconfig eth0:0 down`. Note : pour chaque groupe (un même noeud donné par une combinaison adresse/masque de réseau), si vous supprimez le premier **alias** (le principal), tous les **alias** sont supprimés.|
|`up`|Activer l'interface donnée. Cette option est implicite si une adresse est affectée à l'interface.|
|`down`|Désactiver le pilote pour l'interface donnée.|
|`[-]arp`|Activer ou désactiver l'utilisation du protocole ARP sur une interface.|
|`[-]promisc`|Activer ou désactiver le mode `promiscuous`. S'il est activé, tous les paquets circulant sur le réseau seront reçus par l'interface.|
|`[-]allmulti`|Activer ou désactiver le mode `all-multicast`. S'il est activé, l'interface recevra tous les paquets de multidiffusion circulant sur le réseau.|
|`metric N`|Définir la métrique de l'interface.|
|`mtu N`|Définir l'**unité de transfert maximum** ou **MTU** ("Maximum Transfer Unit") d'une interface.|
|`dstaddr adresse`|Définir l'adresse IP distante dans le cas d'un lien point-à-point (comme PPP). Cette option est obsolète; utilisez à la place l'option `pointopoint`.|
|`netmask adresse`|Définir le masque de réseau IP pour cette interface. La valeur par défaut correspond au masque de réseau usuel pour les classes A, B ou C (déduite de l'adresse IP), mais une autre valeur peut être définie.|
|`add adresse/long_préfixe`|Ajouter une adresse IPv6 à une interface.|
|`del adresse/long_préfixe`|Supprimer une adresse IPv6 d'une interface.|
|`tunnel aa.bb.cc.dd`|Créer un nouveau périphérique SIT (IPv6-dans-IPv4), fonctionnant en mode tunnel jusqu'à la destination donnée.|
|`irq adresse`|Définir la ligne d'interruption utilisée par un périphérique. Certains périphériques ne sont pas capables de changer dynamiquement d'IRQ.|
|`io_addr adresse`|Définir l'adresse de début dans l'espace d'entrée-sortie pour un périphérique.|
|`mem_start adresse`|Définir l'adresse de début de la mémoire partagée utilisée par un périphérique. Peu de périphériques ont besoin de ce paramètre.|
|`media type`|Définir le port physique ou le type de médium utilisé par le périphérique. Tous les  périphériques ne peuvent pas changer cette configuration et les types acceptés varient de l'un à l'autre. Les valeurs habituelles du **type** sont `10base2` (Ethernet  fin), `10baseT` (Ethernet 10Mbps en paire torsadée), `AUI` (émetteur-récepteur externe), etc. Le médium spécial de type `auto` permet d'indiquer au pilote de détecter automatiquement le médium utilisé. Une fois de plus, tous les pilotes n'acceptent pas cette option.|
|`[-]broadcast [adresse]`|Si l'adresse est donnée, elle définit l'adresse de diffusion du protocole pour cette interface. Autrement, on arme (ou désarme) l'indicateur `IFF_BROADCAST` de l'interface.|
|`[-]pointopoint [adresse]`|Valider le mode `point-à-point` d'une interface, signifiant qu'il existe un lien direct entre 2 machines, sans que personne d'autre ne puisse être à l'écoute. Si l'adresse est également donnée, cela définit l'adresse de protocole de l'autre machine, de la même manière que l'option obsolète `dstaddr`. Autrement, il arme (ou désarme) l'indicateur `IFF_POINTOPOINT` de l'interface.|
|`hw classe adresse`|Définir l'adresse matérielle de l'interface, si le pilote du périphérique  accepte cette opération. L'option doit être suivie du nom de la classe matérielle et de l'adresse matérielle en caractères ASCII affichables. Les classes matérielles actuellement prises en charge comprennent `ether` (Ethernet), `ax25` (AMPR AX.25), `ARCnet` et `netrom` (AMPR NET/ROM).|
|`multicast`|Positionner l'indicateur de multidiffusion sur l'interface. Ce n'est généralement  pas nécessaire puisque les pilotes positionnent correctement l'option eux-mêmes.|
|`adresse`|Correspond à l'adresse IP affectée à cette interface.|
|`txqueuelen longueur`|Définir la longueur de la file d'attente de transmission du périphérique. Il est utile de la fixer à des valeurs faibles pour les périphériques lents avec un temps d'attente important (modems, ISDN), pour empêcher d'être perturbé par de rapides transferts de masse issus des trafics interactifs, comme `telnet`.|


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
|`/proc/net/socket`||
|`/proc/net/dev`||
|`/proc/net/if_inet6`||
|`/etc/host`|Contient la base de données du nom d'hôte.|
|`/etc/networks`|Contient des noms de réseau.|

----

## MAN

- [man](https://manpages.ubuntu.com/manpages/noble/fr/man8/ifconfig.8.html)

C'est possible d'avoir la page `man` avec la commande : 

<span class="code_language">Shell</span>

```shell
man ipconfig
```

ou

<span class="code_language">Shell</span>

```shell
ipconfig --help
```

----

## EXEMPLES

### Afficher toutes les interfaces réseau

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

----

### Configurer une adresse IP

Permet de configurer manuellement une adresse IP et un masque de sous-réseau sur une interface réseau spécifique.

<span class="code_language">Shell</span>

```shell
ifconfig eth0 192.168.1.100 netmask 255.255.255.0
```

----

### Activer/désactiver une interface

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

----

### Configurer une adresse MAC

Change l'adresse MAC (Media Access Control) de l'interface réseau, ce qui peut être requis pour des raisons de sécurité ou de tests.

<span class="code_language">Shell</span>

```shell
ifconfig eth0 hw ether02:01:02:03:04:05
```

----

### Afficher une interface spécifique

Montre les détails tels que l'adresse IP, le masque de sous-réseau, et d'autres informations de la configuration réseau pour une interface spécifique.

<span class="code_language">Shell</span>

```shell
ifconfig eth0
```

----

### Afficher toutes les interfaces

Par défaut, sur GNU/Linux, la commande ifconfig seule, sans option, fournit la liste et les propriétés des interfaces actives. Si l’on souhaite visualiser l’ensemble des interfaces, y compris celles qui ne sont pas actives, il faut utiliser l’option –a :

<span class="code_language">Shell</span>

```shell
ifconfig -a
```

----

### Ajouter une seconde adresse IP à une interface déjà configurée

<span class="code_language">Shell</span>

```shell
ifconfig eth2:en1 172.18.2.39
```