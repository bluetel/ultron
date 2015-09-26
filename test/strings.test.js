const chai = require('chai');
const expect = chai.expect;
const robot = require('./util/mockbot.js');

chai.use(require('sinon-chai'));

describe('test', () => {
  beforeEach(() => {
    return require('../scripts/strings')(robot);
  });
  return it('registers a hear listener', () => {
    return expect(robot.hear).to.have.been.calledWith(/strings?/i);
  });
});
