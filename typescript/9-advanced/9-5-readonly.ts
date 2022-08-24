{
  type ToDo = {
    title: string;
    description: string;
  };

  function displayBad(todo: ToDo) {
    todo.title = "타이틀 변경해버리기"; // 마음대로 수정 가능 -> 위험해
  }

  function displayGood(todo: Readonly<ToDo>) {
    // todo.title = "타이틀 변경하고싶었는데 . . "; -> 마음대로 수정 불가능 -> 안전!
  }
}
