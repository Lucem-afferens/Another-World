const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const  autoprefixer  =  require ( 'gulp-autoprefixer' ) ;
const sassGlob = require('gulp-sass-glob'); // плагин для сборки всех файлов sass/scss в один файл sass/scss через @import...
const groupMedia = require('gulp-group-css-media-queries'); // плагин для группирования медиа-запросов (объединяет медиа-запросы на одно значение). При этом он ломает исходные карты.






// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(sass|scss)")
        .pipe(sassGlob())
        .pipe(sass({style: 'compressed'}).on('error', sass.logError))
        .pipe(groupMedia()) 
        .pipe(rename({
            prefix: "",
            suffix: ".min",
          }))  
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream())
        
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(sass|scss)", gulp.parallel("styles"));
    gulp.watch("src/*.html").on("change", browserSync.reload);

})

gulp.task('default', gulp.series( // первый аргумент галпа , являющийся именем таска, default, это значит, что имя = gulp
    'styles',
    gulp.parallel('watch','server')
));
