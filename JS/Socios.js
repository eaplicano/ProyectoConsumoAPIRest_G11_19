var UrlGetSocios = 'http://34.68.196.220:90/G11_19/Socios/controller/sociosnegocio.php?op=GetSocios';
var UrlGetOneSocio = 'http://34.68.196.220:90/G11_19/Socios/controller/sociosnegocio.php?op=GetUno';
var UrlPostSocios = 'http://34.68.196.220:90/G11_19/Socios/controller/sociosnegocio.php?op=InsertSocios';
var UrlPutSocios = 'http://34.68.196.220:90/G11_19/Socios/controller/sociosnegocio.php?op=UpdateSocio';
var UrlDeleteSocios = 'http://34.68.196.220:90/G11_19/Socios/controller/sociosnegocio.php?op=DeleteSocio';

$(document).ready(function(){
    CargarSocios();
});

function CargarSocios(){
    $.ajax({
        url: UrlGetSocios,
        type: 'GET',
        datatype: 'JSON',
        success: function(response){
            var MiItems = response;
            var Valores = '';

            for(i=0; i < MiItems.length; i++){
                Valores+='<tr>'+
                '<td>'+MiItems[i].ID+'</td>'+
                '<td>'+MiItems[i].NOMBRE+'</td>'+
                '<td>'+MiItems[i].RAZON_SOCIAL+'</td>'+
                '<td>'+MiItems[i].DIRECCION+'</td>'+
                '<td>'+MiItems[i].TIPO_SOCIO+'</td>'+
                '<td>'+MiItems[i].CONTACTO+'</td>'+
                '<td>'+MiItems[i].EMAIL+'</td>'+
                '<td>'+MiItems[i].FECHA_CREADO+'</td>'+
                '<td>'+MiItems[i].ESTADO+'</td>'+
                '<td>'+MiItems[i].TELEFONO+'</td>'+
                '<td>'+'<button class="btn btn-warning" onclick="CargarUnSocio('+MiItems[i].ID+')">Editar</button'+'</td>'+
                '<td>'+'<button class="btn btn-danger" onclick="EliminarSocio('+MiItems[i].ID+')">Eliminar</button'+'</td>'+
            '</tr>';
            $('.socios').html(Valores);
            }
        }
    });
}

function AgregarSocio(){
    var datossocio = {
    
        nombre:$('#nombre').val(),
        razonsocial:$('#razonsocial').val(),
        direccion:$('#direccion').val(),
        tipo:$('#tipo').val(),
        contacto:$('#contacto').val(),
        email:$('#email').val(),
        telefono:$('#telefono').val()
    };
    var datossociojson=JSON.stringify(datossocio);

    $.ajax({
        url: UrlPostSocios,
        type: 'POST',
        data: datossociojson,
        datatype: 'JSON',
        contentType:'application/json',
        success: function(response){
            console.log(response);
        }
    });
    alert("Socio Agregado");
}

function CargarUnSocio(idsocio){
    var datossocio = {
        id:idsocio
    };
    var datossociojson = JSON.stringify(datossocio);

    $.ajax({
        url: UrlGetOneSocio,
        type: 'POST',
        data: datossociojson,
        datatype: 'JSON',
        contentType:'application/json',
        success: function(response){
            var MiItems = response;
            $('#nombre').val(MiItems[0].NOMBRE);
            $('#razonsocial').val(MiItems[0].RAZON_SOCIAL);
            $('#direccion').val(MiItems[0].DIRECCION);
            $('#tipo').val(MiItems[0].TIPO_SOCIO);
            $('#contacto').val(MiItems[0].CONTACTO);
            $('#email').val(MiItems[0].EMAIL);
            $('#telefono').val(MiItems[0].TELEFONO);
            $('#estado').val(MiItems[0].ESTADO);
            var btnactualizar = '<input type="submit" id="btn_actualizar" onclick="ActualizarSocio('+MiItems[0].ID+')" value="Actualizar Socio" class="btb btn-success">';
            
            $('.button').html(btnactualizar);
            
        }
    });
}


function ActualizarSocio(idsocio){
    var datossocio = {
        
        id:idsocio,
        nombre:$('#nombre').val(),
        razonsocial:$('#razonsocial').val(),
        direccion:$('#direccion').val(),
        tipo:$('#tipo').val(),
        contacto:$('#contacto').val(),
        email:$('#email').val(),
        telefono:$('#telefono').val(),
        estado:$('#estado').val()
    };
    var datossociojson=JSON.stringify(datossocio);

    $.ajax({
        url: UrlPutSocios,
        type: 'PUT',
        data: datossociojson,
        datatype: 'JSON',
        contentType:'application/json',
        success: function(response){
            console.log(response);
        }
    });
    alert("Socio Actualizado");
}

function EliminarSocio(idsocio){
    var datossocio = {
        id:idsocio
    };
    var datossociojson=JSON.stringify(datossocio);

    $.ajax({
        url: UrlDeleteSocios,
        type: 'DELETE',
        data: datossociojson,
        datatype: 'JSON',
        contentType:'application/json',
        success: function(response){
            console.log(response);
        }
    });
    alert("Socio Eliminado");
    CargarSocios();
}