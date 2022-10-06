import React from 'react';
import Picture from '../../assets/Img/picture.png';
import * as S from './styles';
export default function Banner() {
  return (
    <S.Body>
      <S.ContainerBody>
        <S.ContainerPicture>
          <S.BckgroundPicture>
            <S.Frame>
              <S.Picture src={Picture} alt="foto" srcset="" />
            </S.Frame>
          </S.BckgroundPicture>
        </S.ContainerPicture>
        <S.ContainerInformations>
          <S.TextWelcome>Seja bem vind@</S.TextWelcome>
          <S.TextName>Yasmin Vieira de Almeida</S.TextName>

          <S.TextInfo>Desenvolvedora Front-End</S.TextInfo>
          <S.ContainerArray>
            <S.ArrayInfo>
              <span>Infos</span> {'\u007B'}
              <div>
                Cargo: <span>Estagio,</span>
              </div>
              <div>
                Empresa: <span>Grupo Energisa</span>
              </div>
              {'\u007D'}
            </S.ArrayInfo>
          </S.ContainerArray>
        </S.ContainerInformations>
      </S.ContainerBody>
    </S.Body>
  );
}
