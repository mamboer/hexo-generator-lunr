# hexo-generator-lunr
Lunr index generator plugin for Hexo, compatible with Chinese.

## How to use

In your `_config.yml`, add the following configs.

```
# lunr
## field - post | page | all, default is all
## fulltext - If fulltext is true, lunr will index the whole post's `content`, or `title` and `excerpt` will be indexed only. If you use full text index, the generation will be slow.
## path - where should lunr put it's indexed data
lunr:
  field: all
  fulltext: false
  path: assets/lunr/
```

## About Lunr.js

> Simple full-text search in your browser

For more details about Lunr.js, please check out the [Lunr.js](http://lunrjs.com/) official site.

In order to make Lunr to be compatible with Chinese, hexo-generator-lunr uses this forked version [mamboer/lunr.js](https://github.com/mamboer/lunr.js).
