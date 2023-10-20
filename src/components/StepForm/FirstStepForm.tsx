import Image from 'next/image';

import UploadIcon from '@public/icons/upload.svg';

import { Button, Input } from 'antd';
import { SetStateAction, useRef, useState } from 'react';

import * as S from './StepForm.styled';

type Props = {
  setFormStep: React.Dispatch<SetStateAction<number>>;
  setFirstData: React.Dispatch<SetStateAction<any>>;
};

const FirstStepForm = ({ setFirstData, setFormStep }: Props) => {
  const [preview, setPreview] = useState<any>(null);
  const imgRef = useRef<any>();

  const handleSaveImageFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const handleNextStep = (evt: any) => {
    evt.preventDefault();
    setFormStep(1);
  };

  return (
    <S.Layout>
      <S.Container>
        <S.TitleWrapper>
          <S.Title> 프로필 </S.Title>
          <S.RequiredDescription> *: 필수 입력 사항</S.RequiredDescription>
        </S.TitleWrapper>
        <S.ProfileUploadForm onChange={handleSaveImageFile}>
          <S.ProfileUploadLabel htmlFor='profileImg'>
            {!preview ? (
              <Image
                src={!preview ? '/icons/upload.svg' : ''}
                width='56'
                height='56'
                alt='Upload_Image'
              />
            ) : (
              <Image src={preview} alt='preview_profile' width='115' height='115' />
            )}
          </S.ProfileUploadLabel>
          <S.ProfileUploadInput type='file' accept='image/*' id='profileImg' ref={imgRef} />
          <S.ProfileUploadText> 사진 업로드 </S.ProfileUploadText>
        </S.ProfileUploadForm>
        <S.UploadForm layout='vertical'>
          <S.UploadWrapper label='이름'>
            <Input />
          </S.UploadWrapper>
          <S.UploadWrapper label='생년월일'>
            <Input />
          </S.UploadWrapper>
          <S.UploadWrapper label='닉네임' required>
            <Input />
          </S.UploadWrapper>
          <Button type='primary' htmlType='button' onClick={handleNextStep}>
            다음
          </Button>
        </S.UploadForm>
      </S.Container>
    </S.Layout>
  );
};

export default FirstStepForm;
