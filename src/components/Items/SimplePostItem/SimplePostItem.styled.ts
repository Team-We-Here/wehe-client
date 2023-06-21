import styled from 'styled-components';

const Container = styled.div`
  width: 267px;
  height: 150px;
  padding: 24px;
  border: 1px solid #849291;
  border-radius: 18px;
`;

const TitleWrapper = styled.div`
  font-size: 22px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export { Container, TitleWrapper, TagWrapper };
