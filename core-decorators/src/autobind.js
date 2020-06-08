export function autobindClsx(clsx) {
  const descriptors = Object.getOwnPropertyDescriptors(clsx.prototype)
  const names = Object.getOwnPropertyNames(clsx.prototype)

  names.forEach(method => {
    const desc = descriptors[method]
    if (method !== 'constructor') {
      Object.defineProperty(clsx.prototype, method, autobindMethod(clsx.prototype, method, desc))
    }
  })
}

export function autobindMethod(target, method, discriptor) {
  const { value: fn } = discriptor
  return {
    get() {
      const boundFn = fn.bind(this)
      Object.defineProperty(this, method, {
        value: boundFn,
      })
      return boundFn
    }
  }
}

export default function autobind(...args) {
  if (args.length === 1) {
    return autobindClsx(args[0])
  } else {
    return autobindMethod(...args)
  }
}
