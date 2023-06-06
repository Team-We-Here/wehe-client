import { MainSliderSettings } from '@/constants/slider';

import Slider from 'react-slick';

import * as S from './MainSlider-styled';

const MainSlider = () => {
  return (
    <S.Container>
      <Slider {...MainSliderSettings}>
        <div>
          <S.SliderItem>
            <p>위어히어 홍보 배너~~~</p>
          </S.SliderItem>
        </div>
        <div>
          <S.SliderItem>
            <p>위어히어 홍보 배너~~~</p>
          </S.SliderItem>
        </div>
        <div>
          <S.SliderItem>
            <p>위어히어 홍보 배너~~~</p>
          </S.SliderItem>
        </div>
        <div>
          <S.SliderItem>
            <p>위어히어 홍보 배너~~~</p>
          </S.SliderItem>
        </div>
        <div>
          <S.SliderItem>
            <p>위어히어 홍보 배너~~~</p>
          </S.SliderItem>
        </div>
      </Slider>
    </S.Container>
  );
};

export default MainSlider;
