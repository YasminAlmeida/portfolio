import styled from 'styled-components';
import Banner from '../../assets/Img/banner.png';

export const Body = styled.section`
  padding-top: 110px;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
  color: #c4c4c4;
  display: grid;
  padding: 30px;
  grid-template-columns: 1fr;
  padding-top: 100px;
`;
export const TextTitle = styled.h4`
  background-image: ${({ theme }) => theme.gradienteBluePurple};
  background-clip: text;
  font-family: serif, -apple-system, 'Segoe UI', Roboto, sans-serif;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  color: black;
  margin-bottom: 0;
  text-align: start;
`;
export const SectionProject = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  display: grid;
  max-width: 200px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  div {
  }
  & > :first-child {
    grid-column: 1/-1;
    img {
      width: 700px;
    }
  }
`;
export const Img = styled.img`
  width: 400px;
  height: 100%;
`;
