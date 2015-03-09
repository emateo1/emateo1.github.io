$(document).ready(function(){
  var my_array = ["one", "one", "two", "two", "three", "three", "four", "four", "five", "five"]
  for(i in my_array){
    $('#card_holder').append('<div class="card"><p>'+my_array[i]+'</p></div>');
  }
  $('.card').click(function(){
    $(this).find('p').css("opacity", 1);
  })
});
