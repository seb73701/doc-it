---
title: alias
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - alias
tags: [os,commandes,linux,alias]
---

----

## SYNTAXE

<span class="code_language">Shell</span>

```shell
alias [-p] [ NOM[=VALEUR] ... ]
```

----

## INFORMATION

:::info

La commande `alias` est une commande interne à Linux.

:::

Les alias sont des substitutions abrégées de commandes répétitives et/ou longues à taper dans la console.

Sans argument ou avec l'option `-p`, `alias` affiche une liste des alias sur la sortie standard, sous une forme permettant leur réutilisation en entrées. 

Avec des arguments, un `alias` est défini pour chaque `NOM` pour lequel une `VALEUR` est indiquée. 

Si aucune `VALEUR` n'est indiquée, le nom et la valeur de l'`alias` sont affichés.

Il est possible de définir vos alias dans deux fichiers cachés qui se trouvent dans votre **Dossier Personnel (`/home/user/`)**:

- `~/.bashrc` (Bash shell)
- `~/.zshrc` (Zsh shell)
- `~/.tcshrc` (Tcsh shell)
- `~/.config/fish/config.fish` (Fish shell) 
- `~/.bash_aliases`. Si ce dernier n'existe pas, créez-le. Quelques shells stockent les alias dans un autre fichier qui est `~/.aliases`

:::tip

Pour éviter de modifier trop souvent le fichier sensible qu'est `~/.bashrc`, il est conseillé d'utiliser le fichier `~/.bash_aliases`.

:::

:::info

Il est à noter que l'autocomplétion fonctionne également avec les alias.

:::

:::note

Il est possible de mettre plusieurs commandes dans un seul alias en séparant chaque commande par un point-virgule (`;`). Exemple : `alias test='clear; ls'`.

:::

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-p`|Affiche tous les alias dans un format réutilisable|

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
|`~/.bashrc`|Ce fichier permet la configuration lors du lancement du programme bash. (Bash Shell)|
|`~/.zshrc`|(Zsh Shell)|
|`~/.tcshrc`|(Tcsh Shell)|
|`~/.config/fish/config.fish`|(Fish Shell)|
|`~/.bash_aliases` ou `~/.aliases`|Ce fichier permet de séparer le script `.bashrc` des `alias`. Vous pouvez mettre des variables dedans qui seront chargées à chaque lancement de terminal. (Bash Shell)|

----

## MAN

- [man](https://manpages.ubuntu.com/manpages/noble/fr/man1/)

C'est possible d'avoir la page d'aide avec la commande : 

<span class="code_language">Shell</span>

```shell
%nom_commande% --help
```

----

### Man

- [man](https://man7.org/linux/man-pages/man1/alias.1p.html)

----

## EXEMPLES

### Lister les alias

<span class="code_language">Shell</span>

```shell
alias
```

<span class="code_language">Sortie</span>

```shell
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'
alias l='ls -CF'
alias la='ls -A'
alias ll='ls -alF'
alias ls='ls --color=auto'
```

----

### Créer un alias temporaire

:::info

L'alias temporaire sera automatiquement supprimé à la fermeture de la session.

:::

<span class="code_language">Shell</span>

```shell
alias ll='ls -l'
```

Utiliser l'alias : 

<span class="code_language">Shell</span>

```shell
ll /home/
```

----

### Créer un alias permanent

Pour utiliser une commande `alias` avec Linux de manière permanente, deux possibilités s’offrent à vous, toutes deux ne nécessitant rien de plus qu’un éditeur.

#### Avec `~/.bash_aliases`

- Créez un fichier appelé `~/.bash_aliases` en utilisant l’éditeur de votre choix.
- Listez ensuite toutes les commandes `alias` que vous souhaitez utiliser.
- Enregistrez le fichier, puis fermez-le.
- Maintenant, ouvrez le fichier `.bashrc` et ajoutez-y les lignes suivantes :

<span class="code_language">Shell</span>

```shell
if [ -f ~/.bash_aliases ]; then
. ~/.bash_aliases
fi
```
<span class="code_filename">~/.bashrc</span>

- Il ne vous reste plus qu’à lire le fichier de commandes `alias` :

<span class="code_language">Shell</span>

```shell
source ~/.bash_aliases
```

#### Avec `~/.bashrc`

- Ouvrez le fichier `~/.bashrc` à l’aide de votre éditeur.
- Accédez à la section "`Alias definitions`" (Définition de commandes alias).
- Créez-y les commandes `alias` souhaitées en renseignant les raccourcis correspondants.
- Enregistrez le fichier, fermez-le, puis démarrez une nouvelle session.
- Lisez une nouvelle fois le fichier de configuration. Pour ce faire, utilisez la commande suivante :

<span class="code_language">Shell</span>

```shell
source ~/.bashrc
```

----

### Création d'un alias pour mettre à jour le système

- Ouvrez le fichier `~/.bash_aliases` à l’aide de votre éditeur.
- Insérer la ligne ci-dessous :

<span class="code_language">Shell</span>

```shell
alias up="sudo apt update && sudo apt upgrade"
```
<span class="code_filename">~/.bash_aliases</span>

- Enregistrez le fichier, fermez-le.
- Lisez une nouvelle fois le fichier de configuration. Pour ce faire, utilisez la commande suivante :

<span class="code_language">Shell</span>

```shell
source ~/.bashrc
```

----

### Création d'un alias pour accéder à un répertoire

- Ouvrez le fichier `~/.bash_aliases` à l’aide de votre éditeur.
- Insérer la ligne ci-dessous :

<span class="code_language">Shell</span>

```shell
alias des="cd ~/Desktop"
```
<span class="code_filename">~/.bash_aliases</span>

- Enregistrez le fichier, fermez-le.
- Lisez une nouvelle fois le fichier de configuration. Pour ce faire, utilisez la commande suivante :

<span class="code_language">Shell</span>

```shell
source ~/.bashrc
```

----

### Autes exemples d'alias possibles

```shell
alias update='sudo apt-get update'
alias upgrade='sudo apt-get upgrade'
alias distup='sudo apt-get dist-upgrade'
alias sysup='update && upgrade && distup'

