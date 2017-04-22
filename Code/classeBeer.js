export class Beer
{
  constructor(name, degree, SellPlace, type, taste) {
    this.name = name;
    this.degree = degree;
    this.sellPlace = SellPlace;
    this.type = type;
    this.taste = taste;
  }
  getName() {// renvoie le nom de la bière
    return this.name;
  }
  getDegree() {//renvoie le taux d'alcohol de la bière
  return this.degree;
  }
  getSellPlace() {// renvoie les points de vente qui disposent de la bière
    return this.sellPlace;
  }
  getType() { // renvoie le type de la bière
    return this.type;
  }
  getTaste() {// renvoie le goût de la bière
    return this.taste;
  }
  setSellPlace(sellPlace) {
    this.sellPlace = sellPlace;
  }
}
module.exports = Beer;
