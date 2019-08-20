const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-auth0-rules:app", () => {
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
      "app/package.json",
      "app/README.md",
      "app/.eslintignore",
      "app/.eslintrc.json",
      "app/.gitignore",
      "app/.prettierrc",
      "app/gulpfile.js",
      "app/.travis.yml",
      "app/.env",
      "app/rules/rule.js",
      "app/tests/rules/rule.spec.js",
      "app/rules.meta.js"
    ]);
  });
});
