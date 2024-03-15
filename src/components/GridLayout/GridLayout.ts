import { Container } from '../Container';
import { Placeholder } from '../Placeholder';
import { Wrapper } from '../Wrapper';
import { ResizeHelper } from '../ResizeHelper';

type Props = {
  Container: typeof Container;
  Placeholder: typeof Placeholder;
  Wrapper: typeof Wrapper;
  ResizeHelper: typeof ResizeHelper;
};

export const GridLayout: Props = {
  Container,
  Placeholder,
  Wrapper,
  ResizeHelper,
};
