const gulp = require('gulp');
const pug = require('gulp-pug');

const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const del = require('del');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const browserSync = require('browser-sync').create();

const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const svgSprite = require('gulp-svg-sprites');
const cheerio = require('gulp-cheerio');


const paths = {
    root: './build',
    templates: {
        pages: 'src/pug/pages/*.pug',
        src: 'src/pug/**/*.pug'
    },
    styles: {
        srcMain:'src/css/main.scss',
        src: 'src/css/**/*.scss',
        dest: 'build/css/'
    },    
    images: {
        src: 'src/img/**/*.*',
        dest: 'build/img/'
    },
    fonts: {
        src: 'src/fonts/**/*.*',
        dest: 'build/fonts/'
    },
    scripts: {
        src: 'src/js/app.js',
        dest: 'build/js/'
    },
    svg: {
        src: 'src/img/icons/*.svg',
        dest: 'build/img'
    }
};

// pug
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(plumber({
            errorHandler: notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            })}))
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root));
}

// scss
function styles() {
    return gulp.src(paths.styles.srcMain)
        .pipe(plumber({
            errorHandler: notify.onError(function(error) {
                return {
                    title: 'Style',
                    message: error.message
                };
            })}))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: require('node-normalize-scss').includePaths
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest))
}

// очистка
function clean() {
    return del(paths.root);
}

// webpack
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(plumber({
            errorHandler: notify.onError(function(error) {
                return {
                    title: 'JS',
                    message: error.message
                };
            })}))
        .pipe(gulpWebpack(webpackConfig, webpack)) 
        .pipe(gulp.dest(paths.scripts.dest));
}

// галповский вотчер
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.fonts.src, fonts);
}

// локальный сервер + livereload (встроенный)
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

// переносим картинки
function images() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}

// переносим шрифты
function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}

// svg
function svg() {
    return gulp.src(paths.svg.src)
        // удадяем атрибуты
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        // собираем svg спрайт
        .pipe(svgSprite({
            mode: "symbols",
            selector: "icon-%f",
            svg: {
                symbols: "sprite.svg"
            },
            preview: false
            }
        ))
        .pipe(gulp.dest(paths.svg.dest));
}

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.images = images;
exports.fonts = fonts;
exports.scripts = scripts;
exports.svg = svg;

gulp.task('default', gulp.series(
    clean,
    svg,
    gulp.parallel(styles, templates, images, scripts, fonts),
    gulp.parallel(watch, server)
));
