var list = ['roll', 'desiredroll', 'pitch', 'desiredpitch'];
var index = 0;
for (var i = 0; i < list.length; i++) {
  $('#checkboxes').append('<input id=' + list[i] + ' type="checkbox" name=' + list[i] + '  value=' + index + ' >' + list[i] + ' <br>');
  index = index + 2
};
