var mymap = L.map('mapContainer').setView([47.24125, 39.71110], 17);

var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(mymap);

L.control.mousePosition().addTo(mymap);
L.Control.measureControl().addTo(mymap);


var enter = L.icon({
    iconUrl: 'img/1489532421_SignIn.png',
    iconRetinaUrl: 'img/1489532421_SignIn.png',
    iconSize: [38, 38],
    iconAnchor: [24, 22],
    popupAnchor: [2, -18],
});
var marker = L.marker([47.23906, 39.71070], {icon:enter}).addTo(mymap);
marker.bindPopup("<b>Центральный вход в парк</b>");

var runningMan = L.icon({
    iconUrl: 'img/1489532436_exercise.png',
    iconRetinaUrl: 'img/1489532436_exercise.png',
    iconSize: [38, 38],
    iconAnchor: [20, 13],
    popupAnchor: [5, -10],
});
var marker2 = L.marker([47.24108, 39.71006], {icon:runningMan}).addTo(mymap);
marker2.bindPopup("<b>Манеж ДГТУ</b>");

var footbal = L.icon({
    iconUrl: 'img/1489532444_football.png',
    iconRetinaUrl: 'img/1489703066_tree.png',
    iconSize: [38, 38],
    iconAnchor: [24, 22],
    popupAnchor: [0, -18],
});
var marker3 = L.marker([47.23946, 39.70920], {icon:footbal}).addTo(mymap);
marker3.bindPopup("<b>Футбольное поле</b>");

var tree = L.icon({
    iconUrl: 'img/1489703066_tree.png',
    iconRetinaUrl: 'img/1489703066_tree.png',
    iconSize: [38, 38],
    iconAnchor: [24, 22],
    popupAnchor: [0, -18],
});
var marker4 = L.marker([47.24195, 39.71067], {icon:tree}).addTo(mymap);
marker4.bindPopup("<b>Парковая зона</b>");
