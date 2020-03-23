const { send } = require("./../services/EmailService");

class EmailController {
  async send(req, res) {
    console.log("Send email with values", req.body);
    const emailSent = await send(req.body);
    console.log("email sent", emailSent);
    return res.send({
      error: false,
      message: "Email sent successfully!"
    });
  }
}

module.exports = new EmailController();
