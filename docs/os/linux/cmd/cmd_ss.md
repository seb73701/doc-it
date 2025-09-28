---
title: ss
description: Remplace 'netstat' pour afficher des statistiques sur les sockets réseau.
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

## INFORMATION

`ss` (_Socket Statistics_) est un outil moderne qui remplace `netstat`, offrant plus d'informations et étant plus rapide. Il est utilisé pour afficher des informations détaillées sur les différents sockets.

----

## PACKAGE

<span class="code_language">Shell</span>

```shell
apt install iproute2
```

----

## MAN

- [Page man (interne)](man/cmd_ss_man)

----

## EXEMPLES

### Afficher tous les sockets TCP

<details>

<span class="code_language">Shell</span>

```shell
ss -a -t
```

</details>

----

### Afficher tous les sockets TCP avec les contextes de sécurité SELinux des processus 

<details>

<span class="code_language">Shell</span>

```shell
ss -t -a -Z
```

</details>

----

### Afficher tous les sockets UDP 

<details>

<span class="code_language">Shell</span>

```shell
ss -u -a
```

</details>

----

### Afficher toutes les connections SSH établies 

<details>

<span class="code_language">Shell</span>

```shell
ss -o state established '( dport = :ssh or sport = :ssh )'
```

</details>

----

### Trouver tous les processus local connectés au server X

<details>

<span class="code_language">Shell</span>

```shell
ss -x src /tmp/.X11-unix/*
```

</details>

----

### Répertorier tous les sockets TCP dans l'état `FIN-WAIT-1` pour notre Apache vers le réseau 193.233.7/24 et examinez leurs temporisateurs

<details>

<span class="code_language">Shell</span>

```shell
ss -o state fin-wait-1 '( sport = :http or sport = :https )' dst 193.233.7/24
```

</details>

----

### Répertorier les sockets dans tous les états à partir de toutes les tables de sockets, à l'exception de TCP

<details>

<span class="code_language">Shell</span>

```shell
ss -a -A 'all,!tcp'
```

</details>

----

### Lister les ports tcp en écoute sans résolution de noms

<details>

<span class="code_language">Shell</span>

```shell
ss -lnt
```

</details>

----

### Afficher les statistiques récapitulatives

<details>

<span class="code_language">Shell</span>

```shell
ss -s
```

</details>

----

### Afficher les connexions IPv4 et IPv6

<details>

<span class="code_language">Shell</span>

```shell
ss -4

ss -6
```

</details>

----

### Filtrer les connexions par numéro de port

<details>

<span class="code_language">Shell</span>

```shell
ss -at '( dport = :22 or sport = :22 )'
# ou
ss -at '( dport = :ssh or sport = :ssh )'
# ou 
ss dst :5228
```

</details>

----

### Filtrer par IP destination

<details>

<span class="code_language">Shell</span>

```shell
ss -a dst 172.20.10.3
```

</details>

----

### Filtrer par IP source

<details>

<span class="code_language">Shell</span>

```shell
ss -a src 172.20.10.3
```

</details>

----

### Filtrer par état

<details>

<span class="code_language">Shell</span>

```shell
ss -a state established
```

</details>

----

### Afficher toutes les connections SMTP établies

<details>

<span class="code_language">Shell</span>

```shell
ss -o state established '( dport = :smtp or sport = :smtp )'
```

</details>

----

### Afficher toutes les connections HTTP établies

<details>

<span class="code_language">Shell</span>

```shell
ss -o state established '( dport = :http or sport = :http )'
```

</details>

----

### Afficher les connections distantes (123.1.2.100) a un serveur HTTP en local

<details>

<span class="code_language">Shell</span>

```shell
ss dst 123.1.2.100:http
```

</details>

----

### Comment faire pour comparer un port local et un port distant?

<details>

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

</details>
