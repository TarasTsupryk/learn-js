import { taskFunction } from "./task_1";

describe("task_1", () => {
  test("The function returns the correct value", () => {
    expect(taskFunction([1], [2])).toStrictEqual([1, 2]);
    expect(taskFunction([1, 2, 3, 4, 5], [6, 7, 8])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
    expect(taskFunction([], [2])).toStrictEqual([2]);
    expect(taskFunction([1], [])).toStrictEqual([1]);
    expect(taskFunction([], [])).toStrictEqual([]);
  });
});
