[ ![Codeship Status for qualityshepherd/protractor-example](https://app.codeship.com/projects/56e27ab0-abb1-0132-4f48-46f15878b48e/status?branch=master)](https://app.codeship.com/projects/68348)

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
* run `npm test`
or directly with protractor:
* `node_modules/.bin/protractor conf.js`
or directly with protractor-flake:
* `./flake conf.js`
or on saucelabs (add your username/key)
* `./flake sauceConf.js`

Or if you're a non-reader, [watch the video...](https://www.youtube.com/watch?v=JIGvty1bQxk)

## Troubleshooting
* run `node -v` and make sure your node version is 4.x.x or greater
* `webdriver-manager` _should_ have updated on install, but if not, run `npm run update` to be sure
