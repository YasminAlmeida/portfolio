import styled from 'styled-components';

export const ContainerHeader = styled.div`
  background-color: #1111;
  height: 100px;
  position: fixed;
  width: 100%;
  font: 600 1.5rem/1.35 sans-serif;
  flex-direction: column;
  display: flex;
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  right: 0;
`;
export const Icons = styled.img`
  position: absolute;
  top: 0;
  width: 50px;
  left: 0;
  margin-top: 10px;
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-image: ${({ theme }) => theme.gradientePinkPurple};
    background-size: 100px;
    border-radius: 50%;
  }
  transition: 0.7s ease-in-out;
`;
export const ContainerLink = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const List = styled.li`
  padding: 10px;

  a {
    color: #7125e8;
    text-decoration: none;
    position: relative;
    display: inline-block;
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
  a::after {
    content: '';
    display: block;
    height: 3px;
    width: 0px;
    background: #7125e8;
    margin-top: 4px;
    transition: 0.3s;
    position: absolute;
  }
  a:hover:after {
    width: 100%;
  }
`;
