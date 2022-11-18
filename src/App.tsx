import Todos from "./components/Todo";
import Todo from "./models/todo";
function App() {
  const todos = [new Todo('Todo 1'), new Todo('Todo 2')];

  return (
    <div>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
