import styled from 'styled-components';

export const Body = styled.section`
  background-image: url(${({ theme }) => theme.backgroundUrlImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-items: start;
`;
