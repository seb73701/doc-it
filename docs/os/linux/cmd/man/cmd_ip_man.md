---
title: ip (man)
description: (vide)
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - ip
tags: [os,commandes,linux,ip,reseau,network,man]
---

----

## NOM

`ip` – Afficher et manipuler le routage, les périphériques réseau, les interfaces et les tunnels

----

## SYNOPSIS

<span class="code_language">Shell</span>

```shell
ip [ OPTIONS ] OBJET { COMMANDE | help }
ip [ -force ] -batch NOM_FICHIER

OBJET := { address | addrlabel | fou | help | ila | ioam | l2tp | link | macsec | maddress | monitor | mptcp | mroute | mrule | neighbor | neighbour | netconf | netns | nexthop | ntable | ntbl | route | rule | sr | tap | tcpmetrics | token | tunnel | tuntap | vrf | xfrm }

OPTIONS := { -V[ersion] | -h[uman-readable] | -s[tatistics] | -d[etails] | -r[esolve] | -iec | -f[amily] { inet | inet6 | link } | -4 | -6 | -B | -0 | -l[oops] { maximum-addr-flush-attempts } | -o[neline] | -rc[vbuf] [size] | -t[imestamp] | -ts[hort] | -n[etns] nom | -N[umeric] | -a[ll] | -c[olor] | -br[ief] | -j[son] | -p[retty] }
```

----

## DESCRIPTION

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

**Commande :** 
Spécifie l'action à effectuer sur l'objet. L'ensemble des actions possibles dépend du type d'objet. En règle générale, il est possible d'ajouter, de supprimer et d'afficher (ou de lister) des objets, mais certains objets ne permettent pas toutes ces opérations ou disposent de commandes supplémentaires. La commande d'aide est disponible pour tous les objets. Elle affiche une liste des commandes disponibles et des conventions syntaxiques des arguments. 

Si aucune commande n'est donnée, une commande par défaut est supposée. Il s'agit généralement de `list` ou, si les objets de cette classe ne peuvent pas être listés, de `help`.

----

## ENVIRONNEMENT

|Options|Description|
|:------|:----------|
|`COLORFGBG`|Si cette variable est définie, sa valeur est utilisée pour détecter si le fond d'écran est sombre ou clair et utiliser des couleurs de contraste appropriées.<br/>La variable d'environnement `COLORFGBG` contient habituellement deux ou trois valeurs séparées par des points-virgules; la dernière de ces valeurs est nécessaire dans chaque cas. Si cette valeur est `0-6` ou `8`, choisir des couleurs adaptées à un fond foncé :<br/>`COLORFGBG=";0" ip -c a`|

----

## VOIR AUSSI

`ip-address`(8),  `ip-addrlabel`(8),  `ip-ioam`(8),  `ip-l2tp`(8), `ip-link`(8), `ip-maddress`(8), `ip-monitor`(8), `ip-mptcp`(8), `ip-mroute`(8), `ip-neighbour`(8), `ip-netns`(8), `ip-ntable`(8), `ip-route`(8), `ip-rule`(8), `ip-stats`(8) `ip-tcp_metrics`(8), `ip-token`(8), `ip-tunnel`(8), `ip-vrf`(8), `ip-xfrm`(8)

Référence des commandes IP `ip-cref.ps`

----

## HISTORIQUE

ip a été écrit par Alexey N. Kuznetsov et ajouté dans Linux 2.2.

----

## DISPONIBILITÉ

`ip` fait partie du paquet `iproute2`.

----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|`/bin/ip`|Fichier binaire|
|`/sbin/ip`|Fichier binaire|

----

## VALEUR RENVOYEE

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|L'exécution de la commande a abouti.|
|`1`|Une erreur de syntaxe s'est produite.|
|`2`|Une erreur es renvoyée par le noyau.|

----

## SOURCES

- https://manpages.ubuntu.com/manpages/noble/en/man8/ip.8.html
