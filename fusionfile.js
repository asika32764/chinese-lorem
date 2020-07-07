/**
 * Part of fusion project.
 *
 * @copyright  Copyright (C) 2018 Asikart.
 * @license    MIT
 */

const fusion = require('windwalker-fusion');

// The task `css`
fusion.task('css', function () {
  // Watch start
  fusion.watch('src/scss/**/*.scss');
  // Watch end

  // Compile Start
  fusion.sass('src/scss/app.scss', 'dist/app.css');
  // Compile end
});

// The task `js`
fusion.task('js', function () {
  // Watch start
  fusion.watch('src/js/**/*');
  // Watch end

  // Compile Start
  fusion.vue('src/js/app.js', 'dist/app.js');
  // Compile end
});

fusion.default(['css', 'js']);

/*
 * APIs
 *
 * Compile entry:
 * fusion.js(source, dest, options = {})
 * fusion.babel(source, dest, options = {})
 * fusion.ts(source, dest, options = {})
 * fusion.typeScript(source, dest, options = {})
 * fusion.css(source, dest, options = {})
 * fusion.less(source, dest, options = {})
 * fusion.sass(source, dest, options = {})
 * fusion.copy(source, dest, options = {})
 *
 * Live Reload:
 * fusion.livereload(source, dest, options = {})
 * fusion.reload(file)
 *
 * Gulp proxy:
 * fusion.src(source, options)
 * fusion.dest(path, options)
 * fusion.task(name, deps, fn)
 * fusion.watch(glob, opt, fn)
 *
 * Stream Helper:
 * fusion.through(handler) // Same as through2.obj()
 *
 * Config:
 * fusion.disableNotification()
 * fusion.enableNotification()
 */
