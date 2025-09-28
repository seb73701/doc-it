---
title: ss (man)
description: (vide)
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - ss
tags: [beta,os,commandes,linux,ss,network,reseau,man]
---

----

## NOM

`ss` (_Socket Statistics_) est un outil moderne qui remplace `netstat`, offrant plus d'informations et étant plus rapide. Il est utilisé pour afficher des informations détaillées sur les différents sockets.

----

## SYNOPSIS

<span class="code_language">Shell</span>

```shell
ss [OPTIONS] [ FILTRE ]
```

----

## DESCRIPTION

`ss` est utilisé pour afficher les statistiques des sockets. Il permet d'afficher des informations similaires à celles de `netstat`. Il peut afficher plus d'informations TCP et d'état que d'autres outils.

----

## OPTIONS

Lorsque aucune option n'est utilisée, `ss` affiche une liste des sockets ouverts non en écoute (par exemple TCP/UNIX/UDP) qui ont établi une connexion.

|Options|Description|
|:------|:----------|
|`-h`, `--help`|Afficher le résumé des options.|
|`-V`, `--version`|Afficher les informations sur la version.|
|`-n`, `--numeric`|Essayez maintenant de résoudre les noms de service.|
|`-r`, `--resolve`|Essayez de résoudre les adresses/ports numériques.|
|`-a`, `--all`|Afficher toutes les sockets|
|`-l`, `--listening`|Afficher les sockets d'écoute.|
|`-o`, `--options`|Afficher les informations relatives au minuteur.|
|`-e`, `--extended`|Afficher les informations détaillées sur la socket|
|`-m`, `--memory`|Afficher l'utilisation de la mémoire du socket.|
|`-p`, `--processes`|Afficher les processus utilisant le socket.|
|`-T`, `--threads`|Afficher les threads utilisant le socket.|
|`-i`, `--info`|Afficher les informations TCP internes.|
|`--tipcinfo`|Affiche les informations tipc du socket|
|`-s`, `--summary`|Imprimer les statistiques récapitulatives. Cette option n'analyse pas les listes de sockets obtenues à partir de diverses sources. Elle est utile lorsque le nombre de sockets est si important que l'analyse de `/proc/net/tcp` s'avère fastidieuse.|
|`--tos`|Show tos and priority information|
|`--cgroup`|Show cgroup information|
|`-b`, `--bpf`|Show bpf filter socket information|
|`-E`, `--events`|continually display sockets as they are destroyed|
|`-Z`, `--context`|display task SELinux security contexts|
|`-z`, `--contexts`|display task and socket SELinux security contexts|
|`-N`, `--net`|switch to the specified network namespace name|
|`-4`, `--ipv4`|Afficher uniquement les sockets IP version 4 (alias pour `-f inet`).|
|`-6`, `--ipv6`|Afficher uniquement les sockets IP version 6 (alias pour `-f inet6`).|
|`-0`, `--packet`|Afficher uniquement les sockets PACKET.|
|`-t`, `--tcp`|Afficher uniquement les sockets TCP.|
|`-M`, `--mptcp`|Afficher uniquement les sockets MPTCP.|
|`-S`, `--sctp`|Afficher uniquement les sockets SCTP.|
|`-u`, `--udp`|Afficher uniquement les sockets UDP.|
|`-d`, `--dccp`|Afficher uniquement les sockets DCCP.|
|`-w`, `--raw`|Afficher uniquement les sockets RAW.|
|`-x`, `--unix`|Afficher uniquement les sockets de domaine Unix|
|`--tipc`|Affiche uniquement les sockets TIPC.|
|`--vsock`|Affiche uniquement les sockets vsock.|
|`--xdp`|Affiche uniquement les sockets XDP.|
|`-f FAMILLE`, `--family=FAMILLE`|Afficher les sockets de type `FAMILLE`. Actuellement, les familles suivantes sont prises en charge : `unix`, `inet`, `inet6`, `link`, `netlink`, `vsock`, `tipc`, `xdp`|
|`-K`, `--kill`|forcibly close sockets, display what was closed|
|`-H`, `--no-header`|Suppress header line|
|`-O`, `--oneline`|socket's data printed on a single line|
|`--inet-sockopt`|show various inet socket options|
|`-A QUERY`, `--query=QUERY`, `--socket=QUERY`|Liste des tables de sockets à vider, séparées par des virgules. Les identifiants suivants sont compris : `all`, `inet`, `tcp`, `mptcp`, `udp`, `raw`, `unix`, `packet`, `netlink`, `unix_dgram`, `unix_stream`, `packet_raw`, `packet_dgram`, `unix_seqpacket`, `dccp`, `sctp`, `vsock_stream`, `vsock_dgram`, `tipc`, `xdp`.|
|`-D FICHIER`, `--diag=FICHIER`|N'affichez rien, contentez-vous de transférer les informations brutes concernant les sockets TCP vers `FICHIER` après avoir appliqué les filtres.|
|`-F FICHIER`, `--filter=FICHIER`|Lire les informations de filtre à partir du `FICHIER`. Chaque ligne du `FICHIER` est interprétée comme une option de ligne de commande unique.|
|`FILTER := [ state TCP-STATE ] [ EXPRESSION ]`|Veuillez consulter la documentation officielle (paquet Debian iproute-doc) pour plus de détails concernant les filtres.|

