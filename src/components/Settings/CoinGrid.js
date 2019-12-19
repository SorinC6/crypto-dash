import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import styled from "styled-components";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export default function CoinGrid() {
  const { state } = useContext(AppContext);
  // console.log(state.coinList);
  return (
    <CoinGridStyled>
      {Object.keys(state.coinList).map(item => (
        <div>{item}</div>
      ))}
    </CoinGridStyled>
  );
}
