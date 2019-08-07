import AuthStore from '../stores/AuthStore';

export default function () {
  const authStore = new AuthStore();

  return {
    authStore,
  };
}
