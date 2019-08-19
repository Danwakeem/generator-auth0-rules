# generator-auth0-rules [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Yeoman generator to create and deploy auth0 rules 

## Installation

First, install [Yeoman](http://yeoman.io) and generator-auth0-rules using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-auth0-rules
```

Then generate your new project:

```bash
yo auth0-rules
```

And finally generate additional auth0 rules:

```bash
yo auth0-rules:rule
```

## How to deploy rules with [Travis CI](https://travis-ci.com/)
When you generate a project using this scaffold you will be given a `deploy.js` script at the root of your project that will be called from your `travis.yml`. So when you create the project and add rules via the command above they will be packaged and deployed to your auth0 account using the deploy script running in your [Travis CI](https://travis-ci.com/) account.

Obviously, you do not want your auth0 credentials in your repo so this project assumes that you have them set as secret environment files on your Travis CI project. The following keys will need to be set in your [Travis CI](https://travis-ci.com/) project settings.

- `CLIENT_ID`
- `CLIENT_SECRET`
- `DOMAIN`

You can find your `CLIENT_ID` and `CLIENT_SECRET` in your auth0 account if you go to `Application > API Explorer > Settings`

![Auth0 Credentials](https://s3.amazonaws.com/danwakeem.public.images/github/Auth0+Account.png)

The `API Explorer` machine to machine application in auth0 comes with each account by default. If you have removed this account for some reason or would you like to use a different account you may do so by creating a new [machine to machine application](https://auth0.com/machine-to-machine) and granting the following permissions.

- `read:rules`
- `update:rules`
- `create:rules`

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Danwakeem](https://www.danwakeem.com)


[npm-image]: https://badge.fury.io/js/generator-auth0-rules.svg
[npm-url]: https://npmjs.org/package/generator-auth0-rules
[travis-image]: https://travis-ci.com/Danwakeem/generator-auth0-rules.svg?branch=master
[travis-url]: https://travis-ci.com/Danwakeem/generator-auth0-rules
[daviddm-image]: https://david-dm.org/Danwakeem/generator-auth0-rules.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Danwakeem/generator-auth0-rules
[coveralls-image]: https://coveralls.io/repos/Danwakeem/generator-auth0-rules/badge.svg
[coveralls-url]: https://coveralls.io/r/Danwakeem/generator-auth0-rules
