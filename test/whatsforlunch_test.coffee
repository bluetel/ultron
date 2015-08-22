chai     = require 'chai'
sinon    = require 'sinon'
chai.use require 'sinon-chai'
expect   = chai.expect

describe 'whatsforlunch', ->
  beforeEach ->
    @robot =
      respond: sinon.spy()
      hear: sinon.spy()

    require('../scripts/whatsforlunch')(@robot)

  it 'registers a hear listener', ->
    expect(@robot.hear).to.have.been.calledWith(/what('|’|)s for lunch/i)
