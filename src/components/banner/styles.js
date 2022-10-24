import styled from 'styled-components';

export const Picture = styled.img`
  max-width: 280px;
  border-radius: 4rem;
  @media (max-width: 850px) {
    max-width: 230px;
  }
  @media (max-width: 650px) {
    max-width: 210px;
    border-radius: 50%;
  }
`;
export const Body = styled.section`
  padding: 30px;
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');
  padding-top: 100px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1540px;
  @media (max-width: 750px) {
    padding: 0px;
    padding-top: 100px;
  }
`;
export const ContainerBody = styled.section`
  display: grid;
  grid-template-columns: 450px 1fr;
  align-items: center;
  align-items: center;
  align-items: end;
  justify-items: center;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
export const ContainerInformations = styled.section`
  display: grid;
  justify-items: end;
  text-align: end;
  margin-right: 50px;
  @media (max-width: 680px) {
    grid-row: 1;
    justify-items: end;
  }
  @media (max-width: 450px) {
    grid-row: 2;
    margin-right: 0px;
  }
`;
export const ContainerPicture = styled.div`
  width: max-content;
  border-radius: 4rem;
  display: grid;
  place-items: center;
  @media (max-width: 680px) {
    grid-row: 1/-1;
  }
  @media (max-width: 680px) {
    overflow: hidden;
  }
`;
export const BckgroundPicture = styled.div`
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(35deg, transparent, #f8f8, transparent);
  display: grid;
  transform: rotate(18deg);
  @media (max-width: 650px) {
    transform: rotate(243deg);
    border-radius: 50%;
  }
`;
export const Frame = styled.figure`
  border-radius: 2rem;
  transform: rotate(343deg);
  background: #f8f8;
  border-radius: 4rem;
  @media (max-width: 650px) {
    transform: rotate(118deg);
    border-radius: 50%;
  }
`;
export const TextName = styled.h4`
  background-image: ${({ theme }) => theme.gradienteBluePurple};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  color: black;
  margin-bottom: 0;
  text-align: end;
  font-family: serif, -apple-system, 'Segoe UI', Roboto, sans-serif;
  @media (max-width: 850px) {
    font-size: 2.5rem;
  }
  @media (max-width: 770px) {
    font-size: 2.1rem;
  }
`;
export const TextWelcome = styled.h4`
  background-image: ${({ theme }) => theme.gradienteBluePurple};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  text-align: end;
  @media (max-width: 850px) {
    font-size: 1.6rem;
  }
`;
export const TextInfo = styled.h6`
  background-image: ${({ theme }) => theme.gradientePurpleBlue};
  background-image: ${({ theme }) => theme.gradientePurpleBlue};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2rem;
  color: black;
  margin-top: 0;
  @media (max-width: 850px) {
    font-size: 1.1rem;
  }
`;
export const ArrayInfo = styled.h6`
  color: ${({ theme }) => theme.textLight};
  font-size: 0.68rem;
`;
export const ContainerArray = styled.section`
  background: ${({ theme }) => theme.gradienteDarkColor};
  width: 200px;
  border-radius: 4px;
  display: grid;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 2px 2px 3px #7ac7e3;
  text-align: start;
  div {
    margin-left: 2.1rem;
  }
`;
