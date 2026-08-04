import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: "#050816",
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 90,
          },

          color: {
            value: ["#00E5FF", "#7C3AED", "#FFFFFF"],
          },

          links: {
            enable: true,
            color: "#00E5FF",
            distance: 150,
            opacity: 0.15,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.7,
          },

          size: {
            value: { min: 1, max: 4 },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },

            resize: true,
          },

          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.6,
              },
            },
          },
        },
      }}
    />
  );
}