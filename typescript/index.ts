/**
 * 巧用联合类型 <Dinner 要么有fish 要么有bear>
 */
type Dinner =
  | {
      fish: number
    }
  | {
      bear: number
    }
const dinner: Dinner = { fish: 2 }

/**
 * 巧用查找类型+泛型+keyof
 */
interface API {
  '/user': { name: string }
  '/menu': { foods: string }
}
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then(res => res.json())
}
get('/user').then(user => user.name)

function getObjKey<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}

/**
 * 巧用 DeepReadonly
 */
type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }
const a = { foo: { bar: 123 } }
const b = a as DeepReadonly<typeof a>
// b.foo = 321  // Error !!

/**
 * 巧用Record类型
 */
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

/**
 * 巧用ClassOf <传入类本身，而不是类的实例>
 */
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

/**
 * is
 * koa 的错误处理流程，以下是对 error 进行集中处理，
 * 并且标识 code 的过程
 */
interface IKoa {
  use: Function
}
const app: IKoa = { use: function() {} }
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    let code = 'BAD_REQUEST'
    if (err.isAxiosError) {
      code = `Axios-${err.code}`
    }
    //  else if (err instanceof Sequelize.BaseError) {
    // }
    ctx.body = {
      code
    }
  }
})
/**
 *  在 err.code 处，会编译出错，提示 Property 'code' does not exist on type 'Error'.ts(2339)。
    此时可以使用 as AxiosError 或者 as any 来避免报错，不过强制类型转换也不够友好
    if ((err as AxiosError).isAxiosError) {
      code = `Axios-${(err as AxiosError).code}`
    }

    此时可以使用 is 来判定值的类型
    function isAxiosError (error: any): error is AxiosError {
      return error.isAxiosError
    }

    if (isAxiosError(err)) {
      code = `Axios-${err.code}`
    }
 */
