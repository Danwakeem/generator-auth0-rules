const sandbox = require('sinon').createSandbox();
const proxyquire = require('proxyquire');

describe('<%= name %>', () => {
  let rollbarSpy;
  let cb;
  beforeEach(() => {
    // Add your configuration object here
    global.configuration = {};
    cb = sandbox.spy();
  });

  afterEach(() => sandbox.restore());

  it('should call the callback once', () => {
    const user = { };
    const context = { };
    log(user, context, cb);

    // Verify callback was called one time
    sandbox.assert.calledOnce(cb);
    sandbox.assert.calledWith(cb, null, user, context);
  });
});
