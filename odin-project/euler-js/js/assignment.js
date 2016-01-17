var mult35 = function () {
  var number = document.getElementsByName("p1Num")[0].value;
  var temp = 0;
  var result = document.getElementById("result1");
  for (i = parseInt(number) - 1; i > 0; i--) {
    if(i % 3 === 0 || i % 5 === 0)
      temp += i;
  }
  result.innerHTML = temp;
}

var evenFib = function () {
  var number = document.getElementsByName("p2Num")[0].value;
  var p = 1;
  var p2 = 2;
  var temp = 2;
  var result = document.getElementById("result2");
  for(i = 3; i < number;) {
    p1 = p2;
    p2 = i;
    i = p1 + p2;
    if(i % 2 === 0)
      temp += i;
  }
  result2.innerHTML = temp;
}

var lPFactor = function () {
  var number = document.getElementById("p3Num");

}

var setProb = function (button) {
  //get elements
  var prob1 = document.getElementById("prob-1");
  var prob2 = document.getElementById("prob-2");
  var prob3 = document.getElementById("prob-3");

  //reset ui
  prob1.style.display = "none";
  prob2.style.display = "none";
  prob3.style.display = "none";

  //setup ui
  if(button === 1) {
    prob1.style.display = "block";
  }

  else if(button === 2) {
    prob2.style.display = "block";
  }

  else if(button === 3) {
    prob3.style.display = "block";
  }

}
