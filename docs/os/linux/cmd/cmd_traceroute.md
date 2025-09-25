---
title: traceroute
description: L'utilitaire traceroute affiche l'itinéraire emprunté par les paquets IP pour atteindre un hôte réseau (ou Internet) spécifié.
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - traceroute
tags: [beta,os,commandes,linux,traceroute,network,reseau]
---

----

## SYNTAXE

<span class="code_language">Shell</span>

```shell
traceroute [-46dFITUnreAV] [-f first_ttl] [-g gate,...] [-i device] [-m max_ttl] [-p port] [-s src_addr] [-q nqueries] [-N squeries] [-t tos] [-l flow_label] [-w waittimes] [-z sendwait] [-UL] [-D] [-P proto] [--sport=port] [-M method] [-O mod_options] [--mtu] [--back] host [packet_len]
traceroute6 [options]
tcptraceroute [options]
lft [options]
```

----

## INFORMATION

L'utilitaire `traceroute` affiche l'itinéraire emprunté par les paquets IP pour atteindre un hôte réseau (ou Internet) spécifié. `traceroute` affiche l'adresse IP et le nom d'hôte (si possible) des machines situées le long de l'itinéraire emprunté par les paquets.

`traceroute` suit le chemin emprunté par les paquets provenant d'un réseau IP pour atteindre un hôte donné. Il utilise le champ `TTL` (Time to Live) du protocole IP et tente d'obtenir une réponse ICMP `TIME_EXCEEDED` de chaque passerelle située sur le chemin vers l'hôte.

`traceroute6` est équivalent à `traceroute -6`

`tcptraceroute` est équivalent à `traceroute -T`

`lft` , le `traceroute` de couche "`4`", effectue un `traceroute` TCP, comme `traceroute -T` , mais tente d'assurer la compatibilité avec l'implémentation d'origine, également appelée "`lft`".

Le seul paramètre requis est le nom ou l'adresse IP de l'hôte de destination. Le paramètre facultatif `packet_length` correspond à la taille totale du paquet de sondage (par défaut <u>60 octets pour IPv4</u> et <u>80 pour IPv6</u>). La taille spécifiée peut être ignorée dans certaines situations ou augmentée jusqu'à une valeur minimale.

Ce programme tente de tracer l'itinéraire qu'un paquet IP suivrait pour atteindre un hôte Internet en lançant des paquets de sondage avec un TTL (time to live) faible, puis en écoutant la réponse ICMP "**time exceeded**" (délai dépassé) provenant d'une passerelle. Nous commençons nos sondes avec un `ttl` de `1` et l'augmentons d'un jusqu'à obtenir un ICMP "**port unreachable**" (ou réinitialisation TCP), ce qui signifie que nous avons atteint l'"hôte" ou atteint un maximum (qui est par défaut de 30 sauts). Trois sondes (par défaut) sont envoyées à chaque réglage de `ttl` et une ligne est imprimée indiquant le `ttl`, l'adresse de la passerelle et le temps aller-retour de chaque sonde. L'adresse peut être suivie d'informations supplémentaires sur demande. Si les réponses aux sondes proviennent de différentes passerelles, l'adresse de chaque système répondant sera imprimée. S'il n'y a pas de réponse dans un certain délai, un "`*`" (astérisque) est imprimé pour cette sonde.

