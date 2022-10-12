import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Git from '../../assets/Img/git.png';
import Link from '../../assets/Img/linked.png';
import Inst from '../../assets/Img/instag.png';
import Twit from '../../assets/Img/twitter.png';
import * as S from './styles';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_srzglad',
        'template_uixhasg',
        form.current,
        'V3EStw1uDhEpAPNEV',
      )
      .then(
        (result) => {
          alert(
            'Message Sent, We will get back to you shortly',
            result.menssage,
          );
        },
        (error) => {
          alert('An error occurred, Please try again', error.menssage);
        },
      );
    e.target.reset();
  };

  return (
    <S.SectionContact>
      <S.TextTitle>Disponivel para Projetos</S.TextTitle>
      <S.TextContact>Entre em Contato</S.TextContact>
      <S.ContainerSend>
        <S.ContainerContact ref={form} onSubmit={sendEmail}>
          <S.Input
            required
            type="text"
            name="clientName"
            id=""
            placeholder="Nome"
          />
          <S.Input required type="email" name="" id="" placeholder="Email" />

          <S.Mnessage required name="message" placeholder="Sua Mensagem" />
          <S.BtnContact>Submit</S.BtnContact>
        </S.ContainerContact>
        <S.ContainerSocialMidia>
          <S.SocialMidia src={Git} alt="" srcset="" />
          <S.SocialMidia src={Inst} alt="" srcset="" />
          <S.SocialMidia src={Twit} alt="" srcset="" />
          <S.SocialMidia src={Link} alt="" srcset="" />
        </S.ContainerSocialMidia>
      </S.ContainerSend>
    </S.SectionContact>
  );
}
