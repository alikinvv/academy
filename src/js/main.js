$('body').on('click', '.speakers .btn', (e) =>{
    $('.speakers__list.all').slideToggle();
    $(e.currentTarget).remove();
});