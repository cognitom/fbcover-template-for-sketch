var gulp = require("gulp");
var sketch = require("gulp-sketch");

gulp.task('sketch', function(){
  gulp.src("./*.sketch")
    .pipe(sketch({
      export: 'slices',
      formats: 'png'
    }))
    .pipe(gulp.dest("./dist/"));
});