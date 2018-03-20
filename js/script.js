$(document).ready(function() {
    $('.next').on('click', function() {
        var active = $('.active');
        var next = active.next();

        if(next.is('figure')) {
            next.fadeIn().addClass('active').removeAttr("style");
            active.removeClass('active');
        } else {
            var next = $('figure').first();
            next.fadeIn().addClass('active').removeAttr("style");
            active.removeClass('active');
        }
    });

    $('.prev').on('click', function() {
        var active = $('.active');
        var prev = active.prev();

        if(prev.is('figure')) {
            prev.fadeIn().addClass('active').removeAttr("style");
            active.removeClass('active');
        } else {
            var prev = $('figure').last();
            prev.fadeIn().addClass('active').removeAttr("style");
            active.removeClass('active');
        }
    });
});
