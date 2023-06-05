import styled from 'styled-components';

const Container = styled.div`
  height: 70px;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  max-width: 593px;
  width: 100%;

  .ant-input-affix-wrapper {
    height: 36px;
    border: 1px solid #21827c;
    border-radius: 18px;

    .ant-input {
      margin-left: 8px;
    }
  }

  svg {
    cursor: pointer;
    * {
      pointer-events: none;
    }
  }
`;

const SettingWrapper = styled.div`
  display: flex;

  .bell_icon {
    margin: 0 16px;
  }
`;

const WritingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  height: 36px;
  background-color: #21827c;
  border-radius: 18px;

  span {
    color: white;
    margin-left: 16px;
  }

  .penWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 29px;
    height: 29px;
    border-radius: 14px;
    margin-right: 5px;
  }
`;
export { Container, MainWrapper, InputWrapper, SettingWrapper, WritingWrapper };
