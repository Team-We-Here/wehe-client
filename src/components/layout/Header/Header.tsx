import Image from 'next/image';

import BellIcon from '@public/icons/header-bell.svg';
import PenIcon from '@public/icons/header-pen.svg';
import LogoSrc from '@public/images/wehe-logo.png';

import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Container>
      <S.MainWrapper>
        <Image src={LogoSrc} alt='로고' />

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
      </S.MainWrapper>
    </S.Container>
  );
};

export default Header;
