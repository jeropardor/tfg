
// load css --------------------------------------------------------------------

var link = document.createElement( "link" );
link.href = "library/styles.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

$("head")[0].appendChild(link);

// load window -----------------------------------------------------------------


const ui = $('#ui');
console.log(ui);
ui.innerHTML = "ui not loading...";

/* $('ui').load('ui.html', function( response, status, xhr ) {
    if ( status == "error" ) {
      var msg = "Sorry but there was an error: ";
      $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
    }
  }); */


$(document).ready(function()
{
    $.get('./library/ui.html',function(data){
        ui.html(data);
        console.log("test library loaded");
    });
});


// create functions ------------------------------------------------------------


const createShape = (coords, shape, text) => {
    ui.innerHTML = text;
}


