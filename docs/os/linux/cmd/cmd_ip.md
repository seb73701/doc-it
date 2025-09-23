---
title: ip
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

## SYNTAXE

<span class="code_language">Shell</span>

```shell
ip [ OPTIONS ] OBJET { COMMANDE | help }
ip [ -force ] -batch NOM_FICHIER

OBJET := { address | addrlabel | fou | help | ila | ioam | l2tp | link | macsec | maddress | monitor | mptcp | mroute | mrule | neighbor | neighbour | netconf | netns | nexthop | ntable | ntbl | route | rule | sr | tap | tcpmetrics | token | tunnel | tuntap | vrf | xfrm }

OPTIONS := { -V[ersion] | -h[uman-readable] | -s[tatistics] | -d[etails] | -r[esolve] | -iec | -f[amily] { inet | inet6 | link } | -4 | -6 | -B | -0 | -l[oops] { maximum-addr-flush-attempts } | -o[neline] | -rc[vbuf] [size] | -t[imestamp] | -ts[hort] | -n[etns] nom | -N[umeric] | -a[ll] | -c[olor] | -br[ief] | -j[son] | -p[retty] }
```

----

## INFORMATION

`ip` – Afficher et manipuler le routage, les périphériques réseau, les interfaces et les tunnels

`ip` est un outil plus récent et plus puissant que `ifconfig`, offrant une gamme étendue de fonctionnalités pour la gestion des interfaces réseau, des routes, des adresses IP et plus encore.

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-V`, `-Version`|Afficher la version de l'utilitaire `ip` et quitter.|
|`-h`, `-human`, `-human-readable`|Statistiques de sortie avec des valeurs humainement lisibles et suivies d'un suffixe.|
|`-b`, `-batch` `<NOM_FICHIER>`|Lire les commandes depuis le fichier fourni ou l'entrée standard et les exécuter. Le premier échec causera l'arrêt de `ip`.|
|`-force`|Ne pas arrêter `ip` à cause d'erreurs en mode "`batch`". Si des erreurs surviennent lors de l'exécution des commandes, le code de retour de l'application sera différent de zéro.|
|`-s`, `-stats`, `-statistics`|Afficher plus d'informations en sortie. Si l'option apparait deux fois ou plus, le nombre d'informations augmente. En général, les informations sont des statistiques ou des valeurs de temps.|
|`-d`, `-details`|Afficher des informations plus détaillées.|
|`-l`, `-loops` `<COUNT>`|Indiquer le nombre maximal de boucles que la logique de "**vidage d'adresses ip**" doit essayer avant d'abandonner. **Le nombre par défaut est `10`**. Zéro (`0`) signifie boucler jusqu'à ce que toutes les adresses soient supprimées.|
|`-f`, `-family` `<FAMILY>`|Indiquer la famille de protocoles à utiliser. L'identifiant de la famille de protocoles peut être : `inet`, `inet6`, `bridge`, `mpls` ou `link`. Si cette option n'est pas présente, la famille de protocoles est présumée d'après les autres arguments. Si le reste de la ligne de commande ne donne pas assez d'informations pour deviner la famille, `ip` se rabat sur celle par défaut, généralement `inet` ou `any`. `link` est un identifiant spécial de famille signifiant qu'aucun protocole réseau n'est engagé.|
|`-4`|Raccourci pour `-family inet`.|
|`-6`|Raccourci pour `-family inet6`.|
|`-B`|Raccourci pour `-family bridge`.|
|`-M`|Raccourci pour `-family mpls`.|
|`-0`|Raccourci pour `-family link`.|
|`-o`, `-oneline`|Écrire en sortie chaque enregistrement sur une seule ligne en remplaçant les sauts de ligne par le caractère "`\`". Cela est pratique lorsque vous voulez compter les enregistrements avec `wc` ou pour une recherche avec `grep` sur la sortie.|
|`-r`, `-resolve`|Utiliser le résolveur de noms du système pour afficher les noms DNS au lieu des adresses d'hôte.|
|`-n`, `-netns` `<NETNS>`|Commuter `ip` sur l'espace de noms de réseau `NETNS` spécifié. En fait cela simplifie juste l'exécution de :<br/>`ip netns exec NETNS ip [ OPTIONS ] OBJET { COMMANDE \| help }`<br/>à<br/>`ip -n[etns] NETNS [ OPTIONS ] OBJET { COMMANDE \| help }`|
|`-N`, `-Numeric`|Afficher directement le numéro de protocole, de portée, de champ **DS**, etc., au lieu de le convertir en un nom lisible par un humain.|
|`-a`, `-all`|Exécuter la commande indiquée sur tous les objets si la commande gère cette option.|
|`-c[color][={always\|auto\|never}`|Configurer la couleur en sortie. Si le paramètre est omis ou si `always` est présent, la sortie en couleur est activée quel que soit l'état de `stdout`. Si le paramètre est `auto`, il est vérifié que `stdout` est un terminal avant d'activer la sortie en couleur. Si le paramètre est `never`, la sortie en couleur est désactivée. Si ce paramètre est indiqué plusieurs fois, le dernier prend la priorité. Ce drapeau est ignoré si `-json` est aussi donné.<br/>La palette de couleurs utilisée peut être influencée par la variable d'environnement `COLORFGBG` (voir **ENVIRONNEMENT**).|
|`-t`, `-timestamp`|Afficher le temps actuel en utilisant l'option `monitor`.|
|`-ts`, `-tshort`|Comme `-timestamp`, mais utilisant un format plus petit.|
|`-rc`, `-rcvbuf<TAILLE>`|Définir la taille du tampon de réception du socket `netlink`, par défaut 1 Mo.|
|`-iec`|Afficher lisiblement les taux en unités IEC (par exemple, 1 Ki = 1024).|
|`-br`, `-brief`|N'afficher que les informations basiques dans un format tabulaire pour une meilleure lisibilité. Cette option n'est actuellement prise en charge que par les commandes `ip addr show`, `ip link show` et `ip neigh show`.|
|`-j`, `-json`|Afficher la sortie des résultats en JSON (JavaScript Object Notation).|
|`-p`, `-pretty`|Le format JSON par défaut est compact et plus pratique à analyser, mais difficile à lire pour beaucoup d'utilisateurs. Ce drapeau ajoute l'indentation pour la lisibilité.|
|`-echo`|Demander au noyau de renvoyer la configuration qui a été appliquée.|

----

## IP – SYNTAXE DES COMMANDES

|Objet|Description|
|:------|:----------|
|`address`|adresse du protocole (IP ou IPv6) d'un périphérique.|
|`addrlabel`|configuration de l’étiquette pour la sélection d'adresse de protocole.|
|`ioam`|administrer les espaces de noms IOAM et les schémas IOAM.|
|`l2tp`|tunnel Ethernet over IP (L2TPv3).|
|`link`|périphérique réseau.|
|`maddress`|adresse multicast.|
|`monitor`|surveiller les messages netlink.|
|`mptcp`|administrer le gestionnaire de chemin MPTCP.|
|`mroute`|entrée du cache de routage multicast.|
|`mrule`|règle de la base de données de politiques de routage multicas|
|`neighbour`|gestion des entrées de cache ARP ou NDISC.|
|`netns`|gestion des espaces de noms réseau.|
|`ntable`|gestion des opérations du cache "`neighbour`".|
|`route`|entrée de la table de routage.|
|`rule`|règle dans la base de données de politiques de routage.|
|`stats`|gérer et afficher les statistiques d'interface.|
|`tcp_metrics/tcpmetrics`|gestion des métriques TCP.|
|`token`|gestion des identifiants symbolisés d'interface.|
|`tunnel`|tunnel sur IP.|
|`tuntap`|gestion des périphériques TUN/TAP.|
|`vrf`|gestion des périphériques de routage virtuel et de redirection.|
|`xfrm`|gestion des politiques IPsec.|

Le nom de tous les objets peut être écrit en entier ou sous forme abrégée, par exemple `address` peut être abrégé en `addr` ou juste `a`.

----

## ENVIRONNEMENT

|Options|Description|
|:------|:----------|
|`COLORFGBG`|Si cette variable est définie, sa valeur est utilisée pour détecter si le fond d'écran est sombre ou clair et utiliser des couleurs de contraste appropriées.<br/>La variable d'environnement `COLORFGBG` contient habituellement deux ou trois valeurs séparées par des points-virgules; la dernière de ces valeurs est nécessaire dans chaque cas. Si cette valeur est `0-6` ou `8`, choisir des couleurs adaptées à un fond foncé :<br/>`COLORFGBG=";0" ip -c a`|


## VALEUR RENVOYEE

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|L'exécution de la commande a abouti.|
|`1`|Une erreur de syntaxe s'est produite.|
|`2`|Une erreur es renvoyée par le noyau.|

----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|||

----

## MAN

- [man](https://manpages.ubuntu.com/manpages/noble/en/man8/ip.8.html)

C'est possible d'avoir la page `man` avec la commande : 

<span class="code_language">Shell</span>

```shell
man ip
```

ou

<span class="code_language">Shell</span>

```shell
ip --help
```

----

## EXEMPLES

### Afficher les interfaces

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

----

### Afficher la table "neighbour" actuelle du noyau

<span class="code_language">Shell</span>

```shell
ip neigh
```

<span class="code_language">Sortie</span>

```text
172.22.224.1 dev eth0 lladdr 00:15:5d:62:56:24 STALE
```

----

### Gérer l'état des interfaces

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

----

### Ajouter ou supprimer des adresses IP

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

----

### Modifier l'adresse MAC

Change l'adresse MAC de l'interface réseau,ce qui peut être nécessaire pour des raisons de sécurité, de confidentialité ou pour des tests.

<span class="code_language">Shell</span>

```shell
ip link set dev eth0 address aa:bb:cc:dd:ee:ff
```


----

### Afficher les routes

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

----

### Ajouter ou supprimer des routes

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

----