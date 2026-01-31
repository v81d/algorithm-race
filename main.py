# Built-in math library for `math.floor` and `math.sqrt`
# https://docs.python.org/3/library/math.html
import math

# Built-in time library for `time.perf_counter`
# https://docs.python.org/3/library/math.html
import time

# External library to create tables in the terminal interface
# https://pypi.org/project/tabulate/
from tabulate import tabulate


def linear_search(
    nums: list[int], size: int, target: int
) -> dict[str, int | float] | None:
    start: float = time.perf_counter()
    iterations: int = 0

    # Iterate over the list until the target number is found at a position
    for i in range(size):
        iterations += 1

        if nums[i] == target:  # check if the number at index i is the target
            return {
                "position": i,
                "iterations": iterations,
                "time": time.perf_counter() - start,
            }


def binary_search(
    nums: list[int], size: int, target: int
) -> dict[str, int | float] | None:
    start: float = time.perf_counter()
    iterations: int = 0

    left: int = 0
    right: int = size - 1

    while left <= right:
        iterations += 1

        mid: int = left + (right - left) // 2  # middle number

        if nums[mid] == target:
            return {
                "position": mid,
                "iterations": iterations,
                "time": time.perf_counter() - start,
            }

        if nums[mid] < target:  # move left boundary up if mid is less than the target
            left = mid + 1
        else:  # move right boundary down if mid is greater than the target
            right = mid - 1


def jump_search(
    nums: list[int], size: int, target: int
) -> dict[str, int | float] | None:
    start: float = time.perf_counter()
    iterations: int = 0

    step_size: int = math.floor(math.sqrt(size))
    step: int = step_size
    previous: int = 0

    # Iterate by the step size until the value at end of block reaches or surpasses the target
    while step < size and nums[step - 1] < target:
        iterations += 1
        previous = step
        step += step_size

    # Linear search through the block that contains the target
    for i in range(previous, min(step, size)):
        iterations += 1

        if nums[i] == target:
            return {
                "position": i,
                "iterations": iterations,
                "time": time.perf_counter() - start,
            }


def main():
    size: int = int(input("Enter the input size as a positive integer: "))
    target: int = int(input("Enter the number to search for: "))

    if size <= 0 or target <= 0:
        raise ValueError("The size and target must be positive integers.")

    if target > size:
        raise ValueError("The target number must not be greater than the size.")

    nums: list[int] = list(range(1, size + 1))  # list of nums from 1 to the given size

    linear_search_result: dict[str, int | float] | None = linear_search(
        nums, size, target
    )
    binary_search_result: dict[str, int | float] | None = binary_search(
        nums, size, target
    )
    jump_search_result: dict[str, int | float] | None = jump_search(nums, size, target)

    if None in [linear_search_result, binary_search_result, jump_search_result]:
        raise Exception("The target was not found.")

    print(
        tabulate(  # results in table
            [
                [
                    "Linear Search",
                    linear_search_result["position"],
                    linear_search_result["iterations"],
                    "O(n)",
                    f"{linear_search_result['time'] * 1000} ms",
                ],
                [
                    "Binary Search",
                    binary_search_result["position"],
                    binary_search_result["iterations"],
                    "O(log n)",
                    f"{binary_search_result['time'] * 1000} ms",
                ],
                [
                    "Jump Search",
                    jump_search_result["position"],
                    jump_search_result["iterations"],
                    "O(√n)",
                    f"{jump_search_result['time'] * 1000} ms",
                ],
            ],
            headers=[
                "Algorithm",
                "Position of Target",
                "Iterations",
                "Time Complexity",
                "Time Elapsed",
            ],
            tablefmt="rounded_grid",
        )
    )


if __name__ == "__main__":
    main()
