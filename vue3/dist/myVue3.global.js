var myVue3 = (function (exports) {
  'use strict';

  const EMPTY_OBJ = {};
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const isArray = Array.isArray;
  const isObject = (val) => val !== null && typeof val === 'object';

  const targetMap = new WeakMap();
  const effectStack = [];
  let activeEffect;
  const ITERATE_KEY = Symbol('iterate');
  function isEffect(fn) {
      return fn != null && fn._isEffect === true;
  }
  function track(target, type, key) {
      if (activeEffect === undefined) {
          return;
      }
      let depsMap = targetMap.get(target);
      if (depsMap === void 0) {
          targetMap.set(target, (depsMap = new Map()));
      }
      let dep = depsMap.get(key);
      if (dep === void 0) {
          depsMap.set(key, (dep = new Set()));
      }
      if (!dep.has(activeEffect)) {
          dep.add(activeEffect);
          activeEffect.deps.push(dep);
      }
  }
  function trigger(target, type, key) {
      const depsMap = targetMap.get(target);
      if (depsMap === void 0) {
          // never been tracked
          return;
      }
      const effects = new Set();
      const computedRunners = new Set();
      if (type === "clear" /* CLEAR */) {
          // collection being cleared, trigger all effects for target
          depsMap.forEach(dep => {
              addRunners(effects, computedRunners, dep);
          });
      }
      else {
          // schedule runs for SET | ADD | DELETE
          if (key !== void 0) {
              addRunners(effects, computedRunners, depsMap.get(key));
          }
          // also run for iteration key on ADD | DELETE
          if (type === "add" /* ADD */ || type === "delete" /* DELETE */) {
              const iterationKey = isArray(target) ? 'length' : ITERATE_KEY;
              addRunners(effects, computedRunners, depsMap.get(iterationKey));
          }
      }
      const run = (effect) => effect();
      computedRunners.forEach(run);
      effects.forEach(run);
  }
  function addRunners(effects, computedRunners, effectsToAdd) {
      if (effectsToAdd !== void 0) {
          effectsToAdd.forEach(effect => {
              if (effect.options.computed) {
                  computedRunners.add(effect);
              }
              else {
                  effects.add(effect);
              }
          });
      }
  }
  function createReactiveEffect(fn, options) {
      const effect = function reactiveEffect(...args) {
          return run(effect, fn, args);
      };
      effect._isEffect = true;
      effect.active = true;
      effect.raw = fn;
      effect.deps = [];
      effect.options = options;
      return effect;
  }
  function run(effect, fn, args) {
      if (!effect.active) {
          return fn(...args);
      }
      if (!effectStack.includes(effect)) {
          cleanup(effect);
          try {
              effectStack.push(effect);
              activeEffect = effect;
              return fn(...args);
          }
          finally {
              effectStack.pop();
              activeEffect = effectStack[effectStack.length - 1];
          }
      }
  }
  function cleanup(effect) {
      const { deps } = effect;
      if (deps.length) {
          for (let i = 0; i < deps.length; i++) {
              deps[i].delete(effect);
          }
          deps.length = 0;
      }
  }
  function effect(fn, options = EMPTY_OBJ) {
      if (isEffect(fn)) {
          fn = fn.raw;
      }
      const effect = createReactiveEffect(fn, options);
      if (!options.lazy) {
          effect();
      }
      return effect;
  }

  function createGetter() {
      return function get(target, key, receiver) {
          const res = Reflect.get(target, key, receiver);
          // 依赖收集
          track(target, "get" /* GET */, key);
          // 递归
          return isObject(res) ? reactive(res) : res;
      };
  }
  function createSetter() {
      return function set(target, key, value, receiver) {
          const oldValue = target[key];
          const hadKey = hasOwn(target, key);
          const result = Reflect.set(target, key, value, receiver);
          if (hadKey) {
              trigger(target, "add" /* ADD */, key);
          }
          else if (value !== oldValue) {
              trigger(target, "set" /* SET */, key);
          }
          return result;
      };
  }
  const get = createGetter();
  const set = createSetter();
  const mutableHandlers = {
      get,
      set
  };

  const readonlyToRaw = new WeakMap();
  const rawToReactive = new WeakMap();
  const reactiveToRaw = new WeakMap();
  function reactive(target) {
      if (readonlyToRaw.has(target)) {
          return target;
      }
      return createReactiveObject(target, rawToReactive, reactiveToRaw, mutableHandlers);
  }
  function createReactiveObject(target, toProxy, toRaw, handler) {
      if (!isObject(target)) {
          console.warn(`value cannot be made reactive: ${String(target)}`);
          return target;
      }
      let observed = toProxy.get(target);
      if (observed !== void 0) {
          return observed;
      }
      if (toRaw.has(target)) {
          return target;
      }
      observed = new Proxy(target, handler);
      toProxy.set(target, observed);
      toRaw.set(observed, target);
      return observed;
  }

  exports.ITERATE_KEY = ITERATE_KEY;
  exports.effect = effect;
  exports.reactive = reactive;

  return exports;

}({}));
