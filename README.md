[ ![Codeship Status for qualityshepherd/protractor-example](https://app.codeship.com/projects/56e27ab0-abb1-0132-4f48-46f15878b48e/status?branch=master)](https://app.codeship.com/projects/68348)

# Protractor Example
Herein lies an example [Protractor](http://protractortest.org) project, that includes tests (some quite silly) that aim to illustrate solutions for common issues when writing e2e tests.

## Example Protractor project that:
* Makes use of page objects
* Runs tests on [Sauce Labs](http://saucelabs.com)
* Runs multiple browsers at once
* Runs tests sharded (parallel)
* Includes examples tests for both Angular, and non-Angular applications
* Uses [protractor-flake](https://github.com/NickTomlin/protractor-flake) to re-run failed tests
* is written using es6

## Setup:
* Install [Node](http://nodejs.org) (v6.x.x or later)
* `git clone https://github.com/qualityshepherd/protractor_example`
* `npm install` to install the project dependencies
* `node_modules/.bin/webdriver-manager update` to update drivers (this _should_ be run automagically on install)

## Run tests:
* run tests via plain Protractor `node_modules/.bin/protractor conf.js`
* run tests `npm test` (runs via flake, which re-runs failed tests)
* run with flake `./flake conf.js`
* run on saucelabs`./flake sauceConf.js` (add your username/key)

Or if you're a non-reader, [watch the video...](https://www.youtube.com/watch?v=JIGvty1bQxk)

## Troubleshooting
* run `node -v` and make sure your node version is 6.x.x or greater
* `webdriver-manager` _should_ have updated on install, but if not, run `npm run update` to be sure
