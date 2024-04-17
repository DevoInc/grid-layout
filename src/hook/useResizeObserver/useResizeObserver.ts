import * as React from 'react';

import { GridLayoutContext } from '../../context';
import { debounce } from '../../effects';

export const useResizeOberver = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { setColWidth, cols } = React.useContext(GridLayoutContext);

  React.useEffect(() => {
    const ro = new ResizeObserver(
      debounce((entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
          const rect = (entry.target as HTMLDivElement).getBoundingClientRect();
          setColWidth(rect.width / cols);
        }
      }, 50),
    );

    if (ref.current) {
      ro.observe(ref.current);
    }

    return () => {
      if (ro) {
        ro.disconnect();
      }
    };
  }, []);

  return {
    ref,
  };
};
