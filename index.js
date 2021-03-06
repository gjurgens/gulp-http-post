"use strict";
const post = require("request").post;
const obj = require("through2").obj;
const pluginError = require("gulp-util").PluginError;
const PLUGIN_NAME = "gulp-post";
/**
 * @param url {String}
 * @param options {Object}
 * @return {Function}
 * @example
 * gulp.src("folder").pipe(post("http://mysite.com/"));
 */
module.exports = (url, options)=> {
    let option = options || {};
    if (!url || typeof(url) !== "string") {
        throw new pluginError(PLUGIN_NAME, 'Invalid URL format.');
    }
    return obj((file, enc, cb)=> {
        if (!file) {
            throw new pluginError(PLUGIN_NAME, 'Missing file or files.');
        }
        if (file.isBuffer()) {
            post({
                url: url,
                form: (opt=> {
                    opt.content = file.contents.toString(opt.encoding || null);
                    opt.relative = file.relative;
                    return opt;
                })(option)
            }, (err, response, body)=> {
                if(typeof option.callback === 'function') {
                    var callbackResponse = option.callback(err, body, response);
                    if(callbackResponse !== null && callbackResponse !== undefined) {
                        throw new pluginError(PLUGIN_NAME, callbackResponse);
                    }
                }
                if (err) {
                    throw new pluginError(PLUGIN_NAME, err);
                }
            });
        }
        cb(null, file);
    })
};