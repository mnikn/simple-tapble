const BaseHook = require('./base-hook');

class SyncHook extends BaseHook {
  _compile(config) {
    return (args) => {
      const { taps } = config;
      taps.forEach(tap => {
        tap.fn.apply(this, args);
      });
    };
  }
}

module.exports = SyncHook;