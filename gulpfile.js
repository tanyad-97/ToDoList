'use strict';

const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass'); //преобразование scss файлов в css
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');


gulp.task('styles', function () {

    return gulp.src('src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});



gulp.task('clean', function () {
        return del('public');
});

gulp.task('scripts', function () {
        return gulp.src('src/assets/**/*.js')
            .pipe(concat("script.min.js"))
            .pipe(uglify())
            .pipe(gulp.dest("./public/js/"))
            .pipe(browserSync.stream());
});

gulp.task('build', gulp.series('clean', 'styles', 'scripts'));

gulp.task('watch', function () {
        gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
        gulp.watch('src/assets/js/**/*.js', gulp.series('scripts'));
});

gulp.task('serve', function (done) {
        browserSync.init({
                server: {
                        baseDir: './'
                },
                port: 3000
        });

        browserSync.watch('./public').on('change', browserSync.reload);
        browserSync.watch('./*.html').on('change', browserSync.reload);
        done()
});

gulp.task('dev',gulp.series('build', gulp.parallel('watch', 'serve'))
);

gulp.task('script', function() {

    return gulp.src(
        [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'src/assets/**/*.js'
        ], { allowEmpty: true })
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('"./public/js/"'))
});
