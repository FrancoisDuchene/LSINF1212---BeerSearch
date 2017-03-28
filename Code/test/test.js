let Beer = require('../classeBeer');
let User = require('../classeUser');
let SellPlace = require ('../classeSellPlace');

describe('Beer', () => {
  let beer;

  beforeEach(() => {
    beer = new Beer();
    beer.name = 'Orval';
    beer.degree = 6.2;
    beer.SellPlace = 'Abbaye d Orval';
    beer.type = 'ambrée';
    beer.taste = 'amère';
  });

  describe('#getName', function () {
    it('should return the name of the beer', () =>{
      expect(beer.getName()).equals('Orval');
    });
  });

  describe('#getDegree', function () {
    it('should return the degree of the beer', () =>{
      expect(beer.getDegree()).equals(6.2);
    });
  });

  describe('#getSellPlace', function() {
    it('should return the sell place of the beer', () =>{
      expect(beer.getSellPlace()).equals('Abbaye d Orval');
    });
  });

  describe('#getType', function() {
    it('should return the type of the beer', () =>{
      expect(beer.getType()).equals('ambrée');
    });
  });

  describe('#getTaste', function() {
    it('should return the taste of the beer', () =>{
      expect(beer.getTaste()).equals('amère');
    });
  });

});

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User();
    user.accountNumber = '25300';
    user.Balance = 0.0;
    user.name = 'Bastin Julien';
    user.place = 'Louvain-La-Neuve';
    user.receivedMessage = null;
  });

  describe('#getName', function (){
    it('should return the name of the user', () =>{
      expect(user.getName()).equals('Bastin Julien');
    });
  });

  describe('#getAccountNumber', function (){
    it('should return the account number of the user', () =>{
      expect(user.getAccountNumber()).equals('25300');
    });
  });

  describe('#getBalance', function (){
    it('should return the balance of the user', () =>{
      expect(user.getBalance()).equals(0);
    });
  });

  describe('#getPlace', function (){
    it('should return the place of the user', () =>{
      expect(user.getPlace()).equals('Louvain-La-Neuve');
    });
  });

  describe('#sendMessage', function (){
    it('should sent a message to the user', () => {
      user.sendMessage("a message");
      expect(user.receivedMessage).not.toBeEmpty();
      expect(user.receivedMessage).equals("a message");
    });
    after(function () {
      user.receivedMessage = null;
    })
  });

  describe('#getMessages', function(){
    before(function() {
        user.receivedMessage = ["a message", "another one", "and again another"];
    });
    it('should return the messages received by the user', () => {
      expect(user.getMessages()).to.be.a('array');
      expect(user.getMessages()).to.not.be.empty();
      expect(user.getMessages()).to.have.length(3);
      expect(user.getMessages()).contain("a message");
      expect(user.getMessages()).contain("another one");
      expect(user.getMessages()).contain("and again another");
    });
    after(function() {
      user.receivedMessage = null;
    })
  });

  describe('#getLastMessage', function(){
    before(function() {
        user.receivedMessage = "a message";
    });
    it('should return the messages received by the user', () => {
      expect(user.getMessages()).to.not.be.Empty();
      expect(user.getMessages()).equals("a message");
    });
    after(function() {
      user.receivedMessage = null;
    })
  });

  describe('#supplyAccount', function (){
    it('should increase the balance of the user', () =>{
      user.supplyAccount(5.0);
      expect(user.getBalance()).equals(5.0);
    });
    after(function(){
      user.balance = 0;
    });
  });

  describe('#removeAccount', function (){
    before(function(){
      user.balance = 10.0;;
    });
    it('should remove the amount of money passed of the balance of the user', () =>{
      user.removeAccount(5.0);
      expect(user.getBalance()).equals(5.0);
    });
    after(function(){
      user.balance = 0.0;
    });
  });
});

describe('SellPlace', () =>{
  let sellPlace;
  let orval;
  let leffe;
  let tk;
  let chimay;

  beforeEach(() =>{
    sellPlace = new SellPlace();
    orval = new Beer();
    leffe = new Beer();
    tk = new Beer();
    chimay = new Beer();
    sellPlace.position = 'Louvain-La-Neuve';
    sellPlace.stock = [[orval, 20, 2.5], [leffe, 40, 1.5], [tk, 10, 2.0]];
  });

  describe('#getPosition', function (){
    it('should return the position of the sell place', () =>{
      expect(sellPlace.getPosition()).equals('Louvain-La-Neuve');
    });
  });

  describe('#hasBeer', function (){
    it('should return true if the sell place have the beer pasted', () =>{
      expect(sellPlace.hasBeer(orval)).equals(true);
      expect(sellPlace.hasBeer(chimay)).equals(false);
    });
  });

  describe('#getPriceBeer', function (){
    it('should return the price of the beer or -1 if the sell place doesn\'t have the beer', () =>{
      expect(sellPlace.getPriceBeer(orval)).equals(2.5);
      expect(sellPlace.getPriceBeer(chimay)).equals(-1);
    });
  });

  describe('#getStock', function (){
    it('should return the stock of the sell place', () =>{
      expect(sellPlace.getStock()).equals('20 Orval, 40 Leffe, 10 Triples Karmeliet');
    });
  });

  describe('#removeBeerFromStock', function () {
    it('should remove the quntity of beer passed from the stock', () => {
      sellPlace.removeBeerFromStock(leffe, 5);
      expect(sellPlace.getStock()).equals('20 Orval, 35 Leffe, 10 Triples Karmeliet');
    });
  });

  describe('#addBeerToStock', function () {
    it('should add the quanity of beer with his price passed to the stock', () =>{
      sellPlace.addBeerToStock(chimay, 20, 2.3);
      expect(sellPlace.getStock()).equals('20 Orval, 35 Leffe, 10 Triples Karmeliet, 20 Chimay')
    });
  });

  describe('#sendCommand', function () {
    it('should verify if the command is possible, then register the command and return 1, else return -1', () =>{
      expect(sellPlace.sendCommand(orval, 10)).equals(1);
      expect(sellPlace.command).equals([orval, 10]);
      expect(sellPlace.sendCommand(Leffe, 70)).equals(-1);
      expect(sellPlace.command).equals([orval, 10]);
    });
  });
});
