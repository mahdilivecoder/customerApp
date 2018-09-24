const App=require('./index');
require('dotenv').config();
global.config=require('./config');
new App;