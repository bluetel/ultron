module.exports = (robot) ->
  robot.hear /what('|’|)s for lunch/i, (msg) ->
    wfl = require("whatsforlunch");
    wfl (err, food) ->
      if err
      else
        msg.send food
