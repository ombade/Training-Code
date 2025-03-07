import { useReducer } from "react";

interface State {
  page: number;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

type Action =
  | { type: "NEXT_PAGE" }
  | { type: "PREV_PAGE" }
  | { type: "SET_SORT"; payload: string };

const initialState: State = { page: 1, sortBy: "first_name", sortOrder: "asc" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "NEXT_PAGE":
      return { ...state, page: state.page + 1 };
    case "PREV_PAGE":
      return { ...state, page: Math.max(1, state.page - 1) };
    case "SET_SORT":
      return {
        ...state,
        sortBy: action.payload,
        sortOrder: state.sortOrder === "asc" ? "desc" : "asc",
      };
    default:
      return state;
  }
};

export const usePaginationReducer = () => useReducer(reducer, initialState);
