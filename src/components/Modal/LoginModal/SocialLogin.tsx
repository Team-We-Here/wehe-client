import Image from 'next/image';

import GithubLogoIcon from '@public/icons/github.svg';
import GoogleLogoIcon from '@public/icons/google.svg';
import KakaoLogoIcon from '@public/icons/kakao.svg';
import LogingoSrc from '@public/images/login-logo.png';

import axios from 'axios';
import { SetStateAction } from 'react';

import * as S from './LoginModal.styled';

type Props = {
  setUserData: React.Dispatch<SetStateAction<any>>;
};

const SocialLogin = ({ setUserData }: Props) => {
  const handleKakaoLogin = async () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=87641e4f00b954fda9e7ea240bfb3579&redirect_uri=http://localhost:3000/kakao&response_type=code`;
    const kakaoLoginWindow: any = window.open(kakaoAuthUrl, '_blank', 'width=500,height=500');

    window.addEventListener(
      'message',
      async event => {
        if (event.origin !== window.location.origin) return; // 동일 출처 정책 확인
        const authCode = event.data;
        kakaoLoginWindow.close(); // 팝업 창 닫기

        const response = await axios.get(
          `https://port-0-wehe-k19y2kljve3tgo.sel4.cloudtype.app/api/v1/user/kakao/callback?code=${authCode}`,
        );

        if ('message' in response.data) {
          setUserData(response.data);
        }
      },
      false,
    );
  };

  return (
    <S.Container>
      <Image src={LogingoSrc} alt='로고' />
      <S.TextWrapper>
        <span className='description'>모두, 함께 모이는 공간</span>
        <span className='title'>WE-HE</span>
      </S.TextWrapper>
      <S.ButtonWrapper>
        <S.LoginButtonWrapper $bgColor='#FEE500' $borderColor='#FEE500' $color='#240B0B'>
          <span onClick={handleKakaoLogin}>Kakao</span>
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
  );
};

export default SocialLogin;
