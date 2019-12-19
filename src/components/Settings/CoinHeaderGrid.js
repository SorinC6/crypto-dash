import React from "react";
import styled from "styled-components";

export const CoinHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

export default function CoinHeaderGrid({ name, symbol }) {
  return (
    <CoinHeaderStyled>
      <div>{name}</div>
      <CoinSymbol>{symbol}</CoinSymbol>
    </CoinHeaderStyled>
  );
}
