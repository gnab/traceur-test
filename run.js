#!/usr/bin/env node

var traceur = require('traceur');

[ 'arrayComprehension',
  'arrowFunctions',
  'classes',
  'defaultParameters',
  'destructuring',
  'forOf',
  'propertyMethods',
  'propertyNameShorthand',
  'templateLiterals',
  'restParameters',
  'spread',
  'generatorComprehension',
  'generators',
  'deferredFunctions',
  'blockBinding',
  'sourceMaps'
  ].forEach(function (k) { traceur.options[k] = true; });

process.argv.slice(2).forEach(traceur.require);
