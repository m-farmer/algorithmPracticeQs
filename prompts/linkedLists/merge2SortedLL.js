/*
Merge two sorted (singly) linked lists and return a new list. The new list should be made by splicing together the nodes of the first two lists.

eg input: 1->2->4, 1->3->4
output: 1->1->2->3->4->4

first, compare the first element in each list. these are the definitively smallest values in each list.

Whichever list we take from, we move the pointer forward.

Maybe one list is longer than the other. once we dont' have two things to compare any more, we have definitively one list left to go through.

 */

