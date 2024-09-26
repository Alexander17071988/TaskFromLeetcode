
function ListNode(val) {
    this.val = val;
    this.next = null;
}

let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;


var hasCycle = function (head) {
    let snow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        snow = snow.next;
        fast = fast.next.next;
        if (snow.next === fast.next.next) {
            return true
        };
    };
    return false;
};

console.log(hasCycle(node1));