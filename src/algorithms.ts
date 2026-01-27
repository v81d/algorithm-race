type Result = {
  position: number | null;
  iterations: number | null;
  time: number | null;
};

export default class Searcher {
  input: number[];
  target: number;

  constructor(input: number[], target: number) {
    this.input = input;
    this.target = target;
  }

  async linearSearch(): Promise<Result> {
    let startTime: number = performance.now();

    for (let i = 0; i < this.input.length; i++) {
      if (this.input[i] === this.target) {
        let endTime: number = performance.now();
        return { position: i, iterations: i, time: endTime - startTime };
      }
    }

    return { position: null, iterations: null, time: null };
  }

  async binarySearch(): Promise<Result> {
    let left: number = 0;
    let right: number = this.input.length - 1;
    let i: number = 0;

    while (left <= right) {
      const middle: number = left + ~~((right - left) / 2);

      if (this.input[middle] == this.target)
        return { position: middle, iterations: i };

      if (this.input[middle] < this.target) left = middle + 1;
      else right = middle - 1;

      i++;
    }

    return { position: null, iterations: null };
  }
}
