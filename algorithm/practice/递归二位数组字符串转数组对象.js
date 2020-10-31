const input = [
  ['新闻', '体育', '网球', '国外'],
  ['新闻', '体育', '网球', '国内'],
  ['产品', '互联网', '金融'],
  ['新闻', '房产', '深圳'],
  ['新闻', '房产', '上海'],
  ['新闻', '体育', '羽毛球'],
  ['产品', '互联网', '报销'],
]

// const output = [
//   {
//     name: '新闻',
//     children: [
//       {
//         name: '体育',
//         children: [
//           {
//             name: '网球',
//             children: [
//               {
//                 name: '国外',
//                 children: [],
//               },
//               {
//                 name: '国内',
//                 children: [],
//               },
//             ],
//           },
//           {
//             name: '羽毛球',
//             children: [],
//           },
//         ],
//       },
//       {
//         name: '房产',
//         children: [
//           {
//             name: '深圳',
//             children: [],
//           },
//           {
//             name: '上海',
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: '产品',
//     children: [
//       {
//         name: '互联网',
//         children: [
//           {
//             name: '金融',
//             children: [],
//           },
//           {
//             name: '报销',
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
// ]

const solution = arr => {
  const map = {}
  arr.forEach(subArr => {
    let current = map
    subArr.forEach(item => {
      current = current[item] || (current[item] = {})
    })
  })

  const parser = (ret, target) => {
    Object.keys(target).forEach(key => {
      const children = []
      ret.push({ name: key, children })
      parser(children, target[key])
    })
    return ret
  }

  return parser([], map)
}

const output = solution(input)
