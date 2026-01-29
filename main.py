import math
import time

from tabulate import tabulate


def linear_search(size: int, target: int) -> dict[str, int | float] | None:
    start: float = time.perf_counter()
    iterations: int = 0

    for i in range(size):
        iterations += 1

        if i + 1 == target:
            return {
                "position": i,
                "iterations": iterations,
                "time": time.perf_counter() - start,
            }


def binary_search(size: int, target: int) -> dict[str, int | float] | None:
    start: float = time.perf_counter()
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
                "time": time.perf_counter() - start,
            }

        if mid + 1 < target:
            left = mid + 1
        else:
            right = mid - 1


def jump_search(size: int, target: int) -> dict[str, int | float] | None:
    start: float = time.perf_counter()
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
                "time": time.perf_counter() - start,
            }


def main():
    print(
        "This program compares the speed and efficiency of three search algorithms: linear, binary, and jump search."
    )
    print(
        "The algorithms search through a range of numbers from 1 to the given size until the target number is found."
    )
    print()

    size: int = int(input("Enter the input size as a positive integer: "))
    target: int = int(input("Enter the number to search for: "))

    if size <= 0 or target <= 0:
        raise ValueError("The size and target must be positive integers.")

    if target > size:
        raise ValueError("The target number must not be greater than the size.")

    linear_search_result: dict[str, int | float] | None = linear_search(size, target)
    binary_search_result: dict[str, int | float] | None = binary_search(size, target)
    jump_search_result: dict[str, int | float] | None = jump_search(size, target)

    print()

    print(
        tabulate(
            [
                [
                    "Linear Search",
                    linear_search_result["position"],
                    linear_search_result["iterations"],
                    f"{linear_search_result['time'] * 1000} ms",
                ],
                [
                    "Binary Search",
                    binary_search_result["position"],
                    binary_search_result["iterations"],
                    f"{binary_search_result['time'] * 1000} ms",
                ],
                [
                    "Jump Search",
                    jump_search_result["position"],
                    jump_search_result["iterations"],
                    f"{jump_search_result['time'] * 1000} ms",
                ],
            ],
            headers=["Algorithm", "Position", "Iterations", "Time"],
            tablefmt="rounded_grid",
        )
    )


if __name__ == "__main__":
    main()
