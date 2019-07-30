const SyncHook = require('./sync-hook');

const hook = new SyncHook();
hook.tap({
  name: 't1'
});
hook.tap({
  name: 't2'
});