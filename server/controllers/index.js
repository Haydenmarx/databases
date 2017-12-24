var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          //stuff
        } else {
          res.json(results); 
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var date; //= ...
      var params = [req.body[username], req.body[message], req.body[roomname], date];
      models.messages.post(params, function(err, results) {
        if (err) {
          //stuff
        } else {
          res.json(results); 
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      var userName = req.body[username];
      models.uers.get(userName, function(err, results) {
        if (err) {
          //stuff
        } else {
          res.json(results); 
        }
      });
    },
    post: function (req, res) {
      var userName = req.body[username];
      models.uers.post(userName, function(err, results) {
        if (err) {
          //stuff
        } else {
          res.json(results); 
        }
      });
    }
  }
};