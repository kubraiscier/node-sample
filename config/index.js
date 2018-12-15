var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds163561.mlab.com:63561/nodetodosample'
    }

}