---
title: Linux - Liste des commandes
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
tags: [os,commandes,linux]
---

Source : https://manpages.ubuntu.com/manpages/noble/fr/man1/

## Commandes de bases sur le système de fichiers

Linux permet de manipuler les fichiers et dossiers.
Voici les principales commandes.

|Commandes|Actions|
|:--------|:------|
|[`cd` <i class="fa-regular fa-circle-check fa-xs"></i>](cmd/cmd_cd)|Se déplacer dans un répertoire|
|[`ls` <i class="fa-regular fa-circle-check fa-xs"></i>](cmd/cmd_ls)|Lister le contenu d’un répertoire|
|`cmp`|Comparer deux fichiers|
|`cp`|Copier un fichier ou répertoire|
|`diff`|Comparer deux fichiers ligne par ligne et d’afficher la différence entre eux|
|`env`|Exécuter un autre programme dans un environnement personnalisé sans modifier l’environnement actuel|
|`export`|Définir les variables d’environnement|
|`file`|Indiquer le type de fichier|
|`find`|Chercher un fichier dans l’arborescence|
|`ln`|Créer un lien vers un fichier ou dossier|
|`locate`|Rechercher des fichiers (peut ne pas être inclut par défaut)|
|`lsof`|Lister les fichiers ouverts|
|`mkdir`|Créer un dossier|
|`mv`|Déplacer/renommer un fichier ou répertoire|
|`printenv`|Afficher toutes les variables d’environnement|
|`pwd`|Connaître le répertoire de travail courant|
|`rename`|Renommer un fichier selon un pattern|
|`rm`|Supprimer un fichier ou répertoire|
|`rmdir`|Supprimer un dossier|
|`set`|Définir ou annule les variables de l’interpréteur de commandes. Lorsqu’elle est utilisée sans argument, elle affiche une liste de toutes les variables, y compris les variables d’environnement et de l’interpréteur de commandes|
|`split`|Découper un fichier en plusieurs fichiers|
|`stat`|Renvoyer le statut d’un fichier (droits, attributs, propriétaire, …)|
|`touch`|Créer un fichier s’il n’existe pas ou change sa date d’accès s’il existe|
|`umask`|Définir les autorisations et permissions lors de la création d’un fichier ou répertoire|
|`unset`|Supprime les variables de l’interpréteur de commandes et de l’environnement|
|`which`|Renvoyer le chemin d’accès d’un fichier|

## Commandes pour compresser ou décompresser des fichiers

|Commandes|Actions|
|:--------|:------|
|`gzip`|Compresser ou décompresser des fichiers au format gzip|
|`tar`|Permet de regrouper des fichiers ou arborescences de fichiers dans un seul fichier|
|`unzip`|Décompresser des fichiers au format ZIP|
|`zip`|Compresser des fichiers au format ZIP|

## Commandes de bases sur les disques

Avec Linux, vous pouvez créer, modifier, supprimer, étendre ou fusionner des partitions de disques.
Enfin on peut aussi voir l’espace disque utilisé, libre, etc.

|Commandes|Actions|
|:--------|:------|
|`blkid`|Imprimer les attributs du périphérique de bloc (partitions et support de stockage) comme `uuid` et le type de système de fichiers|
|`dd`|`dd` (_data dump_) est une commande Linux qui permet de copier des partitions de disques|
|`df`|Afficher l’espace disque et inode libre|
|`du`|Afficher l’espace utilisé et donne l’occupation disque par dossier|
|`fdisk`|Gérer les disques et partitions de disque|
|`fsadm`|Utilitaire pour redimensionner ou vérifier le système de fichiers sur un périphérique|
|`fsck`|Vérifier et réparer un système de fichiers Linux|
|`hwinfo`|`hwinfo` est un outil d’information matériel à usage général et peut être utilisé pour imprimer la liste des disques et des partitions|
|`lsblk`|Répertorier tous les blocs de stockage, y compris les partitions de disque et les lecteurs optiques|
|`mkfifo`|Créer des tubes nommés (FIFO) avec les NOM donnés|
|`mkfs`|Créer le système de fichiers (ex4, etc)|
|`parted`|Lister et modifier les partitions de disque|

## Commandes de bases sur les textes

Voici les commandes autour de la manipulations de textes.
Très pratique pour manipuler les fichiers textes.

