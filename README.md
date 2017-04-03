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

### Tests
Nous avons un dossier test reprennant le fichier de test sur ces différentes classes.

Pour lancer les tests, il suffit de se placer dans le dossier avec un invite de commande et d'avoir installer mocha au préalable et ensuite de taper la commande `yarn test`.

### Côté serveur - Backend
Pour notre projet, nous utilisons le gestionnaire de module *node.js* **yarn**.

#### Dependances
Ce sont les dépendances nécessaires au fonctionnement du projet. On les installe avec la commande `yarn add` donc :

* `express`
* `bootstrap`
#### Dependances dev
Ce sont toutes les dépendances marquées comme nécessaires uniquement au développement, càd elles ne sont pas nécessaires au fonctionnement du projet.
Comme gestionnaire de tests **mocha**.

Pour installer les dependances, on utilise donc la commande `yarn add`

* `--dev babel-register` (un traducteur de code JS récent en code plus ancien)

### Côté client - FrontEnd
On utilise le module **bootstrap** afin de nous aider dans la construction des pages *HTML*
