import { TodosActionEnum, TodosActions, TodosState } from "./types";
import { todoList } from "../mock-items";

const initialState: TodosState = {
  data: todoList,
};

export function TodosReducer(
  state = initialState,
  action: TodosActions
): TodosState {
  switch (action.type) {
    case TodosActionEnum.SET_TODOS:
      return { ...state, data: action.payload };
    case TodosActionEnum.ADD_TODO:
      return { ...state, data: [...state.data, action.payload] };
    case TodosActionEnum.DONE_TODO:
      const { id, completed } = action.payload;
      return {
        ...state,
        data: [
          ...state.data.map((item) => {
            if (item.id === id) {
              return { ...item, completed };
            }
            return item;
          }),
        ],
      };
    case TodosActionEnum.DELETE_TODO: {
      const id = action.payload;
      return {
        ...state,
        data: [...state.data.filter((item) => item.id !== id)],
      };
    }
    default:
      return state;
  }
}
