var fs = require('fs');
var https  = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>html bol gaihaltai</h1>",function(error)  {
        if (error) {
            return console.log(error);
        } else {
            return console.log("yes");
        }
    } )
var dogphotolocation = 'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=740&h=416'    
https.get(dogphotolocation, function(response){
    response.pipe(fs.createWriteStream(__dirname + "/ddd.jpg"));

});