|Commandes|Actions|
|:--------|:------|
|`awk` / `gawk`|Langage de balayage et de traitement des motifs|
|`cat`|Afficher le contenu d’un fichier|
|`cfscript`|Diviser un fichier en plusieurs segments sur la base de lignes de contexte ou de motifs spécifiés|
|`cut`|Supprimer des sections d’un fichier|
|`grep`|Rechercher l’occurrence dans un fichier|
|`head`|Afficher l’entête du fichier|
|`join`|Rejoint les lignes de deux fichiers partageant un champ commun de données.|
|`less`|Comme more mais en plus rapide|
|`look`|Montre les lignes commençant par un pattern|
|`more`|Afficher le contenu d’un fichier page par page|
|`nl`|Écrit chaque fichier sur la sortie standard, avec des numéros de ligne ajoutés|
|`sed`|Recherche/remplacer, substitution de texte|
|`sort`|Trier le flux d’entrée|
|`tail`|Affiche les dernières lignes d’un fichier|
|`tee`|Lit l’entrée standard et l’écrit à la fois dans la sortie standard et dans un ou plusieurs fichiers|
|`tr`|Transforme une liste de caractère en une autre liste|
|[`uniq` <i class="fa-regular fa-circle-check fa-xs"></i>](cmd/cmd_uniq)|Signale ou supprime des lignes répétées dans un fichier.|
|`wc`|Afficher le nombre de lignes d’un fichier texte|

## Commandes de bases pour gérer les utilisateurs

Voici la commandes pour gérer les utilisateurs Linux.

|Commandes|Actions|
|:--------|:------|
|`adduser` ou `useradd`|Ajouter un utilisateur|
|`chage`|Afficher les dates d’expirations d’un utilisateur Linux|
|`chfn`|Modifier le nom complet et les informations associées à un utilisateur|
|`chgrp`|Changer le propriétaire d’un propriétaire|
|`chmod`|Changer les droits sur un fichier ou dossier|
|`chown`|Changer le propriétaire|
|`chpasswd`|Mettre à jour des mots de passe par lot|
|`deluser` ou `userdel`|Supprimer un utilisateur|
|`getent`|Afficher les entrées des bases de données configurées dans le fichier `/etc/nsswitch.conf`|
|`groupmod`|Modifier la configuration d’un groupe utilisateur|
|`groups`|Renvoyer la liste des groupes dont l’utilisateur fait partie|
|`grpconv`|Créer `gshadow` à partir de group et d’un `gshadow` existant|
|`grpunconv`|Créer un groupe à partir de `group` et de `gshadow`, puis supprime `gshadow`|
|`id`|Renvoyer les informations **UID** – **GID** d’un utilisateur|
|`login`|Démarrer une session sur le système|
|`logname`|Afficher la liste des utilisateurs connectés à une machine|
|`passwd`|Changer le mot de passe d’un utilisateur Linux|
|`pwck`|Vérifier l’intégrité des fichiers de mots de passe|
|`pwconv`|Créer shadow à partir de passwd et d’un shadow éventuellement existant.|
|`pwunconv`|Créer passwd à partir de passwd et shadow, puis supprime shadow.|
|`su`|`su` (_switch user_) est une commande qui permet de s’identifier avec un autre utilisation ou passer une commande avec un autre utilisateur|
|`sudo`|Exécuter une commande avec un autre utilisateur|
|`sulogin`|sulogin est invoqué par init lorsque le système passe en mode mono-utilisateur|
|`userdel`|Supprimer un utilisateur|
|`usermod`|Modifier un compte utilisateur|
|`users`|Montrer le nom d’utilisateur courant|
|`w`|Afficher les utilisateurs présents sur le système et leur activité|
|`who`|Afficher la liste des utilisateurs connectés à une machine (ordinateur)|
|`whoami`|Afficher la liste des utilisateurs connectés à une machine (ordinateur)|

## Commandes informations matériels

Il existe toutes sortes de commandes Linux pour obtenir des informations matériels de votre PC. Les voici.

|Commandes|Actions|
|:--------|:------|
|`dmidecode`|Afficher les informations système par une extraction des structures de données SMBOIS|
|`free`|Afficher la mémoire utilisée et libre|
|`hdparm`|Permet d’obtenir des informations sur les supports de stockage (disque/SSD)|
|`hwinfo`|Afficher des informations très détaillées sur les périphériques d’un ordinateur|
|`lscpu`|Afficher les informations du processeur (CPU)|
|`lshw`|Afficher des informations très détaillées sur les périphériques d’un ordinateur|
|`lspci`|Répertorier tous les bus pci et les détails sur les périphériques qui y sont connectés.|
|`lsscsi`|Lister les périphériques SCSI|
|`lsusb`|Lister les périphériques USB|
|`watch`|Exécuter périodiquement une autre commande ou un script et d’afficher sa sortie en temps réel|


