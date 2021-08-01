## What is an Array
An Array is a collection of items. The items could be integers, strings, DVDs, games, books—anything really. The items are stored in neighboring (contiguous) memory locations. Because they're stored together, checking through the entire collection of items is straightforward.


## Creating an Array
`
creating an array of defined length with Array constructor
    const arr =  new Array(5);

creating an array with square brakcets
    const arr = [];
`
## Writing Items into an Array
`
writing to a given index index
    arr[index] = value

writing at the end of array
    arr.push(value);
`

## Reading items from Array
`
read value from a given index
    const value = arr[index]
`

## Higher order in built array function 

### Array.map(fn)
const arr = [1, 2, 3, 4, 5]

const doubleArr =  arr.map(a=> 2*a)
