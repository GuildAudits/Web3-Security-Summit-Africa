import React, { useRef, useEffect, useState } from "react";

const ScrollingBanner: React.FC<{ text?: string; speedMs?: number; gapSpaces?: number }> = ({
  text = "Bug hunters welcome.",
  speedMs = 60000,
  gapSpaces = 10,
}) => {
  const [singleRepeatCount, setSingleRepeatCount] = useState(12);
  const textRef = useRef<HTMLSpanElement>(null);
  const instanceRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const calculateRepeats = () => {
      if (textRef.current && instanceRef.current) {
        const instanceWidth = instanceRef.current.offsetWidth;
        const viewportWidth = window.innerWidth;
        const targetWidth = viewportWidth * 2.5;
        const minRepeats = Math.ceil(targetWidth / instanceWidth);
        setSingleRepeatCount(Math.max(minRepeats, 12));
      }
    };

    const timer = setTimeout(calculateRepeats, 50);
    calculateRepeats();
    window.addEventListener('resize', calculateRepeats);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateRepeats);
    };
  }, [text, gapSpaces]);

  const separator = '\u00A0'.repeat(Math.max(gapSpaces, 8));
  const textWithSeparator = text + separator;
  const fullText = textWithSeparator.repeat(singleRepeatCount);

  return (
    <div className="w-full bg-gradient-to-r from-white via-blue-100 to-blue-200 border border-blue-200 py-2 px-3 shadow-sm text-black text-center flex items-center h-14 sm:h-12 xs:h-auto">
      <div className="relative overflow-hidden py-1 font-bold text-xl sm:text-lg xs:text-base w-full max-sm:text-sm text-center" style={{ perspective: '1000px' }}>
        <style>{`
          @keyframes marqueeScroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
          .marquee-container {
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            transform: translateZ(0);
            animation-fill-mode: none;
          }
        `}</style>
        <div
          className="whitespace-nowrap marquee-container pause-on-hover"
          style={{
            animation: `marqueeScroll ${speedMs}ms linear infinite`,
            willChange: 'transform',
            contain: 'layout style paint',
            display: 'inline-block',
            minWidth: '200%',
          }}
        >
          {fullText}{fullText}
        </div>
        <span
          ref={textRef}
          style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap' }}
        >
          {text}
        </span>
        <span
          ref={instanceRef}
          style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap' }}
        >
          {textWithSeparator}
        </span>
      </div>
    </div>
  );
};

export default ScrollingBanner;