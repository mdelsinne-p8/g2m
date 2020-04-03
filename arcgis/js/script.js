/**
 * Init des variables globales
 */
var view = null;

var basemapGallery = null;
var basemapGalleryVisible = false;

var departements = null;
var regions = null;

/**
 * Startup
 */
require([ // Chargement des modules ESRI
    "esri/Map",
    "esri/views/MapView",
    "esri/views/SceneView",
    "esri/widgets/Legend",
    "esri/widgets/Search",
    "esri/widgets/BasemapGallery",
    "esri/layers/GeoJSONLayer",
    "esri/widgets/ScaleBar"

], function (Map, MapView, SceneView, Legend, Search, BasemapGallery, GeoJSONLayer, ScaleBar) {

    // Objet Map ArcGIS
    var map = new Map({
        basemap: "topo-vector"
    });

    // Carte 2D
    /*view = new MapView({
        container: "viewDiv",
        map: map,
        center: [2.294481, 48.858370], // Paris WGS84
        zoom: 10
    });*/


    // Carte 3D
    var view = new SceneView({
        container: "viewDiv",
        map: map,
        camera: {
          position: {  // observation point
            x: -118.80800,
            y: 33.96100,
            z: 25000 // altitude in meters
          },
          tilt: 65  // perspective in degrees
        }
    });


    // Init du widget de recherche d'adresse
    var search = new Search({
        view: view
    });
    // Ajout du widget à la carte
    view.ui.add(search, "top-right");

    // Init du widget de la bibliothèques des fonds de carte 
    basemapGallery = new BasemapGallery({
        view: view,
        source: {
            portal: {
                url: "https://www.arcgis.com",
                useVectorBasemaps: false  // Load vector tile basemaps
            }
        }
    });

    // Ajout du bouton Afficher/masquer la bibliothèque des fonds de carte
    view.ui.add("btShowBasemapGallery", "top-right");

    // Ajout du logo à la carte
    view.ui.add("logoDiv", "bottom-right");

    // Régions - objet GeoJSONLayer
    regions = new GeoJSONLayer({
        url: "http://localhost/json/regions.geojson",
        renderer: {
            type: "simple",  // autocasts as new SimpleRenderer()
            symbol: {
                type: "simple-fill",  // autocasts as new SimpleFillSymbol()
                color: { a: 0, r: 255, g: 255, b: 255 },
                outline: {  // autocasts as new SimpleLineSymbol()
                    width: 3,
                    color: "black"
                }
            }
        }
    });
    map.add(regions);  // ajout de la couche à la carte

    // Départements - objet GeoJSONLayer
    departements = new GeoJSONLayer({
        url: "http://localhost/json/departements.geojson"
    });
    map.add(departements);  // ajout de la couche à la carte

    // Gestionnaire de couche
    view.ui.add("layers-control", "top-left");


    // Template de la popup
    var template = {
        title: "{nom}",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "code",
                        label: "Code"
                    }
                ]
            }
        ]
    };

    // Activer les popup
    departements.popupTemplate = template;
    regions.popupTemplate = template;

    // Echelle
    var scaleBar = new ScaleBar({
        view: view,
        unit: "metric"
    });
    // Ajout du widget à la carte
    view.ui.add(scaleBar, {
        position: "bottom-left"
    });

    // Légende
    var legend = new Legend({
        view: view,
        layerInfos: [{
            layer: regions,
            title: "Régions"
        },
        {
            layer: departements,
            title: "Département"
        }]
    });
    // Ajout du widget à la carte
    view.ui.add(legend, "top-left");

});

/**
 * Afficher / Masquer les fonds de cartes
 */
function showBasemapGallery() {

    // Si affiché
    if (basemapGalleryVisible) {

        // Retirer le widget de l'affichage
        view.ui.remove(basemapGallery);
        basemapGalleryVisible = false;

    } else {

        // Ajouter le widget
        view.ui.add(basemapGallery, {
            position: "top-right"
        });
        basemapGalleryVisible = true;
    }

};

/**
 * Afficher / Masquer les couches vecteurs
 * @param {booléen} checkbox 
 */
function showLayers(checkbox) {
    if (checkbox.id == "cbDepartements") {
        if (checkbox.checked) {
            departements.visible = true;
        } else {
            departements.visible = false;
        }
    }
    if (checkbox.id == "cbRegions") {
        if (checkbox.checked) {
            regions.visible = true;
        } else {
            regions.visible = false;
        }
    }
}