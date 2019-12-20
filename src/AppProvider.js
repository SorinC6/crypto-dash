import React, { useReducer, createContext, useEffect } from "react";
import _ from "lodash";
// import initalState from "./initialState";
const cc = require("cryptocompare");

const CHANGE_PAGE_NAME = "CHANGE_PAGE_NAME";
const FIRST_VIZIT = "FIRST_VIZIT";
const CONFIRM_FAVORITS = "CONFIRM_FAVORITS";
const SET_COIN_LIST = "SET_COIN_LIST";
const ADD_COIN_TO_FAVORITES = "ADD_COIN_TO_FAVORITES";
const REMOVE_COIN_FROM_FAVORITES = "REMOVE_COIN_FROM_FAVORITES";
const SAVE_FROM_LOCALSTORAGE = "SAVE_FROM_LOCALSTORAGE";
const SET_FILTERED_COIN = "SET_FILTERED_COIN";
const SET_PRICES = "SET_PRICES";
const SET_CURRENT_FAVORITE = "SET_CURRENT_FAVORITE";

const initialState = {
  page: "dashboard",
  firstVizit: false,
  coinList: null,
  favorites: [],
  filteredCoins: null,
  currentFavorites: null
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
    case ADD_COIN_TO_FAVORITES:
      return {
        ...state,
        // favorites: [...new Set([...state.favorites, payload])]
        favorites: [...state.favorites, payload]
      };
    case REMOVE_COIN_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item !== payload)
      };
    case SAVE_FROM_LOCALSTORAGE:
      return {
        ...state,
        favorites: payload.favorites,
        currentFavorites: payload.currentFavorites
      };
    case SET_FILTERED_COIN:
      return {
        ...state,
        filteredCoins: payload
      };
    case SET_PRICES:
      return {
        ...state,
        prices: payload
      };
    case SET_CURRENT_FAVORITE:
      return {
        ...state,
        currentFavorites: payload
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const MAX_FAVORITES = 10;

  useEffect(() => {
    fetchPrices();
    fetchCoins();
  }, []);

  useEffect(() => {
    fetchPrices();
  }, [state.page, state.favorites]);

  const fetchPrices = async () => {
    if (state.firstVizit) {
      return;
    }
    let prices = await pricesFunc();
    prices = prices.filter(price => Object.keys(price).length);
    dispatch({ type: SET_PRICES, payload: prices });
  };

  const pricesFunc = async () => {
    let returnData = [];
    for (let i = 0; i < state.favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(state.favorites[i], ["USD"]);
        returnData.push(priceData);
      } catch (e) {
        console.warn("Fetch price error:", e);
      }
    }
    return returnData;
  };

  const fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    dispatch({ type: SET_COIN_LIST, payload: coinList });
  };

  const setPage = name => {
    dispatch({ type: CHANGE_PAGE_NAME, payload: name });
  };

  const setCurrentFavorite = sym => {
    dispatch({ type: SET_CURRENT_FAVORITE, payload: sym });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptoDash")),
        currentFavorites: sym
      })
    );
  };

  const saveSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!cryptoDashData) {
      dispatch({
        type: FIRST_VIZIT,
        payload: { page: "settings", firstVizit: true }
      });
    } else {
      let { favorites, currentFavorites } = cryptoDashData;
      dispatch({
        type: SAVE_FROM_LOCALSTORAGE,
        payload: { favorites, currentFavorites }
      });
    }
  };

  const addCoin = key => {
    //console.log(initialState.favorites.length);
    if (state.favorites.length < MAX_FAVORITES) {
      dispatch({ type: ADD_COIN_TO_FAVORITES, payload: key });
    }
  };

  const removeCoin = key => {
    dispatch({ type: REMOVE_COIN_FROM_FAVORITES, payload: key });
  };

  const confirmFavorits = () => {
    let currentFavorites = state.favorites[0];
    dispatch({ type: CONFIRM_FAVORITS, payload: currentFavorites });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({ favorites: state.favorites, currentFavorites })
    );
  };

  const isInFavorites = key => {
    //console.log(key);
    return _.includes(state.favorites, key);
  };

  const setFilteredCoins = filteredCoins => {
    console.log(filteredCoins);
    dispatch({ type: SET_FILTERED_COIN, payload: filteredCoins });
  };

  const value = {
    state,
    setPage,
    saveSettings,
    confirmFavorits,
    addCoin,
    removeCoin,
    isInFavorites,
    setFilteredCoins,
    fetchPrices,
    setCurrentFavorite
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
