export const TYPES_OF_TASKS = {
  ARRAYS: "Масиви",
  FUNCTIONS: "Функції",
  DOM: "DOM",
  ASYNCHRONITY: "Асинхронність",
  API: "API",
  REACT: "React",
};

export const SIZES_OF_TASK = {
  SMALL: "Легкий рівень",
  MEDIUM: "Середній рівень",
  BIG: "Важкий рівень",
};

const listOfTasks = [
  {
    id: "1",
    name: "Основні поняття",
    description: "Вивчити масиви",
    size: SIZES_OF_TASK.MEDIUM,
    dateOfPublication: "Wed Aug 30 2022 15:22:30 GMT+0300",
    testCommand: "npm run test task_1",
    typeOfTask: TYPES_OF_TASKS.ARRAYS,
  },
  {
    id: "2",
    name: "Методи масивів",
    description: "Вивчити масиви",
    size: SIZES_OF_TASK.MEDIUM,
    dateOfPublication: "Wed Aug 30 2022 16:22:30 GMT+0300",
    testCommand: "npm run test task_2",
    typeOfTask: TYPES_OF_TASKS.ARRAYS,
  },
];

export default listOfTasks;
