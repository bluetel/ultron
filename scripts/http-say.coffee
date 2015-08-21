module.exports = (robot) ->
  robot.router.put "/v1/say/:room", (req, res) ->
    body = req.body
    room = req.params.room
    message = body.message

    robot.logger.info "Message '#{message}' received for room #{room}"

    envelope = robot.brain.userForId 'broadcast'
    envelope.user = {}
    envelope.user.room = envelope.room = room if room
    envelope.user.type = body.type or 'groupchat'

    if message
      robot.send envelope, message

    res.writeHead 200, {'Content-Type': 'text/plain'}
    res.end 'OK\n'
