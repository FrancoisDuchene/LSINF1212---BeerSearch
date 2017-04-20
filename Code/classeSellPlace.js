export class SellPlace
{
  //Position doit etre un string
  //Stock est un tableau d'elements
  constructor(position, stock) {
      this.position = position;
      this.stock = stock;
  }
  getPosition(){ // donne un lieu géographique du point de vente
    return this.position;
  }
  hasBeer(Beer){// renvoie true si la bière est en stock, false sinon
    this.stock.forEach(function(item, index, array) {
      if(item.getBeer() === Beer) {
        return true;
      }
    });
    return false;
  }
  getPriceBeer(Beer) { // donne le prix d'une bière dans le point de vente
    this.stock.forEach(function(item, index, array) {
      if(item.getBeer() === Beer) {
        return item.getPrix();
      }
    });
    return -1;
  }
  getStock(){ // donne les bières et la quantité restante en stock du point de vente
    return this.stock;
  }
  removeQuantityBeer(Beer, quantity) {
    this.stock.forEach(function(item, index, array) {
      if(item.getBeer() === Beer) {
        if(item.getQuantite() <= quantity) {
          item.setQuantite(0);
        }else{
          item.setQuantite(this.getQuantite-quantite);
        }
      }
    });
  }
  addQuantityBeer(Beer, quantity) {
    throw new Error("not yet implemented");
  }
  removeElementFromStock(Beer) { // retire une quantité de bière du stock
    throw new Error("not yet implemented");
  }
  addElementToStock(Beer, quantity, price) {// ajoute une quantité de bière au stock
    throw new Error("not yet implemented");
  }
  sendCommand(Beer, quantity, Utilisateur) { // vérifie si la commande est
                                              //possible(quantité en stock)
    throw new Error("not yet implemented");   // et l'enregistre
  }
}
module.exports = SellPlace;
