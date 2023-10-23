import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  margin: 10px 0;
`;

export const CheckBoxLabel = styled.label<{ $current: boolean }>`
  padding: 10px;
  cursor: pointer;

  border: 2px solid #70a19e;
  border-radius: 20px;

  box-sizing: border-box;

  background-color: ${({ $current }) => ($current ? '#21827c' : 'transparent')};
  color: ${({ $current }) => ($current ? '#ffffff' : '#000000')};
`;

export const CheckBox = styled.input`
  display: none;
`;
