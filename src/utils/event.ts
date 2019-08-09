export let supportsPassive = false;

try {
  const opts = {};
  Object.defineProperty(opts, 'passive', {
    get() {
      supportsPassive = true;
    },
  });
  window.addEventListener('test-passive', null as any, opts);
} catch (e) {
  supportsPassive = false;
}

export function on(
  target: HTMLElement | Document | Window,
  event: string,
  handler: EventListener,
  passive = false,
) {
  target.addEventListener(
    event,
    handler,
    supportsPassive ? { capture: false, passive } : false,
  );
}

export function off(
  target: HTMLElement | Document | Window,
  event: string,
  handler: EventListener,
) {
  target.removeEventListener(event, handler);
}

export function stopPropagation(event: Event) {
  event.stopPropagation();
}

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event);
  }
}
