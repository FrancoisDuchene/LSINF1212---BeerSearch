let expect = require('chai').expect;
let Beer = require('../classeBeer');
let User = require('../classeUser');
let SellPlace = require('../classeSellPlace');
let Element = require('../classeElement');

describe('Beer', () => {
  let beer;

  beforeEach(() => {
    beer = new Beer('Orval',6.2,'Abbaye d Orval','ambrée','amère');
  });

  describe('#getName', function () {
    it('should return the name of the beer', () => {
      expect(beer.getName()).to.be.a('string');
      expect(beer.getName()).equals('Orval');
    });
  });

  describe('#getDegree', function () {
    it('should return the degree of the beer', () => {
      expect(beer.getDegree()).to.be.a('number');
      expect(beer.getDegree()).equals(6.2);
    });
  });

  describe('#getSellPlace', function() {
    it('should return the sell place of the beer', () => {
      expect(beer.getSellPlace()).to.be.a('string');
      expect(beer.getSellPlace()).equals('Abbaye d Orval');
    });
  });

  describe('#getType', function() {
    it('should return the type of the beer', () => {
      expect(beer.getType()).to.be.a('string');
      expect(beer.getType()).equals('ambrée');
    });
  });

  describe('#getTaste', function() {
    it('should return the taste of the beer', () => {
      expect(beer.getTaste()).to.be.a('string');
      expect(beer.getTaste()).equals('amère');
    });
  });
});

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User('Bastin Julien','25300',0.0,'Louvain-La-Neuve',null);
  });

  describe('#getName', function () {
    it('should return the name of the user', () => {
      expect(user.getName()).to.be.a('string');
      expect(user.getName()).equals('Bastin Julien');
    });
  });

  describe('#getAccountNumber', function () {
    it('should return the account number of the user', () => {
      expect(user.getAccountNumber()).equals('25300');
    });
  });

  describe('#getBalance', function () {
    it('should return the balance of the user', () => {
      expect(user.getBalance()).to.be.a('number');
      expect(user.getBalance()).equals(0);
    });
  });

  describe('#getPlace', function () {
    it('should return the place of the user', () => {
      expect(user.getPlace()).to.be.a('string');
      expect(user.getPlace()).equals('Louvain-La-Neuve');
    });
  });

  describe('#sendMessage', function () {
    it('should sent a message to the user when he didnt received yet', () => {
      user.sendMessage("a message");
      expect(user.receivedMessage).to.not.be.a('null');
      expect(user.receivedMessage).to.not.be.an('undefined');
      expect(user.receivedMessage).to.be.a('array');
      expect(user.receivedMessage[0]).equals("a message");
      user.receivedMessage = null;
    });
    it('should sent a message to the user when he received some before', () => {
      user.receivedMessage = ["blahblahblah", "blublublublublu", "oui je n'ai pas d'imagination"];
      user.sendMessage("a message");
      expect(user.receivedMessage).to.not.be.a('null');
      expect(user.receivedMessage).to.not.be.an('undefined');
      expect(user.receivedMessage).to.be.a('array');
      expect(user.receivedMessage[0]).equals("blahblahblah");
      expect(user.receivedMessage[1]).equals("blublublublublu");
      expect(user.receivedMessage[2]).equals("oui je n'ai pas d'imagination");
      expect(user.receivedMessage[3]).equals("a message");
      user.receivedMessage = null;
    });
  });

  describe('#getMessages', function() {
    it('should return the messages received by the user', () => {
      user.receivedMessage = ["a message", "another one", "and again another"];
      expect(user.getMessages()).to.not.be.a('null');
      expect(user.getMessages()).to.not.be.an('undefined');
      expect(user.getMessages()).to.be.a('array');
      expect(user.getMessages()).to.have.length(3);
      expect(user.getMessages()).contain("a message");
      expect(user.getMessages()).contain("another one");
      expect(user.getMessages()).contain("and again another");
    });
    after(function() {
      user.receivedMessage = null;
    })
  });

  describe('#getLastMessage', function() {
    it('should return the messages received by the user', () => {
      user.receivedMessage = "a message";
      expect(user.getMessages()).to.not.be.a('null');
      expect(user.getMessages()).to.not.be.an('undefined');
      expect(user.getMessages()).to.be.a('string');
      expect(user.getMessages()).equals("a message");
    });
    after(function() {
      user.receivedMessage = null;
    });
  });

  describe('#supplyAccount', function () {
    it('should increase the balance of the user', () =>{
      user.balance = 0;
      user.supplyAccount(5.0);
      expect(user.getBalance()).to.be.a('number');
      expect(user.getBalance()).equals(5.0);
    });
    after(function(){
      user.balance = 0;
    });
  });

  describe('#removeAccount', function () {
    it('should remove the amount of money passed of the balance of the user', () =>{
      user.balance = 10.0;
      user.removeAccount(5.0);
      expect(user.getBalance()).to.be.a('number');
      expect(user.getBalance()).equals(5.0);
    });
    after(function(){
      user.balance = 0.0;
    });
  });
});

