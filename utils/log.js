var log4js = require("log4js");

log4js.configure({
  appenders: { cheese: { type: "file", filename: "run_results.log" } },
  categories: { default: { appenders: ["cheese"], level: "info" } }
});

module.exports = log4js;