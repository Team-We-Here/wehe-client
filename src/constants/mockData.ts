//임시 items type
interface SimplePostItem {
  id: number;
  title: string;
  tag: string[];
}

const PopularSimplePost: SimplePostItem[] = [
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

const NewSimplePost: SimplePostItem[] = [
  {
    id: 1,
    title: '신규 게시글글글',
    tag: ['프론트엔드', '디자이너'],
  },
  {
    id: 2,
    title: '제목제목제목제목제목',
    tag: ['프론트엔드', '디자이너', '백엔드', '앱개발', '기획'],
  },
];

export { PopularSimplePost, NewSimplePost };
