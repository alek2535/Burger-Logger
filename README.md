# Burger-Logger

Week-13 HW

![License Badge](https://img.shields.io/badge/license-MIT-blue)

## Description

This application is a burger logger that uses MySQL, Node, Express, Handlebars and a homemade ORM. It also follows the MVC design pattern; uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

## Table of Contents

  * [User-Story](#user-story)
  * [Acceptance-Criteria](#acceptance-criteria)
  * [Deployed Application](#deployed-application)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## User Story

```
AS A user, I want to be able to write what burgers I would like to eat

I WANT to be able to change the burger to devoured if I've eaten it

SO THAT I can keep track of burgers that I have eaten
```

## Acceptance Criteria

```
Application should allow users to create and save burgers to eat.

Application should allow users to view previously eaten burgers.

Application should allow users to change burgers to eaten status.
```

## Deployed Application

Here is the URL for the deployed [Eat-Da-Burger! Application](https://polar-shelf-16735.herokuapp.com/) on Heroku.


## Installation

To access this project:

```
1. Go to https://github.com/alek2535/Burger-Logger

2. Fork the branch and then click on clone or download

3. Paste copied link after `git clone` into your bash console in your desired directory

4. You should now have access to the repository
```

Since there is a `package.json`, you will need to run `npm install`.

Once you have the dependancies installed run the command:

```
node server.js
```

## Usage

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.The app will store every burger in a database, whether devoured or not.

Technologies Used:

* JavaScript
* Node.js
* Express
* jQuery
* MySQL
* Handlebars
* ORM

## Contributing

Use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)


## License

[MIT License](./LICENSE)

Copyright (c) [2020] [Alek Valencia]

## Project Status

This project meets all requirements in the Acceptance Criteria and is fully functional. Any additions would be to make the code better and to add more functionality.

## Tests

There are currently no tests for this project.

## Questions

[alek2535](https://github.com/alek2535)

alekvalencia2535@gmail.com

If you have any questions about the project you can reach me at the above email.