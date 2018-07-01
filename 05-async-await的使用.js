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


async function test () {
  const r1 = await readFileByPath(__dirname + '/files/1.txt')
  const r2 = await readFileByPath(__dirname + '/files/2.txt')
  const r3 = await readFileByPath(__dirname + '/files/3.txt')
  console.log(r1)
  console.log(r2)
  console.log(r3)
}
test()





