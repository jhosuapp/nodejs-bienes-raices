const map = (()=>{

    //CONFIG MAP
    const mapConfig = ()=>{

        //LOGICAL OR
        const lat = document.querySelector('#lng').value || 4.6078063;        
        const lng = document.querySelector('#lat').value || -74.1341417;

        const map = L.map('map').setView([lat, lng], 16);
        let marker;
    
        //USER PROVIDER GEOCODER
        const geocodeService = L.esri.Geocoding.geocodeService();
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        //CONFIG PIN
        marker = new L.marker([lat, lng], {
            draggable: true,
            autoPan: true
        }).addTo(map);
    
        //GET LAT AND LNG
        marker.on('moveend', function(e){
            marker = e.target;
            const position = marker.getLatLng();
    
            map.panTo(new L.LatLng(position.lat, position.lng));
            //GET INFO 
            geocodeService.reverse().latlng(position, 13).run(function(err, res){
                const { Address } = res?.address;
                const { lat, lng } = res?.latlng
                marker.bindPopup(res.address?.LongLabel);
                //SET VALUES AND TEXT DINAMIC
                document.querySelector('#set-street').textContent = Address;
                document.querySelector('#street').value = Address;
                document.querySelector('#lat').value = lat;
                document.querySelector('#lng').value = lng;
            });
        });    
    }

    //SET IMAGE FOR FIX ERROR NOT FOUND SOURCE
    const mapSetImage = ()=>{
        const getImageDot = document.querySelector('.leaflet-marker-icon');
        const getImageDotShadow = document.querySelector('.leaflet-marker-shadow');
        getImageDot.src = '/images/svg/location-dot.svg';
        getImageDotShadow.src = '/images/svg/location-dot.svg';
    }

    //RETURN FUNCIONTS WITH GLOBAL SCOPE
    return {
        setHandleEvent: function(){
            try { mapConfig(); } catch (error) { }
            try { mapSetImage(); } catch (error) { }
        }
    }

})();

//EXECUTE GLOBAL FUNCTIONS
window.addEventListener('load', ()=>{
    map.setHandleEvent();
});

