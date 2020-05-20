// 请实现如下的函数，可以批量请求数据，所有的 URL 地址在 urls 参数中
// 同时可以通过 max 参数控制请求的并发度
// 当所有的请求结束后，需要执行callback回调
// 发请求的函数可以直接使用 fetch

/**
 * 
 * @param {string[]} urls 
 * @param {number} max 
 * @param {Function} callback 
 */
// function sendRequest(urls, max, callback) {}

const fetch = url => new Promise((resolve) => {
  console.log('fetch start', url)
  setTimeout(() => {
    resolve(url)
    console.log('fetch end------------', url)
  }, 1000);
})


/**********************************分割线************************************ */

/**
 * 
 * @param {string[]} urls 
 * @param {number} max 
 * @param {Function} callback 
 */
function sendRequest(urls, max, callback) {
  const pList = []
  const task = (urls) =>
    fetch(urls.shift()).then(() => {
      if (urls.length) {
        return task(urls)
      }
    })

  while (max--) {
    pList.push(task(urls))
  }

  return Promise.all(pList).then(callback)
}

sendRequest(["1", "2", "3", "4", "5", "6", "7"], 2, () => {
  console.log("all request done.")
})