|Options|Description|
|:------|:----------|
|`STATE-FILTER`|`all`, `connected`, `synchronized`, `bucket`, `big`, `TCP-STATES`|

|Options|Description|
|:------|:----------|
|`TCP-STATES`|`established`, `syn-sent`, `syn-recv`, `fin-wait-{1,2}`, `time-wait`, `closed`, `close-wait`, `last-ack`, `listening`, `closing`|

|Options|Description|
|:------|:----------|
|`connected`|`established`, `syn-sent`, `syn-recv`, `fin-wait-{1,2}`, `time-wait`, `close-wait`, `last-ack`, `closing`|

|Options|Description|
|:------|:----------|
|`synchronized`|`established`, `syn-recv`, `fin-wait-{1,2}`, `time-wait`, `close-wait`, `last-ack`, `closing`|

|Options|Description|
|:------|:----------|
|`bucket`|`syn-recv`, `time-wait`|

|Options|Description|
|:------|:----------|
|`big`|`established`, `syn-sent`, `fin-wait-{1,2}`, `closed`, `close-wait`, `last-ack`, `listening`, `closing`|

## OPTIONS 1

```text
Lorsque aucune option n'est utilisée, ss affiche une liste des sockets ouverts non en écoute (par exemple TCP/UNIX/UDP) qui ont établi une connexion.

-h, --help
        Afficher le résumé des options.

-V, --version
        Afficher les informations sur la version.

-H, --no-header
        Supprimer la ligne d'en-tête.

-O, --oneline
        Imprimez les données de chaques sockets sur une seule ligne.

-n, --numeric
        N'essayez pas de résoudre les noms de service. Affichez les valeurs exactes de bande passante, plutôt que celles lisibles par l'utilisateur.

-r, --resolve
        Essayez de résoudre les adresses/ports numériques.

-a, --all
        Affichez les sockets en écoute et celles qui ne sont pas en écoute (pour TCP, cela signifie les connexions établies).

-l, --listening
        Afficher uniquement les sockets d'écoute (elles sont omises par défaut).

-o, --options
        Afficher les informations relatives au minuteur. Pour le protocole TCP, le format de sortie est le suivant :

        timer:(<timer_name>,<expire_time>,<retrans>)

        <timer_name>
                le nom du minuteur, il existe cinq types de noms de minuteurs :

                on  : désigne l'un des temporisateurs suivants : temporisateur de retransmission TCP, temporisateur de retransmission anticipée TCP et temporisateur de détection de perte de queue.

                keepalive: Temporisateur de maintien de connexion TCP

                timewait: minuterie de phase d'attente

                persist: Temporisateur de sonde à fenêtre zéro

                unknown: aucun des minuteurs ci-dessus

        <expire_time>
                aucun des minuteurs ci-dessus

        <retrans>
                combien de fois la retransmission a eu lieu

-e, --extended
        Afficher les informations détaillées sur les sockets. Le format de sortie est le suivant :

        uid:<uid_number> ino:<inode_number> sk:<cookie>

        <uid_number>
                l'identifiant utilisateur auquel appartient le socket

        <inode_number>
                le numéro d'inode de la prise dans VFS

        <cookie>
                l'UUID du socket

-m, --memory
        Afficher l'utilisation de la mémoire socket. Le format de sortie est le suivant :

        skmem:(r<rmem_alloc>,rb<rcv_buf>,t<wmem_alloc>,tb<snd_buf>,
                    f<fwd_alloc>,w<wmem_queued>,o<opt_mem>,
                    bl<back_log>,d<sock_drop>)

        <rmem_alloc>
                la mémoire allouée pour la réception des paquets

        <rcv_buf>
                la mémoire totale peut être allouée pour la réception de paquets

        <wmem_alloc>
                la mémoire utilisée pour envoyer le paquet (qui a été envoyé à la couche 3)

        <snd_buf>
                La mémoire totale peut être allouée pour l'envoi de paquets.

        <fwd_alloc>
                la mémoire allouée par le socket en tant que cache, mais qui n'est pas encore utilisée pour recevoir/envoyer des paquets.
                Si de la mémoire est nécessaire pour envoyer/recevoir des paquets, la mémoire de ce cache sera utilisée avant d'allouer de la mémoire supplémentaire.

        <wmem_queued>
                La mémoire allouée pour l'envoi de paquets (qui n'ont pas été envoyés à la couche 3)

        <opt_mem>
                La mémoire utilisée pour stocker les options de socket, par exemple la clé pour la signature TCP MD5.

        <back_log>
                Mémoire utilisée pour la file d'attente sk backlog. Dans un contexte de processus, si le processus reçoit un paquet
                et qu'un nouveau paquet est reçu, celui-ci sera placé dans la file d'attente sk backlog afin qu'il puisse
                être reçu immédiatement par le processus.

        <sock_drop>
                le nombre de paquets perdus avant leur démultiplexage dans le socket

-p, --processes
        Afficher le processus à l'aide d'un socket.

-T, --threads
        Afficher le fil à l'aide d'une socket. Implique -p.  -p.

-i, --info
        Afficher les informations TCP internes. Les champs suivants peuvent apparaître :

        ts     afficher la chaîne « ts » si l'option d'horodatage est activée

        sack   afficher la chaîne « sack » si l'option sack est activée

        ecn    afficher la chaîne « ecn » si l'option de notification explicite de congestion est activée

        ecnseen
                afficher la chaîne « ecnseen » si le drapeau ecn est trouvé dans les paquets reçus

        fastopen
                afficher la chaîne « fastopen » si l'option fastopen est activée

        cong_alg
                le nom de l'algorithme de congestion, l'algorithme de congestion par défaut est « cubic »

        wscale:<snd_wscale>:<rcv_wscale>
                si l'option d'échelle de fenêtre est utilisée, ce champ affiche le facteur d'échelle d'envoi  et  le  facteur d'échelle de réception.

        rto:<icsk_rto>
                Valeur du délai de retransmission TCP, l'unité est le milliseconde.

        backoff:<icsk_backoff>
                utilisé  pour  la retransmission avec délai exponentiel, la valeur réelle du délai de retransmission est
                icsk_rto << icsk_backoff

        rtt:<rtt>/<rttvar>
                rtt est le temps aller-retour moyen, rttvar est l'écart moyen de rtt,  leurs  unités  sont
                millisecondes

        ato:<ato>
                Délai d'accusé de réception, unité en millisecondes, utilisé pour le mode d'accusé de réception différé

        mss:<mss>
                taille maximale du segment

        cwnd:<cwnd>
                taille de la fenêtre de congestion

        pmtu:<pmtu>
                valeur MTU du chemin

        ssthresh:<ssthresh>
                Seuil de démarrage lent de la fenêtre de congestion TCP

        bytes_acked:<bytes_acked>
                octets confirmés

        bytes_received:<bytes_received>
                octets reçus

        segs_out:<segs_out>
                segments envoyés

        segs_in:<segs_in>
                segments reçus

        send <send_bps>bps
                débit sortant en bits par seconde

        lastsnd:<lastsnd>
                Combien de temps s'est écoulé depuis l'envoi du dernier paquet, l'unité est le milliseconde.

        lastrcv:<lastrcv>
                Combien de temps s'est écoulé depuis la réception du dernier paquet, l'unité est le milliseconde.

        lastack:<lastack>
                Combien de temps s'est écoulé depuis la dernière confirmation reçue, l'unité est le milliseconde.

        pacing_rate <pacing_rate>bps/<max_pacing_rate>bps
                la fréquence de stimulation et la fréquence maximale de stimulation

        rcv_space:<rcv_space>
                Une variable d'aide pour le réglage automatique interne TCP du tampon de réception du socket.

        tcp-ulp-mptcp flags:[MmBbJjecv] token:<rem_token(rem_id)/loc_token(loc_id)> seq:<sn> sfseq:<ssn>
        ssnoff:<off> maplen:<maplen>
                Informations sur le sous-flux MPTCP

--tos  Afficher les conditions d'utilisation et les informations prioritaires. Les champs suivants peuvent apparaître :

        tos    Octet de type de service IPv4

        tclass Octet de classe de trafic IPv6

        class_id
                Identifiant de classe défini par net_cls cgroup. Si la classe est égale à zéro, cela indique la priorité définie par SO_PRIORITY.

--cgroup
        Afficher les informations sur les cgroups. Les champs suivants peuvent apparaître :

        cgroup Chemin d'accès cgroup v2. Ce chemin d'accès est relatif au point de montage de la hiérarchie.

--tipcinfo
        Afficher les informations internes sur la prise tipc.

        -K, --kill
                Tente de fermer de force les sockets. Cette option affiche les sockets qui ont été fermées avec succès
                et ignore silencieusement les sockets dont le noyau ne prend pas en charge la fermeture. Elle ne prend en charge que les sockets IPv4 et IPv6.
                    

        -s, --summary
                Imprimer les statistiques récapitulatives. Cette option n'analyse pas les listes de sockets obtenues à partir de
                diverses sources. Elle est utile lorsque le nombre de sockets est si important que l'analyse de  /proc/net/tcp
                s'avère fastidieuse.

        -E, --events
                Afficher en continu les prises au fur et à mesure qu'elles sont détruites

        -Z, --context
                Comme l'option -p, mais affiche également le contexte de sécurité du processus. Si l'option -T est utilisée, affiche également le contexte de sécurité du thread.

                Pour les sockets netlink(7), le contexte du processus initiateur s'affiche comme suit :

                    1.  Si le pid est valide, affichez le contexte du processus.

                    2.  Si la destination est le noyau (pid = 0), afficher le contexte initial du noyau.

                    3.  Si un identifiant unique a été attribué par le noyau ou l'utilisateur  netlink , affichez
                        le contexte  comme  « indisponible ». Cela indique généralement qu'un processus a plus
                        d'une socket netlink active.

        -z, --contexts
                Comme l'option -Z, mais affiche également le contexte du socket. Le contexte du socket est  tiré  de l'
                inode associé et n'est pas le contexte réel du socket détenu par le noyau. Les sockets sont
                généralement étiquetés avec le contexte du processus de création, mais le contexte affiché  reflète
                toutes les règles de transition de rôle, de type et/ou de plage appliquées, et constitue donc une
                référence utile.

        -N NSNAME, --net=NSNAME
                Switch to the specified network namespace name.

        -b, --bpf
                Show socket classic BPF filters (only administrators are allowed to get these information).

        -4, --ipv4
                Display only IP version 4 sockets (alias for -f inet).

        -6, --ipv6
                Display only IP version 6 sockets (alias for -f inet6).

        -0, --packet
                Display PACKET sockets (alias for -f link).

        -t, --tcp
                Display TCP sockets.

        -u, --udp
                Display UDP sockets.

        -d, --dccp
                Display DCCP sockets.

        -w, --raw
                Display RAW sockets.

        -x, --unix
                Display Unix domain sockets (alias for -f unix).

        -S, --sctp
                Display SCTP sockets.

        --tipc Display tipc sockets (alias for -f tipc).

        --vsock
                Display vsock sockets (alias for -f vsock).

        --xdp  Display XDP sockets (alias for -f xdp).

        -M, --mptcp
                Display MPTCP sockets.

        --inet-sockopt
                Display inet socket options.

        -f FAMILY, --family=FAMILY
                Display sockets of type FAMILY.  Currently the  following  families  are  supported:  unix,
                inet, inet6, link, netlink, vsock, tipc, xdp.

        -A QUERY, --query=QUERY, --socket=QUERY
                List  of  socket  tables  to  dump,  separated  by  commas.  The  following identifiers are
                understood: all, inet, tcp, udp,  raw,  unix,  packet,  netlink,  unix_dgram,  unix_stream,
                unix_seqpacket, packet_raw, packet_dgram, dccp, sctp, tipc, vsock_stream, vsock_dgram, xdp,
                mptcp.  Any  item  in  the  list  may optionally be prefixed by an exclamation mark (!)  to
                exclude that socket table from being dumped.

        -D FILE, --diag=FILE
                Do not display anything, just dump raw information about TCP sockets to FILE after applying
                filters. If FILE is - stdout is used.

        -F FILE, --filter=FILE
                Read filter information from FILE.  Each line of FILE is interpreted  like  single  command
                line option. If FILE is - stdin is used.

        FILTER := [ state STATE-FILTER ] [ EXPRESSION ]
                Please take a look at the official documentation for details regarding filters.
```



