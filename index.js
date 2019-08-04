const AsyncParallelHook = require('./async-parallel-hooks');

const hook = new AsyncParallelHook();
hook.tap({
  name: 't1',
}, (str) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('t1:', str);
      resolve(str);
    }, 1000);
  });
});
hook.tap({
  name: 't2',
}, (str) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('t2:', str);
      resolve(str);
    }, 10);
  });
});
hook.tap({
  name: 't3',
}, (str) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('t3:', str);
      resolve(str);
    }, 10);
  });
});

hook.call('testStr');
