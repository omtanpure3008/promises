function task1() {
  let val = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4 seconds are completed...!!!");
      reject({msg: "Promise is rejected", name: "keshav"});
    }, 4000);
  });

  return val;
}


task1()
  .then((a) => {
    console.log(a);
  })
  .catch((b) => {
    console.log(b);
  })


// promise chaining
// task1()
//   .then((a) => {
//     console.log(a.msg);
//     console.log(a.name);
//   })
//   .catch((b) => {
//     console.log(b.msg);
//     console.log(b.name);
//   })
