'use strict'

// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')
//get form fields

require('expose?getFormFields!./lib/get-form-fields.js');

//jquery
require('expose?$!jquery');
require('expose?jQuery!jquery');
