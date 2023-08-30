import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 24px 48px;
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
  gap: 8px;
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

export { Container, TextWrapper, LoginButtonWrapper, ButtonWrapper };