Après le temps de trajet, certaines annotations supplémentaires peuvent être imprimées : `!H`, `!N` ou `!P` (hôte, réseau ou protocole inaccessible), `!S` (échec de la route source), `!F` (fragmentation nécessaire), `!X` (communication interdite administrativement), `!V` (violation de priorité de l'hôte), `!C` (priorité coupée en vigueur) ou `!<num>` (code ICMP inaccessible `<num>`). Si presque toutes les sondes aboutissent à une sorte d'inaccessibilité, `traceroute` abandonnera et se fermera.

Nous ne voulons pas que l'hôte de destination traite les paquets de sondage UDP, c'est pourquoi le port de destination est défini sur une valeur improbable (vous pouvez la modifier à l'aide du drapeau `-p`). Ce problème ne se pose pas pour le `traceroute` ICMP ou TCP (pour TCP, nous utilisons la technique semi-ouverte, qui empêche nos sondes d'être vues par les applications sur l'hôte de destination).

Dans l'environnement réseau moderne, les méthodes traditionnelles de `traceroute` ne sont pas toujours applicables, en raison de l'utilisation généralisée des pare-feu. Ces pare-feu filtrent les ports UDP "improbables", voire les échos ICMP. Pour résoudre ce problème, certaines méthodes de `traceroute` supplémentaires sont mises en œuvre (y compris tcp), voir la LISTE DES MÉTHODES DISPONIBLES ci-dessous. Ces méthodes tentent d'utiliser un protocole particulier et un port source/destination afin de contourner les pare-feu (qui les voient comme le début d'une session réseau de type autorisé).

----

## PACKAGE

<span class="code_language">Shell</span>

```shell
apt install traceroute
```

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`--help`|Affiche les informations d'aide et quitter.|
|`-4`, `-6`|Forcer explicitement le `traceroute` IPv4 ou IPv6. Par défaut, le programme essaiera de résoudre le nom donné et choisira automatiquement le protocole approprié. Si la résolution d'un nom d'hôte renvoie à la fois des adresses IPv4 et IPv6, `traceroute` utilisera IPv4.|
|`-I`, `--icmp`|Utiliser ICMP `ECHO` pour les sondes|
|`-T`, `--tcp`|Utiliser TCP `SYN` pour les sondes|
|`-d`, `--debug`|Activer le débogage au niveau des sockets (lorsque le noyau Linux le prend en charge)|
|`-F`, `--dont-fragment`|Ne fragmentez pas les paquets de sondage. (Pour IPv4, cela active également le bit `DF`, qui indique aux routeurs intermédiaires de ne pas fragmenter à distance non plus). En modifiant la taille du paquet de sondage à l'aide du paramètre de ligne de commande `packet_len`, vous pouvez obtenir manuellement des informations sur la MTU de chaque saut de réseau. L'option `--mtu` (voir ci-dessous) tente de le faire automatiquement.<br/>Notez que les fonctionnalités non fragmentées (comme `-F` ou `--mtu`) ne fonctionnent correctement que depuis le noyau Linux 2.6.22. Avant cette version, IPv6 était toujours fragmenté, IPv4 ne pouvait utiliser que le `mtu` final découvert (à partir du cache de `route`), qui pouvait être inférieur au `mtu` réel d'un périphérique.|
|`-f first_ttl`, `--first=first_ttl`|Spécifie avec quel TTL démarrer. La valeur par défaut est `1`.|
|`-g gateway`, `--gateway=gateway`|Indique à `traceroute` d'ajouter une option de routage source IP au paquet sortant qui indique au réseau d'acheminer le paquet via la passerelle spécifiée (la plupart des routeurs ont désactivé le routage source pour des raisons de sécurité). En général, plusieurs passerelles sont autorisées (séparées par des virgules). Pour IPv6, la forme `num,addr,addr...` est autorisée, où `num` est un type d'en-tête de route (la valeur par défaut est le type `2`). Notez que l'en-tête de route de type `0` est désormais obsolète (rfc5095).|
|`-i interface`, `--interface=interface`|Spécifie l'interface par laquelle `traceroute` doit envoyer les paquets. Par défaut, l'interface est sélectionnée en fonction de la table de routage.|
|`-m max_ttl`, `--max-hops=max_ttl`|Spécifie le nombre maximal de sauts (valeur maximale de durée de vie) que `traceroute` va tester. La valeur par défaut est `30`.|
|`-N squeries`, `--sim-queries=squeries`|Spécifie le nombre de paquets de sondes envoyés simultanément. L'envoi simultané de plusieurs sondes peut accélérer considérablement le `traceroute`. La valeur par défaut est `16`.<br/>Notez que certains routeurs et hôtes peuvent utiliser la limitation du débit ICMP. Dans ce cas, spécifier un nombre trop élevé peut entraîner la perte de certaines réponses.|
|`-n`|N'essayez pas d'associer les adresses IP aux noms d'hôtes lors de leur affichage.|
|`-p port`, `--port=port`|Pour le traçage UDP, spécifie le port de destination que `traceroute` utilisera (le numéro du port de destination sera incrémenté à chaque sonde).<br/>Pour le traçage ICMP, spécifie la valeur initiale de la séquence ICMP (également incrémentée à chaque sonde).<br/>Pour TCP et autres, spécifie simplement le port de destination (constant) auquel se connecter. Lorsque vous utilisez le wrapper `tcptraceroute`, `-p` spécifie le port source.|
|`-t tos`, `--tos=tos`|Pour IPv4, définissez le type de service (`TOS`) et la valeur de priorité. Les valeurs utiles sont `16` (faible délai) et `8` (débit élevé).<br/>Notez que pour utiliser certaines valeurs de priorité `TOS`, vous devez être super-utilisateur. Pour IPv6, définissez la valeur de contrôle du trafic.|
|`-l flow_label`, `--flowlabel=flow_label`|Utiliser l'étiquette de flux spécifiée pour les paquets IPv6.|
|`-w max[,here,near]`, `--wait=max[,here,near]`|Détermine le temps d'attente d'une réponse à une sonde. Il existe trois valeurs flottantes (en général) séparées par une virgule (ou une barre oblique). `Max` spécifie le temps d'attente maximal (en secondes, par défaut `5,0`) dans tous les cas. L'implémentation traditionnelle de `traceroute` attendait toujours le nombre maximal de secondes pour toute sonde. Mais si nous avons déjà reçu des réponses provenant du même saut, ou même d'un saut suivant, nous pouvons utiliser le temps aller-retour d'une telle réponse comme indication pour déterminer le temps d'attente raisonnable réel.<br/>L'option `here` (valeur par défaut `3,0`) spécifie un facteur permettant de multiplier le temps aller-retour d'une réponse déjà reçue provenant du même saut. La valeur obtenue est utilisée comme délai d'attente pour la sonde, à la place (mais sans dépasser) de `max`. L'option `near` (valeur par défaut `10,0`) spécifie un facteur similaire pour une réponse provenant d'un saut suivant. (Le temps du premier résultat trouvé est utilisé dans les deux cas).<br/>Tout d'abord, nous recherchons le même saut (de la sonde qui sera imprimée en premier à partir de maintenant). Si rien n'est trouvé, nous recherchons un saut suivant. Si rien n'est trouvé, nous utilisons `max`. Si `here` et/ou `near` ont des valeurs nulles, le calcul correspondant est ignoré.<br/>`Here` et `near` sont toujours définis sur zéro si seul `max` est spécifié (pour des raisons de compatibilité avec les versions précédentes).|
|`-q nqueries`, `--queries=nqueries`|Définit le nombre de paquets de sonde par saut. La valeur par défaut est `3`.|
|`-r`|Contournez les tables de routage normales et envoyez directement à un hôte sur un réseau connecté. Si l'hôte ne se trouve pas sur un réseau directement connecté, une erreur est renvoyée. Cette option peut être utilisée pour envoyer une requête `ping` à un hôte local via une interface qui ne dispose d'aucune route.|
|`-s source_addr`, `--source=source_addr`|Choisit une autre adresse source. Notez que vous devez sélectionner l'adresse de l'une des interfaces. Par défaut, l'adresse de l'interface sortante est utilisée.|
|`-z sendwait`, `--sendwait=sendwait`|Intervalle minimal entre les sondes (valeur par défaut : `0`). Si la valeur est supérieure à `10`, elle correspond à un nombre en millisecondes, sinon il s'agit d'un nombre en secondes (les valeurs à virgule flottante sont également autorisées). Utile lorsque certains routeurs utilisent une limitation de débit pour les messages ICMP.|
|`-e`, `--extensions`|Afficher les extensions ICMP (rfc4884). La forme générale est CLASS/TYPE : suivi d'un vidage hexadécimal. Le MPLS (rfc4950) est affiché sous forme analysée, sous la forme : `MPLS:L=label,E=exp_use,S=stack_bottom,T=TTL` (plusieurs objets séparés par `/` ). Les informations d'interface (rfc5837) sont également affichées sous forme analysée, sous la forme suivante : \{`INC`\|`SUB`\|`OUT`\|`NXT`\} : `index`, `IP_addr`, "`name`", `mtu=MTU` (les quatre champs peuvent être absents).|
|`-A`, `--as-path-lookups`|Effectuer des recherches de chemin `AS` dans les registres de routage et imprimer les résultats directement après les adresses correspondantes.|
|`-V`, `--version`|Afficher la version et quitter.|

### There are additional options intended for advanced usage (such as alternate trace methods etc.)

|Options|Description|
|:------|:----------|
|`--sport=port`|Chooses the source port to use. Implies -N 1 -w 5 .  Normally source ports (if applicable) are chosen by  the  system.|
|`--fwmark=mark`|Set the firewall mark for outgoing packets (since the Linux kernel 2.6.25).|
|`-M method, --module=name`|Use  specified method for traceroute operations. Default traditional udp method has name default, icmp (-I) and tcp (-T) have names icmp and tcp respectively. Method-specific options can be passed by -O .  Most methods have their simple shortcuts, (-I means -M icmp, etc).|
|`-O option, --options=options`|Specifies some method-specific option. Several options are separated by comma (or use several -O on cmdline).  Each method may have its own specific options, or many not have them at all.  To print information about  available  options, use -O help.|
|`-U, --udp`|Use  UDP  to  particular destination port for tracerouting (instead of increasing the port per each probe). Default port is 53 (dns).|
|`-UL`|Use UDPLITE for tracerouting (default port is 53).|
|`-D, --dccp`|Use DCCP Requests for probes.|
|`-P protocol, --protocol=protocol`|Use raw packet of specified protocol for tracerouting. Default protocol is 253 (rfc3692).|
|`--mtu`|Discover MTU along the path being traced. Implies -F -N 1.  New mtu is printed once in a form of F=NUM at the first probe of a hop which requires such mtu to be reached. (Actually, the correspond "frag needed" icmp message normally is sent by the previous hop).<br/>Note, that some routers might cache once the seen information on a fragmentation. Thus you can  receive  the  final mtu  from a closer hop.  Try to specify an unusual tos by -t , this can help for one attempt (then it can be cached there as well). See -F option for more info.|
|`--back`|Print the number of backward hops when it seems different with the forward direction. This number is guessed in assumption that remote hops send reply packets with initial ttl set to either 64, or 128 or 255 (which seems a common practice). It is printed as a negate value in a form of '-NUM' .|

### LIST OF AVAILABLE METHODS

In general, a particular traceroute method may have to be chosen by -M name, but most of the  methods  have  their  simple
cmdline switches (you can see them after the method name, if present).

|Name|Description|
|:------|:----------|
|`default`|The traditional, ancient method of tracerouting. Used by default. Probe  packets  are  udp datagrams with so-called "unlikely" destination ports.  The "unlikely" port of the first probe is 33434, then for each next probe it is incremented by one. Since the ports are expected to be unused, the destination  host normally  returns  "icmp  unreach port" as a final response.  (Nobody knows what happens when some application listens for such ports, though). This method is allowed for unprivileged users.|
|`icmp       -I`|Most usual method for now, which uses icmp echo packets for probes. If you can ping(8) the destination host, icmp tracerouting is applicable as well. This method may be allowed for unprivileged users since the kernel 3.0 (IPv4, for IPv6 since  3.11),  which  supports  new dgram  icmp  (or "ping") sockets. To allow such sockets, sysadmin should provide net/ipv4/ping_group_range sysctl range to match any group of the user.<br/>Options<br/>- `raw` : Use only raw sockets (the traditional way). This way is tried first by default (for compatibility reasons), then new dgram icmp sockets as fallback.<br/>- `dgram`: Use only dgram icmp sockets.|
|`tcp        -T`| Well-known modern method, intended to bypass firewalls. Uses the constant destination port (default is 80, http). If some filters are present in the network path, then most probably any "unlikely" udp ports (as for  default  method)  or even  icmp  echoes (as for icmp) are filtered, and whole tracerouting will just stop at such a firewall.  To bypass a network filter, we have to use only allowed protocol/port combinations. If we trace for  some,  say,  mailserver,  then  more likely -T -p 25 can reach it, even when -I can not.<br/>This  method  uses  well-known  "half-open technique", which prevents applications on the destination host from seeing our probes at all.  Normally, a tcp syn is sent. For non-listened ports we receive tcp reset, and all is done. For active listening ports we receive tcp syn+ack, but answer by tcp reset (instead of expected tcp ack), this way the remote  tcp  session is dropped even without the application ever taking notice.<br/>There is a couple of options for tcp method:<br/>- `syn,ack,fin,rst,psh,urg,ece,cwr`: Sets specified tcp flags for probe packet, in any combination.<br/>- `flags=num`: Sets the flags field in the tcp header exactly to num.<br/>- `ecn`: Send syn packet with tcp flags ECE and CWR (for Explicit Congestion Notification, rfc3168).<br/>- `sack,timestamps,window_scaling`: Use the corresponding tcp header option in the outgoing probe packet.<br/>- `sysctl`: Use  current  sysctl (/proc/sys/net/*) setting for the tcp header options above and ecn.  Always set by default, if nothing else specified.<br/>- `fastopen`: Use fastopen tcp option (when syn), for initial cookie negotiation only.<br/>- `mss=[num]`: Use value of num (or unchanged) for maxseg tcp header option (when syn), and discover its clamping along  the  path being  traced.   New  changed  mss  is printed once in a form of M=NUM at the first probe on which it was detected. Note, some routers may return too short original fragment in the time exceeded message, making the  check  impossible. Besides  that the responses may come in a different order.  All this can lead to a later place of the report (using -N 1 can help for the order).<br/>- `info`: Print tcp flags and supported options of final tcp replies when the target host is reached.   Allows  to  determine whether  an application listens the port and other useful things.  Supported tcp options are all that can be set by -T -O, ie. mss, sack, timestamps, window_scaling and fastopen, with the similar output format (a value for mss and just presence for others). Default options is syn,sysctl.|
|`tcpconn`|An initial implementation of tcp method, simple using connect(2) call, which does full tcp  session  opening.  Not  recommended for normal use, because a destination application is always affected (and can be confused).|
|`udp        -U`|Use udp datagram with constant destination port (default 53, dns).<br/>Intended to bypass firewall as well.<br/>Note, that unlike in tcp method, the correspond application on the destination host always receive our probes (with random data), and most can easily be confused by them. Most cases it will not respond to our packets though, so we will never see the final hop in the trace. (Fortunately, it seems that at least dns servers replies with something angry). This method is allowed for unprivileged users.|
|`udplite    -UL`|Use udplite datagram for probes (with constant destination port, default 53). This method is allowed for unprivileged users.<br/>Options:<br/>- `coverage=num`: Set udplite send coverage to num.|
|`dccp    -D`|Use DCCP Request packets for probes (rfc4340). This method uses the same "half-open technique" as used for TCP. The default destination port is 33434.<br/>Options:<br/>- `service=num`: Set DCCP service code to num (default is 1885957735).|
|`raw        -P proto`|Send raw packet of protocol proto. No protocol-specific headers are used, just IP header only. Implies -N 1 -w 5.<br/>Options:<br/>- `protocol=proto`: Use IP protocol proto (default 253).|

### NOTES
To  speed  up work, normally several probes are sent simultaneously.  On the other hand, it creates a "storm of packages",
especially in the reply direction. Routers can throttle the rate of icmp responses, and some of replies can  be  lost.  To
avoid  this,  decrease the number of simultaneous probes, or even set it to 1 (like in initial traceroute implementation),
i.e.  -N 1

The final (target) host can drop some of the simultaneous probes, and might even answer only the latest ones. It can  lead
to extra "looks like expired" hops near the final hop. We use a smart algorithm to auto-detect such a situation, but if it
cannot help in your case, just use -N 1 too.

For even greater stability you can slow down the program's work by -z option, for example use -z 0.5 for half-second pause
between probes.

To  avoid an extra waiting, we use adaptive algorithm for timeouts (see -w option for more info). It can lead to premature
expiry (especially when response times differ at times) and printing "*" instead of a time. In such a  case,  switch  this
algorithm off, by specifying -w with the desired timeout only (for example, -w 5).

If some hops report nothing for every method, the last chance to obtain something is to use ping -R command (IPv4, and for
nearest 8 hops only).

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
|`/usr/bin/traceroute`|Fichier binaire|

----

## MAN

- [man](https://manpages.ubuntu.com/manpages/noble/fr/man1/)

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

### Trace la route vers un domaine

<span class="code_language">Shell</span>

```shell
traceroute google.fr
```

<span class="code_language">Sortie</span>

```text
traceroute to google.fr (142.250.178.131), 30 hops max, 60 byte packets
 1  172.22.224.1 (172.22.224.1)  0.367 ms  0.193 ms  0.186 ms
 2  GEN8 (192.168.1.1)  1.072 ms  0.659 ms  0.785 ms
 3  * * *
 4  158.254.69.86.rev.sfr.net (86.69.254.158)  6.763 ms  6.759 ms  6.753 ms
 5  par21s22-in-f3.1e100.net (142.250.178.131)  6.738 ms  6.735 ms  6.730 ms
```

----

### Trace la route vers une IP

<span class="code_language">Shell</span>

```shell
traceroute 
```

<span class="code_language">Sortie</span>

```text

```

----


----

## MESSAGES D'ERREURS

### Request timed out (délai d'attente de la demande)

Si vous voyez cette erreur à la fin de la commande `traceroute`, cela signifie qu'un pare-feu ou un dispositif de sécurité pourrait bloquer votre demande, ou qu'il y avait un problème dans le chemin de retour. Si vous voyez cela au début, ce n'est rien de grave car c'est un saut courant.

### Destination net unreachable (destination réseau inaccessible)

Cela signifie que les paquets de données ont cessé de circuler à l'intérieur du réseau. La plupart du temps, cela est dû à un problème avec le routeur ou au fait que le site Web ou l'adresse IP que vous essayez d'atteindre est hors service.

### Dans les colonnes RTT

Cela signifie que le routeur n'a pas répondu à la demande dans le délai maximum alloué de deux secondes. Cela pourrait également signifier que le routeur dans le saut n'était pas configuré pour fournir une réponse à une demande de `traceroute`. Cependant, cela ne signifie pas nécessairement que le paquet a été abandonné. Pour vérifier s'il y a eu une perte de paquets, vous pouvez faire un `ping` sur l'adresse IP du routeur où vous voyez l'astérisque.


Sources : 
- https://serverspace.io/fr/support/help/traceroute-to-trace-network-in-linux-instruction/