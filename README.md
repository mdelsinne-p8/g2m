# Formation JavaScript Master G2M P8

Videos:

- OpenLayers- 20 mars 2020 :
https://drive.google.com/file/d/1LVB0KPFt5dnab8IgE-JgYdUOE9mx58f3/view?usp=sharing

- ArcGIS API - 27 mars 2020:
https://drive.google.com/file/d/1QfSwcTr0YbyywKXKRZmLGZJRBuyXRQ6Z/view?usp=sharing

# Examen : 10 avril 2020 (durée 3h)

<h3>Recupérer l'archive suivante :</h3>

- index.html
    - js
        - script.js
    - css
        - style.css
    - data
        - circle-8.png
        - circle-16.png
        - circle-32.png
        - circle-64.png
        - undefined.png

<i>Editer index.html et renseigner votre NOM et prénom</i>

<h4>Contexte : OpenLayers 3</h4>
La carte est composée d'un fond de carte et d'une couche vecteur point :
- osmLayer : OpenStreetMap
- vectorLayer : données sur l'épidémie COVID-19 par région au 5 avril 2020
Projection : WGS84 WebMarcator EPGS 3857

1.  Ajouter une couche de type ArcGIS REST Services (module:ol/source/TileArcGISRest)
    - Url : https://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer
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
    - La case à cocher associée à la couche ArcGIS World Street Map ne dois pas être cochée au démarrage puisque la couche n'est pas visible au démarrage
    - Attention : 
        - il doit toujours y avoir 1 fond de carte visible : c'est à dire que le fait de masquer un fond de carte entraine l'affichage visible de l'autre fond de carte
        - il ne doit y avoir qu'un seul fond de carte visible : c'est à dire que le fait d'afficher un fond de carte entraine l'affichage masqué de l'autre fond de carte
        - utiliser document.getElementById(checkbox).checked = true || false pour indiquer si une case à cocher doit être cochée ou non

4.  Symboliser la couche vecteur point par régions de l'épidémie COVID-19 :
    - Créer les styles correspondants aux images PNG du répertoire 'data'
    - Exploiter le champs <b>Deaths</b> pour construire la symbologie suivante :
        - [0:100[ : symboliser avec l'image 8px <i>circle-8.png</i>
        - [0:200[ : symboliser avec l'image 16px <i>circle-8.png</i>
        - [0:1000[ : symboliser avec l'image 32px <i>circle-8.png</i>
        - [0:infini] : symboliser avec l'image 64px <i>circle-8.png</i>
        - [autres valeurs] :symboliser avec l'image undefined.png

5.  Ajouter l'évènement onclick sur la carte pour afficher une popup dont le contenu affichera le nom de la région en caractères gras et le nombre de décès réferencé
    - attribut <b>Province/State</b> : Nom de la région
    - attribut <b>Death</b> : Nombre de décès
    - Cliquer sur la carte 
