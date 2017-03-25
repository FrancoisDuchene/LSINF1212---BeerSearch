# language: fr

Fonctionnalite: Commander une bière en ligne
                En tant qu'utilisateur
                Je veux commander ma bière en ligne

    Contexte: Étant donné Une liste de vendeurs qui ont cette bière 
              en stock est donnee a l'utilisateur
              Et un vendeur proposant un Orval pour 3,15€
          
    Scenario: Commande acceptee
	    Etant donné le client possède au moins 3,15€
	    Lorsque l'utilisateur choisi le vendeur
	    Alors la somme de 3,15$ devrait être débitée
        du porte-monnaie électronique
        Et la somme de 3,15€ devrait être envoyée au vendeur
        Et une commande doit être envoyée au vendeur
        Et le montant de 1 est enlevé du nombre de bières
        disponibles pour ce vendeur
    
    Scenario: Commande refusée
        Etant donné l'utilisateur ne possède pas au moins 3,15€
        Lorsque l'utilisateur choisi le vendeur
        Alors un message d'erreur est montré à l'utilisateur
        Et son porte-monnaie lui est montré afin qu'il rajoute
        des fonds    
