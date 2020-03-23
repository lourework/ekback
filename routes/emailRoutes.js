const EmailController = require('./../controllers/EmailController');

module.exports = (app) => {

  app.post(`/api/email`, EmailController.send);
  
}