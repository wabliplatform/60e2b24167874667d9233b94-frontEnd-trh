const path = require('path');

module.exports = {
  entry: {
	'login' : './javascript/login.js',
	'Home' : './javascript/Home.js',
	'addpatient' : './javascript/addpatient.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};