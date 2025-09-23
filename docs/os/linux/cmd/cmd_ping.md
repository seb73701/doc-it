---
title: ping
description: ping – Envoyer un ECHO_REQUEST ICMP aux hôtes du réseau
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - ping
tags: [os,commandes,linux,ping,network,reseau]
---

----

## SYNTAXE

<span class="code_language">Shell</span>

```shell
ping [-aAbBdCDfhHLnOqrRUvV346] [-c nombre] [-e identifiant] [-F flowlabel] [-i intervalle] [-I interface] [-l préchargement] [-m marque] [-M pmtudisc_option] [-N nodeinfo_option] [-w échéance] [-W délai] [-p motif] [-Q tos] [-s taille_paquet] [-S tampon_émission] [-t ttl] [-T horodatage option] [saut...] {destination}
```

----

## INFORMATION

`ping` – Envoyer un `ECHO_REQUEST` ICMP aux hôtes du réseau.

`ping` utilise le datagramme `ECHO_REQUEST` obligatoire du protocole **ICMP** (_Internet Control Message Protocol_) pour obtenir une réponse `ECHO_RESPONSE` ICMP d'un hôte ou d'une passerelle. Les datagrammes `ECHO_REQUEST` ("pings") comportent des en-têtes IP et ICMP, suivis d'une `struct timeval` et d'un nombre arbitraire d'octets de bourrage utilisés pour remplir le paquet.

`ping` fonctionne avec IPv4 et IPv6. L'utilisation explicite de l'un des deux peut être forcée en spécifiant `-4` ou `-6`.

