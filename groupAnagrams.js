var groupAnagrams = function (strs) {
    let result = [];

    let unicalArray = strs.map(el => el.split("").sort().join("")).filter((el, index, arr) => { return arr.indexOf(el) === index });

    for (el of unicalArray) {
        let subArray = [];
        for (item of strs) {
            let sortedItem = item.split("").sort().join("");;
            if (el === sortedItem) {

                subArray.push(item)
            };
        };

        result.push(subArray);
    };
    return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));