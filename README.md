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
Tout d'abord nous avons 3 fichiers *classeBeer*, *classeUser* et *classeSellPlace* que nous avons réalisé au départ du projet mais que nous n'avons pas utilisé.

Le fichier *serveur.js* définit un module simple pour lancer un serveur.
Le fichier *index.js* sert à lancer le serveur.
Le fichier *database.js* gère la base de donnée.
Le fichier *session.js* relie la base de donnée au serveur.
Le fichier *router.js* gère les pages html et comprend les fonctions `Get` et `Post`.

Le dossier *db* reprend la base de donnée de notre application
Le dossier *models* reprend trois schémas de donnée, indispensables pour l'interaction avec la base de donnée.
Le dossier *pages* reprend les différentes pages html ainsi que les ressources css et les scripts.
Le dossier *views* reprend un `view` nécessaire au fonctionnement de la recherche de bières.

### Tests
Nous avons un dossier test reprennant le fichier de test sur les classes de bases que nous avons réalisé au début du projet.
Néanmoins par manque de temps nous n'avons pas réalisé de test sur le fonctionnement de notre application web.

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
On utilise **MongoDB** pour gérer la base de donnée de notre application.

Pour lancer la base de donnée il faut se placer dans le dossier Code et utiliser la commande `mongod --dbpath db`

### Lancement de l'application
Avant de lancer l'application, assurez vous d'avoir installé au préalable mongodb, node.js ainsi que yarn sur votre ordinateur. La version de
mongodb importe peu, mais nous vous recommandons la 3.4.6. 
Quand aux versions nodejs et yarn, nous ne garantissons pas le succès de l'installation des dépendences si vous ne possédez pas les versions suivantes :
yarn : v 0.27.5 => lien :https://yarnpkg.com/fr/
node.js : v6 => lien :https://nodejs.org/en/

Unr fois ces packages installés, allez dans le dossier "Code" du projet depuis un terminal. tapez la commande suivante : yarn
cela installera les dépendances. il est possible(probable) que yarn vous demande de choisir une version spécifique de mongodb. prenez la version 2.2.26
Ensuite, toujours depuis un terminal et le dossier code, tapez la commande : mongod --dbpath db
si une erreur se produit, videz le dossier db puis réessayez.

Ensuite, depuis un autre terminal, allez dans le dossier code, puis tapez la commande : node index.js

lancez ensuite un naviguateur et allez à l'adresse : 'localhost:8080' Vous devriez voir la page d'accueil du site

Voici la marche à suivre pour lancer notre application web lorsqu'une première connexion à été faite:

* *Premièrement*: lancez la base de donnée grâce à la commande `mongod --dbpath db` à partir du dossier **Code/**.
* *Deuxièmement*: lancez le serveur avec la commande `node index.js`
* *Troisièmement*: Se rendre sur un navigateur web tel *firefox* ou *chrome* et se rendre à l'adresse *localhost:8080*
* Enjoy!
