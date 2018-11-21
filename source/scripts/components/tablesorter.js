import 'tablesorter';

$('.search-results__table').tablesorter({
    headerTemplate: '{content}{icon}',
    textExtraction: {
        5: function (node) {
            return $(node).find(".td__price--new").text()
        }
    },
    cssAsc: 'tablesorter-headerAsc',
    cssDesc: 'tablesorter-headerDesc',
    cssNone: 'tablesorter-headerUnSorted',
    cssHeader: 'tablesorter-headerDesc'
});
