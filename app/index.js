/**
 * Created by Edward_J_Apostol on 2017-04-28.
 */

// strange, this is how webpack currently works with sass to import stylesheets
require('./main.scss');
//console.log("implemented sasser");

// this ensures that index.html is updated with webpack
var indexer = require('file-loader?name=../dist/index.html!./index.html');
//console.log("copied index.html");
//console.log("testing with Ed");

import App from './App';

let app = new App();
app.init();



// let onReady =  (e) => {
//     let app = new App();
// };
//
// window.addEventListener("load",onReady,false);
