import Tag from '@src/components/Tag/Tag';

import * as S from './SimplePostItem.styled';

//임시 items type
interface SimplePostItemProps {
  title: string;
  tag: string[];
}

const SimplePostItem = (props: SimplePostItemProps) => {
  const { title, tag } = props;

  return (
    <S.Container>
      <div style={{ minHeight: '60px' }}>
        <S.TitleWrapper>{title}</S.TitleWrapper>
      </div>
      <S.TagWrapper>
        {tag.map((v, i) => {
          return <Tag key={i} text={v} />;
        })}
      </S.TagWrapper>
    </S.Container>
  );
};

export default SimplePostItem;
