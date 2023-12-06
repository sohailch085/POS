       //function isNumberKey(evt)
       //{
       //    var charCode = (evt.which) ? evt.which : evt.keyCode;
       //    if (charCode != 46 && charCode > 31
       //      && (charCode < 48 || charCode > 57))
       //        return false;

       //    return true;
//}


(function ($) {
    $.fn.inputFilter = function (inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };
}(jQuery));


$(".acceptnum").inputFilter(function (value) {
    return /^-?\d*[.,]?\d*$/.test(value);
});