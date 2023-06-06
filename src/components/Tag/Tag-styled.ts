import styled from 'styled-components';

const TagWrapper = styled.div<{ backgroundColor: string; color: string }>`
  display: flex;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 10px;
  margin: 0 4px 2px 0;

  ${({ backgroundColor, color }) => `
    background-color: ${backgroundColor};
    color: ${color};
  `}
`;

export { TagWrapper };
