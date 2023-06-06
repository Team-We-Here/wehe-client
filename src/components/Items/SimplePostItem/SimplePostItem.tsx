import Tag from '@/components/Tag/Tag';

import * as S from './SimplePostItem-styled';

//임시 items type
interface SimplePostItemProps {
  title: string;
  tag: string[];
}

const SimplePostItem = (props: SimplePostItemProps) => {
  const { title, tag } = props;

  return (
    <S.Container>
      <S.TitleWrapper>{title}</S.TitleWrapper>
      <S.TagWrapper>
        {tag.map((v, i) => {
          return <Tag key={i} text={v} />;
        })}
      </S.TagWrapper>
    </S.Container>
  );
};

export default SimplePostItem;
