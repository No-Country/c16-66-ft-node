/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { UserStore } from '../../StoreGeneral/UsersStore'
import { DoctorStore } from '../../StoreGeneral/DoctorsStore';


const initializeMap = (centerCoordinates) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidmVybzkwMjYiLCJhIjoiY2xzbmEyMXpyMDIzNjJrcGJ6Zm44b3B6eCJ9.pLAc8loQc-pisha9eaGyUg';
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: centerCoordinates,
        zoom: 10,
    });
};

const addHospitalMarkers = (map) => {
    
    const hospitals = [
        { name: 'Hospital Italiano Gascon', coordinates: [-58.424700400, -34.606599600] },
        { name: 'Hospital Velez Sarfield', coordinates: [-58.5075, -34.6253] },
        { name: 'Hospital Local General Nuestra Señora del Carmen', coordinates: [-34.38895, -59.82403] },
        { name: 'Hospital Ramos Mejía', coordinates: [-58.4019, -34.6139] },  
        { name: 'Hospital San Nicolás de Bari', coordinates: [-58.3363, -34.5903] },
        { name: 'Hospital de Niños Pedro de Elizalde', coordinates: [-58.3923, -34.6217] }, 
        { name: 'Hospital Penna', coordinates: [-58.4389, -34.6506] }, 
        { name: 'Hospital J. D. Perón', coordinates: [-59.8667, -26.2] }, 
        { name: 'Hospital José Ramón Vidal', coordinates: [-58.8344, -27.46784] }, 
        { name: 'Hospital Castro Rendón', coordinates: [-68.8278, -38.9489] }, 
        { name: 'Hospital Guillermo Rawson', coordinates: [-68.53639, -31.5375] }, 
        { name: 'Hospital de Pediatría Dr. Fernando Barreyro', coordinates: [-55.89608, -27.36708] },
        { name: 'Hospital San Juan Bautista', coordinates: [-65.78524, -28.46957] },
        { name: 'Hospital de Niños Eva Perón', coordinates: [-65.8965, -28.4693] },
        { name: 'Hospital Perrando', coordinates: [-58.98389, -27.46056] },
        { name: 'Hospital Zonal de Trelew', coordinates: [-65.10228, -43.30016] },
        { name: 'Hospital de Urgencias', coordinates: [-64.1833, -31.4167] },
        { name: 'Hospital Vidal', coordinates: [-58.8344, -27.46784] },
        { name: 'Hospital San Martín', coordinates: [-58.14426, -32.22312] },
        { name: 'Hospital Central de Formosa', coordinates: [-58.17313, -26.18489] },
        { name: 'Hospital Pablo Soria', coordinates: [-65.29712, -24.19457] },
        { name: 'Hospital Lucio Molas', coordinates: [-64.28333, -36.61667] },
        { name: 'Hospital Enrique Vera Barros', coordinates: [-66.85067, -29.41105] },
        { name: 'Hospital Central', coordinates: [-68.82717, -32.89084] },
        { name: 'Hospital de Pediatría Dr. Fernando Barreyro', coordinates: [-55.89608, -27.36708] },
        { name: 'Hospital Horacio Heller', coordinates: [-68.0591, -38.95161] },
        { name: 'Hospital de Área El Bolsón', coordinates: [-62.99668, -40.81345] },
        { name: 'Hospital San Bernardo', coordinates: [-65.41166, -24.7859] },
        { name: 'Hospital Guillermo Rawson', coordinates: [-68.53639, -31.5375] },
        { name: 'Hospital Juan Domingo Perón', coordinates: [-66.33563, -33.29501] },
        { name: 'Hospital Regional Río Gallegos', coordinates: [-69.21813, -51.62261] },
        { name: 'Hospital Dr. José María Cullen', coordinates: [-60.70868, -31.64881] },
        { name: 'Hospital Regional Ramón Carrillo', coordinates: [-64.26149, -27.79511] },
        { name: 'Hospital Dr. Arturo Oñativia', coordinates: [-64.2665, -27.7967] },
        { name: 'Hospital Regional Ushuaia', coordinates: [-68.31591, -54.81084] },
        { name: 'Hospital Centro de Salud', coordinates: [-65.2248, -26.8287] }
        
    ];

    hospitals.forEach(hospital => {
        new mapboxgl.Marker()
            .setLngLat(hospital.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${hospital.name}</h3>`))
            .addTo(map);
    });
};

const Map = () => {
    const {userLogged}=UserStore()
    const {doctorLogged}= DoctorStore()

    useEffect(() => {
       
        let centerCoordinates = [-58.3816, -34.6037];
        let province = '';
        
        if (userLogged && userLogged.province !== null) {
            province = userLogged.province.toUpperCase();
        } else if (doctorLogged && doctorLogged.province !== null) {
            province = doctorLogged.province.toUpperCase();
        }        
            if (province === 'BUENOS AIRES') {
                centerCoordinates = [-58.3816, -34.6037]; 
            } else if (province === 'CATAMARCA') {
                centerCoordinates = [-65.78524, -28.46957]; 
            } else if (province === 'CHACO') {
                centerCoordinates = [-58.98389, -27.46056]; 
            } else if (province === 'CHUBUT') {
                centerCoordinates = [-65.10228, -43.30016]; 
            } else if (province === 'CORDOBA') {
                centerCoordinates = [-64.1833, -31.4167]; 
            } else if (province === 'CORRIENTES') {
                centerCoordinates = [-58.8344, -27.46784]; 
            } else if (province === 'ENTRE RIOS') {
                centerCoordinates = [-58.14426, -32.22312]; 
            } else if (province === 'FORMOSA') {
                centerCoordinates = [-58.17313, -26.18489]; 
            } else if (province === 'JUJUY') {
                centerCoordinates = [-65.29712, -24.19457]; 
            } else if (province === 'LA PAMPA') {
                centerCoordinates = [-64.28333, -36.61667]; 
            } else if (province === 'LA RIOJA') {
                centerCoordinates = [-66.85067, -29.41105]; 
            } else if (province === 'MENDOZA') {
                centerCoordinates = [-68.82717, -32.89084]; 
            } else if (province === 'MISIONES') {
                centerCoordinates = [-55.89608, -27.36708]; 
            } else if (province === 'NEUQUEN') {
                centerCoordinates = [-68.0591, -38.95161]; 
            } else if (province === 'RIO NEGRO') {
                centerCoordinates = [-62.99668, -40.81345]; 
            } else if (province === 'SALTA') {
                centerCoordinates = [-65.41166, -24.7859]; 
            } else if (province === 'SAN JUAN') {
                centerCoordinates = [-68.53639, -31.5375]; 
            } else if (province === 'SAN LUIS') {
                centerCoordinates = [-66.33563, -33.29501]; 
            } else if (province === 'SANTA CRUZ') {
                centerCoordinates = [-69.21813, -51.62261]; 
            } else if (province === 'SANTA FE') {
                centerCoordinates = [-60.70868, -31.64881]; 
            }else if (province === 'SANTIAGO DEL ESTERO') {
                centerCoordinates = [-64.26149, -27.79511]; 
            } else if (province === 'TIERRA DEL FUEGO') {
                centerCoordinates = [-68.31591, -54.81084]; 
            } else if (province === 'TUCUMAN') {
                centerCoordinates = [-65.2226, -26.82414]; 
            } 
        
        
        const map = initializeMap(centerCoordinates);
        addHospitalMarkers(map);

        return () => map.remove();

    }, [userLogged, doctorLogged]);

    return <div id="map" style={{ width: '96%', height: '150px', borderRadius: '10px', marginBottom:'3px' }}></div>;
}

export default Map;
