// 巧用联合类型 <Dinner 要么有fish 要么有bear>
type Dinner = {
  fish: number
} | { 
    bear: number 
}
const dinner: Dinner = { fish: 2 }

// 巧用查找类型+泛型+keyof
interface API {
  '/user': { name: string }
  '/menu': { foods: string }
}
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then(res => res.json())
}
get('/user').then(user => user.name)

// 巧用 DeepReadonly
type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }
const a = { foo: { bar: 123 } }
const b = a as DeepReadonly<typeof a>
// b.foo = 321  // Error !!

// 巧用Record类型
type AnimalType = 'cat' | 'dog' | 'frog'
const AnimalMap = {
  cat: { name: '猫' },
  dog: { name: '狗' },
  forg: { name: '蛙' } // 这里frog拼写错误
}
// Record可以保证映射完整
interface AnimalDescription {
  name: string
}
const rightAnimalMap: Record<AnimalType, AnimalDescription> = {
  cat: { name: '猫' },
  dog: { name: '狗' },
  frog: { name: '蛙' }
}

// 巧用ClassOf <传入类本身，而不是类的实例>
abstract class Animal {}
class Cat extends Animal {}

const renderAnimal = (AnimalComponent: Animal) => {
  return AnimalComponent
}
// 上面的代码是错的，因为Animal是实例类型，不是类本身，应该
interface ClassOf<T> {
  new (...args: any[]): T
}
const rightRenderAnimal = (AnimalComponent: ClassOf<Animal>) => {
  return AnimalComponent
}
