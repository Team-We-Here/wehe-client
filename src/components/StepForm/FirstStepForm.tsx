import Image from 'next/image';

import UploadIcon from '@public/icons/upload.svg';

import { useRef, useState } from 'react';

import * as S from './StepForm.styled';

const FirstStepForm = () => {
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

  return (
    <S.Layout>
      <S.Container>
        <S.TitleWrapper>
          <S.Title> 프로필 </S.Title>
          <S.RequiredDescription> *: 필수 입력 사항</S.RequiredDescription>
          <S.UploadForm onChange={handleSaveImageFile}>
            <S.UploadLabel htmlFor='profileImg'>
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
            </S.UploadLabel>
            <S.UploadInput type='file' accept='image/*' id='profileImg' ref={imgRef} />
            <S.UploadText> 사진 업로드 </S.UploadText>
          </S.UploadForm>
        </S.TitleWrapper>
      </S.Container>
    </S.Layout>
  );
};

export default FirstStepForm;
