const express = require('express');

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.use(require('./server'));
  }
}

module.exports = new AppController().express