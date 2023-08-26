/*
Leftover Blocks

You have a number of building blocks that can be used to build a valid structure. There are certain rules about what 
determines the validity of a structure:

    The building blocks are cubes
    The structure is built in layers
    The top layer is a single block
    A block in an upper layer must be supported by four blocks in a lower layer
    A block in a lower layer can support more than one block in an upper layer
    You cannot leave gaps between blocks

Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over 
after building the tallest possible valid structure.

P rocess the problem

Input: Integer - amount of specific number of cubes
Output: Integer - amount of cubes left over after building tallest valid structure


What is the pattern of number of blocks used for each layer? Each layer uses the square of the layer number blocks

Layer 1: 1^2 = 1 block
Layer 2 2^2 = 4 blocks
Layer 3 3^2 = 9 blocks
Lqyer 4 4^2 = 16 blocks
Layer 5: 5^2 = 25 blocks

When is a structure valid? 
A valid structure uses a total number of blocks equalling the sum of squares of increasing consecutive layers

What happens when the input is zero blocks?
Will the input always be a positve integer?

- Is a lower layer still valid if it has more blocks than it needs? 
No
- Will there always be left-over blocks?
No


E xample and test cases:

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true


When input is zero there are considered to be no leftover blocks


D ata structures

It seems we would use an array of integers to store the number of blocks used in each consecutive layer of the structure
eg
[1],
[1, 4],
[1, 4, 9],
[1, 4, 9, 16],




A lgorithm

Function: Add next element: layersArr
  layerNumber = length of layersArr plus one
  Add layerNumber squared to layersArr at end


Function: remainingBlocks: Int
  Create empty array: structureLayers

  while the sum of all elements in structureLayers is less than totalBlocks
    Add next element to totalBlocks

  if sum of structureLayers is greater than totalBlocks
    remove last element of structureLayers

  return totalBlocks minus sum of structureLayers


*/

function addNextElem(layersArr) {
  let layerNumber = layersArr.length + 1;

  layersArr.push(layerNumber * layerNumber);

  return layersArr;
}


function calculateLeftoverBlocks(totalBlocks) {
  let structureLayers = [];

  let sumElements = 0;

  while (sumElements < totalBlocks) {
    addNextElem(structureLayers);

    sumElements += structureLayers[structureLayers.length - 1];
  }

  if (sumElements > totalBlocks) {
    let lastElem = structureLayers.pop();

    sumElements -= lastElem;
  }
  console.log(sumElements, structureLayers);

  return totalBlocks - sumElements;
}



console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true