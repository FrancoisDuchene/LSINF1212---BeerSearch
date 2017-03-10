export class SellPlace
{
  getPosition(){ // donne me lieu géographique du point de vente
    throw new Error("not yet implemented");
  }
  getBeerList(){ // donne la lsite des bières en vente dans le point de vente
    throw new Error("not yet implemented");
  }
  hasBeer(string nameBeer){// renvoie true si la bière est en stock, false sinon
    throw new Error("not yet implemented");
  }
  getPriceBeer(string nameBeer){ // donne le prix d'une bière dans le point de vente
    throw new Error("not yet implemented");
  }
  getStock(){ // donne les bières et la quantité restante en stock du point de vente
    throw new Error("not yet implemented");
  }
  removeBeerFromStock(int quantity){ // retire une quantité de bière du stock
    throw new Error("not yet implemented");
  }
  addBeerToStock(int quantity){// ajoute une quantité de bière au stock
    throw new Error("not yet implemented");
  }
  sendCommand(string nameBeer, int quantity){ // vérifie si la commande est
                                              //possible(quantité en stock)
    throw new Error("not yet implemented");   // et l'enregistre
  }
}
