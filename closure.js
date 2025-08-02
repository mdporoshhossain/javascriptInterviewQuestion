
// Closure, encapsulation, private variable.
function stopWatch() {
    let count =0;

    // kono akta function ar modde akta function thake oi scound function k return korle akta Closure environment external akta refarence like dei 
    return function (){ 
        count++;
        return count;
    }
}

const stop1 = stopWatch();
console.log(stop1());
console.log(stop1());
console.log(stop1());
console.log(stop1());

const stop2 = stopWatch();
console.log(stop2());
console.log(stop2());
console.log(stop2());
