var topKFrequent = function (words, k) {
    const obj = words.reduce((acc, el) => {
        for (let i = 0; i <= words.length; i++) {
            if (!acc.hasOwnProperty(el)) {
                acc[el] = 1;
            } else acc[el] += 1;
        };
        return acc;
    }, {},);

    return Object.keys(obj).sort((a, b) => obj[a] === obj[b] ? a.localeCompare(b) : obj[b] - obj[a]).slice(0, k);
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3));
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));