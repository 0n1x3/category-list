import React from 'react';
import styled from 'styled-components';
import StarAnimation from './StarAnimation';

const TestContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #1A1A1A;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationWrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #333;
`;

const StarAnimationTest: React.FC = () => {
  return (
    <TestContainer>
      <AnimationWrapper>
        <StarAnimation />
      </AnimationWrapper>
    </TestContainer>
  );
};

export default StarAnimationTest; 