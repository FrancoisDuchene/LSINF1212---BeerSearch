# Projet LSINF1212 - BeerSearch

Il s'agit du dépôt pour le projet du cours *LSINF1212 - Projet d'approfondissement en informatique* donné par le prof. Gonzalez Montesinos Sebastian Andres.

## Membres du groupe

- Damien Raquet
- François Duchêne
- Julien Bastin

## Description
Voici la description de notre projet.

Distinguons d'abord les différents dossiers.

* Le dossier *annexes* reprend les différents fichiers utiles pour le projet
* Le dossier *gherkin* reprend notre code gherkin de base
* Le dossier *code* reprend quant à lui tout le code de notre application

### Structuration et explication de notre code
Tout d'abord nous avons 3 fichiers *classeBeer*, *classeUser* et *classeSellPlace* qui reprennant le squelette de notre application.

Le fichier *serveur.js* définit un module simple pour lancer un serveur.
Le fichier *index.js* sert à lancer le serveur.
Le fichier *database.js* gère la base de donnée.
Le fichier *session.js* relie la base de donnée au serveur.
Le fichier *router.js* gère les pages html et comprend les fonctions `Get` et `Post`.

Le dossier *db* reprend la base de donnée de notre application

### Tests
Nous avons un dossier test reprennant le fichier de test sur ces différentes classes.

Pour lancer les tests, il suffit de se placer dans le dossier avec un invite de commande et d'avoir installer mocha au préalable et ensuite de taper la commande `yarn test`.

### Côté serveur - Backend
Pour notre projet, nous utilisons le gestionnaire de module *node.js* **yarn**.

Pour lancer le serveur, il suffit de se placer dans le dossier *Code* et de taper la commande `node index.js`

#### Dependances
Ce sont les dépendances nécessaires au fonctionnement du projet. Elles se trouvent dans le fichier *package.json* dans la partie `dependencies`.


#### Dependances dev
Ce sont toutes les dépendances marquées comme nécessaires uniquement au développement, càd elles ne sont pas nécessaires au fonctionnement du projet.
Comme gestionnaire de tests **mocha**. Elles se trouvent dans le fichier *package.json* dans la partie `devDependencies`.

Voici les plus importantes :

* `babel-register` (un traducteur de code JS récent en code plus ancien)
* `chai` pour les modules de test comme *expect*

#### Installer les dépendances
Pour installer toutes les dépendances il suffit de se placer dans le dossier *Code* et de taper la commande `yarn`.

### Côté client - FrontEnd
On utilise le module **bootstrap** afin de nous aider dans la construction des pages *HTML*.

Pour la géolocalisation, nous utilisons le site de cartographie **openstreetmap** et la bibliothèque **leaflet**.

### Côté base de donnée
On utilise MongoDB pour gérer la base de donnée de notre application.

Pour lancer la base de donnée il faut se placer dans le dossier Code et utiliser la commande `mongod --dbpath db`

### Lancement de l'application
Voici la marche à suivre pour lancer notre application web:

* *Premièrement*: lancez la base de donnée grâce à la commande `mongod --dbpath db`.
* *Deuxièmement*: lancez le serveur avec la commande `node index.js`
* *Troisièmement*: Se rendre sur un navigateur web tel *firefox* ou *chrome* et se rendre à l'adresse *localhost:8080*
* Enjoy!
