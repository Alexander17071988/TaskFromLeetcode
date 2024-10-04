var isValid = function (s) {
    let obj = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    let stack = [];

    for (let el of s) {
        if (obj.hasOwnProperty(el)) {
            stack.push(el);
        } else {
            let lastItem = stack.pop();
            if (obj[lastItem] !== el) {
                return false;
            };
        };
    };
    return stack.length === 0;
};

console.log(isValid("([{})]"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));