## Commandes de bases sur les processus

Et bien sûr les commandes Linux pour manipuler les processus.

|Commandes|Actions|
|:--------|:------|
|`bg`|Passer un processus en tache de fond (background)|
|`disown`|Supprimer des travaux ou pour indiquer à l’interpréteur de commandes de ne pas envoyer de signal HUP|
|`fg`|Pour reprendre un processus arrêté en arrière plan|
|`kill`|Envoyer un signal à un processus pour le tuer|
|`nice`|Démarrer un processus avec une priorité définis|
|`nohup`|Continuer l’exécution d’une commande en arrière-plan après la fermeture du shell|
|`pgrep`|Parcourt les processus en cours d’exécution et affiche sur la sortie standard les PID qui correspondent aux critères de sélection donnés.|
|`pidof`|Donne le PID d’un processus|
|`pkill`|Envoie le signal indiqué (SIGTERM par défaut) à chaque processus au lieu de les afficher sur la sortie standard|
|`ps`|Lister les processus|
|`pwait`|Attend chaque processus au lieu de les lister sur stdout|
|`renice`|Changer la priorité d’un processus en cours d’exécution|
|`top`|Afficher et classe les processus actifs (cpu – mém – temps)|

## Commandes de bases réseaux

Voici quelques commandes réseaux, très utiles pour faire un diagnostic.

|Commandes|Actions|
|:--------|:------|
|`arp`|Afficher et manipuler la table et cache ARP|
|`dig`|Effectuer des requêtes DNS très poussées (à installer)|
|`ethtool`|Interroger ou contrôler le pilote du réseau et les paramètres du matériel|
|`host`|Effectuer des résolutions DNS|
|`hostname`|Afficher et modifier le nom de la machine|
|`hostnamectl`|Changer définitivement le nom de la machine|
|[`ifconfig` <i class="fa-regular fa-circle-check fa-xs"></i>](cmd/cmd_ifconfig)|Lister les interfaces réseaux et afficher la configuration IP|
|`iftop`|Afficher l’utilisation réseaux par interface|
|[`ip` <i class="fa-regular fa-circle-check fa-xs"></i>](cmd/cmd_ip)|Lister les interfaces réseaux et afficher la configuration IP|
|`iptraf`|Afficher l’utilisation réseaux par interface|
|`mtr`|Lancer un `traceroute` en continue et ainsi de visualiser sur quel noeud, les pertes se font.|
|[`netstat` <i class="fa-regular fa-circle-check fa-xs"></i>](cmd/cmd_netstat)|Afficher les connexions établies, en attente, etc|
|`ngrep`|network packet analyzer – Analyser les paquets réseaux|
|`nmap`|Effectuer des scans de ports|
|`nslookup`|Interroger les serveurs de noms Internet de manière interactive|
|[`ping` <i class="fa-regular fa-circle-check fa-xs"></i>](cmd/cmd_ping)|Ping sur un host|
|`resolvectl`|Modifier les serveurs DNS, connaître la configuration DNS et vider le cache DNS|
|`route`|Afficher ou modifier les routes|
|[`ss` <i class="fa-regular fa-circle-check fa-xs"></i>](cmd/cmd_ss)|Afficher les connexions établies, en attente, etc|
|`tcpdump`|Capturer et Analyser les paquets réseaux|
|[`traceroute` <i class="fa-regular fa-circle-check fa-xs"></i>](cmd/cmd_traceroute)|Effectuer un trace route sur un host|


## Commandes téléchargement, transfert de fichiers


|Commandes|Actions|
|:--------|:------|
|`curl`|Commande de transfert HTTP|
|`rsync`|Créer un miroir d’un dossier ou permet de synchroniser des dossiers|
|`scp`|Transfert de fichiers sécurisé via le protocole SSH|
|`wget`|Télécharger des fichiers depuis un serveur WEB|


## Commandes systèmes de base Linux

### Commandes systèmes de base Linux

