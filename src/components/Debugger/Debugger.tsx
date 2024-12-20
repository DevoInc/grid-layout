import * as React from 'react';

import { GridLayoutContext } from '../../context';

export const Debugger = () => {
  const { width, cols, rowHeight } = React.useContext(GridLayoutContext);
  const ref = React.useRef<HTMLCanvasElement>(null);
  React.useEffect(() => {
    if (ref.current && width > 0) {
      const colWidth = width / cols;
      const height = 900;

      const canvas = ref.current;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, width, 150);
      ctx.beginPath();

      for (let x = 0; x <= width; x += colWidth) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }

      for (let y = 0; y <= height; y += rowHeight) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }

      ctx.strokeStyle = 'rgba(255,0,0,0.5)';
      ctx.stroke();
    }
  }, [width]);
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 100,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <canvas ref={ref} />
    </div>
  );
};
