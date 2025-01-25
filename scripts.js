const capabilitiesUrl = 'https://wms.ign.gob.ar/geoserver/gwc/service/wmts?request=GetCapabilities';

fetch(capabilitiesUrl)
  .then(response => response.text())
  .then((capabilitiesText) => {
    const parser = new ol.format.WMTSCapabilities();
    const capabilities = parser.read(capabilitiesText);

    const options = ol.source.WMTS.optionsFromCapabilities(capabilities, {
      layer: 'mapabase_gris', 
      matrixSet: 'EPSG:3857', 
    });

   
    const wmtsLayer = new ol.layer.Tile({
      source: new ol.source.WMTS(options),
    });

    const map = new ol.Map({
      target: 'map',
      layers: [wmtsLayer],
      view: new ol.View({
        center: ol.proj.fromLonLat([-60.7077, -31.6233]), 
        zoom: 14,
      }),
    });
  })
  .catch((error) => {
    console.error('Error al cargar el archivo de capacidades WMTS:', error);
  });