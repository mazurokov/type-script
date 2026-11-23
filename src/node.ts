const message: string = "TypeScript works in Node.js!";
console.log(message);


let lessonsCompleted: number = 1;
const isPracticing: boolean = true;

lessonsCompleted = 2;

console.log(lessonsCompleted, isPracticing);

function remainingLessons(total: number, completed: number): number {
  return total - completed;
}

console.log(remainingLessons(5, lessonsCompleted)); // 3
console.log(remainingLessons(5, 5)); // 0

const taskTitles: string[] = ["Вивчити типи", "", "Написати функцію"];

function removeEmptyStrings(arr: string[]): string[] {
  return arr.filter((item) => item !== "").map((item) => item.toLocaleUpperCase());
}

console.log(removeEmptyStrings(taskTitles)); // ["Вивчити типи", "Написати функцію"]

type Task = {
  id: number;
  title: string;
  done: boolean;
  description?: string;
};

const tasks: Task[] = [
  { id: 1, title: "Вивчити типи", done: true, description: "Потрібно вивчити основи TypeScript" },
  { id: "2", title: "Написати функцію", done: false },
]

console.log(tasks);
