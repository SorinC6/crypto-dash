import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import styled from "styled-components";
import { Tile, SelectableTile } from "../Shared/Tile";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin-top: 40px;
`;

const coinsToBeDisplay = (coinList, topSection) => {
  return Object.keys(coinList).slice(0, topSection ? 10 : 100);
};

export default function CoinGrid({ topSection }) {
  const { state } = useContext(AppContext);
  //console.log(state.coinList);
  return (
    <CoinGridStyled>
      {coinsToBeDisplay(state.coinList, topSection).map(item => (
        <CoinTile coinKey={item} topSection={topSection} />
      ))}
    </CoinGridStyled>
  );
}
