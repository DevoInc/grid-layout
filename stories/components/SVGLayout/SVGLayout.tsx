import * as React from 'react';

import type { TItem } from './declarations';
import { HOR_PROPS, PADDING, POS_PROPS, SCALE, SIZE_PROPS } from './constants';
import {
  getPropValues,
  getSize,
  padEndArray,
  sortByPriority,
  trX,
  trY,
} from './layout';

type Props = {
  layout: TItem[];
  width: number;
  height: number;
};

export const SVGLayout: React.FC<Props> = ({
  layout,
  width = 350,
  height = 350,
}) => {
  const [w, h] = getSize(layout).map((v, idx) => v * SCALE + PADDING[idx] * 2);
  const maxFrames =
    Math.max(...layout.map((item) => (item.f ?? []).length)) + 2;
  return (
    <svg
      height={height}
      width={width}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${w} ${h}`}
    >
      <line x1="0" y1={PADDING[1]} x2={w} y2={PADDING[1]} stroke="black" />
      {layout
        .sort(sortByPriority)
        .reverse()
        .map((item) => {
          const frames = item?.f ?? [];
          return (
            <svg
              key={item.i}
              x={trX(item.x)}
              y={trY(item.y)}
              style={{ overflow: 'visible' }}
            >
              <rect
                width={item.w * SCALE}
                height={item.h * SCALE}
                x={0}
                y={0}
                style={{
                  fill: 'rgba(0,0,0,0)',
                  strokeWidth: 1,
                  stroke: item.p ? 'red' : 'black',
                }}
              >
                {SIZE_PROPS.map(
                  (prop) =>
                    frames.some((frame) => prop in frame) && (
                      <animate
                        key={prop}
                        attributeName={prop}
                        values={padEndArray(
                          getPropValues(item, prop),
                          maxFrames,
                        )
                          .map(HOR_PROPS.includes(prop) ? trX : trY)
                          .join(';')}
                        dur={`${maxFrames}s`}
                        repeatCount="indefinite"
                      />
                    ),
                )}
              </rect>
              <text x={0} y={0} fontSize="8" dy="8" dx="2">
                {item.i}
              </text>
              {POS_PROPS.map(
                (prop) =>
                  frames.some((frame) => prop in frame) && (
                    <animate
                      key={prop}
                      attributeName={prop}
                      values={padEndArray(getPropValues(item, prop), maxFrames)
                        .map(HOR_PROPS.includes(prop) ? trX : trY)
                        .join(';')}
                      dur={`${maxFrames}s`}
                      repeatCount="indefinite"
                    />
                  ),
              )}
            </svg>
          );
        })}
    </svg>
  );
};
