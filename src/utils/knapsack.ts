export class Knapsack {
  private _capacity: number = 0;
  private _weight: number[] = [];
  private _cost: number[] = [];

  constructor(capacity: number) {
    this._capacity = capacity;
  }

  public get capacity() {
    return this._capacity;
  }

  public set packageDetails(packageDetails: number[]) {
    this._weight.push(packageDetails[1]);
    this._cost.push(packageDetails[2]);
  }

  public get weight() {
    return this._weight;
  }

  public get cost() {
    return this._cost;
  }
}
