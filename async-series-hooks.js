const BaseHook = require('./base-hook');

class AsyncSeriesHook extends BaseHook {
  _compile(config) {
    return async (args) => {
      const { taps } = config;
      for (const tap of taps) {
        await tap.fn.apply(this, args);
      }
    };
  }
}

module.exports = AsyncSeriesHook;