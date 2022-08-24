{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };

  const updated = updateTodo(todo, { priority: "low" }); // todo의 priority를 low로 바꾸겠다
  console.log(updated);
  // {
  // title: "learn TypeScript",
  // description: "study hard",
  // label: "study",
  // priority: "low",
  // }
}
