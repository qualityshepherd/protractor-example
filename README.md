
# Protractor Example #

[ ![Codeship Status for qualityshepherd/protractor_example](https://codeship.com/projects/56e27ab0-abb1-0132-4f48-46f15878b48e/status?branch=master)](https://codeship.com/projects/68348)

## Example Protractor project that:
* Makes use of page objects
* Runs on CodeShip CI
* Runs tests on [Sauce Labs](http://saucelabs.com) [TestingBot](http://testingbot.com) and [Browserstack](http://browserstack.com) (thanks to all for open source accounts!)
* Runs multiple browsers at once
* Includes examples tests for both Angular, and non-Angular applications


## Setup:
* Install [Node](http://nodejs.org)
* `git clone https://github.com/qualityshepherd/protractor_example`
* `npm install` to install the project dependancies
* `node_modules/.bin/webdriver_manager update` to update drivers

## Run tests:
* `node_modules/.bin/protractor conf.js`

Or if you're a non-reader, [watch the video...](https://www.youtube.com/watch?v=JIGvty1bQxk)