/**
 * Created by francisco on 05-02-2015.
 */

var express = require('express');
var router = express.Router();



router.get('/', validateEmail);

function validateEmail(req,res) {
    var kickbox = require('kickbox').client('e3174c5d940118f64619b032447e04d78edcd0d46b26aa57432505003f7b6c1f').kickbox();
    var email = req.query.email;

    //alert("Require is done, proceeding to verification...");

    console.log('In validateEmail. Email is: ' + email);

    kickbox.verify(email, function (err, response) {

        console.log("Verifying...");

        if (err)
            throw err;
        else
        // Let's see some results
            console.log("Success! Here is the response:");
        console.log(response.body);

        res.end('Response from validateEmail: ' + JSON.stringify(response.body));

    });

};

module.exports = router;






