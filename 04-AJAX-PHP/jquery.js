
$( "form" ).submit(function( event ) {
  if ( $( "input" ).val().lenght > 2 ) {
    $( "input" ).text( "Validated..." ).show();
    return;
  }
 else{
  $("label#nom").text( "Veuillez rentrer un champs" ).css({'color' : 'red', })
  event.preventDefault()

  $("label#pre").text( "Veuillez rentrer un champs" ).css({'color' : 'red', })
  event.preventDefault()

  $("label#lab").text( "Le mail n'est pas valide gros!" ).css({'color' : 'red', })
  event.preventDefault()
  ;}


});


/*

$("form").css({"font-weight":"bold", color:"black"});

$(document).ready(function(){ 
    $("form").click(function() { 
        $(this).fadeIn("1000");
    });
    
    $("form").click(function() { 
    $(this).fadeOut("1000"); 
   });
});


$('button').on('contextmenu', function (e) {
  event.preventDefault();
 $('button').text( 'droite' );
});

$('button').on('click', function (e) {
  $('button').text( 'gauche' );
});


*/