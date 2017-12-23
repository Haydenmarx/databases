var db = require('../db');

module.exports = {
  messages: {
    get: function () {
    }, // a function which produces all the messages
    post: function () {
      //if get.user
      //have id
      //else post user
      //have id
      //INSERT message into messages with userID
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (userName, cb) {
      db.dbConnection.query(`SELECT ${userName} FROM users;`, cb);
    },
    post: function (userName) {
      return `INSERT INTO users (name) VALUES(${userName} )`;
    }
  }
}; 