const fs = require('fs')

function readFileByPath (fpath, callback) {
  fs.readFile(fpath, 'utf-8', (err, result) => {
    if (err) return callback(err)
    callback(null, result)
  })
}


// =======嵌套行程回调地狱
readFileByPath(__dirname + '/files/1.txt', (err, data1) => {
  if (err) return console.log(err.message)
  console.log(data1)
  readFileByPath(__dirname + '/files/2.txt', (err, data2) => {
    if (err) return console.log(err.message)
    console.log(data2)
    readFileByPath(__dirname + '/files/3.txt', (err, data3) => {
      if (err) return console.log(err.message)
      console.log(data3)
    })
  })
})


