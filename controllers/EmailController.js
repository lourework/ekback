const { send } = require("./../services/EmailService");

class EmailController {
  async send(req, res) {
    try {
      await send(req.body);
      return res.send({
        error: false,
        message: "Email enviado com sucesso."
      });
    } catch (error) {
      console.log("Error sending email", error);
      return res.status(error.code || 500).send({
        error: true,
        message: error.message || "Não foi possível enviar o email, tente novamente."
      });
    }
  }
}

module.exports = new EmailController();
