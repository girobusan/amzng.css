const { src, dest, watch, series } = require("gulp");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

async function buildCSS() {
  return src("dev/scss/amzng.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("dist/"))
    .pipe(sourcemaps.write("."))
    .pipe(dest("css/"));
}

async function buildDist() {
  return src("dev/scss/amzng.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([require("autoprefixer")]))
    .pipe(dest("css/"))
    .pipe(dest("dist/"))
    .pipe(postcss([require("postcss-minify")]))
    .pipe(rename("amzng.min.css"))
    .pipe(dest("css/"))
    .pipe(dest("dist/"));
}

async function watchFiles() {
  return watch("dev/scss/*.scss", buildCSS);
}

exports.watch = watchFiles;
exports.css = buildCSS;
exports.dist = buildDist;
