import styled from 'styled-components';
import Banner from '../../assets/Img/banner.png';

export const Body = styled.section`
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-items: start;
`;
