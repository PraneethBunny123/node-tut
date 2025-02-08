
//synchronous
console.log('first');

//setTimeout is asynchronous, hence it is offloaded, even though the wait time is 0 
setTimeout(() => {
    console.log('second')
}, 0)

//synchronous and executed immediately
console.log('third')
