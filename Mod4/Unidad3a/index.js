var moment = require('moment');

moment.locale('es');
console.log ('Naci ' + moment('27/03/1987', 'DD/MM/YYYY').fromNow());