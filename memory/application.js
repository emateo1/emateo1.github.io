$(document).ready(function(){
  var my_array = ["one", "one", "two", "two", "three", "three", "four", "four", "five", "five", "six", "six", "seven", "seven", "eight", "eight", "nine", "nine","ten","ten"];
  var first_click = "a";
  var second_click = "a";
  var click_count = 0;
  for(i in my_array){
    $('#card_holder').append('<div class="card"><p>'+my_array[i]+'</p></div>');
  }
  $('.card').click(function(){
    if(click_count == 0){
    $(this).find('p').css("opacity", 1);
    first_click = $(this).find('p').html();
    //$(document).find("#test").append(first_click);
    }
    else {
    $(this).find('p').css("opacity", 1);
    second_click = $(this).find('p').html();
    }
    if (first_click == second){
      find('p').css("opacity", 1);
    }
    else {
    }
  })
});
