import { Knapsack } from './knapsack';

export function knapsackGenerator(inputStringArr: string[]): Knapsack[] {
  let knapsackArr: Knapsack[] = [];
  inputStringArr.forEach((line: string) => {
    var re_for_capacity = /\(([^)]+)\)/g; // fetch string between paranthesis
    const splitLineByColon = line.split(':');
    let capacity = parseInt(splitLineByColon[0]);
    if (capacity < 0) {
      throw new Error('APIException');
    }

    let regexMatchPackageDetails;
    const newKnapsack = new Knapsack(capacity);
    while ((regexMatchPackageDetails = re_for_capacity.exec(splitLineByColon[1]))) {
      const inputDataBetweenParanthesis = regexMatchPackageDetails[1];
      const splitInputDataBetweenParanthesis = inputDataBetweenParanthesis.split(',');
      newKnapsack.packageDetails = [
        parseInt(splitInputDataBetweenParanthesis[0]),
        parseInt(splitInputDataBetweenParanthesis[1]),
        parseInt(splitInputDataBetweenParanthesis[2].replace(/€/g, '')),
      ];
    }
    knapsackArr.push(newKnapsack);
  });
  return knapsackArr;
}
