import stores from './stores'
import app from './setup'

export default function () {
  return app(stores)
}
