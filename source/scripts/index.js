require('jquery');
require('jquery-ui-bundle');

class RangeSlider {
    constructor(min, max, mindefault, maxdefault, sliderSelector, minLabelSelector, maxLabelSelector, step) {
        this.min = min;
        this.max = max;
        this.sliderSelector = sliderSelector;
        this.mindefault = mindefault;
        this.maxdefault = maxdefault;
        this.minLabelSelector = minLabelSelector;
        this.maxLabelSelector = maxLabelSelector;
        this.step = step;

        $(this.sliderSelector).slider({
            range: true,
            min: this.min,
            max: this.max,
            values: [this.mindefault, this.maxdefault],
            step: this.step,
            slide: function (event, ui) {
                $(minLabelSelector).text(ui.values[0]);
                $(maxLabelSelector).text(ui.values[1]);
            }
        });
        $(minLabelSelector).text($(sliderSelector).slider("values", 0));
        $(maxLabelSelector).text($(sliderSelector).slider("values", 1));
    }
}


new RangeSlider(25, 160, 25, 120, '.slider-container:nth-child(1) > .slider','.slider-container:nth-child(1) > .slider__value-label > .slider__value-label--min', '.slider-container:nth-child(1) > .slider__value-label > .slider__value-label--max', 1);
new RangeSlider(190000, 350000, 190000, 220000, '.slider-container:nth-child(2) > .slider','.slider-container:nth-child(2) > .slider__value-label > .slider__value-label--min', '.slider-container:nth-child(2) > .slider__value-label > .slider__value-label--max', 10000);
new RangeSlider(1, 4, 1, 3, '.slider-container:nth-child(3) > .slider','.slider-container:nth-child(3) > .slider__value-label > .slider__value-label--min', '.slider-container:nth-child(3) > .slider__value-label > .slider__value-label--max', 1);

