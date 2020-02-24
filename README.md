This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.<br />
Currently only have snapshot tests.

## TODOs:

Write more tests for Autcomplete component such as testing the correct number of links appear when filteredSuggestions is a certain length, etc.

## Features:

- Queries github api for issues in React repo
- Filters those issues based on user input
- Each list item shows title of issue and labels
- Can navigate autocomplete list through keyboard shortcuts
- Pressing enter or clicking on link will open new page where issue resides
