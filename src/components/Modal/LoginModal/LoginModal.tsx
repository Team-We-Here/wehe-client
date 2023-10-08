import Image from 'next/image';

import GithubLogoIcon from '@public/icons/github.svg';
import GoogleLogoIcon from '@public/icons/google.svg';
import KakaoLogoIcon from '@public/icons/kakao.svg';
import ModalCloseIcon from '@public/icons/modal-close.svg';
import LogingoSrc from '@public/images/login-logo.png';

import { Modal } from 'antd';

import * as S from './LoginModal.styled';
import * as T from './LoginModal.type';

const LoginModal = ({ isOpen, close }: T.LoginModalProps) => {
  return (
    <Modal
      open={isOpen}
      onCancel={close}
      centered={true}
      footer={null}
      closeIcon={<ModalCloseIcon />}
      width={600}>
      <S.Container>
        <Image src={LogingoSrc} alt='로고' />
        <S.TextWrapper>
          <span className='description'>모두, 함께 모이는 공간</span>
          <span className='title'>WE-HE</span>
        </S.TextWrapper>
        <S.ButtonWrapper>
          <S.LoginButtonWrapper $bgColor='#FEE500' $borderColor='#FEE500' $color='#240B0B'>
            <span>Kakao</span>
            <KakaoLogoIcon />
          </S.LoginButtonWrapper>
          <S.LoginButtonWrapper $bgColor='#FFF' $borderColor='#3A3A3A' $color='3A3A3A'>
            <span>Google</span>
            <GoogleLogoIcon />
          </S.LoginButtonWrapper>
          <S.LoginButtonWrapper $bgColor='#363636' $borderColor='#363636' $color='#FFF'>
            <span>Github</span>
            <GithubLogoIcon />
          </S.LoginButtonWrapper>
        </S.ButtonWrapper>
      </S.Container>
    </Modal>
  );
};

export default LoginModal;
