import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type RetellSmileLogoProps = {
  className?: string;
  title?: string;
  interactive?: boolean;
};

const RetellSmileLogo = ({
  className,
  title = 'Retell logo',
  interactive = false,
}: RetellSmileLogoProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [faceOffset, setFaceOffset] = useState({ x: 0, y: 0 });
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [blinkAmount, setBlinkAmount] = useState(1);

  useEffect(() => {
    if (!interactive) return;

    let rafId = 0;
    let lastX = 0;
    let lastY = 0;

    const updateEyeOffset = () => {
      rafId = 0;
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = lastX - cx;
      const dy = lastY - cy;
      const distance = Math.hypot(dx, dy);
      const maxOffset = 3.8;
      const maxEyeOffset = 2.4;

      if (distance === 0) {
        setFaceOffset({ x: 0, y: 0 });
        setEyeOffset({ x: 0, y: 0 });
        return;
      }

      const strength = Math.min(1, distance / 260);
      const ux = dx / distance;
      const uy = dy / distance;
      setFaceOffset({
        x: ux * maxOffset * strength,
        y: uy * maxOffset * strength,
      });
      setEyeOffset({
        x: ux * maxEyeOffset * strength,
        y: uy * maxEyeOffset * strength,
      });
    };

    const onMouseMove = (event: MouseEvent) => {
      lastX = event.clientX;
      lastY = event.clientY;
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(updateEyeOffset);
    };

    const resetFace = () => {
      setFaceOffset({ x: 0, y: 0 });
      setEyeOffset({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('blur', resetFace);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('blur', resetFace);
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [interactive]);

  useEffect(() => {
    if (!interactive) return;

    let blinkTimer: ReturnType<typeof setTimeout> | null = null;
    let openTimer: ReturnType<typeof setTimeout> | null = null;

    const scheduleBlink = () => {
      const waitMs = 1800 + Math.random() * 3200;
      blinkTimer = setTimeout(() => {
        setBlinkAmount(0.1);
        openTimer = setTimeout(() => setBlinkAmount(1), 140);
        scheduleBlink();
      }, waitMs);
    };

    scheduleBlink();

    return () => {
      if (blinkTimer) clearTimeout(blinkTimer);
      if (openTimer) clearTimeout(openTimer);
      setBlinkAmount(1);
    };
  }, [interactive]);

  useEffect(() => {
    if (!interactive) {
      setFaceOffset({ x: 0, y: 0 });
      setEyeOffset({ x: 0, y: 0 });
    }
  }, [interactive]);

  const eyeCenterY = 25;
  const eyeHalfHeight = 5 * blinkAmount;
  const eyeTop = eyeCenterY - eyeHalfHeight;
  const eyeBottom = eyeCenterY + eyeHalfHeight;
  const mouthPath = 'M18 41C24 48 40 48 46 41';

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn('h-8 w-8', className)}
    >
      <g transform={`translate(${faceOffset.x} ${faceOffset.y})`}>
        <line
          x1={26 + eyeOffset.x}
          y1={eyeTop + eyeOffset.y}
          x2={26 + eyeOffset.x}
          y2={eyeBottom + eyeOffset.y}
          stroke="#000000"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1={38 + eyeOffset.x}
          y1={eyeTop + eyeOffset.y}
          x2={38 + eyeOffset.x}
          y2={eyeBottom + eyeOffset.y}
          stroke="#000000"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path d={mouthPath} stroke="#000000" strokeWidth="6" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
};

export default RetellSmileLogo;
