(function(){
document.addEventListener( "DOMContentLoaded", function(e){
var canvas = document.querySelector( '#browsers');
var context = canvas.getContext('2d');
var drawBarRect = function(height, color, xCoord){
context.beginPath();

var rectWidth = 50;
var rectHeight = height;
var x= xCoord;
var y = canvas.height - rectHeight;

context.rect(x, y, rectWidth, rectHeight);
context.stroke();
context.fillStyle = color;
context.fill();
};

var drawLegendRect = function(color, y){
context.beginPath();

context.rect(325, y, 25, 25);
context.stroke();
context.fillStyle = color;
context.fill();
};

var chromeEl = document.querySelector( "#chrome" ),
    firefoxEl = document.querySelector( "#firefox" ),
    safariEl = document.querySelector( "#safari"),
    ieEl = document.querySelector( "#ie"),
    otherEl = document.querySelector( "#other"),
    chrome = parseInt( chromeEl.innerHTML, 10),
    firefox = parseInt( firefoxEl.innerHTML, 10),
    safari = parseInt( safariEl.innerHTML, 10 );
    ie = parseInt( ieEl.innerHTML, 10 );
    other = parseInt( otherEl.innerHTML, 10 );

var cHeight = 270,
    fHeight = (firefox*100/chrome)*270/100,
    sHeight = (safari*100/chrome)*270/100,
    iHeight = (ie*100/chrome)*270/100,
    oHeight = (other*100/chrome)*270/100,
    yText   = canvas.height - 3;

drawBarRect(cHeight,'#F6F4DB', 5 );
drawBarRect(fHeight,'#DF9496', 60 );
drawBarRect(sHeight,'#D9E2E1', 115 );
drawBarRect(iHeight,'#92abbb', 170 );
drawBarRect(oHeight,'grey', 225 );
drawLegendRect('#F6F4DB', 100);
drawLegendRect('#DF9496', 135);
drawLegendRect('#D9E2E1', 170);
drawLegendRect('#92abbb', 205);
drawLegendRect('grey', 240);

context.font = '16pt Helvetica';
context.fillStyle = '#616B76';
context.textAlign = 'center';
context.fillText( chrome, 30, yText - cHeight );
context.fillText( firefox, 85, yText - fHeight );
context.fillText( safari, 140, yText - sHeight );
context.fillText( ie, 195, yText - iHeight );
context.fillText( other, 250, yText - oHeight );


context.font = '10pt Helvetica';
context.fillStyle = '#616B76';
context.textAlign = "left";
context.fillText( "Chrome", 360, 113 );
context.fillText( "Firefox", 360, 148);
context.fillText( "Safari", 360, 183 );
context.fillText( "IE", 360, 218 );
context.fillText( "Other", 360, 253 );

});
})();

