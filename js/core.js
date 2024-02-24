$(document).ready(function () {
    $('nav a').click(function () {
        $('nav a').removeClass("active");
        $(this).addClass("active");
    });
});

$('input').on('input invalid', function() {
    this.setCustomValidity('')
    if (this.validity.valueMissing) {
      this.setCustomValidity("Fill in the field")
    }
    if (this.validity.typeMismatch) {
      this.setCustomValidity("Не соответствует типу")
    }
    if (this.validity.patternMismatch) {
      this.setCustomValidity("Не соответствует паттерну")
    }
})