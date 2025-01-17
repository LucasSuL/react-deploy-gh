import { useState, useEffect } from "react";

const useScrollAppearEffect = ({ id, name }) => {
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(60);
  const [hasAppeared, setHasAppeared] = useState(false);

  const handleScroll = () => {
    const goal = document.querySelector(`#${id} .${name}`);
    const pos = goal.getBoundingClientRect().y;
    const screenHeight = window.innerHeight;

    const maxOffset = 150;
    const offset = Math.min(
      goal.getBoundingClientRect().height * 0.8,
      maxOffset
    );

    if (!hasAppeared && pos < screenHeight - offset) {
      // Only perform the effect once when scroll position exceeds a certain value (e.g., 400)
      setHasAppeared(true);

      // Update opacity and translateY
      setOpacity(1);
      setTranslateY(0);
    }
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAppeared]); // Re-run the effect when hasAppeared changes

  const appearStyle = {
    opacity,
    transform: `translateY(${translateY}px)`,
    transition: "opacity 0.8s, transform 0.8s",
  };

  return appearStyle;
};

export default useScrollAppearEffect;
