import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin: 10px 0;
`;

export const TagWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Tags = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 12px 15px;
  box-sizing: border-box;

  border-radius: 30px;
  background-color: #21827c;
`;

export const TagText = styled.span`
  color: #ffffff;
  font-size: 20px;
`;

export const TagIcon = styled.i`
  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  color: black;
  background-color: #ffffff;

  cursor: pointer;
`;
