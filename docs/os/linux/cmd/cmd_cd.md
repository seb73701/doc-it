---
title: cd
description: La commande 'cd' vous permet de changer de répertoire
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - cd
tags: [os,commandes,linux,cd]
---

## INFORMATION

`cd` - La commande `cd` vous permet de changer de répertoire (_cd = change directory_).

----

## PACKAGE

:::info

La commande `cd` est une commande interne à Linux.

:::

----

## MAN

- [Page man (interne)](man/cmd_cd_man)

----

## EXEMPLES

### Accéder immédiatement à votre répertoire personnel

<details>

<span class="code_language">Shell</span>

```shell
cd ~
```

ou utiliser la commande : 

```shell
cd
```

</details>

----

### Accès direct au répertoire racine

<details>

<span class="code_language">Shell</span>

```shell
cd /
```

</details>

----

### Accès au sous-répertoire `/usr/local`.

<details>

<span class="code_language">Shell</span>

```shell
cd /usr/local
```

</details>

----

### Accéder à votre répertoire de travail précédent

<details>

<span class="code_language">Shell</span>

```shell
cd -
```

</details>

----

### Changer de répertoire vers le répertoire parent (double points)

<details>

<span class="code_language">Shell</span>

```shell
cd ..
```

</details>

----

### Changer vers un répertoire avec des espaces

<details>

Linux supporte les répertoires avec des espaces même s’il n’est pas vraiment recommandés d’en utiliser.

Lorsque l'on tente d’utiliser la commande `cd` sur un répertoire avec espace, vous risquez de rencontrer l’erreur :

<span class="code_language">Sortie</span>

```text
-bash: cd: too many arguments
```

Dans cet exemple, je souhaite me déplacer vers le répertoire **Documents Importants**.
Pour s’y rendre, il faut l’encadrer par des guillemets (") ou des quotes (')

<span class="code_language">Shell</span>

```shell
cd "Important Documents"
cd 'Important Documents'
```

Une autre syntaxe consiste à utiliser un **backward slash** (`\`) avant l’espace, il n’est plus alors nécessaire d’utiliser les guillemets ou quotes.

<span class="code_language">Shell</span>

```shell
cd Important\ Documents
```

</details>

----

### Comment faire en sorte que le `cd` ne suive pas les liens symboliques

<details>

Par défaut, la commande `cd` suit les liens symboliques. on a un lien symbolique nommé **symlink** qui pointe vers le répertoire `/home/howtoforge/Desktop/symbolic`.

Exécuter la commande `cd`, elle suit par défaut le lien symbolique : 

<span class="code_language">Shell</span>

```shell
cd symlink
pwd
```

<span class="code_language">Sortie</span>

```text
/home/howtoforge/Downloads/symlink
```

Pour que cd nous déplace vers l'emplacement physique du lien symbolique, on doit utiliser l'option `-P` :

<span class="code_language">Shell</span>

```shell
cd -P symlink
pwd
```

<span class="code_language">Sortie</span>

```text
/home/howtoforge/Desktop/symbolic
```

</details>

----

### Utilisation du `CDPATH`

<details>

La variable d'environnement `CDPATH` peut être utilisée pour définir le répertoire de base pour la commande `cd`.

Par exemple, dans l'une des options précédentes, nous avons discuté de la commande `cd ~` qui vous amène rapidement au répertoire personnel depuis n'importe quel emplacement de votre système. De la même manière, si vous souhaitez basculer rapidement vers un autre répertoire particulier, quel que soit votre emplacement actuel, vous pouvez le faire en définissant un répertoire de base à l'aide de la variable d'environnement `CDPATH`.

Supposons que vous travaillez principalement dans un répertoire particulier (par exemple, `Desktop`), mais que vous passez fréquemment d'un répertoire à l'autre. Vous utilisez peut-être `cd ..` , `cd ~` ou <u>chemin absolu</u>, etc. pour changer de répertoire. Bien que cette approche ne soit pas mauvaise en soi, vous pouvez faciliter la tâche (de retour à `Desktop`) en utilisant la variable d'environnement `CDPATH`. Dans ce cas, vous n'aurez qu'à exécuter `cd Desktop`.

Pour cela, vous devrez devez définir `/home/howtoforge` comme répertoire de base :

<span class="code_language">Shell</span>

```shell
export CDPATH =/home/howtoforge
```

Désormais, vous pouvez facilement et rapidement basculer vers les répertoires situés sous `/home/howtoforge`, y compris Desktop. Voici un exemple :

<span class="code_language">Shell</span>

```shell
cd Downloads/screencasting-tools/
pwd
```

<span class="code_language">Sortie</span>

```text
/home/howtoforge/Downloads/screencasting-tools
```

<span class="code_language">Shell</span>

```shell
cd Desktop/
pwd
```

<span class="code_language">Sortie</span>

```text
/home/howtoforge/Desktop
```

</details>
