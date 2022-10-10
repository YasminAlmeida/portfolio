import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
export default function Header() {
  return (
    <S.ContainerHeader>
      <S.Navigation>
        <S.ContainerLink>
          <S.List>
            <Link to="./">Home</Link>
          </S.List>
          <S.List>
            <Link to="./about">About</Link>
          </S.List>
        </S.ContainerLink>
      </S.Navigation>
    </S.ContainerHeader>
  );
}
