export function noop() {}

export function isDef(value: any): boolean {
  return typeof value !== 'undefined' && value !== null;
}

export function isUndef(value: any): boolean {
  return typeof value === 'undefined' || value === null;
}

export function get(target: any, path: string): any {
  const keys = path.split('.');
  let result = target;

  keys.forEach((key) => {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}

export function isPrimitive(value: any): boolean {
  const t = typeof value;
  return (
    t === 'string' ||
    t === 'number' ||
    t === 'symbol' ||
    t === 'boolean'
  );
}

export function isObject(obj: any): boolean {
  return obj !== null && typeof obj === 'object';
}

export function once(fn: Function): Function {
  let called = false;
  return function () {
    if (called) return
    called = true;
    fn.apply(null, arguments);
  };
}