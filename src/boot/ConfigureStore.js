import AuthStore from '../store/AuthStore';

export default function () {
  const authStore = new AuthStore();

  return {
    authStore,
  };
}
