const { src, dest, watch, series } = require("gulp");
var rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));

async function buildCSS() {
  return src("dev/scss/amzng.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("css/"));
}

async function buildDist() {
  return (
    src("dev/scss/amzng.scss")
      .pipe(sass({ style: "compressed" }).on("error", sass.logError))
      // .pipe(rename("amzng.min.css"))
      .pipe(dest("css/"))
  );
}

exports.css = buildCSS;
exports.dist = buildDist;
exports.watch = watch("dev/scss/*.scss", buildCSS);
