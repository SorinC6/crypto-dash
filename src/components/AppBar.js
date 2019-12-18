import React from "react";
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
      text-shadow: 1px 1px 30px #03ff03;
    `}
`;

const toUpperCase = string => {
  return string.charAt(0).toUpperCase() + string.substr(1);
};

const ControlButton = ({ name, active }) => {
  return (
    <ControlButtonWrapper active={active}>
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
