//let Beer = require('./classeBeer');

export class Element {
  constructor(biere, prix, quantite) {
    this.Beer = biere;
    this.prix = prix;
    this.quantite = quantite;
  }
  getBeer() {
    return this.Beer;
  }
  getPrix() {
    return this.prix;
  }
  getQuantite() {
    return this.quantite;
  }
  setQuantite(quantite) {
    this.quantite = quantite;
  }
  addQuantite(quantite) {
    this.quantite = this.quantite + quantite;
  }
}
module.exports = Element;
