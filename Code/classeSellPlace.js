export class SellPlace
{
  constructor(position, stock) {
      this.position = position;
      this.stock = stock;
  }
  getPosition(){ // donne un lieu géographique du point de vente
    return this.position;
  }
  hasBeer(Beer){// renvoie true si la bière est en stock, false sinon
    throw new Error("not yet implemented");
  }
  getPriceBeer(Beer){ // donne le prix d'une bière dans le point de vente
    throw new Error("not yet implemented");
  }
  getStock(){ // donne les bières et la quantité restante en stock du point de vente
    return this.stock;
  }
  removeBeerFromStock(Beer, quantity){ // retire une quantité de bière du stock
    throw new Error("not yet implemented");
  }
  addBeerToStock(Beer, quantity, price){// ajoute une quantité de bière au stock
    throw new Error("not yet implemented");
  }
  sendCommand(Beer, quantity, Utilisateur){ // vérifie si la commande est
                                              //possible(quantité en stock)
    throw new Error("not yet implemented");   // et l'enregistre
  }
}
module.exports = SellPlace;