(function(){
document.addEventListener( "DOMContentLoaded", function(e){
var canvas = document.querySelector( '#devices');
var context = canvas.getContext('2d');
var drawBarRect = function(height, color, xCoord){
context.beginPath();

var rectWidth = 50;
var rectHeight = height;
var x= xCoord;
var y = canvas.height - rectHeight;

context.rect(x, y, rectWidth, rectHeight);
context.stroke();
context.fillStyle = color;
context.fill();
};

var drawLegendRect = function(color, y){
context.beginPath();

context.rect(325, y, 25, 25);
context.stroke();
context.fillStyle = color;
context.fill();
};

var mobileUsersEl = document.querySelector( "#mobile_users" ),
    windowsUsersEl = document.querySelector( "#windows_users" ),
    macUsersEl = document.querySelector( "#mac_users"),
    otherUsersEl = document.querySelector( "#other_users"),
    mobileUsers = parseInt( mobileUsersEl.innerHTML, 10),
    windowsUsers = parseInt( windowsUsersEl.innerHTML, 10),
    macUsers = parseInt( macUsersEl.innerHTML, 10 );
    otherUsers = parseInt( otherUsersEl.innerHTML, 10 );

var mHeight = 270,
    mbHeight = (mobileUsers*100/macUsers)*270/100,
    wHeight = (windowsUsers*100/macUsers)*270/100,
    oHeight = (otherUsers*100/macUsers)*270/100,
    yText   = canvas.height - 3;

drawBarRect(mHeight,'#F6F4DB', 13 );
drawBarRect(mbHeight,'#DF9496', 88 );
drawBarRect(wHeight,'#D9E2E1', 163 );
drawBarRect(oHeight,'grey', 238 );
drawLegendRect('#F6F4DB', 100);
drawLegendRect('#DF9496', 135);
drawLegendRect('#D9E2E1', 170);
drawLegendRect('grey', 205);

context.font = '16pt Helvetica';
context.fillStyle = '#616B76';
context.textAlign = 'center';
context.fillText( macUsers, 38, yText - mHeight );
context.fillText( mobileUsers, 113, yText - mbHeight );
context.fillText( windowsUsers, 188, yText - wHeight );
context.fillText( otherUsers, 263, yText - oHeight );


context.font = '10pt Helvetica';
context.fillStyle = '#616B76';
context.textAlign = "left";
context.fillText( "Mac Users", 360, 113 );
context.fillText( "Mobile Users", 360, 148);
context.fillText( "Windows Users", 360, 183 );
context.fillText( "Other Users", 360, 218 );

});
})();

(function(){
  document.addEventListener( "DOMContentLoaded", function(e){
var canvas = document.querySelector( '#visitors');
var context = canvas.getContext('2d');
var drawBarRect = function(height, color, xCoord){
context.beginPath();

var rectWidth = 50;
var rectHeight = height;
var x= xCoord;
var y = canvas.height - rectHeight;

context.rect(x, y, rectWidth, rectHeight);
context.stroke();
context.fillStyle = color;
context.fill();
};

var drawLegendRect = function(color, y){
context.beginPath();

context.rect(325, y, 25, 25);
context.stroke();
context.fillStyle = color;
context.fill();
};

var amountOfVisitsEl = document.querySelector( "#amountOfVisits" ),
    uniqueVisitsEl = document.querySelector( "#uniqueVisits" ),
    pageviewsEl = document.querySelector( "#pageviews"),
    amountOfVisits = parseInt( amountOfVisitsEl.innerHTML, 10),
    uniqueVisits = parseInt( uniqueVisitsEl.innerHTML, 10),
    pageviews = parseInt( pageviewsEl.innerHTML, 10 );

var pHeight = 270,
    aHeight = (amountOfVisits*100/pageviews)*270/100,
    uHeight = (uniqueVisits*100/pageviews)*270/100,
    yText   = canvas.height - 3;

drawBarRect(aHeight,'#F6F4DB', 25 );
drawBarRect(uHeight,'#DF9496', 125 );
drawBarRect(pHeight,'#D9E2E1', 225 );
drawLegendRect('#F6F4DB', 100);
drawLegendRect('#DF9496', 135);
drawLegendRect('#D9E2E1', 170);

context.font = '16pt Helvetica';
context.fillStyle = '#616B76';
context.textAlign = 'center';
context.fillText( amountOfVisits, 50, yText - aHeight );
context.fillText( uniqueVisits, 150, yText - uHeight );
context.fillText( pageviews, 250, yText - pHeight );

context.font = '10pt Helvetica';
context.fillStyle = '#616B76';
context.textAlign = "left";
context.fillText( "Amount Of Visits", 360, 113 );
context.fillText( "Unique Visits", 360, 148);
context.fillText( "Page Views", 360, 183 );

});
})();


