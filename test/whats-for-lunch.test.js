const chai = require('chai');
const expect = chai.expect;
const robot = require('./util/mockbot.js');

chai.use(require('sinon-chai'));

describe('whats-for-lunch', () => {
  beforeEach(() => {
    return require('../scripts/whatsforlunch')(robot);
  });
  return it('registers a hear listener', () => {
    return expect(robot.hear).to.have.been.calledWith(/what('|’|)s for lunch/i);
  });
});
