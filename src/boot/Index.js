import config from './Configure';
import app from './Setup';

export default function () {
  const stores = config();
  return app(stores);
}
