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
        <div>
          {bigImage && (
            <S.ContainerInfo>
              <S.Img src={bigImage.src} alt="imagem" />
              <S.ContainerResum>
                <S.InfoTitle>{bigImage.caption}</S.InfoTitle>
                <S.Description>{bigImage.description}</S.Description>
                <S.BtnSite href={bigImage.link}>Visualizar o Projeto</S.BtnSite>
              </S.ContainerResum>
            </S.ContainerInfo>
          )}
          <S.ContainerGallery>
            <Gallery
              enableLightbox={false}
              maxRows={6}
              images={images}
              onSelect={handleSelect}
            />
          </S.ContainerGallery>
        </div>
      </S.Body>
    </>
  );
}
