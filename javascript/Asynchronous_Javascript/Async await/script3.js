function randomAsyncFunction() {
    const time = Math.floor(Math.random * 100)
    const x = setTimeout(() => {
      console.log('finished!!')
    },time)
  }
   
   
  async function asyncWithCallback(callback) {
    randomAsyncFunction()
    setTimeout(() => {
      callback()
    },1000)
  }
   
  asyncWithCallback(() => {
    console.log("fsdfsa")
  })
  