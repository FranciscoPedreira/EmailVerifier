$(document).ready(function(event){

    $( "#validate" ).submit(function( event ) {

        event.preventDefault();

        /*$.getScript("../validateEmailServerSide.js", function(data, textStatus, jqxhr){
         console.log( data ); // Data returned
         console.log( textStatus ); // Success
         console.log( jqxhr.status ); // 200
         console.log( "Load was performed." );
         });*/

        $.getScript( "../validateEmailServerSide.js" )
            .done(function( script, textStatus ) {
                console.log( textStatus );
            })
            .fail(function( jqxhr, settings, exception ) {
                alert("getScript falhou :( " + exception + " settings: " + settings + " Status: " + jqxhr.status);
                $( "div.log" ).text( "Triggered ajaxError handler." );
            });

    });


});

