import styled from 'styled-components';

export const FullCalView = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FullCalViewHeader = styled.div`
  font-size: 16px;
  font-weight: 200;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
  margin: 0px 32px 0px 16px;
  margin-bottom: 4px;
`;

export const FullCalViewHeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding: 16px 16px 8px 16px;
`;

export const FullCalViewHeaderDayGridTitle = styled.div`
  font-size: 16px;
  font-weight: 200;
  padding-bottom: 8px;
  border-bottom: 2px solid #eee;
  margin: 0px 32px 0px 16px;
  margin-bottom: 4px;
`;

export const FullCalViewGridWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export const FullCalViewGrid = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  overflow: scroll;
  height: 100%;
  padding: 0 32px;
`;
