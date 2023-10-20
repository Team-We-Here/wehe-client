import Image from 'next/image';

import { LoginModal } from '@src/components/Modal';

import BellIcon from '@public/icons/header-bell.svg';
import PenIcon from '@public/icons/header-pen.svg';
import LogoSrc from '@public/images/wehe-logo.png';

import { useState } from 'react';

import * as S from './Header.styled';

const Header = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState<boolean>(false);

  const isLogin = false;

  return (
    <S.Container>
      <S.MainWrapper>
        <Image src={LogoSrc} alt='로고' />
        {isLogin ? (
          <S.SettingWrapper>
            <S.WritingWrapper>
              <span>글쓰기</span>
              <div className='penWrapper'>
                <PenIcon />
              </div>
            </S.WritingWrapper>
            <BellIcon className='bell_icon' />
            <div
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#3A3A3A',
                borderRadius: '18px',
                cursor: 'pointer',
              }}
            />
          </S.SettingWrapper>
        ) : (
          <S.LoginButton
            onClick={() => {
              setIsLoginModalVisible(true);
            }}>
            로그인
          </S.LoginButton>
        )}
      </S.MainWrapper>

      <LoginModal
        isOpen={isLoginModalVisible}
        close={() => {
          setIsLoginModalVisible(false);
        }}
      />
    </S.Container>
  );
};

export default Header;
