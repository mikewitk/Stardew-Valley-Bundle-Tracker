import styled from '@emotion/styled';

export const StyledTitle = styled.h2`
  text-transform: capitalize;
`;

export const StyledText = styled.p`
  font-weight: bold;
`;

export const StyledReward = styled.span`
  text-transform: uppercase;
  margin-left: 8px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 32px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  background-color: white;
  width: fit-content;
  min-width: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;
