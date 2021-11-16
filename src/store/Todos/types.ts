import { TodoInterface } from "../../Interfaces/Todo";
import { Action } from "redux";

export interface TodosState {
  data: TodoInterface[];
}

export interface DoneTodoInterface {
  id: string;
  completed: boolean;
}

export enum TodosActionEnum {
  SET_TODOS = "todos/SET_TODOS",
  FETCH_TODOS = "todos/FETCH_TODOS",
  ADD_TODO = "todos/ADD_TODO",
  DONE_TODO = "todos/DONE_TODO",
  DELETE_TODO = "todos/DELETE_TODO",
}

export interface DeleteTodoActionInterface
  extends Action<TodosActionEnum.DELETE_TODO> {
  type: TodosActionEnum.DELETE_TODO;
  payload: string;
}

export interface AddTodoActionInterface
  extends Action<TodosActionEnum.ADD_TODO> {
  type: TodosActionEnum.ADD_TODO;
  payload: TodoInterface;
}

export interface SetTodosActionInterface
  extends Action<TodosActionEnum.SET_TODOS> {
  type: TodosActionEnum.SET_TODOS;
  payload: TodoInterface[];
}

export interface FetchTodosActionInterface
  extends Action<TodosActionEnum.FETCH_TODOS> {
  type: TodosActionEnum.FETCH_TODOS;
}

export interface DoneTodoActionInterface
  extends Action<TodosActionEnum.DONE_TODO> {
  type: TodosActionEnum.DONE_TODO;
  payload: DoneTodoInterface;
}

export type TodosActions =
  | DeleteTodoActionInterface
  | DoneTodoActionInterface
  | SetTodosActionInterface
  | FetchTodosActionInterface
  | AddTodoActionInterface;
