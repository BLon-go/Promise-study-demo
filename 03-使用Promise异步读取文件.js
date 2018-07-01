// 使用Promise解决异步嵌套，在代码中使用Promise之后，不会减少

const fs = require('fs')

function readFileByPath (fpath) {
  return new Promise((resolve, reject) => {
    fs.readFile(fpath, 'utf-8', (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

//  ==== 这样使用Promise依然读取的的顺序不对
readFileByPath(__dirname + '/files/1.txt').then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})
readFileByPath(__dirname + '/files/2.txt').then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})
readFileByPath(__dirname + '/files/3.txt').then((data) => {
  console.log(data)
}, (err) => {
  console.log(err)
})

