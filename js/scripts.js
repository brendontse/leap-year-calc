// Front end ui

$(document).ready(function() {
  $('form#leap-year').submit(function(event) {
    event.preventDefault();
    var year = parseInt($('input#year').val());
    var result = leapYear(year);
    $('#result').text(result);
  });
});

/// Back-end Logic

var leapYear = function(y) {
  if (y % 400 === 0) {
    return true;
  } else if (y % 100 === 0) {
    return false;
  } else if (y % 4 === 0) {
    return true;
  } else {
    return false;
  };

};
