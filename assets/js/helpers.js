
// See also: https://webdesign.tutsplus.com/tutorials/javascript-debounce-and-throttle--cms-36783

// Reference: https://towardsdev.com/debouncing-and-throttling-in-javascript-8862efe2b563
export const debounce = function (func, delay) {
    let timer;
    return function () {     //anonymous function
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args)
        }, delay);
    }
}

// Reference: https://towardsdev.com/debouncing-and-throttling-in-javascript-8862efe2b563
export const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args)
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

// simpler version that does not guarantee final result
// Reference: https://towardsdev.com/debouncing-and-throttling-in-javascript-8862efe2b563
// const throttle = (func, limit) => {
//     let inThrottle;
//     return function () {
//         const args = arguments;
//         const context = this;
//         if (!inThrottle) {
//             func.apply(context, args);
//             inThrottle = true;
//             setTimeout(() => inThrottle = false, limit);
//         }
//     }
// }
