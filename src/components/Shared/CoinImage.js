import React from "react";
import styled, { css } from "styled-components";

const ImageWrapper = styled.img`
  height: 50px;
  ${props => {
    return (
      props.spotlight &&
      css`
        height: 300px;
        margin: auto;
        display: block;
      `
    );
  }}
`;

export default function CoinImage({ coin, spotlight }) {
  return (
    <ImageWrapper
      src={coin && `http://cryptocompare.com/${coin.ImageUrl}`}
      alt={coin && coin.Symbol}
      spotlight={spotlight}
    />
  );
}
