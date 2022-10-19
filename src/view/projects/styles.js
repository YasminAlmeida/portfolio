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
  justify-content: space-around;
`;
export const Img = styled.img`
  width: 400px;
  height: 100%;
`;
export const InfoTitle = styled.p`
  margin-top: 20px;
  font-weight: 500;
  background-image: ${({ theme }) => theme.gradienteBluePurple};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
`;
export const ContainerInfo = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 30px;
`;
export const ContainerResum = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-left: 10px;
`;
export const BtnSite = styled.a`
  color: #c6c9d8;
  font-size: 1.05rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1.5px solid #b1b4c1;
  padding: 10px;
  border-radius: 6px;
  font-weight: 500;
  transition: 0.3s;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  margin-top: 50px;
  width: fit-content;
  margin-bottom: 20px;
  &:hover {
    background: #fff;
    border-color: #fff;
    color: #84e;
  }
`;
