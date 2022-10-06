import styled from 'styled-components';

export const TextTitle = styled.h4`
  background-image: ${({ theme }) => theme.gradienteBluePurple};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  color: black;
  margin-bottom: 0;
  text-align: end;
  margin-top: 100px;
`;
