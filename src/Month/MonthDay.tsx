import React from 'react';
import styled from 'styled-components';

type MonthDayProps = {
  date: Date;
};

const StyledMonthDay = styled.div`
  width: 14.2857142857%;
  height: 16.6666666667%;
  border-left: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
`;

const MonthDayLabel = styled.span`
  width: 100%;
  text-align: right;
  display: block;
  padding: 8px;
  font-size: 13px;
`;

const MonthTableDayEvent = styled.div`
  background: #339af0;
`;

export const MonthDay = (props: MonthDayProps) => {
  return (
    <StyledMonthDay>
      <MonthDayLabel>{props.date.getDate()}</MonthDayLabel>
    </StyledMonthDay>
  );
};
