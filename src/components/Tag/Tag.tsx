import * as S from './Tag.styled';
import type * as T from './Tag.type';

const Tag = ({ backgroundColor = '#D7F8C2', color = '#0F4D49', text }: T.TagProps) => {
  return (
    <S.TagWrapper backgroundColor={backgroundColor} color={color}>
      {text}
    </S.TagWrapper>
  );
};

export default Tag;
