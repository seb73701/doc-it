---
title: ss
description: ss est un outil moderne qui remplace netstat, offrant plus d'informations et étant plus rapide. Il est utilisé pour afficher des informations détaillées sur les différents sockets.
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - ss
tags: [os,commandes,linux,ss,network,reseau]
---

----

## SYNTAXE

<span class="code_language">Shell</span>

```shell
ss [OPTIONS] [ FILTRE ]
```

----

## INFORMATION

`ss` (_Socket Statistics_) est un outil moderne qui remplace `netstat`, offrant plus d'informations et étant plus rapide. Il est utilisé pour afficher des informations détaillées sur les différents sockets.

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-h`, `--help`|Afficher le résumé des options.|
|`-V`, `--version`|Afficher les informations sur la version.|
|`-n`, `--numeric`|Essayez maintenant de résoudre les noms de service.|
|`-r`, `--resolve`|Essayez de résoudre les adresses/ports numériques.|
|`-a`, `--all`|Afficher toutes les sockets|
|`-l`, `--listening`|Afficher les sockets d'écoute.|
|`-o`, `--options`|Afficher les informations relatives au minuteur.|
|`-e`, `--extended`|Afficher les informations détaillées sur la socket|
|`-m`, `--memory`|Afficher l'utilisation de la mémoire du socket.|
|`-p`, `--processes`|Afficher les processus utilisant le socket.|
|`-T`, `--threads`|Afficher les threads utilisant le socket.|
|`-i`, `--info`|Afficher les informations TCP internes.|
|`--tipcinfo`|Affiche les informations tipc du socket|
|`-s`, `--summary`|Imprimer les statistiques récapitulatives. Cette option n'analyse pas les listes de sockets obtenues à partir de diverses sources. Elle est utile lorsque le nombre de sockets est si important que l'analyse de `/proc/net/tcp` s'avère fastidieuse.|
|`--tos`|Show tos and priority information|
|`--cgroup`|Show cgroup information|
|`-b`, `--bpf`|Show bpf filter socket information|
|`-E`, `--events`|continually display sockets as they are destroyed|
|`-Z`, `--context`|display task SELinux security contexts|
|`-z`, `--contexts`|display task and socket SELinux security contexts|
|`-N`, `--net`|switch to the specified network namespace name|
|`-4`, `--ipv4`|Afficher uniquement les sockets IP version 4 (alias pour `-f inet`).|
|`-6`, `--ipv6`|Afficher uniquement les sockets IP version 6 (alias pour `-f inet6`).|
|`-0`, `--packet`|Afficher uniquement les sockets PACKET.|
|`-t`, `--tcp`|Afficher uniquement les sockets TCP.|
|`-M`, `--mptcp`|Afficher uniquement les sockets MPTCP.|
|`-S`, `--sctp`|Afficher uniquement les sockets SCTP.|
|`-u`, `--udp`|Afficher uniquement les sockets UDP.|
|`-d`, `--dccp`|Afficher uniquement les sockets DCCP.|
|`-w`, `--raw`|Afficher uniquement les sockets RAW.|
|`-x`, `--unix`|Afficher uniquement les sockets de domaine Unix|
|`--tipc`|Affiche uniquement les sockets TIPC.|
|`--vsock`|Affiche uniquement les sockets vsock.|
|`--xdp`|Affiche uniquement les sockets XDP.|
|`-f FAMILLE`, `--family=FAMILLE`|Afficher les sockets de type `FAMILLE`. Actuellement, les familles suivantes sont prises en charge : `unix`, `inet`, `inet6`, `link`, `netlink`, `vsock`, `tipc`, `xdp`|
|`-K`, `--kill`|forcibly close sockets, display what was closed|
|`-H`, `--no-header`|Suppress header line|
|`-O`, `--oneline`|socket's data printed on a single line|
|`--inet-sockopt`|show various inet socket options|
|`-A QUERY`, `--query=QUERY`, `--socket=QUERY`|Liste des tables de sockets à vider, séparées par des virgules. Les identifiants suivants sont compris : `all`, `inet`, `tcp`, `mptcp`, `udp`, `raw`, `unix`, `packet`, `netlink`, `unix_dgram`, `unix_stream`, `packet_raw`, `packet_dgram`, `unix_seqpacket`, `dccp`, `sctp`, `vsock_stream`, `vsock_dgram`, `tipc`, `xdp`.|
|`-D FICHIER`, `--diag=FICHIER`|N'affichez rien, contentez-vous de transférer les informations brutes concernant les sockets TCP vers `FICHIER` après avoir appliqué les filtres.|
|`-F FICHIER`, `--filter=FICHIER`|Lire les informations de filtre à partir du `FICHIER`. Chaque ligne du `FICHIER` est interprétée comme une option de ligne de commande unique.|
|`FILTER := [ state TCP-STATE ] [ EXPRESSION ]`|Veuillez consulter la documentation officielle (paquet Debian iproute-doc) pour plus de détails concernant les filtres.|

|Options|Description|
|:------|:----------|
|`STATE-FILTER`|`all`, `connected`, `synchronized`, `bucket`, `big`, `TCP-STATES`|

|Options|Description|
|:------|:----------|
|`TCP-STATES`|`established`, `syn-sent`, `syn-recv`, `fin-wait-{1,2}`, `time-wait`, `closed`, `close-wait`, `last-ack`, `listening`, `closing`|

|Options|Description|
|:------|:----------|
|`connected`|`established`, `syn-sent`, `syn-recv`, `fin-wait-{1,2}`, `time-wait`, `close-wait`, `last-ack`, `closing`|

|Options|Description|
|:------|:----------|
|`synchronized`|`established`, `syn-recv`, `fin-wait-{1,2}`, `time-wait`, `close-wait`, `last-ack`, `closing`|

|Options|Description|
|:------|:----------|
|`bucket`|`syn-recv`, `time-wait`|

|Options|Description|
|:------|:----------|
|`big`|`established`, `syn-sent`, `fin-wait-{1,2}`, `closed`, `close-wait`, `last-ack`, `listening`, `closing`|

----

## RESULTATS

|Nom|Description|
|:------|:----------|
|`Netid`|Type de socket et de protocol utilisé (par exemple, udp, tcp, etc.). Cela peut aussi inclure des indications sur le type de socket comme '`u`' pour UDP ou '`t`' pour TCP.|
|`State`|L'état actuel du socket. Pour UDP, l'état est souvent `UNCONN` (non connecté), car UDP est un protocole sans connexion. Pour TCP, vous pourriez voir des états comme `LISTEN` (l'interface écoute pour les connexions entrantes), `ESTABLISHED` (la connexion a été établie), entre autres.|
|`Recv-Q`|La file d'attente de réception. Cela indique le nombre d'octets non lus par l'application locale. Pour UDP, cela signifie les données reçues qui n'ont pas été traitées par l'application. Pour TCP, cela indique les données reçues confirmées mais pas encore récupérées par l'application.|
|`Send-Q`|La file d'attente d'envoi. CEla représente le nombre  d'octets non encore transmis par le réseau ou confirmés par le destinataire.|
|`Local Address:Port`|L'adresse IP locale et le port utilisés par le socket. Une adresse IP de "`0.0.0.0`" signifie que le socket est lié à toutes les adresses IP disponibles pour écouter les connexions entrantes. "`::`" fait référence à la même chose en IPv6.|
|`Peer Address:Port`|L'adresse IP distante et le port associés au socket. Pour les sockets en état d'écoute (`LISTEN`), c'est souvent `0.0.0.0:*` ou `[::]:*`, indiquant qu'ils peuvent accepter des connexions de n'importe quelle adresse IP distante.|
|`Process`|Ce champ indiquerait l'identifiant du processus (PID) et le nom du processus qui a crée le socket. Il n'est pas visible dans la sortie affichée, ce qui peut être dû au fait que l'option `-p` (qui montre le PID et le nom du processus) n'est pas utilisée, ou parce que la capture d'écran ne montre pas cette partie.|



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
|`/usr/bin/ss`|Chemin du binaire|

----

## MAN

- [man](https://man7.org/linux/man-pages/man8/ss.8.html)

C'est possible d'avoir la page `man` avec la commande : 

<span class="code_language">Shell</span>

```shell
man ss
```

ou

<span class="code_language">Shell</span>

```shell
ss --help
```

----

## EXEMPLES

### Afficher tous les sockets TCP

<span class="code_language">Shell</span>

```shell
ss -a -t
```

----

### Afficher tous les sockets TCP avec les contextes de sécurité SELinux des processus 

<span class="code_language">Shell</span>

```shell
ss -t -a -Z
```

----

### Afficher tous les sockets UDP 

<span class="code_language">Shell</span>

```shell
ss -u -a
```

----

### Affiche toutes les connections SSH établies 

<span class="code_language">Shell</span>

```shell
ss -o state established '( dport = :ssh or sport = :ssh )'
```

----

### Trouve tous les processus local connectés au server X

<span class="code_language">Shell</span>

```shell
ss -x src /tmp/.X11-unix/*
```

----

### Répertoriez tous les sockets TCP dans l'état FIN-WAIT-1 pour notre Apache vers le réseau 193.233.7/24 et examinez leurs temporisateurs

<span class="code_language">Shell</span>

```shell
ss -o state fin-wait-1 '( sport = :http or sport = :https )' dst 193.233.7/24
```

----

### Répertoriez les sockets dans tous les états à partir de toutes les tables de sockets, à l'exception de TCP

<span class="code_language">Shell</span>

```shell
ss -a -A 'all,!tcp'
```

----

### Lister les ports tcp en écoute sans résolution de noms

<span class="code_language">Shell</span>

```shell
ss -lnt
```

----

### Afficher les statistiques récapitulatives

<span class="code_language">Shell</span>

```shell
ss -s
```

----

### Affichage des connexions IPv4 et IPv6

<span class="code_language">Shell</span>

```shell
ss -4

ss -6
```

----

### Filtrer les connexions par numéro de port

<span class="code_language">Shell</span>

```shell
ss -at '( dport = :22 or sport = :22 )'
# ou
ss -at '( dport = :ssh or sport = :ssh )'
# ou 
ss dst :5228
```

----

### Filtrer par IP destination

<span class="code_language">Shell</span>

```shell
ss -a dst 172.20.10.3
```

----

### Filtrer par IP source

<span class="code_language">Shell</span>

```shell
ss -a src 172.20.10.3
```

----

### Filtrer par état

<span class="code_language">Shell</span>

```shell
ss -a state established
```

----

### Afficher toutes les connections SMTP établies

<span class="code_language">Shell</span>

```shell
ss -o state established '( dport = :smtp or sport = :smtp )'
```

----

### Afficher toutes les connections HTTP établies

<span class="code_language">Shell</span>

```shell
ss -o state established '( dport = :http or sport = :http )'
```

----

### Afficher les connections distantes (123.1.2.100) a un serveur HTTP en local

<span class="code_language">Shell</span>

```shell
ss dst 123.1.2.100:http
```

----

### Comment faire pour comparer un port local et un port distant?

<span class="code_language">Shell</span>

```shell
###################################################################################
### Do not forget to escape special characters when typing them in command line ###
###################################################################################
 
ss  sport = :http
ss  dport = :http
ss  dport \> :1024
ss  sport \> :1024
ss sport \< :32000
ss  sport eq :22
ss  dport != :22
ss  state connected sport = :http
ss \( sport = :http or sport = :https \)
ss -o state fin-wait-1 \( sport = :http or sport = :https \) dst 192.168.1/24
```

----