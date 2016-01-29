import chai from 'chai';
import sinonChai from 'sinon-chai';
const expect = chai.expect;
chai.use(sinonChai);

import robot from './util/mockbot.js';
import strings from '../scripts/strings';

describe('strings', () => {
  beforeEach(() => (
    strings(robot)
  ));
  it('registers a hear listener', () => (
    expect(robot.hear).to.have.been.calledWith(/strings?/i)
  ));
});
