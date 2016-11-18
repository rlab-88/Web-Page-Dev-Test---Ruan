$(document).ready(function () {
    var scrollTo = 0;
    
    $('body').on('click', ".e-month", function () {
        var activeItem = $('.e-month.active');
        var selectedItem = $(this)

        var activeIndex = $('li').index(activeItem);
        var selectedIndex = $('li').index(selectedItem);

        if (selectedIndex > activeIndex) {
            scrollTo -= selectedItem.position().left - activeItem.position().left;
        } else {
            scrollTo += Math.abs(selectedItem.position().left - activeItem.position().left);
            if (scrollTo >= 0) {
                scrollTo = 0;
            }
        }
        $('ul').css('transform', 'translateX(' + scrollTo + 'px)');
        activeItem.removeClass('active');
        selectedItem.addClass('active');

    });
});