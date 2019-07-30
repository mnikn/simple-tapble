const SyncHook = require('./sync-hook');

const hook = new SyncHook();
hook.tap({
  name: 't1'
}, (str) => {
  console.log(str + '1');
});
hook.tap({
  name: 't2'
}, (str) => {
  console.log(str + '2');
});
hook.call('testStr');
hook.call('testSt13');
