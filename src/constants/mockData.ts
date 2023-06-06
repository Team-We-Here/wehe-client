//임시 items type
interface SimplePostItem {
  id: number;
  title: string;
  tag: string[];
}

const SimplePost: SimplePostItem[] = [
  {
    id: 1,
    title: '사이드프로젝트 같이 할 팀원을 찾고있다만,,,,,,,',
    tag: ['프론트엔드', '디자이너'],
  },
  {
    id: 2,
    title: '제목제목제목제목제목',
    tag: ['프론트엔드', '디자이너', '백엔드', '앱개발', '기획'],
  },
];

export { SimplePost };
