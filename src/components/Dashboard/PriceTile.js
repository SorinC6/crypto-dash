import React, { useContext, useEffect } from "react";
import { AppContext } from "../../AppProvider";
import styled, { css } from "styled-components";
import { SelectableTile } from "../Shared/Tile";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Shared/Styles";
import { CoinHeaderStyled } from "../Settings/CoinHeaderGrid";

const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;

const TickerPrice = styled.div`
  ${fontSizeBig}
`;
const ChangeProcent = styled.div`
  color: green;
  ${props =>
    props.red &&
    css`
      color: red;
    `}
`;

const PriceTileStyled = styled(SelectableTile)`
  ${props =>
    props.compact &&
    css`
      ${fontSize3}
      display:grid;
      gap: 5px;
      grid-template-columns: repeat(3, 1fr);
      justify-items: right;
    `}

  ${props =>
    props.currentFavorite &&
    css`
      ${greenBoxShadow}
      pointer-events:none;
    `}
`;

const formatNumber = number => {
  return +(number + "").slice(0, 7);
};

const Change24Percent = ({ data }) => {
  return (
    <JustifyRight>
      <ChangeProcent red={data.CHANGEPCT24HOUR < 0}>
        {formatNumber(data.CHANGEPCT24HOUR)}
      </ChangeProcent>
    </JustifyRight>
  );
};

const PriceHelper = ({ sym, data, currentFavorite, setCurrentFavorite }) => {
  return (
    <PriceTileStyled
      onClick={setCurrentFavorite}
      currentFavorite={currentFavorite}
    >
      <CoinHeaderStyled>
        <div>{sym}</div>
        <Change24Percent data={data} />
      </CoinHeaderStyled>
      <TickerPrice>${formatNumber(data.PRICE)}</TickerPrice>
    </PriceTileStyled>
  );
};

const PriceTileCompact = ({
  sym,
  data,
  currentFavorite,
  setCurrentFavorite
}) => {
  return (
    <PriceTileStyled
      onClick={setCurrentFavorite}
      compact
      currentFavorite={currentFavorite}
    >
      <JustifyLeft>{sym}</JustifyLeft>
      <Change24Percent data={data} />
      <div>${formatNumber(data.PRICE)}</div>
    </PriceTileStyled>
  );
};

export default function PriceTile({ price, index }) {
  const { state, setCurrentFavorite } = useContext(AppContext);
  console.log(state.currentFavorites);
  let sym = Object.keys(price)[0];
  let data = price[sym]["USD"];
  let TileClass = index < 5 ? PriceHelper : PriceTileCompact;

  useEffect(() => {}, []);
  return (
    <TileClass
      data={data}
      sym={sym}
      currentFavorite={state.currentFavorites === sym}
      setCurrentFavorite={() => setCurrentFavorite(sym)}
    />
  );
}
