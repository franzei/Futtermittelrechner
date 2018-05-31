var fs = require( 'fs' ); // Filesystem
var express = require( 'express' ); // Server


var app = express();

var server = app.listen(5000,function(){
  console.log( 'Server gestartet. http://localhost:5000' );
});

/*
!!! ACCESS Control Origin Header, wenn Quelle nicht die gleiche ist. */

app.use( function(req, res, next) {
  res.setHeader( 'Access-Control-Allow-Origin', '*' );
  res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST' );
  next(); // nicht vergessen!
});



app.get( '/', function( req, res ) {
  res.sendFile( __dirname + '/kuh.csv' );
});
