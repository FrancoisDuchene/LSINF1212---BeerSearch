export class User {
  constructor(name, accountNumber, balance, place) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.name = name;
    this.place = place;
    this.receivedMessage = null;
  }
  getName() {// renvoie le nom de l'utilisateur
    return this.name;
  }
  getAccountNumber() {// renvoie le numéro de compte bancaire
    return this.accountNumber;
  }
  getBalance() {// renvoie le solde du compte
    return this.balance;
  }
  getPlace() {// renvoie le point géographique d'où la requête a été faite
    return this.place;
  }
  sendMessage(message) {// envoie un message à l'utilisateur
    // On regarde d'abbord si c'est bien un string
    if(typeof message === 'string' || message instanceof String) {
      if(this.receivedMessage === null ) {
        this.receivedMessage = [message];
      }else {
        this.receivedMessage.push(message);
      }
    }else {
      throw new Error("Is not a string");
    }
  }
  getMessages() { // renvoie tous les messages reçu par l'utilisateur
    return this.receivedMessage;
  }
  getLastMessage() { // renvoie le dernier message reçu
                    // Comme receivedMessage est un tableau, on renvoie
                    // la derniere entree connue
    return this.receivedMessage[(this.receivedMessage.length)-1];
  }
  supplyAccount(quantity) { // ajoute une quantité d'argent au compte
    if(isNaN(quantity)) {
      throw new Error("Is not a number");
    }else{
      this.balance = this.balance + quantity;
    }
  }
  removeAccount(quantity) {// enlève une quantité d'argent au compte
    if(isNaN(quantity)) {
        throw new Error("Is not a number");
    }else{
      let newBalance = this.balance;
      newBalance = this.balance - quantity;
      if(newBalance < 0) {
        return "Votre solde est trop bas !";
      }else{
        this.balance = newBalance;
        return "Votre solde a été mis à jour !";
      }
    }
  }
}
module.exports = User;
