import { isObject, hasOwn } from '../shared'
import { reactive } from './reactive'
import { track, trigger } from './effect'
import { TrackOpTypes, TriggerOpTypes } from './operations'

function createGetter() {
  return function get(target: object, key: string | symbol, receiver: object) {
    const res = Reflect.get(target, key, receiver)
    // 依赖收集
    track(target, TrackOpTypes.GET, key)
    // 递归
    return isObject(res) ? reactive(res) : res
  }
}

function createSetter() {
  return function set(
    target: object,
    key: string | symbol,
    value: unknown,
    receiver: object
  ) {
    const oldValue = (target as any)[key]

    const hadKey = hasOwn(target, key)
    const result = Reflect.set(target, key, value, receiver)
    if (hadKey) {
      trigger(target, TriggerOpTypes.ADD, key)
    } else if (value !== oldValue) {
      trigger(target, TriggerOpTypes.SET, key)
    }
    return result
  }
}

const get = createGetter()
const set = createSetter()

export const mutableHandlers: ProxyHandler<object> = {
  get,
  set
}
