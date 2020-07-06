/**
 * Part of chinese-lorem project.
 *
 * @copyright  Copyright (C) 2020 .
 * @license    __LICENSE__
 */

import Vue from 'vue';
import app from './components/app';

console.log(app);
(() => {
  new Vue({
    el: document.querySelector('app'),
    components: { app }
  })
})();
