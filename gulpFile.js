var gulp=require('gulp');

var path="../liberneo-hybrid/public/liberneo-bridge"
//path="../LBK_ARQ_SPA/public/liberneo-bridge"

gulp.task('deploy',function(){
    console.log('copy files ...')
    console.log('to :'+path)
    
    gulp.src("./dist/**/*.js")
    .pipe(gulp.dest(path))
    gulp.src("./dist/**/*.js.map")
    .pipe(gulp.dest(path))
})