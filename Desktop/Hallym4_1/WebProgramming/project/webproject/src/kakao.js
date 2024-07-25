import React, { useEffect } from 'react';

const { kakao } = window;

function Kakao({lat, lng}){
    
    useEffect(() => {
        const container = document.getElementById(`map-${lat}-${lng}`);
        const options = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 5
        };
        const map = new kakao.maps.Map(container, options);

        const markerPosition  = new kakao.maps.LatLng(lat, lng);

        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);

    }, [lat, lng]);

    return(
        <div id={`map-${lat}-${lng}`} style={{
            width: "400px",
            height: "300px"
        }}></div>
    )
}

export default Kakao;