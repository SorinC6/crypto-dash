import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../AppProvider";

const ConfirmBtnStyles = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function ConfirmButton() {
  const { confirmFavorits } = useContext(AppContext);
  return (
    <CenterDiv>
      <ConfirmBtnStyles onClick={confirmFavorits}>
        Confirm Favorits
      </ConfirmBtnStyles>
    </CenterDiv>
  );
}
