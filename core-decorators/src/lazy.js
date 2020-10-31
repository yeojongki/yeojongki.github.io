export default function lazy(target, key, descriptor) {
  const { value, configurable, enumerable } = descriptor

  return {
    configurable,
    enumerable,

    get() {
      const ret = descriptor.initializer ? descriptor.initializer.call(this) : value

      Object.defineProperty(target, key, {
        configurable,
        enumerable,
        writable: true,
        value: ret
      })

      return ret
    }
  }
}
