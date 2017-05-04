var countdownGenerator = function (x) {
  var countdown = x;



  return function () {
    //countdown -= 1;
    if (countdown > 0) {
      console.log('T-minus', countdown);
    }
    else if (countdown === 0) {
      console.log('Blast Off!');
    }
    else {
      console.log('Rockets already gone, bub!');
    }
    return countdown -=1;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!