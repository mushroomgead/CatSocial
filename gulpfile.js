var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
// สร้าง task ที่มีชื่อว่า "siamhtml"
gulp.task('gead', function() {
    console.log('gead');
});


//create task and assign
gulp.task('sass', function(){
	//complie all .scss in scss folder
	return gulp.src(['scss/**/*.scss'])
		.pipe(sass({
			compass: true, // use compass
			style  : 'compressed',
			}))
		.on('error', function (err){
			console.log(err.message);
			})
			.pipe(gulp.dest('css')) //keep file css
	});
//when you commend use -> gulp sass



// สร้าง task ชื่อว่า "browser-sync" ขึ้นมา พร้อมกับระบุงานที่จะให้ task นี้ทำ
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});
//defult task
gulp.task('default', ['browser-sync'], function(){
	// เมื่อไฟล์ html หรือ css มีการเปลี่ยนแปลง ก็ให้รีเฟรช web browser
    gulp.watch(['**/*.html'], browserSync.reload);
    gulp.watch(['css/**/*.css'], browserSync.reload);

    // เมื่อไฟล์ scss มีการเปลี่ยนแปลง ก็ให้ทำ task "sass"
    gulp.watch("scss/**/*.scss", ['sass']);
});
//when you commend use -> gulp

gulp.task('minify', function(){
	return gulp.src('src/*.html')
	.pipe(htmlmin({collapseWhitespace:true}))
	.pipe(gulp.dest('dist'))
	});
//when you commend use -> gulp minify