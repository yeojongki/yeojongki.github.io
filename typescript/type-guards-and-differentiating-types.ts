// 类型守卫与类型区分（Type Guards and Differentiating Types）

interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

// @ts-ignore
function getSmallPet(): Fish | Bird {}

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}

let pet = getSmallPet()
if (isFish(pet)) {
  pet.swim
} else {
  pet.fly
}

/***********************************************************************************/

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
