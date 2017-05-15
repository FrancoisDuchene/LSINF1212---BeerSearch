export class SellPlace
{
  //Position doit etre un string
  //Stock est un tableau d'elements
  //latitude et longitude sont des nombres flottants
  constructor(position, stock, latitude, longitude) {
      this.position = position; //Un string decrivant le lieu
      this.stock = stock;
      this.latitude = latitude;
      this.longitude = longitude;
  }
  getPosition(){ // donne un lieu géographique du point de vente
    return this.position;
  }
  getLatitude() {
    return this.latitude;
  }
  getLongitude() {
    return this.longitude;
  }
  hasBeer(Beer){// renvoie true si la bière est en stock, false sinon
    this.stock.forEach(function(item, index, array) {
      if(item.getBeer().getName() === Beer.getName() && item.getBeer().getDegree() === Beer.getDegree() &&
        item.getBeer().getSellPlace() === Beer.getSellPlace() && item.getBeer().getType() === Beer.getType() &&
        item.getBeer().getTaste() === Beer.getTaste()) {
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
    this.stock.forEach(function(item, index, array) {
      if(item.getBeer() === Beer) {
        item.addQuantite(quantity);
      }
    });
  }
  removeElementFromStock(Beer) { // retire une quantité de bière du stock
    this.stock.forEach(function(item, index, array) {
      if(item.getBeer() === Beer) {
        let removedItem = this.stock.splice(index,index);
      }
    });
  }
  addElementToStock(Beer, quantity, price) {// ajoute une quantité de bière au stock
    if(Beer.getName() !== null) {
      let elem = new Element(Beer, price, quantity);
      this.stock.push(elem);
    }
  }
  sendCommand(Beer, quantity, Utilisateur) {  // vérifie si la commande est
                                              //possible(quantité en stock)
    throw new Error("not yet implemented");   // et l'enregistre
  }
}
module.exports = SellPlace;
