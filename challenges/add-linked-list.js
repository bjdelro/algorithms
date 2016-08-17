'use strict';
/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let l1Val = 0;
  let l2Val = 0;
  let count = 0;
  while (l1) {
    l1Val += Math.pow(10,count) * l1.value;
    l1 = l1.next;
    count++;
  }
  count = 0;
  while (l2) {
    l2Val += Math.pow(10,count) * l2.value;
    l2 = l2.next;
    count++;
  }
  let output = l1Val + l2Val;
  output = output.toString();
  let digit = parseInt(output.slice(output.length-1));
  const head = new Node(digit);
  let node = head;
  while (output.length > 1) {
    output = output.slice(0,output.length-1);
    digit = parseInt(output.slice(output.length-1));
    node.next = new Node(digit);
    node = node.next;
  }
  return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
