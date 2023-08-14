// import section from '../assets/awards'

function importAll(r) {
  return r.keys().map(r);
}
// Retrieve all image files from the 'images' folder
export const awards = importAll(require.context('../assets/awards', false, /\.(svg)$/));

export const clients = importAll(require.context('../assets/clients', false, /\.(svg)$/));

export const images = importAll(require.context('../assets/xrimages', false, /\.(png)$/));
