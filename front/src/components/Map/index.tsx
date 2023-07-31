import { Map, GeoJson, Marker } from 'pigeon-maps';

const geoJsonSample = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [2.0, 48.5] },
      properties: { prop0: 'value0', numPeople: 5 },
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [20.0, 48.5] },
      properties: { prop0: 'value0', prop1: 10.0, numPeople: 10 },
    },
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [25.0, 48.5] },
      properties: { prop0: 'value0', prop1: 10.0, numPeople: 50 },
    },
  ],
};

const maxCircleSize = 50;

function MapComponent() {
  return (
    <Map
      height={920}
      width={1900}
      defaultCenter={[50.879, 4.6997]}
      defaultZoom={4}
    >
      <GeoJson
        data={geoJsonSample}
        styleCallback={(feature: any, hover: any) => {
          if (feature.geometry.type === 'LineString') {
            return { strokeWidth: '1', stroke: 'black' };
          }
          const numPeople = feature.properties.numPeople || 0;
          const radius = Math.min(5 + numPeople * 2, maxCircleSize);
          let transparency = 0;
          let redIntensity = 0;

          if (feature.properties.numPeople <= 10) {
            redIntensity = 1;
            transparency = 0.1;
          }
          if (feature.properties.numPeople <= 20) {
            redIntensity = 5;
            transparency = 0.3;
          }
          if (feature.properties.numPeople >= 30) {
            redIntensity = 10;
            transparency = 0.6;
          }

          return {
            fill: `hsla(${redIntensity}, 100%, 50%, ${transparency})`,
            strokeWidth: '1',
            r: radius,
          };
        }}
      />
      {geoJsonSample.features.map((feature, index) => (
        <Marker
          key={index}
          anchor={[
            feature.geometry.coordinates[1],
            feature.geometry.coordinates[0],
          ]}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '4px',
            }}
          >
            {feature.properties.numPeople} people
          </div>
        </Marker>
      ))}
    </Map>
  );
}

export default MapComponent;
