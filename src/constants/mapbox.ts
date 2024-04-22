const initialViewState = {
  latitude: 45.8,
  longitude: 1.26,
  zoom: 2,
  bearing: 0,
  pitch: 0,
};

const mapSettings = {
  scrollZoom: true,
  boxZoom: true,
  dragRotate: true,
  dragPan: true,
  keyboard: true,
  doubleClickZoom: true,
  touchZoomRotate: true,
  touchPitch: true,
  minZoom: 1,
  maxZoom: 14,
  minPitch: 0,
  maxPitch: 0,
};

export { initialViewState, mapSettings };
