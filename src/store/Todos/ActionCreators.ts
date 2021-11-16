import { TodoInterface } from "../../Interfaces/Todo";
import {
  AddTodoActionInterface,
  DeleteTodoActionInterface,
  DoneTodoActionInterface,
  DoneTodoInterface,
  SetTodosActionInterface,
  TodosActionEnum,
} from "./types";
import { AppDispatch } from "../index";
import { todoList } from "../mock-items";

export const TodosActionCreators = {
  setTodos: (payload: TodoInterface[]): SetTodosActionInterface => ({
    type: TodosActionEnum.SET_TODOS,
    payload,
  }),
  fetchTodos: () => (dispatch: AppDispatch) => {
    dispatch({ type: TodosActionEnum.FETCH_TODOS });
    dispatch(TodosActionCreators.setTodos(todoList));
  },
  addTodo: (payload: TodoInterface): AddTodoActionInterface => ({
    type: TodosActionEnum.ADD_TODO,
    payload,
  }),
  doneTodo: (payload: DoneTodoInterface): DoneTodoActionInterface => ({
    type: TodosActionEnum.DONE_TODO,
    payload,
  }),
  deleteTodo: (payload: string): DeleteTodoActionInterface => ({
    type: TodosActionEnum.DELETE_TODO,
    payload,
  }),
};
