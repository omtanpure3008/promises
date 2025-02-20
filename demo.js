const task1 = () => {
  let val = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 1 is completed...!!!");
      resolve("Promise 1 Resolved..!!");
    }, 2500);
  })

  return val;
}

const task2 = () => {
  let val = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 2 is completed...!!!");
      resolve("Promise 2 Resolved");
    }, 2500);
  })

  return val;
}

const task3 = () => {
  let val = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 3 is completed...!!!");
      resolve("Promise 3 Resolved");
    }, 2500);
  })

  return val;
}

const task4 = () => {
  let val = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 4 is completed...!!!");
      resolve("Promise 4 Resolved");
    }, 2500);
  })

  return val;
}


// promise chain
task1()
  .then((value) => {
    console.log(value);
    return task2();
  })
  .then((previouslyreturnvalue) => {
    console.log(previouslyreturnvalue);
    return task3();
  })
  .then((a) => {
    console.log(a);
    return task4();
  })
  .then((task4returnvalue) => {
    console.log(task4returnvalue);
  })
  .catch((rejectedvalue) => {
    console.log(rejectedvalue);
  })
