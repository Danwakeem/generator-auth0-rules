const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-auth0-rules:rules", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/rule"))
      .withPrompts({ name: "newRule", enabled: true });
  });

  it("creates files", () => {
    assert.file([
      "rules/newRule.js",
      "tests/rules/newRule.spec.js",
      "rules.meta.js"
    ]);
    let contents = "module.exports = [\n  {\n    ";
    contents += '"file": "newRule",\n    "enabled": true\n  }\n];\n';
    assert.fileContent("rules.meta.js", contents);
  });
});