# alias pour installer une application
alias ins='sudo apt install'

# nettoye l'écran
alias c='clear'

# permet de se déplacer plus rapidement de répertoires parents
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'

# s'assure que la commande mkdir créer les répertoires parents si ils n'exitent pas 
alias mkdir='mkdir -pv'

# met à jour le système sans confirmation
alias upd='sudo apt-get update && sudo apt-get upgrade -y'

# S'assure que la commande mv demande confirmation avant d'écraser un fichier existant
alias mv='mv -i'

# alias d'alerting qui envoi un message
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# coloration de la sortie de la commande egrep
alias egrep='egrep --color=auto'

# coloration de la sortie de la commande fgrep
alias fgrep='fgrep --color=auto'

# coloration de la sortie de la commande grep
alias grep='grep --color=auto'

# lire en temps réel les dernières lignes du fichier de log "/var/log/auth.log" 
alias authlog="sudo tail -f /var/log/auth.log"
```
<span class="code_filename">~/.bash_aliases</span>

----

### Alias avec `sudo`

Par défaut les `alias` ne sont pas accessibles quand vous utilisez `sudo`, un exemple courant est de lister un répertoire système :

<span class="code_language">Shell</span>

```shell
sudo ll /media/
# va retourner
sudo: ll : commande introuvable
```

Pour que ce soit possible, ajouter dans vos alias (`~/.bash_aliases`): 

<span class="code_language">Shell</span>

```shell
sudo='sudo '
```
<span class="code_filename">~/.bash_aliases</span>

----

### Appeler un script

Il est possible d'appeler un script avec un `alias`.

<span class="code_language">Shell</span>

```shell
alias monscript='sh -c /home/$USER/Documents/scripts/test/essai.sh'
```
<span class="code_filename">~/.bash_aliases</span>

----

### Echapper un alias

Lorsque l'on a créé une longue liste d'alias, il peut être utile de lancer une commande sans que celui-ci n'intervienne.

Exemple, vous avez créé cet alias :


<span class="code_language">Shell</span>

```shell
alias ping='ping -c 4'
```
<span class="code_filename">~/.bash_aliases</span>

Et vous souhaitez lancer la commande `ping` sans les options définies dans l'`alias`, pour cela il suffit de mettre le caractère d'échappement antislash (`\`) devant la commande à lancer, comme ceci :

<span class="code_language">Shell</span>

```shell
\ping
```

----

### Supprimer un alias

Pour supprimer un `alias`, il est possible d'utiliser la commande `unalias`.

Voir cette page : [`unalias`](cmd_unalias)
