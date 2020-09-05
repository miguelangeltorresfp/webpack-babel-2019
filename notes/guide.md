# GUIDE - 2020-09-05

* [Babel, Webpack & Ecmascript 10, Javascript Moderno](https://www.youtube.com/watch?v=FZBbX9f6b78)

* `yarn add webpack webpack-cli @babel/core @babel/preset-env @babel/polyfill babel-loader html-webpack-plugin webpack-dev-server`
  * @babel/preset-env - permite acceder a las últimas características de javascript
  * @babel/polyfill - permite por ejemplo usar async-await en el navegador
  * babel-loader sirve para integrar babel con webpack

* Para añadir css: `yarn add css-loader style-loader`
* Para empaquetar el css en un arachivo aparte: `yarn add mini-css-extract-plugin`
