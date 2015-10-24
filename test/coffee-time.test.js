const chai = require('chai');
const expect = chai.expect;
const robot = require('./util/mockbot.js');

chai.use(require('sinon-chai'));

describe('coffee-time', () => {
  beforeEach(() => {
    return require('../scripts/coffee-time')(robot);
  });
  it('registers a hear listener', () => {
    return expect(robot.hear).to.have.been.calledWith(/\@([\w\.\-]+)/i);
  });
});
