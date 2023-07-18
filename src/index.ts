import { readFileLines } from './utils/fileReader';
import { Knapsack } from './utils/knapsack';
import { fetchSelectedItemsIndexFromOptimalSolution, knapsackFiller } from './utils/knapsackFiller';
import { knapsackGenerator } from './utils/knapsackGenerator';

export const pack = async (filePath: string) => {
  let knapsackArr: Knapsack[] = [];
  const fileLines: string[] = await readFileLines(filePath);
  let selectedItemsIndexArr: number[] = [];
  knapsackArr = knapsackGenerator(fileLines);
  knapsackArr.forEach((knapsack: Knapsack) => {
    const optimalSolution = knapsackFiller(knapsack);
    selectedItemsIndexArr = fetchSelectedItemsIndexFromOptimalSolution(knapsack, optimalSolution ?? []);
  });
  return selectedItemsIndexArr;
};
