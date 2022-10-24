import { Link } from 'react-router-dom';
import * as S from './styles';
import Moon from '../../assets/svg/moon.svg';
import Sun from '../../assets/svg/sun.svg';
import { useTheme } from '../../hooks/useTheme';
export default function Header() {
  const { theme, changeTheme } = useTheme();

  return (
    <S.ContainerHeader>
      <S.Navigation>
        <S.ContainerLink>
          <div onClick={changeTheme}>
            {theme === 'light' ? (
              <S.Icons src={Moon} alt="moon" />
            ) : (
              <S.Icons src={Sun} alt="sun" />
            )}
          </div>

          <S.List>
            <Link to="./">Home</Link>
          </S.List>
          <S.List>
            <Link to="./about">About</Link>
          </S.List>
          <S.List>
            <Link to="./projects">Projects</Link>
          </S.List>
        </S.ContainerLink>
      </S.Navigation>
    </S.ContainerHeader>
  );
}
