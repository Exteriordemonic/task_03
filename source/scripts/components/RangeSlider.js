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

export class RangeSlider {

    constructor(selector, onChangeCallback) {
        this.selector = selector;
        this.$slider = $(selector + ' > .slider');
        this.$sliderContainer = $(selector);
        this.onchange = onChangeCallback;
        if (typeof onChangeCallback === 'undefined') { 
            this.onchange = () => {}
        }
        this.options = {
            min: this.$sliderContainer.data(config.DATA_MIN),
            max: this.$sliderContainer.data(config.DATA_MAX),
            mindefault: this.$sliderContainer.data(config.DATA_MINDEFAULT),
            maxdefault: this.$sliderContainer.data(config.DATA_MAXDEFAULT),
            step: this.$sliderContainer.data(config.DATA_STEP)
        }
        this.init();
    }

    getMinValue() {
        return this.$slider.slider('values', 0);
    }

    getMaxValue() {
        return this.$slider.slider('values', 1);
    }

    updateValues(ui){
        this.$sliderContainer.find(config.VALUE_MIN).text(ui.values[0]);
        this.$sliderContainer.find(config.VALUE_MAX).text(ui.values[1]);
        this.onchange();
    }

    init() {
        this.$slider.slider({
            range: true,
            min: this.options.min,
            max: this.options.max,
            values: [this.options.mindefault, this.options.maxdefault],
            step: this.options.step,
            change: (event, ui) => {
                this.updateValues(ui);
            },
            slide: (event, ui) => {
                this.updateValues(ui);
            }
        });

        this.$sliderContainer.find(config.VALUE_MIN).text(this.$slider.slider("values", 0));
        this.$sliderContainer.find(config.VALUE_MAX).text(this.$slider.slider("values", 1));
    }
}
