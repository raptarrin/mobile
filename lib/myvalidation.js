

$(function() {
    $.validator.addClassRules({
        req: {
            required: true
        },
        min3: {minlength: 3},
        USphone: {phoneUS: true},
        numbr: {
            required: true,
            integer: true
        }
    });


    $("#flightplan").validate();

})