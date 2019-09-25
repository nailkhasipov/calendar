import React from "react";
import styled from "styled-components";

const StyledHoursLabels = styled.div`
  margin: 0;
  padding: 0;
  left: 0;
  font-size: 11px;
  color: #ccc;
  margin-right: 8px;
  font-weight: 200;
`;

const HoursLabel = styled.div`
  height: 40px;
`;

export const HoursLabels = () => (
  <StyledHoursLabels>
    {[...Array(24)].map((element, index) => (
      <HoursLabel key={index}>
        {index.toString().padStart(2, "0")}:00
      </HoursLabel>
    ))}
  </StyledHoursLabels>
);
