const p = new Promise(resolve => {
    setTimeout(() => {
        resolve('a');
    }, 1000)
})

p.then(result => {
    console.log("first", result);
})

console.log("between");

setTimeout(() => {
    p.then(result => {
        console.log("second", result);
    })
}, 2000);
