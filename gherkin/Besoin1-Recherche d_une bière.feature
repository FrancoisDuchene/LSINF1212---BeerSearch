#language: fr

Fonctionnalité : Recherche d'une bière
	En tant qu'utilisateur
	Je veux trouver une bière
	
	Contexte:
		Lorsque la recherche est effectuée
		Alors chaque bière restante dans la liste a une photo et une courte description
		
	Scénario: Recherche par mot
		Lorsque l'utilisateur entre le mot "Leffe" dans le champ de recherche
		Alors de la liste des bières sont retirée toutes les bières qui ne correspondent pas à "Leffe"
		
	Scénario: Recherche par degré d'alcool
		Lorsque l'utilisateur choisi un interval de 4,5° à 5°
		Alors seules les bières avec un taux d'alcool entre 4,5° et 5° seront reprises 
        dans la liste des propositions
		
	Scénario: Recherche par type
		Lorsque l'utilisateur choisi "bière blonde"
		Alors seule les bières dont le type est "blonde" sont reprises
		
	Scénario: Recherche par gout
		Lorsque l'utilisateur choisi "Sucrée"
		Alors seule les bières avec un gout "sucré" sont reprises
		
	Scénario: Recherche groupée
		Lorsque l'utilisateur choisi le mot "Leffe"
		Et choisi un interval de 4,5° à 5°
		Et choisi "bière blonde"
		Et choisi "Sucrée"
		Alors seule les bières ayant ces spécifications seront reprises
		
	Scénario: Recherche impossible
		Lorsque l'utilisateur entre des spécifications
		Et qu'aucune bière ne correspond aux spécifications
		Alors aucune bière n'est affichée dans la liste des propositions
		Et l'utilisateur doit recommencer une recherche avec un autre mot
