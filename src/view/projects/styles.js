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
  align-items: center;
  @media (max-width: 380px) {
    padding: 15px;
  }
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
  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }
  @media (max-width: 700px) {
    font-size: 2.1rem;
    padding-top: 80px;
  }
  @media (max-width: 380px) {
    font-size: 1.6rem;
  }
`;
export const SectionProject = styled.section`
  display: flex;
  justify-content: space-around;
`;
export const Img = styled.img`
  width: 800px;
  height: 100%;
  @media (max-width: 1600px) {
    width: 600px;
  }
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`;
export const InfoTitle = styled.p`
  margin-top: 20px;
  font-weight: 500;

  background-image: ${({ theme }) => theme.gradienteBluePurple};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  @media (max-width: 1050px) {
    font-size: 2rem;
  }
  @media (max-width: 380px) {
    font-size: 1.6rem;
  }
`;
export const ContainerInfo = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 30px;
  max-width: 1800px;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const Description = styled.p`
  font-size: 1.5rem;
  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }
`;
export const ContainerResum = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-left: 10px;
  max-width: 600px;
`;
export const ContainerGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 100px;
  max-width: 1800px;
  @media (max-width: 700px) {
    padding: 0px;
    padding-left: 50px;
  }
  @media (max-width: 500px) {
    padding-left: 1px;
  }
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
