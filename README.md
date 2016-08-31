# gulp-http-post 
> froked from [zhso/gulp-post](https://github.com/zhso/gulp-post)

[![NPM](https://nodei.co/npm/gulp-http-post.png?downloads=true&downloadRank=true&stars=true)][npm-url][![NPM](https://nodei.co/npm-dl/gulp-http-post.png?height=3&months=6)][npm-url]

[![npm](https://img.shields.io/npm/v/gulp-http-post.svg)][npm-url] [![npm](https://img.shields.io/npm/dm/gulp-http-post.svg)][npm-url] [![npm](https://david-dm.org/gjurgens/gulp-http-post.svg)][npm-url] [![npm](https://img.shields.io/npm/l/gulp-http-post.svg)][npm-url]

[![bitHound Overall Score](https://www.bithound.io/github/gjurgens/gulp-http-post/badges/score.svg)](https://www.bithound.io/github/gjurgens/gulp-http-post) [![Inline docs](http://inch-ci.org/github/gjurgens/gulp-http-post.svg?branch=master)](http://inch-ci.org/github/gjurgens/gulp-http-post) [![Build Status](https://travis-ci.org/gjurgens/gulp-http-post.svg?branch=master)](https://travis-ci.org/gjurgens/gulp-http-post) [![Coverage Status](https://coveralls.io/repos/github/gjurgens/gulp-http-post/badge.svg?branch=master)](https://coveralls.io/github/gjurgens/gulp-http-post?branch=master)

[![GitHub stars](https://img.shields.io/github/stars/gjurgens/gulp-http-post.svg?style=social&label=Star)](https://github.com/gjurgens/gulp-http-post/stargazers) [![GitHub watchers](https://img.shields.io/github/watchers/gjurgens/gulp-http-post.svg?style=social&label=Watch)](https://github.com/gjurgens/gulp-http-post/subscription)

[npm-url]: https://npmjs.org/package/gulp-http-post
Post buffer to current url on pipe.

```js
var post = require("gulp-http-post");

gulp.task("post",function(){
    gulp.src("src/**/*.js")
        .pipe(post("http://www.mysite.com/"))
        .pipe(gulp.dest("dist"));
});
```

## Features

* Custom post params
* Support buffer encoding
* Support current callback

## Installation

```bash
$ npm i gulp-http-post
```

## Examples

* Custom Options

```js
var post = new require("gulp-http-post");

gulp.task("build",function(){
    var options = {
                encoding: "base64",
                callback: function (err, data) {
                    if(err){
                        console.error(err);
                    }else{
                        console.log(data);
                    }
                },
                param1: "value1",
                param2: "value2"
                //...
    };
    gulp.src("src/**/*.js")
        .pipe(post("http://www.mysite.com/",options))
        .pipe(gulp.dest("dist"));
})
```

## Options Format

* **options.content** file content
* **options.encoding** buffer.toString() encoding
* **options.relative** file relative