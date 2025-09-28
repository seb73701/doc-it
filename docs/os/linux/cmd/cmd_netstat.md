---
title: netstat
description: Affiche les connexions réseau, les tables de routage, les statistiques des interfaces, les connexions masquées, les messages netlink, et les membres multicast.
hide_table_of_contents: false
hide_title: false
keywords:
 - os
 - commandes
 - linux
 - netstat
tags: [beta,os,commandes,linux,netstat,network,reseau]
---

----

## INFORMATION

`netstat` - Affiche les connexions réseau, les tables de routage, les statistiques des interfaces, les connexions masquées, les messages netlink, et les membres multicast.

`netstat` (Network Statistics) est un outil de ligne de commande qui affiche les connexions réseau, les tables de routage, les statistiques d'interface, les connexions masquées, et les membres multicast. Bien qu'il soit moins utilisé de nos jours, remplacé en grande partie par `ss`, ses principales

----

## PACKAGE

<span class="code_language">Shell</span>

```shell
apt install net-tools
```

----

## MAN

- [Page man (interne)](man/cmd_netstat_man)

----

## EXEMPLES

### Affiche toutes les connexions et les ports d'écoute

<details>

<span class="code_language">Shell</span>

```shell
netstat -a
```

</details>

----

### Montre les connexions TCP

<details>

<span class="code_language">Shell</span>

```shell
netstat -t
```

</details>

----

### Liste les connexions UDP

<details>

<span class="code_language">Shell</span>

```shell
netstat -u
```

</details>

----

### Affiche uniquement les sockets en écoute

<details>

<span class="code_language">Shell</span>

```shell
netstat -l
```

</details>

----

### Affiche la table de routage

<details>

<span class="code_language">Shell</span>

```shell
netstat -r
```

</details>

----

### Présente les statistiques par protocole

<details>

<span class="code_language">Shell</span>

```shell
netstat -s
```

<span class="code_language">Sortie</span>

```text
Ip:
    Forwarding: 2
    452326 total packets received
    0 forwarded
    0 incoming packets discarded
    450133 incoming packets delivered
    450862 requests sent out
Icmp:
    0 ICMP messages received
    0 input ICMP message failed
    ICMP input histogram:
    0 ICMP messages sent
    0 ICMP messages failed
    ICMP output histogram:
Tcp:
    825 active connection openings
    210 passive connection openings
    0 failed connection attempts
    2 connection resets received
    6 connections established
    446372 segments received
    447787 segments sent out
    35 segments retransmitted
    0 bad segments received
    769 resets sent
Udp:
    3244 packets received
    0 packets to unknown port received
    0 packet receive errors
    3244 packets sent
    0 receive buffer errors
    0 send buffer errors
    IgnoredMulti: 517
UdpLite:
TcpExt:
    227 TCP sockets finished time wait in fast timer
    24530 delayed acks sent
    9 delayed acks further delayed because of locked socket
    Quick ack mode was activated 1 times
    197473 packet headers predicted
    11846 acknowledgments not containing data payload received
    249728 predicted acknowledgments
    TCPSackRecovery: 1
    TCPDSACKUndo: 1
    TCPLostRetransmit: 21
    1 fast retransmits
    TCPTimeouts: 31
    TCPLossProbes: 3
    TCPBacklogCoalesce: 19
    TCPDSACKOldSent: 1
    TCPDSACKRecv: 1
    383 connections reset due to unexpected data
    4 connections reset due to early user close
    TCPSackShiftFallback: 1
    TCPRcvCoalesce: 2173
    TCPOFOQueue: 1
    TCPSynRetrans: 13
    TCPOrigDataSent: 282484
    TCPHystartTrainDetect: 4
    TCPHystartTrainCwnd: 72
    TCPKeepAlive: 8
    TCPDelivered: 283274
    TcpTimeoutRehash: 31
    TCPDSACKRecvSegs: 1
IpExt:
    InBcastPkts: 517
    InOctets: 122770977
    OutOctets: 114833197
    InBcastOctets: 42580
    InNoECTPkts: 455578
Sctp:
    0 Current Associations
    0 Active Associations
    0 Passive Associations
    0 Number of Aborteds 
    0 Number of Graceful Terminations
    0 Number of Out of Blue packets
    0 Number of Packets with invalid Checksum
    0 Number of control chunks sent
    0 Number of ordered chunks sent
    0 Number of Unordered chunks sent
    0 Number of control chunks received
    0 Number of ordered chunks received
    0 Number of Unordered chunks received
    0 Number of messages fragmented
    0 Number of messages reassembled 
    0 Number of SCTP packets sent
    0 Number of SCTP packets received
```

</details>

----

### Montre le programme associé à chaque socket

<details>

<span class="code_language">Shell</span>

```shell
netstat -p
```

</details>

----

### Comment lister les adresses IP (sans nom d’hôte et résolution DNS)

<details>

<span class="code_language">Shell</span>

```shell
netstat -an
```

</details>

----

### Comment lister uniquement les ports UNIX d’écoute

<details>

<span class="code_language">Shell</span>

```shell
netstat -lx
```

</details>

----

### Comment trouver le port ou connexion d’un programme

<details>

<span class="code_language">Shell</span>

```shell
netstat -anp | grep "sshd"
```

</details>

----

### Afficher les adresses numériques des hôtes

<details>

<span class="code_language">Shell</span>

```shell
netstat --numeric-hosts
```

</details>

----

### Afficher les numéros de port numériques

<details>

<span class="code_language">Shell</span>

```shell
netstat --numeric-ports
```

</details>

----

### Afficher les identifiants numériques des utilisateurs

<details>

<span class="code_language">Shell</span>

```shell
netstat --numeric-users
```

</details>
