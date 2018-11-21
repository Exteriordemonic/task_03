import { RangeSlider } from "./RangeSlider";

let priceSlider = new RangeSlider('[data-slider="price"]', updateTable);
let areaSlider = new RangeSlider('[data-slider="powierzchnia"]', updateTable);
let roomsSlider = new RangeSlider('[data-slider="pomieszczenia"]', updateTable);


$('[data-search-wolne], [data-search-promocja]').change(() => {
    updateTable();
});

updateTable();


function updateTable() {
    $('[data-table-element]').toArray().forEach(e => {
        let flag = false;

        if ($('[data-search-promocja]').prop("checked") === true && $(e).data('discount') !== true) {
            flag = true;
        }

        if ($('[data-search-wolne]').prop("checked") === true && $(e).data('status') !== 'wolne') {
            flag = true;
        }

        if (!(parseInt($(e).data('area').toString()) >= areaSlider.getMinValue() && parseInt($(e).data('area').toString()) <= areaSlider.getMaxValue())) {
            flag = true;
        }

        if (!(parseInt($(e).data('rooms').toString()) >= roomsSlider.getMinValue() && parseInt($(e).data('rooms').toString()) <= roomsSlider.getMaxValue())) {
            flag = true;
        }

        if ($(e).data('discount') === false) {
            if (!(parseInt($(e).data('price').toString()) >= priceSlider.getMinValue() && parseInt($(e).data('price').toString()) <= priceSlider.getMaxValue())) {
                flag = true;
            }
        } else {
            if (!(parseInt($(e).data('discountPrice').toString()) >= priceSlider.getMinValue() && parseInt($(e).data('discountPrice').toString()) <= priceSlider.getMaxValue())) {
                flag = true;
            }
        }
        if (flag) {
            $(e).hide();
        } else {
            $(e).show();
        }
    });
}

