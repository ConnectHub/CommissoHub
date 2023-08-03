import { api } from '../../../api';
import { Location } from '../interfaces';

async function getMapLocations() {
  const { data } = await api.get<Location[]>(
    'vote/map/387237d8-5e7f-46f9-9be4-7dfdf939d828',
  );
  const mapLocations = data.map((location) => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [location.long, location.lat],
    },
    properties: {
      numPeople: location.votes,
    },
  }));
  return {
    features: mapLocations,
  };
}

export function repository() {
  return {
    getMapLocations,
  };
}
