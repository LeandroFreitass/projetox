import * as Location from 'expo-location';

export async function getLocation() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permissão para acessar a localização foi negada!');
    return null;
  }

  let location = await Location.getCurrentPositionAsync({});
  return location;
}

export async function getDetailedAddress(latitude, longitude) {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
    const data = await response.json();
    
    const details = {
      rua: data.address.road || 'Não disponível',
      bairro: data.address.suburb || 'Não disponível',
      cidade: data.address.city || data.address.town || 'Não disponível',
      estado: data.address.state || 'Não disponível',
      numero: data.address.house_number || 'Não disponível'
    };
  
    return details;
  }
  
