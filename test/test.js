import { Beer } from '../classeBeer'
import { User } from '../classeUser'
import { SellPlace } from '../classeSellPlace'

describe('Beer', () => {
  let beer;

  beforeEach(( => {
    beer = new Beer();
    beer.name = 'Orval';
    beer.degree = 6.2;
    beer.SellPlace = 'Abbaye d Orval';
    beer.type = 'ambrée';
    beer.taste = 'amère';
  }));

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

  describe('#getName', function (){
    it('should return the name of the user', () =>{
      expect(user.getName()).equals('Bastin Julien');
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
