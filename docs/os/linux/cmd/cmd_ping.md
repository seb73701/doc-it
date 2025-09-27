---
title: ping
description: Utilisé pour vérifier la connectivité avec une machine distante en envoyant des paquets ICMP.
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - ping
tags: [beta,os,commandes,linux,ping,network,reseau]
---

----

## SYNTAXE

<span class="code_language">Shell</span>

```shell
ping [-aAbBdCDfhHLnOqrRUvV346] [-c nombre] [-e identifiant] [-F flowlabel] [-i intervalle] [-I interface] [-l préchargement] [-m marque] [-M pmtudisc_option] [-N nodeinfo_option] [-w échéance] [-W délai] [-p motif] [-Q tos] [-s taille_paquet] [-S tampon_émission] [-t ttl] [-T horodatage option] [saut...] {destination}
```

----

## INFORMATION

`ping`(_Packet INternet Groper_) – Envoyer un `ECHO_REQUEST` ICMP aux hôtes du réseau.

`ping` utilise le datagramme `ECHO_REQUEST` obligatoire du protocole **ICMP** (_Internet Control Message Protocol_) pour obtenir une réponse `ECHO_RESPONSE` ICMP d'un hôte ou d'une passerelle. Les datagrammes `ECHO_REQUEST` ("pings") comportent des en-têtes IP et ICMP, suivis d'une `struct timeval` et d'un nombre arbitraire d'octets de bourrage utilisés pour remplir le paquet.

`ping` fonctionne avec IPv4 et IPv6. L'utilisation explicite de l'un des deux peut être forcée en spécifiant `-4` ou `-6`.

`ping` peut également envoyer des requêtes d'information sur les nœuds IPv6 (RFC4620). Les sauts intermédiaires peuvent ne pas être autorisés, car le routage de la source IPv6 est déconseillé (RFC5095).

Par défaut la commande `ping` envoie en continue des requêtes. Pour l'arrêter, il suffit de faire <kbd>CTRL</kbd>+<kbd>C</kbd>.

----

## PACKAGE

<details>

<span class="code_language">Shell</span>

```shell
apt install inetutils-ping
# ou
apt install iputils-ping
```

</details>

----

## VALEUR RENVOYEE

<details>

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|L'exécution de la commande a abouti.|
|`1`|Ping ne reçoit aucun paquet en réponse.|
|`2`|Erreur|

</details>

----

## FICHIERS

<details>

|Chemin|Descriptif|
|:------|:---------|
|`/bin/ping`|Fichier Binaire|

</details>

----

## MAN

- [man](man/cmd_ping_man)

----

## EXEMPLES

### ping un nom de domaine en continu

<details>

<span class="code_language">Shell</span>

```shell
ping www.google.com
```

<span class="code_language">Sortie</span>

```text
PING www.google.com (142.250.201.164) 56(84) bytes of data.
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=1 ttl=249 time=6.15 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=2 ttl=249 time=5.67 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=3 ttl=249 time=6.08 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=4 ttl=249 time=5.88 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=5 ttl=249 time=6.09 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=6 ttl=249 time=6.50 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=7 ttl=249 time=6.66 ms
^C
--- www.google.com ping statistics ---
7 packets transmitted, 7 received, 0% packet loss, time 6010ms
rtt min/avg/max/mdev = 5.672/6.146/6.655/0.314 ms
```

</details>

----

### ping une IP en continu

<details>

<span class="code_language">Shell</span>

```shell
ping 142.250.201.164
```

</details>

----

### ping une IP en continu

<details>

Il suffit de ne pas mettre d'argument avec la commande :

<span class="code_language">Shell</span>

```shell
ping 142.250.201.164
```

</details>

----

### ping une IP et s'arrête après 4 requêtes

<details>

<span class="code_language">Shell</span>

```shell
ping -c4 142.250.201.164
```

<span class="code_language">Sortie</span>

```text
PING www.google.com (142.250.201.164) 56(84) bytes of data.
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=1 ttl=249 time=5.74 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=2 ttl=249 time=6.65 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=3 ttl=249 time=6.77 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=4 ttl=249 time=6.56 ms

--- www.google.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 5.743/6.428/6.766/0.402 ms
```

</details>

----

### ping une IP avec une intervalle de 2 secondes et s'arrête après 4 requêtes

<details>

<span class="code_language">Shell</span>

```shell
ping -i2 -c4 142.250.201.164
```

<span class="code_language">Sortie</span>

```text
PING www.google.com (142.250.201.164) 56(84) bytes of data.
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=1 ttl=249 time=5.74 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=2 ttl=249 time=6.65 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=3 ttl=249 time=6.77 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=4 ttl=249 time=6.56 ms

--- www.google.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 5.743/6.428/6.766/0.402 ms
```

</details>

----

### ping une IP avec horodatage

<details>

<span class="code_language">Shell</span>

```shell
ping -i2 -c4 -D 142.250.201.164
```

<span class="code_language">Sortie</span>

