import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";
import _ from "lodash";
import fuzzy from "fuzzy";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;
const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  color:#1163c9;
  height: 25px;
  place-self: center left;
`;

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  console.log(inputValue);
  // Get all the coins symbols
  let coinSymbols = Object.keys(coinList);
  // Get all the coin names, map symbol to name
  let coinNames = coinSymbols.map(item => coinList[item].CoinName);
  let allStringsToSearch = coinSymbols.concat(coinNames);
  //fuzzy search
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map(result => result.string);
  let filterCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });
  setFilteredCoins(filterCoins);
}, 500);

const filterCoins = (e, setFilteredCoins, coinList) => {
  let inputValue = e.target.value;
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
};

export default function Search() {
  const { state, setFilteredCoins } = useContext(AppContext);

  return (
    <SearchGrid>
      <h2>Search coins</h2>
      <SearchInput
        onKeyUp={e => filterCoins(e, setFilteredCoins, state.coinList)}
      />
    </SearchGrid>
  );
}
