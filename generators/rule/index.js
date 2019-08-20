"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const fs = require("fs");

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
      },
      {
        type: "confirm",
        name: "enabled",
        message: "Do you want this first rule to be enabled?",
        default: true
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

    /* istanbul ignore next */
    if (fs.existsSync("rules.meta.js")) {
      const path = "rules.meta.js";
      const content = this.fs.read(path);
      let replace = `},\n  {\n    "file": `;
      replace += `"${this.answers.name}",\n`;
      replace += `    "enabled": ${this.answers.enabled}`;
      replace += ",\n  }\n];\n";
      const newContent = content.replace(/(}\n];\n$|},\n];\n$)/gi, replace);
      this.fs.write(path, newContent);
    } else {
      const rulesMeta = [
        {
          file: this.answers.name,
          enabled: this.answers.enabled
        }
      ];

      const fileString = `module.exports = ${JSON.stringify(
        rulesMeta,
        null,
        2
      )};\n`;
      this.fs.write("rules.meta.js", fileString);
    }
  }
};
