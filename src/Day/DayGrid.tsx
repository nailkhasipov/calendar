import React from "react";
import styled from "styled-components";

import { VEvent } from "../types";

type DayGridProps = {
  full?: boolean;
  date: Date;
};

type StyledDayGridProps = {
  full?: boolean;
};

const StyledDayGrid = styled.div`
  width: ${(props: StyledDayGridProps) =>
    props.full ? "100%" : "14.2857142857%"};
  padding-top: 6px;
  position: relative;
`;
const Hour = styled.div`
  height: 40px;
  border-top: 1px solid #f8f9fa;
  border-right: 1px solid #eeeeee;
  :last-child {
    border-right: none;
  }
`;

export const DayGrid = (props: DayGridProps) => (
  <StyledDayGrid full={props.full}>
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
    <Hour />
  </StyledDayGrid>
);
