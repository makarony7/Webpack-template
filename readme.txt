git add .
git commit -am "..."
git remote add origin git@github.com:makarony7/"name of repository".git
git push -u origin master
(cat ~/.ssh/id_rsa.pub)
----------------------------------------------

Git import:
git clone git@github.com:makarony7/Webpack-template.git
npm install

----------------------------------------------

/src
    /js
        index.js
    /scss
        style.scss
    index.html
.gitignore
package-lock.json
package.json
readme.txt
webpack.config.js

----------------------------------------------

Webpack:
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

5. install npm install -D babel-loader @babel/core @babel/preset-env -D (https://github.com/babel/babel-loader)
    add: to webpack.config.js
    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
                }
            }
            }
        ]
    }

6. install npm install sass-loader node-sass style-loader css-loader  --save-dev (https://github.com/webpack-contrib/sass-loader)
    add: to webpack.config.js to rules
    {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
    },

7. install npm i --save-dev html-webpack-plugin (https://github.com/jantimon/html-webpack-plugin)
    add: to webpack.config.js to rules
    {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
    },
    - const HtmlWebpackPlugin = require('html-webpack-plugin') on top
    - and this:
        plugins: [
            new HtmlWebpackPlugin({
            template: './src/index.html'
            })
        ]

8. install npm install webpack-dev-server --save-dev (https://github.com/webpack/webpack-dev-server)
    add: to webpack.config.json
     "scripts": {
        "dev": "webpack-dev-server --mode=development",
        "build": "webpack --mode=production"
    },
