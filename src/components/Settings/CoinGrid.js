import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import styled from "styled-components";
import { Tile, SelectableTile } from "../Shared/Tile";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
  display: grid;
  /* grid-template-columns: repeat(5, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 15px;
  margin-top: 40px;
`;

const getFilteredCoins = (filteredCoins, coinList) => {
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100)
  );
};

const coinsToBeDisplay = (coinList, topSection, favorites, filteredCoins) => {
  return topSection ? favorites : getFilteredCoins(filteredCoins, coinList);
};

export default function CoinGrid({ topSection }) {
  const { state } = useContext(AppContext);
  //console.log(state.coinList);
  return (
    <CoinGridStyled>
      {coinsToBeDisplay(
        state.coinList,
        topSection,
        state.favorites,
        state.filteredCoins
      ).map(item => (
        <CoinTile coinKey={item} topSection={topSection} key={item} />
      ))}
    </CoinGridStyled>
  );
}
