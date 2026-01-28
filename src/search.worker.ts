import Algorithm from "./algorithms.ts";

type Result = {
  position: number | null;
  iterations: number;
  time: number;
};

self.onmessage = (e: MessageEvent<any>) => {
  const { algorithm, size, target } = e.data;

  const start: number = performance.now();
  let iterations: number = 0;

  switch (algorithm) {
    case Algorithm.LINEAR:
      for (let i: number = 0; i < size; i++) {
        iterations++;
        if (i + 1 === target) {
          self.postMessage({
            algorithm,
            position: i,
            iterations,
            time: performance.now() - start,
          } as Result);
          return;
        }
      }
      break;

    case Algorithm.BINARY:
      let left: number = 0;
      let right: number = size - 1;

      while (left <= right) {
        iterations++;
        const mid = left + ((right - left) >> 1);

        if (mid + 1 === target) {
          self.postMessage({
            algorithm,
            position: mid,
            iterations,
            time: performance.now() - start,
          } as Result);
          return;
        }

        if (mid + 1 < target) left = mid + 1;
        else right = mid - 1;
      }
      break;

    case Algorithm.JUMP:
      let step: number = Math.sqrt(size);
      let previous: number = 0;
  }

  self.postMessage({
    algorithm,
    position: null,
    iterations,
    time: performance.now() - start,
  } as Result);
};
