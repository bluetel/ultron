# I've got no strings to hold me down / to make me fret, or make me frown / I had strings, but now I'm free / There are no strings on me!

module.exports = (robot) ->
  robot.hear /strings?/i, (msg) ->
    msg.send "There are no strings on me."
