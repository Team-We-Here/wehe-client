import JobList from '../Items/JobList';
import SkillTag from '../Items/SkillTag';
import * as S from './StepForm.styled';

const SecondStepForm = () => {
  return (
    <S.Layout>
      <S.Container>
        <S.TitleWrapper>
          <S.Title> 직무 </S.Title>
          <S.RequiredDescription> *: 필수 입력 사항</S.RequiredDescription>
        </S.TitleWrapper>
        <JobList />
        <S.TitleWrapper>
          <S.Title> 기술태그 </S.Title>
          <S.RequiredDescription> *: 필수 입력 사항 </S.RequiredDescription>
          <SkillTag />
        </S.TitleWrapper>
      </S.Container>
    </S.Layout>
  );
};

export default SecondStepForm;
