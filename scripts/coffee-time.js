export default robot => (
  robot.hear(/\@([\w\.\-]+)/i, (msg) => {
    const user = msg.match[1].trim();
    const users = robot.brain.userForName(user);
    if (users.length === 1) {
      return msg.send(`${user} is probably drinking a coffee`);
    }
  })
);
