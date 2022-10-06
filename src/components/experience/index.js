import React from 'react';
import * as S from './styles';

export default function Experience() {
  return (
    <S.SectionExperience>
      <S.TextTitle>Minhas Experiência</S.TextTitle>
      <S.ContainerExperiences>
        <S.Experience>
          <S.Year>2021</S.Year>
          <S.Position>Estagio</S.Position>
          <S.Description>
            Auxiliar na implementação de projetos de automação, serviços
            elétricos e eletrônicos, prestar apoio na manutenção preventiva e
            corretiva em máquinas e equipamentos
          </S.Description>
        </S.Experience>

        <S.Experience>
          <S.Year>2021</S.Year>
          <S.Position>Bolsa de Inovação</S.Position>
          <S.Description>
            Criação de projetos na área de programação com o uso de Python,
            JavaScript e desenvolvimento de documentações em 'Fuctional Safety'
          </S.Description>
        </S.Experience>

        <S.Experience>
          <S.Year>2022</S.Year>
          <S.Position>Estagio</S.Position>
          <S.Description>Auxilio no gerenciamento de tarefas.</S.Description>
        </S.Experience>
      </S.ContainerExperiences>
    </S.SectionExperience>
  );
}
