// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sendgrid_creds = require('./sendgrid_credentials.js');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(sendgrid_creds);

const msg = {
  to: 'chosuh2012@gmail.com',
  from: 'mailer@kyle_p.tech',
  subject: 'SendGrid Lecture',
  text: 'Hi. Do you want Pocky? :)'
};

sgMail.send(msg);