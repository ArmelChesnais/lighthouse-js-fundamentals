

function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++){
    var result = "";
    if ( i % multiples[0] === 0) {
      result += words[0];
    }
    if (i % multiples[1] === 0 ) {
      result += words[1];
    }

    if (result === "") {
      result = i;
    }
    console.log(result);
  }
}

//loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);