(function(){
  document.addEventListener( "DOMContentLoaded", function(e){
var canvas = document.querySelector( '#bros');
var context = canvas.getContext('2d');
var drawBarRect = function(height, color, xCoord){
context.beginPath();

var rectWidth = 50;
var rectHeight = height;
var x= xCoord;
var y = canvas.height - rectHeight;

context.rect(x, y, rectWidth, rectHeight);
context.stroke();
context.fillStyle = color;
context.fill();
};

var drawLegendRect = function(color, y){
context.beginPath();

context.rect(325, y, 25, 25);
context.stroke();
context.fillStyle = color;
context.fill();
};

var amountOfVisitsEl = document.querySelector( "#amountOfVisits" ),
    uniqueVisitsEl = document.querySelector( "#uniqueVisits" ),
    pageviewsEl = document.querySelector( "#pageviews"),
    amountOfVisits = parseInt( amountOfVisitsEl.innerHTML, 10),
    uniqueVisits = parseInt( uniqueVisitsEl.innerHTML, 10),
    pageviews = parseInt( pageviewsEl.innerHTML, 10 );

var pHeight = 270,
    aHeight = (amountOfVisits*100/pageviews)*270/100,
    uHeight = (uniqueVisits*100/pageviews)*270/100,
    yText   = canvas.height - 3;

drawBarRect(aHeight,'#F6F4DB', 25 );
drawBarRect(uHeight,'#DF9496', 125 );
drawBarRect(pHeight,'#D9E2E1', 225 );
drawLegendRect('#F6F4DB', 100);
drawLegendRect('#DF9496', 135);
drawLegendRect('#D9E2E1', 170);

context.font = '16pt Helvetica';
context.fillStyle = '#616B76';
context.textAlign = 'center';
context.fillText( amountOfVisits, 50, yText - aHeight );
context.fillText( uniqueVisits, 150, yText - uHeight );
context.fillText( pageviews, 250, yText - pHeight );

context.font = '10pt Helvetica';
context.fillStyle = '#616B76';
context.textAlign = "left";
context.fillText( "Amount Of Visits", 360, 113 );
context.fillText( "Unique Visits", 360, 148);
context.fillText( "Page Views", 360, 183 );

});
})();


// Pie Charts

(function(){
document.addEventListener( "DOMContentLoaded" , function( e ){
    var canvas = document.getElementById('referred'),
      context = canvas.getContext('2d');

    var referredUsersEl = document.querySelector( "#referred_users" ), //document.getElementById( "referred" );
      directUsersEl = document.querySelector( "#direct_users" ), //document.getElementById( "direct" );
      referredUsers = parseInt( referredUsersEl.innerHTML, 10 ),
      directUsers = parseInt( directUsersEl.innerHTML, 10 ),
      totalUsers = referredUsers + directUsers;

    var refInRads = (referredUsers/totalUsers) * (Math.PI*2),
      dirInRads = (Math.PI*2) - refInRads;

    var originX = canvas.width/3,
      originY = canvas.height/2,
      radius = canvas.height/2 - 10,
      counterClockwise = false;

    var refInRadsPercent = parseInt((refInRads/(refInRads + dirInRads)) * 100, 10),
      dirInRadsPercent = 100 - refInRadsPercent;

    context.beginPath();
    context.moveTo( originX, originY );
    context.arc( originX, originY, radius, 0, refInRads, counterClockwise );
    context.closePath();
    context.fillStyle = '#F6F4DB';
    context.fill();

    context.beginPath();
    context.moveTo( originX, originY );
    context.arc( originX, originY, radius, refInRads, refInRads + dirInRads, counterClockwise );
    context.closePath();
    context.fillStyle = '#DF9496';
    context.fill();

    context.font = '16pt Helvetica';
    context.fillStyle = '#616B76';
    context.fillText( refInRadsPercent + "%",
                       canvas.width/3 +90,
                       canvas.height/2 +30
                      );
    context.fillText( dirInRadsPercent + "%",
                       canvas.width/3 -60,
                       canvas.height/2 -60
                      );

    var drawLegendRect = function(color, y){
context.beginPath();

context.rect(325, y, 25, 25);
context.stroke();
context.fillStyle = color;
context.fill();
};

drawLegendRect('#F6F4DB', 100);
drawLegendRect('#DF9496', 135);


context.font = '10pt Helvetica';
context.fillStyle = '#616B76';
context.textAlign = "left";
context.fillText( "Referred Users", 360, 113 );
context.fillText( "Direct Users", 360, 148);

  });
})();

