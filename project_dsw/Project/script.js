function myFunction() {
    alert("WELCOME TO MAJNU KA TILA");
}

const x = document.getElementById("demo");

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch {
        x.innerHTML = err;
    }
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
const d = new Date();
document.getElementById("demo").innerHTML = d;
menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}
function myFunction() {
    document.getElementById("demo").innerHTML = "order confirmed";
}
function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut();