# Github for newbies - Comment utiliser git (et par extension github) - Auteur: François Duchêne

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

Deux choix s'offrent alors encore à vous.

* Soit vous "forkez" le dépôt principal, c'est à dire vous en créez une copie personnelle sur laquelle vous effecturez vos modifications avant de les envoyer sur le dépôt principal (celui qui est sous mon nom).
* Soit vous envoyez vos modifications directemet sur le dépôt principal.

#### Fork

Dans cette solution, vous allez créé votre propre copie du dépot principal. Sur github, rendez-vous sur la page du dépôt et cliquez sur le bouton *fork* en haut à droite (il devrait être assez visible mais sinon c'est un petit dessin qui ressemble à une baguette de sourcier).
Vous avez alors créé une copie sur votre propre compte, rendez-vous y.
Maintenant il faut que vous téléchargiez cette copie sur votre pc. Cliquez sur le bouton "Clone or download" **sur la page de votre fork**. Vous obtiendrez un lien web. Copier-le.

Ensuite retournez dans votre interpreteur de commande (ou interface graphique ça dépends de ce que vous utilisez). Déplacez-vous jusqu'au dossier ou voulez mettre le projet.

Tapez : `git clone https://github.com/VOTRE-PSEUDO/NOM-REPO` (ou alors faites juste `git clone ` + coller le lien)
Enter et si vous avez tout bien fait vous avez cloné le repo !

Maintenant pour pouvoir le synchroniser dans le futur, càd pour pouvoir envoyer vos modifications locales (sur votre pc) vers votre fork, il faut encore faire quelques commandes (si vous venez de cloner votre fork, sautez à l'étape 3.);

1. Ouvrez un terminal
2. Allez dans votre dossier
3. Sur la page internet du **dépôt principal** (pas le fork), allez sur le bouton "Clone or download" et copier-le. 
4. Tapez : `git remote -v`. `origin https://github.com/VOTRE-PSEUDO/NOM-REPO` s'affiche normalement deux fois.
5. Tapez : `git remote add upstream https://github.com/VOTRE-LIEN`
6. Pour être sûr faites : `git remote -v` Normalement vous en avez maintenant 4. 

Les remotes sont des liens que vous pourrez utiliser lorsque vous voudrez synchroniser votre travail. On en reparlera plus en détail dans la partie *contribuer*.

Les forks ont ça de différents avec le changement direct qu'au lieu de contribuer directement au dépôt principal, vous contriburez d'abord à votre fork, puis vous devrez faire une demande pour envoyer vos modifications sur le dépôt principal, c'est ce qu'on appel un *pull request*. C'est une solution qui semble plus complexe pour les petits projets mais qui est indispensable sur tous les gros projets (outre le fait qu'à part si vous connaissez l'admin du dépot, il vous sera impossible de contribuer directement au dépot, en effet il y a une procédure à suivre pour l'admin afin d'autoriser cela, j'en reparle dans la partie du changement direct).
Cela permet notamment aux autres membres de voir les modifications faites et si il y a des bugs ou non.

Plus d'infos : https://help.github.com/articles/fork-a-repo/

#### Changement direct

Dans cette solution, vous envverez directement vos modifications sur le dépot principal. La première chose à faire pour vous si vous voulez contribuer à un dépo de cette façon est de contacter l'admin du dépot. En effet, il doit *explicitement* mettre votre nom dans la liste des contributeurs du projet, ce qui vous donnera le privilège de directement envoyer vos modifications. Si vous êtes admin vous-même et que vous désirez l'autorisez pour quelqu'un, j'explique la procédure un peu plus bas.

##### Vous êtes contributeur

Vous allez devoir tout d'abord cloner le dépôt principal, pour cela cliquez sur le bouton "Clone or download" **sur la page de du dépôt principal**.

Ensuite retournez dans votre interpreteur de commande (ou interface graphique ça dépends de ce que vous utilisez). Déplacez-vous jusqu'au dossier ou voulez mettre le projet.

Tapez : `git clone https://github.com/VOTRE-PSEUDO/NOM-REPO` (ou alors faites juste `git clone ` + coller le lien)
Enter et si vous avez tout bien fait vous avez cloné le repo !

Maintenant pour pouvoir le synchroniser, il faut faire encore quelques commandes (si vous venez de cloner votre fork, sautez à l'étape 4.);

1. Ouvrez un terminal
2. Allez dans votre dossier
3. Sur la page internet du repo, allez sur le bouton "Clone or download" **sur la page du dépôt** et copier-le. 
4. Tapez : `git remote -v`. `origin https://github.com/PSEUDO-ADMIN/NOM-REPO` s'affiche normalement deux fois.
5. Tapez : `git remote add upstream https://github.com/VOTRE-LIEN`
6. Pour être sûr faites : `git remote -v` Normalement vous en avez 4 maintenant. 

##### Vous êtes admin

Voici la procédure si vous êtes admin :

1. Rendez-vous dans les paramètres du dépôt (une icone en forme d'engrenage).
2. Rendez-vous ensuite dans l'onglet *collaborators*.
3. Vous devrez alors saisir votre mot de passe github.
4. Ensuite dans la fenêtre principale vous devrez ajouter la personne pour laquelle vous aimeriez authorisé la modification directe en tapant son nom de profil github.

Il n'y a normalement pas de limites de collaborateurs.

Plus d'infos : https://help.github.com/articles/fork-a-repo/

## Contribuer

Normalement maintenant, soit vous avez un fork sur lequel envoyer vos données, soit vous êtes sur la liste blanche du dépôt principal et vous pouvez directement envoyer vos modifications.

Lorsque vous contriburez, cela se passera généralement de la manière suivante :

- Vous travaillez, vous changez le code, vous écrivez, etc.
- Vous trouvez que vous avez suffisament fait de modifications et vous voulez sauvegarder votre travail. Pour cela vous devez faire un "commit". C'est une sauvegarde de l'état actuel de votre dépôt local (pour rappel git est gestionnaire de version à la base, pas un logiciel client-serveur).
    - Pour cela vous allez d'abord devoir dire quels fichiers feront partie de votre commit. Pour cela vous utilisez la commande `git add NOM-FICHIER`. Les expressions régulières sont acceptés, vous pouvez par exemple écrire `git add \*` pour directement ajouter tous vos fichiers ou `git add \*.java`  pour ajouter tous les fichiers contenant une extension `.java`.
    - Ensuite, vous devez faire : `git commit -m "MESSAGE EXPLIQUANT VOS CHANGEMENTS"`
- Maintenant vous avez fait une sauvegarde sur votre système. Mais ça reste local. Si vous êtes contributeur direct, écrivez `git push`. Si vous avez un fork, écrivez `git push origin master` (vous envoyez votre branche master sur le lien *origin*). Il faudra certainement mettre votre mail et mot de passe github.
- Voilà vous avez envoyé du contenu en ligne sur votre repo !

Maintenant si vous avez un *fork*, pour l'envoyer sur le depo central vous devez aller sur la page de votre fork. Il devrait indiqué de combien de commit vous êtes en avance sur branche principale (celle du dépôt principal) ainsi qu'un bouton *pull request*. Cliquez dessus et il vous sera alors possible d'écrire un message décrivant vos changements. Une fois cela fait vous n'aurez qu'à envoyer votre demande de pull request. Vous devrez alors attendre que l'admin accept votre demande.

### Synchronisez votre travail avec celui du groupe

Pour mettre à jour votre dépot avec les modifications faites par le groupe si vous avez un **fork**, il faut suivre cette démarche :

- Ouvrez un terminal et allez dans le dossier de votre projet
- Tapez : `git fetch upstream`
- Tapez : `git checkout master`
- Tapez : `git merge upstream/master`

Si vous être contributeur direct, vous pouvez directement la commande `git pull` avec des paramètres si il y a besoin (git vous le dira)

Normalement tout est bon. Si il y a des merge conflicts, god save ourself.
Un *merge conflict* est un conflit entre la version de votre dépot local et celle du serveur principal. Cela intervient lorsque vous et un autre contributeur a modifié la même chose, git ne sait alors plus quelle version gardé, la votre ou celle du serveur ?
Pour ça faites attention de pas modifier en même temps le même fichier qu'une autre personne parce que c'est un bon moyen d'en créer.

#### Gérer les merge conflicts
Si jamais ça arrive quand même, il va falloir d'abord corriger le conflit manuellement avant de pouvoir push. 

Si vous vous êtes rendu compte qu'il va y a avoir un conflit avant de pull, et bien `git pull` de toute façon. Vous allez devoir gérer le conflit de toute manière à moins de supprimer votre travail d'abord (ce qui est rarement le cas). Si il refuse de le faire, attendez un peu.
Ensuite il faut généralement que vous ajoutiez vos fichiers à un commit (comme vous feriez d'habitude).
Essayez de `git pull`. Soit tout se passe bien soit git va vous indiquer que vous avez un merge conflict. Si tout va bien, essayez de push et il devrait alors vous indiquer que vous en avez un (si il réussit à push c'est qu'il n'y avait pas vraiment de problème).

A ce stade, git vous indique en lettres capitales qu'il y a un MERGE CONFLICT avec les noms des fichiers. Ouvrez-les avec votre éditeur de texte préféré et cherchez des lignes du style : 
```
HEAD
>>>>>>>>>>>>>>>>>>
//code 1
==================
//code 2
>>>>>>>>>>>>>>>>>>465d465465464a6e46
```
En gros il met en parallèle les différentes versions. Il faut manuellement en supprimer une (+ les >>>> ,====, HEAD et 465d465465464a6e46)
Et ensuite vous pouvez `git commit -m "merge conflict resolved"` et `git push`.

Si jamais vous êtes contributeur direct, vous pouvez directement utiliser la commande : `git pull`
Si ça ne fonctionne pas, faites comme la méthode ci-dessus.

Pour plus d'informations : https://help.github.com/articles/syncing-a-fork/

### Organiser le travail

Il y a plusieurs outils pour pouvoir organiser le travail sur github. Il y a notamment le système d'*ISSUES*. C'est une fonctionnalité de github qui permet par exemple, de reporter des bugs ou de proposer des améliorations. Il y a moyen de l'utiliser comme d'une list de chose à faire (*TODO*).

Ensuite il y a moyen de créer ce qu'on appelle un "projet". C'est une interface qui permet simplement de créer des notes et des les placer dans des colonnes avec des noms prédéfinis. Ces notes peuvent être convertis en *Issues* et vice-versa. Cela permet entre autre de pouvoir organiser les tâches (ou autre...).

