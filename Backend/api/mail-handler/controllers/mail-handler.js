'use strict';

/**
 * A set of functions called "actions" for `mail-handler`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const body = ctx.request.body;
      console.log(body);
      ctx.status = 404;
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },
  sendMail: async (ctx, next) => {
    try {
      const body = ctx.request.body;
      if (!body) throw { status: 400, message: 'NO_PARAM' };
      if (!body.sender || !body.from || !body.message) throw { status: 400, message: 'MISSING_PARAMS' };
      if (!body.from.phone || !body.from.name || !body.from.email) throw { status: 400, message: 'MISSING_SENDER_PARAMS' };
      if (!body.message.subject) throw { status: 400, message: 'MISSING_MAIL_PARAMS' };

      const text = `${body.message.text || "Contact Me Please."}\n\nName:\t${body.from.name}\nPhone:\t${body.from.phone}\nEmail:\t${body.from.email}`;
      const html = `<div><p>${body.message.text || "Contact Me Please."}</p><p>Name: ${body.from.name}</p><p>Email: ${body.from.email}</p><p>Phone: ${body.from.phone}</p></div>`

      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: body.sender,
        from: body.sender,
        subject: body.message.subject,
        text: text,
        html: html,
      };
      await sgMail.send(msg);

      ctx.status = 200;
      ctx.body = 'SUCCESS';
    }
    catch (e) {
      console.log(e.response.body);
      if (!e.status) e.status = 500;
      if (!e.message) e.message = 'Internal Server Error.';

      ctx.response.status = e.status;
      ctx.response.message = e.body;
    }
  }
};
