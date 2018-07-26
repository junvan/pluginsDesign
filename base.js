;(function ($) {
    $.extend({
        fun: {
            getRandomNum: function () {
                var Min = 100000000000;
                var Max = 999999999999;
                var Range = Max - Min;
                var Rand = Math.random();
                return (String(new Date().getTime()) + String(Min + Math.round(Rand * Range)));
            }
        }
    });
})(jQuery);