import CoffeeTime from '../scripts/coffee-time';
const chai = require('chai');
const expect = chai.expect;
const robot = require('./util/mockbot.js');

chai.use(require('sinon-chai'));

describe('coffee-time', () => {
  beforeEach(() => {
    return new CoffeeTime(robot);
  });
  it('registers a hear listener', () => {
    return expect(robot.hear).to.have.been.calledWith(/\@([\w\.\-]+)/i);
  });
});
