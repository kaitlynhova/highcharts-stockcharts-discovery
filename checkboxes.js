var list = ['roll', 'desiredroll', 'pitch', 'desiredpitch'];

for (var i = 0; i < list.length; i++) {
  $('#checkboxes').append('<input id=' + list[i] + ' type="checkbox" name=' + list[i] + '  value=' + list[i] + ' >' + list[i] + ' <br>');
};
