---
title: ip
description: Nouvelle commande pour la gestion des adresses IP et des routes.
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - ip
tags: [os,commandes,linux,ip,reseau,network]
---

----

## INFORMATION

`ip` – Afficher et manipuler le routage, les périphériques réseau, les interfaces et les tunnels

`ip` est un outil plus récent et plus puissant que `ifconfig`, offrant une gamme étendue de fonctionnalités pour la gestion des interfaces réseau, des routes, des adresses IP et plus encore.

----

## PACKAGE

<span class="code_language">Shell</span>

```shell
apt install iproute2
```

----

## MAN

- [Page man (interne)](man/cmd_ip_man.md)

----

## EXEMPLES

### Afficher les interfaces

<details>

Cette commande est utilisée pour afficher les détails de toutes les interfaces réseau sur le système, y compris les adresses IP, les états des interfaces et d'autres informations réseau pertinentes.

<span class="code_language">Shell</span>

```shell
ip addr show
```

<span class="code_language">Sortie</span>

```text
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet 10.255.255.254/32 brd 10.255.255.254 scope global lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:15:5d:94:11:47 brd ff:ff:ff:ff:ff:ff
    inet 172.22.227.33/20 brd 172.22.239.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::215:5dff:fe94:1147/64 scope link 
       valid_lft forever preferred_lft forever
```

</details>

----

### Afficher la table `neighbour` actuelle du noyau

<details>

<span class="code_language">Shell</span>

```shell
ip neigh
```

<span class="code_language">Sortie</span>

```text
172.22.224.1 dev eth0 lladdr 00:15:5d:62:56:24 STALE
```

</details>

----

### Gérer l'état des interfaces

<details>

Active ou désactive les interfaces réseau, ce qui est essentiel pour la gestion de la connectivité et le contrôle de l'interface.

- Activer l'interface :

<span class="code_language">Shell</span>

```shell
ip link set eth0 up
```

- Désactiver l'interface :

<span class="code_language">Shell</span>

```shell
ip link set eth0 down
```

</details>

----

### Ajouter ou supprimer des adresses IP

<details>

Permet de modifier la configuration IP d'une interface, en ajoutant ou supprimant des adresses IP.

- Ajouter : attibue une nouvelle adresse IP à une interface réseau spécifique.

<span class="code_language">Shell</span>

```shell
ip addr add 192.168.1.10/24 dev eth0
```

- Supprimer : enlève une adresse IP d'une interface réseau.

<span class="code_language">Shell</span>

```shell
ip addr del 192.168.1.10/24 dev eth0
```

</details>

----

### Modifier l'adresse MAC

<details>

Change l'adresse MAC de l'interface réseau,ce qui peut être nécessaire pour des raisons de sécurité, de confidentialité ou pour des tests.

<span class="code_language">Shell</span>

```shell
ip link set dev eth0 address aa:bb:cc:dd:ee:ff
```

</details>

----

### Afficher les routes

<details>

Affiche la table de routage IP du système, montrant comment les paquets sont dirigés d'une interface à une autre ou vers des réseaux spécifiques.

<span class="code_language">Shell</span>

```shell
ip route show
```

<span class="code_language">Sortie</span>

```text
default via 172.22.224.1 dev eth0 proto kernel 
172.22.224.0/20 dev eth0 proto kernel scope link src 172.22.227.33 
```

</details>

----

### Ajouter ou supprimer des routes

<details>

Modifie les itinéraires que les paquets utilisent pour atteindre leur destination, un aspect crucial de la configuration du réseau.

- Ajouter : crée une nouvelle route dans la table de routage.

<span class="code_language">Shell</span>

```shell
ip route add 192.168.2.0/24 via 192.168.1.1
```

Ajoute une route pour atteindre le réseau 192.168.2.0/24 via la passerelle 192.168.1.1.

- Supprimer : retire une route existante de la table de routage.

<span class="code_language">Shell</span>

```shell
ip route del 192.168.2.0/24
```

Supprime la route vers le réseau 192.168.2.0/24.

</details>
