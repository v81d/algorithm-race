import time
import math


def linear_search(size: int, target: int) -> dict[str, int | float] | None:
    start: float = time.time()
    iterations: int = 0

    for i in range(size):
        iterations += 1
        if i + 1 == target:
            return {
                "position": i,
                "iterations": iterations,
                "time": time.time() - start,
            }


def binary_search(size: int, target: int) -> dict[str, int | float] | None:
    start: float = time.time()
    iterations: int = 0

    left: int = 0
    right: int = size - 1

    while left <= right:
        iterations += 1
        mid: int = left + (right - left) // 2

        if mid + 1 == target:
            return {
                "position": mid,
                "iterations": iterations,
                "time": time.time() - start,
            }

        if mid + 1 < target:
            left = mid + 1
        else:
            right = mid - 1


def jump_search(size: int, target: int) -> dict[str, int | float] | None:
    start: float = time.time()
    iterations: int = 0

    step_size: int = math.floor(math.sqrt(size))
    step: int = step_size
    previous: int = 0

    while previous < size and step <= size and step < target:
        iterations += 1
        previous = step
        step += step_size

    for i in range(previous, min(step, size)):
        iterations += 1
        if i + 1 == target:
            return {
                "position": i,
                "iterations": iterations,
                "time": time.time() - start,
            }


def main():
    size: int = int(input("Enter the input size as a positive integer: "))
    target: int = int(input("Enter the number to search for: "))

    linear_search_result: dict[str, int | float] | None = linear_search(size, target)
    binary_search_result: dict[str, int | float] | None = binary_search(size, target)
    jump_search_result: dict[str, int | float] | None = jump_search(size, target)

    print(linear_search_result, binary_search_result, jump_search_result)


if __name__ == "__main__":
    main()
