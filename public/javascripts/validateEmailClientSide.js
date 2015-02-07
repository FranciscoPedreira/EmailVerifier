//remap jquery to $
//(function ($) {})(window.jQuery);

$(document).ready(function(event) {

    $("#validate").submit(function (event) {

        event.preventDefault();

        /*$.getScript("../validateEmailServerSide.js", function(data, textStatus, jqxhr){
         console.log( data ); // Data returned
         console.log( textStatus ); // Success
         console.log( jqxhr.status ); // 200
         console.log( "Load was performed." );
         });*/

        alert("ENTREI NO CLIENTSidE");

        // app.js
        var verifyEmail = require('../../validateEmailServerSide');
        verifyEmail();


    });

});
