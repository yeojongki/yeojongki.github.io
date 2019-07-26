// 实现生成某个 DOM 元素的 xpath
// 包括两部分：标签层级和兄弟元素中的顺序
// 例如：

// <body>
//   <ul>
//     <li><span>1</span></li>
//     <li>
//       <span>2</span>
//       <span>3</span>
//       <span id="span_3">4</span>
//     </li>
//   </ul>
// </body>

// xpath('#span_3') // body>ul[0]>li[1]>span[2]

function getXpath($el) {
  let ret = ''

  const getTagName = el => el.tagName.toLowerCase()

  const getSiblingsIndex = el => [...el.parentElement.children].findIndex(item => item === el)

  const generateRet = (el, index) => {
    const tagName = getTagName(el)
    const tagIndex = `${tagName}[${index}]`
    return ret.length ? `${tagIndex}>${ret}` : `${tagIndex}`
  }

  while ($el.parentElement) {
    const index = getSiblingsIndex($el)
    ret = generateRet($el, index)
    $el = $el.parentElement
  }

  if (getTagName($el) === 'html') ret = `html>${ret}`

  return ret
}

getXpath(document.querySelector('#span_3'))
