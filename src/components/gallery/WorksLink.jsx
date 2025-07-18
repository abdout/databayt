import { useContext, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { DataContext } from "@/helpers/dataHelpers/dataProvider";
import "./WorksLink.scss";
import { useNavigate } from "react-router-dom";
import AnchorLink from "@/components/AnchorLink/AnchorLink";

export default function WorksLink({ setNavigating }) {
  const { data } = useContext(DataContext);
  const { next: nextData } = data;

  const container = useRef();
  const navigate = useNavigate();
  const [progressValue, setProgressValue] = useState(0);
  const [hasNavigated, setHasNavigated] = useState(false); // State to track if navigation has occurred

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0% 0%", "100% 100%"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 30%)", "inset(0% 0%)"]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 3000,
    damping: 50,
  });

  const handleNavigate = () => {
    setHasNavigated(true); // Set the navigation flag
    setNavigating(true); // Set navigating state to true
    navigate(`/works/${nextData.slug}`, { replace: true });
  };

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const roundedProgress = Math.round(latest * 100);
    setProgressValue(roundedProgress);

    if (roundedProgress >= 100 && !hasNavigated) {
      // Check if not already navigated
      handleNavigate();
    }
  });

  useEffect(() => {
    if (hasNavigated) {
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
        setNavigating(false); // Reset navigating state
        setHasNavigated(false); // Reset navigation flag for next navigation
      }, 100);

      return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
    }
  }, [hasNavigated, setNavigating]);

  return (
    <section className="link" ref={container}>
      <div className="link--sticky">
        <motion.img
          src={nextData.image}
          style={{ clipPath, scale }}
          alt="next-proj"
          className="link__image"
        />
        <div className="link__title">
          <AnchorLink toSection={document.body.scrollHeight} className="progress">
            <h1>{nextData.title}</h1>
            <span className="progress__num small-text">{progressValue}</span>
          </AnchorLink>
          <h2>Next Project</h2>
        </div>
      </div>
    </section>
  );
}
