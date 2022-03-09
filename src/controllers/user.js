const request = require('request');
module.exports = {
  getLocation: async (req, res) => {
    res.render("getLocation");
  },
  index: async (req, res) => {
    try {
      let latitude = req.body.latitude;
      let longitude = req.body.longitude;
      request.get(`https://api.darksky.net/forecast/f9027dd170726ab26f9d6d0f99a467fb/${latitude},${longitude}?lang=es&units=si`, (error, response, body) => {
        if (error) {
          return console.dir(error);
        }
        let weather = JSON.parse(body);
        // console.log(weather);
        res.render("index", { weather });
      });
    } catch (error) {
      console.error(error);
    }
  }
}
