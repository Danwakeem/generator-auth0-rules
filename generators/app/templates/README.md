# <%= name %>
<%= description %>

This implementation of auth0 rules was created via [Yeoman Generator auth0-roles](https://www.npmjs.com/package/generator-auth0-rules).

## How to create a new rule
First, install [Yeoman](http://yeoman.io) and generator-auth0-rules using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-auth0-rules
```

Finally generate additional auth0 rules and follow the prompts:

```bash
yo auth0-rules:rules
```

You will get a default function like this

```javascript
function rule(user, context, callback) {
  callback(null, user, context);
}

module.exports = { rule };

```

The `module.exports` bit will be removed on travis deploy, that part is just there for testing purpouses.

## How to update an existing rule in auth0
Just create a new rule and set the rules name equal to the existing rule in auth0 and it will be updated on deploy. (as long as your existing rule name does not have any spaces in it. If it does you may need to remane it for it to work with this generator)

## Travis CI Set up
If you choose to use Travis CI to deploy this application you will need to add the following secret environment variables in Travis CI.

* `CLIENT_ID` - Client Id from your auth0 API Explorer application
* `CLIENT_SECRET` - Client Secret from your auth0 API Explorer application
* `DOMAIN` - Domain of your auth0 account
