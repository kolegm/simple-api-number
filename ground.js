/**
 * Responsibility:
 *  Include babel's registration
 *  Attach mandatory process listeners
 *  Load mandatory configuration
 */

/**
 * Register all mandatory code compilers. For instance: Flow, es20{15,16,17,...}
 * And compile files on the fly when they are loaded
 *
 * @see [babel-register](https://babeljs.io/docs/en/babel-register)
 * @see babel configuraton at `.babelrc.js`
 */
require('@babel/register');

require('./process-alerts');

// Be aware: dotenv can be loaded in case of some process manager starting
if (process.env.DOTENV_ALREADY_LOADED !== 'yes') {
  // load dev options for environment
  require('dotenv').config({ debug: !!process.env.DEBUG });
}
