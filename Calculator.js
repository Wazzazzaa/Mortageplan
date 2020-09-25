function calculate(){
  let x = Number(document.getElementById("loan").value);
  let y = Number(document.getElementById("interest").value)/12/100;
  let z = Number(document.getElementById("years").value)*12;

  let result= x * (y* (1 + y) ** (z)) / (((1 + y ) ** (z ) - 1));
  document.getElementById("result").innerHTML = "Your fixed monthly payment is " + result.toFixed(2) + " €";
}