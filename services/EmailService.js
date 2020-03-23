async function send(mail) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const mailFrom = process.env.MAIL_FROM || "lourework@gmail.com";
  const msg = {
    to: mail.to,
    from: mailFrom,
    subject: mail.subject,
    text: mail.message,
    html: `
      <div style="width: 600px; margin: 0 auto;">
          <p>From: ${mailFrom}</p>
          <h1 style="text-align: center">${mail.subject}</h1>
          <p>${mail.message}</p>
      </div>
  `
  };
  return sgMail.send(msg);
}

module.exports = {
  send
};
