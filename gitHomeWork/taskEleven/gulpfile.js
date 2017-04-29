/**
 * Created by Administrator on 2017/3/19.
 */
var  gulp=require('gulp');
var  minifyCss=require('gulp-minify-css');
var  imagemin=require('gulp-imagemin');
var  minifyHtml=require('gulp-minify-html');
var  less=require('gulp-less');
var fs = require("fs");
var source = require('vinyl-source-stream');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var cheerio=require('gulp-cheerio');

//解析less文件并且添加到release文件夹中css文件夹中
gulp.task('lessAnalysis',function () {
    gulp.src('src/css/*.less')
        .pipe(rev())
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest('./rel/css'))
        .pipe(rev.manifest("css.json"))                                   //- 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev/'));
});
gulp.task('htmlcssRename',function () {
    gulp.src(['./rev/*.json','./src/jkIndex.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./rel'));
});
//压缩图片
gulp.task('imageMin',function () {
    gulp.src('./src/img/*.{png,jpg,gif,}')
        .pipe(imagemin())
        .pipe(gulp.dest('./rel/img'));
});

//压缩html
// gulp.task('htmlRel',function () {
//    gulp.src('./src/*.html')
//        // .pipe(revCollector())
//        .pipe(cheerio(function ($) {
//            $('link').remove();
//            $('head').append('<link rel="stylesheet" href="css/Index.css">');
//        }))
//        // .pipe(minifyHtml())
//        .pipe(gulp.dest('./rel'));
// });

// gulp.task('watchLess',function () {
//     gulp.watch('src/css/*.less',['lessAnalysis']);
// });

gulp.watch('src/*.html', function(event){
    console.log(event.type); //变化类型 added为新增,deleted为删除，changed为改变
    console.log(event.path); //变化的文件的路径
});

gulp.task('default',['lessAnalysis','imageMin','htmlcssRename'],function () {
    console.log('...');
});

