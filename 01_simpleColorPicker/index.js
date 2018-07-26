;(function ($) {
    $.fn.simpleColorPicker = function (options) {
        var __opt, __this, __picker;
        var _options = $.extend({
            version: '1.0.0',
            containerId: '',

        }, options);

        var simpleColorPicker = function (ele, options) {
            this.options = $.extend({}, _options, options);

            __opt = this.options;
            __this = this;
            __picker = ele;
        };

        simpleColorPicker.prototype = {
            create: {},
            init: {}
        };

        if (this.length > 0) {//判断是否存在
            var colorPicker = new simpleColorPicker(this, options);
            colorPicker.create();
            return colorPicker;
        }
    };
})(jQuery);