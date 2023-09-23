// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(window).load(function() {
// });

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

var saveButtons = document.querySelectorAll("button.saveBtn");
var textareas = document.querySelectorAll("textarea.description");
saveButtons.forEach((btn, i) => {
  btn.addEventListener("click", function (event) {
    //event.preventDefault();
    const textarea = textareas[i]
    console.log(textarea.value)
    localStorage.setItem(`calendar_item_${i}`, textarea.value)

  });
})

// TODO
function renderSavedCalendarItems() {
  textareas.forEach((textarea, i) => {
    var text = localStorage.getItem(`calendar_item_${i}`);

    if (!text) {
      return;
    }

    textarea.textContent = text;
  });
}
renderSavedCalendarItems()

$(document).ready(function () {
  $('textarea').each(function () {
    var id = parseInt($(this).attr('id'));
    var currentHour = dayjs().hour();
    if (currentHour === id) {
      this.style.backgroundColor = "#ff6961"
    }
    if (currentHour > id) {
      this.style.backgroundColor = "#d3d3d3"
    }
    if (currentHour < id) {
      this.style.backgroundColor = "#77dd77"
    }
  })
})



