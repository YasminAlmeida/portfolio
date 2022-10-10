import React from 'react';
import * as S from './styles';
import IconReact from '../../assets/svg/react.svg';
import IconVue from '../../assets/svg/vuejs.svg';
import IconJavaScript from '../../assets/svg/javascript.svg';
import IconHtml from '../../assets/svg/html5.svg';
import IconCss from '../../assets/svg/css3.svg';
export default function Knowledge() {
  return (
    <S.SectionKnowledge>
      <S.TextTitle>Conhecimentos</S.TextTitle>
      <S.ContainerIcon>
        <S.Img src={IconReact} alt="icon" />
        <S.Img src={IconVue} alt="icon" />
        <S.Img src={IconJavaScript} alt="icon" />
        <S.Img src={IconHtml} alt="icon" />
        <S.Img src={IconCss} alt="icon" />
      </S.ContainerIcon>
    </S.SectionKnowledge>
  );
}
