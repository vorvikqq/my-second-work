import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
// import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';


const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SCSS',
                message: 'Error: <%= error.message %>',
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded',
        }))
          .pipe(
            app.plugins.if(
              app.isBuild,
              autoprefixer({
                "cascade": true,
                "grid": true,
                "overrideBrowserslist": [
                  "last 2 versions"
                ],
              })
            )
          )
          .pipe(app.gulp.dest(app.path.build.css))
          .pipe(
            app.plugins.if(
              app.isBuild,
              cleanCss()
            )
          )
        .pipe(rename({
            extname: '.min.css'
          }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}