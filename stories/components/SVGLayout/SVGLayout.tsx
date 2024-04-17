import * as React from 'react';

import type { TLayout } from '../../../src';
import {
  getHigherPoint,
  getRighterPoint,
  sortLayout,
} from '../../../src/layout';

type Props = {
  layout: TLayout;
  width: number;
  height: number;
};

const padding = [5, 1];
const scale = 10;

export const SVGLayout: React.FC<Props> = ({
  layout,
  width = 350,
  height = 350,
}) => {
  const w = getRighterPoint(layout) * scale + padding[0] * 2;
  const h = getHigherPoint(layout) * scale + padding[1] * 2;
  return (
    <svg
      height={height}
      width={width}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${w} ${h}`}
    >
      <line x1="0" y1={padding[1]} x2={w} y2={padding[1]} stroke="black" />
      {sortLayout(layout)
        .reverse()
        .map((layoutItem) => (
          <rect
            key={layoutItem.i}
            width={layoutItem.w * scale}
            height={layoutItem.h * scale}
            x={layoutItem.x * scale + padding[0]}
            y={layoutItem.y * scale + padding[1]}
            style={{
              fill: 'rgba(0,0,0,0)',
              strokeWidth: 1,
              stroke: layoutItem.priority ? 'red' : 'black',
            }}
          />
        ))}
    </svg>
  );
};
