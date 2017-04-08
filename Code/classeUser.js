export class User {
  constructor(name, accountNumber, balance, place) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.name = name;
    this.place = place;
    this.receivedMessage = null;
  }
  getName(){// renvoie le nom de l'utilisateur
    return this.name;
  }
  getAccountNumber(){// renvoie le numéro de compte bancaire
    return this.accountNumber;
  }
  getBalance(){// renvoie le solde du compte
    return this.balance;
  }
  getPlace(){// renvoie le point géographique d'où la requête a été faite
    return this.place;
  }
  sendMessage(message){// envoie un message à l'utilisateur
    throw new Error("not yet implemented");
  }
  getMessages(){ // renvoie tous les messages reçu par l'utilisateur
    return this.receivedMessage;
  }
  getLastMessage(){ // renvoie le dernier message reçu
                    // Comme receivedMessage est un tableau, on renvoie
                    // la derniere entree connue
    return this.receivedMessage[(this.receivedMessage.length)-1];
  }
  supplyAccount(quantity){ // ajoute une quantité d'argent au compte
    throw new Error("not yet implemented");
  }
  removeAccount(quantity){// enlève une quantité d'argent au copmpte
    throw new Error("not yet implemented");
  }
}
module.exports = User;
