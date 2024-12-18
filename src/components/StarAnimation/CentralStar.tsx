import styled from 'styled-components';

const StarImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const CentralStar = () => {
  return <StarImage src="/star.gif" alt="Star" />;
}; 