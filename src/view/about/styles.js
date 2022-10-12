import styled from 'styled-components';
import Banner from '../../assets/Img/banner.png';

export const ContainerAbout = styled.section`
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
export const ContainerInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-top: 50px;
`;
export const ContainerText = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1.08rem;
  color: #c4c4c4;

  font-weight: 400;
`;
export const FormationExtra = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1.05rem;
  font-weight: 300;
  line-height: 1.6;
  margin-top: 40px;
`;
export const SectionAbout = styled.section`
  display: grid;
  grid-template-columns: 400px 1fr;
  justify-items: center;
`;

export const ContainerIdiomas = styled.div``;
export const ContainerCursos = styled.div`
  margin-bottom: 20px;
`;
export const Title = styled.h3`
  font-size: 1.2rem;
  color: #8f8f8f;
  text-transform: uppercase;
  position: relative;
`;
export const Picture = styled.img`
  max-width: 250px;
  border-radius: 4rem;
`;
export const BckgroundPicture = styled.div`
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(35deg, transparent, #9b30f9, transparent);
  display: grid;
  transform: rotate(18deg);
`;
export const Frame = styled.figure`
  border-radius: 2rem;
  transform: rotate(343deg);
  background: #84e;
  border-radius: 4rem;
`;
export const ContainerPicture = styled.div`
  width: max-content;
  border-radius: 4rem;
  display: grid;
  place-items: center;
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
