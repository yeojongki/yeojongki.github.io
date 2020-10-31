export default function memoize(config) {
  const cacheMap = new WeakMap()
  const arg0 = arguments[0]

  const _descriptor = (target, descriptor) => {
    const { value: fn } = descriptor

    descriptor.value = () => {
      const cached = cacheMap.get(fn)
      if (cached) {
        return cached
      } else {
        let ret
        if (typeof config === 'string') {
          if (target.hasOwnProperty(config)) {
            ret = target[config]()
          }
        } else {
          ret = fn()
        }
        cacheMap.set(fn, ret)
        return ret
      }
    }

    return descriptor
  }

  if (typeof arg0 === 'object' && typeof arg0.constructor === 'function') {
    const [target, __, descriptor] = arguments
    return _descriptor(target, descriptor)
  }

  return (target, _, descriptor) => _descriptor(target, descriptor)
}
