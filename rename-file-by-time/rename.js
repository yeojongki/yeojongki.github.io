const fs = require('fs-extra')
const path = require('path')
const sortBy = require('lodash/sortBy')

/**
 * 根据文件创建时间排序重命名
 * 创建时间前的将排在前面
 * @example
 * file1.png -> 1.png
 * file2.txt -> 2.txt
 */
function start(outputPath) {
  if(!fs.pathExistsSync(outputPath))
  fs.mkdirsSync(outputPath)
  const basePath = 'files'
  const resolve = _path => path.resolve(__dirname, basePath, _path)

  const files = fs.readdirSync(basePath)

  const fileObj = {}
  files.forEach(file => {
    const stat = fs.statSync(resolve(file))
    fileObj[file] = {
      ext: path.extname(file),
      name: file,
      path: resolve(file),
      ts: stat.mtimeMs
    }
  })

  const newFiles = []
  Object.keys(fileObj).forEach(file => {
    newFiles.push(fileObj[file])
  })
  const sortArray = sortBy(newFiles, item => item.ts)

  sortArray.forEach((file, index) => {
    const newPath = path.resolve(outputPath, `${index + 1}${file.ext}`)
    fs.copyFile(file.path, newPath)
  })
}

start(path.resolve('./dist'))
