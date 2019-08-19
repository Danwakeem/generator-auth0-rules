const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  // Note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);

    // This makes `appname` a required argument.
    this.argument("appname", { type: String, required: false });
  }

  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the funkadelic ${chalk.red(
          "generator-auth0-rules"
        )} generator! Are you ready to get crazy?`
      )
    );

    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.options.appname || this.appname // Default to current folder name
      },
      {
        type: "input",
        name: "description",
        message: "Your project description",
        default: "This repo containers our full collection of auth0 rules"
      },
      {
        type: "input",
        name: "gitUrl",
        message: "Your git url",
        default: ""
      },
      {
        type: "input",
        name: "author",
        message: "Author for package.json file",
        default: ""
      },
      {
        type: "input",
        name: "clientId",
        message:
          "We are going to set some environment variables so here we go. What is your Auth0 Client ID for the management API? (You can hit enter to set this later)",
        default: "YOUR_AUTH0_ID_HERE"
      },
      {
        type: "input",
        name: "clientSecret",
        message:
          "What is your Auth0 Client Secret for the management API? (You can hit enter to set this later)",
        default: "YOUR_AUTH0_SECRET_HERE"
      },
      {
        type: "input",
        name: "domain",
        message:
          "What is your Auth0 domain? (You can hit enter to set this later)",
        default: "YOUR_AUTH0_DOMAIN_HERE"
      },
      {
        type: "input",
        name: "firstRule",
        message:
          "We will start you off with one default rule so you can get a feel for the project structure. What should the name of your first rule be?",
        default: "rule"
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("package"),
      this.destinationPath(`${this.answers.name}/package.json`),
      {
        name: this.answers.name,
        description: this.answers.description,
        gitUrl: this.answers.gitUrl,
        author: this.answers.author
      }
    );
    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath(`${this.answers.name}/README.md`),
      {
        name: this.answers.name,
        description: this.answers.description
      }
    );

    this.fs.copyTpl(
      this.templatePath("lintignore"),
      this.destinationPath(`${this.answers.name}/.eslintignore`)
    );

    this.fs.copyTpl(
      this.templatePath("lintrc"),
      this.destinationPath(`${this.answers.name}/.eslintrc.json`)
    );

    this.fs.copyTpl(
      this.templatePath("gignore"),
      this.destinationPath(`${this.answers.name}/.gitignore`)
    );

    this.fs.copyTpl(this.templatePath("nyc"), this.destinationPath(`.nycrc`));

    this.fs.copyTpl(
      this.templatePath("pretty"),
      this.destinationPath(`${this.answers.name}/.prettierrc`)
    );

    this.fs.copyTpl(
      this.templatePath("deploy"),
      this.destinationPath(`${this.answers.name}/deploy.js`)
    );

    this.fs.copyTpl(
      this.templatePath("gulper"),
      this.destinationPath(`${this.answers.name}/gulpfile.js`)
    );

    this.fs.copyTpl(
      this.templatePath("travis"),
      this.destinationPath(`${this.answers.name}/.travis.yml`)
    );

    this.fs.copyTpl(
      this.templatePath("env"),
      this.destinationPath(`${this.answers.name}/.env`),
      {
        clientId: this.answers.clientId,
        clientSecret: this.answers.clientSecret,
        domain: this.answers.domain
      }
    );

    this.fs.copyTpl(
      this.templatePath("rule"),
      this.destinationPath(
        `${this.answers.name}/rules/${this.answers.firstRule}.js`
      )
    );

    this.fs.copyTpl(
      this.templatePath("rule.spec"),
      this.destinationPath(
        `${this.answers.name}/tests/rules/${this.answers.firstRule}.spec.js`
      ),
      { firstRule: this.answers.firstRule }
    );
  }

  install() {
    this.npmInstall(null, {}, { cwd: this.answers.name });
  }
};
