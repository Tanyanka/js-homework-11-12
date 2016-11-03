(function ($) {
    $.fn.slider = function () {
        var $leftArrow = $('.carousel-arrow-left');
        var $rightArrow = $('.carousel-arrow-right');
        var $elList = $('.carousel-list');

        var pixelsOffset = 128;
        var currentLeftValue = 0;
        var elementsCount = $elList.find('li').length;
        var minimumOffset = - ((elementsCount - 5)*pixelsOffset);
        var maximumOffset = 0;

        $leftArrow.click(function () {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 128;
                $elList.animate({left: currentLeftValue + 'px'}, 400);
            }
        });
        $rightArrow.click(function () {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 128;
                $elList.animate({left: currentLeftValue + 'px'}, 400);
            };
        });
        return this;
    }
})(jQuery);
