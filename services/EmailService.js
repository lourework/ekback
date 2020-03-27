async function send({name, email, message}) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const mailFrom = process.env.MAIL_FROM || "lourework@gmail.com";
  const subject = process.env.subject || `Novo contato de ${name}`;
  const msg = {
    to: process.env.MAIL_TO || 'lourework@gmail.com',
    from: mailFrom,
    subject,
    text: message,
    html: `
      <div style="width: 600px; margin: 0 auto;">
          <p>From: ${email}</p>
          <h1 style="text-align: center">${subject}</h1>
          <p>${message}</p>
      </div>
  `
  };
  return sgMail.send(msg);
}

module.exports = {
  send
};
