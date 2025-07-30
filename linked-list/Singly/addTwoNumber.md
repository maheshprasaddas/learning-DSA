# Add Two Numbers (Linked List)

## 📘 Problem Statement

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a **single digit**. Add the two numbers and return the sum as a **linked list** in the same reverse order.

You may assume the two numbers do not contain any leading zeros, except the number 0 itself.

---

## 🧠 Approach

Instead of converting the entire linked list to an integer (which can cause overflow in JavaScript), we add the two numbers **digit by digit**, just like manual addition.

Here's how we solve it:

1. Initialize a dummy node to help build the result list.
2. Traverse both linked lists simultaneously.
3. At each step:
   - Add corresponding digits from `l1` and `l2`.
   - Add any carry from the previous step.
   - Create a new node with `sum % 10`.
   - Update the carry as `Math.floor(sum / 10)`.
4. If there’s a leftover carry after both lists are fully processed, add an extra node.
5. Return the list starting from `dummy.next`.

This approach avoids integer overflows and works even when the input lists are large or uneven in length.
