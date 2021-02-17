const ListNode = require('./listNode');
const mergeTwoLists = require('./merge-sorted-arrays');

const buildListNode = (list) => {
  let node;
  const listLength = list.length;
  if (listLength === 0) return null;

  for (let i = 0; i <= listLength - 1; i++) {
    const entry = list.pop();
    node = new ListNode(entry, node);
  }
  return node;
};

const listAsArray = (list) => {
  if (!list) return [];
  const results = [];

  while (1) {
    results.push(list.val);

    list = list.next;
    if (!list) {
      return results;
    }
  }
};

test('l1 = [1,2,4], l2 = [1,3,4]', () => {
  const l1 = buildListNode([1, 2, 4]);
  const l2 = buildListNode([1, 3, 4]);

  expect(listAsArray(mergeTwoLists(l1, l2))).toEqual([1, 1, 2, 3, 4, 4]);
});

test('l1 = [], l2 = []', () => {
  expect(listAsArray(mergeTwoLists(null, null))).toEqual([]);
});

test('l1 = [], l2 = []', () => {
  const l2 = buildListNode([0]);
  expect(listAsArray(mergeTwoLists(null, l2))).toEqual([0]);
});
