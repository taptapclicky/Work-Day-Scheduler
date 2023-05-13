


$(document).ready(function () {

  //Display the current date in the header of the page
  var today = dayjs().format('dddd, MMMM D');
  var showDate = document.getElementById('currentDay');
  showDate.textContent = today;

  //Apply the past, present, or future class to each time block by comparing the id to the current hour
  var currentHour = dayjs().hour();
  //Set each time block to hour integer based on ID
  $('.time-block').each(function() {
    var blockNum = parseInt($(this).attr("id").split("hour")[1]);
    //Compare each time block to current hour and set classes to change background color
    if (blockNum < currentHour) {
      $(this).removeClass('present');
      $(this).removeClass('future');
      $(this).addClass('past');
      $(this).children('.description').addClass('text-light');
    } else if (blockNum === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
  
  //Add a listener for click events on the save button to save the user input in local storage.
  $('.saveBtn').on('click', function() {
    var hourBlock = $(this).parent().attr('id');
    var input = $(this).siblings('.description').val();
    //Save hour id and text input to localStorage
    localStorage.setItem(hourBlock, input);
  })

  //Get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  $('.time-block').each(function() {
    //Get each element hour block ID
    var loadBlock = $(this).attr('id');
    console.log(loadBlock);
    //load corresponding localstorage items based on hour block ID
    var loadContent = localStorage.getItem(loadBlock);
    console.log(loadContent);
    $(this).children('.description').text(loadContent);
  })

});