import styled from 'styled-components';

export const SectionExperience = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 100px;
`;
export const ContainerExperiences = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;
export const TextTitle = styled.h4`
  background-image: ${({ theme }) => theme.gradienteBluePurple};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  color: black;
  margin-bottom: 0;
  text-align: start;
`;
export const Experience = styled.div`
  margin: 100px 20px 0;
  background: ${({ theme }) => theme.gradient};
  padding: 1rem;
  padding-top: 2.5rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px #f8f8;
  max-width: 15rem;
  transition: 0.5s;
  background-color: #000;
`;
export const Year = styled.h4`
  background: linear-gradient(to right, #7125e8 0%, #f8f8 100%);
  -webkit-text-fill-color: transparent;
  background-clip: initial;
  -webkit-background-clip: text;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;
export const Position = styled.h6`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;
export const Description = styled.h4`
  color: ${({ theme }) => theme.textLight};
  font-size: 1rem;
  font-weight: 300;
`;
