

const addCommas = (input) => {
    //we want to stringify the input
    let num = String(input);
    const outputArray = []

    let count = num.length;
    let start = Math.trunc(num.length / 3)

    for (let i = start; i > 0; i--) {
            outputArray.unshift(num.slice(count-3, count))
            count = count - 3;
    }

    let mod = num.length % 3;

    if (mod === 2) {
        outputArray.unshift(num[1] + num[0])
    } 

    if (mod === 1) {
        outputArray.unshift(num[0])

    }

    return outputArray.join(",");
}

module.exports = addCommas;