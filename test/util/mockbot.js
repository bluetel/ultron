const sinon = require('sinon');

/* Mock hubot */
module.exports = {
  hear: sinon.spy(),
  respond: sinon.spy(),
};
