/* global hexo */
'use strict';

const assign = require('object-assign');
const pathFn = require('path');

const config = hexo.config.lunr = assign({
  	field: 'all',
    fulltext: false,
	path: 'assets/lunr/'
}, hexo.config.lunr);

hexo.extend.generator.register('lunr', require('./lib/generator'));
