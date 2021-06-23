module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY','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'),
      },
      settings: {
        defaultFrom: 'andilemkeys@gmail.com',
        defaultReplyTo: 'andilemkeys@gmail.com',
        testAddress: 'andilemkhizekhabazela@gmail.com',
      },
    },
    // ...
  });