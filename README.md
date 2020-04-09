# Formation JavaScript Master G2M P8

Videos:

- OpenLayers- 20 mars 2020 :
https://drive.google.com/file/d/1LVB0KPFt5dnab8IgE-JgYdUOE9mx58f3/view?usp=sharing

- ArcGIS API - 27 mars 2020:
https://drive.google.com/file/d/1QfSwcTr0YbyywKXKRZmLGZJRBuyXRQ6Z/view?usp=sharing

# Examen : 10 avril 2020 (durée 3h)

Recupérer l'archive suivante :

index.html
- js/script.js
- css/style.css
- data/circle-8.png
- data/circle-16.png
- data/circle-32.png
- data/circle-64.png
- data/undefined.png

<i>Ouvrir index.html et renseigner votre NOM et prénom</i>

1.  Ajouter une couche de type ArcGIS REST Services (module:ol/source/TileArcGISRest)
    - url : https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer
    - Au démarrage, ne pas afficher la couche (visible : false)
    - Attention, intercaler la couche entre le fond de carte OpenStreetMap et la couche vecteur

2.  Ajouter des contrôles à la carte (module:ol/control)
    - Slider de zoom (module:ol.control.ZoomSlider)
    - Zoom étendue (module:ol.control.ZoomToExtent) : définir une étendue sur la france métropolitaie
    - Mini-map (module:ol.control.OverviewMap) : définir OpenStreetMap comme fond de carte
    - Échelle (module:ol.control.ScaleLine)

3.  Gérer la visibilité des fonds de carte : OpenStreetMap / ArcGIS World Street Map
    - Ajouter les cases à cocher HTML nécessaires <input type="checkbox" ...>
    - Depuis l'évènement <b>onchange</b> des cases à cocher, appeler une fonction JavaScript permettant de gérer la visibilité des deux fonds de carte
    - La case à cocher ArcGIS World Street Map ne dois pas être cochée au démarrage puisque la couche n'est pas visible au démarrage
    - Attention : 
        - il doit toujours y avoir 1 fond de carte visible : c'est à dire que le fait de masquer un fond de carte entraine l'affichage visible de l'autre fond de carte
        - il ne doit y avoir qu'un seul fond de carte visible : c'est à dire que le fait d'afficher un fond de carte entraine l'affichage masqué de l'autre fond de carte
        - utiliser document.getElementById(checkbox).checked = true || false pour indiquer si une case à cocher doit être cochée ou non

4.

5.
