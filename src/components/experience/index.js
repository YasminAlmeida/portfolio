import React from 'react';
import * as S from './styles';

export default function Experience() {
  return (
    <S.SectionExperience>
      <S.TextTitle>Minhas Experiências</S.TextTitle>
      <S.ContainerExperiences>
        <S.Experience>
          <S.Year>2021</S.Year>
          <S.Position>Estagio</S.Position>
          <S.Company>GM Consultoria</S.Company>
          <S.Description>
            Auxiliar na implementação de projetos de automação, serviços
            elétricos e eletrônicos, prestar apoio na manutenção preventiva e
            corretiva em máquinas e equipamentos
          </S.Description>
        </S.Experience>

        <S.Experience>
          <S.Year>2021</S.Year>
          <S.Position>Bolsa de Inovação</S.Position>
          <S.Company>Ford Motor Company</S.Company>
          <S.Description>
            Criação de projetos na área de programação com o uso de Python,
            JavaScript e desenvolvimento de documentações em 'Fuctional Safety'
          </S.Description>
        </S.Experience>

        <S.Experience>
          <S.Year>2022</S.Year>
          <S.Position>Estagio</S.Position>
          <S.Company>Grupo Energisa</S.Company>
          <S.Description>
            Monitorar o estado de Mato Grosso em tensão inferior a 138KV,
            solicitar manutenções e correções de sistemas em sistema Scada e
            campo, além de análise de oscilografias
          </S.Description>
        </S.Experience>
      </S.ContainerExperiences>
    </S.SectionExperience>
  );
}