`ping` peut également envoyer des requêtes d'information sur les nœuds IPv6 (RFC4620). Les sauts intermédiaires peuvent ne pas être autorisés, car le routage de la source IPv6 est déconseillé (RFC5095).

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-3`|précision RTT (sans arrondir le temps du résultat).|
|`-4`|Utiliser seulement IPv4.|
|`-6`|Utiliser seulement IPv6.|
|`-a`|Ping sonore.|
|`-A`|Ping adaptatif. L'intervalle entre les paquets s'adapte au délai aller-retour (round-trip time, RTT), afin qu'il n'y ait pas plus d'un essai sans réponse (ou plus, si le préchargement est utilisé) sur le réseau. L'intervalle par défaut est de 2 ms, pour plus d'informations voir `-i`. Sur les réseaux de faible RTT, ce mode est quasiment équivalent au mode inondation.|
|`-b`|Autoriser à envoyer un ping à une adresse de diffusion (broadcast).|
|`-B`|Ne pas autoriser ping à changer l'adresse source des essais. L'adresse est liée à celle sélectionnée au démarrage de ping.|
|`-c nombre`|Arrêter après avoir envoyé nombre paquets `ECHO_REQUEST`. Avec l'option échéance, ping attend pour nombre paquets `ECHO_REPLY`, jusqu'à ce que le délai expire.|
|`-C`|Appeler l'appel système `connect()` lors de la création de socket.|
|`-d`|Définir l'option `SO_DEBUG` sur le socket utilisé. Généralement, cette option de socket n'est pas utilisée par le noyau Linux.|
|`-D`|Afficher l'horodatage (temps Unix + les microsecondes comme dans `gettimeofday`) avant chaque ligne.|
|`-e identifiant`|Définir le champ d'identification de `ECHO_REQUEST`. La valeur `0` implique l'usage de socket `raw` (non géré par le socket de datagrammes ICMP). La valeur du champ peut être affichée avec l'option `-v`.|
|`-f`|Mode inondation (flood ping). Pour chaque `ECHO_REQUEST` envoyé, un point ("`.`") est affiché, alors que pour chaque `ECHO_REPLY` reçu un effacement arrière (backspace) est affiché. Cela fournit un affichage rapide de combien de paquets ont été abandonnés. S'il n'y a pas d'intervalle donné, l'intervalle est défini à zéro et ping renvoie les paquets aussi vite qu'ils reviennent ou cent fois par seconde, selon le plus rapide. Seul le superutilisateur peut utiliser cette option avec un intervalle de zéro.|
|`-F flow label`|Seulement pour IPv6. Allouer et inscrire une étiquette de flux de 20 bits (en hexadécimal) sur les paquets `ECHO_REQUEST`. Si la valeur est zéro, le noyau alloue une étiquette de flux aléatoire.|
|`-h`|Afficher l'aide.|
|`-H`|Forcer une résolution de nom DNS pour la sortie. Utile pour une destination numérique ou pour l'option `-f` qui par défaut ne fait pas de résolution de nom ; peut aider à la recherche de résolution de problèmes DNS et écrase une option `-n` précédemment définie. Voir aussi la variable d'environnement `IPUTILS_PING_PTR_LOOKUP`.|
|`-i intervalle`|Attendre intervalle secondes entre l'envoi de chaque paquet. Les nombres réels sont autorisés avec un point comme séparateur de décimales (indépendamment du réglage des paramètres régionaux). L'attente par défaut est d'une seconde entre chaque paquet ou aucune attente en mode inondation. Seul le superutilisateur peut définir l'intervalle à une valeur inférieure à 2 ms. Les ping à une adresse de diffusion et multidestinataires (multicast) ont des limites encore plus élevées pour un utilisateur ordinaire : le minimum est 1 seconde.|
|`-I interface`|L'interface est soit une adresse, un nom d'interface ou un nom VRF. Si l'interface est une adresse, son adresse source est définie par l'adresse de l'interface spécifiée. Si l'interface est un nom d'interface, son interface source est définie à l'interface spécifiée. Si l'interface est un nom VRF, chaque paquet est routé en utilisant la table de routage correspondante ; dans ce cas, l'option `-I` peut être répétée pour spécifier une adresse source. NOTE : Pour IPv6, lors d'un ping à une adresse de portée liaison locale, la spécification de la liaison (par la notation "`%`" dans destination ou par cette option) peut être utilisée, mais n'est plus nécessaire.|
|`-l préchargement`|Si préchargement est spécifié, ping envoie plusieurs paquets sans attendre de réponse. Seul le superutilisateur peut sélectionner un préchargement supérieur à trois.|
|`-L`|Enlever la boucle locale (loopback) des paquets multidestinataires (multicast). Cette option ne s'applique que si la destination du ping est une adresse multidestinataire.|
|`-m marque`|Utiliser marque pour étiqueter les paquets sortants. Cela est utile pour diverses raisons dans le noyau comme l'utilisation du routage selon la politique pour sélectionner un traitement spécifique des sorties. L'attribut `CAP_NET_ADMIN` ou `CAP_NET_RAW` (depuis Linux 5.17) est nécessaire (voir socket(7)).|
|`-M pmtudisc_opt`|Sélectionner la stratégie de découverte du chemin MTU (Path MTU Discovery). L'option `pmtudisc_option` peut être soit `do` (positionner un drapeau DF mais sujet à des vérifications de chemin MTU par le noyau, les paquets trop grands seront rejetés), soit `want` (faire la découverte du chemin MTU, fragmenter localement quand le paquet est grand), `probe` (positionner un drapeau DF et contourner les vérifications de chemin MTU, utile pour la détection) ou `dont` (ne pas positionner de drapeau DF).|
|`-N nodeinfo_option`||
|`-n`|Sortie numérique uniquement. Aucune tentative de recherche de noms symboliques pour les adresses d'hôte ne sera faite (pas de résolution inverse de DNS). C'est le comportement par défaut pour une destination numérique ou pour l'option `-f`. Écrase une option `-H` précédemment définie. Voir aussi la variable d'environnement `IPUTILS_PING_PTR_LOOKUP`.|
|`-O`|Rapporter la réponse ICMP `ECHO` en suspens avant d'envoyer le paquet suivant. Cela est utile avec l'horodatage `-D` pour enregistrer la sortie dans un fichier de diagnostic et rechercher les réponses manquantes.|
|`-p motif`|Vous pouvez spécifier jusqu'à 16 octets de "`pad`" pour remplir le paquet que vous envoyez. Cela est utile pour diagnostiquer les problèmes dépendant des données dans un réseau. Par exemple, `-p ff` fera en sorte que le paquet envoyé soit rempli avec des 1.|
|`-q`|Sortie silencieuse. Rien n'est affiché à part les lignes de résumé au démarrage et à la fin de l'exécution.|
|`-Q tos`|Définir la qualité de service, relative aux bits dans les datagrammes ICMP. `tos` peut être un nombre décimal (ping seulement) ou hexadécimal.<br/>Dans la RFC2474, ces champs sont interprétés comme un champ de 8 bits destiné aux services différenciés (Differentiated Services, DS), constitué des bits 0-1 (les deux bits les plus faibles) de données indépendantes, et des bits 2-7 (les six bits les plus forts) du Differentiated Services Codepoint (DSCP). Dans les RFC2481 et RFC3168, les bits 0-1 sont utilisés pour l'ECN (NdT : Explicit Congestion Notification, notification explicite de congestion).<br/>Historiquement (la RFC1349, rendue obsolète par la RFC2474), l'interprétation était la suivante : le bit 0 (bit le plus faible) est réservé (actuellement en cours de redéfinition pour le contrôle de congestion), 1-4 pour le type de service (Type of Service, ToS), et les bits 5-7 (bits les plus forts) pour la Priorité.|
|`-r`|Ne pas utiliser les tables de routage normales et envoyer les paquets directement à un hôte présent sur une interface directement connectée. Si l'hôte n'est pas situé dans un réseau directement connecté, une erreur est renvoyée. Cette option peut être utilisée pour envoyer un ping à un hôte local au travers d'une interface ne faisant partie d'aucune route à condition que l'option `-I` soit également utilisée.|
|`-R`|ping seulement. Enregistrer la route. Inclut l'option `RECORD_ROUTE` dans le paquet `ECHO_REQUEST` et affiche le tampon de la route dans les paquets renvoyés. Notez que l'en-tête IP ne peut contenir au plus que neuf de ces routes. Beaucoup d'hôtes ignorent ou désactivent cette option.|
|`-s taille_paquet`|Spécifier le nombre d'octets de données à envoyer. Le nombre par défaut est 56, ce qui se traduit en 64 octets de données ICMP quand ils sont combinés avec les 8 octets de données de l'en-tête ICMP. La valeur maximale autorisée pour IPv4 est 65507 (65467 avec `-R` ou `-T` ou des sauts intermédiaires) ou 65527 pour IPv6, mais la plupart des systèmes limitent cette taille à une valeur plus basse en fonction du système.|
|`-S tampon_émission`|Définir le tampon d'émission du socket. S'il n'est pas spécifié, il n'est pas mis en mémoire tampon plus d'un paquet.|
|`-t ttl`|ping seulement. Spécifier le champ IP Time to Live.|
|`-T horodatage option`|Définir les options d'horodatage d'IP spéciales. horodatage option peut être soit `tsonly` (seulement les horodatages), `tsandaddr` (horodatages et adresses) ou `tsprespec hôte1 [hôte2 [hôte3 [hôte4]]]` (sauts prédéterminés d'horodatage).|
|`-U`|Afficher le temps de latence total utilisateur-à-utilisateur (l'ancien comportement). Normalement ping affiche le RTT (round trip time) du réseau, qui peut être différent par exemple à cause d'échecs du DNS.|
|`-v`|Sortie loquace. Ne pas supprimer les réponses DUP (paquets dupliqués) lors de l'envoi d'un ping sur une adresse multidestinataire.|
|`-V`|Afficher la version et quitter.|
|`-w échéance`|Spécifier un délai, en secondes, avant que ping ne quitte indépendamment de combien de paquets ont été envoyés ou reçus. Dans ce cas ping ne stoppe pas après que nombre paquets ont été envoyés, il attend soit que l'échéance expire ou que nombre essais aient reçu une réponse, ou encore qu'une notification d'erreur provienne du réseau.|
|`-w délai`|Temps d'attente d'une réponse, en secondes. L'option ne concerne que le délai en l'absence d'une quelconque réponse, sinon ping attend deux RTT. Les nombres réels sont autorisés avec un point comme séparateur de décimales (indépendamment du réglage des paramètres régionaux). `0` signifie un délai infini.|

----

## VALEUR RENVOYEE

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|L'exécution de la commande a abouti.|
|`1`|Ping ne reçoit aucun paquet en réponse.|
|`2`|Erreur|

----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|``||

----

## MAN

- [man](https://manpages.debian.org/testing/manpages-fr/ping.8.fr.html)

C'est possible d'avoir la page `man` avec la commande : 

<span class="code_language">Shell</span>

```shell
man ping
```

ou

<span class="code_language">Shell</span>

```shell
ping --help
```

----

## EXEMPLES

### exemple01

<span class="code_language">Shell</span>

```shell
%nom_commande%
```

<span class="code_language">Sortie</span>

```text

```

----

### exemple02

<span class="code_language">Shell</span>

```shell
%nom_commande%
```

<span class="code_language">Sortie</span>

```text

```

----
