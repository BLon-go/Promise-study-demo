const fs = require('fs')

// 函数封装的原则：1.将函数的执行结果返还出去，让调用者决定，怎么处理；2. 如果函数内部，执行出现了错误，应当将错误的结果，也返还给调用者，让调用者决定怎么处理这个错误的结果；；规定死了，回调函数callback的第一个参数，永远是错误对象，如果没有则为null
function readFileByPath (fpath, callback) {
  fs.readFile(fpath, 'utf-8', (err, result) => {
    if (err) return callback(err)      //throw抛出异常，终止执行
    callback(null, result)
  })
}

// 主程序将一部的读取文件操作放到队列中，执行读取文件操作之前就已经将undefined返回了

// const result = readFileByPath(__dirname + '/files/1.txt')
// console.log(result)   //undefined


// 通过回调函数
readFileByPath(__dirname + '/files/11.txt', function (err, data) {
  if (err) return console.log(err.message)
  console.log(data)
})
