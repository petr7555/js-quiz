const p = new Promise(resolve => {
    setTimeout(() => {
        resolve('a');
    }, 1000)
})

// await waits for result, only then continues
console.log("first", await p);

console.log("between");

setTimeout(() => {
    p.then(result => {
        console.log("second", result);
    })
}, 2000);
