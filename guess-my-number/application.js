$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var computerNumber= Math.floor(Math.random()*100);
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var userNumber=parseInt($("input").val());
    
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (userNumber ===computerNumber){
      $("#feedback").append("<p>"+value+"</p>"); 
    }
      
    //if the user guessed too high...
    else{
      
    }
      //update the 'feedback' paragraph to tell them to guess lower
      
    //otherwise, the user guessed too low...
    
      //update the 'feedback' paragraph to tell them to guess higher
    
  });
});
