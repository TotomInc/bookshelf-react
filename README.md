<div>
  <h1 align="center">Bookshelf React - Real-world React project exercise</h1>

  <strong>
    Building a full React application with React ecosystem.
  </strong>
</div>

<hr />

## Setup the project locally

### Prerequesites

- NodeJS LTS _(tested with v14.18.0)_
- npm v6 or greater
- Yarn v1 _(project created with Yarn, we recommend using it instead of npm)_

### Setup local environment

Make sure to clone the repository locally. You can make a fork first, before cloning, if you want to make changes.

Run the following commands to clone the repository and install the dependencies:

```shell
# Replace this URL with your fork if you have done it.
# This URL will not let you push changes to my repository.
git clone https://github.com/TotomInc/bookshelf-react.git

cd bookshelf-react

# Install project dependencies with Yarn.
yarn install
```

## Running the app

To get the app running in development mode, run:

```shell
yarn run dev

# You should see an URL that points to your local environment server.
```

The app is also deployed with a production build on [react-bookshelf-exercise.netlify.app](https://react-bookshelf-exercise.netlify.app/), thanks to Netlify.

## Unit-tests

Make sure to create/update unit-tests when making changes.

This project is using [`jest`](https://jestjs.io/) and [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) to encourage good practices for unit-testing: it helps to write tests that resemble the way the software/website is used by clients.

Generally tests are created alongside components with a `.spec.tsx` file-extension.

You can run the following commands for unit-tests:

```shell
# Run unit-tests
yarn run test

# Run unit-tests in watch mode (like HMR but for Jest)
yarn run test:watch

# Run tests and generate a code-coverage
yarn run test:coverage
```

## Linting (ESLint)

This project have an enforced ESLint config that cover TypeScript to React (hooks) and code-styling with Prettier and unit-testing. It integrates very well in VS Code dans can auto-fix ESLint warnings/errors when saving files.

The ESLint config used is from [`@totominc/eslint-config-react`](https://github.com/TotomInc/eslint-configs/tree/master/packages/eslint-config-react).
