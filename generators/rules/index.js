"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Ooo someone wants to create another auth0 rule using the ${chalk.red(
          "generator-auth0-rules"
        )} generator :)`
      )
    );

    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "What should the name of your new rule be?"
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("rule"),
      this.destinationPath(`rules/${this.answers.name}.js`)
    );

    this.fs.copyTpl(
      this.templatePath("rule.spec"),
      this.destinationPath(`tests/rules/${this.answers.name}.spec.js`),
      { name: this.answers.name }
    );
  }
};
