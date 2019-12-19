import React from "react";
import styled from "styled-components";
import { DeletableTile } from "../Shared/Tile";

export const CoinHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

export default function CoinHeaderGrid({ name, symbol, topSection }) {
  return (
    <CoinHeaderStyled>
      <div>{name}</div>
      {topSection ? (
        <DeleteIcon>x</DeleteIcon>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinHeaderStyled>
  );
}
