
$(document).ready(function() {

    function nav2() {
        var anchor = window.location.hash;
        var newLink = $(anchor+'-link');
        var newPage = $(anchor+'-page');
        var oldLink = $('.link.selected');
        var oldPage = $('.page.selected');

        oldLink.removeClass('selected');
        oldPage.removeClass('selected');
        newLink.addClass('selected');
        newPage.addClass('selected');
    }

    function nav() {
        if ($(window).scrollTop() > 250) {
            $('html,body').animate({ scrollTop: 0 }, 'fast', function() {
                nav2();
            });
        }
        else {
            nav2();
        }
    }

    nav();
    window.onhashchange = nav;

    $('.nav').waypoint('sticky');

});