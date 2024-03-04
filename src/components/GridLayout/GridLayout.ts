import { Container } from '../Container';
import { Placeholder } from '../Placeholder';
import { Wrapper } from '../Wrapper';

type Props = {
  Container: typeof Container;
  Placeholder: typeof Placeholder;
  Wrapper: typeof Wrapper;
};

export const GridLayout: Props = {
  Container,
  Placeholder,
  Wrapper,
};
