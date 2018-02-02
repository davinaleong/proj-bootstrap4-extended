const PATHS = {
    nodeModules: 'node_modules/',

    dist: 'dist/',
    distScripts: 'dist/scripts/',
    distStyles: 'dist/styles',

    build: 'build/',
    buildScripts: 'build/scripts/',
    buildStyles: 'build/styles/'
};


let gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),

    cleanCss = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    uglifyEs = require('gulp-uglify-es').default,

    debug = require('gulp-debug'),
    del = require('del');


/*** start: Main Tasks ***/
gulp.task('default', ['vendor-scripts', 'styles-compile', 'scripts-compile']);

gulp.task('watch', ['vendor-scripts', 'styles-watch', 'scripts-watch']);
/*** end:   Main Tasks ***/


/*** start: Vendor ***/
gulp.task('vendor', ['vendor-clear', 'vendor-styles', 'vendor-scripts']);

gulp.task('vendor-clear', ['vendor-clear-styles', 'vendor-clear-scripts']);

gulp.task('vendor-styles', ['vendor-clear-styles'], () => {
    //unminified
    gulp.src([
        PATHS.nodeModules + 'bootstrap/dist/css/bootstrap.css'
    ])
    .pipe(debug({title: 'vendor styles'}))
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(PATHS.distStyles));

    //minified
    gulp.src([
        PATHS.nodeModules + 'bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(debug({title: 'vendor minified styles'}))
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest(PATHS.distStyles));
});

gulp.task('vendor-clear-styles', () => {
    del.sync([
        PATHS.distStyles + 'vendor.css',
        PATHS.distStyles + 'vendor.min.css',
        '!' + PATHS.distStyles
    ]);
});

gulp.task('vendor-scripts', ['vendor-clear-scripts'], () => {
    //unminified
    gulp.src([
        PATHS.nodeModules + 'jquery/dist/jquery.js',
        PATHS.nodeModules + 'popper.js/dist/umd/popper.js',
        PATHS.nodeModules + 'bootstrap/dist/js/bootstrap.js'
    ])
    .pipe(debug({title: 'vendor scripts'}))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(PATHS.distScripts));

    //minified
    gulp.src([
        PATHS.nodeModules + 'jquery/dist/jquery.min.js',
        PATHS.nodeModules + 'popper.js/dist/umd/popper.min.js',
        PATHS.nodeModules + 'bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(debug({title: 'vendor minified scripts'}))
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest(PATHS.distScripts));
})

gulp.task('vendor-clear-scripts', () => {
    del.sync([
        PATHS.distScripts + 'vendor.js',
        PATHS.distScripts + 'vendor.min.js',
        '!' + PATHS.distScripts
    ]);
});
/*** end:   Vendor ***/


/*** start: Styles ***/
gulp.task('styles-watch', ['styles-compile'], () => {
    gulp.watch(PATHS.buildStyles + '**/*.scss', ['styles-compile']);
});

gulp.task('styles-compile', ['styles-clear', 'styles-sass']);

gulp.task('styles-sass', () => {
    gulp.src(PATHS.buildStyles + '**/*.scss')
        .pipe(debug({title: 'sass'}))
        .pipe(sass())
        .pipe(gulp.dest(PATHS.distStyles))
        .pipe(debug({title: 'sass minified'}))
        .pipe(sass())
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(PATHS.distStyles));
});

gulp.task('styles-clear', () => {
    del.sync([
        '!' + PATHS.distStyles + 'vendor.css',
        '!' + PATHS.distStyles + 'vendor.min.css',
        PATHS.distStyles + '**/b4e*.css',
        '!' + PATHS.distStyles
    ]);
});
/*** end:   Styles ***/


/*** start: Scripts ***/
gulp.task('scripts-watch', ['scripts-compile'], () => {
    gulp.watch(PATHS.buildScripts + '**/*.js', ['scripts-compile']);
});

gulp.task('scripts-compile', ['scripts-clear'], () => {
    gulp.src(PATHS.buildScripts + '**/*.js')
        .pipe(debug({title: 'scripts'}))
        .pipe(gulp.dest(PATHS.distScripts));

    gulp.src(PATHS.buildScripts + '**/*.js')
        .pipe(debug({title: 'minified scripts'}))
        .pipe(uglifyEs())
        .pipe(rename({
            suffix: '.min',
            extname: '.js'
        }))
        .pipe(gulp.dest(PATHS.distScripts));
});

gulp.task('scripts-clear', () => {
    del.sync([
        '!' + PATHS.distScripts + 'vendor.js',
        '!' + PATHS.distScripts + 'vendor.min.js',
        PATHS.distScripts + '**/b4e*.js',
        '!' + PATHS.distScripts
    ]);
});
/*** end:   Scripts ***/