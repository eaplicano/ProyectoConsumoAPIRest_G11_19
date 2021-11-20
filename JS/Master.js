$(document).ready(function(){
    AgregarMenu();
    AgregarFooter();
});

function AgregarMenu(){
    var menu = document.getElementById("Menu");
    menu.innerHTML = '<header class="header">'+
    '<nav class="navbar navbar-expand-lg navbar-light bg-light">'+
        '<div class="container-fluid">'+
          '<a class="navbar-brand" href="/ProyectoConsumoAPIRest_G11_19/Home.html">'+
            '<img src="https://www.unah.edu.hn/themes/portalunah/assets/images/logo-unah.png" alt="" width="60" height="48">'+
            'Grupo G11_19'+
          '</a>'+
          '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
            '<span class="navbar-toggler-icon"></span>'+
          '</button>'+
          '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
            '<ul class="navbar-nav me-auto mb-2 mb-lg-0">'+
              '<li class="nav-item">'+
                '<a class="nav-link active" aria-current="page" href="/ProyectoConsumoAPIRest_G11_19/Informacion.html">Informacion</a>'+
              '</li>'+
              '<li class="nav-item dropdown">'+
                '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">'+
                  'Consumo APIs Rest'+
                '</a>'+
                '<ul class="dropdown-menu" aria-labelledby="navbarDropdown">'+
                  '<li><a class="dropdown-item" href="/ProyectoConsumoAPIRest_G11_19/Forms/Socios.html">Socios de Negocio</a></li>'+
                  '<li><hr class="dropdown-divider"></li>'+
                  '<li><a class="dropdown-item" href="#"></a></li>'+
                '</ul>'+
              '</li>'+
            '</ul>'+
            '<form class="d-flex">'+
              '<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">'+
              '<button class="btn btn-outline-success" type="submit">Search</button>'+
            '</form>'+
          '</div>'+
        '</div>'+
      '</nav>'+
'</header>'
}

function AgregarFooter(){
    var menu = document.getElementById("Pie");
    menu.innerHTML = '<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">'+
    '<div class="col-md-4 d-flex align-items-center">'+
      '<a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">'+
        '<svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>'+
      '</a>'+
      '<span class="text-muted">&copy; 2021 Company, Inc</span>'+
    '</div>'+

    '<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">'+
      
      '<li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter" /></svg></a></li>'+
      '<li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>'+
      '<li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>'+
    '</ul>'+
  '</footer>'
}