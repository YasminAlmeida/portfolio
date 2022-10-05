import React from 'react';
import Picture from '../../assets/Img/picture.png';
import * as S from './styles';
export default function Banner() {
  return (
    <>
      <div>
        <S.Picture src={Picture} alt="foto" srcset="" />
      </div>
    </>
  );
}
