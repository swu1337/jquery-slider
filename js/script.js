$(function() {
    for (var i = 0; i < $('figure').length; i++) {
        $('figure').eq(i).css('z-index', $('figure').length - i);
    }

    $('.next').on('click', function() {
        var active = $('.active');
        var next = active.next();

        if(next.is('figure')) {
            next.addClass('active');
            active.animate({opacity: 0}, 1000).removeClass('active');
        } else {
            $('figure').animate({opacity: 1}, 1000);
            var next = $('figure').first();
            next.addClass('active');
            active.removeClass('active');
        }
    });

    $('.prev').on('click', function() {
        var active = $('.active');
        var prev = active.prev();

        if(prev.is('figure')) {
            prev.addClass('active').animate({opacity: 1}, 1000);
            active.removeClass('active');
        } else {
            //$('figure:not(:last)').animate({opacity: 0}, 1000);
            $('figure:not(:last):not(:first)').css('opacity', 0);
            active.animate({opacity: 0}, 1000);
            var prev = $('figure').last();
            prev.addClass('active');
            active.removeClass('active');
        }
    });
});
