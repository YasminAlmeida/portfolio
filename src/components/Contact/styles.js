import styled from 'styled-components';
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
export const SectionContact = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 50px;
`;
export const ContainerContact = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 50px;
`;
export const BtnContact = styled.button`
  color: #c6c9d8;
  font-size: 1.15rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 2px solid #b1b4c1;
  padding: 15px;
  border-radius: 6px;
  font-weight: 500;
  transition: 0.3s;
  background: transparent;
  cursor: pointer;
  margin-top: 50px;
  width: fit-content;
  &:hover {
    background: #fff;
    border-color: #fff;
    color: #84e;
  }
`;
export const Input = styled.input`
  width: 70%;
  padding: 0 20px;
  border: 1px solid rgba(99, 117, 172, 135.5);
  border-radius: 5px;
  transition: all 0.3s ease;
  height: 50px;
  line-height: 46px;
  margin-bottom: 20px;
  outline: none;
  font-size: 15px;
  letter-spacing: 0.1px;
  color: #fff;
  font-size: 1.15rem;
  background-color: #1111;
  cursor: pointer;
  &:focus {
    border-color: #84e;
  }
  &::placeholder {
    color: #fff;
  }
`;
export const Mnessage = styled.textarea`
  max-width: 70%;
  padding: 0 20px;
  border: 1px solid rgba(99, 117, 172, 135.5);
  border-radius: 5px;
  transition: all 0.3s ease;
  max-height: 100px;
  line-height: 46px;
  margin-bottom: 20px;
  outline: none;
  font-size: 15px;
  letter-spacing: 0.1px;
  color: #fff;
  font-size: 1.15rem;
  background-color: #1111;
  cursor: pointer;
  &:focus {
    border-color: #84e;
  }
  &::placeholder {
    color: #fff;
  }
`;
export const TextContact = styled.h4`
  background-image: ${({ theme }) => theme.gradienteBluePurple};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.8rem;
  margin-top: 10px;
`;
export const SocialMidia = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 2px;
`;
export const ContainerSend = styled.div`
  display: grid;
  grid-template-columns: 1fr 50px;
  margin-top: 50px;
  align-items: stretch;
`;
export const ContainerSocialMidia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
