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

//  ==== 这样使用Promise依然是毁掉地狱
// readFileByPath(__dirname + '/files/1.txt').then((data) => {
//   console.log(data)
//   readFileByPath(__dirname + '/files/2.txt').then((data) => {
//     console.log(data)
//     readFileByPath(__dirname + '/files/3.txt').then((data) => {
//       console.log(data)
//     }, (err) => {
//       console.log(err)
//     })
//   }, (err) => {
//     console.log(err)
//   })
// }, (err) => {
//   console.log(err)
// })


//  Promise解决异步嵌套的问题
readFileByPath(__dirname + '/files/1.txt')
.then(data => {
  console.log(data)
  return readFileByPath(__dirname + '/files/2.txt')
})
.then(data => {
  console.log(data)
  return readFileByPath(__dirname + '/files/3.txt')
})
.then(data => {
  console.log(data)
})

// .catch捕获所有的错误
.catch(err => {
  console.log('执行出错了')
})


