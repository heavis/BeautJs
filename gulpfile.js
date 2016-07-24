/**
 * 构建任务
 */
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('less', function() {
    return gulp.src(['assets/less/index.less'])
        .pipe(sourcemaps.init())
        .pipe(less({compress: true}))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('dist/assets/styles'));
});

gulp.task('uglify', function () {
    return gulp.src('view/*.js')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concat('index.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('dist/view'));
});

gulp.task("serve:build", ['less', 'uglify'], function(){
    gulp.watch("assets/less/**/*.less", ['less']);
    gulp.watch("view/*.js", ['uglify']);
});
