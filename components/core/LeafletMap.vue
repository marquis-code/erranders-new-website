<template>
    <div>
      <div ref="map" class="w-full h-96"></div>
      <div class="mt-4 text-center">
        <p>Distance from errander to customer: {{ distance.toFixed(2) }} meters</p>
        <div class="progress-bar-container mt-4">
          <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
          <div class="progress-labels flex justify-between text-sm">
            <span>Order placed</span>
            <span>Processing</span>
            <span>Shipped</span>
            <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
  import 'leaflet-routing-machine';
  
  const map = ref<HTMLDivElement | null>(null);
  const distance = ref(0);
  const progressPercentage = ref(0);
  
  const getLiveLocation = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };
  
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371e3; // Earth radius in meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;
  
    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c; // Distance in meters
  };
  
  onMounted(async () => {
    try {
      const position = await getLiveLocation();
      const userLocation = [position.coords.latitude, position.coords.longitude];
      const initialErranderLocation = [userLocation[0] + 0.01, userLocation[1] + 0.01];  // Initial offset for the errander
      let erranderLocation = [...initialErranderLocation];
  
      if (map.value) {
        const leafletMap = L.map(map.value).setView(userLocation, 13);
  
        // Use OpenStreetMap tile layer for street map view
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(leafletMap);
  
        const userIcon = L.icon({
          iconUrl: 'path/to/user-marker.png',  // Replace with the path to your user marker image
          iconSize: [38, 38],
        });
  
        const erranderIcon = L.icon({
          iconUrl: 'path/to/errander-marker.png',  // Replace with the path to your errander marker image
          iconSize: [38, 38],
        });
  
        const userMarker = L.marker(userLocation, { icon: userIcon }).addTo(leafletMap)
          .bindPopup('You are here')
          .openPopup();
  
        let erranderMarker = L.marker(erranderLocation, { icon: erranderIcon }).addTo(leafletMap)
          .bindPopup('Errander is here')
          .openPopup();
  
        const routingControl = L.Routing.control({
          waypoints: [
            L.latLng(userLocation),
            L.latLng(erranderLocation)
          ],
          routeWhileDragging: true
        }).addTo(leafletMap);
  
        const updateProgress = () => {
          const totalDistance = calculateDistance(
            userLocation[0], userLocation[1],
            initialErranderLocation[0], initialErranderLocation[1]
          );
  
          distance.value = calculateDistance(
            userLocation[0], userLocation[1],
            erranderLocation[0], erranderLocation[1]
          );
  
          progressPercentage.value = ((totalDistance - distance.value) / totalDistance) * 100;
        };
  
        const updateErranderLocation = () => {
          // Simulate errander movement closer to the user
          erranderLocation = [
            erranderLocation[0] - 0.0001,
            erranderLocation[1] - 0.0001
          ];
  
          // Update the errander marker position
          erranderMarker.setLatLng(erranderLocation);
  
          // Update the route
          routingControl.setWaypoints([
            L.latLng(userLocation),
            L.latLng(erranderLocation)
          ]);
  
          // Update the progress
          updateProgress();
        };
  
        // Update errander location every 5 seconds
        setInterval(updateErranderLocation, 5000);
      }
    } catch (error) {
      console.error('Error getting user location:', error);
    }
  });
  </script>
  
  <style scoped>
  /* Tailwind CSS will handle most of the styling, but you can add custom styles if needed */
  .progress-bar-container {
    position: relative;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .progress-bar {
    height: 100%;
    background-color: #4caf50;
    transition: width 0.5s ease-in-out;
  }
  
  .progress-labels {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 8px;
  }
  </style>
  