```text
PING 142.250.201.164 (142.250.201.164) 56(84) bytes of data.
[1758744144.592301] 64 bytes from 142.250.201.164: icmp_seq=1 ttl=249 time=6.18 ms
[1758744146.594312] 64 bytes from 142.250.201.164: icmp_seq=2 ttl=249 time=5.80 ms
[1758744148.596411] 64 bytes from 142.250.201.164: icmp_seq=3 ttl=249 time=5.86 ms
[1758744150.599461] 64 bytes from 142.250.201.164: icmp_seq=4 ttl=249 time=6.80 ms

--- 142.250.201.164 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 6007ms
rtt min/avg/max/mdev = 5.798/6.157/6.798/0.397 ms
```

Il est aussi possible d'installer le package `moreutils` qui contient la commande `ts` qui permet d'affiche un horodatage sur chaque ligne.

<span class="code_language">Shell</span>

```shell
apt install moreutils
```

<span class="code_language">Shell</span>

```shell
ping -c 4 www.google.fr | ts
```

<span class="code_language">Sortie</span>

```text
Sep 27 09:40:09 PING www.google.fr (216.58.215.35) 56(84) bytes of data.
Sep 27 09:40:09 64 bytes from par21s17-in-f3.1e100.net (216.58.215.35): icmp_seq=1 ttl=249 time=5.45 ms
Sep 27 09:40:10 64 bytes from par21s17-in-f3.1e100.net (216.58.215.35): icmp_seq=2 ttl=249 time=5.74 ms
Sep 27 09:40:11 64 bytes from par21s17-in-f3.1e100.net (216.58.215.35): icmp_seq=3 ttl=249 time=7.57 ms
Sep 27 09:40:12 64 bytes from par21s17-in-f3.1e100.net (216.58.215.35): icmp_seq=4 ttl=249 time=6.89 ms
Sep 27 09:40:12
Sep 27 09:40:12 --- www.google.fr ping statistics ---
Sep 27 09:40:12 4 packets transmitted, 4 received, 0% packet loss, time 3092ms
Sep 27 09:40:12 rtt min/avg/max/mdev = 5.450/6.411/7.566/0.857 ms
```

</details>

----

### Comment faire un ping IPv4 ou IPv6

<details>

- Ping IPv4 :

<span class="code_language">Shell</span>

```shell
ping -4 -c4 www.google.com
```

<span class="code_language">Sortie</span>

```text
PING www.google.com (142.250.201.164) 56(84) bytes of data.
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=1 ttl=249 time=6.00 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=2 ttl=249 time=5.89 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=3 ttl=249 time=6.60 ms
64 bytes from par21s23-in-f4.1e100.net (142.250.201.164): icmp_seq=4 ttl=249 time=6.84 ms

--- www.google.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 5.891/6.332/6.839/0.398 ms
```

- Ping IPv6 :

<span class="code_language">Shell</span>

```shell
ping -6 -c4 www.google.com
```

</details>

----

### Comment faire un ping depuis une interface réseau spécifique

<details>

<span class="code_language">Shell</span>

```shell
ping -I eth0 www.google.com
```

<span class="code_language">Sortie</span>

```text
PING www.google.fr (216.58.215.35) from 172.22.227.33 eth0: 56(84) bytes of data.
64 bytes from par21s17-in-f3.1e100.net (216.58.215.35): icmp_seq=1 ttl=249 time=6.47 ms
64 bytes from par21s17-in-f3.1e100.net (216.58.215.35): icmp_seq=2 ttl=249 time=6.62 ms
64 bytes from par21s17-in-f3.1e100.net (216.58.215.35): icmp_seq=3 ttl=249 time=6.00 ms
64 bytes from par21s17-in-f3.1e100.net (216.58.215.35): icmp_seq=4 ttl=249 time=5.88 ms
64 bytes from par21s17-in-f3.1e100.net (216.58.215.35): icmp_seq=5 ttl=249 time=5.75 ms
64 bytes from par21s17-in-f3.1e100.net (216.58.215.35): icmp_seq=6 ttl=249 time=5.73 ms
64 bytes from par21s17-in-f3.1e100.net (216.58.215.35): icmp_seq=7 ttl=249 time=5.69 ms
^C
--- www.google.fr ping statistics ---
7 packets transmitted, 7 received, 0% packet loss, time 5997ms
rtt min/avg/max/mdev = 5.694/6.020/6.621/0.346 ms
```

On peut voir le nom de l'interface sur la première ligne en sortie de commande.

</details>

----

### Comment lancer un flot de paquets à l'aide de ping ?

<details>

<span class="code_language">Shell</span>

```shell
ping -f www.google.com
```

:::info

Pour chaque `ECHO_REQUEST` envoyé, un point "`.`" est affiché, tandis que pour chaque `ECHO_REPLY` reçu, un retour arrière est affiché. Cela permet d'afficher rapidement le nombre de paquets perdus. Si l'intervalle n'est pas spécifié, il est défini à zéro et les paquets sont affichés dès leur réception ou <u>cent fois par seconde</u>, la valeur la plus élevée étant retenue. Seul le super-utilisateur peut utiliser cette option avec un intervalle `null`.

:::

</details>

----

## ARTICLES

- [Lien](articles/cmd_ping_art)

