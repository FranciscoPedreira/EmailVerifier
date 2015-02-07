/**
 * Created by francisco on 05-02-2015.
 */

//alert("Starting validation...");


var validateEmail = function () {
    var kickbox = require('kickbox').client('e3174c5d940118f64619b032447e04d78edcd0d46b26aa57432505003f7b6c1f').kickbox();

//alert("Require is done, proceeding to verification...");


    kickbox.verify("pedreira.francisco@gmail.com", function (err, response) {

        alert("Verifying...");

        if (err)
            throw err;
        else
        // Let's see some results
            alert("Success! Here is the response:");
        alert(response.body);
    });

}

module.exports = validateEmail();






