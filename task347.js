var topKFrequent = function (nums, k) {
    let obj = nums.reduce((acc, el) => {
        if (!acc.hasOwnProperty(el)) {
            acc[el] = 1;
        } else acc[el] += 1;
        return acc;
    }, {});

    return Object.keys(obj).sort((a, b) => obj[b] - obj[a]).slice(0, k).map(Number);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));