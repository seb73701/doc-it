---
title: netstat (man)
description: (vide)
hide_table_of_contents: false
hide_title: false
keywords:
 - os
 - commandes
 - linux
 - netstat
tags: [os,commandes,linux,netstat,network,reseau,man]
---

----

## NOM

`netstat` - Affiche les connexions réseau, les tables de routage, les statistiques des interfaces, les connexions masquées, les messages netlink, et les membres multicast.

----

## SYNOPSIS

<span class="code_language">Shell</span>

```shell
netstat [-venaoc] [--tcp|-t] [--udp|-u] [--udplite|-U] [--sctp|-S] [--raw|-w] [--groups|-g] [--unix|-x] [--inet|--ip] [--ax25] [--ipx] [--netrom]
netstat [-veenc] [--inet] [--ipx] [--netrom] [--ddp] [--ax25] {--route|-r}
netstat [-veenpac] {--interfaces|-i} [iface]
netstat [-enc] {--masquerade|-M}
netstat [-cn] {--netlink|-N}
netstat {-V|--version} {-h|--help}
```

----

## DESCRIPTION

`netstat` (Network Statistics) est un outil de ligne de commande qui affiche les connexions réseau, les tables de routage, les statistiques d'interface, les connexions masquées, et les membres multicast. Bien qu'il soit moins utilisé de nos jours, remplacé en grande partie par `ss`, ses principales.

Netstat affiche les informations du sous-système réseau de Linux.

