import * as S from './styles';
import Banner from '../../components/banner/index';
import Experience from '../../components/experience/index';
import Knowledge from '../../components/knowledge/index';

export default function Home() {
  return (
    <S.Body>
      <Banner />
      <Experience />
      <Knowledge />
    </S.Body>
  );
}
