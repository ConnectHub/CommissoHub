const maxCircleSize = 50;

export const styleCallback = (feature: any) => {
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
};
