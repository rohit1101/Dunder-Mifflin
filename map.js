
function initMap() {
    const loc = { lat: 39.952583, lng: -75.165222}

    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
    const marker = new google.maps.Marker({position: loc, map:map})
}