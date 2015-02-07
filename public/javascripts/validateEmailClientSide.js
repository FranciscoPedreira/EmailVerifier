//remap jquery to $
//(function ($) {})(window.jQuery);

$(document).ready(function(event) {

    $("#validate").submit(function (event) {

        event.preventDefault();

        var email = $('#exampleInputEmail1').val();

        $.ajax({
            url: '/validateEmail',
            data: 'email=' + email,
            success: function(data){
                alert('Result: ' + JSON.stringify(data));
            },
            error:function(error){
                throw error
            }
        });

    });

});
