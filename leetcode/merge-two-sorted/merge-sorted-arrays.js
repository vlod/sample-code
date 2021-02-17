const ListNode = require('./listNode');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  const headNode = new ListNode(); // dummy node to get things going. we'll remove it on return
  let currentNode = headNode;

  while (1) {
    if (l1 === null && l2 === null) {
      // console.debug(`## both null done headNode:[${JSON.stringify(headNode.next)}]`);
      // exclude the first node as it's a dummy. dummy->next is the real head.
      return headNode.next;
    }

    if (l1 === null) {
      // console.debug('## l1 null');
      currentNode.next = new ListNode(l2.val);
      currentNode = currentNode.next;
      l2 = l2.next;
    }

    else if (l2 === null) {
      // console.debug('## l2 null');
      currentNode.next = new ListNode(l1.val);
      currentNode = currentNode.next;
      l1 = l1.next;
    }

    else if (l2.val > l1.val) {
      // console.debug(`## l2.val[${l2.val}] > l1.val[${l1.val}] adding:[${l1.val}] headNode:[${JSON.stringify(headNode)}]`);
      currentNode.next = new ListNode(l1.val);
      currentNode = currentNode.next;
      // console.debug(`## l2.val headNode:[${JSON.stringify(headNode)}]`);
      l1 = l1.next;
    }

    else if (l1.val > l2.val) {
      // console.debug(`## l1.val[${l1.val}] > l2.val[${l2.val}] adding:[${l2.val}] headNode:[${JSON.stringify(headNode)}]`);
      currentNode.next = new ListNode(l2.val);
      currentNode = currentNode.next;
      // console.debug(`## l1.val headNode:[${JSON.stringify(headNode)}]`);
      l2 = l2.next;
    }

    else if (l1.val === l2.val) {
      // add both
      currentNode.next = new ListNode(l1.val);
      currentNode = currentNode.next;

      currentNode.next = new ListNode(l2.val);
      currentNode = currentNode.next;
      l1 = l1.next;
      l2 = l2.next;
      // console.debug(`## l1.val === l2.val headNode:[${JSON.stringify(headNode)}]`);
    }
  }
};

module.exports = mergeTwoLists;
