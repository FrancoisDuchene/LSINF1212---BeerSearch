export class User {
  getName(){// renvoie le nom de l'utilisateur
    throw new Error("not yet implemented");
  }
  getAccountNumber(){// renvoie le numéro de compte bancaire
    throw new Error("not yet implemented");
  }
  getBalance(){// renvoie le solde du compte
    throw new Error("not yet implemented");
  }
  getPlace(){// renvoie le point géographique d'où la requête a été faite
    throw new Error("not yet implemented");
  }
  sendMessage(message){// envoie un message à l'utilisateur
    throw new Error("not yet implemented");
  }
  getMessages(){ // renvoie tous les messages reçu par l'utilisateur
    throw new Error("not yet implemented");
  }
  getLastMessage(){ // renvoie le dernier message reçu
    throw new Error("not yet implemented");
  }
  supplyAccount(quantity){ // ajoute une quantité d'argent au compte
    throw new Error("not yet implemented");
  }
  removeAccount(quantity){// enlève une quantité d'argent au copmpte
    throw new Error("not yet implemented");
  }
}
module.exports = User;
