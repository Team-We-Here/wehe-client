import Image from 'next/image';

import FirstStepForm from '@src/components/StepForm/FirstStepForm';
import SecondStepForm from '@src/components/StepForm/SecondStepForm';

import ModalCloseIcon from '@public/icons/modal-close.svg';
import LogingoSrc from '@public/images/login-logo.png';

import { Modal } from 'antd';
import { useState } from 'react';

import * as T from './LoginModal.type';
import SocialLogin from './SocialLogin';

const LoginModal = ({ isOpen, close }: T.LoginModalProps) => {
  const [userData, setUserData] = useState(null);
  const [firstData, setFirstData] = useState(null);
  const [formStep, setFormStep] = useState(0);

  return (
    <Modal
      open={isOpen}
      onCancel={close}
      centered={true}
      footer={null}
      closeIcon={<ModalCloseIcon />}
      title={userData && <Image src={LogingoSrc} width='159' alt='로고' />}
      width={600}>
      {!userData && <SocialLogin setUserData={setUserData} />}
      {userData && formStep === 0 && (
        <FirstStepForm setFormStep={setFormStep} setFirstData={setFirstData} />
      )}
      {firstData && formStep === 1 && <SecondStepForm />}
    </Modal>
  );
};

export default LoginModal;