describe('Elem', () => {
  let elem;
  let biere;

  beforeEach(() => {
    biere = new Beer("Orval", 2.0, null, "ambre", "amere");
    elem = new Element(biere, 3, 20);
  });

  describe('#getBeer', function () {
    it('should show the beer of the element', () =>{
      expect(elem.getBeer()).equals(new Beer("Orval", 2.0, null, "ambre", "amere"));
    });
  });

  describe('#getPrix', function () {
    it('should show the price of the element', () =>{
      expect(elem.getPrix()).equals(3);
    });
  });

  describe('#getQuantite', function () {
    it('should show the quantite of the element', () =>{
      expect(elem.getQuantite()).equals(20);
    });
  });

  describe('#setQuantite', function () {
    it('should change the quantity of the element', () =>{
      elem.setQuantite(50);
      expect(elem.getBeer()).to.be.a('number');
      expect(elem.getBeer()).equals(50);
    });
  });
});

describe('SellPlace', () => {
  let sellPlace;
  let orval;
  let leffe;
  let tk;
  let chimay;
  let stock

  beforeEach(() => {
    orval = new Beer();
    leffe = new Beer();
    tk = new Beer();
    chimay = new Beer();
    stock = [new Element(orval,2.5, 20),new Element(leffe, 1.5, 40), new Element(tk, 2.0, 10)];
    sellPlace = new SellPlace('Louvain-La-Neuve',stock);
  });

  describe('#getPosition', function () {
    it('should return the position of the sell place', () => {
      expect(sellPlace.getPosition()).equals('Louvain-La-Neuve');
    });
  });

  describe('#hasBeer', function () {
    it('should return true if the sell place have the beer pasted', () => {
      expect(sellPlace.hasBeer(orval)).equals(true);
      expect(sellPlace.hasBeer(chimay)).equals(false);
    });
  });

  describe('#getPriceBeer', function () {
    it('should return the price of the beer or -1 if the sell place doesn\'t have the beer', () => {
      expect(sellPlace.getPriceBeer(orval)).equals(2.5);
      expect(sellPlace.getPriceBeer(chimay)).equals(-1);
    });
  });

  describe('#getStock', function () {
    it('should return the stock of the sell place', () => {
      let stock = sellPlace.getStock();
      expect(stock).to.be.a('array');
      expect(stock).to.have.length(3);
      expect(stock[0]).equals(new Element(orval,2.5, 20));
    });
  });

  describe('#removeQuantityBeer', function () {
    it('should remove the quantity of beer passed from the stock', () => {
      sellPlace.removeQuantityBeer(leffe, 5);
      let stock = sellPlace.getStock();
      expect(stock[1].getQuantite()).equals(35);
    });
    it("should do nothing when try to remove an element which isn't in the stock", () => {
      sellPlace.removeQuantityBeer(chimay, 5);
      let stock = sellPlace.getStock();
      //TODO
      expect(stock[1].getQuantite()).equals(35);
    });
  });

  describe('#addQuantityBeer', function () {
    it('should add a quantity of beer passed from the stock', () => {
      sellPlace.addQuantityBeer(leffe, 5);
      let stock = sellPlace.getStock();
      //TODO
      expect(stock[1].getQuantite()).equals(35);
    });
  });

  describe('#removeElementFromStock', function () {
    it('should remove the element passed from the stock', () => {
      sellPlace.removeElementFromStock(leffe);
      let stock = sellPlace.getStock();
      //TODO
      expect(stock[1].getQuantite()).equals(35);
    });
  });

  describe('#addElementToStockNewBeer', function () {
    it('should add a element with his price and quantity to the stock', () => {
      sellPlace.addElementToStock(chimay, 2.3, 20);
      let stock = sellPlace.getStock();
      //TODO
      expect(stock[3]).equals(new Element(chimay, 2.3, 20));
    });
  });

  describe('#sendCommand', function () {
    it('should verify if the command is possible, then register the command and return 1, else return -1', () => {
      expect(sellPlace.sendCommand(orval, 10)).equals(1);
      expect(sellPlace.command).equals([orval, 10]);
      expect(sellPlace.sendCommand(Leffe, 70)).equals(-1);
      expect(sellPlace.command).equals([orval, 10]);
    });
  });
});
