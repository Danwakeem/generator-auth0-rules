const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-auth-0-rules:app", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      name: "app",
      description: "Sample app",
      gitUrl: "https://github.com",
      author: "SomePerson",
      clientId: "xxx",
      clientSecret: "yyy",
      domain: "test.auth0.com",
      firstRule: "rule"
    });
  });

  it("creates files", () => {
    assert.file([
      "package.json",
      "README.md",
      ".eslintignore",
      ".eslintrc.json",
      ".gitignore",
      ".prettierrc",
      "gulpfile.js",
      ".travis.yml",
      ".env",
      "rules/rule.js",
      "tests/rules/rule.spec.js"
    ]);
  });
});
