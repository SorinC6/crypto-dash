import React, { useContext, useEffect } from "react";
import { AppContext } from "../../AppProvider";
import styled from "styled-components";
import PriceTile from "./PriceTile";

const PriceGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
`;

export default function PriceGrid() {
  const { state } = useContext(AppContext);

  return (
    <PriceGridWrapper>
      {state.prices.map((price, index) => (
        <PriceTile price={price} index={index} key={index} />
      ))}
    </PriceGridWrapper>
  );
}
