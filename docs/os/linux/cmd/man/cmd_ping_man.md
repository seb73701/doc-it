---
title: ping (man)
description: (vide)
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - ping
tags: [os,commandes,linux,ping,network,reseau,man]
---

----

## NOM

`ping` - Envoyer un `ECHO_REQUEST` ICMP aux hôtes du réseau

----

## SYNOPSIS

<span class="code_language">Shell</span>

```shell
ping [-aAbBdDefhLnOqrRUvV46] [-c nombre] [-F flowlabel] [-i intervalle] [-I interface] [-l préchargement]
    [-m marque] [-M pmtudisc_option] [-N nodeinfo_option] [-w échéance] [-W délai] [-p motif] [-Q tos]
    [-s taille_paquet] [-S tampon_émission] [-t ttl] [-T horodatage option] [saut...] {destination}
```

----

## DESCRIPTION

`ping` utilise le datagramme `ECHO_REQUEST` obligatoire du protocole ICMP pour obtenir une réponse `ECHO_RESPONSE` ICMP d'un hôte ou d'une passerelle. Les datagrammes `ECHO_REQUEST` ("**pings**") comportent des en-têtes IP et ICMP, suivis d'une `struct` `timeval` et d'un nombre arbitraire d'octets de bourrage utilisés pour remplir le paquet.

`ping` fonctionne avec IPv4 et IPv6. L'utilisation explicite de l'un des deux peut être forcée en spécifiant `-4` ou `-6`.

