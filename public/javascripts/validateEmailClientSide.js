//remap jquery to $
//(function ($) {})(window.jQuery);

$(document).ready(function(event) {

    $("#validate").submit(function (event) {
        var resultSelector = $('div#output p');
        event.preventDefault();

        resultSelector.addClass('alert alert-info');
        resultSelector.html('Checking...')

        var email = $('#exampleInputEmail1').val();

        if(email) {
            $.ajax({
                url: '/validateEmail',
                data: 'email=' + email,
                success: function(data){
                    var response = JSON.parse(data);

                    resultSelector.removeClass();
                    if(response.result === 'valid')
                        resultSelector.addClass('alert alert-info');
                    else
                        resultSelector.addClass('alert alert-danger');

                    resultSelector.html(
                        'Email ' + email + ' is '
                        + response.result
                        + (response.did_you_mean ? '. Did you mean ' + response.did_you_mean + '?': '')
                        + (response.accept_all && response.reason !== 'invalid_domain' ? '. Attention: this mail server accepts all requests!!' : '')
                        + (response.reason === 'invalid_domain' ? '. This domain does not exist!!' : '')
                    );


                },
                error:function(error){
                    throw error
                }
            });
        } else {
            alert('Must supply an email address');
        }


    });

});
