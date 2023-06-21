import styled from 'styled-components';

const Container = styled.div`
  .slick-dots {
    bottom: 24px;

    li:not(.slick-active) {
      button::before {
        color: white;
        opacity: 1;
      }
    }

    .slick-active {
      button::before {
        color: #21827c;
        opacity: 1;
      }
    }
  }
`;

const SliderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 336px;
  background-color: #585a59;

  p {
    color: white;
    font-size: 40px;
    font-weight: 400;
  }
`;

export { Container, SliderItem };
