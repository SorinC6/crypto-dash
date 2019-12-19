import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import { SelectableTile, DeletableTile, DisableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
  return topSection ? () => removeCoin(coinKey) : () => addCoin(coinKey);
}

export default function CoinTile({ coinKey, topSection }) {
  const { state, addCoin, removeCoin, isInFavorites } = useContext(AppContext);
  const coin = state.coinList[coinKey];
  let TileClass = SelectableTile;
  if (topSection) {
    TileClass = DeletableTile;
  } else if (isInFavorites(coinKey)) {
    TileClass = DisableTile;
  }
  return (
    <TileClass
      onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
    >
      <CoinHeaderGrid
        name={coin.CoinName}
        symbol={coin.Symbol}
        topSection={topSection}
      />
      <CoinImage coin={coin} />
    </TileClass>
  );
}
