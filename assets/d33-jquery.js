const { on } = require("events");

(function ($) {
    $('.d33-featured-collection .sf-slider__controls').change(function() {
        $(this).appendTo( $( ".d33-featured-collection .section__header" ) );
    })
})(jQuery);