import styled from 'styled-components';

export const SectionKnowledge = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 100px;
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');
`;
export const TextTitle = styled.h4`
  background-image: ${({ theme }) => theme.gradienteBluePurple};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  color: black;
  text-align: start;
  font-family: serif, -apple-system, 'Segoe UI', Roboto, sans-serif;
`;

export const Img = styled.img`
  max-width: 80px;
  max-height: 80px;
`;
export const ContainerIcon = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  opacity: 0.7;
  transition: 0.3s;
  cursor: pointer;
  animation: rotate 6s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }

    50% {
      transform: rotateY(180deg);
    }

    51% {
      transform: rotateY(180deg);
    }

    99% {
      transform: rotateY(0deg);
    }

    100% {
      transform: rotateY(0deg);
    }
  }
`;
