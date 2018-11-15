require('jquery');
require('jquery-ui-bundle');

class RangeSlider {
    constructor(selector) {
        this.selector = selector;
        this.sliderSelector = $(selector);
        this.min = this.sliderSelector.data("min");
        this.max = this.sliderSelector.data("max");
        this.mindefault = this.sliderSelector.data("mindefault");
        this.maxdefault = this.sliderSelector.data("maxdefault");
        this.step = this.sliderSelector.data("step");

        this.init();
    }

    init() {
        console.log(this.selector)
        let s = this.selector;
        this.sliderSelector.slider({
            range: true,
            min: this.min,
            max: this.max,
            values: [this.mindefault, this.maxdefault],
            step: this.step,
            slide: function (event, ui) {
                $(s).find('[data-value-min]').text(ui.values[0]);
                $(s).find('[data-value-max]').text(ui.values[1]);
            }
        });
        $(this.selector).find('[data-value-min]').text($(this.selector).slider("values", 0));
        $(this.selector).find('[data-value-max]').text($(this.selector).slider("values", 1));
    }
}


new RangeSlider('[data-slider="price"]');
new RangeSlider('[data-slider="powierzchnia"]');
new RangeSlider('[data-slider="pomieszczenia"]');
// new RangeSlider(190000, 350000, 190000, 220000, '.slider-container:nth-child(1) > .slider', '.slider-container:nth-child(2) > ', '.slider-container:nth-child(2) > .slider__value-label > .slider__value-label--max', 10000);
// new RangeSlider(1, 4, 1, 3, '.slider-container:nth-child(3) > .slider', '.slider-container:nth-child(3) > .slider__value-label > .slider__value-label--min', '.slider-container:nth-child(3) > .slider__value-label > .slider__value-label--max', 1);

