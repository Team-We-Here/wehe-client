import styled from 'styled-components';

const ContentWrapper = styled.div``;

const TopContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
`;

const SimplePostItemWrapper = styled.div`
  .title {
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 24px;

    svg {
      margin-right: 10px;
    }
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export { ContentWrapper, TopContentWrapper, SimplePostItemWrapper, ItemsWrapper };
