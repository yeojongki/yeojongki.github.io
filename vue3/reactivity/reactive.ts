import { isObject } from "../shared"
import {mutableHandlers} from './baseHandlers'

const readonlyToRaw = new WeakMap<any, any>()
const rawToReactive = new WeakMap<any, any>()
const reactiveToRaw = new WeakMap<any, any>()

export function reactive(target: object) {
  if(readonlyToRaw.has(target)) {
    return target
  }
  return createReactiveObject(target, rawToReactive, reactiveToRaw, mutableHandlers)
}

function createReactiveObject(target: unknown, toProxy: WeakMap<any, any>,toRaw: WeakMap<any, any>, handler:ProxyHandler<any>) {
  if(!isObject(target)) {
    console.warn(`value cannot be made reactive: ${String(target)}`)
    return target
  }
  let observed  = toProxy.get(target)
  if(observed!==void 0) {
    return observed
  }
  if(toRaw.has(target)) {
    return target
  }

  observed = new Proxy(target, handler)
  toProxy.set(target, observed)
  toRaw.set(observed, target)
  return observed
}