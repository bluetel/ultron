import wfl from 'whatsforlunch';
export default robot => (
  robot.hear(/what('|’|)s for lunch/i, (msg) => (
    wfl((err, food) => (err ? robot.logger.error(err) : msg.send(food)))
  ))
);
