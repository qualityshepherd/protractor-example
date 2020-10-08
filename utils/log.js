var log4js = require("log4js");

log4js.configure({
  appenders: { cheese: { type: "file", filename: "run_results.log" } },
  categories: { default: { appenders: ["cheese"], level: "info" } }
});

module.exports = log4js;

// const logger = log4js.getLogger("cheese");
// logger.trace("Entering cheese testing");
// logger.debug("Got cheese.");
// logger.info("Cheese is Comté.");
// logger.warn("Cheese is quite smelly.");
// logger.error("Cheese is too ripe!");
// logger.fatal("Cheese was breeding ground for listeria.");

//https://github.com/log4js-node/log4js-node