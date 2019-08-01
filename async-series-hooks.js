const BaseHook = require('./base-hook');

class AsyncSeriesHook extends BaseHook {
  _compile(config) {
    return (args) => {
      const { taps } = config;
      const promises = taps.map(tap => {
        return tap.fn.apply(this, args);
      });
      return Promise.all(promises);
    };
  }
}

module.exports = AsyncSeriesHook;