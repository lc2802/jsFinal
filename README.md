<div class="container my-5 p-4 bg-light shadow-sm rounded">
  <h4 class="text-primary mb-4">Descripción del Proyecto BASEMAP</h4>
  <p class="lead">
    El proyecto BASEMAP está basado en OpenLayers js (OL) para su funcionalidad.
  </p>
  <p>
    Al generar un mapa se generan los objetos correspondientes de OL que son Layers y el objeto .map.
  </p>
  <p>
    Las capas se generan cada vez que se genera una capa, esto produce que se reproyecte la vista y por eso vuelve al zoom inicial.
  </p>
  <p>
    Como se consulta al geoserver de IGN no se usan datos guardados dentro del proyecto, funciona a memoria, esto permite, gracias a OL, desligarse de las consultas FETCH y dedicarse específicamente a la lógica del visualizador.
  </p>
  <p>
    OpenLayers es una librería que tiene muchas funcionalidades, lo que básicamente hace es generar los links de consulta al servidor de una manera fácil y dinámica.
  </p>
  <p>
    Por último, para instalar OpenLayers se usó Node para instalar con npm.
  </p>
  <p>
    Para probar el sistema se debe abrir el archivo "index.html" dentro del navegador.
  </p>
</div>
