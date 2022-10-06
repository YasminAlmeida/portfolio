import styled from 'styled-components';
import Banner from '../../assets/Img/banner.png';

export const Picture = styled.img`
  max-width: 280px;
  border-radius: 4rem;
`;
export const Body = styled.section`
  /* background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover; */
  padding: 30px;
`;
export const ContainerBody = styled.section`
  display: grid;
  grid-template-columns: 450px 1fr;
  align-items: center;
  align-items: center;
`;
export const ContainerInformations = styled.section`
  display: grid;
  justify-items: end;
  text-align: end;
  margin-right: 50px;
`;
export const ContainerPicture = styled.div`
  width: max-content;
  border-radius: 4rem;
  display: grid;
  place-items: center;
`;
export const BckgroundPicture = styled.div`
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(35deg, transparent, #f8f8, transparent);
  display: grid;

  transform: rotate(18deg);
`;
export const Frame = styled.figure`
  border-radius: 2rem;
  transform: rotate(343deg);
  background: #f8f8;
  border-radius: 4rem;
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
`;
export const TextWelcome = styled.h4`
  background-image: ${({ theme }) => theme.gradienteBluePurple};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  text-align: end;
`;
export const TextInfo = styled.h6`
  background-image: ${({ theme }) => theme.gradientePurpleBlue};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2rem;
  color: black;
  margin-top: 0;
`;
export const ArrayInfo = styled.h6`
  color: ${({ theme }) => theme.textLight};
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
