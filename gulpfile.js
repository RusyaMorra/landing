const {src, dest, watch, parallel} = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
/*const uglify = ('gulp-uglify-es').default;*/
/*const autoprefixer = require('gulp-autoprefixer'); */

function browsersync(){
    browserSync.init({
        server : {
            baseDir: './'
},
browser: 'google chrome',
 notify: false

});
}



/*function scripts(){
return src([ 'node_modules/jquery/dist/jquery.js','app/js/script.js'])

.pipe(concat('script.min.js'))
.pipe(uglify())
.pipe(dest('dist/js'))
.pipe(browserSync.stream())
}*/

function styles () {
return src('app/scss/**/*.scss')
.pipe(scss({outputStyle:'compressed'}))
.pipe(concat('style.min.css'))
.pipe(dest('./dist/css'))
.pipe(browserSync.stream())
//.pipe(autoprefixer({}))


}

function watching(){
   
watch('./app/scss/**/*.scss', styles);
/*watch(['app/js.js'тут дописать,'!app/js/script.min.js'],scripts); */
watch(['index.html']).on('change', browserSync.reload);


}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;



exports.default = parallel(  watching , browsersync );
