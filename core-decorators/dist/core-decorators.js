function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function autobindClsx(clsx) {
  var descriptors = Object.getOwnPropertyDescriptors(clsx.prototype);
  var names = Object.getOwnPropertyNames(clsx.prototype);
  names.forEach(function (method) {
    var desc = descriptors[method];

    if (method !== 'constructor') {
      Object.defineProperty(clsx.prototype, method, autobindMethod(clsx.prototype, method, desc));
    }
  });
}
function autobindMethod(target, method, discriptor) {
  var fn = discriptor.value;
  return {
    get: function get() {
      var boundFn = fn.bind(this);
      Object.defineProperty(this, method, {
        value: boundFn
      });
      return boundFn;
    }
  };
}
function autobind() {
  if (arguments.length === 1) {
    return autobindClsx(arguments.length <= 0 ? undefined : arguments[0]);
  } else {
    return autobindMethod.apply(void 0, arguments);
  }
}

var _class;
// class Person {
//   @memoize("anotherMethod")
//   doBigCalcFn() {
//     return 123456789
//   }
//   anotherMethod() {
//     return 666
//   }
// }
// const { doBigCalcFn } = new Person()
// console.log(doBigCalcFn())
// console.log(doBigCalcFn())

/*******************************************************************/
// 2. autobind (class / method)

var Person = autobind(_class = /*#__PURE__*/function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [{
    key: "getInstance",
    // @autobind
    value: function getInstance() {
      return this;
    }
  }, {
    key: "anotherGetInstance",
    value: function anotherGetInstance() {
      return this;
    }
  }]);

  return Person;
}()) || _class;

var person = new Person();
var getInstance = person.getInstance,
    anotherGetInstance = person.anotherGetInstance;
var p1 = getInstance();
var p2 = anotherGetInstance();
console.log(person === p1); // true

console.log(person === p2); // true

console.log(p1 === p2); // true

console.log(person === p1 === p2); // false why?

export default Person;
//# sourceMappingURL=core-decorators.js.map
