# Ultron

[![Build Status](https://travis-ci.org/Bluetel-Solutions/ultron.svg?branch=master)](https://travis-ci.org/Bluetel-Solutions/ultron)

![Ultron](http://i.imgur.com/eQNMJ9g.png) Ultron is our internal Slack bot, and fills in the gaps for various bits of functionality that either aren't yet, or never will be, part of their platform.  He is very much a work-in-progress, built on Github's Hubot platform.


### Contributing 

1. To contribute to Ultron, simply fork (or create a branch on) the [Github repo](https://github.com/Bluetel-Solutions/Ultron).
2. Once you have completed your changes, commit and push up to a branch and then submit a pull request to master.
3. Travis will run the test suite, and will lint your code, and should the build result succeed your pull request will be marked accordingly.
4. Someone will review your code, and if it passes review and works sensibly and incudes appropriate tests, will merge the PR into master.
5. Heroku will automatically redeploy the successful build!

_Note: While there is a BitBucket repository for Ultron, it is no longer the main repository._


### Developing for Ultron locally

Ultron runs scripts in ES6 by means of the Babel transpiler, all of which is handled through NPM. Simply run:

    % npm install

This will download and install all dependencies required to run, test and lint Ultron.

You can start ultron locally by running:

    % npm run-script start-local

You'll see some start up output and a prompt, which will match and simulate the exact behaviour as seen in Slack:

    [Sat Feb 28 2015 12:38:27 GMT+0000 (GMT)] INFO Using default redis on localhost:6379
    ultron>

Then you can interact with ultron by typing `ultron help`.

    ultron> ultron help
    ultron animate me <query> - The same thing as `image me`, except adds [snip]
    ultron help - Displays all of the help commands that ultron knows about.
    ...

After making your desired changes, you can check to see that your syntax is correct by running:

    npm run-script lint

If all is well, this will pass with a green tick ✔.  If not, then the linter will explain exactly what is wrong, by line number and column.
Should all go well, you may then run the testing suite, which is what is run by Travis CI:

    npm test

