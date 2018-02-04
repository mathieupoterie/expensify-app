const promise = new Promise((resolve, reject) => {
   // resolve('this is my resolved data');
    reject('this is my reject ');
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});