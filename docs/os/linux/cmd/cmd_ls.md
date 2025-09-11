---
title: ls
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - ls
tags: [os,commandes,linux,ls]
---

## INFORMATION

`ls` - Afficher le contenu de répertoires

### Man

- [ArchiLinux](https://man.archlinux.org/man/ls.1.fr)
- [Debian](https://manpages.debian.org/bullseye/manpages-fr/ls.1.fr.html)
- [Rocky](https://docs.rockylinux.org/fr/books/admin_guide/03-commands/#la-commande-ls)
- [Ubuntu](https://manpages.ubuntu.com/manpages/questing/fr/man1/ls.1.html)

## EXEMPLES

### Alias

Des alias sont fréquemment positionnés au sein des distributions courantes dans le fichier `~/.bashrc`.
C’est le cas de l’alias `ll` :

<span class="code_language">Shell</span>

```shell
alias ll='ls -l --color=auto'
```

ou taper la commande :

<span class="code_language">Shell</span>

```shell
alias="ls -l"
```

En tapant la commande `ls`, l'affichage renverra comme si l'on avait taper la commande `ls -l`.

Pour supprimer un alias ajouter, il suffit de taper :

<span class="code_language">Shell</span>

```shell
unalias ls
```

### Description des colonnes générées par l'exécution de la commande `ls -lia`

<span class="code_language">Shell</span>

```shell
ls -lia /home
```

<span class="code_language">Sortie</span>

```text
78489 drwx------ 4 rockstar rockstar 4096 25 oct. 08:10 rockstar
```

|Valeur|Information|
|:-----|:----------|
|`78489`|Numéro d’inode.|
|`drwx------`|Type de fichier (`d`) et droits (`rwx------`).|
|`4`|Nombre de sous-répertoires (`.` et `..` inclus). Pour un fichier, il représente le nombre de liens physiques et 1 représente lui-même.|
|`rockstar`|Propriété d'utilisateur.|
|`rockstar`|Appartenance de groupe.|
|`4096`|Pour les fichiers, il affiche la taille du fichier. Pour les répertoires, il montre la valeur fixe de 4096 octets occupée par le nom du fichier. Pour calculer la taille totale d'un répertoire, utilisez `du -sh rockstar/`|
|`25 oct. 08:10`|Date de dernière modification.|
|`rockstar`|Nom du fichier (ou du répertoire).|

----

### Lister les fichiers en ordre inversé (nom)

<span class="code_language">Shell</span>

```shell
ls -r
```

----

### Lister les fichiers cachés

<span class="code_language">Shell</span>

```shell
ls -a
```

----

### Lister les fichiers de `/etc` par ordre de dernière modification

<span class="code_language">Shell</span>

```shell
ls -ltr /etc
```

<span class="code_language">Sortie</span> 

```text
total 1332
-rw-r--r--.  1 root root    662 29 may   2021 logrotate.conf
-rw-r--r--.  1 root root    272 17 may.   2021 mailcap
-rw-------.  1 root root    122 12 may.  2021 securetty
...
-rw-r--r--.  2 root root     85 18 may.  17:04 resolv.conf
-rw-r--r--.  1 root root     44 18 may.  17:04 adjtime
-rw-r--r--.  1 root root    283 18 may.  17:05 mtab
```

----

### Lister les fichiers de `/var` plus gros qu’un méga-octet mais moins qu’un giga-octets

L'exemple ici utilise des commandes avancées `grep` avec des expressions régulières.

<span class="code_language">Shell</span>

```shell
ls -lhR /var/ | grep ^\- | grep -E "[1-9]*\.[0-9]*M"
```

<span class="code_language">Sortie</span>

```text
...
-rw-r--r--. 1 apache apache 1.2M 10 may.  13:02 XB RiyazBdIt.ttf
-rw-r--r--. 1 apache apache 1.2M 10 may.  1 apache apache 1,2M 10 may. 1 apache apache 1.1M 10 may.  1 apache apache 1.2M 10 may.
```

----

### Afficher les droits sur un dossier

Pour connaître les droits sur un dossier, dans notre exemple `/etc`, la commande suivante ne conviendrait pas :

<span class="code_language">Shell</span>

```shell
ls -l /etc
```

<span class="code_language">Sortie</span>

```text
total 1332
-rw-r--r--.  1 root root     44 18 nov.  17:04 adjtime
-rw-r--r--.  1 root root   1512 12 janv.  2010 aliases
-rw-r--r--.  1 root root  12288 17 nov.  17:41 aliases.db
drwxr-xr-x.  2 root root   4096 17 nov.  17:48 alternatives
...
```

La commande ci-dessus affichera par défaut le contenu du dossier. Pour le dossier lui-même, vous pouvez utiliser l'option `-d`.

<span class="code_language">Shell</span>

```shell
ls -ld /etc
```

<span class="code_language">Sortie</span>

```text
drwxr-xr-x. 69 root root 4096 18 nov.  17:05 /etc
```

----

### Trier par taille de fichier, la plus grande en premier

<span class="code_language">Shell</span>

```shell
ls -lhS
```

----

### Formater l'heure/date

<span class="code_language">Shell</span>

```shell
ls -l --time-style="+%Y-%m-%d %m-%d %H:%M" /
```

<span class="code_language">Sortie</span>

```text
total 12378
dr-xr-xr-x. 2 root root 4096 2014-11-23 11-23 03:13 bin
dr-xr-xr-x. 5 root root 1024 2014-11-23 11-23 05:29 boot
```

---

### Ajouter le trailing slash à la fin des dossiers

Par défaut, la commande `ls` n’affiche pas le dernier slash d’un dossier. Dans certains cas, comme pour des scripts par exemple, il est utile de les afficher :

<span class="code_language">Shell</span>

```shell
ls -dF /etc
```

<span class="code_language">Sortie</span>

```text
/etc/
```

---

### Masquer certaines extensions

<span class="code_language">Shell</span>

```shell
ls /etc --hide=*.conf
```

----

### Afficher les inodes

<span class="code_language">Shell</span>

```shell
ls -i
```

----

### Afficher les propriétaires et les groupes en valeur numérique (par leur id, ici 0 et 0)

<span class="code_language">Shell</span>

```shell
ls -ln /boot |head
```

<span class="code_language">Sortie</span>

```text
total 126840
-rw-r--r-- 1 0 0   206361 nov.  11  2019 config-4.19.0-6-amd64
-rw-r--r-- 1 0 0   234587 déc.  31 16:19 config-5.9.0-0.bpo.5-amd64
drwx------ 3 0 0     4096 janv.  1  1970 efi
drwxr-xr-x 6 0 0     1024 janv. 26 11:33 grub
drwxr-xr-x 2 0 0     1024 févr. 11  2020 hd-media
-rw-r--r-- 1 0 0 45555288 août  29 18:37 initrd.img-4.19.0-6-amd64
-rw-r--r-- 1 0 0 51654794 févr.  1 10:24 initrd.img-5.9.0-0.bpo.5-amd64
-r-------- 1 0 0 16777216 mai   31  2019 nuc_buster_luksheader_BU
-r-------- 1 0 0  1052672 mai   31  2019 nuc_data_luksheader_BU
```

----

### Ne pas afficher les propriétaires (g) et/ou les groupes (G)

<span class="code_language">Shell</span>

```shell
ls -lgG /boot |head
```

<span class="code_language">Sortie</span>

```text
total 126840
-rw-r--r-- 1   206361 nov.  11  2019 config-4.19.0-6-amd64
-rw-r--r-- 1   234587 déc.  31 16:19 config-5.9.0-0.bpo.5-amd64
drwx------ 3     4096 janv.  1  1970 efi
drwxr-xr-x 6     1024 janv. 26 11:33 grub
drwxr-xr-x 2     1024 févr. 11  2020 hd-media
-rw-r--r-- 1 45555288 août  29 18:37 initrd.img-4.19.0-6-amd64
-rw-r--r-- 1 51654794 févr.  1 10:24 initrd.img-5.9.0-0.bpo.5-amd64
-r-------- 1 16777216 mai   31  2019 nuc_buster_luksheader_BU
-r-------- 1  1052672 mai   31  2019 nuc_data_luksheader_BU
```

----

### Afficher les tailles en format adopté à l'humain (b=octets, K=2\*\*10, M=2\*\*20,G=2\*\*30)

<span class="code_language">Shell</span>

```shell
ls -lh /boot |head
```

<span class="code_language">Sortie</span>

```text
total 124M
-rw-r--r-- 1 root root 202K nov.  11  2019 config-4.19.0-6-amd64
-rw-r--r-- 1 root root 230K déc.  31 16:19 config-5.9.0-0.bpo.5-amd64
drwx------ 3 root root 4,0K janv.  1  1970 efi
drwxr-xr-x 6 root root 1,0K janv. 26 11:33 grub
drwxr-xr-x 2 root root 1,0K févr. 11  2020 hd-media
-rw-r--r-- 1 root root  44M août  29 18:37 initrd.img-4.19.0-6-amd64
-rw-r--r-- 1 root root  50M févr.  1 10:24 initrd.img-5.9.0-0.bpo.5-amd64
-r-------- 1 root root  16M mai   31  2019 nuc_buster_luksheader_BU
-r-------- 1 root root 1,1M mai   31  2019 nuc_data_luksheader_BU
```

----

### Afficher les tailles selon une unité fixe, puissance de 2 (K=2\*\*10, M=2\*\*20,G=2\*\*30)

<span class="code_language">Shell</span>

```shell
ls -l --block=M /boot |head
```

<span class="code_language">Sortie</span>

```text
total 124M
-rw-r--r-- 1 root root  1M nov.  11  2019 config-4.19.0-6-amd64
-rw-r--r-- 1 root root  1M déc.  31 16:19 config-5.9.0-0.bpo.5-amd64
drwx------ 3 root root  1M janv.  1  1970 efi
drwxr-xr-x 6 root root  1M janv. 26 11:33 grub
drwxr-xr-x 2 root root  1M févr. 11  2020 hd-media
-rw-r--r-- 1 root root 44M août  29 18:37 initrd.img-4.19.0-6-amd64
-rw-r--r-- 1 root root 50M févr.  1 10:24 initrd.img-5.9.0-0.bpo.5-amd64
-r-------- 1 root root 16M mai   31  2019 nuc_buster_luksheader_BU
-r-------- 1 root root  2M mai   31  2019 nuc_data_luksheader_BU
```

----

### Afficher les tailles selon une unité fixe, puissance de 10 (KB,MB,GB)

<span class="code_language">Shell</span>

```shell
ls -l --block=MB /boot |head
```

<span class="code_language">Sortie</span>

```text
total 130MB
-rw-r--r-- 1 root root  1MB nov.  11  2019 config-4.19.0-6-amd64
-rw-r--r-- 1 root root  1MB déc.  31 16:19 config-5.9.0-0.bpo.5-amd64
drwx------ 3 root root  1MB janv.  1  1970 efi
drwxr-xr-x 6 root root  1MB janv. 26 11:33 grub
drwxr-xr-x 2 root root  1MB févr. 11  2020 hd-media
-rw-r--r-- 1 root root 46MB août  29 18:37 initrd.img-4.19.0-6-amd64
-rw-r--r-- 1 root root 52MB févr.  1 10:24 initrd.img-5.9.0-0.bpo.5-amd64
-r-------- 1 root root 17MB mai   31  2019 nuc_buster_luksheader_BU
-r-------- 1 root root  2MB mai   31  2019 nuc_data_luksheader_BU
```

----

### Ajouter de la couleur dans `ls`

#### Mise en place

Editer le fichier `~/.bashrc` et y ajoutez :

<span class="code_language">Shell</span>

```shell
alias ls='ls --color'
```

#### Code Couleur

| Couleur | Signification |
|:--------|:--------------|
| Couleur par défaut du shell | Fichier standard |
| Bleu | Répertoire |
| Cyan | Lien symbolique |
| Jaune | Fichier FIFO et block. |
| Magenta | Socket, fichier image (.jpg, .gif, .png, .tiff) et audio (.mp3, .ogg, .wav) |
| Rouge | Archive (.tar, .zip, .deb, .rpm) |
| Vert | Exécutable |

#### Personnalisation du code couleur

Il est possible de customiser les couleurs, lancer cette commande :

<span class="code_language">Shell</span>

```shell
dircolors -p > ~/.ls_couleur
```

`~/` correspond à `/home/utilisateur/`

Editer le fichier `~/.bashrc` et ajouter la ligne :

<span class="code_language">Shell</span>

```shell
export LS_COLORS="/home/utilisateur/.ls_couleur"
```

Modifier le fichier :

<span class="code_language">Shell</span>

```shell
~/.ls_couleur
```

#### Modifier la couleur

| Code | Signification | | Code | Couleur d'avant plan | | Code | Couleur d'arrière plan |
|:----:|:--------------|:--|:---:|:--------------------|:--|:----:|:---------------------|
| **00** | aucun | | **30** | noir | | **40** | noir |
| **01** | gras | | **31** | rouge | | **41** | rouge |
| **04** | souligné | | **32** | vert | | **42** | vert |
| **05** | clignotant | | **33** | jaune | | **43** | jaune |
| **07** | inversé | | **34** | bleu | | **44** | bleu |
| **08** | caché | | **35** | magenta | | **45** | magenta |
| | | | **36** | cyan | | **46** | cyan |
| | | | **37** | blanc | | **47** | blanc |

#### Signification des termes

- `NORMAL` : il ne s'agit pas d'un type mais plus exactement de la valeur par défaut
- `FILE` : fichier normal
- `DIR` : répertoire
- `LINK` : lien symbolique
- `FIFO` : tuyaux
- `SOCK` : socket
- `BLK` : fichier périphérique en mode bloc
- `CHR` : fichier périphérique en mode caractères
- `ORPHAN` : lien symbolique orphelin (pointant vers un fichier inexistant)
- `EXEC` : fichier possédant une permission d'exécution

#### Exemples

La ligne `DIR` signifie que le dossier est de couleur **bleu** et **gras**.

```shell
DIR 01;34 # directory
```

#### Activer les paramètres

Dès que les modifications sont faites, taper la commande :

<span class="code_language">Shell</span>

```shell
eval `dircolors /home/utilisateur/.ls_couleur`
```

Bien sûr, pour prendre en compte ces choix à chaque démarrage, cette ligne devra être incluse dans le fichier `~/.bashrc`.

Si on veut que les modifications se fassent pour tous les utilisateurs, il faudra créer un fichier dans un dossier root par exemple `/etc/` et modifier comme ceci :

<span class="code_language">Shell</span>

```shell
dircolors -p > /etc/ls_couleur
```

Ajouter dans le fichier `/etc/profile` :

<span class="code_language">Shell</span>

```shell
export LS_COLORS="/etc/ls_couleur"
eval `dircolors /etc/ls_couleur`
```

Et mettre à jour le profile.

<span class="code_language">Shell</span>

```shell
source /etc/profile
```

#### Tableau récapitulatif des codes couleurs

Créer un fichier texte :

<span class="code_language">Shell</span>

```shell
vim ~/code_couleurs.sh
```

Copiez/Coller le code ci-dessous :

<span class="code_language">Shell</span>

```shell
#!/bin/bash 
esc="\033[" 
echo -n "      40      41      42      43" 
echo "      44      45      46      47   " 
for fore in 30 31 32 33 34 35 36 37; do 
line1="$fore " 
line2=" " 
for back in 40 41 42 43 44 45 46 47; do 
line1="${line1}${esc}${back};${fore}m Normal ${esc}0m" 
line2="${line2}${esc}${back};${fore};1m  Bold  ${esc}0m" 
done 
echo -e "$line1\n  $line2" 
done
```

Ajouter le droit d'exécution :

<span class="code_language">Shell</span>

```shell
chmod +x ~/code_couleurs.sh
```

Exécuter le script : 

<span class="code_language">Shell</span>

```shell
sh ~/code_couleurs.sh
```

On doit obtenir ceci :

<img style={{ width: "auto" }} alt="logo" src={require('@docusaurus/useBaseUrl').default('img/os/linux/cmd/ls-couleur.png')} />

Sources : 
- https://doc.ubuntu-fr.org/ls_couleur
- https://chl.be/glmf/www.linuxmag-france.org/old/lm6/lscoul.html
- https://itsfoss.com/ls-color-output/



