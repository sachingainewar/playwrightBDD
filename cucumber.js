module.exports = {
    default: {
      format: [
        'pretty',
        'json:./reports/cucumber.json' // Example path
      ],
      requireModule: ['@cucumber/cucumber'],
      require: ['support/**/*.js', 'features/**/*.js'],
    },
  };