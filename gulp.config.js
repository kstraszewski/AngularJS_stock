/**
 * Created by konra on 21.08.2016.
 */
module.exports = function () {
    paths = {
        src: './src'
    };

    var config = {
        filesToWatch:[
            paths.src + "/*.js",
            paths.src + "/*.html",
            paths.src + "/**/**/*.js",
            paths.src + "/**/**/*.html",
            paths.src + "/**/**/**/*.js",
            paths.src + "/**/**/**/*.html"
        ],
        srcHtml:[
            paths.src + "/*.html",
            paths.src + "/**/**/*.html",
            paths.src + "/**/**/**/*.html"
        ],

        index: paths.src + '/index.html',
        js:[
            './app.js',
            paths.src + '/**/*.js',
            paths.src + '/**/**/*.js',
            "./corporate/**/*.js",
            "./corporate/*.js"
        ]
    };
    return config;
};