`ping` peut également envoyer des requêtes d'information sur les nœuds IPv6 (RFC4620). Les sauts intermédiaires peuvent ne pas être autorisés, car le routage de la source IPv6 est déconseillé (RFC5095).

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-4`|Utiliser seulement IPv4.|
|`-6`|Utiliser seulement IPv6.|
|`-a`|Ping sonore.|
|`-A`|Ping adaptatif. L'intervalle entre les paquets s'adapte au délai aller-retour (<u>round-trip time</u>, <u>RTT</u>), afin qu'il n'y ait pas plus d'un essai sans réponse (ou plus, si le <u>préchargement</u> est utilisé) sur le réseau. L'<u>intervalle minimal</u> est de **200 ms** pour les utilisateurs normaux (non super-utilisateurs).<br/>Sur les réseaux de faible RTT, ce mode est quasiment équivalent au mode <u>inondation</u>.|
|`-b`|Autoriser à envoyer un `ping` à une adresse de diffusion (_broadcast_).|
|`-B`|Ne pas autoriser `ping` à changer l'adresse source des essais. L'adresse est liée à celle sélectionnée au démarrage de `ping`.|
|`-c nombre`|Arrêter après avoir envoyé <u>nombre</u> paquets `ECHO_REQUEST`. Avec l'option <u>échéance</u>, `ping` attend pour <u>nombre</u> paquets `ECHO_REPLY`, jusqu'à ce que le délai expire.|
|`-C`|Appeler l'appel système `connect()` lors de la création de socket.|
|`-d`|Définir l'option `SO_DEBUG` sur le socket utilisé. Généralement, cette option de socket n'est pas utilisée par le noyau Linux.|
|`-e`|Définir le champ d'identification de `ECHO_REQUEST`. La valeur **0** implique l'usage de socket <u>raw</u> (non géré par le socket de datagrammes ICMP). La valeur du champ peut être affichée avec l'option `-v`.|
|`-D`|Afficher l'horodatage (temps Unix + les microsecondes comme dans `gettimeofday`) avant chaque ligne.|
|`-f`|Mode <u>inondation</u> (_flood ping_). Pour chaque `ECHO_REQUEST` envoyé, un point ("`.`") est affiché, alors que pour chaque `ECHO_REPLY` reçu un effacement arrière (_backspace_) est affiché. Cela fournit un affichage rapide de combien de paquets ont été abandonnés. S'il n'y a pas d'<u>intervalle</u> donné, l'<u>intervalle</u> est défini à **0** et `ping` renvoie les paquets aussi vite qu'ils reviennent ou <u>cent fois par seconde</u>, selon le plus rapide. Seul le **superutilisateur** peut utiliser cette option avec un <u>intervalle</u> de **0**.|
|`-F flow label`|Seulement pour IPv6. Allouer et inscrire une <u>étiquette de flux</u> (_flow label_) de 20 bits (en hexadécimal) sur les paquets `ECHO_REQUEST`. Si la valeur est **0**, le noyau alloue une <u>étiquette de flux</u> aléatoire.|
|`-h`|Afficher l'aide.|
|`-i intervalle`|Attendre <u>intervalle</u> secondes entre l'envoi de chaque paquet. Les nombres réels sont autorisés avec un point comme séparateur de décimales (indépendamment du réglage des paramètres régionaux). L'<u>attente par défaut</u> est de **1 seconde** entre chaque paquet ou <u>aucune attente</u> en mode <u>inondation</u>. Seul le **superutilisateur** peut définir l'<u>intervalle</u> à une valeur inférieure à **2 ms**.|
|`-I interface`|L'<u>interface</u> est soit une **adresse**, un **nom d'interface** ou un **nom VRF**. Si l'interface est une **adresse**, son adresse source est définie par l'<u>adresse de l'interface spécifiée</u>. Si l'interface est un **nom d'interface**, son interface source est définie à l'**interface spécifiée**. Si l'interface est un **nom VRF**, chaque paquet est routé en utilisant la table de routage correspondante ; dans ce cas, l'option `-I` peut être répétée pour spécifier une adresse source.<br/>**NOTE** : Pour IPv6, lors d'un `ping` à une <u>adresse de portée liaison locale</u>, la spécification de la liaison (par la notation "**%**" dans destination ou par cette option) peut être utilisée, mais n'est plus nécessaire.|
|`-l préchargement`|Si <u>préchargement</u> est spécifié, `ping` envoie plusieurs paquets <u>sans attendre de réponse</u>. Seul le **superutilisateur** peut sélectionner un <u>préchargement</u> supérieur à **3**.|
|`-L`|Enlever la <u>boucle locale</u> (_loopback_) des paquets multidestinataires (_multicast_). Cette option ne s'applique que si la destination du `ping` est une <u>adresse multidestinataire</u>.|
|`-m marque`|Utiliser <u>marque</u> pour étiqueter les paquets sortants. Cela est utile pour diverses raisons dans le noyau comme l'utilisation du routage selon la politique pour sélectionner un traitement spécifique des sorties.|
|`-M pmtudisc_option`|Sélectionner la stratégie de <u>découverte du chemin MTU</u> (_Path MTU Discovery_). L'option <u>pmtudisc_option</u> peut être soit <u>do</u> (_prohiber la fragmentation, même locale_), soit <u>want</u> (_faire la découverte du chemin MTU, fragmenter localement quand le paquet est grand_), ou <u>dont</u> (_ne pas positionner de drapeau DF_).|
|`-N nodeinfo_option`|Seulement pour IPv6. Envoyer des demandes d'information de nœud ICMPv6 (RFC 4620), au lieu de `ECHO_REQUEST`. La capacité `CAP_NET_RAW` est requise.<br/>- `help`: Afficher l'aide pour la prise en charge de <u>NI</u>.<br/>- `nom`: Demander les noms de nœuds.<br/>- `ipv6`: Demander les adresses IPv6. Il y a plusieurs drapeaux spécifiques à IPv6.<br/><ul>- `ipv6-global`: Demander les adresses <u>global-scope IPv6</u>.<br/>- `ipv6-sitelocal`: Demander les adresses <u>site-local IPv6</u>.<br/>- `ipv6-linklocal`: Demander les adresses <u>link-local IPv6</u>.<br/>- `ipv6-all`: Demander les adresses IPv6 sur les autres interfaces.</ul>- `ipv4`: Demander les adresses IPv4. Il y a un drapeau spécifique à IPv4.<br/><ul>- `ipv4-all`: Demander les adresses IPv4 sur les autres interfaces.</ul>- `subject-ipv6=ipv6addr`: Adresse de sujet IPv6.<br/>- `subject-ipv4=ipv4addr`: Adresse de sujet IPv4.<br/>- `subject-name=nom_du_nœud`: Nom du sujet. S'il contient plus qu'un point ("`.`"), un <u>nom de domaine pleinement qualifié</u> (_fqdn_) est supposé.<br/>- `subject-fqdn=nom_du_nœud`: Nom du sujet. Un <u>nom de domaine pleinement qualifié</u> (_fqdn_) est toujours supposé.<br/>|
|`-n`|Sortie numérique uniquement. Aucune tentative ne sera faite pour rechercher des noms symboliques (_résolution DNS_) pour les adresses d'hôtes.|
|`-O`|Rapporter la réponse ICMP `ECHO` en suspens avant d'envoyer le paquet suivant. Cela est utile avec l'horodatage `-D` pour <u>enregistrer la sortie dans un fichier de diagnostic</u> et rechercher les réponses manquantes.|
|`-p motif`|Vous pouvez <u>spécifier jusqu'à 16 octets de "pad"</u> pour remplir le paquet que vous envoyez. Cela est utile pour diagnostiquer les problèmes dépendant des données dans un réseau. Par exemple, `-p ff` fera en sorte que le paquet envoyé soit rempli avec des **1**.|
|`-q`|Sortie silencieuse. Rien n'est affiché à part les lignes de résumé au démarrage et à la fin de l'exécution.|
|`-Q tos`|Définir la <u>qualité de service</u>, relative aux bits dans les datagrammes ICMP. <u>tos</u> peut être un nombre décimal (`ping` seulement) ou hexadécimal.<br/>Dans la RFC2474, ces champs sont interprétés comme un champ de 8 bits destiné aux services différenciés (Differentiated Services, DS), constitué des bits 0-1 (les deux bits les plus faibles) de données indépendantes, et des bits 2-7 (les six bits les plus forts) du Differentiated Services Codepoint (DSCP).<br/>Dans les RFC2481 et RFC3168, les bits 0-1 sont utilisés pour l'ECN (NdT : Explicit Congestion Notification, notification explicite de congestion).<br/>Historiquement (la RFC1349, rendue obsolète par la RFC2474), l'interprétation était la suivante : le bit 0 (bit le plus faible) est réservé (actuellement en cours de redéfinition pour le contrôle de congestion), 1-4 pour le type de service (Type of Service, ToS), et les bits 5-7 (bits les plus forts) pour la Priorité.|
|`-r`|Ne pas utiliser les <u>tables de routage</u> normales et envoyer les paquets directement à un hôte présent sur une <u>interface</u> directement connectée. Si l'hôte n'est pas situé dans un réseau directement connecté, une erreur est renvoyée. Cette option peut être utilisée pour envoyer un `ping` à un hôte local au travers d'une interface ne faisant partie d'aucune route à condition que l'option `-I` soit également utilisée.|
|`-R`|ping seulement. Enregistrer la route. Inclut l'option `RECORD_ROUTE` dans le paquet `ECHO_REQUEST` et affiche le tampon de la route dans les paquets renvoyés. Notez que l'en-tête IP ne peut contenir au plus que **neuf** de ces routes. Beaucoup d'hôtes ignorent ou désactivent cette option.|
|`-s taille_paquet`|Spécifier le <u>nombre</u> d'octets de données à envoyer. Le <u>nombre par défaut</u> est **56**, ce qui se traduit en **64 octets** de données ICMP quand ils sont combinés avec les **8 octets** de données de l'en-tête ICMP.|
|`-S tampon_émission`|Définir le <u>tampon d'émission</u> du socket. S'il n'est pas spécifié, il n'est pas mis en mémoire tampon plus d'un paquet.|
|`-t ttl`|`ping` seulement. Spécifier le champ IP <u>Time to Live</u>.|
|`-T horodatage option`|Définir les options d'horodatage d'IP spéciales. <u>horodatage option</u> peut être soit <u>tsonly</u> (_seulement les horodatages_), <u>tsandaddr</u> (_horodatages et adresses_) ou <u>tsprespec hôte1 [hôte2 [hôte3 [hôte4]]]</u> (_sauts prédéterminés d'horodatage_).|
|`-U`|Afficher le <u>temps de latence total utilisateur-à-utilisateur</u> (l'ancien comportement). Normalement `ping` affiche le <u>RTT</u> (_round trip time_) du réseau, qui peut être différent par exemple à cause d'échecs du DNS.|
|`-v`|Sortie loquace. Ne pas supprimer les réponses <u>DUP</u> (paquets dupliqués) lors de l'envoi d'un `ping` sur une adresse multidestinataire.|
|`-V`|Afficher la version et quitter.|
|`-w échéance`|Spécifier un <u>délai</u>, en secondes, avant que `ping` ne quitte indépendamment de combien de paquets ont été envoyés ou reçus. Dans ce cas `ping` ne stoppe pas après que <u>nombre</u> paquets soient envoyés, il attend soit que l'<u>échéance</u> expire ou que <u>nombre</u> essais aient reçu une réponse, ou encore qu'une notification d'erreur provienne du réseau.|
|`-W délai`|Temps d'<u>attente d'une réponse</u>, en secondes. L'option ne concerne que le <u>délai</u> en l'absence d'une quelconque réponse, sinon `ping` attend deux RTT. Les nombres réels sont autorisés avec un point comme séparateur de décimales (indépendamment du réglage des paramètres régionaux). **0** signifie un <u>délai infini</u>.|

Quand vous utilisez `ping` pour la localisation de pannes, il devrait d'abord être exécuté sur l'hôte local, pour vérifier que l'interface réseau locale est activée et fonctionne correctement. Ensuite, un `ping` devrait être envoyé aux hôtes et aux passerelles de plus en plus éloignés. Les délais aller-retour et les statistiques de perte de paquets sont calculés. Si des paquets dupliqués sont reçus, ils ne sont pas inclus dans le calcul des paquets perdus, bien que le temps d'aller-retour de ces paquets soit utilisé pour calculer les temps d'aller-retour minimal/moyen/maximal/écart type.

L'écart type de la population (_mdev_), essentiellement une moyenne de l'écart entre le RTT de chaque ping et le RTT moyen. Plus l'écart type est élevé, plus le RTT est variable (dans le temps). Avec une variabilité élevée du RTT, vous aurez des problèmes de vitesse avec les transferts de masse (ils prendront plus de temps que nécessaire à proprement parler, car la variabilité fera que l'expéditeur
finira par attendre les acquittements) et vous aurez une qualité de VoIP moyenne à médiocre.

Lorsque le nombre de paquets indiqués ont été envoyés (et reçus) ou si le programme se termine avec un `SIGINT`, un bref résumé est affiché. Des statistiques actuelles plus courtes peuvent être obtenues sans terminer le processus en utilisant le signal `SIGQUIT`.

- Si `ping` ne reçoit aucun paquet en retour, il quittera avec le code **1**.
- Si un paquet est spécifié avec à la fois nombre et échéance, et que moins de paquets que nombre sont reçus au moment où l'échéance est atteinte, ping quittera aussi avec le code **1**. 
- Pour une autre erreur, il quittera avec le code **2**. 
- Sinon, il quittera avec le code **0**. 

Cela rend possible l'utilisation du code de sortie pour savoir si un hôte est actif ou non.

Ce programme est fait pour être utilisé dans les tests, la mesure et l'administration du réseau. À cause de la charge qu'il peut infliger au réseau, il est imprudent d'utiliser `ping` pendant les opérations normales ou à partir de scripts automatisés.

----

## DESTINATIONS IPV6 LINK-LOCAL

Pour IPv6, lorsque l'adresse de destination a une portée locale (_link-local scope_) et que `ping` utilise des sockets de datagrames ICMP, l'interface de sortie doit être spécifiée. Lorsque `ping` utilise des sockets <u>raw</u>, il n'est pas strictement nécessaire de spécifier l'interface de sortie, mais cela est préférable pour lever l'ambigüité lorsqu'il y a plusieurs interfaces de sortie possibles.

Il y a deux manières de spécifier l'interface de sortie :

- en utilisant la notation `%`: L'adresse de destination est suffixée avec `%` puis le nom de l'interface de sortie ou l'indice d'interface (`ifIndex`), par exemple :<ul>- `ping fe80::5054:ff:fe70:67bc%eth0`<br/>- `ping fe80::5054:ff:fe70:67bc%2`</ul>
- en utilisant l'option `-l`: Lors de l'utilisation de sockets de datagrammes ICMP, cette méthode est prise en charge depuis les versions du noyau suivantes : 5.17, 5.15.19, 5.10.96, 5.4.176, 4.19.228, 4.14.265. En outre, ce n'est pas pris en charge par la `libc` `musl`.

----

## DÉTAILS D'UN PAQUET ICMP

Un en-tête IP sans option comporte 20 octets. Un paquet ICMP `ECHO_REQUEST` contient 8 octets supplémentaires d'en-tête ICMP suivis d'une quantité arbitraire de données. Quand une <u>taille_paquet</u> est fournie, elle indique la taille de cette partie de données supplémentaires (**56 octets par défaut**). Par conséquent, la quantité de données reçues à l'intérieur d'un paquet IP de type ICMP `ECHO_REPLY` sera toujours de 8 octets supérieure à l'espace requis par les données (l'en-tête ICMP).

Si l'espace occupé par les données est d'au moins la taille d'une `struct` `timeval`, `ping` utilise les huit premiers octets de cet espace pour inclure un <u>horodatage</u> qu'il utilise dans le calcul des délais aller-retour. Si l'espace des données est plus faible, aucun délai aller-retour n'est donné.

----

## PAQUETS DUPLIQUÉS ET ENDOMMAGÉS

`ping` signalera les paquets dupliqués ou endommagés. Une duplication de paquets ne devrait jamais se produire, et semble être causée par des retransmissions inadéquates au niveau liaison. Les duplications peuvent se produire dans de nombreuses situations, et sont rarement (pour ne pas dire jamais) un bon signe, bien que la présence d'une faible proportion de paquets dupliqués ne doive pas toujours vous inquiéter.

Les paquets endommagés constituent évidemment une cause sérieuse d'alerte et indiquent souvent une panne matérielle quelque part sur le chemin du paquet `ping` (dans le réseau ou dans les hôtes).

----

## TESTER DES MOTIFS DE DONNÉES DIFFÉRENTS

La couche (inter)réseau ne devrait jamais traiter des paquets différemment en fonction des données contenues dans la partie de données. Malheureusement, on a signalé des problèmes dépendant des données qui s'immiscent dans les réseaux et restent non détectés pendant une longue période de temps. Dans beaucoup de cas, le <u>motif</u> particulier qui aura des problèmes est un <u>motif</u> ne comportant pas suffisamment de "**transitions**", comme que des "**un**" ou que des "**zéro**", ou bien un <u>motif</u> proche de la limite (comme presque uniquement des "**zéro**"). Il ne suffit pas nécessairement de spécifier un <u>motif</u> de données ne comportant que des **zéros** (_par exemple_) sur la ligne de commandes étant donné que le <u>motif</u> qui entre en jeu est celui qui se trouve au niveau liaison de données, et que la relation entre ce que vous tapez et ce qui sera réellement envoyé sur le réseau par les contrôleurs peut être complexe.

Cela signifie que si vous avez un problème dépendant des données, alors vous devrez probablement effectuer beaucoup de tests pour le trouver. Si vous avez de la chance, vous pouvez trouver un fichier qui ne peut être envoyé sur votre réseau, ou qui prend beaucoup plus de temps à être transféré que d'autres fichiers de longueur similaire. Vous pouvez ensuite examiner ce fichier pour trouver des <u>motifs</u> répétés que vous pouvez tester en utilisant l'option `-p` de `ping`.

----

## DÉTAILS SUR LE TTL

La valeur <u>TTL</u> (_Time To Live, temps de vie_) d'un paquet IP représente le nombre maximal de routeurs IP que ce paquet est autorisé à traverser avant d'être rejeté. Dans la pratique actuelle, vous pouvez vous attendre à ce que chaque routeur sur Internet décrémente le champ TTL d'exactement une unité.

La spécification TCP/IP précise que le champ TTL destiné aux paquets TCP devrait être fixé à **60**, mais beaucoup de systèmes utilisent des valeurs plus petites (4.3BSD utilise 30, la version 4.2 utilisait 15).

La <u>valeur maximale</u> pour ce champ est de **255**, et la plupart des systèmes Unix fixent le champ TTL des paquets ICMP `ECHO_REQUEST` à **255**. C'est pourquoi vous pouvez envoyer un `ping` à certains hôtes, mais pas les atteindre avec `telnet`(1) ou `ftp`(1).

Normalement, `ping` affiche la valeur TTL du paquet qu'il reçoit. Quand un système distant reçoit un paquet `ping`, il peut faire une de ces trois choses avec le champ TTL dans sa réponse :

- Ne pas le modifier ; c'est ce que les systèmes Unix de Berkeley faisaient avant la version Tahoe 4.3BSD. Dans ce cas, la valeur TTL du paquet reçu sera 255 moins le nombre de routeurs dans le chemin de l'aller-retour.
- Le définir à 255 ; c'est la manière actuelle de faire des systèmes Unix de Berkeley. Dans ce cas la valeur TTL dans le paquet reçu sera 255 moins le nombre de routeurs sur le chemin du système distant à l'hôte pingeant.
- Le définir à une autre valeur. Quelques machines utilisent la même valeur pour les paquets ICMP qu'elles utilisent pour les paquets TCP, par exemple 30 ou 60. D'autres peuvent utiliser des valeurs totalement étranges.

----

## BOGUES

- Plusieurs hôtes et passerelles ignorent l'option `RECORD_ROUTE`.
- La taille maximale de l'en-tête IP est trop courte pour que des options comme `RECORD_ROUTE` soient vraiment utiles. Cependant, il n'y a pas grand chose qui peut être fait pour cela.
- Inonder de pings n'est en général pas recommandé et inonder de pings l'adresse de diffusion générale (broadcast) ne devrait être fait que dans des circonstances très particulières.

----

## VOIR AUSSI

`ip`(8), `ss`(8)

----

## HISTORIQUE

La commande `ping` apparaît dans 4.3BSD.

La version décrite ici est sa descendance spécifique à Linux.

Avec la version s20150815, le binaire `ping6` disparait. Il a été fusionné à `ping`. La création d'un lien symbolique nommé `ping6` pointant sur `ping` résultera en la même fonctionnalité qu'auparavant.

----

## SÉCURITÉ

`ping` nécessite la capacité `CAP_NET_RAW` pour être exécuté : 
- si le programme est utilisé pour <u>des requêtes sans écho</u> (voir l'option `-N`) ou lorsque le champ d'identification est défini à **0** pour l'`ECHO_REQUEST` (voir `-e`)
- si le noyau ne prend pas en charge les sockets de datagrames ICMP
- si l'utilisateur n'est pas autorisé à créer un socket d'écho ICMP. Le programme peut nécessiter d'être utilisé dans le mode `set-uid` **superutilisateur**.

----

## DISPONIBILITÉ

`ping` fait partie du paquet `iputils`.

----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|`/bin/ping`|Fichier Binaire|

----

## VALEUR RENVOYEE

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|L'exécution de la commande a abouti.|
|`1`|Ping ne reçoit aucun paquet en réponse.|
|`2`|Erreur|

----

## SOURCES

- https://manpages.ubuntu.com/manpages/noble/fr/man8/ping.8.html
- https://linux.die.net/man/8/ping