export class SellPlace
{
  getPosition(){ // donne me lieu géographique du point de vente
    throw new Error("not yet implemented");
  }
  hasBeer(Beer beer){// renvoie true si la bière est en stock, false sinon
    throw new Error("not yet implemented");
  }
  getPriceBeer(Beer beer){ // donne le prix d'une bière dans le point de vente
    throw new Error("not yet implemented");
  }
  getStock(){ // donne les bières et la quantité restante en stock du point de vente
    throw new Error("not yet implemented");
  }
  removeBeerFromStock(Beer beer, int quantity){ // retire une quantité de bière du stock
    throw new Error("not yet implemented");
  }
  addBeerToStock(Beer beer, int quantity, double price){// ajoute une quantité de bière au stock
    throw new Error("not yet implemented");
  }
  sendCommand(Beer beer, int quantity){ // vérifie si la commande est
                                              //possible(quantité en stock)
    throw new Error("not yet implemented");   // et l'enregistre
  }
}
