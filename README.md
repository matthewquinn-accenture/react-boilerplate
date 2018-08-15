# React Template

A simple boilerplate to help you get started with developing and testing [React](https://reactjs.org/) applications.

## Getting Started

The following instructions will help you get started:

1. Clone the repository by running `git clone git@github.com:mquinndev/react-boilerplate.git` in a terminal

2. Navigate to the repository that was cloned in step one `cd react-boilerplate`

3. Run `npm install`

4. Run `npm start` and then visit [http://localhost:3000/](http://localhost:3000/)

## Running the Tests

This boilerplate contains simple unit tests to help you get started with test-driving your React application. To run these tests, execute the following command: `npm test`

## Technologies at Play

This boilerplate uses the following technologies:

* [npm 6.2.0](https://www.npmjs.com/)

* [react 16.4.2](https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html)

* [react-dom 16.4.2](https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html)

* [webpack 4.17.1](https://webpack.js.org/)

* [webpack-dev-server 3.1.5](https://webpack.js.org/guides/development/#using-webpack-dev-server)

* [webpack-cli 3.1.0](https://www.npmjs.com/package/webpack-cli)

* [jest 23.5.0](https://jestjs.io/)

* [enzyme 3.4.4](https://airbnb.io/enzyme/)

* [enzyme-adapter-react-16 1.2.0](https://airbnb.io/enzyme/#installation)

* [babel-preset-env 1.7.0](https://babeljs.io/docs/en/babel-preset-env.html)

* [babel-preset-react 6.24.1](https://babeljs.io/docs/en/babel-preset-react.html)

* [babel-loader 7.1.5](https://www.npmjs.com/package/babel-loader)

## Repository Breakdown

### dist/ - application prod files

`index.html` - default browser page

### src/ - application files

`components/` - the application's react components

`index.js` - handles the application startup

### test/ - application test files

`components/` - tests the application's react components

`test-setup.js` - setup to configure Enzyme for testing

### other...

`.gitignore` - files to be ignored by Git

`README.md` - the application's help file and documentation

`package.json` - the application's JavaScript dependencies

`webpack.config.js` - configuration for bundling js files to the browser
