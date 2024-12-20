import React from "react";
import styled, { keyframes } from 'styled-components';

// Анимация движения частиц
const moveOut = (angle: number, distance: number) => keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.2) rotate(${angle}deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
    transform: translate(
      calc(-50% + ${Math.cos(angle * Math.PI / 180) * 50}px),
      calc(-50% + ${Math.sin(angle * Math.PI / 180) * 50}px)
    ) scale(1) rotate(${angle}deg);
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate(
      calc(-50% + ${Math.cos(angle * Math.PI / 180) * distance}px),
      calc(-50% + ${Math.sin(angle * Math.PI / 180) * distance}px)
    ) scale(0.2) rotate(${angle + 360}deg);
    opacity: 0;
  }
`;

const AnimationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  background: #1A1A1A;
  overflow: hidden;
`;

const CenterStar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  img {
    width: 100px;
    height: 100px;
    filter: brightness(1.2);
  }
`;

const Star = styled.div<{ 
  $delay: number; 
  $angle: number; 
  $duration: number; 
  $distance: number; 
  $isSimple?: boolean 
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => props.$isSimple ? '4px' : '12px'};
  height: ${props => props.$isSimple ? '4px' : '12px'};
  ${props => !props.$isSimple && `
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  `}
  background: ${props => props.$isSimple ? '#FFD700' : ['#FFD700', '#FFA500', '#FFB347'][Math.floor(Math.random() * 3)]};
  box-shadow: 0 0 ${props => props.$isSimple ? '4px' : '12px'} #FFD700;
  animation: ${props => moveOut(props.$angle, props.$distance)} ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;
  will-change: transform;
`;

const StarAnimation: React.FC = () => {
  // Звезды (60% всех частиц)
  const stars = Array.from({ length: 60 }, (_, i) => ({
    delay: (i * 0.1) % 3, // Равномерная задержка: каждая следующая звезда появляется через 0.1с, цикл каждые 3с
    angle: Math.random() * 360, // Случайный угол разлета
    duration: 5 + Math.random() * 3, // Время анимации 5-8 секунд
    distance: 300 + Math.random() * 200, // Дистанция полета 300-500 пикселей
    isSimple: false
  }));

  // Простые частицы (40% всех частиц)
  const particles = Array.from({ length: 40 }, (_, i) => ({
    delay: (i * 0.1 + 0.05) % 3, // Смещаем на 0.05с относительно звезд для более равномерного потока
    angle: Math.random() * 360,
    duration: 4 + Math.random() * 2, // Немного быстрее звезд (4-6 секунд)
    distance: 250 + Math.random() * 150, // Ближе к центру (250-400 пикселей)
    isSimple: true
  }));

  const allParticles = [...stars, ...particles];

  return (
    <AnimationContainer>
      {allParticles.map((star, index) => (
        <Star 
          key={index} 
          $delay={star.delay}
          $angle={star.angle}
          $duration={star.duration}
          $distance={star.distance}
          $isSimple={star.isSimple}
        />
      ))}
      <CenterStar>
        <img src="/img/star.gif" alt="Central Star" />
      </CenterStar>
    </AnimationContainer>
  );
};

export default StarAnimation;
