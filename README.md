
# Protractor Example #

## Example Protractor project that:
* Makes use of page objects
* Runs tests on [Sauce Labs](http://saucelabs.com)
* Runs multiple browsers at once
* Includes examples tests for both Angular, and non-Angular applications
* Uses [protractor-flake](https://github.com/NickTomlin/protractor-flake) to re-run failed tests

## Setup:
* Install [Node](http://nodejs.org) (v4.x.x or later)
* `git clone https://github.com/qualityshepherd/protractor_example`
* `npm install` to install the project dependencies
* `node_modules/.bin/webdriver_manager update` to update drivers

## Run tests:
* `node_modules/.bin/protractor conf.js`
or with protractor-flake
* `./flake conf.js`

Or if you're a non-reader, [watch the video...](https://www.youtube.com/watch?v=JIGvty1bQxk)