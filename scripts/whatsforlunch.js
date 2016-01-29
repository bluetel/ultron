import wfl from 'whatsforlunch';
export default robot => (
  robot.hear(/what('|’|)s for lunch/i, (msg) => (
    wfl((err, food) => {
      if (err) {
        robot.logger.error(err);
      } else {
        return msg.send(food);
      }
    })
  ))
);
