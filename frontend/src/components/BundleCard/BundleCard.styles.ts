import styled from '@emotion/styled';

type TitleProps = {
  isComplete: boolean;
};

export const StyledTitle = styled.h3<TitleProps>`
  font-size: 24px;
  line-height: 28px;
  color: ${({ isComplete }) => (isComplete ? 'gray' : 'black')};
  text-decoration: ${({ isComplete }) => (isComplete ? 'line-through' : 'none')};
  text-transform: capitalize;
  margin: 0;
`;

export const StyledLi = styled.li`
  list-style: none;
  margin: 8px 0;
`;

export const StyledCard = styled.div`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  width: fit-content;
  min-width: 300px;
  padding: 10px 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;
