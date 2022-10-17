import React from 'react';
import * as S from './styles';
import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import { images as IMAGES } from '../../components/enums/galleryImages';

export default function Projects() {
  const [bigImage, setBigImage] = useState(IMAGES[0]);
  const [images, setImages] = useState(IMAGES);
  const hasSelected = images.some((image) => image.isSelected);

  const handleSelect = (index) => {
    const nextImages = images.map((image, i) =>
      i === index ? { ...image, isSelected: !image.isSelected } : image,
    );
    setImages(nextImages);
    setBigImage(images[index]);
  };
  const handleSelectAllClick = () => {
    const nextImages = images.map((image) => ({
      ...image,
      isSelected: !hasSelected,
    }));
    setImages(nextImages);
  };

  return (
    <>
      <S.Body>
        <S.TextTitle>Projetos | Meu portfólio</S.TextTitle>
        <div>
          {bigImage && (
            <div>
              <S.InfoTitle>{bigImage.caption}</S.InfoTitle>
              <img src={bigImage.src} alt="imagem" />
              <p>{bigImage.description}</p>
            </div>
          )}
          <div className="p-t-1 p-b-1">
            <button onClick={handleSelectAllClick}>
              {hasSelected ? 'Clear selection' : 'Select all'}
            </button>
          </div>
          <Gallery images={images} onSelect={handleSelect} />
        </div>
      </S.Body>
    </>
  );
}
