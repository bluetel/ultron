import chai from 'chai';
import sinonChai from 'sinon-chai';
const expect = chai.expect;
chai.use(sinonChai);

import robot from './util/mockbot.js';
import whatsforlunch from '../scripts/whatsforlunch';

describe('whats-for-lunch', () => {
  beforeEach(() => (
    whatsforlunch(robot)
  ));
  it('registers a hear listener', () => (
    expect(robot.hear).to.have.been.calledWith(/what('|’|)s for lunch/i)
  ));
});
