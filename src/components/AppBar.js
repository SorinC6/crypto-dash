import React from "react";
import styled from "styled-components";
const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

export default () => {
  return (
    <Bar>
      <div>CriptoDash</div>
      <div />
      <div>Dashboard</div>
      <div>Settings</div>
    </Bar>
  );
};
