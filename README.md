## 1. package.json

yarn init -y

```
{
    "private":true,
    "devDependencies": {
        "webpack": "^5.28.0",
        "webpack-cli": "^4.6.0",
        "webpack-dev-server": "^3.11.2"
    },
    "scripts": {
    "start": "webpack serve",
    "watch": "webpack --watch",
    "build":"webpack"
    }
}
```

yarn

## 2. src/index.js

```
const elevenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedmoonstone: 4,
};


console.log(elevenShieldRecipe);

```

yarn run build

It will create main.js in dist folder.

## 3. dist/index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpack starter</title>
</head>
<body>
    <h1>Webpack</h1>
    <script src="main.js"></script>
</body>
</html>
```

yarn start

## 4. webpack.config.js

```
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode: mode,

  devtool: false,
  devServer: {
    contentBase: "./dist",
  },
};

```

yarn run build

```
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const elevenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedmoonstone: 4,
};

const elevenMoonReceipe = {
  ...elevenShieldRecipe,
  leather: 1,
  refinedmoonstone: 3,
};

console.log(elevenShieldRecipe);
console.log(elevenMoonReceipe);

/******/ })()
;
```

## 5.

yarn add -D babel-loader @babel-core @babel/preset-env

## 6. Updated webpack

```
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: false,
  devServer: {
    contentBase: "./dist",
  },
};
```

## 7. Add to babel.config.js

```
module.exports = {
  presets: ["@babel/present-env"],
};
```

## 8.

yarn run build

```
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var elevenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedmoonstone: 4
};

var elevenMoonReceipe = _objectSpread(_objectSpread({}, elevenShieldRecipe), {}, {
  leather: 1,
  refinedmoonstone: 3
});

console.log(elevenShieldRecipe);
console.log(elevenMoonReceipe);
/******/ })()
;
```

## 9.

yarn start

devtools:"source-map" in webpack

It removes source code main.js

if (process.env.NODE_ENV === "production") {
mode = "production";
}

    "build":"NODE_ENV=production webpack"

"build-dev":"webpack"

yarn run build-dev

## 10. css-loader mini-css-extract-plugin

yarn run build -dev

css loader error...

Install
yarn add -D css-loader mini-css-extract-plugin

```
Added below configuration to webpack


const MiniCssExtractPlugin = require("mini-css-extract-plugin");

rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
]

```

yarn start

Previously live reloading by default

## 11. Hot reloading

```
Added `hot:true` in devServer

devServer: {
    contentBase: "./dist",
    hot: true,
  },

```

## 12. SCSS

\_global.scss, \_variables.scss and index,scss into styles folder

yarn start // Error for sass loader

yarn add -D sass sass-loader

````
{
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }

      ```


yarn run build-dev

yarn add -D postcss postcss-preset-env postcss-loader


```

{
test: /\.s?css$/i,
use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      "postcss-loader",
      "sass-loader",
  ],
},
```
```
````

## 13. React

yarn add @babel/preset-react

In babel.config.js

```
module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

```

## 14.

```
resolve: {
    extensions: [".js", ".jsx"],
  },
```
