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
