import React, { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import styled from 'styled-components';
import { CentralStar } from './CentralStar';

const AnimationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterStar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const StarAnimation: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  const options: ISourceOptions = {
    fullScreen: {
      enable: false
    },
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: {
        value: 0,
      },
      color: {
        value: "#FFD700",
        animation: {
          enable: true,
          speed: 20,
          sync: true,
          offset: {
            min: 0,
            max: 25
          }
        }
      },
      shape: {
        type: ["star", "char"],
        options: {
          star: {
            sides: 5,
            inset: 2
          },
          char: {
            value: ["✦", "✧", "⋆"],
            font: "20px arial",
            style: "",
            weight: ""
          }
        }
      },
      opacity: {
        value: { min: 0.4, max: 0.8 },
        animation: {
          enable: true,
          speed: 0.3,
          startValue: "max",
          sync: false
        }
      },
      size: {
        value: { min: 2, max: 5 },
        animation: {
          enable: true,
          speed: 0.5,
          startValue: "max",
          sync: false
        }
      },
      move: {
        enable: true,
        speed: { min: 0.5, max: 1.5 },
        direction: "outside",
        random: false,
        straight: false,
        outModes: {
          default: "destroy"
        },
        attract: {
          enable: false
        }
      },
      life: {
        duration: {
          value: 4,
          sync: false
        },
        count: 1
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: {
          enable: true
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    detectRetina: true,
    emitters: [{
      direction: "none",
      position: {
        x: 50,
        y: 50
      },
      rate: {
        delay: 0.2,
        quantity: 2
      },
      size: {
        width: 0,
        height: 0
      },
      spawnColor: {
        value: "#FFD700",
        animation: {
          enable: true,
          speed: 5,
          minimumValue: "#FFA500"
        }
      }
    }]
  };

  return (
    <AnimationContainer>
      <CenterStar>
        <CentralStar />
      </CenterStar>
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          particlesLoaded={particlesLoaded}
        />
      )}
    </AnimationContainer>
  );
};

export default StarAnimation;
