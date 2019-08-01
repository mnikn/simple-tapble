const AsyncSeriseHook = require('./async-series-hooks');

const hook = new AsyncSeriseHook();
hook.tap({
  name: 't1',
}, (str) => {
  Promise.resolve(str);
  let i = 0;
  while (i++ < 10000);
  console.log('t1:', str);
});
hook.tap({
  name: 't2',
}, (str) => {
  Promise.resolve(str);
  let i = 0;
  while (i++ < 10);
  console.log('t2:', str);
});
hook.tap({
  name: 't3',
}, (str) => {
  Promise.resolve(str);
  let i = 0;
  while (i++ < 1000);
  console.log('t3:', str);
});

hook.call('testStr');
