import styled from 'styled-components';

import { Button } from 'antd';

const Container = styled.div`
  display: flex;
  padding: 32px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 24px;
  }

  .description {
    margin-top: 40px;
    font-weight: 400;
  }

  .title {
    font-weight: 700;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 40px;
`;

const LoginButtonWrapper = styled.button<{
  $bgColor: string;
  $borderColor: string;
  $color: string;
}>`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background-color: ${({ $bgColor }) => $bgColor};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  color: ${({ $color }) => $color};
  border-radius: 33px;
  font-size: 24px;
  cursor: pointer;

  span {
    margin-right: 14px;
  }
`;

const SignupButton = styled(Button)`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export { Container, TextWrapper, LoginButtonWrapper, ButtonWrapper, SignupButton };
