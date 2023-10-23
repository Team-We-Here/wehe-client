import { useState } from 'react';

import * as S from './JobList.styled';

const JOB_LIST = [
  {
    id: 1,
    label: 'frontend',
    jobName: '프론트엔드',
  },
  {
    id: 2,
    label: 'backend',
    jobName: '백엔드',
  },
  {
    id: 3,
    label: 'devops',
    jobName: 'DevOps',
  },
  {
    id: 4,
    label: 'pm',
    jobName: 'PM',
  },
  {
    id: 5,
    label: 'mobile',
    jobName: '모바일',
  },
  {
    id: 5,
    label: 'design',
    jobName: '디자이너',
  },
];

const JobList = () => {
  const [jobList, setJobList] = useState<string[]>([]);

  const handleChangeJob = (evt: React.MouseEvent) => {
    const { htmlFor } = evt.target as HTMLLabelElement;

    setJobList(prev => {
      const existPrevValue = prev.filter(item => item === htmlFor);
      const newValue = prev.filter(item => item !== htmlFor);

      return existPrevValue.length ? [...newValue] : [...prev, htmlFor];
    });
  };

  return (
    <S.Container>
      {JOB_LIST.map(job => (
        <S.CheckBoxLabel
          htmlFor={job.label}
          onClick={handleChangeJob}
          $current={jobList.indexOf(job.label) !== -1}>
          <S.CheckBox type='checkbox' id={job.label} />
          {job.jobName}
        </S.CheckBoxLabel>
      ))}
    </S.Container>
  );
};

export default JobList;
