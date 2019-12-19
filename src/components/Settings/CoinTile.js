import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import { SelectableTile, DeletableTile, DisableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

export default function CoinTile({ coinKey, topSection }) {
  const { state } = useContext(AppContext);
  const coin = state.coinList[coinKey];
  let TileClass = SelectableTile;
  if (topSection) {
    TileClass = DeletableTile;
  }
  return (
    <TileClass>
      <CoinHeaderGrid
        name={coin.CoinName}
        symbol={coin.Symbol}
        topSection={topSection}
      />
      <CoinImage coin={coin} />
    </TileClass>
  );
}
