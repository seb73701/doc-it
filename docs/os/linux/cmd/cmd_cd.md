---
title: cd
hide_table_of_contents: false
hide_title: false
keywords:
    - os
    - commandes
    - linux
    - cd
tags: [os,commandes,linux,cd]
---

----

## SYNTAXE

<span class="code_language">Shell</span>

```shell
cd [-L|[-P [-e]] [-@]] [dir]
```

----

## INFORMATION

:::info

La commande `cd` est une commande interne à Linux.

:::

`cd` - La commande `cd` vous permet de changer de répertoire (_cd = change directory_).

Quand on ouvre un terminal en mode utilisateur on est dans notre répertoire personnel (`/home/utilisateur`). La commande est équivalente à `cd $HOME` 

Si `dir` contient '`-`', le chemin précédent est stocké dans la variable `$OLDPWD`.

Cette commande doit impérativement respecter les majuscules et les minuscules (sensible à la casse). 

Au moment de la saisie, vous pouvez utiliser des <u>chemins relatifs</u> qui se rapportent à la hiérarchie des sous-répertoires et qui mènent directement de votre chemin au chemin supérieur. Il est également possible d’opter pour un <u>chemin absolu</u>, pour accéder immédiatement à une destination pouvant être plus éloignée. 

La commande s’exécute à la condition que le répertoire indiqué existe et que vous disposiez de droits d’accès à celui-ci. Dans le cas contraire, vous recevez un message d’erreur et restez dans le répertoire de travail précédent.

Il est possible d'utiliser la touche <kbd>TAB</kbd> pour l'autocomplétion.

La variable `CDPATH` définit le chemin de rechercher du répertoire contenant `dir`.

Les autres répertoires de `CDPATH` sont séparés par des caractères deux points (`:`). 

Si le `dir` n'est pas trouvé et si l'option de shell `cdable_vars` est définie, `bash` essaiera d'utiliser `dir` comme un nom de variable. Si cette variable contient une valeur, celle-ci deviendra le nouveau répertoire de travail courant.

Si `dir` commence avec un slash (`/`) alors `CDPATH` n'est pas utilisé.

----

## OPTIONS

|Options|Description|
|:------|:----------|
|`-P`|Utilise la structure physique des répertoires au lieu de suivre les lieux symboliques.|
|`-L`|Suit les liens symboliques.|
|`-e`|Si l'option `-P` est fournie et que le répertoire de travail actuel ne peut pas être déterminé avec succès, quitter avec un statut différent de zéro.|
|`-@`|Sur les systèmes qui le prennent en charge, présenter un fichier avec des attributs étendus comme un répertoire contenant les attributs du fichier|

Par défaut, les liens symboliques sont suivis, comme si l'option `-L` avait été spécifiée. `..` est traité en supprimant le composant de chemin immédiatement précédent jusqu'à la barre oblique ou le début de `dir`.

----

## VALEUR RENVOYEE

Cette commande renvoie les valeurs de sortie suivantes :

|Code|Descriptif|
|:------|:---------|
|`0`|L'exécution de la commande a abouti.|
|`>0`|Une erreur s'est produite.|

Renvoie `0` si le répertoire est modifié et si `$PWD` est défini avec succès lorsque `-P` est utilisé; sinon, renvoie une valeur différente de zéro.

----

## FICHIERS

|Chemin|Descriptif|
|:------|:---------|
|`cd:`|La commande `cd` est une commande interne.|

----

## MAN

- [man](https://man7.org/linux/man-pages/man1/cd.1p.html)

C'est possible d'avoir la page `man` avec la commande : 

<span class="code_language">Shell</span>

```shell
man cd
```

ou

<span class="code_language">Shell</span>

```shell
cd --help
```

----

## EXEMPLES

### Accéder immédiatement à votre répertoire personnel

<span class="code_language">Shell</span>

```shell
cd ~
```

ou utiliser la commande : 

```shell
cd
```

----

### Accès direct au répertoire racine

<span class="code_language">Shell</span>

```shell
cd /
```

----

### Accès au sous-répertoire `/usr/local`.

<span class="code_language">Shell</span>

```shell
cd /usr/local
```

----

### Accéder à votre répertoire de travail précédent

<span class="code_language">Shell</span>

```shell
cd -
```

----

### Changer de répertoire vers le répertoire parent (double points)

<span class="code_language">Shell</span>

```shell
cd ..
```

----

### Changer vers un répertoire avec des espaces

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

----

### Comment faire en sorte que le `cd` ne suive pas les liens symboliques

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

----

### Utilisation du CDPATH

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
