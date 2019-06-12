const takeOverError = "THIS_IS_A_TAKEOVER_ERROR";

process.on('uncaughtException', err => {
  console.log('first cb');
  if(err.message===takeOverError) {
    setTimeout(() => {
      console.log("I took the process over");
      throw new Error("I'm a regular error");
    }, 1000);
  } else {
    console.error(err);
 // process.exit();
  }
});

process.on('uncaughtException', err => {
  console.log('second cb');
});

throw new Error(takeOverError);

console.log("I'm never printed. I'm being taken over");
