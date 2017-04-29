/**
 * Created by Administrator on 2017/3/8.
 */
var gulp=require('gulp');
var plugins=require('gulp-load-plugins')();
var imagemin=require('gulp-imagemin');
var pngquant=require('imagemin-pngquant');
var livereload=require('gulp-livereload');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');


//压缩css
gulp.task('minify css',function () {
    gulp.src('src/css/*.css')
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('./dist/css'));
});
//生成css json
gulp.task('css json',function () {
    gulp.src('dist/css/*.css')
        .pipe(rev())
        .pipe(gulp.dest('./release/css'))
        .pipe(rev.manifest("css.json"))                                   //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev/'));
});

//压缩图片
gulp.task('minify img',function () {
    gulp.src('src/img/*.{gif,png,jpeg,jpg,PNG,GIF,JPEG}')
        .pipe(imagemin({
            progressive:true,//类型：Boolean 默认：false 无损压缩jpg图片
            use:[pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('./dist/img'));
});
//传递图片
gulp.task('send img',function () {
    gulp.src('dist/img/*')
        .pipe(gulp.dest('./release/img'))
});

//压缩js
gulp.task('minify js',function () {
    gulp.src('src/js/baidu.js')
        .pipe(plugins.uglify())
        .pipe(gulp.dest('./dist/js'))
});

//传递jq文件
gulp.task('sendjs',function () {
     gulp.src('src/js/jquery-1.9.1.min.js')
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulp.dest('./release/js'));
});

//生成js json文件
gulp.task('js json',function () {
    gulp.src('dist/js/baidu.js')
        .pipe(rev())
        .pipe(gulp.dest('./release/js'))
        .pipe(rev.manifest("js.json"))                                   //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev/'));
});


gulp.task('html',function () {
    gulp.src('src/html/baidu.html')
        .pipe(gulp.dest('./dist/html'));
});

//压缩html

gulp.task('replacehtml',[],function () {
    gulp.src(['./rev/css.json','./rev/js.json','dist/html/*.html'])
        .pipe(revCollector())
        .pipe(plugins.minifyHtml())
        .pipe(gulp.dest('./release/html'));
});


gulp.task('default',['minify css','minify img','minify js','html','css json','js json','send img','sendjs','replacehtml'],function () {

    livereload.listen();
    // return gulp.watch('src/html/baidu.html',['html']);
    // return gulp.watch('html/baidu.html',['minify html']);
        // .pipe(gulp.watch('dist/html/baidu.min.html',['minify html']));
});