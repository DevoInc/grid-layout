export const getContainerScroll = (mouseEvent: MouseEvent) => {
  const $header = mouseEvent.target as HTMLElement;
  const $item = $header.parentNode.parentNode as HTMLElement;
  const $container = $item.parentNode.parentNode as HTMLElement;
  return $container.scrollTop;
};
