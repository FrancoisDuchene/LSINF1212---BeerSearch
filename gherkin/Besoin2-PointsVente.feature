#language fr

Fonctionnalité: Recherche d’un point de vente d’une bière
	            En tant qu’utilisateur
	            Je veux savoir ou me procurer une bière

	Contexte: Étant donné que la bière existe dans la base de données
              Et que l’utilisateur est géolocalisable	

	Scénario: Recherche d’un point de vente quelconque
              Étant donné qu’au moins un point de vente existe
		      Lorsque l’utilisateur recherche un endroit où se procurer une bière
		      Alors tous les points de vente possibles sont donnés

	Scénario: Recherche par prix maximum
              Étant donné qu’au moins un point de vente correspond à cette recherche
		      Lorsque l’utilisateur recherche une bière avec un prix maximum
              Alors les points de vente avec un prix inférieur ou égal à celui de la recherche sont donnés	

	Scénario : Recherche par distance
               Étant donné qu’au moins un point de vente correspond à cette recherche
               Lorsque l’utilisateur recherche un point de vente dans un certain rayon de distance
               Alors les points de vente le plus proche sont donnés

	Scénario : Il n’existe aucun point de vente pour la bière recherchée
		       Étant donné qu’aucun point de vente ne correspond à la recherche effectuée
               Lorsque l’utilisateur effectue une recherche
               Alors aucun point de vente n’est proposé
               Et l’utilisateur doit faire une autre recherche 
