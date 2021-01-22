// JavaScript Document
/* exported over normal navClick*/
function over(x) {
  x.style.filter = "invert(76%) sepia(0%) saturate(576%) hue-rotate(230deg) brightness(96%) contrast(92%)"
}

function normal(x) {
  x.style.filter = "invert(98%) sepia(0%) saturate(9%) hue-rotate(162deg) brightness(90%) contrast(93%)";
}

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll('.hold').forEach(item => {
    item.addEventListener('focusin', event => {
      event.target.style.borderColor = '#66cc33';
      let id = event.target.getAttribute('id');
      let testing = document.getElementById(id);
      var testLabel = testing.labels[0]
      testLabel.classList.add("active");
    })

    item.addEventListener('focusout', (event) => {
      if (event.target.value.length > 0) {
		event.target.style.borderColor = '#66cc33';
      } else {
        event.target.style.borderColor = '#cccccc';
        let id = event.target.getAttribute('id');
        let testing = document.getElementById(id);
        var testLabel = testing.labels[0]
        testLabel.classList.remove("active");
      }
    });
  })

});
