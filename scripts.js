const wms1 = "https://wms.ign.gob.ar/geoserver/ows";
const wms2 = "https://imagenes.ign.gob.ar/geoserver/coberturas_del_suelo/ows";
const wms3 = "https://wms.ign.gob.ar/geoserver/ign_riesgo/ows"

let mapaBaseHTML = document.getElementById("mapa");
let capaComplementariaHTML = document.querySelectorAll("#capacomp1 input[type='checkbox']");
let map;

function crearMapa(mapa, capasSeleccionadas) {
  if (map) {
    map.setTarget(null);
    map = null; 
  }

  const LAYERS = [];
console.log(mapa)
  const wmsLayerBase = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: wms1,
      params: {
        LAYERS: mapa, 
        FORMAT: "image/png",
        TILED: true, 
        TRANSPARENT: true,
      },
      ratio: 1,
      serverType: "geoserver",
    }),
  });
  LAYERS.push(wmsLayerBase);

  capasSeleccionadas.forEach((capa) => {

    let wmsCapaComplementaria;

    if (capa === "coberturas_del_suelo") {
      wmsCapaComplementaria = wms2;
    }

    else{

      wmsCapaComplementaria=wms3;

    }
    
    const layer = new ol.layer.Tile({
      source: new ol.source.TileWMS({
        url: wmsCapaComplementaria,
        params: {
          LAYERS: capa, 
          FORMAT: "image/png",
          TRANSPARENT: true,
        },
        ratio: 1,
        serverType: "geoserver",
      }),
    });
    LAYERS.push(layer);
  });

  map = new ol.Map({
    target: "map",
    layers: LAYERS,
    view: new ol.View({
      center: ol.proj.fromLonLat([-64, -38]), 
      zoom: 5,
    }),
    controls: [] // Esto desactiva todos los controles

  });
}

mapaBaseHTML.addEventListener("change", function () {
  const mapa = mapaBaseHTML.value; 
  const capasSeleccionadas = Array.from(capaComplementariaHTML)
    .filter((checkbox) => checkbox.checked) 
    .map((checkbox) => checkbox.value); 

  crearMapa(mapa, capasSeleccionadas); 
});

capaComplementariaHTML.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const mapa = mapaBaseHTML.value; 
    const capasSeleccionadas = Array.from(capaComplementariaHTML)
      .filter((checkbox) => checkbox.checked) 
      .map((checkbox) => checkbox.value); 

    crearMapa(mapa, capasSeleccionadas); 
  });
});
