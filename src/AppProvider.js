import React, { useReducer, createContext } from "react";
// import initalState from "./initialState";

const CHANGE_PAGE_NAME = "CHANGE_PAGE_NAME";

const initialState = {
  page: "dashboard"
};

export const AppContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE_NAME:
      return {
        ...state,
        page: payload
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPage = name => {
    dispatch({ type: CHANGE_PAGE_NAME, payload: name });
  };

  const value = { state, setPage };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
