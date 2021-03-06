# Webpack React Component Boilerplate

[![Package Logo](https://cloud.githubusercontent.com/assets/4413963/18860339/51400464-84b7-11e6-9209-351d931960ac.png)](https://github.com/fritz-c/quiz-spinner)

Yet another opinionated React component boilerplate (but with Webkit!). Please make it your own - change the license, remove the linter, or maybe even add some functionality.

### Features

- Webkit-powered component development
    - Local web server (hosted at localhost:3001) + React hot reload
- Inlined style compiled from SCSS files => no external CSS files for component users
- Set up for Babel / ES6
- Easy github pages deployment with gh-pages
    - [Generated github site demo](https://fritz-c.github.io/quiz-spinner/)

-------------------------------------------------------------------

_Sample README content follows_

## Example

```jsx
import React from 'react';
import QuizSpinner from 'quiz-spinner';

export default React.createClass({
    render() {
        return (
            <QuizSpinner myName="World" />
        );
    }
});

```

## Options

Property            | Type   | Default        | Required | Description
:-------------------|:------:|:--------------:|:--------:|:----------------------------------------
myName              | string | `World`        |          | Name of person/thing to greet.

## Contributing

After cloning the repository and running `npm install` inside, you can use the following commands to develop and build the project.

```sh
# Starts a webpack dev server that hosts a demo page with the component.
# It uses react-hot-loader so changes are reflected on save.
npm start

# Lints the code with eslint and my custom rules.
npm run lint

# Lints and builds the code, placing the result in the dist directory.
# This build is necessary to reflect changes if you're 
#  `npm link`-ed to this repository from another local project.
npm run build
```

Pull requests are welcome!

## License

MIT
