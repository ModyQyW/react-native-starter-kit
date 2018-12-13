import config from './ConfigureStore';
import app from './Setup';

export default function () {
  const stores = config();
  return app(stores);
}
