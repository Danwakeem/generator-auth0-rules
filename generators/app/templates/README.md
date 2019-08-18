# <%= name %>
I wanted to figure out a clean way to develop, test, and deploy rules to auth0. I know you can set up github integrations with auth0 but I didn't like that I wouldn't be able to lint and test before the deployment went out.

## How to create a new rule
Just drop a javascript rule file into the `rules` folder. The rule will be deployed to auth0 with the name of the rule being the name of the file in the `rules` folder without the `.js` and in snake case. (I.E `log thing.js` would turn into a rule called `log_thing`)

## How to update an existing rule in auth0
Just make the name in the `rules` folder match the rule you have in auth0 and it will be updated on deploy. (as long as your existing rule name does not have any spaces in it)
