import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      favorite: false,
    },
    {
      text: "Продать квартиру",
      favorite: true,
    },
    {
      text: "Выучить уроки по JS",
      favorite: false,
    },
  ]);
  const [text, setText] = useState("");

  const deleteTodo = (indextodo) => {
    const filtered = todos.filter((todo, index) => {
      if (indextodo === index) {
        return false;
      }
      return true;
    });
    setTodos(filtered);
  };
  const makeFavorite = (indexTodo) => {
    const newTodos = todos.map((item, index) => {
      if (indexTodo === index) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        text: text,
        favorite: false,
      },
    ]);
    setText("");
  };

  return (
    <div className="app">
      <Header />
      <Form text={text} setText={setText} addTodo={addTodo} />
      <Todos
        todos={todos}
        makeFavorite={makeFavorite}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
