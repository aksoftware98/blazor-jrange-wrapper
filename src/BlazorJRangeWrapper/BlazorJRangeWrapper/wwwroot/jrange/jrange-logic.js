function initializeJrange(min, max) {
    $('.range-slider').jRange({
        from: min,
        to: max,
        step: 1,
        format: '%s',
        width: 300,
        showLabels: false,
        isRange: true
    });
}