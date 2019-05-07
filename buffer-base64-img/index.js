const fs = require('fs')

// read as buffer
fs.readFile('logo.png', function(err, buffer) {
  if (err) {
    console.error(err)
  }

  // buffer to base64
  const base64Img = buffer.toString('base64')

  // base64 to buffer
  const decodeImg = Buffer.from(base64Img, 'base64')

  fs.writeFile('logo-decode.png', decodeImg, function(err) {
    if (err) {
      console.error(err)
    }
  })
})

// read as base64
fs.readFile('logo.png', 'base64', function(err, base64Img) {
  if (err) {
    console.error(err)
  }

  // base64 to file
  fs.writeFile('logo-decode2.png', base64Img, 'base64', function(err) {
    if (err) {
      console.error(err)
    }
  })
})
