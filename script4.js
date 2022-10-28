/*Create function that takes in one argument that is passed through a conditional statement. Return the result as an alert or console.log. Test all of your conditions to make sure you can receive all of your results back. */

function sleepAmount(hours) {
  if (hours < 7) {
    alert("oh no, try to get more sleep!");
  }
  else if (hours > 9) {
    alert("you might be oversleeping...this could be a sign of an underlying problem");
  }
  else {
    alert("perfect! you're getting just the right amount of sleep, keep it up!");
  }
}

// sleepAmount(3); oh no, try to get more sleep!
// sleepAmount(5); oh no, try to get more sleep!
// sleepAmount(7); perfect! you're getting just the right amount of sleep, keep it up!
// sleepAmount(8); perfect! you're getting just the right amount of sleep, keep it up!
// sleepAmount(9); perfect! you're getting just the right amount of sleep, keep it up!
// sleepAmount(12); you might be oversleeping...this might be a sign of an underlying problem
sleepAmount(14); // you might be oversleeping...this might be a sign of an underlying problem
