const fs = require('fs-extra')
const path = require('path')
const logger = require('../modules/logger')
//const config = require('../config/config')

/**
 * Generic Helpers Module that has a couple of various methods that didn't fit elsewhere.
 * @module modules/helpers
 * @version 2.0
 */

module.exports = {

  /*
  * Sweet little function wrapper I found to allow me to push
  * functions into arrays for easy reacall with params.
  */
  wrapFunction(fn, context, params) {
    return function() {
      fn.apply(context, params);
    }
  },

  /*
  * Async/Await pause method
  */
  async wait(ms) { await new Promise(resolve => setTimeout(() => resolve(), ms)) },

  /*
  * Return directories in a given path, includes symlinks
  */
 dirs(p) {
   return fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
 },

 shutdown() {
   process.kill(process.pid, "SIGINT")
 }
}
