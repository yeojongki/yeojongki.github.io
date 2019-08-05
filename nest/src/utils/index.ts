import { ValidationError } from 'class-validator';

export function now(time: number = 0): number {
  return parseInt(((Date.now() + time) / 1000).toString());
}

// export function extractError(errs: ValidationError[]) {

//   errs.map(err=> {
//     {
//       [err.property]:
//     }
//   })
// }
