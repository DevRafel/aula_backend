const moment = require('moment')

function sayMayName(name){
       console.log(name);
       console.log(moment().format('HH.mm'))
}

sayMayName('Rafael Moreira Lima');