const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSynk = require("browser-sync").create();
const reload = browserSynk.reload;
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const svgmin = require("gulp-svgmin");

// compile our SCSS to CSS
function style() {
  // 1. where are SCSS files
  return (
    gulp
      .src("./sass/**/*.scss")
      // 2. pass through SCSS compiler
      .pipe(sass())
      .on("error", sass.logError)
      // 3. where I can save final CSS?
      .pipe(gulp.dest("./css/"))
      // 4. stream changes to all browsers
      .pipe(browserSynk.stream())
  );
}

// watch
function watch() {
  browserSynk.init({
    server: {
      baseDir: "./",
    },
    browser: ["chrome", "firefox"],
  });
  gulp.watch("./sass/**/*.scss", style);
  gulp.watch("./*.html").on("change", reload);
  gulp.watch("./js/**/*.js").on("change", reload);
}

// autoprefixer
function prefix() {
  return gulp
    .src("./css/main.css")
    .pipe(autoprefixer())
    .pipe(rename("./style.css"))
    .pipe(gulp.dest("./css/"));
}

// svg min
gulp.task("default", function () {
  return gulp
    .src("img/hero-small-1.svg")
    .pipe(svgmin())
    .pipe(rename({ suffix: "-min" }))
    .pipe(gulp.dest("./img/"));
});

exports.prefix = prefix;
exports.style = style;
exports.watch = watch;

/////////////////////////////////////////////////////////////////////////
// "use strict";

// // Load plugins
// const autoprefixer = require("autoprefixer");
// const browsersync = require("browser-sync").create();
// const cp = require("child_process");
// const cssnano = require("cssnano");
// const del = require("del");
// const eslint = require("gulp-eslint");
// const gulp = require("gulp");
// const imagemin = require("gulp-imagemin");
// const newer = require("gulp-newer");
// const plumber = require("gulp-plumber");
// const postcss = require("gulp-postcss");
// const rename = require("gulp-rename");
// const sass = require("gulp-sass");
// const webpack = require("webpack");
// const webpackconfig = require("./webpack.config.js");
// const webpackstream = require("webpack-stream");

// // BrowserSync
// function browserSync(done) {
//   browsersync.init({
//     server: {
//       baseDir: "./_site/",
//     },
//     port: 3000,
//   });
//   done();
// }

// BrowserSync Reload
// function browserSyncReload(done) {
//   browsersync.reload();
//   done();
// }

// // Clean assets
// function clean() {
//   return del(["./_site/assets/"]);
// }

// // Optimize Images
// function images() {
//   return gulp
//     .src("./assets/img/**/*")
//     .pipe(newer("./_site/assets/img"))
//     .pipe(
//       imagemin([
//         imagemin.gifsicle({ interlaced: true }),
//         imagemin.jpegtran({ progressive: true }),
//         imagemin.optipng({ optimizationLevel: 5 }),
//         imagemin.svgo({
//           plugins: [
//             {
//               removeViewBox: false,
//               collapseGroups: true,
//             },
//           ],
//         }),
//       ])
//     )
//     .pipe(gulp.dest("./_site/assets/img"));
// }

// CSS task
// function css() {
//   return gulp
//     .src("./assets/scss/**/*.scss")
//     .pipe(plumber())
//     .pipe(sass({ outputStyle: "expanded" }))
//     .pipe(gulp.dest("./_site/assets/css/"))
//     .pipe(rename({ suffix: ".min" }))
//     .pipe(postcss([autoprefixer(), cssnano()]))
//     .pipe(gulp.dest("./_site/assets/css/"))
//     .pipe(browsersync.stream());
// }

// // Lint scripts
// function scriptsLint() {
//   return gulp
//     .src(["./assets/js/**/*", "./gulpfile.js"])
//     .pipe(plumber())
//     .pipe(eslint())
//     .pipe(eslint.format())
//     .pipe(eslint.failAfterError());
// }

// // Transpile, concatenate and minify scripts
// function scripts() {
//   return (
//     gulp
//       .src(["./assets/js/**/*"])
//       .pipe(plumber())
//       .pipe(webpackstream(webpackconfig, webpack))
//       // folder only, filename is specified in webpack config
//       .pipe(gulp.dest("./_site/assets/js/"))
//       .pipe(browsersync.stream())
//   );
// }

// // Jekyll
// function jekyll() {
//   return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
// }

// // Watch files
// function watchFiles() {
//   gulp.watch("./assets/scss/**/*", css);
//   gulp.watch("./assets/js/**/*", gulp.series(scriptsLint, scripts));
//   gulp.watch(
//     [
//       "./_includes/**/*",
//       "./_layouts/**/*",
//       "./_pages/**/*",
//       "./_posts/**/*",
//       "./_projects/**/*",
//     ],
//     gulp.series(jekyll, browserSyncReload)
//   );
//   gulp.watch("./assets/img/**/*", images);
// }

// // define complex tasks
// const js = gulp.series(scriptsLint, scripts);
// const build = gulp.series(clean, gulp.parallel(css, images, jekyll, js));
// const watch = gulp.parallel(watchFiles, browserSync);

// // export tasks
// exports.images = images;
// exports.css = css;
// exports.js = js;
// exports.jekyll = jekyll;
// exports.clean = clean;
// exports.build = build;
// exports.watch = watch;
// exports.default = build;
