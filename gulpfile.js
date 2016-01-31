// require gulp
var gulp = require('gulp');

// require other packages
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');




// scripts task
gulp.task('scripts', function(){
    return gulp.src('./src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(uglify())
        .pipe(rename({
           suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js/'));
});


// styles task
gulp.task('styles', function(){
    gulp.src('./src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(notify({ message: 'Styles task complete', onLast: true }));
});


// styles minification
gulp.task('minify', function(){

    gulp.src('./dist/css/style.css')
        .pipe(sourcemaps.init())
        .pipe(cssmin({mediaMerging: true}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(notify({ message: 'minification task complete', onLast: true }));
});


// gulp.watch
gulp.task('watch', function(){
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./src/sass/**/*.scss', ['styles']);
});

gulp.task('deploy', ['scripts', 'styles', 'minify', 'watch'])

// default task
gulp.task('default',['watch']);
