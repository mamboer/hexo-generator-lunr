var assign = require('object-assign');
var pathFn = require('path');

var config = hexo.config.lunr = assign({
  	field: 'all',
    fulltext: false,
	path: 'assets/lunr/'
}, hexo.config.lunr);

hexo.extend.generator.register('lunr', require('./lib/generator'));
