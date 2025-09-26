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

### Il existe des options supplémentaires destinées à une utilisation avancée (telles que des méthodes de traçage alternatives, etc.)

|Options|Description|
|:------|:----------|
|`--sport=port`|Choisit le port source à utiliser. Implique `-N 1 -w 5`. Normalement, les ports sources (le cas échéant) sont choisis par le système.|
|`--fwmark=mark`|Définir le marquage du pare-feu pour les paquets sortants (depuis le noyau Linux 2.6.25).|
|`-M method`, `--module=name`|Utilisez la méthode spécifiée pour les opérations `traceroute`. La méthode `udp` traditionnelle par défaut porte le nom `default`, `icmp` (`-I`) et `tcp` (`-T`) portent respectivement les noms `icmp` et `tcp`. Les options spécifiques à la méthode peuvent être transmises par `-O` . La plupart des méthodes ont leurs raccourcis simples (`-I` signifie `-M icmp`, etc.).|
|`-O option`, `--options=options`|Spécifie certaines options spécifiques à une méthode. Plusieurs options sont séparées par des virgules (ou utilisez plusieurs `-O` sur la ligne de commande). Chaque méthode peut avoir ses propres options spécifiques, ou n'en avoir aucune. Pour afficher des informations sur les options disponibles, utilisez `-O help`.|
|`-U`, `--udp`|Utilisez UDP vers un port de destination particulier pour le tracerouting (au lieu d'augmenter le port pour chaque sonde). Le port par défaut est `53` (dns).|
|`-UL`|Utilisez `UDPLITE` pour le traceroutage (le port par défaut est `53`).|
|`-D`, `--dccp`|Utilisez les requêtes `DCCP` pour les sondes.|
|`-P protocol`, `--protocol=protocol`|Utilisez le paquet brut du protocole spécifié pour le `traceroute`. Le protocole par défaut est `253` (rfc3692).|
|`--mtu`|Découvrez le MTU le long du chemin tracé. Implique `-F -N 1`. Le nouveau MTU est affiché une fois sous la forme `F=NUM` lors de la première sonde d'un saut qui nécessite d'atteindre ce MTU. (En réalité, le message ICMP "`frag needed`" correspondant est normalement envoyé par le saut précédent).Notez que certains routeurs peuvent mettre en cache les informations vues lors d'une fragmentation. Vous pouvez donc recevoir le MTU final à partir d'un saut plus proche. Essayez de spécifier un `tos` inhabituel avec `-t` , cela peut aider pour une tentative (il peut alors être mis en cache là aussi). Voir l'option `-F` pour plus d'informations.|
|`--back`|Imprimez le nombre de sauts en arrière lorsqu'il semble différent de celui en avant. Ce nombre est estimé en supposant que les sauts distants envoient des paquets de réponse avec un TTL initial défini sur `64`, `128` ou `255` (ce qui semble être une pratique courante). Il est imprimé sous forme de valeur négative sous la forme "`-NUM`".|

### Liste des méthodes disponibles

En général, une méthode `traceroute` particulière peut devoir être choisie par `-M nom`, mais la plupart des méthodes ont leurs propres commutateurs de ligne de commande simples (vous pouvez les voir après le nom de la méthode, s'ils sont présents).

|Name|Description|
|:------|:----------|
|`default`|La méthode traditionnelle et ancienne du `traceroute`. Utilisée par défaut. Les paquets de sondage sont des datagrammes UDP avec des ports de destination dits "improbables" (unlikely). Le port "improbable" (unlikely) de la première sonde est `33434`, puis il est incrémenté d'une unité pour chaque sonde suivante. Comme les ports sont censés être inutilisés, l'hôte de destination renvoie normalement "`icmp unreach port`" comme réponse finale. (Personne ne sait toutefois ce qui se passe lorsqu'une application écoute ces ports). Cette méthode est autorisée pour les utilisateurs non privilégiés.|
|`icmp`, `-I`|Méthode la plus courante à l'heure actuelle, qui utilise des paquets icmp `echo` pour les sondes. Si vous pouvez `ping`(8) l'hôte de destination, le tracerouting icmp est également applicable. Cette méthode peut être autorisée pour les utilisateurs non privilégiés depuis le noyau 3.0 (IPv4, pour IPv6 depuis 3.11), qui prend en charge les nouveaux sockets `dgram icmp` (ou « ping »). Pour autoriser ces sockets, l'administrateur système doit fournir une plage `sysctl net/ipv4/ping_group_range` correspondant à n'importe quel groupe d'utilisateurs.<br/>Options<br/>- `raw` : utilise uniquement les sockets raw (méthode traditionnelle). Cette méthode est essayée en premier par défaut (pour des raisons de compatibilité), puis les nouvelles sockets dgram icmp sont utilisées en secours.<br/>- `dgram` : utilise uniquement les sockets dgram icmp.|
|`tcp`, `-T`|Méthode moderne bien connue, destinée à contourner les pare-feu. Utilise le port de destination constant (la valeur par défaut est `80`, `http`). Si certains filtres sont présents dans le chemin réseau, alors très probablement tous les ports udp "improbables" (unlikely)(comme pour la méthode par défaut) ou même les échos icmp (comme pour icmp) sont filtrés, et tout le tracerouting s'arrêtera simplement à ce pare-feu. Pour contourner un filtre réseau, nous devons utiliser uniquement les combinaisons protocole/port autorisées. Si nous traçons, par exemple, un serveur de messagerie, il est plus probable que `-T -p 25` puisse l'atteindre, même lorsque `-I` ne le peut pas.<br/>Cette méthode utilise la "technique semi-ouverte" bien connue, qui empêche les applications sur l'hôte de destination de voir nos sondes. Normalement, un `tcp syn` est envoyé. Pour les ports non écoutés, nous recevons un `tcp reset`, et tout est terminé. Pour les ports d'écoute actifs, nous recevons un `tcp syn+ack`, mais nous répondons par un `tcp reset` (au lieu du `tcp ack` attendu), de cette façon, la session tcp distante est abandonnée sans même que l'application ne s'en aperçoive.<br/>Il existe plusieurs options pour la méthode tcp :<br/>- `syn,ack`,`fin`,`rst`,`psh`,`urg`,`ece`,`cwr` : définit les indicateurs tcp spécifiés pour le paquet de sonde, dans n'importe quelle combinaison.<br/>- `flags=num` : définit le champ des indicateurs dans l'en-tête tcp exactement à `num`.<br/>- `ecn` : envoie un paquet `syn` avec les indicateurs `TCP ECE` et `CWR` (pour Explicit Congestion Notification, rfc3168).<br/>- `sack`,`timestamps`,`window_scaling` : utilise l'option d'en-tête TCP correspondante dans le paquet de sonde sortant.<br/>- `sysctl` : utilise le paramètre `sysctl (/proc/sys/net/*)` actuel pour les options d'en-tête TCP ci-dessus et `ecn`. Toujours défini par défaut, sauf indication contraire.<br/>- `fastopen` : utilise l'option TCP `fastopen` (lors de `syn`), uniquement pour la négociation initiale du cookie.<br/>- `mss=[num]` : utilise la valeur de `num` (ou inchangée) pour l'option d'en-tête TCP `maxseg` (lors de `syn`) et découvre son clamping le long du chemin tracé. Le nouveau `mss` modifié est imprimé une fois sous la forme `M=NUM` lors de la première sonde sur laquelle il a été détecté. Notez que certains routeurs peuvent renvoyer un fragment original trop court dans le message de dépassement de délai, rendant la vérification impossible. En outre, les réponses peuvent arriver dans un ordre différent. Tout cela peut entraîner un emplacement plus tardif du rapport (l'utilisation de `-N 1` peut aider pour l'ordre).<br/>- `info` : imprime les indicateurs TCP et les options prises en charge des réponses TCP finales lorsque l'hôte cible est atteint. Permet de déterminer si une application écoute le port et d'autres informations utiles. Les options TCP prises en charge sont toutes celles qui peuvent être définies par `-T -O`, c'est-à-dire `mss`, `sack`, `timestamps`, `window_scaling` et `fastopen`, avec un format de sortie similaire (une valeur pour `mss` et simplement la présence pour les autres). Les options par défaut sont `syn`,`sysctl`.|
|`tcpconn`|Une implémentation initiale de la méthode tcp, simple utilisant l'appel `connect`(2), qui ouvre complètement la session tcp. Non recommandée pour une utilisation normale, car l'application de destination est toujours affectée (et peut être perturbée).|
|`udp`, `-U`|Utilisez un datagramme UDP avec un port de destination constant (par défaut `53`, `DNS`).<br/>Conçu pour contourner également le pare-feu.<br/>Notez que, contrairement à la méthode `tcp`, l'application correspondante sur l'hôte de destination reçoit toujours nos sondes (avec des données aléatoires), et la plupart peuvent facilement être déroutées par celles-ci. Dans la plupart des cas, elle ne répondra toutefois pas à nos paquets, nous ne verrons donc jamais le dernier saut dans la trace. (Heureusement, il semble qu'au moins les serveurs dns répondent avec quelque chose de furieux).<br/>Cette méthode est autorisée pour les utilisateurs non privilégiés.|
|`udplite`, `-UL`|Utilisez le datagramme `udplite` pour les sondes (avec un port de destination constant, par défaut `53`). Cette méthode est autorisée pour les utilisateurs non privilégiés.<br/>Options :<br/>- `coverage=num` : définit la couverture d'envoi `udplite` sur `num`.|
|`dccp`, `-D`|Utilisez les paquets de requête DCCP pour les sondes (rfc4340). Cette méthode utilise la même "technique semi-ouverte" que celle utilisée pour TCP. Le port de destination par défaut est `33434`.<br/>Options :<br/>- `service=num` : définit le code de service DCCP sur `num` (la valeur par défaut est `1885957735`).|
|`raw`, `-P proto`|Envoie un paquet brut du protocole `proto`. Aucune en-tête spécifique au protocole n'est utilisée, uniquement l'en-tête IP. Implique `-N 1 -w 5`.<br/>Options :<br/>- `protocol=proto` : utilise le protocole IP `proto` (valeur par défaut `253`).|

### NOTES

Pour accélérer le travail, plusieurs sondes sont généralement envoyées simultanément. D'un autre côté, cela crée une "tempête de paquets", en particulier dans le sens de la réponse. Les routeurs peuvent limiter le débit des réponses icmp, et certaines réponses peuvent être perdues. Pour éviter cela, réduisez le nombre de sondes simultanées, ou même réglez-le sur `1` (comme dans la mise en œuvre initiale de `traceroute`), c'est-à-dire `-N 1`

L'hôte final (cible) peut rejeter certaines des sondes simultanées et peut même ne répondre qu'aux dernières. Cela peut entraîner des sauts supplémentaires "semblant expirés" près du saut final. Nous utilisons un algorithme intelligent pour détecter automatiquement une telle situation, mais si cela ne vous aide pas dans votre cas, utilisez simplement `-N 1` également.

Pour une stabilité encore plus grande, vous pouvez ralentir le travail du programme à l'aide de l'option `-z`, par exemple en utilisant `-z 0,5` pour une pause d'une demi-seconde entre les sondes.

Pour éviter une attente supplémentaire, nous utilisons un algorithme adaptatif pour les délais d'expiration (voir l'option `-w` pour plus d'informations). Cela peut entraîner une expiration prématurée (en particulier lorsque les temps de réponse varient) et l'affichage de "`*`" à la place d'un temps. Dans ce cas, désactivez cet algorithme en spécifiant `-w` avec le délai d'expiration souhaité uniquement (par exemple, `-w 5`).

Si certains sauts ne rapportent rien pour chaque méthode, la dernière chance d'obtenir quelque chose est d'utiliser la commande `ping -R` (IPv4, et pour les 8 sauts les plus proches uniquement).

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

- [man](https://linux.die.net/man/8/traceroute)

C'est possible d'avoir la page `man` avec la commande : 

<span class="code_language">Shell</span>

```shell
man traceroute
```

ou

<span class="code_language">Shell</span>

```shell
traceroute --help
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
traceroute 1.1.1.1
```

<span class="code_language">Sortie</span>

```text
traceroute to 1.1.1.1 (1.1.1.1), 30 hops max, 60 byte packets
 1  172.22.224.1 (172.22.224.1)  0.427 ms  0.375 ms  0.366 ms
 2  GEN8 (192.168.1.1)  0.874 ms  1.086 ms  0.847 ms
 3  * * *
 4  158.254.69.86.rev.sfr.net (86.69.254.158)  6.612 ms  6.604 ms  6.598 ms
 5  one.one.one.one (1.1.1.1)  6.592 ms  7.424 ms  6.903 ms
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
- https://www.ibm.com/docs/fr/aix/7.3.0?topic=analysis-traceroute-command
- http://ptrau.free.fr/internet/cours-reseau/traceroute-linux.htm
- https://www.it-connect.fr/quest-ce-que-le-traceroute/
