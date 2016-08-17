'use strict';
const test = require('tape');
const Node = require('./../challenges/add-linked-list.js').Node;
const addLinkedList = require('./../challenges/add-linked-list.js').addLinkedList;
test('addLinkedList Tests ', function (t) {
  t.plan(7);

  let l1 = new Node(3);
  let l2 = new Node(6);
  let sum = addLinkedList(l1, l2);
  t.equal(sum.value, 9, 'should add single digits');

  l1 = new Node(24);
  l2 = new Node(30);
  sum = addLinkedList(l1, l2);
  t.equal(sum.value + (sum.next.value * 10), 54, 'should add 2 digits');

  l1 = new Node(2);
  l2 = new Node(123);
  sum = addLinkedList(l1, l2);
  t.equal(sum.value + (sum.next.value * 10) + (sum.next.next.value * 100), 125, 'should add 1-digit to 3-digit');

  l1 = new Node(3);
  l2 = new Node(9);
  sum = addLinkedList(l1, l2);
  t.equal(sum.value + (sum.next.value * 10), 12, 'should handle a carryover that creates a digit');

  l1 = new Node(25);
  l2 = new Node(19);
  sum = addLinkedList(l1, l2);
  t.equal(sum.value + (sum.next.value * 10), 44, 'should handle a carryover');

  l1 = new Node(79837498234987);
  l2 = new Node(21983354293579125);
  sum = addLinkedList(l1, l2);
  let sumVal = 0;
  let count = 0;
  while (sum) {
    sumVal += Math.pow(10,count) * sum.value;
    sum = sum.next;
    count++;
  }
  t.equal(sumVal, 22063191791814112, 'should handle very large numbers');

  l1 = new Node(0);
  l2 = new Node(19);
  sum = addLinkedList(l1, l2);
  t.equal(sum.value + (sum.next.value * 10), 19, 'should handle 0 as one of the numbers');
});
