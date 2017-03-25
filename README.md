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
Pour notre projet, il est à noter que nous utilisons le gestionnaire de module node.js *yarn* et comme gestionnaire de tests *mocha*.

Tout d'abord nous avons 3 fichiers *classeBeer*, *classeUser* et *classeSellPlace* qui reprennant le squelette de notre application.

Le fichier *serveur.js* définit un module simple pour lancer un serveur.

### Tests
Nous avons un dossier test reprennant le fichier de test sur ces différentes classes.

Pour lancer les tests, il suffit de se placer dans le dossier avec un invite de commande et d'avoir installer mocha au préalable et ensuite de taper la commande `mocha`.

Cependant, avec la version actuelle de nos tests, mocha nous renvoie une erreur que nous n'avons pas réussi à gérer. En effet il ne comprend pas nos classes cité plus faut. En plus de ça, nous avons du changer tous les "let" en "var" car mocha ne l'autorisait pas.
