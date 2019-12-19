import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import styled from "styled-components";
import { Tile, SelectableTile } from "../Shared/Tile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
`;

export default function CoinGrid() {
  const { state } = useContext(AppContext);
  //console.log(state.coinList);
  return (
    <CoinGridStyled>
      {Object.keys(state.coinList).map(item => (
        <SelectableTile key={item}>{item}</SelectableTile>
      ))}
    </CoinGridStyled>
  );
}
