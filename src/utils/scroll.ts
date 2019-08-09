export function scrollToPosition(el: HTMLElement, origin: number, target: number, rate: number = 0.1) {
  function updateScroll() {
    origin += (target - origin) * rate;
    el.scrollTop = origin;
    if (Math.abs(origin - target) > 1) {
      requestAnimationFrame(updateScroll);
    }
  }
  updateScroll();
}

type ScrollElement = HTMLElement | Window;

export function getScrollEventTarget(el: HTMLElement, rootParent: ScrollElement = window): ScrollElement {
  const node = el;
  while (
    el &&
    el.tagName !== 'HTML' &&
    el.nodeType === 1 &&
    node !== rootParent
  ) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowY && (/scroll|auto/i).test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      }
    }
  }
  return rootParent;
}