|Commandes|Actions|
|:--------|:------|
|[`alias`<i class="fa-regular fa-circle-check fa-xs"></i>](cmd/cmd_alias) et [`unalias`<i class="fa-regular fa-circle-check fa-xs"></i>](cmd/cmd_unalias)|Créer et supprimer un alias de commande|
|`apropos`|Afficher la documentation détaillée de certaines commandes et programmes|
|`chroot`|Créer une prison ou changer l’environnement du système|
|`date`|Afficher ou changer la date du système|
|`dconf`|Gérer la base de données `dconf`|
|`echo`|Afficher un texte dans le terminal|
|`gsettings`|Outil en ligne de commande pour interagir avec la base de données `dconf`|
|`halt`|Ordonner l’arrêt du système|
|`help`|Obtenir l’aide d’une commande|
|`history`|Visualiser l’historique des commandes passées|
|`man`|Afficher le manuel d’une commande, fichier|
|`printf`|afficher du texte formaté dans le terminal|
|`reboot`|Redémarrage/rebooter le PC|
|`shutdown`|Arrêter le système|
|`sysctl`|Configurer les options du noyau Linux|
|`uname`|Afficher les informations du noyau Linux|
|`uptime`|Afficher le temps de fonctionnement du système et la charge moyenne|
|`whereis`|Localiser un binaire|
|`which`|Localiser une commande|
|`xargs`|Prend l’entrée standard et la convertit en argument de commande pour une autre commande|


### Les commandes Linux pour passer en veille

|Commandes|Actions|
|:--------|:------|
|`sudo systemctl hibernate`|Mise en veille prolongée (S4) : hibernation|
|`sudo systemctl hybrid-sleep`|Mise en veille hybride (Suspension dans la RAM+Mise en veille prolongée)|
|`sudo systemctl suspend-then-hibernate`|Mode veille basse consommation (S0ix)|
|`sudo systemctl suspend`|Mise en veille simple (S3) : suspension dans la mémoire RAM|


### Services, Daemons et init

|Commandes|Actions|
|:--------|:------|
|`dmesg`|Afficher les messages liés au noyau sur les systèmes UNIX|
|`journalctl`|Visionner les journaux système|
|`service`|Démarrer ou arrêter un service|
|`systemctl`|Gérer les services `systemctl`|
|`update-rc.d`|Configurer le démarrage ou l’arrêt automatique de service au démarrage de la machine ou selon le runlevel|


### Les commandes du noyau Linux

|Commandes|Actions|
|:--------|:------|
|`depmod`|Générer les fichiers `modules.dep` et `map`.|
|`insmod`|Charger un module dans le noyau Linux|
|`lsmod`|Lister les modules chargés du noyaux Linux|
|`modinfo`|Obtenir les informations d’un module|
|`modprobe`|Charger/décharger un module du noyau Linux|
|`rmmod`|Décharger un module du le noyau Linux|


### Les commandes APT

APT est une commande pour gérer les paquets sur les distributions à base de Debian comme Ubuntu ou Mint.

|Commandes|Actions|
|:--------|:------|
|[`apt-file` <i class="fa-regular fa-circle-check fa-xs"></i>](cmd/cmd_apt-file)|Permet de retrouver à quel paquet appartient un fichier.|
|`apt-cache`|Rechercher dans les dépôts|
|`apt-get install`|Installer un paquet|
|`apt-get update`|Mettre à jour le cache local des dépôts|
|`apt-get upgrade`|Mettre à jour la distribution|
|`aptitude`|Autres utilitaires pour gérer les paquets|


### Les commandes Yum / dnf

C’est le logiciel de gestion de paquets pour les distributions Redhat, Fedora, CentOS, etc.

Pour Fedora, il est remplacé aussi par `dnf`.

Voici les principales commandes de `yum` :

|Commandes|Actions|
|:--------|:------|
|`yum downgrade`|Installe une version antérieure du paquet|
|`yum download`|Télécharge un paquet|
|`yum install`|Installer un paquet depuis les dépôts|
|`yum localinstall`|Installer un paquet depuis un fichier RPM|
|`yum remove`|Supprime un paquet installé|
|`yum search`|Cherche un paquet depuis les dépôts|
|`yum upgrade`|Mets à jour les paquets vers la dernière version|

### Les commandes GRUB

