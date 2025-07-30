# Linked List

- A **linked list** is a linear data structure where elements (called **nodes**) are stored in sequence, but unlike arrays, they’re not stored in contiguous memory locations.
- Each node contains ***DATA*** and a ***REF*** (reference) to the next node in the sequence.

## Types of Linked Lists

### Singly Linked List

- Each node points to the next node.

```jsx
[data | next] -> [data | next] -> null
```

### Doubly Linked List

- Each node points to both the next and the previous node.

```jsx
null <- [prev | data | next] <-> [prev | data | next] -> null
```

### Circular Linked List

- The last node points back to the first node.
  - *Singly circular:* `last.next -> first`
  - *Doubly circular:* `first.prev -> last` and `last.next -> first`

## Basic Operations

| Operation        | Time Complexity                                |
|------------------|-------------------------------------------------|
| Insert at head   | O(1)                                            |
| Insert at tail   | O(n) (singly), O(1) (with tail pointer or doubly) |
| Deletion         | O(1) at head, O(n) for arbitrary node           |
| Search           | O(n)                                            |
