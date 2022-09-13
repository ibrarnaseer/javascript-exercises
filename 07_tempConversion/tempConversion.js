const ftoc = function(degreeF) {
  let degree = (degreeF - 32) / 1.8;
  let result = Math.round(degree * 10) / 10;
  return result
};

const ctof = function(degreeC) {
  let degree = (degreeC * 1.8) + 32;
  let result = Math.round(degree * 10) / 10;
  return result;
};

ftoc(-100);
ctof(-10);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
