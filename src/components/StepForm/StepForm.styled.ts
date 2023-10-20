import styled from 'styled-components';

export const Layout = styled.section`
  display: flex;
  flex-direction: column;

  padding: 50px 98px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 20px;
`;

export const RequiredDescription = styled.span`
  font-size: 12px;
  color: #c14e4e;
`;

export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  align-self: center;
`;

export const UploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 115px;
  height: 115px;

  background-color: #21827c;
  border-radius: 50%;

  cursor: pointer;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadText = styled.span`
  font-size: 14px;
`;
