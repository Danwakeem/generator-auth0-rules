const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-auth0-rules:rules", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/rules"))
      .withPrompts({ name: "newRule" });
  });

  it("creates files", () => {
    assert.file(["rules/newRule.js", "tests/rules/newRule.spec.js"]);
  });
});
