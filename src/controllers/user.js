const request = require('request');
module.exports = {
  index: async (req, res) => {
    try {
      request.get("https://api.darksky.net/forecast/f9027dd170726ab26f9d6d0f99a467fb/19.275881,-103.646323?lang=es&units=si", (error, response, body) => {
        if (error) {
          return console.dir(error);
        }
        let weather = JSON.parse(body);
        res.render("index", { weather });
      });
    } catch (error) {
      console.error(error);
    }
  }
}
