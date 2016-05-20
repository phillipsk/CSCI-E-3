window.onload = function() {
    var inputForm = document.getElementById('inputForm');
    var zipCode   = document.getElementById('zipCode');
    var error     = document.getElementById('error');
    var mapDiv    = document.getElementById('mapDiv');

    function buildMap(location, address) {
        // Google Maps API: https://developers.google.com/maps/
        var myLatlng = new google.maps.LatLng(location.lat, location.lng);

        var mapOptions = {
            zoom: 10,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'marker'
        });

        var infowindow = new google.maps.InfoWindow({
            content: "<b>" + address + "</b>"
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });

        mapDiv.style.visibility = 'visible';
    }

    function getLatLng(zipCodeVal) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET","http://maps.googleapis.com/maps/api/geocode/json?address="+zipCodeVal,true);
        xhr.send();

        xhr.onreadystatechange=function() {
            if (this.readyState == 4 && this.status == 200) {
                var results  = JSON.parse(this.response).results[0];
                var location = results.geometry.location;

                if (location.lat && location.lng) {
                    buildMap(location, results.formatted_address);
                }
            }
        }
    }

    function processFormSubmit(evt) {
        evt.preventDefault();
        var zipCodeVal = zipCode.value;

        if (zipCodeVal == '') {
            mapDiv.style.visibility = 'hidden';
            error.style.visibility  = 'visible';
        } else {
            error.style.visibility  = 'hidden';
            zipCode.value = '';
            getLatLng(zipCodeVal);
        }

        zipCode.focus();
    }

    inputForm.addEventListener('submit', processFormSubmit);
}