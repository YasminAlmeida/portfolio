import React from 'react';
import * as S from './styles';
import Animals from '../../assets/video/animals.gif';
import Calculator from '../../assets/video/calculator.gif';
import CatsAndDogs from '../../assets/video/catsAndDogs.gif';
export default function Projects() {
  const galeria = document.querySelectorAll('img');
  const galeriaContainer = document.querySelector('.SectionProject');

  function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if (media) {
      galeriaContainer.prepend(img);
    }
  }

  function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
  }

  galeria.forEach(eventosGaleria);
  return (
    <>
      <S.Body>
        <S.TextTitle>Projetos | Meu portfólio</S.TextTitle>
        <S.SectionProject>
          <div>
            <h3>Projeto de uma calculadora Versatil</h3>
            <div>
              <a href="">
                <S.Img src={Calculator} alt="" />
              </a>
            </div>
            {/* <p>
              O projeto foi realizado focando no desenvolvimento de duas
              calculadores, uma específica para o calculo do teorema de
              pitagoras e uma calculadora comum.
            </p>
            <ul>
              <li>React</li>
            </ul> */}
          </div>
          <div>
            <h3>Projeto de uma calculadora Versatil</h3>
            <div>
              <a href="">
                <S.Img src={CatsAndDogs} alt="" />
              </a>
            </div>
            {/* <p>
              O projeto foi realizado com o apoio do cuso da plataforma
              VaiNaWeb, foi utilizado:
            </p>
            <ul>
              <li>React</li>
              <li>API externo</li>
            </ul> */}
          </div>
          <div>
            <h3>Um dos Primeiros projetos realizados</h3>
            <div>
              <a href="https://yasminalmeida.github.io/Animals/">
                <S.Img src={Animals} alt="" />
              </a>
            </div>
            {/* <p>
              O projeto foi realizado com o apoio do cuso da plataforma
              Origamid, foi utilizado:
            </p>
            <ul>
              <li>Javascripst</li>
              <li>Html</li>
              <li>Css</li>
            </ul> */}
          </div>
        </S.SectionProject>
      </S.Body>
    </>
  );
}
