Ce fichier reprend les commentaires sur notre project.

Tout d'abord nous avons 3 fichiers "classeBeer", "classeUser" et "classeSellPlace" qui reprennant le squelette de notre application.

Ensuite nous avons un dossier test reprennant le fichier de test demandé.
Concernant ces tests, nous n'avons pas réussi à installer jasmine sur nos appareils, nous avons donc décider d'utiliser "mocha".
Pour lancer les tests, il suffit de se placer dans le dossier avec un invite de commande et d'avoir installer mocha au préalable et ensuite de taper la commande "mocha".
Cependant, avec la version actuel de nos tests, mocha nous renvoie une erreur que nous n'avons pas réussi à gérer. En effet il ne comprend pas nos classes cité plus faut. En plus de ça, nous avons du changer tous les "let" en "var" car mocha ne l'autorisait pas. Nous demandons donc si vous avez une solutions à ces problèmes?
Merci d'avance.

Ps : si vous voulez tester les fichiers avec jasmine, normalement ça devrait marcher en changeant dans le fichier de test les 3 premières lignes avec un "require" en import comme dans les fichiers exemples que vous avez mis à notre disposition.
