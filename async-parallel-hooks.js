const BaseHook = require('./base-hook');

class AsyncParallelHook extends BaseHook {
  _compile(config) {
    return (args) => {
      const { taps } = config;
      const promises = taps.map(tap => {
        return tap.fn.apply(this, args);
      });
      Promise.all(promises);
    };
  }
}

module.exports = AsyncParallelHook;