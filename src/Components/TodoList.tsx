import React from "react";
import { View } from "react-native";
import TodoListItem from "./TodoListItem";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList = () => {
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
