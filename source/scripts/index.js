import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';

let config = {
    DATA_MIN: 'min',
    DATA_MINDEFAULT: 'mindefault',
    DATA_MAX: 'max',
    DATA_MAXDEFAULT: 'maxdefault',
    DATA_STEP: 'step',
    VALUE_MIN: '[data-value-min]',
    VALUE_MAX: '[data-value-max]',
    DATA_SLIDER: 'slider',
    SLIDER: '[data-slider]'
}

class RangeSlider {
    constructor(selector) {
        this.selector = selector;
        this.$slider = $(selector + ' > .slider');
        this.$sliderContainer = $(selector);
        this.min = this.$sliderContainer.data(config.DATA_MIN);
        this.max = this.$sliderContainer.data(config.DATA_MAX);
        this.mindefault = this.$sliderContainer.data(config.DATA_MINDEFAULT);
        this.maxdefault = this.$sliderContainer.data(config.DATA_MAXDEFAULT);
        this.step = this.$sliderContainer.data(config.DATA_STEP);

        this.init();
    }

    getMinValue(){
        return this.$slider.slider('values', 0);
    }

    getMaxValue(){
        return this.$slider.slider('values', 1);
    }

    init() {
        this.$slider.slider({
            range: true,
            min: this.min,
            max: this.max,
            values: [this.mindefault, this.maxdefault],
            step: this.step,
            slide: (event, ui) => {
                this.$sliderContainer.find(config.VALUE_MIN).text(ui.values[0]);
                this.$sliderContainer.find(config.VALUE_MAX).text(ui.values[1]);
            }
        });
        
        this.$sliderContainer.find(config.VALUE_MIN).text(this.$slider.slider("values", 0));
        this.$sliderContainer.find(config.VALUE_MAX).text(this.$slider.slider("values", 1));
    }
}

var priceSlider = new RangeSlider('[data-slider="price"]');
let areaSlider = new RangeSlider('[data-slider="powierzchnia"]');
let roomsSlider = new RangeSlider('[data-slider="pomieszczenia"]');

