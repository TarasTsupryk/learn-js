const SIZES_OF_TASK = {
  SMALL: "Легкий рівень",
  MEDIUM: "Середній рівень",
  BIG: "Важкий рівень",
};

function Task(name, text, size) {
  this.name = name;
  this.text = text;
  this.size = size;
}

const listOfTasks = [
  new Task("Масиви. Основні поняття", "Вивчити масиви", SIZES_OF_TASK.MEDIUM),
  new Task("Масиви. Методи масивів", "Вивчити методи масивів масиви", SIZES_OF_TASK.MEDIUM),
];

export default listOfTasks;
