import { GeoJson, Map, Marker } from 'pigeon-maps';
import { useMap } from '../Map/api/services';
import { styleCallback } from './components/style';

function MapComponent() {
  const { data } = useMap();
  return (
    <Map
      height={920}
      width={1900}
      defaultCenter={[-35.341435845635, -7.73766561306]}
      defaultZoom={4}
    >
      <GeoJson data={data} styleCallback={styleCallback} />
      {data?.features.map((feature, index: number) => (
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
