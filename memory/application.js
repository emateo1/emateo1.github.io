$(document).ready(function(){
  var my_array = ["one", "one", "two", "two", "three", "three", "four", "four", "five", "five", "six", "six", "seven", "seven", "eight", "eight", "nine", "nine","ten","ten"];
  function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
// These variable are needed to clearly distingue the different section need each function.
  var new_array=shuffle(my_array);
  var first_click = "a";
  var second_click = "a";
  var click_count = 0;
  for(i in my_array){
    $('#card_holder').append('<div class="card"><p>'+my_array[i]+'</p></div>');
  }
  $('.card').click(function(){
    if(click_count == 0){
        // I had to create a if and else to make the the two cards chosen to appear and if its nt the same, it would disappears.
    $(this).find('p').css("opacity", 1);
    $(this).find('p').addClass('clicked');
    first_click = $(this).find('p').html();
    click_count = 1;
    }
    else {
    $(this).find('p').css("opacity", 1);
    $(this).find('p').addClass('clicked');
    second_click = $(this).find('p').html();
    click_count = 0;
      if (first_click == second_click){
        $('.clicked').css("opacity", 1).removeClass('clicked');
      }
      else {
        setTimeout(function(){$('.clicked').css('opacity', '0').removeClass('clicked')}, 500);
        // The timer is necessary to give the player enough time to see the card and disappear also.
      }
      click_count = 0;
    }
    
  })
})