|Commandes|Descriptions|
|:--------|:------|
|`grub-install`|Installe Grub sur le disque. Cela restaure les fichiers manquants dans le dossier `grub` mais ne restaurera pas les fichiers supprimés ou corrompus intentionnellement. Le programme `grub-install` génère une image de base GRUB à l’aide de `grub-mkimage` et l’installe sur votre système|
|`grub-mkconfig`|Génère le fichier de configuration `grub.cfg`|
|`grub-mkimage`|Créer une image bootable de GRUB|
|`grub-mkrelpath`|Crée un chemin d’accès au système de fichiers par rapport à la racine de son système de fichiers contenant.|
|`grub-mkrescue`|Créer une image de récupération de GRUB|
|`grub-mount`|Effectue un montage en lecture seule de tout système de fichiers ou image de système de fichiers que GRUB comprend, en utilisant les pilotes de système de fichiers de GRUB via FUSE|
|`grub-probe`|Sonde les informations de périphérique pour un chemin ou un périphérique donné|
|`grub-reboot`|Redémarrer l’appareil sur une entrée spécifique de GRUB|
|`grub-script-check`|prend un fichier de script GRUB (voir Script de type Shell) et le vérifie pour les erreurs de syntaxe, similaires aux commandes telles que `sh -n`. Il peut prendre un chemin comme argument non optionnel; si aucun n’est fourni, il lira à partir de l’entrée standard.|
|`grub-setup`|Configure un appareil pour démarrer à l’aide de GRUB. Cela réinstalle les fichiers GRUB 2 sur la partition montée à l’emplacement approprié et sur le MBR du périphérique désigné.|
|`os-prober`|Détecter la présence d’un système d’exploitation (OS) autre que Linux pour créer le fichier de configuration nécessaire au démarrage. Il est utile dans une installation en Dual-Boot.|
|`update-grub`|Mets à jour la configuration GRUB|


### Gestion de l’audio avec PipeWire

PipeWire est le serveur audio moderne qui remplace PulseAudio et JACK sur de nombreuses distributions.

|Commandes|Descriptions|Exemple|
|:--------|:-----------|:------|
|`pw-cli ls`|Liste les objets gérés par PipeWire (périphériques, flux, etc.).|`pw-cli ls`|
|`wpctl move <flux> <sink>`|Déplace un flux audio vers un autre périphérique.|`wpctl move 123 36`|
|`wpctl set-default <ID>`|Définit le périphérique audio par défaut.|`wpctl set-default 36`|
|`wpctl set-mute <ID> <bool>`|Coupe ou réactive le son (true ou false).|`wpctl set-mute 36 true`|
|`wpctl set-volume <ID> <val>`|Change le volume d’un périphérique ou flux (valeur entre 0.0 et 1.0 ou en pourcentage).|`wpctl set-volume 36 0.5`|
|`wpctl status`|Affiche les périphériques audio et flux en cours.|`wpctl status`|

### Gestion de l’audio avec PulseAudio

PulseAudio était le système audio standard avant PipeWire.

|Commandes|Descriptions|Exemple|
|:--------|:-----------|:------|
|`pactl list short`|Affiche une liste simplifiée des périphériques et flux.|`pactl list short sinks`|
|`pactl list`|Liste tous les périphériques, flux et sources audio disponibles.|`pactl list`|
|`pactl set-default-sink <sink>`|Définit le périphérique de sortie audio par défaut.|`pactl set-default-sink alsa_output`|
|`pactl set-sink-mute <sink> <bool>`|Coupe ou réactive le son d’un périphérique.|`pactl set-sink-mute 0 true`|
|`pactl set-sink-volume <sink> <val>`|Ajuste le volume d’un périphérique (valeur en pourcentage ou ratio).|`pactl set-sink-volume 0 50%`|
|`pavucontrol`|Lance une interface graphique pour gérer les périphériques et flux PulseAudio.|`pavucontrol`|

## Les commandes qui ne sont pas de bases dans Linux

|Commandes|Descriptions|
|:--------|:------|
|`efibootmgr`|Manipuler le gestionnaire de démarrage UEFI (efi bootmanager)|
|`gcc`|Compilateur C et C++ du projet GNU|
|`make`|Utilitaire GNU make pour maintenir des groupes de programmes|

## Les commandes X11 / Xorg

- https://www.malekal.com/liste-commandes-x11/

Sources : 
- https://blog.stephane-robert.info/docs/admin-serveurs/linux/reseaux/
- https://www.ionos.fr/digitalguide/serveur/configuration/commandes-linux/
- https://www.malekal.com/liste-des-commandes-linux/
- https://www.malekal.com/commandes-base-linux/
- https://doc.ubuntu-fr.org/tutoriel/console_ligne_de_commande#cd
- https://fr.linux-terminal.com/?p=7731
- https://manpages.ubuntu.com/manpages/noble/man1/ssh.1.html
- https://blog.lesjeudis.com/commandes-linux-de-base

