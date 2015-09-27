module.exports = (robot) => {
  return robot.router.put('/v1/say/:room', (req, res) => {
    const body     = req.body;
    const room     = req.params.room;
    const message  = body.message;
    const envelope = robot.brain.userForId('broadcast');

    robot.logger.info(`Message '${message}' received for room ${room}`);
    envelope.user = {};
    if (room) {
      envelope.user.room = envelope.room = room;
    }
    envelope.user.type = body.type || 'groupchat';

    if (message) {
      robot.send(envelope, message);
    }

    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    return res.end('OK\n');
  });
};
