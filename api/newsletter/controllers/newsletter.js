'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
 const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
module.exports = {
    async create(ctx) {
        let entity;
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          entity = await strapi.services.newsletter.create(data, { files });
        } else {
          entity = await strapi.services.newsletter.create(ctx.request.body);
        }
         sanitizeEntity(entity, { model: strapi.models.newsletter });
        
    // check if the comment content contains a bad word
      // send an email by using the email plugin
      await strapi.plugins['email'].services.email.send({
        to: ctx.request.body.email,
        from: 'andilemkeys@gmail.com',
        subject: 'Welcome dear valued User',
        text: `
           you are welcomed to sip from our fountain of wisdom.
           this email was sent by a very specialized program
        `,
      });

      console.log(ctx)
    return entity;
      },
};
