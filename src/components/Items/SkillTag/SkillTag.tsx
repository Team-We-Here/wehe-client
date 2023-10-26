import { AutoComplete } from 'antd';
import { useState } from 'react';

import * as S from './SkillTag.styled';

const SkillTag = () => {
  const [value, setValue] = useState('');
  const [selectSkills, setSelectSkills] = useState<string[]>([]);
  const [options, setOptions] = useState([{ value: 'javascript' }]);

  const handleSelectSkills = (selectValue: string) => {
    setSelectSkills(prev => [...prev, selectValue]);
    setValue('');
  };

  const handleDeleteSkills = (evt: any) => {
    setSelectSkills(prev => prev.filter((item: string) => item !== evt.target.id));
  };

  const handleChangeValue = (searchValue: string) => {
    setValue(searchValue);
  };

  return (
    <S.Container>
      <S.TagWrapper>
        {selectSkills.map((skill: string) => (
          <S.Tags key={skill}>
            <S.TagText> {skill} </S.TagText>
            <S.TagIcon id={skill} onClick={handleDeleteSkills}>
              ｘ
            </S.TagIcon>
          </S.Tags>
        ))}
      </S.TagWrapper>
      <AutoComplete
        value={value}
        options={options.filter(option => !selectSkills.includes(option.value))}
        onSelect={handleSelectSkills}
        onChange={handleChangeValue}
      />
    </S.Container>
  );
};

export default SkillTag;
