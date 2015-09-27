module.exports = (robot) => {
  return robot.hear(/what('|’|)s for lunch/i, (msg) => {
    const wfl = require('whatsforlunch');
    return wfl((err, food) => {
      if (err) {
        robot.logger.error(err);
      } else {
        return msg.send(food);
      }
    });
  });
};
