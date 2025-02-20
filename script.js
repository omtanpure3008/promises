const task1 = (callback) => {
  setTimeout(() => {
    console.log("Task 1 is completed...!!!");
    callback();
  }, 2500);
}

const task2 = (callback) => {
  setTimeout(() => {
    console.log("Task 2 is completed...!!!");
    callback();
  }, 1500);
}

const task3 = (callback) => {
  setTimeout(() => {
    console.log("Task 3 is completed...!!!");
    callback();
  }, 3500);
}

const task4 = () => {
  setTimeout(() => {
    console.log("Task 4 is completed...!!!");
  }, 1000);
}



task1(() => {
  task2(() => {
    task3(() => {
      task4();
    });
  });
});