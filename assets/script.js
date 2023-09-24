$("body").wrapAll;

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

var saveButtons = document.querySelectorAll("button.saveBtn");
var textareas = document.querySelectorAll("textarea.description");
saveButtons.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    const textarea = textareas[i]
    console.log(textarea.value)
    localStorage.setItem(`calendar_item_${i}`, textarea.value)

  });
})

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



