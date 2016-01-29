import chai from 'chai';
import sinonChai from 'sinon-chai';
const expect = chai.expect;
chai.use(sinonChai);

import robot from './util/mockbot.js';
import coffeeTime from '../scripts/coffee-time';

describe('coffee-time', () => {
  beforeEach(() => (
    coffeeTime(robot)
  ));
  it('registers a hear listener', () => (
    expect(robot.hear).to.have.been.calledWith(/\@([\w\.\-]+)/i)
  ));
});
