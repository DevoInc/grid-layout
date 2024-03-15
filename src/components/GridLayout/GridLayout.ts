import { Container } from '../Container';
import { Placeholder } from '../Placeholder';
import { Wrapper } from '../Wrapper';
import { ResizeHelper } from '../ResizeHelper';
import { ItemWrapper } from '../ItemWrapper';
import { GridLayoutProvider } from '../../context/GridLayoutProvider';

type Props = {
  Container: typeof Container;
  Placeholder: typeof Placeholder;
  Wrapper: typeof Wrapper;
  ResizeHelper: typeof ResizeHelper;
  ItemWrapper: typeof ItemWrapper;
  Provider: typeof GridLayoutProvider;
};

export const GridLayout: Props = {
  Container,
  Placeholder,
  Wrapper,
  ResizeHelper,
  ItemWrapper,
  Provider: GridLayoutProvider,
};
