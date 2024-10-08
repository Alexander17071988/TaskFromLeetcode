var maxProfit = function (prices) {
    let min = prices[0];
    let sell = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else {
            sell = Math.max(sell, prices[i] - min);
        }
    };
    return sell;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([2, 1, 2, 0, 1]));