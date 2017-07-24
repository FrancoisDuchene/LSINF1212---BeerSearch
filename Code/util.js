let Biere = require('./models/bieres');

function isIn(tab, elem){
  for(let i = 0; i<tab.length; i++){
    if(tab[i].id == elem.id){
      return true;
    }
  }
  return false;
}

exports.isIn = isIn;
