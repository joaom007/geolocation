if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/sw.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

function appendLocation(location, verb) {
    verb = verb || 'actual';
    let newLocation = document.getElementById('pLocation');
    newLocation.innerHTML = 'You\'re ' + verb + ':<br/> Lat = ' + location.coords.latitude + ', Lon = ' + location.coords.longitude + '';

    let newLocationMap = document.getElementById('locationOn');
    newLocationMap.src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29329.604239799035!2d' + location.coords.longitude + '!3d' + location.coords.latitude + '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1598361176620!5m2!1spt-BR!2sbr';

}

if ('geolocation' in navigator) {
    document.getElementById('locationBtn').addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition((location) => {
            appendLocation(location, 'find');
        });
    });
} else {
    let newLocation = document.getElementById('pLocation');
    newLocation.innerHTML = 'Geolocation isn\'t suported';
}