const { src, dest, watch, parallel }  = require('gulp');
const less          = require('gulp-less');
const sourcemaps    = require('gulp-sourcemaps');
const autoprefixer  = require('gulp-autoprefixer');
const concat        = require('gulp-concat');
const cleancss      = require('gulp-clean-css');
const terser        = require('gulp-terser');
const browserSync   = require('browser-sync').create();

const config = {
	paths:{
		less: './less/**/*.less', 
        html: './*.html',
        js: './src/js/*.js'
	},
	output:{
		cssName: 'style.min.css',
		cssPath: 'css',
        jsName: 'main.min.js',
        jsPath: 'src'
	}
};

function styles () {
    return src('./less/style.less')
        .pipe(less())
        .pipe(concat(config.output.cssName))
        .pipe(cleancss())
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest(config.output.cssPath))
        .pipe(browserSync.stream())
}

function scripts () {
    return src(config.paths.js)
        .pipe(concat(config.output.jsName))
        .pipe(terser())
        .pipe(dest(config.output.jsPath))
        .pipe(browserSync.stream())
}


function browsersync () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
}

function watching () {
    watch(config.paths.less, styles);
    watch(config.paths.js, scripts);
    watch(config.paths.html).on('change', browserSync.reload);
}


exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;

exports.default = parallel( browsersync, watching );

