let num = 6;

var guess = function (pick) {

    if (num == pick) {
        return 0;
    } else if (num < pick) {
        return -1;
    } else {
        return 1;
    };
};

var guessNumber = function (n) {

    let start = 1;
    let end = n;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);
        let pick = guess(mid);

        if (pick == 0) {
            return mid;
        } else if (pick == 1) {
            start = mid + 1;
        } else end = mid - 1;
    }
};

console.log(guessNumber(10));
console.log(guessNumber(30));
console.log(guessNumber(20));
console.log(guessNumber(2));