----

## RESULTATS

Correspondance des colonnes lors de la sortie de commande :

|Nom|Description|
|:------|:----------|
|`Netid`|Type de socket et de protocol utilisé (par exemple, udp, tcp, etc.). Cela peut aussi inclure des indications sur le type de socket comme '`u`' pour UDP ou '`t`' pour TCP.|
|`State`|L'état actuel du socket. Pour UDP, l'état est souvent `UNCONN` (non connecté), car UDP est un protocole sans connexion. Pour TCP, vous pourriez voir des états comme `LISTEN` (l'interface écoute pour les connexions entrantes), `ESTABLISHED` (la connexion a été établie), entre autres.|
|`Recv-Q`|La file d'attente de réception. Cela indique le nombre d'octets non lus par l'application locale. Pour UDP, cela signifie les données reçues qui n'ont pas été traitées par l'application. Pour TCP, cela indique les données reçues confirmées mais pas encore récupérées par l'application.|
|`Send-Q`|La file d'attente d'envoi. CEla représente le nombre  d'octets non encore transmis par le réseau ou confirmés par le destinataire.|
|`Local Address:Port`|L'adresse IP locale et le port utilisés par le socket. Une adresse IP de "`0.0.0.0`" signifie que le socket est lié à toutes les adresses IP disponibles pour écouter les connexions entrantes. "`::`" fait référence à la même chose en IPv6.|
|`Peer Address:Port`|L'adresse IP distante et le port associés au socket. Pour les sockets en état d'écoute (`LISTEN`), c'est souvent `0.0.0.0:*` ou `[::]:*`, indiquant qu'ils peuvent accepter des connexions de n'importe quelle adresse IP distante.|
|`Process`|Ce champ indiquerait l'identifiant du processus (PID) et le nom du processus qui a crée le socket. Il n'est pas visible dans la sortie affichée, ce qui peut être dû au fait que l'option `-p` (qui montre le PID et le nom du processus) n'est pas utilisée, ou parce que la capture d'écran ne montre pas cette partie.|

----

## BOGUES



----

## VOIR AUSSI

`ip`(8),

RFC 793 - https://tools.ietf.org/rfc/rfc793.txt (TCP states)

----

## HISTORIQUE



----

## SÉCURITÉ



----

## DISPONIBILITÉ

`ss` fait partie du paquet `iproute2`.

----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|`/usr/bin/ss`|Chemin du binaire|

----

## VALEUR RENVOYEE

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|L'exécution de la commande a abouti.|
|`>0`|Une erreur s'est produite.|

----

## SOURCES

- https://manpages.ubuntu.com/manpages/noble/en/man8/ss.8.html