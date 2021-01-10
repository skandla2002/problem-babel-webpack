const sum = require("./common/sum");

function babelBuildSample() {
  console.log("babel-build-start");
  return "build-success : " + sum();
}

modules.export = babelBuildSample;
