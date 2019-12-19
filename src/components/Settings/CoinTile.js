import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import { SelectableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

export default function CoinTile({ coinKey }) {
  const { state } = useContext(AppContext);
  const coin = state.coinList[coinKey];
  const TileClass = SelectableTile;
  return (
    <TileClass>
      <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
      <CoinImage coin={coin} />
    </TileClass>
  );
}
