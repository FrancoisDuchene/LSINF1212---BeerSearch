# Github for newbies - Comment utiliser git (et par extension github)

## Comment commencer à contribuer ?

### Pour installer git

Tout d'abord vous devez être sûr d'avoir le logiciel git installé sur votre machine.
- Sur linux, généralement si vous êtes sur linux git est installé par défaut ; taper : `git version`
 dans un terminal pour être sûr. Sinon installez selon la mathode que vous préférez, préférablement un gestionnaire de paquet comme `sudo apt-get install git` sur les systèmes *Debian* par exemple. Voici un lien avec tout ce qu'il faut savoir : https://git-scm.com/download/linux
- Sur Windows, il faut l'installer soi-même. Il existe une interface graphique sur : http://msysgit.github.io
- Sur Mac, il faut aussi l'installer soi-même. Il existe également une interface graphique sur : http://sourceforge.net/projects/git-osx-installer/

Ou alors vous pouvez carrément installer depuis les sources mais c'est à vous de voir ^^. Voici un site intéressant pour les explications : https://git-scm.com/book/fr/v1/D%C3%A9marrage-rapide-Installation-de-Git

### Configurer git

En gros vous devez mettre en place votre nom et votre email.
Executez ces commandes :
```
git config --global user.name "VOTRE NOM"
git config --global user.email "VOTRE ADRESSE MAIL"
```
Ensuite il va falloir faire plusieurs commandes techniques pour se connecter à github.

Pour s'identifier à github via git, soit on utilise une connexion par HTTPS(recommandé par github) soit par SSH :

#### Connexion par HTTPS

Y a moyen d'enregistrer ses informations (le username et le password) pendant un certain temps
Pour ça il faut écrire :
```
git config --global credential.helper cache
git config --global credential.helper 'cache --timeout=3600'
```

#### Connexion par SSH

Il y a plein d'étapes différentes si vous voulez plus d'info regardez ce lien :p

Plus d'informations : https://help.github.com/articles/set-up-git/

### Cloner le repo

Quand tout ça est fait, il faut cloner le dépôt (repository en anglais).

Deux choix s'offrent encore à vous.

Ou vous "forkez" le dépôt principal, c'est à dire vous créez une copie personnelle du dépôt principal sur laquelle vous effecturez les modifications avant de de l'envoyer sur le dépôt principal (celui qui est sous mon nom).

Ou vous changez directement sur le dépôt principal mais alors je vous conseille fortement de faire attention avant d'envoyer ; en effet quand vous faîtes un fork, avant de pouvoir envoyer sur le dépôt principal vous devez faire ce que l'on appelle un *pull request*. En gros vous demandez au dépôt principal d'intégrer vos changements et dans ce cas-là, les autres contributeurs peuvent voir vos modifications et par exemple vérifier qu'il n'y a pas de bug.
Comme dans ce cas-ci vous envoyez directement au dépôt, il n'y a pas forcément de contrôle sur les bugs que vous pourriez faire.

Tout d'abord si vous utilisez la *méthode n°1*, il faut que vous appuyez sur le bouton "fork" au dessus du dépôt. Vous avez alors créé une copie sur votre propre compte, rendez-vous y.
Maintenant il faut que vous téléchargiez cette copie sur votre pc. Cliquez sur le bouton "Clone or download" **sur la page de votre fork**. Vous obtiendrez un lien web. Copier-collez.

Si vous utilisez la *méthode n°2*, vous devez cliquer sur le bouton "Clone or download" **sur la page de du dépôt principal**.

Pour cela retournez dans votre interpreteur de commande (ou interface graphique ça dépends de ce que vous utilisez). Déplacez-vous jusqu'au dossier ou voulez mettre le projet.

Tapez : `git clone https://github.com/VOTRE-PSEUDO/NOM-REPO`
Enter et si vous avez tout bien fait vous avez cloné le repo !

Maintenant pour pouvoir le synchroniser, il faut faire encore quelques commandes;
- Ouvrez un terminal
- Allez dans votre dossier
- Sur la page internet du repo, allez sur le bouton "Clone or download" **sur la page de votre fork ou du dépôt selon la méthode** et copier-collez. 
- Tapez : `git remote -v` Deux lignes s'affichent normalement.
- Tapez : `git remote add upstream https://github.com/VOTRE-LIEN`
- Pour être sûr faites : `git remote -v` Normalement vous en avez maintenant. 
Plus d'infos : https://help.github.com/articles/fork-a-repo/

## Contribuer

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

### Synchronisez votre travail avec celui du groupe

Pour mettre à jour votre dépot avec les modifications faites par le groupe, il faut suivre cette démarche :
- Ouvrez un terminal et allez dans le dossier de votre projet
- Tapez : `git fetch upstream`
- Tapez : `git checkout master`
- Tapez : `git merge upstream/master`

Normalement tout est bon. Si il y a des merge conflicts, god save ourself.
Pour ça faites gaffe de pas modifier en même temps le même fichier qu'un autre parce que c'est un coup à foutre la merde.

Si jamais ça arrive quand même, il va falloir d'abord corriger le conflit manuellement avant de pouvoir push. Pour ça il faut ouvrir le(s) fichier(s) en question et regarder si il y a des lignes du style : 
```
HEAD
>>>>>>>>>>>>>>>>>>
//code 1
==================
//code 2
>>>>>>>>>>>>>>>>>>465d465465464a6e46
```
En gros il met en parallèle les différentes versions. Il faut manuellement en supprimer une (et les >>>> et ====)
Et ensuite on peut commit et push comme vous voulez. Sinon vous me laisser règler ça et ça passera.

Si jamais vous n'avez pas de *fork* et que vous avez utilisé **la méthode 1** du clonage, vous pouvez directement utiliser la commande : `git pull`
Si ça ne fonctionne pas, faites comme la méthode ci-dessus.

Pour plus d'informations : https://help.github.com/articles/syncing-a-fork/

### Organiser le travail

Il y a plusieurs outils pour pouvoir organiser le travail sur github. Il y a notamment le système d'*ISSUES*. C'est une fonctionnalité de github qui permet par exemple, de reporter des bugs ou de proposer des améliorations. Il y a moyen de l'utiliser comme d'une list de chose à faire (*TODO*).

Ensuite il y a moyen de créer ce qu'on appelle un "projet". C'est une interface qui permet simplement de créer des notes et des les placer dans des colonnes avec des noms prédéfinis. Ces notes peuvent être convertis en *Issues* et vice-versa. Cela permet entre autre de pouvoir organiser les tâches (ou autre...).

