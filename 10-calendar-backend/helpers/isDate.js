const moment = require('moment'); 
// validar fechas 

const isDate = (value) => {

    if (!value) {
        return false; 
    }

    const fecha = moment( value ); 

    if ( fecha.isValid() ) {
        return true
    } else {
        return false
    }

}

module.exports = {
    isDate
}