var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT users.name, message.id messages.message, messages.room, messages.posted FROM messages INNER JOIN users ON users.id = messages.user_id;', function(err, results) {
        cb(results);
      });
    }, // a function which produces all the messages
    post: function (userName, message, room, posted, cb) {
      db.query(`INSERT INTO messages (user_id, message, room, posted) VALUES(${userName} )`, function(err, results) {
        cb(results);
      });      
    } // a function which can be used to insert a message into the database
  },

  /*


'SELECT users.name, message.id messages.message, \
messages.room, messages.posted FROM messages \
LEFT OUTER JOIN users ON users.id = messages.user_id; \
order by message.id desc'

`INSERT INTO messages (user_id, message, room, posted) \
VALUES(SELECT id from users WHERE name = ${userName} limit 1, \
${message},${room},${posted})`




*/

  users: {
    // Ditto as above.
    get: function (userName, cb) {
      db.query(`SELECT * FROM users WHERE name=${userName};`, function(err, results) {
        cb(results);
      });
    },
    post: function (userName, cb) {
      db.query(`INSERT INTO users (name) VALUES(${userName})`, function(err, results) {
        cb(results);
      });
    }
  }
}; 
