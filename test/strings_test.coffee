chai     = require 'chai'
sinon    = require 'sinon'
chai.use require 'sinon-chai'
expect = chai.expect

describe 'strings', ->
  beforeEach ->
    @robot =
      respond: sinon.spy()
      hear: sinon.spy()

    require('../scripts/strings')(@robot)

  it 'registers a hear listener', ->
    expect(@robot.hear).to.have.been.calledWith(/strings?/i)
