for (var i = 100; i <= 200; i++){
  var result = "";
  if ( i % 3 === 0) {
    result += "Loopy";
  }
  if (i % 4 === 0 ) {
    result += "Lighthouse";
  }

  if (result === "") {
    result = i;
  }
  console.log(result);
}