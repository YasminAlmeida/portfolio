import React from 'react';
import * as S from './styles';
import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import { images as IMAGES } from '../../components/enums/galleryImages';

export default function Projects() {
  const [bigImage, setBigImage] = useState(IMAGES[0]);
  const [images, setImages] = useState(IMAGES);

  const handleSelect = (index) => {
    const nextImages = images.map((image, i) =>
      i === index ? { ...image, isSelected: !image.isSelected } : image,
    );
    setImages(nextImages);
    setBigImage(images[index]);
  };

  return (
    <>
      <S.Body>
        <S.TextTitle>Últimos Projetos | Meu portfólio</S.TextTitle>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

            width: '100%',
          }}
        >
          {bigImage && (
            <S.ContainerInfo>
              <img src={bigImage.src} alt="imagem" />
              <S.ContainerResum>
                <S.InfoTitle>{bigImage.caption}</S.InfoTitle>
                <p>{bigImage.description}</p>
                <S.BtnSite href={bigImage.link}>Visualizar o Projeto</S.BtnSite>
              </S.ContainerResum>
            </S.ContainerInfo>
          )}
          <div
            style={{
              marginLeft: '10%',
              marginTop: '20px',
            }}
          >
            <Gallery images={images} onSelect={handleSelect} />
          </div>
        </div>
      </S.Body>
    </>
  );
}
