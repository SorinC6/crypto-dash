import React, { useContext } from "react";
import { AppContext } from "../AppProvider";
import styled, { css } from "styled-components";

const Logo = styled.div`
  font-size: 1.5em;
`;
const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 30px;
  ${({ active }) =>
    active &&
    css`
      text-shadow: 1px 1px 2px red, 0 0 25px red, 0 0 5px white;
    `}
`;

const toUpperCase = string => {
  return string.charAt(0).toUpperCase() + string.substr(1);
};

const ControlButton = ({ name }) => {
  const { state, setPage } = useContext(AppContext);
  return (
    <ControlButtonWrapper
      onClick={() => setPage(name)}
      active={state.page === name}
    >
      {toUpperCase(name)}
    </ControlButtonWrapper>
  );
};

export default () => {
  return (
    <Bar>
      <Logo>CriptoDash</Logo>
      <div />
      <ControlButton name="dashboard" active />
      <ControlButton name="settings" />
    </Bar>
  );
};
