// https://www.typescriptlang.org/docs/handbook/mixins.html
// class Disposable {}
// class Activatable {}
// class SmartObject implements Disposable, Activatable {}
// applyMixins(SmartObject, [Disposable, Activatable])

export default function applyMixins(deriveCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
      if (descriptor) {
        Object.defineProperty(
          deriveCtor.prototype,
          name,
          descriptor,
        );
      }
    });
  });
}
