import React from 'react';
import Idiomas from '../../assets/svg/idiomas.svg';
import Cursos from '../../assets/svg/cursos.svg';
import PictureAbout from '../../assets/Img/ft.png';

import * as S from './styles';
import Contact from '../../components/contact/index';
export default function About() {
  return (
    <S.ContainerAbout>
      <S.TextTitle>Sobre</S.TextTitle>
      <S.SectionAbout>
        <S.ContainerInfo>
          <S.ContainerText>
            <p>
              Estudante de Engenharia de Controle e Automação na Faculdade
              Federal de Mato Grosso 🎓
              <br />
              Passei os últimos meses em um ambiente remoto, trabalhando com
              HTML, CSS, JavaScript, Python, além de realizar diversos cursos na
              área de desenvolvimento web
            </p>
          </S.ContainerText>
          <S.FormationExtra>
            <S.ContainerCursos>
              <S.Title>
                <img src={Cursos} alt="icon" />
                Cursos
              </S.Title>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vue</li>
                <li>Html</li>
                <li>Css</li>
                <li>Python</li>
              </ul>
            </S.ContainerCursos>
            <div>
              <S.Title>
                <img src={Idiomas} alt="icon" />
                Idiomas
              </S.Title>
              <ul>
                <li>
                  Inglês<span>/Intermediario</span>
                </li>
                <li>
                  Espanhol<span>/Intermediario/Avançado</span>
                </li>
              </ul>
            </div>
          </S.FormationExtra>
        </S.ContainerInfo>
        <S.ContainerPicture>
          <S.BckgroundPicture>
            <S.Frame>
              <S.Picture src={PictureAbout} alt="" />
            </S.Frame>
          </S.BckgroundPicture>
        </S.ContainerPicture>
      </S.SectionAbout>
      <Contact />
    </S.ContainerAbout>
  );
}
