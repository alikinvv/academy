"use strict";

$('body').on('click', '.speakers .btn', function (e) {
  $('.speakers__list.all').slideToggle();
  $(e.currentTarget).remove();
});