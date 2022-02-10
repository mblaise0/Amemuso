//------- Accordion  js --------//

jQuery(document).ready(function ($) {
  if (document.getElementById('accordion')) {
    var accordion_1 = new Accordion(document.getElementById('accordion'), {
      collapsible: false,
      slideDuration: 500,
    })
  }
})

$(document).ready(function () {
  $('button').click(function () {
    $('.alert').show()
  })
})
