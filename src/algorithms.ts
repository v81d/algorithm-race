export type Result = {
  position: number;
  iterations: number;
};

export class Searcher {
  input: number[];

  constructor(input: number[]) {
    this.input = input;
  }

  linearSearch(): Result {
    return { position: 0, iterations: 0 };
  }
}
