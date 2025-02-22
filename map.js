var map;
map = L.map('map').setView([25.0149, 121.5341], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.openstreetmap.org/">OSM</a>',
    maxZoom: 19,
}).addTo(map);

//食物清單

var marker = L.marker([25.0142, 121.5341]).addTo(map)
    .bindPopup('<b>★五星推薦★</b><br>韓天閣<br>韓式餐廳<br><a href="https://foodtw1234.pixnet.net/blog/post/363651435">網站介紹</a>')
    .openPopup();
var restaurantIcon = new L.Icon({
    iconUrl: 'https://i.imgur.com/lElgbKp.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
});
L.marker([25.0142, 121.5341], { icon: restaurantIcon }).addTo(map);

var marker = L.marker([25.0136, 121.5345]).addTo(map)
    .bindPopup('阿二麻辣鹹水雞<br>台式小吃<br><a href="https://www.foodpanda.com.tw/restaurant/d8jz/a-er-ma-la-xian-shui-ji">網站介紹</a>')
var restaurantIcon = new L.Icon({
    iconUrl: 'https://i.imgur.com/lElgbKp.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
});
L.marker([25.0136, 121.5345], { icon: restaurantIcon }).addTo(map);

var marker = L.marker([25.01239, 121.5354]).addTo(map)
    .bindPopup('十杯<br>台式飲料<br><a href="https://www.foodpanda.com.tw/restaurant/d8jz/a-er-ma-la-xian-shui-ji">網站介紹</a>')
var restaurantIcon = new L.Icon({
    iconUrl: 'https://i.imgur.com/fvEm1Xl.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
});
L.marker([25.01239, 121.5354], { icon: restaurantIcon }).addTo(map);

var marker = L.marker([25.01248, 121.53548]).addTo(map)
    .bindPopup('麻煮MiNi麻辣煲<br>台式餐廳<br><a href="https://nash.tw/mazuspicy/">網站介紹</a>')
var restaurantIcon = new L.Icon({
    iconUrl: 'https://i.imgur.com/lElgbKp.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
});
L.marker([25.01248, 121.53548], { icon: restaurantIcon }).addTo(map);

var marker = L.marker([25.01465, 121.53356]).addTo(map)
    .bindPopup('989就愛海鮮粥<br>台式餐廳<br><a href="https://ifoodie.tw/post/63ac4ce377b9e926982dd1c9">網站介紹</a>')
var restaurantIcon = new L.Icon({
    iconUrl: 'https://i.imgur.com/lElgbKp.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
});
L.marker([25.01465, 121.53356], { icon: restaurantIcon }).addTo(map);

var marker = L.marker([25.01371, 121.53404]).addTo(map)
    .bindPopup('轉轉發現義大利麵<br>義式餐廳<br><a href="https://shichia17.blogspot.com/2019/12/Discivery-Italian-Pasta.html">網站介紹</a>')
var restaurantIcon = new L.Icon({
    iconUrl: 'https://i.imgur.com/lElgbKp.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
});
L.marker([25.01371, 121.53404], { icon: restaurantIcon }).addTo(map);

var marker = L.marker([25.01445, 121.53369]).addTo(map)
    .bindPopup('鴉片粉圓<br>台式小吃<br><a href="https://maruko.tw/2019-04-9.html">網站介紹</a>')
var restaurantIcon = new L.Icon({
    iconUrl: 'https://i.imgur.com/C84jDmS.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
});
L.marker([25.01445, 121.53369], { icon: restaurantIcon }).addTo(map);

var marker = L.marker([25.01348, 121.53433]).addTo(map)
    .bindPopup('大茗本位製茶堂<br>台式飲料<br>「仙草嫩奶好喝！」</a>')
var restaurantIcon = new L.Icon({
    iconUrl: 'https://i.imgur.com/fvEm1Xl.png',
    iconSize: [25, 25],
    iconAnchor: [12, 41],
});
L.marker([25.01348, 121.53433], { icon: restaurantIcon }).addTo(map);

const popup = L.popup();

function onMapClick(e) {
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    popup
        .setLatLng(e.latlng)
        .setContent(`${lat},&nbsp;${lng}`)
        .openOn(map);
}
map.on('click', onMapClick);