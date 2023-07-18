import { Knapsack } from './knapsack';

export function knapsackFiller(knapsack: Knapsack) {
  const capacity = knapsack.capacity;

  if (capacity < 0 || !knapsack.weight || !knapsack.cost || knapsack.weight.length !== knapsack.cost.length) {
    throw new Error('APIException');
  }

  // ********FIRST LOOP FOR ITEMS
  let solution: number[][] = Array(knapsack.weight.length + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0)); // we are creating array with 0th row and 0th column as extra

  for (let packagecounter = 1; packagecounter <= knapsack.weight.length; packagecounter++) {
    // since we substract 1 from this counter, we need to initialise it with 1
    let weight = Math.round(knapsack.weight[packagecounter - 1]); // since we are iterating starting form 1 but the weight array index starts from 0
    let cost = knapsack.cost[packagecounter - 1];

    for (let capacitycounter = 1; capacitycounter <= capacity; capacitycounter++) {
      solution[packagecounter][capacitycounter] = solution[packagecounter - 1][capacitycounter];

      if (capacitycounter >= weight) {
        // if capacity is greater than current weight
        if (solution[packagecounter - 1][capacitycounter - weight] + cost > solution[packagecounter][capacitycounter]) {
          solution[packagecounter][capacitycounter] = solution[packagecounter - 1][capacitycounter - weight] + cost;
        }
      }
    }
  }

  return solution;
}

export function fetchSelectedItemsIndexFromOptimalSolution(knapsack: Knapsack, solution: number[][]) {
  let capacity = knapsack.capacity;
  let selectedpackageitem;
  let selectedpackageitemarr = [];
  for (let packagecounter = knapsack.weight.length; packagecounter > 0; packagecounter--) {
    if (solution[packagecounter][capacity] !== solution[packagecounter - 1][capacity]) {
      selectedpackageitem = packagecounter - 1;
      selectedpackageitemarr.push(selectedpackageitem);
      capacity -= knapsack.weight[selectedpackageitem];
    }
  }

  return selectedpackageitemarr;
}
