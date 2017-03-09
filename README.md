# LINSIF1212 - Beer Search

##Comment commencer à contribuer ?
###Pour installer git
Tout d'abord vous devez être sûr d'avoir le logiciel git installé sur votre machine.
- Sur linux, généralement si vous êtes sur linux git est installé par défaut ; taper : `git version`
 dans un terminal pour être sûr.
- Sur Windows, il faut l'installer soi-même. Il existe une interface graphique sur : http://msysgit.github.io
- Sur Mac, il faut aussi l'installer soi-même. Il existe également une interface graphique sur : http://sourceforge.net/projects/git-osx-installer/

Ou alors vous pouvez carrément installer depuis les sources mais c'est à vous de voir ^^. Voici un site intéresssant pour les explications : https://git-scm.com/book/fr/v1/D%C3%A9marrage-rapide-Installation-de-Git

###Configurer git
En gros vous devez mettre en place votre nom et votre email.
Executez ces commandes :
```
git config --global user.name "VOTRE NOM"
git config --global user.email "VOTRE ADRESSE MAIL"
```
Ensuite il va falloir faire plusieurs commandes techniques pour se connecter à github.
Plus d'information : https://help.github.com/articles/set-up-git/

###Cloner le repo
Quand tout ça est fait, il faut cloner le repository.

Tout d'abord il faut que vous appuyez sur le bouton "fork" au dessus du repo.
Ca va créer une copie du repo sur votre compte github.
Maintenant il faut que vous téléchargiez cette copie sur votre pc. Cliquez sur le bouton "Clone or download" **sur la page de votre fork**. Vous obtiendrez un lien web. Copier-collez.
Pour cela retournez dans votre interpreteur de commande (ou interface graphique ça dépends de ce que vous utilisez). Déplacez-vous jusqu'au dossier ou voulez mettre le projet.

tapez : `git clone https://github.com/VOTRE-PSEUDO/NOM-REPO`
Enter et si vous avez tout bien fait vous avez cloné le repo !

Maintenant pour pouvoir le synchroniser, il faut faire encore quelques commandes;
- Ouvrez un terminal
- Allez dans votre dossier
- Sur la page internet du repo, allez sur le bouton "Clone or download" **sur la page de votre fork** et copier-collez. 
- Tapez : `git remote -v` Deux lignes s'affichent normalement.
- Tapez : `git remote add upstream https://github.com/VOTRE-LIEN`
- Pour être sûr faites : `git remote -v` Normalement vous en avez maintenant. 
Plus d'infos : https://help.github.com/articles/fork-a-repo/

##Contribuer
Maintenant que vous avez une copie propre du repo sur votre ordinateur, vous pouvez commencer à contribuer.
Le système de github consiste en un repo central (celui-ci) et des "fork" que vous aurez fait. Ces fork ne sont que des copies. 
Le principe c'est que vous envoyez vos changements sur votre dépot perso, puis ensuite vous demandez à l'envoyer sur le repo central.

Maintenant le système de git. En gros ça se passe quasiment toujours comme ça :
- Vous travaillez, vous changez le code
- Vous trouvez que vous avez suffisement fait de modifications et vous voulez sauvegarder votre travail. Pour cela vous devez faire un "commit". C'est une sauvegarde de l'état actuel de votre dépôt local.
Pour cela vous devez faire (dans votre dossier contenant le dépôt git) : `git commit -m "MESSAGE EXPLIQUANT VOS CHANGEMENTS"`
- Maintenant vous avez fait une sauvegarde sur votre système. Mais ça reste local. Si vous voulez l'envoyer sur votre fork, vous devez faire `git push -u` .Il faudra certainement mettre votre mail et mot de passe github.
- Voilà vous avez envoyé du contenu en ligne sur votre repo !

Maintenant pour l'envoyer sur le depo central. Sur votre "fork", cliquez sur pull request et normalement il vous proposera d'envoyer une demande de changement. 

###Synchronisez votre travail avec celui du groupe
Pour mettre à jour votre dépot avec les modifications faites par le groupe, il faut suivre cette démarche :
- Ouvrez un terminal et allez dans le dossier de votre projet
- Tapez : `git fetch upstream`
- Tapez : `git checkout master`
- Tapez : `git merge upstream/master`

Normalement tout est bon. Si il y a des merge conflicts, god save ourself.
Pour ça faites gaffe de pas modifier en même temps le même fichier qu'un autre parce que c'est un coup à foutre la merde.

Pour plus d'informations : https://help.github.com/articles/syncing-a-fork/

test