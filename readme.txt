git add .
git commit -am "..."
git remote add origin git@github.com:makarony7/"name of repository".git
git push -u origin master

webpack:

1. npm init -y (to create a package.json file)
2. npm install webpack webpack-cli --save-dev (https://webpack.js.org/guides/getting-started/)
3. add: to package.json (https://webpack.js.org/configuration/mode/)
    "scripts": {
        "dev": "webpack --mode=development",
        "build": "webpack --mode=production"
    },
4. added webpack.config.js file and paste into it:
    const path = require('path');
    module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        }
    };