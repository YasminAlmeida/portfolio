import * as S from './styles';
import Header from '../../components/header/index';
import Banner from '../../components/banner/index';
import Experience from '../../components/experience/index';
export default function Home() {
  return (
    <S.Body>
      <Header />
      <Banner />
      <Experience />
    </S.Body>
  );
}
