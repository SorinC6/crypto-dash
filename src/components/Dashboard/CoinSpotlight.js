import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import styled from "styled-components";
import CoinImage from "../Shared/CoinImage";
import { Tile } from "../Shared/Tile";

const SpotLightName = styled.div`
  text-align: center;
`;

export default function CoinSpotlight() {
  const { state } = useContext(AppContext);
  const currentFav =
    state.currentFavorites && state.coinList[state.currentFavorites].CoinName;
  const currentCoin =
    state.currentFavorites && state.coinList[state.currentFavorites];

  return (
    <Tile>
      <SpotLightName>
        <h2>{currentFav}</h2>
      </SpotLightName>
      <CoinImage coin={currentCoin} spotlight />
    </Tile>
  );
}
