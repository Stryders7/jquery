//  var document : Document
$(document).ready(function () {
console.log("Estamos conectados")
});

// llamar jq
// accediendo al dom
$('h1').html('INTRODUCCION A JQUERY - CAMBIO SELECTOR');
$('#IdTitulo').html('INTRODUCCION A JQUERY - CAMBIO ID');
$('text-center').html('INTRODUCCION A JQUERY - CAMBIO CLASE');

// Agregar o quitar Clase a etiqueta del DOM
$('#IdGlosa').addClass('display-2');
$('#IdGlosa').remove('display-6');

//preappend deja arriba del contenedor lo que agregemos 
// Agregar, quitar etiquets del DOM [append, prepend]
$('#articulos').append('<p>Articulo nuevo agregado al final del contenedor</p>' );
$('#articulos').prepend('<p>Articulo nuevo agregado al final del contenedor</p>' );
$('#parr3').remove();

// Modificar estilos de etiquetas del DOM [ css ]
$('#parr1').css('color', 'Blue');
$('#parr2').css({color: '#fff', background: 'grey'});

// Eventos [ CLICK ]
var vparrafo = $('#resultado p');
$('.btn-success').click(function () { 
    vparrafo.addClass('display-4');
});
$('.btn-danger').click(function () { 
    vparrafo.removeClass('display-4')
    
});

$('.btn-warning').click(function (e) { 
    vparrafo.toggleClass('display-4');
    
});

$('#formulario').submit(function (e) { 
    e.preventDefault();
    console.log("Validando")
    
});

$('#userName').blur(function () { 
    var UserName = $('#userName').val();
    if(UserName =="" || UserName == null){
        $('#userName').addClass('border-danger');
    }else{
        $('#userName').removeClass('border-danger');
    }
});