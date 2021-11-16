import React from "react";
import { View } from "react-native";
import TodoListItem from "./TodoListItem";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList = () => {
  const { fetchTodos } = useActions();
  React.useEffect(() => {
    fetchTodos();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { data } = useTypedSelector((state) => state.todos);

  return (
    <View>
      {data?.map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          text={todo.text}
        />
      ))}
    </View>
  );
};

export default TodoList;