|Options|Description|
|:------|:----------|
|`(no option)`|Vous pouvez voir l'état des connexions réseau en listant les sockets ouvertes. C'est l'option par défaut : si vous ne spécifiez aucune famille d'adresses, les sockets actives de toutes les familles d'adresses seront affichées. Avec le paramètre `-e` vous obtenez quelques informations supplémentaires (`userid`). Avec le paramètre `-v` vous pouvez demander à `netstat` de signaler des **familles d'adresses connues non supportées** par le noyau. Le paramètre `-o` affiche des informations supplémentaires sur les **timers** réseau. En donnant le paramètre `-p` vous verrez le PID et le nom du processus à qui appartient la socket. Le paramètre `-a` affiche toutes les sockets, y compris les sockets d'écoute des serveurs. La famille d'adresses inet affiche les sockets RAW, UDP et TCP.|
|`-r`, `--route`|Avec le paramètre `-r`, `--route` vous pouvez visualiser les tables de routage dans le même format qu'avec la commande `route -e netstat -er` utilisera le format de la commande `route`.|
|`-i`, `--interfaces iface`|Si vous utilisez l'option `-i`, `--interfaces`, une table de toutes (ou de l'interface `iface` spécifiée) les interfaces réseau sera affichée. Le format de sortie est le même que celui de la commande `ifconfig -e`. `netstat -ei` affiche une table ou une seule entrée d'interface comme la commande `ifconfig`. Avec le paramètre `-a`, vous pouvez inclure les interfaces qui ne sont pas configurées (c.a.d qui n'ont pas l'indicateur `U=UP` armé).|
|`-M`, `--masquerade`|Permet de voir les sessions ayant de l'IP-masquerade. Avec le paramètre `-e` vous pouvez inclure quelques informations concernant les numéros de séquence et les deltas causés par des réécritures de données sur des sessions FTP (commande PORT). Le support de l'IP-Masquerade est utilisé pour cacher au monde extérieur des hôtes appartenant à un réseau (et ayant des adresses) non officiel, tel que décrit dans iptables.|
|`-N`, `--netlink`|Les noyaux récents supportent une communication avec l'utilisateur appelée `netlink`. Vous pouvez obtenir des messages relatifs à la création, la suppression d'interfaces ou de routes à partir de `/dev/route` (36,0).|

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-v`, `--verbose`|active le mode verbeux. Affiche quelques informations utiles concernant les familles d'adresses non configurées.|
|`-n`, `--numeric`|affiche les adresses en format numérique au lieu d'essayer de déterminer le nom symbolique d'hôte, de port ou d'utilisateur.|
|`-p`, `--programs`|affiche le nom et le PID des processus propriétaires de chaque socket décrite. Vous devez être le propriétaire d'un processus pour visualiser les sockets qui lui appartiennent ou être l'utilisateur `root` pour disposer de toutes les informations.|
|`-A`, `--af famille`|utilise une méthode différente pour affecter les familles d'adresses. `famille` est une liste de familles d'adresses séparées par des ('`,`') telles que `inet`, `unix`, `ipx`, `ax25`, `netrom` et `ddp`. L'utilisation des options longues suivantes a le même effet `--inet`, `--unix`, `--ipx`, `--ax25`, `--netrom` et `--ddp`.|
|`-c`, `--continous`|Demandera à `netstat` d'afficher la table sélectionnée chaque seconde jusqu'à ce que vous l'interrompiez.|

----

## RESULTATS

### Connexions Internet actives (TCP, UDP, RAW)

|Nom|Description|
|:------|:----------|
|`Proto`|Le protocole (TCP, UDP, RAW) utilisé par la socket.|
|`Recv-Q`|Le nombre d'octets non encore lus par le programme utilisateur connecté à cette socket.|
|`Send-Q`|Le nombre d'octets non encore acquittés par l'hôte distant.|
|`Local Address (Adresse locale)`|L'adresse locale (nom d'hôte local) et numéro de port de la socket. Sauf si l'option `-n` est donnée, l'adresse de la prise est traduite en nom d'hôte, et le numéro de port est traduit en nom de service correspondant.|
|`Foreign Address (Adresse distante)`|L'adresse distante (nom d'hôte distant) et le numéro de port de la prise. Comme pour l'adresse locale et le numéro de port, l'option `-n` invalide la traduction du nom d'hôte et de service.|
|`State (Etat)`|L'état de la socket. Puisqu'il n'y a pas d'état dans le mode `RAW` et généralement pas d'état utilisé en UDP, cette colonne peut se trouver vierge. Normalement, on trouvera une des valeur suivante:<br/>`ESTABLISHED` : La socket a une connexion établie<br/>`SYN_SENT` : La socket attend activement d'établir une connexion.<br/>`SYN_RECV` : Une requête de connexion a été reçue du réseau.<br/>`FIN_WAIT1` : La socket est fermée, et la connexion est en cours de terminaison.<br/>`FIN_WAIT2` : La connexion est fermée, et la socket attend une terminaison du distant.<br/>`TIME_WAIT` : La socket attend le traitement de tous les paquets encore sur le réseau avant d'entreprendre la fermeture.<br/>`CLOSE` : La socket n'est pas utilisée.<br/>`CLOSE_WAIT` : Le distant a arrêté, attendant la fermeture de la socket.<br/>`LAST_ACK` : Le distant termine, et la socket est fermée. Attente d'acquittement.<br/>`LISTEN` : La socket est à l'écoute de connexions entrantes. Ces sockets ne sont affichées que si le paramètre `-a`,`--listening` est fourni.<br/>`CLOSING` : Les deux prises sont arrêtées mais toutes les données locales n'ont pas encore été envoyées.<br/>`UNKNOWN` : L'état de la prise est inconnu.|
|`User (Utilisateur)`|Le nom d'utilisateur ou l'UID du propriétaire de la socket.|
|`PID/Program name (PID/Nom de Programme)`|Le PID et le nom du programme (séparés par un slash) propriétaire de la socket. Le paramètre `-p` active l'affichage de cette colonne. Vous devez avoir les droits de root puisque vous devez avoir les droits d'accès aux processus pour visualiser les sockets qui lui correspondent. Ces informations ne sont pas disponibles avec les sockets IPX.|
|`Timer`|(Ceci doit être rédigé)|

### Sockets actives du domaine UNIX

|Nom|Description|
|:------|:----------|
|`Proto`|Le protocole (habituellement UNIX) utilisé par la socket.|
|`RefCnt`|Le nombre de références (i.e. processus attachés via cette socket).|
|`Flags (indicateurs)`|Les indicateurs affichée sont `SO_ACCEPTON` (affiché `ACC`), `SO_WAITDATA (W)` ou `SO_NOSPACE (N)`. `SO_ACCECPTON` est utilisé pour les sockets non-connectées si les processus correspondant sont en attente de demande de connexion. Les autres indicateurs sont d'un intérêt limité.|
|`Type`|Il y a différents types d'accès aux sockets :<br/>`SOCK_DGRAM` : La prise est utilisée en mode Datagram (sans connexion).<br/>`SOCK_STREAM` : C'est une socket '`stream`' (connexion).<br/>`SOCK_RAW` : La prise est utilisée en mode `raw`.<br/>`SOCK_RDM` : Celle-ci est utilisée pour les messages délivrée de manière fiable.<br/>`SOCK_SEQPACKET` : C'est une socket en mode paquets séquentiels.<br/>`SOCK_PACKET` : Prise d'accès à l'interface `RAW`<br/>`UNKNOWN` : Qui sait ce que l'avenir nous réserve - Juste à remplir ici :-)|
|`State (Etat)`|Ce champ contient un des mots clés suivants :<br/>`FREE` : La socket n'est pas allouée<br/>`LISTENING` : La socket est à l'écoute de demandes de connexions. Ces sockets ne sont affichées que si le paramètre `-a`,`--listening` est fourni.<br/>`CONNECTING` : La prise est en cours d'établissement de connexion.<br/>`CONNECTED` : La socket est connectée.<br/>`DISCONNECTING` : La socket est en cours de déconnexion.<br/>`(empty)` : La socket n'est connectée à aucune autre.<br/>`UNKNOWN` : Cet état ne devrait pas apparaître.|
|`PID/Program name (PID/Nom de programme`|Le PID et le nom du programme propriétaire de la socket. Plus d'informations sont disponibles dans la section Connexions Internet actives ci-dessus.|
|`Path (chemin)`|Affiche le chemin correspondant à l'attachement des processus à la socket.|
|`Sockets IPX actives`|(à faire par quelqu'un qui connaît)|
|`Sockets NET/ROM actives`|(à faire par quelqu'un qui connaît)|
|`Sockets AX.25 actives`|(à faire par quelqu'un qui connaît)|

Voici quelques détails spécifiques sur certaines lignes de la sortie:
- Les lignes avec `domain` se réfèrent généralement au port 53, utilisé par le service DNS.
- `ssh` fait référence au service Secure Shell, qui par défaut écoute sur le port 22.
- `mdns` sur le port 5353 est utilisé par Multicast DNS, une partie du protocole Zerocong.
- `ipp` sur le port 631 concerne le protocole Internet Printing Protocol, utilisé pour les services d'impression réseau.

----

## NOTES

Depuis la version 2.2 du noyau, `netstat -i` n'affiche plus les statistiques des interfaces `alias`. Pour obtenir les compteurs par interface `alias`, vous devez définir des règles spécifiques à l'aide de la commande `iptables`(8).

## BOGUES

Des informations étranges peuvent apparaitre occasionnellement si une socket change d'état au moment ou elle est visualisée. Ceci est peut probable.

Le paramètre `netstat -i` est décrit tel qu'il fonctionnera lorsque le code de la version BETA du paquetage `net-tools` aura été nettoyé.

----

## VOIR AUSSI

`route`(8), `ifconfig`(8), `iptables`(8), `proc`(5), `ss`(8), `ip`(8)

----

## DISPONIBILITÉ

`netstat` fait partie du paquet `net-tools`.

----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|`/bin/netstat`|Fichier binaire|
|`/etc/services`|Le fichier de correspondance des services|
|`/proc/net/appeltalk`|informations sockets DDP (appeltalk)|
|`/proc/net/ax25_route`|informations routage AX25 du noyau|
|`/proc/net/ax25`|informations sockets AX25|
|`/proc/net/dev`|informations périphériques|
|`/proc/net/igmp`|informations multicast IGMP|
|`/proc/net/ip_masquerade`|Connexion avec masquerade noyau|
|`/proc/net/ipx_route`|information routage IPC du noyan|
|`/proc/net/ipx`|informations sockets IPX|
|`/proc/net/nr_neigh`|Voisinage NET/ROM noyau|
|`/proc/net/nr`|informations sockets NET/ROM|
|`/proc/net/raw`|informations sockets RAW|
|`/proc/net/route`|information routage IP du noyau|
|`/proc/net/tcp`|informations sockets TCP|
|`/proc/net/udp`|informations sockets UDP|
|`/proc/net/unix`|informations sockets domaine UNIX|
|`/proc/nr_nodes`|informations routage NET/ROM du noyau|

----

## VALEUR RENVOYEE

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|L'exécution de la commande a abouti.|
|`>0`|Une erreur s'est produite.|

----

## SOURCES

- https://manpages.ubuntu.com/manpages/noble/fr/man8/netstat.8.html