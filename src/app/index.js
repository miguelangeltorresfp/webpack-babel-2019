import Photos from './photos';
import './index.css';

const photos = new Photos();

console.log('Changing log');

async function main() {
  console.log('Photos: ', await photos.getPhotos());
}

function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

console.log('isValidJSON: ', isValidJSON('test'));

main();
