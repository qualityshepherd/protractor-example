# Protractor Exercise

## Example Protractor project that:
* Makes use of page objects
* Uses [protractor-flake](https://github.com/NickTomlin/protractor-flake) to re-run failed tests

## Setup:
* Install [Node](http://nodejs.org) (v8.x.x or later)
* `npm install` to install the project dependencies

## Run tests:
* run tests via plain Protractor `node_modules/.bin/protractor conf.js`
* run tests `npm test` (runs via flake, which re-runs failed tests)
* run with flake `./flake conf.js`

## Troubleshooting
* run `node -v` and make sure your node version is 8.x.x or greater
* `webdriver-manager` _should_ have updated on install, but if not, run `npm run update` to be sure
