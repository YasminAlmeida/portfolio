import Animals from '../../assets/video/animals.gif';
import Calculator from '../../assets/video/calculator.gif';
import CatsAndDogs from '../../assets/video/catsAndDogs.gif';
import Techno from '../../assets/video/techno.gif';
import Movies from '../../assets/video/movieVue.gif';

export const images = [
  {
    src: Calculator,
    link: 'https://challengepythagoras.vercel.app/',
    width: 320,
    height: 174,
    isSelected: false,
    tags: [
      { value: 'Fremawork', title: 'React' },
      { value: 'Linguage', title: 'JS' },
    ],
    caption: 'Projeto Calculadora',
    description:
      ' O projeto foi realizado focando no desenvolvimento de duas calculadores, uma específica para o calculo do teorema de    pitagoras e uma calculadora comum.',
  },
  {
    src: Animals,
    link: 'https://yasminalmeida.github.io/Animals/',
    width: 400,
    height: 200,
    isSelected: false,
    tags: [
      { value: 'Fremawork', title: 'No' },
      { value: 'Linguage', title: 'JS' },
    ],
    caption: 'Projeto Animals',
  },
  {
    src: CatsAndDogs,
    link: 'https://yasminalmeida.github.io/Animals/',
    width: 400,
    height: 200,
    isSelected: false,
    tags: [
      { value: 'Fremawork', title: 'React' },
      { value: 'Linguage', title: 'JS' },
    ],
    caption: 'Projeto CatsAndDogs',
    description: 'O projeto foi realizado com o apoio do curso dVaiNaWeb.',
  },
  {
    src: Techno,
    link: 'https://techno-nu.vercel.app/',
    width: 400,
    height: 200,
    isSelected: false,
    tags: [
      { value: 'Fremawork', title: 'Vue' },
      { value: 'Linguage', title: 'JS' },
    ],
    caption: 'Projeto Techno',
    description:
      'O projeto foi realizado com o apoio do curso da plataforma Origamid.',
  },
  {
    src: Movies,
    link: 'https://moviesonline.vercel.app/',
    width: 400,
    height: 200,
    isSelected: false,
    tags: [
      { value: 'Fremawork', title: 'Vue' },
      { value: 'Linguage', title: 'JS' },
    ],
    caption: 'Projeto Movies',
    description:
      'O projeto foi realizado com o apoio do curso da plataforma Origamid.',
  },
];
