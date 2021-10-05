const gulp = require('gulp')
const connect = require('gulp-connect')

gulp.task('serve', () => {
    connect.server({
        root: '.',
        port: 9811,
        host: '0.0.0.0',
        livereload: true
    })
})