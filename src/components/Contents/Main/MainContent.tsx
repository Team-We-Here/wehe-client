import { NewSimplePost, PopularSimplePost } from '@/constants/mockData';

import SimplePostItem from '@/components/Items/SimplePostItem/SimplePostItem';
import MainSlider from '@/components/MainSlider/MainSlider';

import NewIcon from '@/public/icons/main-new.svg';
import PopularIcon from '@/public/icons/main-popular.svg';

import * as S from './MainContent-styed';

const MainContent = () => {
  return (
    <S.ContentWrapper>
      <MainSlider />
      <S.TopContentWrapper>
        <S.SimplePostItemWrapper>
          <div className='title'>
            <PopularIcon />
            인기 프로젝트
          </div>
          <S.ItemsWrapper>
            {PopularSimplePost.map(v => {
              return <SimplePostItem key={v.id} title={v.title} tag={v.tag} />;
            })}
          </S.ItemsWrapper>
        </S.SimplePostItemWrapper>
        <S.SimplePostItemWrapper>
          <div className='title'>
            <NewIcon />
            신규 프로젝트
          </div>
          <S.ItemsWrapper>
            {NewSimplePost.map(v => {
              return <SimplePostItem key={v.id} title={v.title} tag={v.tag} />;
            })}
          </S.ItemsWrapper>
        </S.SimplePostItemWrapper>
      </S.TopContentWrapper>
    </S.ContentWrapper>
  );
};

export default MainContent;
