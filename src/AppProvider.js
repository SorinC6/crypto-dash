import React, { useReducer, createContext, useEffect } from "react";
// import initalState from "./initialState";
const cc = require("cryptocompare");

const CHANGE_PAGE_NAME = "CHANGE_PAGE_NAME";
const FIRST_VIZIT = "FIRST_VIZIT";
const CONFIRM_FAVORITS = "CONFIRM_FAVORITS";
const SET_COIN_LIST = "SET_COIN_LIST";

const initialState = {
  page: "dashboard",
  firstVizit: false,
  coinList: null
};

export const AppContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE_NAME:
      return {
        ...state,
        page: payload
      };
    case FIRST_VIZIT:
      return {
        ...state,
        page: payload.page,
        firstVizit: payload.firstVizit
      };
    case CONFIRM_FAVORITS:
      return {
        ...state,
        page: "dashboard",
        firstVizit: false
      };
    case SET_COIN_LIST:
      return {
        ...state,
        coinList: payload
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    dispatch({ type: SET_COIN_LIST, payload: coinList });
  };

  const setPage = name => {
    dispatch({ type: CHANGE_PAGE_NAME, payload: name });
  };

  const saveSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      dispatch({
        type: FIRST_VIZIT,
        payload: { page: "settings", firstVizit: true }
      });
    }
    return {};
  };

  const confirmFavorits = () => {
    dispatch({ type: CONFIRM_FAVORITS });
    localStorage.setItem("cryptoDash", JSON.stringify({ test: "Test Local " }));
  };

  const value = { state, setPage, saveSettings, confirmFavorits };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
